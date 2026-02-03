import { CombinationService } from '../../services/combinations.service.js';

window.initCombinations = async function() {
    const grid = document.getElementById('combinations-grid');
    if (!grid) return;

    // Cargamos los datos iniciales
    const combos = await CombinationService.getCatalog();
    let userProgress = await CombinationService.getProgress();

    // Definimos la función render DENTRO de initCombinations para que acceda a las variables
    async function render() {
        grid.innerHTML = '';

        combos.forEach(combo => {
            // 1. Calculamos pasos completados contando los IDs de los pasos en el progreso
            const completedSteps = combo.ops.filter(op => !!userProgress[`${combo.id}_${op.id}`]);
            
            // 2. Determinar si está Full (Todos los pasos tildados)
            const isFullDone = completedSteps.length === combo.ops.length;
            
            // 3. Determinar si ya tiene la mejora de Netherita
            const isNetherite = !!userProgress[`netherite_${combo.id}`];

            const card = document.createElement('div');
            // Diseño dinámico: Cambia según el estado
            card.className = `combo-card relative border-2 p-6 rounded-[2rem] transition-all duration-500 
                ${isNetherite ? 'border-purple-500/40 bg-purple-500/5 shadow-lg shadow-purple-500/5' : 
                  isFullDone ? 'border-green-500/50 bg-green-500/5 shadow-lg shadow-green-500/5' : 
                  'border-slate-800 bg-card'}`;

            card.innerHTML = `
                <div class="flex items-center gap-6 mb-8 group">
                    <div class="w-14 h-14 bg-slate-900 rounded-2xl border border-slate-700/50 flex items-center justify-center shadow-inner group-hover:border-blue-500/50 transition-all duration-300 relative overflow-hidden">
                        <div class="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <img src="assets/icons/${combo.icon}" 
                             class="w-9 h-9 object-contain mc-pixelated group-hover:scale-110 transition-transform duration-300 relative z-10" 
                             alt="${combo.name}">
                    </div>

                    <div class="flex-1">
                        <div class="flex justify-between items-end mb-2">
                            <h3 class="font-black text-white text-sm uppercase tracking-tighter italic">${combo.name}</h3>
                            <span class="text-[9px] font-mono text-slate-500">${completedSteps.length} / ${combo.ops.length}</span>
                        </div>
                        <div class="w-full bg-slate-800/50 h-2 rounded-full overflow-hidden border border-slate-700/30">
                            <div class="bg-gradient-to-r from-blue-600 to-blue-400 h-full transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(59,130,246,0.5)]" 
                                style="width: ${(completedSteps.length / combo.ops.length) * 100}%">
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-col items-end gap-2 min-w-[100px]">
                        ${isFullDone ? `
                            <div class="flex items-center gap-1.5 px-2 py-1 bg-green-500/10 rounded-lg border border-green-500/20">
                                <div class="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                                <span class="text-[8px] font-black text-green-500 uppercase tracking-widest">Listo</span>
                            </div>
                        ` : ''}

                        ${(isFullDone && combo.canNetherite) ? `
                            <div data-combo="${combo.id}" class="netherite-upgrade-btn flex items-center gap-2 px-2 py-1.5 rounded-lg border cursor-pointer transition-all hover:scale-105
                                ${isNetherite ? 'bg-purple-900/40 border-purple-500/60 shadow-[0_0_10px_rgba(168,85,247,0.3)]' : 'bg-slate-900 border-slate-700'}">
                                <img src="assets/icons/netherite_ingot.png" class="w-4 h-4 mc-pixelated ${isNetherite ? '' : 'grayscale opacity-50'}">
                                <span class="text-[8px] font-black uppercase tracking-tighter ${isNetherite ? 'text-purple-300' : 'text-slate-500'}">Netherita</span>
                                <div class="w-3 h-3 border rounded-sm flex items-center justify-center ${isNetherite ? 'bg-purple-500 border-purple-400' : 'border-slate-600'}">
                                    ${isNetherite ? '<svg class="w-2 h-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 13l4 4L19 7"/></svg>' : ''}
                                </div>
                            </div>
                        ` : ''}
                    </div>
                </div>

                <div class="space-y-4 relative">
                    ${combo.ops.map((op, idx) => {
                        const isStepDone = !!userProgress[`${combo.id}_${op.id}`];
                        const formattedDesc = op.d.replace(' + ', ' <span class="text-blue-500 mx-1">+</span> ');

                        return `
                            <div data-combo="${combo.id}" data-step="${op.id}" 
                                 class="step-item-clickable relative flex items-center gap-4 group cursor-pointer transition-transform active:scale-[0.98]">
                                ${idx < combo.ops.length - 1 ? '<div class="absolute left-[13px] top-8 w-[2px] h-8 bg-slate-800 z-0"></div>' : ''}
                                <div class="w-7 h-7 z-10 rounded-lg border-2 flex items-center justify-center transition-all flex-shrink-0
                                    ${isStepDone ? 'bg-blue-600 border-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.3)]' : 'bg-slate-900 border-slate-700 group-hover:border-slate-500'}">
                                    ${isStepDone ? '<svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 13l4 4L19 7"/></svg>' : `<span class="text-[10px] font-black text-slate-500">${idx + 1}</span>`}
                                </div>
                                <div class="flex-1 flex items-center justify-between p-3 rounded-xl border transition-all h-[44px]
                                    ${isStepDone ? 'bg-blue-500/10 border-blue-500/30' : 'bg-slate-800/30 border-slate-700/50 group-hover:bg-slate-800/60'}">
                                    <span class="text-[10px] font-bold ${isStepDone ? 'text-blue-200' : 'text-slate-400'} uppercase tracking-tight">${formattedDesc}</span>
                                    <span class="text-[8px] font-black ${isStepDone ? 'text-blue-400 border-blue-500/30' : 'text-slate-600 border-slate-700'} bg-black/20 px-2 py-1 rounded border uppercase tracking-widest">${op.tag}</span>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            `;
            grid.appendChild(card);
        });

        attachEvents();
    }

    function attachEvents() {
        grid.querySelectorAll('.step-item-clickable').forEach(el => {
            el.onclick = async () => {
                const { combo, step } = el.dataset;
                userProgress = await CombinationService.toggleStep(combo, step);
                render();
                if (window.updatePreparationStatus) window.updatePreparationStatus();
            };
        });

        grid.querySelectorAll('.netherite-upgrade-btn').forEach(el => {
            el.onclick = async (e) => {
                e.stopPropagation();
                const { combo } = el.dataset;
                userProgress = await CombinationService.toggleNetherite(combo);
                render();
                if (window.updatePreparationStatus) window.updatePreparationStatus();
            };
        });
    }

    // Ejecutar el primer render
    render();
};