window.AppConfig.defaultCoords = [
    // FASE 1: INICIO Y SUPERVIVENCIA BÁSICA
    { id: 'spawn', name: 'Punto de Spawn', icon:'start.gif', dimension: 'overworld', tip: 'Cofre de emergencia aquí. Tu brújula siempre apunta a este sitio.', locations: [{ name: 'Origen', x: 0, y: 64, z: 0 }] },
    { id: 'base', name: 'Base Central', icon:'base.png', dimension: 'overworld', tip: 'Cerca de una aldea. Prioridad: Camas y cultivos.', locations: [{ name: 'Principal', x: 0, y: 64, z: 0 }] },
    { id: 'village', name: 'Aldea / Trading Hall', icon:'village.png', dimension: 'overworld', tip: 'Ideal para conseguir Mending y esmeraldas infinitas.', locations: [{ name: 'Centro Social', x: 0, y: 64, z: 0 }] },
  
    // FASE 2: RECURSOS Y GRANJAS TÉCNICAS
    { id: 'pillager', name: 'Puesto Pillager', icon:'pillager_outpost.png', dimension: 'overworld', tip: 'Necesario para iniciar Raids y granjas de tótems.', locations: [{ name: 'Torre', x: 0, y: 64, z: 0 }] },
    { id: 'mine', name: 'Mina Abandonada / Cuevas', icon:'mine.png', dimension: 'overworld', tip: 'Busca Spawners de arañas para granjas de hilo/XP.', locations: [{ name: 'Diamantes Y:-58', x: 0, y: -58, z: 0 }] },
    { 
      id: 'trial_chambers', 
      name: 'Trial Chambers', 
      icon: 'breeze.webp', // O 'trial_key.png'
      dimension: 'overworld', 
      tip: 'Usa botellas de presagio para activar el modo difícil y obtener mejores recompensas (Heavy Core).', 
      locations: [{ name: 'Cámara Principal', x: 0, y: 0, z: 0 }] 
    },
    // FASE 3: DIMENSIÓN NETHER
    { id: 'portal', name: 'Nether Portal', icon:'nether_portal.png', dimension: 'nether', tip: 'Anota ambas caras del portal para no perderte.', locations: [{ name: 'Lado Overworld', x: 0, y: 64, z: 0 }] },
    { id: 'fortress', name: 'Fortaleza Nether', icon:'blaze.gif', dimension: 'nether', tip: 'Necesitas Varas de Blaze y Verrugas para pociones.', locations: [{ name: 'Spawner Blazes', x: 0, y: 64, z: 0 }] },
    { id: 'bastion', name: 'Bastión / Piglins', icon:'piglin_brute.png', dimension: 'nether', tip: 'Para tradear oro por perlas y conseguir plantillas de herrería.', locations: [{ name: 'Tesoro', x: 0, y: 64, z: 0 }] },
  
    // FASE 4: EL FINAL DEL JUEGO
    { id: 'stronghold', name: 'Stronghold', icon:'end_portal.png', dimension: 'overworld', tip: 'Usa Ojos de Ender. Asegúrate de llevar una cama para guardar spawn cerca.', locations: [{ name: 'Portal al End', x: 0, y: 64, z: 0 }] },
    { id: 'end_island', name: 'Dragon’s Lair', icon:'ender_dragon.gif', dimension: 'end', tip: 'Isla central del End. Libera el portal de salida.', locations: [{ name: 'Portal Retorno', x: 0, y: 64, z: 0 }] },
    { id: 'end_city', name: 'End City / Elytra', icon:'end_city.png', dimension: 'end', tip: 'Busca el barco flotante para las Elytras (coordenadas remotas).', locations: [{ name: 'Barco Elytra', x: 0, y: 64, z: 0 }] },
    { id: 'ancient_city', name: 'Ancient City', icon:'warden.gif', dimension: 'overworld', tip: 'Nivel Y:-51. Cuidado con el Warden. Loot de sigilo.', locations: [{ name: 'Entrada Deep Dark', x: 0, y: -51, z: 0 }] },
  ];