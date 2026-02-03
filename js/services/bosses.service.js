import { apiClient } from './api.client.js';

export const BossService = {
    _cachedProgress: null,

    async getCatalog() {
        return window.AppConfig.bosses;
    },

    async getProgress() {
        if (!this._cachedProgress) {
            this._cachedProgress = await apiClient.getCollection('bosses');
        }
        return this._cachedProgress;
    },

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

        await apiClient.updateCollection('bosses', progress);
        return progress;
    }
};