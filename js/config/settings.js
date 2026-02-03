/**
 * CONFIGURACIÓN GLOBAL DEL SISTEMA
 * Ubicación: js/config/settings.js
 */

export const APP_SETTINGS = {
    // Metadatos de la aplicación
    meta: {
        name: 'Minecraft Dashboard',
        version: '1.0.0', // Sube esto cuando hagas cambios grandes
        author: 'Dann Lara',
        role: 'DevOps Architect',
        year: new Date().getFullYear(),
        githubUrl: '#' // Puedes poner tu repo aquí
    },

    // Configuración de UI
    ui: {
        defaultTheme: 'dark',
        animationsEnabled: true,
        autoSaveInterval: 30000, // Autosave cada 30s (si lo implementas a futuro)
        maxToasts: 3 // Máximo de notificaciones en pantalla
    },

    // Configuración de almacenamiento
    storage: {
        prefix: 'mc_', // Prefijo para evitar colisiones en LocalStorage
        versionKey: 'mc_db_version',
        backupName: 'mc-survival-backup'
    },

    // Rutas base (por si cambias la estructura de carpetas)
    paths: {
        icons: 'assets/icons/',
        sections: 'sections/'
    }
};

// Hacemos disponible la config globalmente por si algún script legacy la necesita
window.AppSettings = APP_SETTINGS;