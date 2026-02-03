window.AppConfig.underrated = [
    {
      id: 'meta_turtle',
      name: 'Maestro Tortuga',
      type: 'Pociones',
      img: 'turtle_master.png',
      benefit: 'Resistencia IV (Tanque total)',
      utility: 'Reduce el 90% del daño recibido.',
      strategy: 'Es la única forma de sobrevivir a una explosión de Wither o un golpe directo del Warden sin morir. Combínala con Perlas de Ender para moverte, ya que da lentitud.',
      steps: [{ id: 'check_turtle', label: '¿La has probado?' }]
    },
    {
      id: 'meta_hoe',
      name: 'Azada de Netherite',
      type: 'Herramientas',
      img: 'netherite_hoe.gif',
      benefit: 'Minería instantánea',
      utility: 'Pica bloques que otros ignoran.',
      strategy: 'No es solo para granjas. Con Eficiencia V, pica instantáneamente Skulk, esponjas, hojas, heno y verrugas del nether. Esencial para limpiar Ciudades Antiguas.',
      steps: [{ id: 'check_hoe', label: 'Eficiencia V lista' }]
    },
    {
      id: 'meta_caldera',
      name: 'Caldera Técnica',
      type: 'Utilidad',
      img: 'cauldron.png',
      benefit: 'Alquimia y Tintes',
      utility: 'Limpieza y flechas con efectos.',
      strategy: 'En Bedrock permite crear flechas con pociones. En Java, sirve para despintar armaduras de cuero y estandartes para reutilizarlos, además de ser un bloque de Redstone.',
      steps: [{ id: 'check_cauldron', label: 'Uso avanzado' }]
    },
    {
      id: 'meta_allay',
      name: 'Allay: El Filtro Vivo',
      type: 'Mobs',
      img: 'allay.gif',
      benefit: 'Recolección inteligente',
      utility: 'Filtra items no apilables (armaduras/picos).',
      strategy: 'Es el único "bloque" capaz de clasificar objetos que no se apilan. Dale un objeto y lanzará los iguales cerca de un bloque de notas.',
      steps: [{ id: 'check_allay', label: 'Sistema de filtrado' }]
    },
    {
      id: 'meta_bone_meal',
      name: 'Polvo de Hueso',
      type: 'Logística',
      img: 'bone_meal.png',
      benefit: 'Generación de estructuras',
      utility: 'Cultivo de madera masivo.',
      strategy: 'Más allá de crecer trigo, úsalo en musgo (moss) para generar bloques infinitos, azaleas y cuevas decorativas en segundos.',
      steps: [{ id: 'check_bonemeal', label: 'Granja de musgo' }]
    },
    {
      id: 'meta_ender_pearl',
      name: 'Ender Pearl Stasis',
      type: 'Redstone',
      img: 'ender_pearl.png',
      benefit: 'Teletransporte remoto',
      utility: 'Regreso a base instantáneo.',
      strategy: 'Lanza una perla a un foso de agua con alma de arena (bubble column). La perla flotará. Cuando alguien cierre una trampilla sobre ella, serás teletransportado sin importar la distancia.',
      steps: [{ id: 'check_stasis', label: 'Cámara construida' }]
    }
  ]