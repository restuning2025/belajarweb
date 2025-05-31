import { QUESTION_TYPES, DIFFICULTY_LEVELS, SUBJECTS } from '../questionSchema';

// Define topic constants for PJOK (Pendidikan Jasmani, Olahraga, dan Kesehatan)
const PJOK_TOPICS = {
  GERAK_LOKOMOTOR: 'Gerak lokomotor',
  AKTIVITAS_JASMANI: 'Aktivitas jasmani',
  KETANGKASAN: 'Latihan ketangkasan',
  KELENTURAN: 'Latihan kelenturan',
  KESEIMBANGAN: 'Latihan keseimbangan',
  GIZI_SEIMBANG: 'Gizi seimbang',
  POLA_MAKAN: 'Pola makan sehat',
  PERMAINAN_TRADISIONAL: 'Permainan tradisional',
  KEAMANAN_OLAHRAGA: 'Keamanan berolahraga',
  AKTIVITAS_AIR: 'Aktivitas air'
};

export const questions = [
  // Topic: Latihan ketangkasan
  {
    id: 'pjok_k2t2_001',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.PJOK.id,
    topic: PJOK_TOPICS.KETANGKASAN,
    question: 'Teknik menendang bola yang memberikan kontrol paling baik adalah...',
    options: [
      'Menggunakan kaki bagian dalam',
      'Menggunakan ujung jari kaki',
      'Menggunakan lutut',
      'Menggunakan tumit'
    ],
    correctAnswer: 0,
    explanation: 'Menendang bola dengan kaki bagian dalam memberikan kontrol yang lebih baik pada arah dan kekuatan tendangan'
  },

  {
    id: 'pjok_k2t2_002',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.PJOK.id,
    topic: PJOK_TOPICS.KETANGKASAN,
    question: 'Gerakan melompat termasuk dalam latihan...',
    options: [
      'Ketangkasan',
      'Kelenturan',
      'Keseimbangan',
      'Kekuatan'
    ],
    correctAnswer: 0,
    explanation: 'Gerakan melompat termasuk dalam latihan ketangkasan karena melibatkan kemampuan mengontrol tubuh saat bergerak cepat'
  },

  {
    id: 'pjok_k2t2_003',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.PJOK.id,
    topic: PJOK_TOPICS.KETANGKASAN,
    question: 'Pilih gerakan yang termasuk latihan ketangkasan:',
    options: [
      'Melompat',
      'Berlari zig-zag',
      'Berdiri dengan satu kaki',
      'Duduk dengan kaki lurus',
      'Menggiring bola'
    ],
    correctAnswer: [0, 1, 4],
    explanation: 'Melompat, berlari zig-zag, dan menggiring bola adalah gerakan ketangkasan karena melibatkan pergerakan tubuh yang cepat, tepat, dan terarah'
  },

  {
    id: 'pjok_k2t2_004',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.PJOK.id,
    topic: PJOK_TOPICS.KETANGKASAN,
    question: 'Apa manfaat latihan ketangkasan?',
    options: [
      'Meningkatkan koordinasi tubuh',
      'Membuat tubuh lebih tinggi',
      'Menambah berat badan',
      'Memperlambat detak jantung'
    ],
    correctAnswer: 0,
    explanation: 'Latihan ketangkasan bermanfaat untuk meningkatkan koordinasi tubuh, kecepatan reaksi, dan kemampuan motorik'
  },

  {
    id: 'pjok_k2t2_005',
    type: QUESTION_TYPES.CMC2,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.REGULAR.PJOK.id,
    topic: PJOK_TOPICS.KETANGKASAN,
    question: 'Pasangkan gerakan dengan jenis latihannya:',
    leftOptions: [
      'Lari zig-zag',
      'Membungkuk',
      'Lompat tali',
      'Menendang bola'
    ],
    rightOptions: [
      'Latihan ketangkasan',
      'Latihan kelenturan',
      'Latihan ketangkasan',
      'Latihan ketangkasan'
    ],
    correctPairs: [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3]
    ],
    explanation: 'Lari zig-zag, lompat tali, dan menendang bola adalah latihan ketangkasan, sedangkan membungkuk adalah latihan kelenturan'
  },

  // Topic: Latihan kelenturan dan keseimbangan
  {
    id: 'pjok_k2t2_006',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.PJOK.id,
    topic: PJOK_TOPICS.KELENTURAN,
    question: 'Apa tujuan dari latihan kelenturan?',
    options: [
      'Meningkatkan rentang gerak sendi',
      'Menambah berat badan',
      'Memperkuat kuku',
      'Membuat tulang lebih pendek'
    ],
    correctAnswer: 0,
    explanation: 'Latihan kelenturan bertujuan untuk meningkatkan rentang gerak sendi dan elastisitas otot'
  },

  {
    id: 'pjok_k2t2_007',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.PJOK.id,
    topic: PJOK_TOPICS.KELENTURAN,
    question: 'Contoh latihan keseimbangan adalah...',
    options: [
      'Berdiri dengan satu kaki',
      'Push-up',
      'Lari 100 meter',
      'Lempar bola'
    ],
    correctAnswer: 0,
    explanation: 'Berdiri dengan satu kaki adalah contoh latihan keseimbangan karena melatih kemampuan mempertahankan posisi tubuh secara stabil'
  },

  {
    id: 'pjok_k2t2_008',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.PJOK.id,
    topic: PJOK_TOPICS.KELENTURAN,
    question: 'Pilih gerakan yang termasuk latihan kelenturan:',
    options: [
      'Membungkuk dan menyentuh jari kaki',
      'Memutar kepala',
      'Lari cepat',
      'Sit-up',
      'Meraih bola sambil melompat'
    ],
    correctAnswer: [0, 1],
    explanation: 'Membungkuk menyentuh jari kaki dan memutar kepala termasuk latihan kelenturan karena melatih fleksibilitas sendi dan otot'
  },

  {
    id: 'pjok_k2t2_009',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.PJOK.id,
    topic: PJOK_TOPICS.KELENTURAN,
    question: 'Latihan keseimbangan yang baik dilakukan dengan...',
    options: [
      'Gerakan lambat dan terkontrol',
      'Gerakan cepat dan kuat',
      'Melompat setinggi mungkin',
      'Berlari secepat mungkin'
    ],
    correctAnswer: 0,
    explanation: 'Latihan keseimbangan lebih efektif dilakukan dengan gerakan lambat dan terkontrol untuk membangun stabilitas tubuh'
  },

  {
    id: 'pjok_k2t2_010',
    type: QUESTION_TYPES.CMC2,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.REGULAR.PJOK.id,
    topic: PJOK_TOPICS.KELENTURAN,
    question: 'Pasangkan gerakan dengan manfaatnya:',
    leftOptions: [
      'Memutar badan ke kanan dan kiri',
      'Berjalan di atas garis lurus',
      'Menyentuh jari kaki dari posisi berdiri',
      'Melentingkan punggung ke belakang'
    ],
    rightOptions: [
      'Meningkatkan kelenturan pinggang',
      'Melatih keseimbangan tubuh',
      'Melatih kelenturan punggung dan kaki',
      'Melatih kelenturan otot punggung'
    ],
    correctPairs: [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3]
    ],
    explanation: 'Setiap gerakan memiliki manfaat spesifik untuk area tubuh tertentu dalam hal kelenturan dan keseimbangan'
  },

  // Topic: Latihan pola makan sehat
  {
    id: 'pjok_k2t2_011',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.PJOK.id,
    topic: PJOK_TOPICS.POLA_MAKAN,
    question: 'Makanan yang mengandung karbohidrat adalah...',
    options: [
      'Nasi',
      'Daging',
      'Minyak',
      'Buah jeruk'
    ],
    correctAnswer: 0,
    explanation: 'Nasi adalah sumber karbohidrat utama dalam pola makan sehari-hari'
  },

  {
    id: 'pjok_k2t2_012',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.PJOK.id,
    topic: PJOK_TOPICS.POLA_MAKAN,
    question: 'Makanan yang baik untuk pertumbuhan tulang adalah...',
    options: [
      'Susu',
      'Permen',
      'Mie instan',
      'Minuman bersoda'
    ],
    correctAnswer: 0,
    explanation: 'Susu mengandung kalsium yang penting untuk pertumbuhan dan kesehatan tulang'
  },

  {
    id: 'pjok_k2t2_013',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.PJOK.id,
    topic: PJOK_TOPICS.POLA_MAKAN,
    question: 'Pilih makanan yang termasuk sumber protein:',
    options: [
      'Telur',
      'Daging ayam',
      'Permen',
      'Nasi',
      'Ikan'
    ],
    correctAnswer: [0, 1, 4],
    explanation: 'Telur, daging ayam, dan ikan adalah sumber protein hewani yang baik untuk pertumbuhan dan perbaikan jaringan tubuh'
  },

  {
    id: 'pjok_k2t2_014',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.PJOK.id,
    topic: PJOK_TOPICS.POLA_MAKAN,
    question: 'Berapa gelas air yang sebaiknya diminum setiap hari?',
    options: [
      '8 gelas',
      '2 gelas',
      '20 gelas',
      'Tidak perlu minum air'
    ],
    correctAnswer: 0,
    explanation: 'Dianjurkan untuk minum sekitar 8 gelas air setiap hari untuk menjaga hidrasi tubuh'
  },

  {
    id: 'pjok_k2t2_015',
    type: QUESTION_TYPES.CMC2,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.REGULAR.PJOK.id,
    topic: PJOK_TOPICS.POLA_MAKAN,
    question: 'Pasangkan makanan dengan kandungan gizinya:',
    leftOptions: [
      'Wortel',
      'Nasi',
      'Daging sapi',
      'Minyak ikan'
    ],
    rightOptions: [
      'Vitamin A',
      'Karbohidrat',
      'Protein',
      'Omega-3'
    ],
    correctPairs: [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3]
    ],
    explanation: 'Setiap makanan memiliki kandungan gizi utama: wortel kaya vitamin A, nasi sumber karbohidrat, daging sapi sumber protein, dan minyak ikan mengandung omega-3'
  },

  {
    id: 'pjok_k2t2_016',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.PJOK.id,
    topic: PJOK_TOPICS.KETANGKASAN,
    question: 'Aktivitas berikut yang melatih ketangkasan adalah...',
    options: [
      'Bermain lompat tali',
      'Duduk tenang',
      'Tidur siang',
      'Menonton TV'
    ],
    correctAnswer: 0,
    explanation: 'Bermain lompat tali melatih ketangkasan karena membutuhkan koordinasi mata dan kaki serta gerakan tubuh yang cepat'
  },

  {
    id: 'pjok_k2t2_017',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.PJOK.id,
    topic: PJOK_TOPICS.KETANGKASAN,
    question: 'Latihan ketangkasan yang bisa dilakukan di dalam ruangan adalah...',
    options: [
      'Melompat dengan satu kaki',
      'Berenang',
      'Bermain sepak bola',
      'Bersepeda'
    ],
    correctAnswer: 0,
    explanation: 'Melompat dengan satu kaki adalah latihan ketangkasan yang dapat dilakukan di dalam ruangan tanpa memerlukan banyak tempat'
  },

  {
    id: 'pjok_k2t2_018',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.REGULAR.PJOK.id,
    topic: PJOK_TOPICS.KETANGKASAN,
    question: 'Pilih permainan yang melatih ketangkasan:',
    options: [
      'Gobak sodor',
      'Benteng',
      'Catur',
      'Ludo',
      'Ular tangga'
    ],
    correctAnswer: [0, 1],
    explanation: 'Gobak sodor dan benteng adalah permainan tradisional yang melatih ketangkasan karena memerlukan gerakan cepat, refleks, dan koordinasi tubuh'
  },

  {
    id: 'pjok_k2t2_019',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.PJOK.id,
    topic: PJOK_TOPICS.KELENTURAN,
    question: 'Kapan waktu terbaik untuk melakukan peregangan?',
    options: [
      'Sebelum dan sesudah berolahraga',
      'Hanya ketika merasa sakit',
      'Hanya saat pagi hari',
      'Tidak perlu melakukan peregangan'
    ],
    correctAnswer: 0,
    explanation: 'Peregangan sebaiknya dilakukan sebelum dan sesudah berolahraga untuk mempersiapkan otot dan mencegah cedera'
  },

  {
    id: 'pjok_k2t2_020',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.REGULAR.PJOK.id,
    topic: PJOK_TOPICS.KELENTURAN,
    question: 'Mengapa kelenturan penting untuk anak-anak?',
    options: [
      'Membantu perkembangan fisik dan mencegah cedera',
      'Hanya penting untuk atlet',
      'Hanya untuk orang dewasa',
      'Tidak penting untuk kesehatan'
    ],
    correctAnswer: 0,
    explanation: 'Kelenturan penting untuk anak-anak karena membantu perkembangan fisik yang optimal, mencegah cedera, dan meningkatkan postur tubuh'
  },

  {
    id: 'pjok_k2t2_021',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.PJOK.id,
    topic: PJOK_TOPICS.KELENTURAN,
    question: 'Pilih gerakan yang melatih keseimbangan:',
    options: [
      'Berjalan di atas garis lurus',
      'Berdiri dengan satu kaki',
      'Sit-up',
      'Push-up',
      'Berjalan dengan telapak kaki dan tumit'
    ],
    correctAnswer: [0, 1, 4],
    explanation: 'Berjalan di atas garis lurus, berdiri dengan satu kaki, dan berjalan dengan telapak kaki dan tumit adalah gerakan yang melatih keseimbangan tubuh'
  },

  {
    id: 'pjok_k2t2_022',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.PJOK.id,
    topic: PJOK_TOPICS.KELENTURAN,
    question: 'Bagian tubuh yang dilatih saat menyentuh jari kaki dari posisi berdiri adalah...',
    options: [
      'Punggung dan hamstring',
      'Lengan',
      'Leher',
      'Perut'
    ],
    correctAnswer: 0,
    explanation: 'Gerakan menyentuh jari kaki dari posisi berdiri melatih kelenturan otot punggung dan hamstring (otot belakang paha)'
  },

  {
    id: 'pjok_k2t2_023',
    type: QUESTION_TYPES.CMC2,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.REGULAR.PJOK.id,
    topic: PJOK_TOPICS.KELENTURAN,
    question: 'Pasangkan gerakan dengan bagian tubuh yang dilatih:',
    leftOptions: [
      'Menoleh ke kanan dan kiri',
      'Mengangkat lengan ke atas',
      'Mencium lutut',
      'Memutar pergelangan kaki'
    ],
    rightOptions: [
      'Leher',
      'Bahu',
      'Punggung dan hamstring',
      'Pergelangan kaki'
    ],
    correctPairs: [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3]
    ],
    explanation: 'Setiap gerakan melatih bagian tubuh yang berbeda: menoleh (leher), mengangkat lengan (bahu), mencium lutut (punggung/hamstring), dan memutar pergelangan kaki (pergelangan kaki)'
  },

  {
    id: 'pjok_k2t2_024',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.PJOK.id,
    topic: PJOK_TOPICS.POLA_MAKAN,
    question: 'Buah berikut yang tinggi vitamin C adalah...',
    options: [
      'Jeruk',
      'Pisang',
      'Alpukat',
      'Semangka'
    ],
    correctAnswer: 0,
    explanation: 'Jeruk merupakan buah yang tinggi kandungan vitamin C, yang penting untuk meningkatkan daya tahan tubuh'
  },

  {
    id: 'pjok_k2t2_025',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.PJOK.id,
    topic: PJOK_TOPICS.POLA_MAKAN,
    question: 'Makanan yang sebaiknya TIDAK dikonsumsi sebelum berolahraga adalah...',
    options: [
      'Makanan berminyak',
      'Pisang',
      'Roti gandum',
      'Air putih'
    ],
    correctAnswer: 0,
    explanation: 'Makanan berminyak sebaiknya tidak dikonsumsi sebelum berolahraga karena sulit dicerna dan dapat menyebabkan gangguan pencernaan saat aktivitas fisik'
  },

  {
    id: 'pjok_k2t2_026',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.PJOK.id,
    topic: PJOK_TOPICS.POLA_MAKAN,
    question: 'Pilih kebiasaan makan yang sehat:',
    options: [
      'Sarapan setiap pagi',
      'Makan sayur dan buah setiap hari',
      'Makan permen setiap hari',
      'Minum air putih 8 gelas sehari',
      'Makan makanan cepat saji setiap hari'
    ],
    correctAnswer: [0, 1, 3],
    explanation: 'Sarapan setiap pagi, makan sayur dan buah setiap hari, dan minum air putih 8 gelas sehari adalah kebiasaan makan yang sehat'
  },

  {
    id: 'pjok_k2t2_027',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.PJOK.id,
    topic: PJOK_TOPICS.POLA_MAKAN,
    question: 'Sarapan sebaiknya dilakukan pada jam...',
    options: [
      '6-8 pagi',
      '10-11 siang',
      '12-1 siang',
      '5-6 sore'
    ],
    correctAnswer: 0,
    explanation: 'Sarapan sebaiknya dilakukan antara jam 6-8 pagi untuk memberikan energi yang cukup untuk memulai aktivitas harian'
  },

  {
    id: 'pjok_k2t2_028',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.REGULAR.PJOK.id,
    topic: PJOK_TOPICS.POLA_MAKAN,
    question: 'Apa akibat dari kekurangan vitamin A?',
    options: [
      'Gangguan penglihatan',
      'Kulit kering',
      'Rambut rontok',
      'Semua jawaban benar'
    ],
    correctAnswer: 3,
    explanation: 'Kekurangan vitamin A dapat menyebabkan berbagai masalah kesehatan, termasuk gangguan penglihatan, kulit kering, dan rambut rontok'
  },

  {
    id: 'pjok_k2t2_029',
    type: QUESTION_TYPES.CMC2,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.REGULAR.PJOK.id,
    topic: PJOK_TOPICS.POLA_MAKAN,
    question: 'Pasangkan jenis makanan dengan kandungan nutrisi utamanya:',
    leftOptions: [
      'Ikan',
      'Jeruk',
      'Bayam',
      'Keju'
    ],
    rightOptions: [
      'Protein dan omega-3',
      'Vitamin C',
      'Zat besi',
      'Kalsium'
    ],
    correctPairs: [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3]
    ],
    explanation: 'Ikan kaya akan protein dan omega-3, jeruk kaya vitamin C, bayam mengandung zat besi, dan keju mengandung kalsium'
  },

  {
    id: 'pjok_k2t2_030',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.PJOK.id,
    topic: PJOK_TOPICS.KETANGKASAN,
    question: 'Latihan melompati cone secara bergantian bermanfaat untuk melatih...',
    options: [
      'Ketangkasan dan kecepatan',
      'Tidur nyenyak',
      'Kekuatan tangan',
      'Daya tahan perut'
    ],
    correctAnswer: 0,
    explanation: 'Latihan melompati cone secara bergantian melatih ketangkasan dan kecepatan karena memerlukan gerakan cepat dan perubahan arah'
  }
];

