// Asegúrate de importar Storage si lo tienes en otro archivo
// import { Storage } from '../core/storage.js'; 

export const apiClient = {
    /**
     * Trae una colección completa. Maneja tipos (Array para coords, Object para el resto)
     */
    async getCollection(collection) {
        const data = localStorage.getItem(`db_${collection}`);
        if (!data) {
            return collection === 'coordinates' ? [] : {};
        }
        return JSON.parse(data);
    },

    /**
     * Guarda la colección completa con simulación de latencia
     */
    async updateCollection(collection, data) {
        console.log(`[API] Guardando en colección: ${collection}`, data);
        await new Promise(resolve => setTimeout(resolve, 150));
        localStorage.setItem(`db_${collection}`, JSON.stringify(data));
        return { success: true };
    },

    /**
     * Exporta solo las colecciones del sistema (evita basura de otros proyectos en localhost)
     */
    exportAll() {
        const fullData = {};
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            // Filtramos por nuestro prefijo db_ o mc_
            if (key.startsWith('db_') || key.startsWith('mc_')) {
                fullData[key] = localStorage.getItem(key);
            }
        }
        return JSON.stringify(fullData, null, 2);
    },

    /**
     * Sobreescribe el storage con nuevos datos
     */
    importAll(jsonString) {
        try {
            const data = JSON.parse(jsonString);
            localStorage.clear();
            Object.keys(data).forEach(key => {
                localStorage.setItem(key, data[key]);
            });
            return true;
        } catch (e) {
            console.error("Error crítico en importación:", e);
            return false;
        }
    }
};

