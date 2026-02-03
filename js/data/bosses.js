window.AppConfig.bosses = [
    {
        id: 'baby_zombie',
        order: 1,
        name: 'Baby Zombie',
        diff: 'Fastidio 1',
        img: 'baby_zombie.gif',
        summon: 'Oscuridad, hitbox diminuta, velocidad absurda y no se quema con el sol.',
        strategy: 'Usa una cubeta de agua para frenarlo o quédate contra una pared.',
        gear: ['Escudo', 'Cubeta de Agua'],
        loot: [{ id: 'rotten_flesh', label: 'Carne Podrida' }, { id: 'iron_ingot', label: 'Lingote Raro' }]
    },
    {
        id: 'creeper_charged',
        order: 2,
        name: 'Creeper Cargado',
        diff: 'Fastidio 2',
        img: 'creeper.webp',
        summon: 'Oscuridad, radio de explosión masivo. Te mata incluso con armadura completa.',
        strategy: 'Arco y flecha obligatorio. No dejes que se acerque.',
        gear: ['Arco', 'Escudo'],
        loot: [{ id: 'mob_head', label: 'Cabezas de Mob' }, { id: 'gunpowder', label: 'Pólvora x2' }]
    },
    {
        id: 'phantom',
        order: 3,
        name: 'Phantom',
        diff: 'Fastidio 2',
        img: 'phantom.gif',
        summon: 'Oscuridad, aparecen mientras construyes y te empujan al vacío si llevas mucho tiempo sin dormir.',
        strategy: 'Duerme cada 3 días. Gatos cerca de ti los ahuyentan.',
        gear: ['Membrana de Phantom', 'Gatos'],
        loot: [{ id: 'phantom_membrane', label: 'Membrana' }]
    },
    {
        id: 'skeleton_stray',
        order: 4,
        name: 'Stray (Glacial)',
        diff: 'Bajo',
        img: 'stray.png',
        summon: 'Oscuridad, sus flechas te dan Lentitud, impidiéndote huir.',
        strategy: 'Usa escudo para bloquear el efecto. Cúbrete con bloques.',
        gear: ['Escudo', 'Leche'],
        loot: [{ id: 'slowness_arrow', label: 'Flecha de Lentitud' }]
    },
    {
        id: 'elder_guardian',
        name: 'Elder Guardian',
        order: 5,
        diff: 'Medio',
        img: 'elder_guardian.gif',
        summon: 'Templos del Océano (Monumentos)',
        gear: ['Poción Apnea', 'Tridente', 'Leche'],
        strategy: 'Bloquea su rayo con pilares. La leche elimina la Fatiga Minera.',
        loot: [{ id: 'guardian_sponge', label: 'Esponjas' }]
    },
    {
        id: 'vex',
        order: 6,
        name: 'Vex',
        diff: 'Medio',
        img: 'vex.gif',
        summon: 'Mansiones, Atraviesan paredes y tienen espadas que ignoran armadura.',
        strategy: 'Mata al Evocador rápido. Si están fuera, corre.',
        gear: ['Armadura Netherite'],
        loot: [{ id: 'iron_sword', label: 'Espada de Hierro' }]
    },
    {
        id: 'evoker',
        name: 'Evoker',
        order: 7,
        diff: 'Medio',
        img: 'evoker.png',
        summon: 'Mansiones y Raids (Oleada 5+)',
        gear: ['Espada Filo IV', 'Escudo', 'Arco'],
        strategy: 'Prioriza matarlo antes de que invoque a los Vexes. Mantente lejos de sus colmillos.',
        loot: [{ id: 'totem', label: 'Tótem de Inmortalidad' }]
    },
    {
        id: 'silverfish',
        order: 8,
        name: 'Silverfish',
        diff: 'Medio',
        img: 'silverfish.gif',
        strategy: 'No uses espadas con barrido (Sweeping Edge) cerca de ellos.',
        summon: 'Stronhold, Aparecen en cadena. Si golpeas uno, despiertas a todos.',
        gear: ['Encendedor', 'Pociones'],
        loot: [{ id: 'xp_points', label: 'Experiencia (Mucha)' }]
    },
    {
        id: 'breeze',
        name: 'The Breeze',
        order: 9,
        diff: 'Alto',
        img: 'breeze.webp', 
        summon: 'Trial Chambers (Trial Spawners)',
        gear: ['Escudo', 'Bloques', 'Armadura de Hierro+'],
        strategy: 'Usa el escudo para devolver sus ráfagas. Atácalo cuando aterrice.',
        loot: [{ id: 'breeze_rod', label: 'Vara de Brisa' }]
    },
    {
        id: 'ghast',
        order: 10,
        name: 'Ghast',
        diff: 'Alto',
        img: 'ghast.gif',
        summon: 'Bastiones (Nether), Gritos insoportables y bolas de fuego que apagan portales.',
        strategy: 'Devuelve su bola de fuego golpeándola. Ten un encendedor.',
        gear: ['Encendedor', 'Arco'],
        loot: [{ id: 'ghast_tear', label: 'Lágrima de Ghast' }, { id: 'gunpowder', label: 'Pólvora' }]
    },
    {
        id: 'piglin_brute',
        name: 'Piglin Brute',
        order: 11,
        diff: 'Alto',
        img: 'piglin_brute.png',
        summon: 'Bastiones (Nether)',
        gear: ['Hacha de Oro', 'Poción Fuerza', 'Armadura Diamante'],
        strategy: 'No se distrae con oro. Usa barcos para atraparlo o muros para golpearlo desde arriba.',
        loot: [{ id: 'bastion_loot', label: 'Botín de Bastión' }]
    },
    {
        id: 'wither',
        name: 'Wither',
        order: 12,
        diff: 'Boss',
        img: 'wither.png',
        summon: '4 Arena de Almas + 3 Cabezas Wither',
        gear: ['Fuerza II', 'Regeneración', 'Manzanas de Oro'],
        strategy: 'Pelea bajo tierra en un túnel largo (Rama de mina) para limitar su movimiento.',
        loot: [{ id: 'wither_star', label: 'Nether Star' }]
    },
    {
        id: 'enderman',
        name: 'Enderman',
        order: 13,
        diff: 'Alto',
        img: 'enderman.png',
        summon: 'Cuevas, Desiertos, Warp Forest',
        gear: ['Cubeta de Agua', 'Calabaza tallada', 'Espada'],
        strategy: 'Míralo a los ojos para que te siga. Quédate bajo un techo de 2 bloques de altura.',
        loot: [{ id: 'ender_pearl', label: 'Ender Pearls' }]
    },
    {
        id: 'ender_dragon',
        name: 'Ender Dragon',
        order: 14,
        diff: 'Final Boss',
        img: 'ender_dragon.gif',
        summon: '12 Ojos de Ender en el Portal',
        gear: ['Camas', 'Poción Caída Lenta', 'Arco Infinito'],
        strategy: 'Destruye los cristales de las torres primero. Usa camas cuando esté en el centro.',
        loot: [{ id: 'dragon_egg', label: 'Huevo Dragón' }, { id: 'dragon_breath', label: 'Aliento' }]
    },
    {
        id: 'warden',
        name: 'The Warden',
        order: 15,
        diff: 'Pesadilla',
        img: 'warden.gif',
        summon: 'Hacer ruido 3 veces en Deep Dark',
        gear: ['Lana', 'Bolas de nieve', 'Visión Nocturna'],
        strategy: 'Distráelo con ruido lejos de ti. El sigilo es obligatorio; no intentes matarlo cuerpo a cuerpo.',
        loot: [{ id: 'warden_rib', label: 'Plantilla Ward' }, { id: 'echo_shard', label: 'Fragmento de Eco' }]
    }
];