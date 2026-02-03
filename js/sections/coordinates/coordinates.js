import { CoordsService } from '../../services/coords.service.js';

window.initCoordinates = async function() {
    // Declaramos el grid al inicio de la función
    const grid = document.getElementById('coords-grid');
    
    if (!grid) {
        console.warn("⏳ Esperando a #coords-grid...");
        return; 
    }

    // Cargamos datos iniciales
    let rawData = await CoordsService.getData();

    // Definimos el render DENTRO de initCoordinates para que vea la variable 'grid'
    const render = () => {
        if (!Array.isArray(rawData)) return;
        
        grid.innerHTML = '';
        
        rawData.forEach((site, sIdx) => {
            const card = document.createElement('div');
            const dimColor = site.dimension === 'nether' ? 'border-t-red-600' : 
                             site.dimension === 'end' ? 'border-t-purple-600' : 
                             'border-t-emerald-500';

            card.className = `bg-card border border-slate-800 border-t-4 ${dimColor} rounded-[2rem] overflow-hidden flex flex-col transition-all hover:border-slate-600`;
            
            card.innerHTML = `
                <div class="p-6 flex-1">
                    <div class="flex justify-between items-start mb-4">
                        <div class="flex items-center gap-4">
                            <div class="w-16 h-16 bg-slate-900 border-2 border-slate-700/50 rounded-2xl flex items-center justify-center relative">
                                <img src="assets/icons/${site.icon || 'map.png'}" class="w-10 h-10 object-contain mc-pixelated">
                            </div>
                            <h3 class="text-white font-black uppercase italic tracking-tighter text-xl">${site.name}</h3>
                        </div>
                        <span class="text-[8px] font-black px-2 py-1 rounded bg-black/40 text-slate-500 border border-slate-800 uppercase">${site.dimension}</span>
                    </div>

                    <div class="space-y-3">
                        ${site.locations.map((loc, lIdx) => `
                            <div class="bg-black/20 p-4 rounded-2xl border border-slate-800/50">
                                <div class="flex justify-between items-center mb-3">
                                    <input type="text" value="${loc.name}" data-sidx="${sIdx}" data-lidx="${lIdx}"
                                        class="input-name bg-transparent text-[10px] font-black text-emerald-500 uppercase outline-none focus:text-white w-full">
                                    <button class="btn-copy text-slate-600 hover:text-emerald-400 ml-2" data-coords="${loc.x} ${loc.y} ${loc.z}">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                    </button>
                                </div>
                                <div class="grid grid-cols-3 gap-2">
                                    ${['x','y','z'].map(axis => `
                                        <div class="bg-slate-900/50 rounded-xl p-2 border border-slate-800 flex flex-col">
                                            <span class="text-[7px] font-bold text-slate-600 uppercase">${axis}</span>
                                            <input type="number" value="${loc[axis]}" data-sidx="${sIdx}" data-lidx="${lIdx}" data-axis="${axis}"
                                                class="input-coord no-spin bg-transparent text-xs font-mono text-white outline-none w-full">
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                    
                    <button data-sidx="${sIdx}" class="btn-add-sub w-full mt-4 py-2 border border-dashed border-slate-800 rounded-xl text-[9px] font-black text-slate-600 hover:text-slate-400 uppercase tracking-widest transition-all">
                        + Añadir Sub-Punto
                    </button>
                </div>
            `;
            grid.appendChild(card);
        });

        attachEvents();
    };

    const attachEvents = () => {
        // Inputs de nombre
        grid.querySelectorAll('.input-name').forEach(input => {
            input.onchange = async () => {
                await CoordsService.updateValue(input.dataset.sidx, input.dataset.lidx, 'name', input.value);
            };
        });

        // Inputs numéricos
        grid.querySelectorAll('.input-coord').forEach(input => {
            input.onchange = async () => {
                const { sidx, lidx, axis } = input.dataset;
                await CoordsService.updateValue(sidx, lidx, axis, input.value);
            };
        });

        // Botón añadir
        grid.querySelectorAll('.btn-add-sub').forEach(btn => {
            btn.onclick = async () => {
                await CoordsService.addSubPoint(btn.dataset.sidx);
                rawData = await CoordsService.getData();
                render();
            };
        });

        // Copiar
        grid.querySelectorAll('.btn-copy').forEach(btn => {
            btn.onclick = () => {
                navigator.clipboard.writeText(btn.dataset.coords);
                const original = btn.innerHTML;
                btn.innerHTML = '<span class="text-[8px] font-black text-emerald-400">OK</span>';
                setTimeout(() => btn.innerHTML = original, 1000);
            };
        });
    };

    render();
};