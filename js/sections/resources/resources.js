import { ResourceService } from '../../services/resources.service.js';

window.initResources = async function() {
    const grid = document.getElementById('resources-grid');
    const totalLabel = document.getElementById('res-total-count');
    const collectedLabel = document.getElementById('res-collected-count');

    if (!grid) return;

    // Carga inicial desde el servicio
    const resources = await ResourceService.getCatalog();
    let userProgress = await ResourceService.getProgress();

    async function render() {
        grid.innerHTML = '';
        let collectedCount = 0;

        resources.forEach(res => {
            // Verificamos si el recurso está en nuestra "BD" de progreso
            const isDone = !!userProgress[res.id];
            if (isDone) collectedCount++;

            const card = document.createElement('div');
            const isLegendary = res.rarity === 'legendary';
            
            // Mantenemos exactamente tus clases y condicionales de diseño
            card.className = `resource-card group relative bg-card border-2 ${isDone ? 'border-green-500/50' : 'border-slate-800'} 
                              p-6 rounded-[2rem] cursor-pointer transition-all duration-300 hover:border-slate-600 
                              ${isLegendary ? 'item-legendary' : ''}`;
            
            card.innerHTML = `
                <div class="relative z-10">
                    <div class="flex justify-between items-start mb-6">
                        <div class="icon-container w-14 h-14 bg-slate-900 border border-slate-700/50 rounded-2xl flex items-center justify-center shadow-inner transition-all duration-500 group-hover:scale-110">
                            <img src="assets/icons/${res.icon}" 
                                class="w-10 h-10 object-contain mc-pixelated" 
                                alt="${res.name}">
                        </div>
                        <div class="status-check ${isDone ? 'text-green-500' : 'text-slate-700'}">
                            <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                        </div>
                    </div>

                    <div class="space-y-2 mb-6">
                        <h3 class="text-xl font-black text-white tracking-tight flex items-center gap-2">
                            ${res.name}
                            ${isLegendary ? '<span class="text-[8px] bg-purple-500/20 text-purple-400 px-2 py-0.5 rounded-full uppercase tracking-tighter">Legendario</span>' : ''}
                        </h3>
                        <div class="inline-flex items-center gap-2 px-3 py-1 bg-black/40 border border-slate-800 rounded-lg">
                            <span class="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
                            <span class="text-xs font-mono ${res.color} font-bold tracking-tight">${res.yLevel}</span>
                        </div>
                    </div>

                    <div class="space-y-3 pt-4 border-t border-slate-800/50">
                        <div class="flex items-start gap-2">
                            <span class="text-accent mt-1">
                                <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"/></svg>
                            </span>
                            <p class="text-xs text-slate-300 font-medium">${res.info}</p>
                        </div>
                        <p class="text-[10px] text-slate-500 italic leading-relaxed pl-5">
                            ${res.tip}
                        </p>
                    </div>
                </div>
            `;

            // Evento de click optimizado con el servicio
            card.onclick = async () => {
                userProgress = await ResourceService.toggleResource(res.id);
                render();
                if (window.updatePreparationStatus) window.updatePreparationStatus();
            };

            grid.appendChild(card);
        });

        // Actualizar contadores
        if(totalLabel) totalLabel.innerText = resources.length;
        if(collectedLabel) collectedLabel.innerText = collectedCount;
    }

    render();
};