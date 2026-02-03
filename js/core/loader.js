import { SECTIONS_CONFIG } from '../config/sections.js';
import { renderNavbar } from '../components/navbar.js';
import { renderFooter } from '../components/footer.js';

function scaffoldSections() {
    const container = document.getElementById('content-container');
    if (!container) return;
    container.innerHTML = '';

    SECTIONS_CONFIG.forEach(section => {
        const sectionEl = document.createElement('section');
        sectionEl.id = section.id;
        sectionEl.className = 'content-section';
        sectionEl.style.opacity = '0';
        sectionEl.style.transition = 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
        sectionEl.style.transform = 'translateY(10px) scale(0.98)';
        
        if (section.active) {
            sectionEl.classList.add('active');
            sectionEl.style.opacity = '1';
            sectionEl.style.transform = 'translateY(0) scale(1)';
        }
        container.appendChild(sectionEl);
    });
}

async function loadHTML(id, path) {
    const container = document.getElementById(id);
    if (!container) return;
    try {
        const res = await fetch(`js/sections/${path}/${path}.html`); // Ruta ajustada a tu estructura
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        container.innerHTML = await res.text();
    } catch (e) {
        console.error(`Error loading HTML for ${id}:`, e);
    }
}

/**
 * Optimizado para Módulos: 
 * Usa import() dinámico en lugar de crear etiquetas <script> manualmente
 */
async function loadScript(path, initFn) {
    try {
        const modulePath = `../sections/${path}/${path}.js`;
        // import() dinámico es la forma moderna de cargar módulos
        await import(modulePath);
        
        // Una vez importado, ejecutamos la función de inicio que el módulo registró en window
        if (initFn && typeof window[initFn] === 'function') {
            await window[initFn]();
        }
    } catch (e) {
        console.error(`Error cargando el módulo en ${path}:`, e);
    }
}

async function initApp() {
    console.log("🚀 Iniciando Sistema con arquitectura de Servicios...");

    scaffoldSections();
    renderNavbar();
    renderFooter();

    // 1. Cargar sección activa inmediatamente
    const activeSection = SECTIONS_CONFIG.find(s => s.active) || SECTIONS_CONFIG[0];
    
    // Ejecutamos en orden: primero el HTML y luego el Script
    await loadHTML(activeSection.id, activeSection.path);
    await loadScript(activeSection.path, activeSection.init);

    // 2. Cargar el resto en segundo plano para que la navegación sea instantánea después
    // Usamos requestIdleCallback o un timeout bajo para no bloquear el hilo principal
    setTimeout(async () => {
        const otherSections = SECTIONS_CONFIG.filter(s => s.id !== activeSection.id);
        
        for (const s of otherSections) {
            await loadHTML(s.id, s.path);
            await loadScript(s.path, s.init);
        }
        
        if (window.updatePreparationStatus) window.updatePreparationStatus();
    }, 200);
}

document.addEventListener('DOMContentLoaded', initApp);