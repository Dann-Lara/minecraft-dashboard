import { apiClient } from './api.client.js';

export const FarmService = {
    _cachedProgress: null,

    async getCatalog() {
        return window.AppConfig.farms;
    },

    async getProgress() {
        if (!this._cachedProgress) {
            this._cachedProgress = await apiClient.getCollection('farms');
        }
        return this._cachedProgress;
    },

    /**
     * Toglea el estado de una granja o de un paso
     * @param {string} id - El ID de la granja o del paso
     */
    async toggleItem(id) {
        const progress = await this.getProgress();
        
        if (progress[id]) {
            delete progress[id];
        } else {
            progress[id] = {
                completed: true,
                updatedAt: new Date().toISOString()
            };
        }

        await apiClient.updateCollection('farms', progress);
        return progress;
    }
};