import { apiClient } from './api.client.js';

export const CombinationService = {
    _cachedProgress: null,

    async getCatalog() {
        return window.AppConfig.combinations;
    },

    async getProgress() {
        if (!this._cachedProgress) {
            this._cachedProgress = await apiClient.getCollection('combinations');
        }
        return this._cachedProgress;
    },

    /**
     * Toglea un paso específico de una combinación
     * @param {string} comboId - ID del equipo (ej: 'armor_helmet')
     * @param {string} stepId - ID del paso de combinación
     */
    async toggleStep(comboId, stepId) {
        const progress = await this.getProgress();
        const stepKey = `${comboId}_${stepId}`;
        
        // 1. Toggle del paso
        if (progress[stepKey]) {
            delete progress[stepKey];
        } else {
            progress[stepKey] = true;
        }

        // 2. Verificar si todo el equipo está completo
        const combo = window.AppConfig.combinations.find(c => c.id === comboId);
        const allStepsDone = combo.ops.every(op => !!progress[`${comboId}_${op.id}`]);
        
        // Guardamos el estado global del combo dentro de la misma colección
        if (allStepsDone) {
            progress[`done_${comboId}`] = true;
        } else {
            delete progress[`done_${comboId}`];
        }

        await apiClient.updateCollection('combinations', progress);
        return progress;
    },

    // Dentro de combinations.service.js
    async toggleNetherite(comboId) {
        const progress = await this.getProgress();
        const key = `netherite_${comboId}`;
        
        // 1. Toggle del estado
        if (progress[key]) {
            delete progress[key];
        } else {
            progress[key] = true;
        }

        // 2. GUARDADO UNIFICADO: Usamos el apiClient como en toggleStep
        await apiClient.updateCollection('combinations', progress);
        
        // 3. Actualizamos el caché local para que el próximo getProgress() tenga los datos frescos
        this._cachedProgress = progress;

        return progress;
    }
};