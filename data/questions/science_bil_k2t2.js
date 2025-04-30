import { QUESTION_TYPES, DIFFICULTY_LEVELS, SUBJECTS } from '../questionSchema';

export const questions = [
  // Circuits Section
  {
    id: 'sci_bil_k2t2_001',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.BILINGUAL.SCIENCE.id,
    topic: SUBJECTS.BILINGUAL.SCIENCE.topics.CIRCUITS,
    question: 'Which components are necessary for a torch to work properly?',
    options: [
      'Battery, switch, and bulb connected in a circuit',
      'Only a battery',
      'Only a bulb',
      'Battery and bulb without connection'
    ],
    correctAnswer: 0,
    explanation: 'A torch needs a complete circuit with a battery (power source), switch (control), and bulb (light output)'
  },

  {
    id: 'sci_bil_k2t2_002',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.BILINGUAL.SCIENCE.id,
    topic: SUBJECTS.BILINGUAL.SCIENCE.topics.CIRCUITS,
    question: 'Select all items that can conduct electricity:',
    options: [
      'Metal paper clip',
      'Rubber band',
      'Copper wire',
      'Plastic ruler',
      'Aluminum foil'
    ],
    correctAnswer: [0, 2, 4],
    explanation: 'Metal objects (paper clip, copper wire, aluminum foil) conduct electricity. Rubber and plastic are insulators.'
  },

  {
    id: 'sci_bil_k2t2_003',
    type: QUESTION_TYPES.CMC2,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.BILINGUAL.SCIENCE.id,
    topic: SUBJECTS.BILINGUAL.SCIENCE.topics.CIRCUITS,
    question: 'Match each situation with the correct safety rule:',
    leftOptions: [
      'Wet hands',
      'Broken wire',
      'Lightning storm',
      'Fallen power line'
    ],
    rightOptions: [
      'Never touch electrical switches',
      'Tell an adult immediately',
      'Stay indoors',
      'Stay far away and call for help'
    ],
    correctPairs: [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3]
    ],
    explanation: 'Each electrical situation has specific safety rules to prevent accidents'
  },

  // Rocks Section
  {
    id: 'sci_bil_k2t2_004',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.BILINGUAL.SCIENCE.id,
    topic: SUBJECTS.BILINGUAL.SCIENCE.topics.ROCKS,
    question: 'Which type of rock is characterized by visible layers of different materials pressed together?',
    options: [
      'Sedimentary rock (made of layers)',
      'Igneous rock (from volcanoes)',
      'Metamorphic rock (changed by heat/pressure)',
      'Mineral crystal'
    ],
    correctAnswer: 0,
    explanation: 'Sedimentary rocks are formed by layers of sediment compressing over time, resulting in visible layers of different materials'
  },

  {
    id: 'sci_bil_k2t2_005',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.BILINGUAL.SCIENCE.id,
    topic: SUBJECTS.BILINGUAL.SCIENCE.topics.ROCKS,
    question: 'What can we learn from doing a rock rubbing? Select all that apply:',
    options: [
      'The texture of the rock',
      'The weight of the rock',
      'The pattern on the surface',
      'The age of the rock',
      'The hardness of the surface'
    ],
    correctAnswer: [0, 2, 4],
    explanation: 'Rock rubbing helps us learn about:\n- Surface texture\n- Surface patterns\n- Relative hardness'
  },

  // Additional Circuit Questions
  {
    id: 'sci_bil_k2t2_006',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.BILINGUAL.SCIENCE.id,
    topic: SUBJECTS.BILINGUAL.SCIENCE.topics.CIRCUITS,
    question: 'What happens when you turn on a switch in a circuit?',
    options: [
      'It completes the circuit and allows electricity to flow',
      'It breaks the circuit and stops electricity',
      'It makes the battery stronger',
      'It makes the bulb brighter without using electricity'
    ],
    correctAnswer: 0,
    explanation: 'A switch controls the flow of electricity. When turned on, it completes the circuit, allowing electricity to flow.'
  },

  {
    id: 'sci_bil_k2t2_007',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.BILINGUAL.SCIENCE.id,
    topic: SUBJECTS.BILINGUAL.SCIENCE.topics.CIRCUITS,
    question: 'Select all parts of a simple electrical circuit:',
    options: [
      'Battery',
      'Wires',
      'Switch',
      'Bulb',
      'Magnet'
    ],
    correctAnswer: [0, 1, 2, 3],
    explanation: 'A simple electrical circuit includes a power source (battery), conductors (wires), controls (switch), and output device (bulb).'
  },

  {
    id: 'sci_bil_k2t2_008',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.BILINGUAL.SCIENCE.id,
    topic: SUBJECTS.BILINGUAL.SCIENCE.topics.CIRCUITS,
    question: 'What is electricity?',
    options: [
      'A flow of electric charges',
      'A type of battery',
      'A type of light',
      'The same as magnetism'
    ],
    correctAnswer: 0,
    explanation: 'Electricity is the flow of electric charges (usually electrons) through a conductor.'
  },

  {
    id: 'sci_bil_k2t2_009',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.BILINGUAL.SCIENCE.id,
    topic: SUBJECTS.BILINGUAL.SCIENCE.topics.CIRCUITS,
    question: 'What do we use batteries for in a circuit?',
    options: [
      'To provide energy',
      'To make the circuit bigger',
      'To make the wires longer',
      'To control when the circuit works'
    ],
    correctAnswer: 0,
    explanation: 'Batteries provide the electrical energy that powers the circuit.'
  },

  {
    id: 'sci_bil_k2t2_010',
    type: QUESTION_TYPES.CMC2,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.BILINGUAL.SCIENCE.id,
    topic: SUBJECTS.BILINGUAL.SCIENCE.topics.CIRCUITS,
    question: 'Match each circuit component with its function:',
    leftOptions: [
      'Battery',
      'Wires',
      'Switch',
      'Bulb'
    ],
    rightOptions: [
      'Provides electrical energy',
      'Conducts electricity between components',
      'Controls the flow of electricity',
      'Converts electrical energy to light'
    ],
    correctPairs: [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3]
    ],
    explanation: 'Each component in a circuit has a specific function: battery (power), wires (conduction), switch (control), bulb (output)'
  },

  {
    id: 'sci_bil_k2t2_011',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.BILINGUAL.SCIENCE.id,
    topic: SUBJECTS.BILINGUAL.SCIENCE.topics.CIRCUITS,
    question: 'Which of these devices uses electricity?',
    options: [
      'Electric fan',
      'Wooden chair',
      'Paper book',
      'Rubber ball'
    ],
    correctAnswer: 0,
    explanation: 'An electric fan requires electricity to operate, while the other items do not use electricity.'
  },

  {
    id: 'sci_bil_k2t2_012',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.BILINGUAL.SCIENCE.id,
    topic: SUBJECTS.BILINGUAL.SCIENCE.topics.CIRCUITS,
    question: 'Select all electrical safety rules:',
    options: [
      'Never put fingers or objects in electrical outlets',
      'It\'s okay to use electrical devices near water',
      'Always unplug appliances by pulling the cord',
      'Keep electrical cords away from heat',
      'Tell an adult about damaged cords or plugs'
    ],
    correctAnswer: [0, 3, 4],
    explanation: 'Electrical safety includes keeping fingers and objects out of outlets, keeping cords away from heat, and reporting damage.'
  },

  // Additional Rocks Questions
  {
    id: 'sci_bil_k2t2_013',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.BILINGUAL.SCIENCE.id,
    topic: SUBJECTS.BILINGUAL.SCIENCE.topics.ROCKS,
    question: 'What are rocks made of?',
    options: [
      'Minerals',
      'Plastic',
      'Wood',
      'Metal'
    ],
    correctAnswer: 0,
    explanation: 'Rocks are naturally occurring solid materials made of minerals.'
  },

  {
    id: 'sci_bil_k2t2_014',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.BILINGUAL.SCIENCE.id,
    topic: SUBJECTS.BILINGUAL.SCIENCE.topics.ROCKS,
    question: 'Select all natural processes that can form rocks:',
    options: [
      'Cooling of molten material (magma/lava)',
      'Pressing and cementing sediments together',
      'Painting with watercolors',
      'Heat and pressure changing existing rocks',
      'Mixing with plastic'
    ],
    correctAnswer: [0, 1, 3],
    explanation: 'Rocks form naturally through cooling of molten material (igneous), cementing sediments (sedimentary), or heat/pressure changes (metamorphic).'
  },

  {
    id: 'sci_bil_k2t2_015',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.BILINGUAL.SCIENCE.id,
    topic: SUBJECTS.BILINGUAL.SCIENCE.topics.ROCKS,
    question: 'Which of these is NOT a type of rock?',
    options: [
      'Igneous rock',
      'Sedimentary rock',
      'Metallic rock',
      'Metamorphic rock'
    ],
    correctAnswer: 2,
    explanation: 'The three main types of rocks are igneous, sedimentary, and metamorphic. "Metallic rock" is not a scientific category of rocks.'
  },

  {
    id: 'sci_bil_k2t2_016',
    type: QUESTION_TYPES.CMC2,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.BILINGUAL.SCIENCE.id,
    topic: SUBJECTS.BILINGUAL.SCIENCE.topics.ROCKS,
    question: 'Match each rock type with how it forms:',
    leftOptions: [
      'Igneous rock',
      'Sedimentary rock',
      'Metamorphic rock'
    ],
    rightOptions: [
      'Forms when melted rock cools and hardens',
      'Forms when bits of rock, sand, shells, or other materials get pressed together',
      'Forms when existing rocks change due to heat or pressure'
    ],
    correctPairs: [
      [0, 0],
      [1, 1],
      [2, 2]
    ],
    explanation: 'Each rock type forms differently: igneous from cooling magma, sedimentary from compressed materials, metamorphic from changed rocks'
  },

  {
    id: 'sci_bil_k2t2_017',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.BILINGUAL.SCIENCE.id,
    topic: SUBJECTS.BILINGUAL.SCIENCE.topics.ROCKS,
    question: 'What property of rocks describes how hard or soft they are?',
    options: [
      'Hardness',
      'Shininess',
      'Color',
      'Size'
    ],
    correctAnswer: 0,
    explanation: 'Hardness is the property that describes how resistant a rock is to scratching or breaking.'
  },

  {
    id: 'sci_bil_k2t2_018',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.BILINGUAL.SCIENCE.id,
    topic: SUBJECTS.BILINGUAL.SCIENCE.topics.ROCKS,
    question: 'What do geologists study?',
    options: [
      'Plants',
      'Weather',
      'Rocks and Earth',
      'Animals'
    ],
    correctAnswer: 2,
    explanation: 'Geologists are scientists who study rocks, minerals, and the structure of the Earth.'
  },

  {
    id: 'sci_bil_k2t2_019',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.BILINGUAL.SCIENCE.id,
    topic: SUBJECTS.BILINGUAL.SCIENCE.topics.ROCKS,
    question: 'Select all tools that scientists might use to study rocks:',
    options: [
      'Magnifying glass',
      'Hammer',
      'Microscope',
      'Ruler',
      'Fishing rod'
    ],
    correctAnswer: [0, 1, 2, 3],
    explanation: 'Scientists use tools like magnifying glasses, hammers (to break samples), microscopes, and rulers to study rocks.'
  },

  {
    id: 'sci_bil_k2t2_020',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.BILINGUAL.SCIENCE.id,
    topic: SUBJECTS.BILINGUAL.SCIENCE.topics.ROCKS,
    question: 'Where can we find rocks?',
    options: [
      'Everywhere on Earth',
      'Only in mountains',
      'Only in rivers',
      'Only in deserts'
    ],
    correctAnswer: 0,
    explanation: 'Rocks can be found everywhere on Earth - in mountains, rivers, deserts, underground, and even underwater.'
  },

  // More Circuit Questions
  {
    id: 'sci_bil_k2t2_021',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.BILINGUAL.SCIENCE.id,
    topic: SUBJECTS.BILINGUAL.SCIENCE.topics.CIRCUITS,
    question: 'What gives a battery-powered circuit its energy?',
    options: [
      'The battery',
      'The wires',
      'The switch',
      'The bulb'
    ],
    correctAnswer: 0,
    explanation: 'The battery provides the electrical energy that powers the circuit.'
  },

  {
    id: 'sci_bil_k2t2_022',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.BILINGUAL.SCIENCE.id,
    topic: SUBJECTS.BILINGUAL.SCIENCE.topics.CIRCUITS,
    question: 'Select all statements that are true about electrical circuits:',
    options: [
      'Electricity flows in a circle through the circuit',
      'A broken circuit can still light a bulb',
      'Circuits need a power source to work',
      'Metal wires help electricity flow',
      'Plastic is a good conductor of electricity'
    ],
    correctAnswer: [0, 2, 3],
    explanation: 'Electricity flows in a complete circle (circuit), requires a power source, and flows through conductors like metal wires. Plastic is an insulator, not a conductor, and a broken circuit cannot light a bulb.'
  },

  {
    id: 'sci_bil_k2t2_023',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.BILINGUAL.SCIENCE.id,
    topic: SUBJECTS.BILINGUAL.SCIENCE.topics.CIRCUITS,
    question: 'What happens if you disconnect one wire in a simple circuit with a battery and bulb?',
    options: [
      'The bulb goes out',
      'The bulb gets brighter',
      'The bulb flashes',
      'Nothing changes'
    ],
    correctAnswer: 0,
    explanation: 'If you disconnect a wire, the circuit is broken (incomplete), so electricity cannot flow, and the bulb goes out.'
  },

  {
    id: 'sci_bil_k2t2_024',
    type: QUESTION_TYPES.CMC2,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.BILINGUAL.SCIENCE.id,
    topic: SUBJECTS.BILINGUAL.SCIENCE.topics.CIRCUITS,
    question: 'Match each electrical term with its correct definition:',
    leftOptions: [
      'Conductor',
      'Insulator',
      'Switch',
      'Circuit'
    ],
    rightOptions: [
      'Material that allows electricity to flow through it',
      'Material that blocks the flow of electricity',
      'Device that opens or closes an electrical path',
      'Complete path through which electricity can flow'
    ],
    correctPairs: [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3]
    ],
    explanation: 'Each electrical term has a specific meaning in circuit science: conductors allow flow, insulators block flow, switches control flow, and circuits provide the complete path.'
  },

  {
    id: 'sci_bil_k2t2_025',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.BILINGUAL.SCIENCE.id,
    topic: SUBJECTS.BILINGUAL.SCIENCE.topics.CIRCUITS,
    question: 'Which of these devices uses a battery as its power source?',
    options: [
      'Flashlight',
      'Refrigerator',
      'Television',
      'Ceiling fan'
    ],
    correctAnswer: 0,
    explanation: 'A flashlight typically uses batteries as its power source. Refrigerators, televisions, and ceiling fans are usually powered by plugging into electrical outlets.'
  },

  {
    id: 'sci_bil_k2t2_026',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.BILINGUAL.SCIENCE.id,
    topic: SUBJECTS.BILINGUAL.SCIENCE.topics.CIRCUITS,
    question: 'When is it dangerous to use electrical devices? Select all that apply:',
    options: [
      'When standing in water',
      'When the device has frayed wires',
      'When the device is turned off',
      'When using outside during a thunderstorm',
      'When the plug is properly inserted in the outlet'
    ],
    correctAnswer: [0, 1, 3],
    explanation: 'Using electrical devices is dangerous when standing in water (risk of shock), when wires are frayed (fire hazard), and during thunderstorms (lightning risk). Properly plugged-in devices are safe, and turned-off devices are generally safe.'
  },

  {
    id: 'sci_bil_k2t2_027',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.BILINGUAL.SCIENCE.id,
    topic: SUBJECTS.BILINGUAL.SCIENCE.topics.CIRCUITS,
    question: 'What is the main function of wires in a circuit?',
    options: [
      'To carry electricity from one part to another',
      'To create electricity',
      'To store electricity',
      'To make the circuit safer'
    ],
    correctAnswer: 0,
    explanation: 'Wires in a circuit carry (conduct) electricity from one part of the circuit to another. They don\'t create or store electricity.'
  },

  {
    id: 'sci_bil_k2t2_028',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.BILINGUAL.SCIENCE.id,
    topic: SUBJECTS.BILINGUAL.SCIENCE.topics.CIRCUITS,
    question: 'What does a light bulb do in a circuit?',
    options: [
      'Converts electrical energy to light',
      'Makes electricity',
      'Stores electricity',
      'Blocks electricity'
    ],
    correctAnswer: 0,
    explanation: 'A light bulb converts electrical energy into light energy.'
  },

  {
    id: 'sci_bil_k2t2_029',
    type: QUESTION_TYPES.CMC2,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.BILINGUAL.SCIENCE.id,
    topic: SUBJECTS.BILINGUAL.SCIENCE.topics.CIRCUITS,
    question: 'Match each device with its primary energy transformation:',
    leftOptions: [
      'Light bulb',
      'Electric fan',
      'Speaker',
      'Toaster'
    ],
    rightOptions: [
      'Electrical to light energy',
      'Electrical to movement energy',
      'Electrical to sound energy',
      'Electrical to heat energy'
    ],
    correctPairs: [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3]
    ],
    explanation: 'Different electrical devices transform electrical energy into different forms: light bulbs produce light, fans produce movement, speakers produce sound, and toasters produce heat.'
  },

  {
    id: 'sci_bil_k2t2_030',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.BILINGUAL.SCIENCE.id,
    topic: SUBJECTS.BILINGUAL.SCIENCE.topics.CIRCUITS,
    question: 'Which of these is an example of electrical safety?',
    options: [
      'Keeping water away from electrical outlets',
      'Pulling on the cord to unplug a device',
      'Using damaged electrical cords',
      'Touching switches with wet hands'
    ],
    correctAnswer: 0,
    explanation: 'Keeping water away from electrical outlets is an important electrical safety practice. The other options are unsafe behaviors.'
  },

  // More Rock Questions
  {
    id: 'sci_bil_k2t2_031',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.BILINGUAL.SCIENCE.id,
    topic: SUBJECTS.BILINGUAL.SCIENCE.topics.ROCKS,
    question: 'What property of rocks describes how they look?',
    options: [
      'Appearance',
      'Weight',
      'Sound',
      'Smell'
    ],
    correctAnswer: 0,
    explanation: 'Appearance describes how rocks look - their color, texture, pattern, and visual features.'
  },

  {
    id: 'sci_bil_k2t2_032',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.BILINGUAL.SCIENCE.id,
    topic: SUBJECTS.BILINGUAL.SCIENCE.topics.ROCKS,
    question: 'Select all ways that rocks can be different from each other:',
    options: [
      'Color',
      'Size',
      'Shape',
      'Texture',
      'Weight'
    ],
    correctAnswer: [0, 1, 2, 3, 4],
    explanation: 'Rocks can differ in many ways, including their color, size, shape, texture, and weight. These differences help scientists classify them.'
  },

  {
    id: 'sci_bil_k2t2_033',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.BILINGUAL.SCIENCE.id,
    topic: SUBJECTS.BILINGUAL.SCIENCE.topics.ROCKS,
    question: 'How is granite formed?',
    imageUrl: '/images/granite_rock.svg',
    options: [
      'From cooling magma deep in the Earth',
      'From layers of sediment being compressed',
      'From other rocks changing due to heat and pressure',
      'From plants and animals turning to stone'
    ],
    correctAnswer: 0,
    explanation: 'Granite is an igneous rock formed when magma cools slowly deep inside the Earth, allowing crystals to form.'
  },

  {
    id: 'sci_bil_k2t2_034',
    type: QUESTION_TYPES.CMC2,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.BILINGUAL.SCIENCE.id,
    topic: SUBJECTS.BILINGUAL.SCIENCE.topics.ROCKS,
    question: 'Match each rock with its correct category:',
    leftOptions: [
      'Granite',
      'Limestone',
      'Marble',
      'Obsidian'
    ],
    rightOptions: [
      'Igneous rock',
      'Sedimentary rock',
      'Metamorphic rock',
      'Igneous rock'
    ],
    correctPairs: [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3]
    ],
    explanation: 'Granite and obsidian are igneous rocks (formed from cooling magma). Limestone is sedimentary (formed from compressed sediments). Marble is metamorphic (formed when limestone is changed by heat and pressure).'
  },

  {
    id: 'sci_bil_k2t2_035',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.BILINGUAL.SCIENCE.id,
    topic: SUBJECTS.BILINGUAL.SCIENCE.topics.ROCKS,
    question: 'Which tool would you use to find out if a rock contains minerals that can be attracted by a magnet?',
    options: [
      'Magnet',
      'Magnifying glass',
      'Ruler',
      'Scale'
    ],
    correctAnswer: 0,
    explanation: 'A magnet would help you determine if a rock contains magnetic minerals like iron.'
  },

  {
    id: 'sci_bil_k2t2_036',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.BILINGUAL.SCIENCE.id,
    topic: SUBJECTS.BILINGUAL.SCIENCE.topics.ROCKS,
    question: 'Select all statements that are true about fossils:',
    options: [
      'Fossils are often found in sedimentary rock',
      'Fossils can teach us about ancient plants and animals',
      'All rocks contain fossils',
      'Fossils form quickly, usually in days',
      'Scientists who study fossils are called paleontologists'
    ],
    correctAnswer: [0, 1, 4],
    explanation: 'Fossils are most commonly found in sedimentary rocks, teach us about ancient life, and are studied by paleontologists. Not all rocks contain fossils, and fossil formation typically takes thousands or millions of years, not days.'
  },

  {
    id: 'sci_bil_k2t2_037',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.BILINGUAL.SCIENCE.id,
    topic: SUBJECTS.BILINGUAL.SCIENCE.topics.ROCKS,
    question: 'What is the process called when rocks are broken down into smaller pieces over time?',
    options: [
      'Weathering',
      'Growing',
      'Melting',
      'Cooking'
    ],
    correctAnswer: 0,
    explanation: 'Weathering is the process where rocks are broken down into smaller pieces by weather, water, chemicals, or living things over time.'
  },

  {
    id: 'sci_bil_k2t2_038',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.BILINGUAL.SCIENCE.id,
    topic: SUBJECTS.BILINGUAL.SCIENCE.topics.ROCKS,
    question: 'What is the earth\'s hard outer layer made of?',
    options: [
      'Rocks and minerals',
      'Water',
      'Only sand',
      'Only mud'
    ],
    correctAnswer: 0,
    explanation: 'The Earth\'s hard outer layer (crust) is primarily made of rocks and minerals.'
  },

  {
    id: 'sci_bil_k2t2_039',
    type: QUESTION_TYPES.CMC2,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.BILINGUAL.SCIENCE.id,
    topic: SUBJECTS.BILINGUAL.SCIENCE.topics.ROCKS,
    question: 'Match each description with the correct rock feature:',
    leftOptions: [
      'Layers visible in the rock',
      'Small shiny bits in the rock',
      'Holes or bubbles in the rock',
      'Plant imprints in the rock'
    ],
    rightOptions: [
      'Sedimentary feature',
      'Crystal minerals',
      'Volcanic feature',
      'Fossil'
    ],
    correctPairs: [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3]
    ],
    explanation: 'Different rocks show different features: visible layers indicate sedimentary rocks, shiny bits are mineral crystals, holes/bubbles are common in volcanic rocks, and plant imprints are fossils.'
  },

  {
    id: 'sci_bil_k2t2_040',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.BILINGUAL.SCIENCE.id,
    topic: SUBJECTS.BILINGUAL.SCIENCE.topics.ROCKS,
    question: 'What natural process can create new rocks from old ones?',
    options: [
      'The rock cycle',
      'Photosynthesis',
      'Digestion',
      'Breathing'
    ],
    correctAnswer: 0,
    explanation: 'The rock cycle is the natural process where rocks change from one type to another over time through various Earth processes.'
  }
];

// Additional metadata for learning tracking
export const topicDistribution = {
  [SUBJECTS.BILINGUAL.SCIENCE.topics.CIRCUITS]: 20,     // 50%
  [SUBJECTS.BILINGUAL.SCIENCE.topics.ROCKS]: 20         // 50%
};

// Question type distribution
export const questionTypeDistribution = {
  [QUESTION_TYPES.MC]: 20,       // 50%
  [QUESTION_TYPES.CMC1]: 12,     // 30%
  [QUESTION_TYPES.CMC2]: 8       // 20%
};

// Difficulty distribution
export const difficultyDistribution = {
  [DIFFICULTY_LEVELS.EASY]: 16,      // 40%
  [DIFFICULTY_LEVELS.MEDIUM]: 16,    // 40% 
  [DIFFICULTY_LEVELS.HARD]: 8        // 20%
};
