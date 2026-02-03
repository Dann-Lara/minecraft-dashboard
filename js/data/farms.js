window.AppConfig.farms = [
    {
      id: 'farm_lava',
      name: 'Geiser de Lava Infinita',
      diff: 'Baja', // Nivel 1: Primeros días
      img: 'lava_bucket.png',
      requirement: 'Calderos + Espeleotema + Lava',
      yield: 'Combustible infinito para hornos',
      strategy: 'Coloca lava sobre bloques sólidos, debajo una estalagmita (Dripstone) apuntando a un caldero. La lava llenará el caldero lentamente.',
      steps: [{ id: 'step_lava_1', label: 'Sistema de goteo listo' }]
    },
    {
      id: 'farm_stone',
      name: 'Cantera Automática',
      diff: 'Baja', // Nivel 2: Recursos base
      img: 'stone.png',
      requirement: 'Lava + Agua + Reloj de Redstone',
      yield: 'Piedra y Cobblestone masivo',
      strategy: 'Crea un generador donde el agua y lava choquen. Usa un pistón para empujar los bloques hacia una zona de minado seguro.',
      steps: [{ id: 'step_stone_1', label: 'Mecanismo de empuje OK' }]
    },
    {
      id: 'farm_iron',
      name: 'Desolación de Golems',
      diff: 'Media', // Nivel 4: Requiere logística de aldeanos
      img: 'iron_golem.png',
      requirement: '20 Aldeanos + 20 Camas + 20 Mesas',
      yield: 'Hierro Infinito y Rosas',
      strategy: 'Forma una construcción cuadrada donde cada aldeano trabaje frente a su mesa. Los Golems caerán en una trampa de lava central.',
      steps: [{ id: 'step_iron_1', label: 'Aldeanos transportados' }, { id: 'step_iron_2', label: 'Tradeo activo' }]
    },
    {
      id: 'farm_spawner',
      name: 'Mazmorra de Spawner',
      diff: 'Media',
      img: 'spawner.png',
      requirement: 'Encontrar Spawners en Cuevas o Minas',
      yield: 'XP, Huesos, Flechas, Hilos y Ojos de araña',
      strategy: 'Cava 4 bloques hacia cada lado y 3 hacia arriba/abajo desde el spawner. Usa corrientes de agua para concentrar a los mobs en un foso de caída de 22 bloques para matarlos de un golpe.',
      steps: [
        { id: 'spawner_zombie', label: 'Zombie' },
        { id: 'spawner_skeleton', label: 'Esqueleto' },
        { id: 'spawner_spider', label: 'Araña' },
        { id: 'spawner_cave_spider', label: 'Araña de Cueva' },
        { id: 'spawner_blaze', label: 'Blaze (Nether)' }
      ]
    },
    {
      id: 'farm_creeper',
      name: 'Factoría de Pólvora',
      diff: 'Media', // Nivel 3: Requiere materiales de construcción
      img: 'creeper.webp',
      requirement: 'Gatos + Trampillas + Slabs',
      yield: 'Pólvora para Cohetes y TNT',
      strategy: 'Usa trampillas en el techo para que solo spawneen Creepers. Coloca gatos en el centro para asustarlos hacia un foso con agua.',
      steps: [{ id: 'step_creeper_1', label: 'Plataformas terminadas' }]
    },
    {
      id: 'farm_ominous',
      name: 'Ominous Farm',
      diff: 'Media', // Nivel 5: Control de Outposts
      img: 'ominous.png',
      requirement: 'Outpost de Pillagers controlado',
      yield: 'Botellas Ominosas para Raids',
      strategy: 'Cubre el Outpost con slabs para forzar el spawn en un solo punto. Mátalos manualmente o con lava para obtener botellas.',
      steps: [{ id: 'step_ominous_1', label: 'Outpost perimetrado' }, { id: 'step_ominous_2', label: 'Farmeando botellas' }]
    },
    {
      id: 'farm_slime',
      name: 'Planta de Slime',
      diff: 'Alta', // Nivel 6: Excavación masiva
      img: 'slime.png',
      requirement: 'Chunk de Slimes + Iluminación',
      yield: 'Bolas de Slime para pistones',
      strategy: 'Limpia una zona grande bajo la capa 40 en un Slime Chunk. Usa Golems de hierro en los bordes para atraer a los slimes al vacío.',
      steps: [{ id: 'step_slime_1', label: 'Chunk localizado' }, { id: 'step_slime_2', label: 'Zona excavada' }]
    },
    {
      id: 'farm_raid',
      name: 'Stacking Raid Farm',
      diff: 'Pesadilla', // Nivel 9: El pináculo técnico
      img: 'totem.png',
      requirement: 'Aldeano cebo + Redstone compleja',
      yield: 'Tótems, Esmeraldas y Redstone',
      strategy: 'Es la granja más rota. Aprovecha el Bad Omen para generar raids infinitas que mueren por caída instantánea.',
      steps: [{ id: 'step_raid_1', label: 'Estructura Raid OK' }, { id: 'step_raid_2', label: 'Filtro de items' }]
    },
    {
      id: 'farm_enderman',
      name: 'Dimensión de XP',
      diff: 'Pesadilla', // Nivel 7: Post-End
      img: 'enderman.png',
      requirement: 'Endermite + 128 bloques de distancia',
      yield: 'Nivel 30 en segundos + Perlas',
      strategy: 'Construye una plataforma lejos de la isla central. Usa una Endermite en una vagoneta para que los Endermans caigan a un foso de 1 HP.',
      steps: [{ id: 'step_ender_1', label: 'Puente al vacío' }, { id: 'step_ender_2', label: 'Endermite capturada' }]
    },
    {
      id: 'farm_gold',
      name: 'Nether Gold Farm',
      diff: 'Pesadilla', // Nivel 8: Ingeniería en el Nether
      img: 'gold_lingot.png',
      requirement: 'Techo del Nether + Huevo de tortuga',
      yield: 'Oro Infinito y XP masiva',
      strategy: 'Sobre la capa 128 del Nether, crea plataformas donde los Piglins corran hacia un huevo de tortuga protegido, cayendo a su muerte.',
      steps: [{ id: 'step_gold_1', label: 'Acceso al techo' }, { id: 'step_gold_2', label: 'Huevo colocado' }]
    }
  ];