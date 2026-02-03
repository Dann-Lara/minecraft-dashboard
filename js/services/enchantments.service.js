import { apiClient } from './api.client.js';

export const EnchantmentService = {
    // Caché local para evitar lecturas innecesarias al Storage
    _cachedProgress: null,

    /**
     * Obtiene el catálogo desde la configuración global
     */
    async getCatalog() {
        return window.AppConfig.enchants; // Proviene de enchants.js
    },

    /**
     * Obtiene solo el progreso del usuario de forma eficiente
     */
    async getProgress() {
        if (!this._cachedProgress) {
            this._cachedProgress = await apiClient.getCollection('enchantments');
        }
        return this._cachedProgress;
    },

    /**
     * Lógica de guardado optimizada (Data Normalizada)
     */
    async toggleEnchantment(id) {
        const progress = await this.getProgress();
        
        if (progress[id]) {
            // Si ya existe, lo "desmarcamos" eliminando la clave (ahorra espacio)
            delete progress[id];
        } else {
            // Si no existe, lo creamos con metadatos
            progress[id] = {
                obtained: true,
                updatedAt: new Date().toISOString()
            };
        }

        await apiClient.updateCollection('enchantments', progress);
        return progress;
    }
};