// Additional metadata for learning tracking
export const topicDistribution = {
  [PJOK_TOPICS.KETANGKASAN]: 10,         // ~33%
  [PJOK_TOPICS.KELENTURAN]: 10,          // ~33% 
  [PJOK_TOPICS.POLA_MAKAN]: 10,          // ~33%
  [PJOK_TOPICS.GERAK_LOKOMOTOR]: 0,      // 0%
  [PJOK_TOPICS.AKTIVITAS_JASMANI]: 0,    // 0%
  [PJOK_TOPICS.KESEIMBANGAN]: 0,         // 0%
  [PJOK_TOPICS.GIZI_SEIMBANG]: 0,        // 0%
  [PJOK_TOPICS.PERMAINAN_TRADISIONAL]: 0, // 0%
  [PJOK_TOPICS.KEAMANAN_OLAHRAGA]: 0,    // 0%
  [PJOK_TOPICS.AKTIVITAS_AIR]: 0         // 0%
};

// Question type distribution
export const questionTypeDistribution = {
  [QUESTION_TYPES.MC]: 21,     // 70%
  [QUESTION_TYPES.CMC1]: 6,    // 20%
  [QUESTION_TYPES.CMC2]: 3     // 10%
};

// Difficulty distribution
export const difficultyDistribution = {
  [DIFFICULTY_LEVELS.EASY]: 12,      // 40%
  [DIFFICULTY_LEVELS.MEDIUM]: 12,    // 40% 
  [DIFFICULTY_LEVELS.HARD]: 6        // 20%
};
