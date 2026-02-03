import { CoordsService } from '../../services/coords.service.js';
import { apiClient } from '../../services/api.client.js';

window.initHome = async function() {
    const config = window.AppConfig;
    if (!config) return;

    const updateUI = (prefix, current, total) => {
        const percent = total > 0 ? Math.round((current / total) * 100) : 0;
        const elTotal = document.getElementById(`home-${prefix}-total`);
        const elPerc = document.getElementById(`home-${prefix}-percent`);
        const elBar = document.getElementById(`home-${prefix}-bar`);

        if (elTotal) elTotal.innerText = `${current}/${total}`;
        if (elPerc) elPerc.innerText = `${percent}%`;
        if (elBar) elBar.style.width = `${percent}%`;
    };

    const updateStats = async () => {
        const [farmsDb, enchantsDb, combosDb, bossesDb, metaDb, potDb, resDb] = await Promise.all([
            apiClient.getCollection('farms'),
            apiClient.getCollection('enchantments'),
            apiClient.getCollection('combinations'),
            apiClient.getCollection('bosses'),
            apiClient.getCollection('meta'),
            apiClient.getCollection('potions'),
            apiClient.getCollection('resources')
        ]);

        // Coordenadas
        try {
            const coords = await CoordsService.getData();
            const activeSite = [...coords].reverse().find(s => s.locations.some(l => l.x !== 0 || l.z !== 0));
            if (activeSite) {
                const lastLoc = activeSite.locations[activeSite.locations.length - 1];
                const elName = document.getElementById('home-base-name');
                const elCoords = document.getElementById('home-base-coords');
                const elImg = document.getElementById('home-base-img');
                if (elName) elName.innerText = activeSite.name;
                if (elCoords) elCoords.innerText = `${lastLoc.x} / ${lastLoc.y} / ${lastLoc.z}`;
                if (elImg) {
                    elImg.src = `assets/icons/${activeSite.icon || 'map.png'}`;
                    elImg.alt = activeSite.name;
                }
            }
        } catch (e) { console.error(e); }

        // Arsenal - Calculamos basado en pasos completados para ser consistentes
        const combosDone = config.combinations.filter(combo => {
            const completedSteps = combo.ops.filter(op => !!combosDb[`${combo.id}_${op.id}`]);
            return completedSteps.length === combo.ops.length;
        }).length;
        
        updateUI('weapons', combosDone, config.combinations.length);
        updateUI('farms', config.farms.filter(f => !!farmsDb[f.id]).length, config.farms.length);
        const allEnchants = config.enchants.flatMap(cat => cat.books);
        updateUI('ench', allEnchants.filter(e => !!enchantsDb[e.id]).length, allEnchants.length);
        updateUI('res', config.resources.filter(r => !!resDb[r.id]).length, config.resources.length);
        updateUI('pot', config.potions.filter(p => !!potDb[p.id]).length, config.potions.length);
        updateUI('boss', config.bosses.filter(b => !!bossesDb[b.id]).length, config.bosses.length);
        updateUI('meta', config.underrated.filter(m => !!metaDb[m.id]).length, config.underrated.length);

        // Llamamos a la preparación pasando la DB de recursos para los iconos
        window.updatePreparationStatus();
    };

    window.updatePreparationStatus = async function() {
        const [enchDb, combosDb, potDb, bossDb, farmsDb, metaDb, resDb] = await Promise.all([
            apiClient.getCollection('enchantments'),
            apiClient.getCollection('combinations'),
            apiClient.getCollection('potions'),
            apiClient.getCollection('bosses'),
            apiClient.getCollection('farms'),
            apiClient.getCollection('meta'),
            apiClient.getCollection('resources')
        ]);
    
        const getRatio = (list, db) => {
            if (!list || list.length === 0) return 0;
            return list.filter(item => !!db[item.id]).length / list.length;
        };
    
        // Ratio de Arsenal corregido para detectar "terminados"
        const combosDoneCount = config.combinations.filter(combo => {
            const steps = combo.ops.filter(op => !!combosDb[`${combo.id}_${op.id}`]);
            return steps.length === combo.ops.length;
        }).length;

        const arsenalRatio = config.combinations.length > 0 ? combosDoneCount / config.combinations.length : 0;

        const getNetheriteBonus = (list, db) => {
            // 1. Filtramos solo los que pueden ser Netherita según el AppConfig
            const upgradable = list.filter(item => item.canNetherite);
            if (upgradable.length === 0) return 0;
            
            // 2. IMPORTANTE: Revisamos si en el objeto 'db' existe la propiedad 'netherite_ID' y es true
            const done = upgradable.filter(item => {
                // Forzamos la comprobación del booleano
                return db[`netherite_${item.id}`] === true;
            }).length;
        
            return done / upgradable.length;
        };
        
        // 3. Aplicamos el puntaje (Asegúrate de que esta línea esté así)
        const netheriteScore = getNetheriteBonus(config.combinations, combosDb) * 0.60;
    
        const crit = (getRatio(config.enchants.flatMap(c => c.books), enchDb) * 0.15) +
                     (arsenalRatio * 0.50) +
                     (getRatio(config.potions, potDb) * 0.15) +
                     (getRatio(config.bosses, bossDb) * 0.20);
    
        const coords = await CoordsService.getData();
        const hasRealProgress = coords.some(s => s.locations.some(l => l.x !== 0 || l.z !== 0));
        const coordScore = hasRealProgress ? 0.10 : 0;
    
        const mast = (getRatio(config.farms, farmsDb) * 0.30) + 
             (getRatio(config.underrated, metaDb) * 0.05) +
             (getRatio(config.resources, resDb) * 0.05) + 
             coordScore +
             netheriteScore; // Este es el 10% adicional

        // IMPORTANTE: Pasamos resDb a updateReadyUI
        updateReadyUI(Math.round(crit * 100), Math.round(mast * 100), resDb);
    };

    // Ahora recibe resDb para evitar el ReferenceError
    const updateReadyUI = (crit, mast, resDb) => {
        const barCrit = document.getElementById('bar-crit');
        const barMast = document.getElementById('bar-mast');
        const percCrit = document.getElementById('percent-crit');
        const percMast = document.getElementById('percent-mast');
        const statusText = document.getElementById('home-ready-status');
        const targetText = document.getElementById('home-ready-target');
    
        if (barCrit) barCrit.style.width = `${crit}%`;
        if (barMast) barMast.style.width = `${mast}%`;
        if (percCrit) percCrit.innerText = `${crit}%`;
        if (percMast) percMast.innerText = `${mast}%`;
    
        if (statusText && targetText) {
            if (crit >= 90) {
                statusText.innerText = "Imparable";
                statusText.className = "text-xs font-black text-emerald-400 uppercase italic animate-pulse";
                targetText.innerText = "Listo para el Warden";
            } else if (crit >= 60) {
                statusText.innerText = "Preparado";
                statusText.className = "text-xs font-black text-blue-400 uppercase italic";
                targetText.innerText = "Objetivo: Wither / Dragon";
            } else if (crit >= 30) {
                statusText.innerText = "En Progreso";
                statusText.className = "text-xs font-black text-yellow-500 uppercase italic";
                targetText.innerText = "Faltan Encantamientos";
            } else {
                statusText.innerText = "Vulnerable";
                statusText.className = "text-xs font-black text-red-500 uppercase italic";
                targetText.innerText = "Sin Arsenal Base";
            }
        }

        const resContainer = document.getElementById('home-res-icons-container');
        if (resContainer && resDb) {
            resContainer.innerHTML = config.resources
                .filter(r => !!resDb[r.id])
                .map(r => `<img src="assets/icons/${r.icon}" class="w-6 h-6 mc-pixelated opacity-80" title="${r.name}">`)
                .join('');
        }
    };

    // Funciones de mantenimiento (export, import, reset) omitidas para brevedad pero se mantienen igual...
    window.exportProgress = () => { /* ... igual ... */ };
    window.importProgress = () => { /* ... igual ... */ };
    window.resetSystem = () => { /* ... igual ... */ };

    await updateStats();
};