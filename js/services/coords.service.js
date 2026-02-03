import { apiClient } from './api.client.js';

export const CoordsService = {
    _cachedData: null,

    async getData() {
        // Si ya tenemos caché y es array, lo devolvemos
        if (this._cachedData && Array.isArray(this._cachedData)) {
            return this._cachedData;
        }

        let data = await apiClient.getCollection('coordinates');
        
        // VALIDACIÓN CRÍTICA: Si no es un array o está vacío, cargar default
        if (!Array.isArray(data) || data.length === 0) {
            data = JSON.parse(JSON.stringify(window.AppConfig.defaultCoords || []));
            await this.saveData(data);
        }
        
        this._cachedData = data;
        return data;
    },

    async saveData(data) {
        this._cachedData = data;
        await apiClient.updateCollection('coordinates', data);
    },

    async updateValue(sIdx, lIdx, key, val) {
        const data = await this.getData();
        const siteIndex = parseInt(sIdx);
        const locIndex = parseInt(lIdx);

        if (key === 'name') {
            data[siteIndex].locations[locIndex][key] = val;
        } else {
            data[siteIndex].locations[locIndex][key] = parseInt(val) || 0;
        }
        await this.saveData(data);
    },

    async addSubPoint(sIdx) {
        const data = await this.getData();
        data[parseInt(sIdx)].locations.push({ 
            name: 'Punto Extra', 
            x: 0, 
            y: 64, 
            z: 0 
        });
        await this.saveData(data);
    }
};