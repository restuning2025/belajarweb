export const DIFFICULTY_LEVELS = {
  EASY: 'easy',
  MEDIUM: 'medium',
  HARD: 'hard'
};

export const QUESTION_TYPES = {
  MC: 'multiple_choice',
  CMC1: 'complex_multiple_choice_1',
  CMC2: 'complex_multiple_choice_2'
};

export const SUBJECTS = {
  REGULAR: {
    MATH: {
      id: 'matematika',
      name: 'Matematika',
      totalQuestions: 50,
      topics: {
        CLOCK_READING: 'Membaca jam analog dan digital',
        TIME_CONVERSION: 'Konversi satuan waktu',
        DURATION: 'Mengukur dan menghitung durasi waktu',
        TIME_TOOLS: 'Alat ukur waktu',
        TIME_OPERATIONS: 'Operasi waktu'
      }
    },
    INDO: {
      id: 'bahasa_indonesia',
      name: 'Bahasa Indonesia',
      totalQuestions: 50,
      topics: {
        FAMILY_ACTIVITIES: 'Aktivitas keluarga',
        ENVIRONMENT: 'Lingkungan sekitar'
      }
    },
    SCIENCE: {
      id: 'sains',
      name: 'Sains',
      totalQuestions: 50,
      topics: {
        EARTH: 'Planet Bumi',
        SEASONS: 'Musim',
        NATURAL_DISASTERS: 'Bencana alam'
      }
    },
    ENGLISH: {
      id: 'english',
      name: 'English',
      totalQuestions: 50,
      topics: {
        HEALTHY_HABITS: 'Healthy habits',
        CELEBRATION: 'Celebration time'
      }
    },
    PPKN: {
      id: 'ppkn',
      name: 'PPKn',
      totalQuestions: 50,
      topics: {
        LIFE_SKILLS: 'Life skills',
        PANCASILA: 'Pancasila',
        NEIGHBORHOOD: 'Bertetangga',
        CHARACTER: 'Budi pekerti'
      }
    },
    PAI: {
      id: 'pai',
      name: 'Pendidikan Agama Islam',
      totalQuestions: 40,
      topics: {
        ETIQUETTE: 'Adab bersin & menguap',
        SURAH: 'Surah Al-Kafirun',
        PROPHETS: 'Kisah Nabi',
        PRAYERS: 'Dzikir & doa'
      }
    },
    PJOK: {
      id: 'pjok',
      name: 'PJOK',
      totalQuestions: 30,
      topics: {
        AGILITY: 'Latihan ketangkasan',
        FLEXIBILITY: 'Kelenturan dan keseimbangan',
        NUTRITION: 'Makanan bergizi'
      }
    },
    SBDP: {
      id: 'sbdp',
      name: 'SBDP',
      totalQuestions: 30,
      topics: {
        WEAVING: 'Anyaman dan prakarya',
        THREE_D: 'Karya 3 dimensi',
        PAPER_CRAFT: 'Melipat dan menempel kertas'
      }
    }
  },
  BILINGUAL: {
    MATH: {
      id: 'mathematics_bil',
      name: 'Mathematics',
      totalQuestions: 40,
      topics: {
        TIME: 'Time and Calendar',
        FRACTIONS: 'Fractions',
        GEOMETRY: '2D and 3D Figures'
      }
    },
    ENGLISH: {
      id: 'english_bil',
      name: 'English',
      totalQuestions: 30,
      topics: {
        OUR_HOUSE: 'Our House',
        WATER_HOUSE: 'House on the Water',
        FIELD_TRIP: 'Our Field Trip'
      }
    },
    SCIENCE: {
      id: 'science_bil',
      name: 'Science',
      totalQuestions: 30,
      topics: {
        CIRCUITS: 'There is a Circuit in Me',
        ROCKS: 'Rocks'
      }
    }
  }
};

export const questionSchema = {
  type: 'object',
  required: [
    'id',
    'type',
    'difficulty',
    'subject',
    'topic',
    'question',
    'options',
    'correctAnswer',
    'explanation'
  ],
  properties: {
    id: {
      type: 'string',
      description: 'Unique identifier for the question'
    },
    type: {
      type: 'string',
      enum: Object.values(QUESTION_TYPES),
      description: 'Type of question (MC, CMC1, CMC2)'
    },
    difficulty: {
      type: 'string',
      enum: Object.values(DIFFICULTY_LEVELS),
      description: 'Difficulty level of the question'
    },
    subject: {
      type: 'string',
      description: 'Subject identifier'
    },
    topic: {
      type: 'string',
      description: 'Topic within the subject'
    },
    question: {
      type: 'string',
      description: 'Question text'
    },
    imageUrl: {
      type: 'string',
      description: 'Optional URL to an image for the question'
    },
    options: {
      type: 'array',
      description: 'Answer options'
    },
    correctAnswer: {
      description: 'Correct answer(s). Format depends on question type'
    },
    explanation: {
      type: 'string',
      description: 'Explanation of the correct answer'
    }
  }
};
