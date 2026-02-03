import { apiClient } from './api.client.js';

export const ResourceService = {
    _cachedProgress: null,

    async getCatalog() {
        return window.AppConfig.resources;
    },

    async getProgress() {
        if (!this._cachedProgress) {
            this._cachedProgress = await apiClient.getCollection('resources');
        }
        return this._cachedProgress;
    },

    async toggleResource(id) {
        const progress = await this.getProgress();
        
        if (progress[id]) {
            delete progress[id];
        } else {
            progress[id] = {
                collected: true,
                updatedAt: new Date().toISOString()
            };
        }

        await apiClient.updateCollection('resources', progress);
        return progress;
    }
};