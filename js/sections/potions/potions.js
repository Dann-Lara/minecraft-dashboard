import { PotionService } from '../../services/potions.service.js';

window.initPotions = async function() {
    const grid = document.getElementById('potions-grid');
    if (!grid) return;

    // Wiki de obtención de ingredientes (Se mantiene local al componente)
    const ingredientWiki = {
        'Rara': 'Botella con agua + Verruga del Nether en el soporte de pociones.',
        'Crema de Magma': 'Crafteo: Bola de Slime + Polvo de Blaze. O cazando Cubos de Magma en el Nether.',
        'Polvo de Blaze': 'Crafteo: Vara de Blaze (obtenida al matar Blazes en fortalezas).',
        'Piedra Luminosa': 'Polvo de Glowstone obtenido al picar bloques de luz en el techo del Nether.',
        'Azúcar': 'Crafteo: Se obtiene directamente de la Caña de Azúcar en la mesa.',
        'Zanahoria Dorada': 'Crafteo: 1 Zanahoria rodeada de 8 Pepitas de Oro.',
        'Pez Globo': 'Se obtiene pescando o matando peces globo en océanos cálidos.',
        'Caparazón Tortuga': 'Crafteo: 5 Escamas de tortuga (caen cuando las crías de tortuga crecen).',
        'Ojo Fermentado': 'Crafteo: Ojo de araña + Hongo marrón + Azúcar.',
        'Lágrima de Ghast': 'Drop raro al matar un Ghast. Intenta matarlos sobre suelo firme.',
        'Redstone': 'Se obtiene picando mineral de Redstone en las profundidades (Y: -58).',
        'Sandía Reluciente': 'Crafteo: 1 Rodaja de Sandía + 8 Pepitas de Oro.'
    };

    // Carga inicial desde el servicio
    const potionsCatalog = await PotionService.getCatalog();
    let userProgress = await PotionService.getProgress();

    async function render() {
        grid.innerHTML = '';

        potionsCatalog.forEach(pot => {
            const isDone = !!userProgress[pot.id];
            const card = document.createElement('div');
            
            // Tus clases originales
            card.className = `potion-card group relative bg-card border border-slate-800 p-6 rounded-3xl transition-all duration-300 hover:bg-slate-800/50 ${isDone ? 'active ring-1 ring-green-500/50' : ''}`;
            card.dataset.type = pot.type;

            // Construcción de la ruta de ingredientes (Tu lógica intacta)
            const recipeSteps = ['Rara', ...pot.recipe];
            const recipeHtml = recipeSteps.map((ing, idx) => `
                <div class="ingredient-tag inline-block">
                    <span class="hover:text-white transition-colors cursor-help border-b border-dotted border-slate-600">${ing}</span>
                    <div class="tooltip-box">
                        <span class="block text-accent font-black text-[9px] uppercase mb-1 tracking-tighter">¿Cómo se consigue?</span>
                        ${ingredientWiki[ing] || 'Ingrediente básico.'}
                    </div>
                    ${idx < recipeSteps.length - 1 ? '<span class="mx-1.5 opacity-20 text-slate-400">→</span>' : ''}
                </div>
            `).join('');

            card.innerHTML = `
                <div class="flex items-center gap-5">
                    <div data-id="${pot.id}" class="btn-toggle potion-icon cursor-pointer w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center text-2xl border border-slate-700/50 ${pot.color} shadow-inner">
                         <img src="assets/icons/${pot.icon}" 
                            class="w-9 h-9 object-contain mc-pixelated group-hover:scale-110 transition-transform duration-300 relative z-10" 
                            alt="${pot.name}">
                    </div>
                    <div class="flex-1">
                        <div class="flex justify-between items-center mb-1">
                            <h3 class="font-black text-white uppercase tracking-tighter text-sm">${pot.name}</h3>
                            <div data-id="${pot.id}" class="btn-toggle cursor-pointer w-4 h-4 rounded-full border-2 ${isDone ? 'bg-green-500 border-green-400 shadow-[0_0_10px_rgba(34,197,94,0.5)]' : 'border-slate-700'}"></div>
                        </div>
                        <div class="recipe-path flex flex-wrap text-[10px] font-mono font-bold text-slate-500 uppercase">
                            ${recipeHtml}
                        </div>
                    </div>
                </div>
                <div class="mt-5 pt-4 border-t border-slate-800/50 flex flex-col gap-1">
                    <span class="text-[9px] font-black text-slate-600 uppercase tracking-widest">Efecto Activo</span>
                    <p class="text-[11px] text-slate-400 font-medium leading-tight">${pot.effect}</p>
                </div>
            `;

            grid.appendChild(card);
        });

        attachEvents();
    }

    function attachEvents() {
        // Asignamos el click a los elementos marcados con la clase btn-toggle
        grid.querySelectorAll('.btn-toggle').forEach(el => {
            el.onclick = async (e) => {
                e.stopPropagation(); // Evitamos duplicados si el click es en el icono y el padre
                const id = el.dataset.id;
                userProgress = await PotionService.togglePotion(id);
                render();
                if (window.updatePreparationStatus) window.updatePreparationStatus();
            };
        });
    }

    render();
};