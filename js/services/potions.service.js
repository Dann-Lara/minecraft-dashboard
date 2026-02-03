import { apiClient } from './api.client.js';

export const PotionService = {
    _cachedProgress: null,

    async getCatalog() {
        return window.AppConfig.potions;
    },

    async getProgress() {
        if (!this._cachedProgress) {
            this._cachedProgress = await apiClient.getCollection('potions');
        }
        return this._cachedProgress;
    },

    async togglePotion(id) {
        const progress = await this.getProgress();
        
        if (progress[id]) {
            delete progress[id];
        } else {
            progress[id] = {
                completed: true,
                updatedAt: new Date().toISOString()
            };
        }

        await apiClient.updateCollection('potions', progress);
        return progress;
    }
};