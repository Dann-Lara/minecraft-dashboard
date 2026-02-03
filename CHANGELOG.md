# CHANGELOG / HISTORIAL DE CAMBIOS — Minecraft Progress Dashboard

Este archivo sigue una estructura semántica de versiones (`MAJOR.MINOR.PATCH`).  
Las entradas más recientes aparecen primero.

---

## English

### [1.0.0] — Initial Release (Current)

**Added**

- **Core Architecture**: Service-oriented architecture with modular section loading
- **Dynamic Module Loading**: ES6 dynamic imports for lazy loading of sections
- **Section System**: 8 main sections (Home, Coordinates, Farms, Enchantments, Combinations, Resources, Potions, Bosses, Meta)
- **LocalStorage Integration**: Automatic data persistence with `mc_` prefix
- **Export/Import Functionality**: JSON-based backup and restore system
- **Dark Mode**: Optimized dark theme for extended gaming sessions
- **Tailwind CSS Integration**: Utility-first styling with custom configuration
- **Service Layer**: Dedicated service modules for each section's data operations
- **Navigation System**: Dynamic navbar with section routing
- **Footer Actions**: Export, import, and reset functionality
- **Progress Tracking**: Comprehensive tracking across all survival categories

**Architecture**

- Modular ES6 module structure
- Separation of concerns (config, core, services, components, sections)
- Dynamic HTML and JavaScript loading
- Service-based data access pattern

---

## Español

### [1.0.0] — Lanzamiento Inicial (Actual)

**Añadido**

- **Arquitectura Core**: Arquitectura orientada a servicios con carga modular de secciones
- **Carga Dinámica de Módulos**: Imports dinámicos ES6 para carga diferida de secciones
- **Sistema de Secciones**: 8 secciones principales (Home, Coordenadas, Granjas, Encantamientos, Equipo, Recursos, Pociones, Jefes, Meta)
- **Integración LocalStorage**: Persistencia automática de datos con prefijo `mc_`
- **Funcionalidad Exportar/Importar**: Sistema de respaldo y restauración basado en JSON
- **Modo Oscuro**: Tema oscuro optimizado para sesiones de juego extendidas
- **Integración Tailwind CSS**: Estilos utilitarios con configuración personalizada
- **Capa de Servicios**: Módulos de servicio dedicados para operaciones de datos de cada sección
- **Sistema de Navegación**: Navbar dinámico con enrutamiento de secciones
- **Acciones del Pie**: Funcionalidad de exportar, importar y resetear
- **Seguimiento de Progreso**: Rastreo completo en todas las categorías de supervivencia

**Arquitectura**

- Estructura modular de módulos ES6
- Separación de responsabilidades (config, core, services, components, sections)
- Carga dinámica de HTML y JavaScript
- Patrón de acceso a datos basado en servicios
