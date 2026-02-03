window.Storage = {
    get(key, fallback = null) {
      try {
        const v = localStorage.getItem(key);
        return v ? JSON.parse(v) : fallback;
      } catch { return fallback; }
    },
    set(key, value) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  };
  
  // Funciones globales para los botones del Footer
  window.exportProgress = () => {
    // Obtenemos todo el contenido de localStorage
    const data = JSON.stringify(localStorage, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `mc-progress-backup-${new Date().toISOString().slice(0,10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  
  window.importProgress = () => {
    // Creamos un input de tipo file dinámicamente
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';

    input.onchange = e => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = readerEvent => {
            try {
                const content = JSON.parse(readerEvent.target.result);
                
                // Confirmación antes de sobrescribir
                if (confirm("¿Importar datos? Esto reemplazará tu progreso actual con el del archivo.")) {
                    // Limpiamos el storage actual y cargamos el nuevo
                    localStorage.clear();
                    Object.keys(content).forEach(key => {
                        localStorage.setItem(key, content[key]);
                    });
                    
                    alert("¡Datos sincronizados con éxito!");
                    window.location.reload(); // Recargamos para ver los cambios
                }
            } catch (err) {
                alert("Error: El archivo no es un backup válido de Minecraft Dashboard.");
                console.error(err);
            }
        };

        reader.readAsText(file);
    };

    input.click();
  };
  
  window.resetSystem = () => {
    const confirmFirst = confirm("🚨 ATENCIÓN: Se borrarán todas las coordenadas, encantamientos y progreso de equipo.");
  
    if (confirmFirst) {
        const confirmSecond = confirm("¿ESTÁS COMPLETAMENTE SEGURO? Esta acción es irreversible.");
        if (confirmSecond) {
        localStorage.clear();
        window.location.reload();
        }
    }
  };