import { MetaService } from '../../services/meta.service.js';

window.initMeta = async function() {
    const grid = document.getElementById('meta-grid');
    if (!grid) return;

    // Carga inicial desde el servicio
    const itemsCatalog = await MetaService.getCatalog();
    let userProgress = await MetaService.getProgress();

    async function render() {
        grid.innerHTML = '';

        itemsCatalog.forEach(item => {
            const isCompleted = !!userProgress[item.id];
            const card = document.createElement('div');
            
            // Mantenemos tus clases originales y el color azul distintivo de esta sección
            card.className = `boss-card relative bg-card border border-slate-800 p-6 rounded-[2rem] transition-all duration-500 ${isCompleted ? 'defeated' : 'hover:border-slate-600'}`;
            
            card.innerHTML = `
                <div class="flex flex-col lg:flex-row gap-6">
                    <div class="relative flex-shrink-0 flex justify-center items-center bg-slate-900 rounded-3xl p-4 w-full lg:w-32 h-32 border border-slate-800 shadow-inner overflow-hidden">  
                        <img src="assets/icons/${item.img}" 
                             onerror="this.src='assets/icons/grass_block.png'" 
                             class="w-full h-full object-contain group-hover:scale-110 transition-transform ${isCompleted ? '' : 'grayscale opacity-50'}">
                    </div>

                    <div class="flex-1 space-y-4">
                        <div class="flex justify-between items-start">
                            <div>
                                <h3 class="text-xl font-black text-white uppercase tracking-tight">${item.name}</h3>
                                <span class="diff-badge bg-blue-500/20 text-blue-400">
                                    Categoría: ${item.type}
                                </span>
                            </div>
                            <button data-id="${item.id}" class="btn-toggle-meta p-3 rounded-xl transition-all ${isCompleted ? 'bg-blue-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.4)]' : 'bg-slate-800 text-slate-500 hover:text-white'}">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/>
                                </svg>
                            </button>
                        </div>

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[10px]">
                            <div class="bg-black/30 p-2.5 rounded-xl border border-slate-800/50">
                                <p class="text-blue-400 font-black uppercase mb-0.5">Efecto / Beneficio</p>
                                <p class="text-slate-300 font-bold">${item.benefit}</p>
                            </div>
                            <div class="bg-black/30 p-2.5 rounded-xl border border-slate-800/50">
                                <p class="text-purple-400 font-black uppercase mb-0.5">Uso Técnico</p>
                                <p class="text-slate-300 font-bold">${item.utility}</p>
                            </div>
                        </div>

                        <div class="p-3 bg-slate-900/50 rounded-xl border-l-4 border-blue-500/30 tactics-box">
                            <p class="text-[11px] text-slate-400 leading-relaxed">
                                <strong class="text-white uppercase mr-1 italic">Meta-Knowledge:</strong> ${item.strategy}
                            </p>
                        </div>

                        <div class="flex flex-wrap gap-4 pt-2">
                            ${item.steps.map(step => {
                                const stepDone = !!userProgress[step.id];
                                return `
                                    <label class="flex items-center gap-2 cursor-pointer group">
                                        <input type="checkbox" data-id="${step.id}" ${stepDone ? 'checked' : ''} 
                                               class="meta-step-checkbox w-4 h-4 rounded border-slate-700 bg-slate-900 text-blue-500 focus:ring-blue-500 transition-all">
                                        <span class="text-[9px] font-black uppercase tracking-widest ${stepDone ? 'text-white' : 'text-slate-600 group-hover:text-slate-400'}">
                                            ${step.label}
                                        </span>
                                    </label>
                                `;
                            }).join('')}
                        </div>
                    </div>
                </div>
            `;

            grid.appendChild(card);
        });

        attachEvents();
    }

    function attachEvents() {
        // Toggle principal del ítem
        grid.querySelectorAll('.btn-toggle-meta').forEach(btn => {
            btn.onclick = async () => {
                const id = btn.dataset.id;
                userProgress = await MetaService.toggleItem(id);
                render();
                if (window.updatePreparationStatus) window.updatePreparationStatus();
            };
        });

        // Toggle de pasos individuales
        grid.querySelectorAll('.meta-step-checkbox').forEach(chk => {
            chk.onchange = async () => {
                const id = chk.dataset.id;
                userProgress = await MetaService.toggleItem(id);
                render();
            };
        });
    }

    render();
};