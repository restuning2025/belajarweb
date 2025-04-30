import { QUESTION_TYPES, DIFFICULTY_LEVELS, SUBJECTS } from '../questionSchema';

export const questions = [
  // Topic: Anyaman dan prakarya dari bahan alam
  {
    id: 'sbdp_k2t2_001',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.SBDP.id,
    topic: SUBJECTS.REGULAR.SBDP.topics.MATERIALS,
    question: 'Manakah yang termasuk bahan alam untuk membuat karya seni?',
    options: [
      'Kayu',
      'Plastik',
      'Besi',
      'Kaca'
    ],
    correctAnswer: 0,
    explanation: 'Kayu adalah bahan alam yang berasal dari pohon dan sering digunakan untuk membuat karya seni seperti ukiran'
  },

  {
    id: 'sbdp_k2t2_002',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.SBDP.id,
    topic: SUBJECTS.REGULAR.SBDP.topics.WEAVING,
    question: 'Hasil anyaman tradisional di Indonesia biasa digunakan untuk...',
    options: [
      'Tikar',
      'Komputer',
      'Sepeda',
      'Bola'
    ],
    correctAnswer: 0,
    explanation: 'Tikar adalah salah satu hasil anyaman tradisional yang umum digunakan sebagai alas duduk atau tidur'
  },

  {
    id: 'sbdp_k2t2_003',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.SBDP.id,
    topic: SUBJECTS.REGULAR.SBDP.topics.WEAVING,
    question: 'Pilih bahan alam yang dapat digunakan untuk membuat prakarya:',
    options: [
      'Biji-bijian',
      'Daun kering',
      'Plastik',
      'Kardus',
      'Styrofoam'
    ],
    correctAnswer: [0, 1, 3],
    explanation: 'Biji-bijian, daun kering, dan kardus adalah bahan yang dapat digunakan untuk membuat prakarya. Kardus meskipun bukan bahan alam murni, tetapi terbuat dari kertas yang berasal dari kayu.'
  },

  {
    id: 'sbdp_k2t2_004',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.SBDP.id,
    topic: SUBJECTS.REGULAR.SBDP.topics.WEAVING,
    question: 'Teknik yang digunakan dalam menganyam biasanya adalah...',
    options: [
      'Selang-seling',
      'Memukul',
      'Merebus',
      'Memotong'
    ],
    correctAnswer: 0,
    explanation: 'Teknik selang-seling (satu di atas, satu di bawah) adalah teknik dasar yang digunakan dalam menganyam'
  },

  {
    id: 'sbdp_k2t2_005',
    type: QUESTION_TYPES.CMC2,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.REGULAR.SBDP.id,
    topic: SUBJECTS.REGULAR.SBDP.topics.WEAVING,
    question: 'Pasangkan bahan dengan hasil kerajinan:',
    leftOptions: [
      'Daun pandan',
      'Bambu',
      'Rotan',
      'Tanah liat'
    ],
    rightOptions: [
      'Tikar',
      'Keranjang',
      'Kursi',
      'Gerabah'
    ],
    correctPairs: [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3]
    ],
    explanation: 'Daun pandan digunakan untuk membuat tikar, bambu untuk keranjang, rotan untuk kursi, dan tanah liat untuk gerabah'
  },

  // Topic: Karya seni tiga dimensi
  {
    id: 'sbdp_k2t2_006',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.SBDP.id,
    topic: SUBJECTS.REGULAR.SBDP.topics.THREE_D,
    question: 'Contoh karya seni tiga dimensi adalah...',
    options: [
      'Patung',
      'Lukisan',
      'Foto',
      'Gambar'
    ],
    correctAnswer: 0,
    explanation: 'Patung adalah contoh karya seni tiga dimensi karena memiliki panjang, lebar, dan tinggi'
  },

  {
    id: 'sbdp_k2t2_007',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.SBDP.id,
    topic: SUBJECTS.REGULAR.SBDP.topics.THREE_D,
    question: 'Karya seni tiga dimensi dapat dilihat dari...',
    options: [
      'Berbagai arah',
      'Satu arah saja',
      'Bagian belakang saja',
      'Bagian depan saja'
    ],
    correctAnswer: 0,
    explanation: 'Karya seni tiga dimensi dapat dilihat dari berbagai arah (depan, belakang, samping, atas)'
  },

  {
    id: 'sbdp_k2t2_008',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.SBDP.id,
    topic: SUBJECTS.REGULAR.SBDP.topics.THREE_D,
    question: 'Pilih yang termasuk karya seni tiga dimensi:',
    options: [
      'Patung',
      'Keramik',
      'Lukisan',
      'Mainan boneka',
      'Poster'
    ],
    correctAnswer: [0, 1, 3],
    explanation: 'Patung, keramik, dan mainan boneka adalah karya seni tiga dimensi karena memiliki volume dan dapat dilihat dari berbagai sudut'
  },

  {
    id: 'sbdp_k2t2_009',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.SBDP.id,
    topic: SUBJECTS.REGULAR.SBDP.topics.THREE_D,
    question: 'Bahan yang biasa digunakan untuk membuat patung adalah...',
    options: [
      'Tanah liat',
      'Kertas HVS',
      'Pensil',
      'Cat air'
    ],
    correctAnswer: 0,
    explanation: 'Tanah liat adalah bahan yang umum digunakan untuk membuat patung karena mudah dibentuk'
  },

  {
    id: 'sbdp_k2t2_010',
    type: QUESTION_TYPES.CMC2,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.REGULAR.SBDP.id,
    topic: SUBJECTS.REGULAR.SBDP.topics.THREE_D,
    question: 'Pasangkan jenis karya seni dengan dimensinya:',
    leftOptions: [
      'Patung',
      'Lukisan',
      'Boneka',
      'Gambar'
    ],
    rightOptions: [
      'Tiga dimensi',
      'Dua dimensi',
      'Tiga dimensi',
      'Dua dimensi'
    ],
    correctPairs: [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3]
    ],
    explanation: 'Patung dan boneka memiliki bentuk tiga dimensi, sedangkan lukisan dan gambar adalah karya seni dua dimensi'
  },

  // Topic: Teknik melipat dan menempelkan kertas
  {
    id: 'sbdp_k2t2_011',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.SBDP.id,
    topic: SUBJECTS.REGULAR.SBDP.topics.PAPER_FOLDING,
    question: 'Seni melipat kertas dari Jepang disebut...',
    options: [
      'Origami',
      'Kirigami',
      'Ukiyo-e',
      'Mochi'
    ],
    correctAnswer: 0,
    explanation: 'Origami adalah seni melipat kertas tradisional dari Jepang'
  },

  {
    id: 'sbdp_k2t2_012',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.SBDP.id,
    topic: SUBJECTS.REGULAR.SBDP.topics.PAPER_FOLDING,
    question: 'Untuk membuat kolase, kita membutuhkan...',
    options: [
      'Lem',
      'Air',
      'Tanah',
      'Pasir'
    ],
    correctAnswer: 0,
    explanation: 'Lem dibutuhkan untuk menempelkan potongan-potongan bahan dalam pembuatan kolase'
  },

  {
    id: 'sbdp_k2t2_013',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.SBDP.id,
    topic: SUBJECTS.REGULAR.SBDP.topics.PAPER_FOLDING,
    question: 'Pilih bahan yang bisa digunakan untuk membuat kolase:',
    options: [
      'Potongan kertas',
      'Daun kering',
      'Air',
      'Biji-bijian',
      'Api'
    ],
    correctAnswer: [0, 1, 3],
    explanation: 'Potongan kertas, daun kering, dan biji-bijian adalah bahan yang dapat ditempelkan untuk membuat kolase'
  },

  {
    id: 'sbdp_k2t2_014',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.SBDP.id,
    topic: SUBJECTS.REGULAR.SBDP.topics.PAPER_FOLDING,
    question: 'Jenis kertas yang paling baik untuk origami adalah...',
    options: [
      'Kertas origami khusus',
      'Kertas koran',
      'Kertas tisu',
      'Karton tebal'
    ],
    correctAnswer: 0,
    explanation: 'Kertas origami khusus memiliki ketebalan yang pas dan mudah dilipat tanpa robek'
  },

  {
    id: 'sbdp_k2t2_015',
    type: QUESTION_TYPES.CMC2,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.REGULAR.SBDP.id,
    topic: SUBJECTS.REGULAR.SBDP.topics.PAPER_FOLDING,
    question: 'Pasangkan teknik dengan hasilnya:',
    leftOptions: [
      'Origami',
      'Kolase',
      'Kirigami',
      'Montase'
    ],
    rightOptions: [
      'Bentuk 3D dari lipatan kertas',
      'Gambar dari tempelan bahan',
      'Hiasan dari lipatan dan potongan kertas',
      'Gambar dari potongan foto'
    ],
    correctPairs: [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3]
    ],
    explanation: 'Origami menghasilkan bentuk 3D dari lipatan kertas, kolase menghasilkan gambar dari tempelan bahan, kirigami menghasilkan hiasan dari lipatan dan potongan kertas, dan montase menghasilkan gambar dari potongan foto'
  },

  {
    id: 'sbdp_k2t2_016',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.SBDP.id,
    topic: SUBJECTS.REGULAR.SBDP.topics.WEAVING,
    question: 'Alat yang digunakan untuk memotong ketika membuat anyaman adalah...',
    options: [
      'Gunting',
      'Palu',
      'Obeng',
      'Kompor'
    ],
    correctAnswer: 0,
    explanation: 'Gunting digunakan untuk memotong bahan anyaman seperti daun pandan, bambu tipis, atau rotan agar sesuai dengan ukuran yang diinginkan'
  },

  {
    id: 'sbdp_k2t2_017',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.SBDP.id,
    topic: SUBJECTS.REGULAR.SBDP.topics.WEAVING,
    question: 'Ketika menganyam, sebaiknya bahan alam seperti daun pandan...',
    options: [
      'Direndam terlebih dahulu agar lebih lentur',
      'Dibakar terlebih dahulu',
      'Dibiarkan kering dan keras',
      'Diwarnai dengan cat minyak'
    ],
    correctAnswer: 0,
    explanation: 'Daun pandan dan bahan anyaman lainnya sebaiknya direndam terlebih dahulu agar lebih lentur dan mudah dibentuk saat menganyam'
  },

  {
    id: 'sbdp_k2t2_018',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.REGULAR.SBDP.id,
    topic: SUBJECTS.REGULAR.SBDP.topics.WEAVING,
    question: 'Pilih jenis anyaman yang ada di Indonesia:',
    options: [
      'Anyaman Gedek',
      'Anyaman Kepang',
      'Anyaman Komputer',
      'Anyaman Bambu',
      'Anyaman Plastik'
    ],
    correctAnswer: [0, 1, 3],
    explanation: 'Anyaman Gedek, Anyaman Kepang, dan Anyaman Bambu adalah jenis anyaman tradisional di Indonesia. Anyaman Komputer dan Anyaman Plastik bukan merupakan jenis anyaman tradisional'
  },

  {
    id: 'sbdp_k2t2_019',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.SBDP.id,
    topic: SUBJECTS.REGULAR.SBDP.topics.THREE_D,
    question: 'Bahan yang TIDAK cocok untuk membuat karya seni tiga dimensi adalah...',
    options: [
      'Kertas tipis',
      'Tanah liat',
      'Plastisin',
      'Kayu'
    ],
    correctAnswer: 0,
    explanation: 'Kertas tipis tidak cocok untuk membuat karya seni tiga dimensi yang berdiri sendiri karena terlalu tipis dan tidak kuat menopang bentuk'
  },

  {
    id: 'sbdp_k2t2_020',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.REGULAR.SBDP.id,
    topic: SUBJECTS.REGULAR.SBDP.topics.THREE_D,
    question: 'Perbedaan utama antara seni dua dimensi dan tiga dimensi adalah...',
    options: [
      'Seni tiga dimensi memiliki volume, seni dua dimensi hanya panjang dan lebar',
      'Seni tiga dimensi selalu lebih besar',
      'Seni tiga dimensi hanya bisa dibuat dari tanah liat',
      'Seni dua dimensi lebih mahal'
    ],
    correctAnswer: 0,
    explanation: 'Perbedaan utama antara karya seni dua dan tiga dimensi adalah adanya volume atau ruang pada karya tiga dimensi, sedangkan karya dua dimensi hanya memiliki panjang dan lebar'
  },

  {
    id: 'sbdp_k2t2_021',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.SBDP.id,
    topic: SUBJECTS.REGULAR.SBDP.topics.THREE_D,
    question: 'Pilih bahan yang dapat digunakan untuk membuat patung:',
    options: [
      'Tanah liat',
      'Plastisin',
      'Kertas HVS',
      'Sabun batang',
      'Tinta cair'
    ],
    correctAnswer: [0, 1, 3],
    explanation: 'Tanah liat, plastisin, dan sabun batang adalah bahan yang cukup padat dan dapat dibentuk menjadi patung. Kertas HVS terlalu tipis dan tinta cair tidak dapat mempertahankan bentuknya'
  },

  {
    id: 'sbdp_k2t2_022',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.SBDP.id,
    topic: SUBJECTS.REGULAR.SBDP.topics.THREE_D,
    question: 'Apa yang dimaksud dengan relief?',
    options: [
      'Karya seni tiga dimensi yang menempel pada bidang datar',
      'Karya seni dua dimensi yang digambar di kertas',
      'Karya seni yang dibuat dari kain',
      'Karya seni digital'
    ],
    correctAnswer: 0,
    explanation: 'Relief adalah karya seni tiga dimensi yang menempel atau menjadi satu dengan bidang datar/permukaan, seperti relief pada candi'
  },

  {
    id: 'sbdp_k2t2_023',
    type: QUESTION_TYPES.CMC2,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.REGULAR.SBDP.id,
    topic: SUBJECTS.REGULAR.SBDP.topics.THREE_D,
    question: 'Pasangkan jenis karya dengan sifatnya:',
    leftOptions: [
      'Patung',
      'Keranjang anyaman',
      'Lukisan',
      'Maket rumah'
    ],
    rightOptions: [
      'Karya tiga dimensi tidak fungsional',
      'Karya tiga dimensi fungsional',
      'Karya dua dimensi tidak fungsional',
      'Karya tiga dimensi fungsional miniatur'
    ],
    correctPairs: [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3]
    ],
    explanation: 'Patung adalah karya tiga dimensi yang biasanya tidak memiliki fungsi praktis, keranjang anyaman adalah karya tiga dimensi yang fungsional, lukisan adalah karya dua dimensi non-fungsional, dan maket rumah adalah miniatur tiga dimensi yang fungsional sebagai representasi'
  },

  {
    id: 'sbdp_k2t2_024',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.SBDP.id,
    topic: SUBJECTS.REGULAR.SBDP.topics.PAPER_FOLDING,
    question: 'Hasil karya origami yang populer adalah bentuk...',
    options: [
      'Burung bangau',
      'Mobil',
      'Komputer',
      'Rumah beton'
    ],
    correctAnswer: 0,
    explanation: 'Burung bangau (tsuru) adalah salah satu bentuk origami yang paling populer dan melambangkan kesehatan serta umur panjang dalam tradisi Jepang'
  },

  {
    id: 'sbdp_k2t2_025',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.SBDP.id,
    topic: SUBJECTS.REGULAR.SBDP.topics.PAPER_FOLDING,
    question: 'Perbedaan antara origami dan kirigami adalah...',
    options: [
      'Kirigami menggunakan gunting/pemotong, origami hanya lipatan',
      'Origami dari Jepang, kirigami dari China',
      'Origami menggunakan kertas warna, kirigami kertas putih',
      'Origami untuk anak-anak, kirigami untuk dewasa'
    ],
    correctAnswer: 0,
    explanation: 'Perbedaan utama antara origami dan kirigami adalah penggunaan gunting atau alat pemotong dalam kirigami, sedangkan origami hanya mengandalkan teknik melipat tanpa memotong kertas'
  },

  {
    id: 'sbdp_k2t2_026',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.SBDP.id,
    topic: SUBJECTS.REGULAR.SBDP.topics.PAPER_FOLDING,
    question: 'Pilih bentuk yang biasa dibuat dengan teknik origami:',
    options: [
      'Burung',
      'Katak',
      'Mobil',
      'Bunga',
      'Komputer'
    ],
    correctAnswer: [0, 1, 3],
    explanation: 'Burung, katak, dan bunga adalah bentuk-bentuk yang umum dibuat dengan teknik origami karena bentuknya yang relatif sederhana dan sesuai untuk teknik lipatan kertas'
  },

  {
    id: 'sbdp_k2t2_027',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.SBDP.id,
    topic: SUBJECTS.REGULAR.SBDP.topics.PAPER_FOLDING,
    question: 'Apa yang dimaksud dengan kolase?',
    options: [
      'Karya seni yang dibuat dengan menempelkan berbagai bahan pada permukaan gambar',
      'Seni melipat kertas',
      'Seni membuat patung',
      'Seni menggambar dengan pensil'
    ],
    correctAnswer: 0,
    explanation: 'Kolase adalah teknik menempelkan berbagai bahan seperti kertas, kain, daun kering, dan biji-bijian pada permukaan gambar untuk menciptakan karya seni'
  },

  {
    id: 'sbdp_k2t2_028',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.REGULAR.SBDP.id,
    topic: SUBJECTS.REGULAR.SBDP.topics.PAPER_FOLDING,
    question: 'Teknik melipat kertas yang menghasilkan bentuk dengan banyak lipatan adalah...',
    options: [
      'Origami kompleks',
      'Origami sederhana',
      'Origami datar',
      'Origami lipat'
    ],
    correctAnswer: 0,
    explanation: 'Origami kompleks adalah teknik melipat kertas yang menghasilkan bentuk dengan banyak lipatan, biasanya memerlukan lebih banyak langkah dan kerumitan'
  },

  {
    id: 'sbdp_k2t2_029',
    type: QUESTION_TYPES.CMC2,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.REGULAR.SBDP.id,
    topic: SUBJECTS.REGULAR.SBDP.topics.PAPER_FOLDING,
    question: 'Pasangkan jenis kertas dengan kesesuaiannya untuk seni:',
    leftOptions: [
      'Kertas origami',
      'Kertas karton',
      'Kertas krep',
      'Kertas tisu'
    ],
    rightOptions: [
      'Cocok untuk melipat',
      'Cocok untuk maket',
      'Cocok untuk bunga artifisial',
      'Cocok untuk efek tekstur lembut'
    ],
    correctPairs: [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3]
    ],
    explanation: 'Kertas origami cocok untuk melipat karena ketebalan yang pas, kertas karton cocok untuk maket karena kuat, kertas krep cocok untuk bunga artifisial karena elastis, dan kertas tisu cocok untuk efek tekstur lembut'
  },

  {
    id: 'sbdp_k2t2_030',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.SBDP.id,
    topic: SUBJECTS.REGULAR.SBDP.topics.WEAVING,
    question: 'Anyaman yang rapat dan kuat cocok digunakan untuk membuat...',
    options: [
      'Tas belanja',
      'Lukisan',
      'Patung tanah liat',
      'Buku'
    ],
    correctAnswer: 0,
    explanation: 'Anyaman yang rapat dan kuat cocok digunakan untuk membuat tas belanja karena dapat menampung beban dan tidak mudah rusak'
  }
];

// Additional metadata for learning tracking
export const topicDistribution = {
  [SUBJECTS.REGULAR.SBDP.topics.WEAVING]: 10,        // ~33%
  [SUBJECTS.REGULAR.SBDP.topics.THREE_D]: 10,       // ~33% 
  [SUBJECTS.REGULAR.SBDP.topics.PAPER_FOLDING]: 10   // ~33%
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
