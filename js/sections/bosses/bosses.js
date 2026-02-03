import { BossService } from '../../services/bosses.service.js';

window.initBosses = async function() {
    const grid = document.getElementById('bosses-grid');
    if (!grid) return;

    // Carga inicial
    const bossesCatalog = await BossService.getCatalog();
    let userProgress = await BossService.getProgress();

    async function render() {
        grid.innerHTML = '';

        bossesCatalog.forEach(boss => {
            const isDefeated = !!userProgress[boss.id];
            const card = document.createElement('div');
            
            // Mantenemos exactamente tus clases originales
            card.className = `boss-card relative bg-card border border-slate-800 p-6 rounded-[2rem] transition-all duration-500 ${isDefeated ? 'defeated' : 'hover:border-slate-600'}`;
            
            card.innerHTML = `
                <div class="flex flex-col lg:flex-row gap-6">
                    <div class="relative flex-shrink-0 flex justify-center items-center bg-slate-900 rounded-3xl p-4 w-full lg:w-32 h-32 border border-slate-800 shadow-inner overflow-hidden">  
                        <img src="assets/icons/${boss.img}"
                             onerror="this.style.display='none'; this.nextElementSibling.style.display='block'"
                             class="boss-img w-full h-full object-contain ${isDefeated ? 'grayscale-0' : 'grayscale opacity-50'}">
                        <div class="hidden text-4xl">👾</div>
                        
                        <span class="absolute top-2 left-2 w-6 h-6 bg-accent text-black font-black flex items-center justify-center rounded-lg text-[10px]">
                            #${boss.order}
                        </span>
                    </div>

                    <div class="flex-1 space-y-4">
                        <div class="flex justify-between items-start">
                            <div>
                                <h3 class="text-xl font-black text-white uppercase tracking-tight">${boss.name}</h3>
                                <span class="diff-badge ${boss.diff === 'Pesadilla' ? 'bg-red-500/20 text-red-500' : 'bg-accent/20 text-accent'}">
                                    Nivel: ${boss.diff}
                                </span>
                            </div>
                            <button data-id="${boss.id}" class="btn-toggle-boss p-3 rounded-xl transition-all ${isDefeated ? 'bg-green-500 text-white shadow-[0_0_15px_rgba(16,185,129,0.4)]' : 'bg-slate-800 text-slate-500 hover:text-white'}">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/>
                                </svg>
                            </button>
                        </div>

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[10px]">
                            <div class="bg-black/30 p-2.5 rounded-xl border border-slate-800/50">
                                <p class="text-accent/70 font-black uppercase mb-0.5">Ubicación</p>
                                <p class="text-slate-300 font-bold">${boss.summon}</p>
                            </div>
                            <div class="bg-black/30 p-2.5 rounded-xl border border-slate-800/50">
                                <p class="text-purple-400 font-black uppercase mb-0.5">Kit Requerido</p>
                                <p class="text-slate-300 font-bold">${boss.gear.join(', ')}</p>
                            </div>
                        </div>

                        <div class="p-3 bg-slate-900/50 rounded-xl border-l-4 border-accent/30 tactics-box">
                            <p class="text-[11px] text-slate-400 leading-relaxed">
                                <strong class="text-white uppercase mr-1">Estrategia:</strong> ${boss.strategy}
                            </p>
                        </div>

                        <div class="flex flex-wrap gap-4 pt-2">
                            ${boss.loot.map(item => {
                                const hasLoot = !!userProgress[item.id];
                                return `
                                    <label class="flex items-center gap-2 cursor-pointer group">
                                        <input type="checkbox" data-id="${item.id}" ${hasLoot ? 'checked' : ''} 
                                               class="loot-checkbox w-4 h-4 rounded border-slate-700 bg-slate-900 text-accent focus:ring-accent transition-all">
                                        <span class="text-[9px] font-black uppercase tracking-widest ${hasLoot ? 'text-white' : 'text-slate-600 group-hover:text-slate-400'}">
                                            ${item.label}
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
        // Botón principal del Boss
        grid.querySelectorAll('.btn-toggle-boss').forEach(btn => {
            btn.onclick = async () => {
                const id = btn.dataset.id;
                userProgress = await BossService.toggleItem(id);
                render();
                if (window.updatePreparationStatus) window.updatePreparationStatus();
            };
        });

        // Checkboxes de Loot
        grid.querySelectorAll('.loot-checkbox').forEach(chk => {
            chk.onchange = async () => {
                const id = chk.dataset.id;
                userProgress = await BossService.toggleItem(id);
                render();
            };
        });
    }

    render();
};