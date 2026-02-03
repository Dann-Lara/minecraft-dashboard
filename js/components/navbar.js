// Importamos la configuración
import { SECTIONS_CONFIG } from '../config/sections.js';

export function renderNavbar() {
    const html = `
    <div class="max-w-7xl mx-auto flex items-center justify-between md:justify-center relative h-14">
        <div class="md:hidden text-white font-bold flex items-center gap-2">
            <img src="assets/icons/grass_block.png" class="w-6 h-6 mc-pixelated" alt="Logo">
            <span class="text-xs uppercase tracking-widest">Menu</span>
        </div>

        <button id="menu-toggle" class="md:hidden text-gray-300 hover:text-white p-2 z-50">
            <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path id="menu-icon" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>

        <div id="menu-items" class="hidden absolute top-full left-0 w-full bg-gray-900 md:bg-transparent border-b border-white/10 md:border-none z-50 flex-col p-4 space-y-1 md:relative md:top-0 md:flex md:flex-row md:space-y-0 md:justify-center md:gap-1 md:p-0 md:w-auto transition-all">
            ${_generateNavLinks()}
        </div>
    </div>`;

    document.getElementById('main-nav').innerHTML = html;
    _initNavbarLogic();
}

function _generateNavLinks() {
    // Usamos SECTIONS_CONFIG para crear los botones
    return SECTIONS_CONFIG.map(section => `
        <button data-target="${section.id}" class="nav-link ${section.active ? 'active' : ''} px-4 py-2 text-sm font-bold text-gray-400 hover:text-white flex items-center gap-2 rounded-md hover:bg-white/5 transition-all group">
            <img src="assets/icons/${section.icon}" class="w-5 h-5 object-contain group-hover:scale-110 mc-pixelated" alt="${section.label}">
            <span>${section.label}</span>
        </button>
    `).join('');
}

function _initNavbarLogic() {
    const navContainer = document.getElementById('menu-items');
    const menuBtn = document.getElementById('menu-toggle');
    const menuIcon = document.getElementById('menu-icon');

    // Usamos delegación de eventos en el contenedor del menú
    navContainer.addEventListener('click', async (e) => {
        const button = e.target.closest('.nav-link');
        if (!button) return;

        const targetId = button.getAttribute('data-target');
        const targetSection = document.getElementById(targetId);
        const currentSection = document.querySelector('.content-section.active');

        if (!targetSection || targetSection === currentSection) return;

        // 1. Gestionar estados visuales de los botones
        document.querySelectorAll('.nav-link').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // 2. Animación de Salida
        if (currentSection) {
            currentSection.style.opacity = '0';
            currentSection.style.transform = 'translateY(-10px) scale(0.98)';
        }

        // 3. Esperar a la animación y cambiar
        setTimeout(() => {
            document.querySelectorAll('.content-section').forEach(sec => {
                sec.classList.remove('active');
                // Reset de estilos para la próxima entrada
                if (sec !== targetSection) {
                    sec.style.opacity = '0';
                    sec.style.transform = 'translateY(10px) scale(0.98)';
                }
            });

            targetSection.classList.add('active');

            // RE-INICIALIZAR si es Home o cualquier sección con datos
            // Buscamos la config para saber qué init ejecutar
            const sectionData = SECTIONS_CONFIG.find(s => s.id === targetId);
            if (sectionData && window[sectionData.init]) {
                window[sectionData.init]();
            }

            // 4. Animación de Entrada
            requestAnimationFrame(() => {
                targetSection.style.opacity = '1';
                targetSection.style.transform = 'translateY(0) scale(1)';
            });
        }, 200);

        // Cerrar menú móvil si está abierto
        if (window.innerWidth < 768) {
            navContainer.classList.add('hidden');
            menuIcon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
        }
    });
}