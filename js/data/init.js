/**
 * DATA INITIALIZER & BOOTSTRAPPER
 * Este archivo centraliza la carga de todos los fragmentos de datos.
 */

window.AppConfig = window.AppConfig || {};

(function() {
    // 1. Lista de archivos de datos a cargar
    const dataFiles = [
        'coordinates.js',
        'farms.js',
        'enchants.js',
        'combinations.js',
        'bosses.js',
        'resources.js',
        'potions.js',
        'underrated.js',
    ];

    // 2. Función para cargar scripts de forma síncrona/secuencial 
    // para asegurar que AppConfig se llene correctamente.
    function loadDataScripts() {
        const path = 'js/data/';
        
        dataFiles.forEach(file => {
            const script = document.createElement('script');
            script.src = path + file;
            script.async = false; // Importante para mantener el orden si fuera necesario
            document.head.appendChild(script);
        });
        
        console.log(`📦 ${dataFiles.length} módulos de datos inyectados.`);
    }

    loadDataScripts();
})();