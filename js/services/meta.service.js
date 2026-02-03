import { apiClient } from './api.client.js';

export const MetaService = {
    _cachedProgress: null,

    async getCatalog() {
        return window.AppConfig.underrated;
    },

    async getProgress() {
        if (!this._cachedProgress) {
            this._cachedProgress = await apiClient.getCollection('meta');
        }
        return this._cachedProgress;
    },

    async toggleItem(id) {
        const progress = await this.getProgress();
        
        progress[id] = !progress[id];
        if (!progress[id]) delete progress[id];

        await apiClient.updateCollection('meta', progress);
        return progress;
    }
};