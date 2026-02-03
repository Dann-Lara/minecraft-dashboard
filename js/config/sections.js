export const SECTIONS_CONFIG = [
    { 
        id: 'section-home', 
        path: 'home', 
        init: 'initHome', 
        label: 'Home', 
        icon: 'grass_block.png',
        active: true // Esta es la sección por defecto
    },
    { 
        id: 'section-coordinates', 
        path: 'coordinates', 
        init: 'initCoordinates', 
        label: 'Ubicaciones', 
        icon: 'map.png' 
    },
    { 
        id: 'section-farms', 
        path: 'farms', 
        init: 'initFarms', 
        label: 'Granjas', 
        icon: 'iron_lingot.png' 
    },
    { 
        id: 'section-enchantments', 
        path: 'enchantments', 
        init: 'initEnchantments', 
        label: 'Encantos', 
        icon: 'book.gif',
    },
    { 
        id: 'section-combinations', 
        path: 'combinations', 
        init: 'initCombinations', 
        label: 'Equipo', 
        icon: 'sword.gif' 
    },
    { 
        id: 'section-resources', 
        path: 'resources', 
        init: 'initResources', 
        label: 'Recursos', 
        icon: 'diamond.png' 
    },
    { 
        id: 'section-potions', 
        path: 'potions', 
        init: 'initPotions', 
        label: 'Pociones', 
        icon: 'potion.png' 
    },
    { 
        id: 'section-bosses', 
        path: 'bosses', 
        init: 'initBosses', 
        label: 'Jefes', 
        icon: 'creeper.png' 
    },
    { 
        id: 'section-meta', 
        path: 'meta', 
        init: 'initMeta', 
        label: 'Infra', 
        icon: 'lodestone.png' 
    }
];