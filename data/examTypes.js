export const QUESTION_TYPES = {
  REGULAR_MCQ: 'regular_mcq',
  COMPLEX_MCQ_1: 'complex_mcq_1',
  COMPLEX_MCQ_2: 'complex_mcq_2'
};

export const CLASS_TYPES = {
  REGULAR: 'regular',
  BILINGUAL: 'bilingual'
};

export const SUBJECTS_REGULAR = {
  MATHEMATICS: {
    id: 'math',
    name: 'Matematika',
    totalQuestions: 50,
    topics: [
      'Membaca jam analog dan digital',
      'Konversi satuan waktu',
      'Mengukur dan menghitung durasi waktu',
      'Alat ukur waktu',
      'Operasi waktu'
    ]
  },
  BAHASA_INDONESIA: {
    id: 'indo',
    name: 'Bahasa Indonesia',
    totalQuestions: 50,
    topics: [
      'Aktivitas keluarga',
      'Lingkungan sekitar'
    ]
  },
  SCIENCE: {
    id: 'science',
    name: 'Sains',
    totalQuestions: 50,
    topics: [
      'Planet Bumi',
      'Musim',
      'Bencana alam di Indonesia'
    ]
  },
  ENGLISH: {
    id: 'english',
    name: 'English',
    totalQuestions: 50,
    topics: [
      'Healthy habits',
      'Celebration time'
    ]
  },
  PPKN: {
    id: 'ppkn',
    name: 'PPKn',
    totalQuestions: 50,
    topics: [
      'Life skills',
      'Pancasila',
      'Bertetangga',
      'Budi pekerti'
    ]
  },
  PAI: {
    id: 'pai',
    name: 'Pendidikan Agama Islam',
    totalQuestions: 40,
    topics: [
      'Adab bersin & menguap',
      'Surah Al-Kafirun',
      'Kisah Nabi',
      'Dzikir & doa'
    ]
  },
  PJOK: {
    id: 'pjok',
    name: 'PJOK',
    totalQuestions: 30,
    topics: [
      'Latihan ketangkasan',
      'Kelenturan dan keseimbangan',
      'Makanan bergizi'
    ]
  },
  SBDP: {
    id: 'sbdp',
    name: 'SBDP',
    totalQuestions: 30,
    topics: [
      'Anyaman dan prakarya',
      'Karya 3 dimensi',
      'Melipat dan menempel kertas'
    ]
  }
};

export const SUBJECTS_BILINGUAL = {
  MATHEMATICS: {
    id: 'math_bil',
    name: 'Mathematics',
    totalQuestions: 40,
    topics: [
      'Time and Calendar',
      'Fractions',
      '2D and 3D Figures'
    ]
  },
  ENGLISH: {
    id: 'eng_bil',
    name: 'English',
    totalQuestions: 30,
    topics: [
      'Our House & There is/There are',
      'House on the Water & There is/There are',
      'Our Field Trip & There was/There were'
    ]
  },
  SCIENCE: {
    id: 'sci_bil',
    name: 'Science',
    totalQuestions: 30,
    topics: [
      'There is a Circuit in Me',
      'Rocks'
    ]
  }
};
