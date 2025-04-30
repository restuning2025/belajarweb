import { QUESTION_TYPES, DIFFICULTY_LEVELS, SUBJECTS } from '../questionSchema';

export const questions = [
  // Topic: Planet Bumi: jenis batuan dan tanah
  {
    id: 'sains_k2t2_001',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.SCIENCE.id,
    topic: SUBJECTS.REGULAR.SCIENCE.topics.EARTH,
    question: 'Batuan yang terbentuk dari magma yang mendingin di dalam kerak bumi disebut...',
    options: [
      'Batuan beku (granit)',
      'Batuan sedimen (batu kapur)',
      'Batuan metamorf (marmer)',
      'Batuan apung'
    ],
    correctAnswer: 0,
    explanation: 'Batuan beku seperti granit terbentuk dari magma yang mendingin di dalam kerak bumi. Ini membedakannya dari batuan sedimen yang terbentuk dari pengendapan material'
  },

  {
    id: 'sains_k2t2_002',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.SCIENCE.id,
    topic: SUBJECTS.REGULAR.SCIENCE.topics.EARTH,
    question: 'Batuan yang terbentuk dari tumpukan material seperti pasir, tanah, dan kerikil yang terendap selama jutaan tahun disebut...',
    options: [
      'Batuan sedimen',
      'Batuan beku',
      'Batuan metamorf',
      'Batuan pasir'
    ],
    correctAnswer: 0,
    explanation: 'Batuan sedimen terbentuk dari pengendapan material-material yang mengeras setelah jutaan tahun'
  },

  {
    id: 'sains_k2t2_003',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.SCIENCE.id,
    topic: SUBJECTS.REGULAR.SCIENCE.topics.EARTH,
    question: 'Pilih semua pernyataan yang benar tentang tanah humus:',
    options: [
      'Berwarna hitam atau cokelat gelap',
      'Mengandung banyak mineral',
      'Sangat subur untuk tanaman',
      'Terdiri dari pasir halus',
      'Terbentuk dari sisa-sisa tumbuhan dan hewan yang membusuk'
    ],
    correctAnswer: [0, 2, 4],
    explanation: 'Tanah humus memiliki ciri-ciri: berwarna hitam atau cokelat gelap, sangat subur untuk tanaman, dan terbentuk dari sisa-sisa organisme yang membusuk'
  },

  {
    id: 'sains_k2t2_004',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.SCIENCE.id,
    topic: SUBJECTS.REGULAR.SCIENCE.topics.EARTH,
    question: 'Jenis tanah apakah yang cocok untuk membuat kerajinan gerabah?',
    options: [
      'Tanah liat',
      'Tanah humus',
      'Tanah berpasir',
      'Tanah kapur'
    ],
    correctAnswer: 0,
    explanation: 'Tanah liat memiliki tekstur lengket dan dapat dibentuk, sehingga cocok untuk membuat gerabah'
  },

  {
    id: 'sains_k2t2_005',
    type: QUESTION_TYPES.CMC2,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.REGULAR.SCIENCE.id,
    topic: SUBJECTS.REGULAR.SCIENCE.topics.EARTH,
    question: 'Pasangkan jenis batuan dengan contohnya:',
    leftOptions: [
      'Batuan beku',
      'Batuan sedimen',
      'Batuan metamorf',
      'Batuan vulkanik'
    ],
    rightOptions: [
      'Granit',
      'Batu kapur',
      'Marmer',
      'Batu obsidian'
    ],
    correctPairs: [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3]
    ],
    explanation: 'Granit adalah contoh batuan beku, batu kapur adalah batuan sedimen, marmer adalah batuan metamorf, dan obsidian adalah batuan vulkanik'
  },

  // Topic: Musim: Iklim 2 musim & 4 musim
  {
    id: 'sains_k2t2_006',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.SCIENCE.id,
    topic: SUBJECTS.REGULAR.SCIENCE.topics.SEASONS,
    question: 'Indonesia memiliki berapa musim?',
    options: [
      '2 musim',
      '3 musim',
      '4 musim',
      '1 musim'
    ],
    correctAnswer: 0,
    explanation: 'Indonesia memiliki 2 musim, yaitu musim hujan dan musim kemarau'
  },

  {
    id: 'sains_k2t2_007',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.SCIENCE.id,
    topic: SUBJECTS.REGULAR.SCIENCE.topics.SEASONS,
    question: 'Negara yang memiliki 4 musim memiliki musim-musim berikut, KECUALI:',
    options: [
      'Musim hujan',
      'Musim semi',
      'Musim panas',
      'Musim gugur'
    ],
    correctAnswer: 0,
    explanation: 'Negara dengan 4 musim memiliki musim semi, musim panas, musim gugur, dan musim dingin. Musim hujan adalah bagian dari iklim 2 musim seperti di Indonesia'
  },

  {
    id: 'sains_k2t2_008',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.SCIENCE.id,
    topic: SUBJECTS.REGULAR.SCIENCE.topics.SEASONS,
    question: 'Pilih ciri-ciri musim dingin:',
    options: [
      'Suhu sangat rendah',
      'Sering turun salju',
      'Pohon-pohon berbunga',
      'Daun-daun berjatuhan',
      'Orang memakai pakaian tebal'
    ],
    correctAnswer: [0, 1, 4],
    explanation: 'Musim dingin memiliki ciri-ciri: suhu sangat rendah, sering turun salju, dan orang memakai pakaian tebal untuk menghangatkan badan'
  },

  {
    id: 'sains_k2t2_009',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.SCIENCE.id,
    topic: SUBJECTS.REGULAR.SCIENCE.topics.SEASONS,
    question: 'Mengapa Indonesia hanya memiliki 2 musim?',
    options: [
      'Karena Indonesia terletak di sekitar garis khatulistiwa',
      'Karena Indonesia adalah negara kepulauan',
      'Karena Indonesia memiliki banyak gunung',
      'Karena Indonesia berada di benua Asia'
    ],
    correctAnswer: 0,
    explanation: 'Indonesia memiliki 2 musim karena letaknya di sekitar garis khatulistiwa (equator), yang menyebabkan sinar matahari relatif tetap sepanjang tahun'
  },

  {
    id: 'sains_k2t2_010',
    type: QUESTION_TYPES.CMC2,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.REGULAR.SCIENCE.id,
    topic: SUBJECTS.REGULAR.SCIENCE.topics.SEASONS,
    question: 'Pasangkan musim dengan ciri-cirinya:',
    leftOptions: [
      'Musim semi',
      'Musim panas',
      'Musim gugur',
      'Musim dingin'
    ],
    rightOptions: [
      'Bunga-bunga bermekaran',
      'Suhu sangat tinggi',
      'Daun berubah warna dan gugur',
      'Salju turun'
    ],
    correctPairs: [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3]
    ],
    explanation: 'Musim semi ditandai dengan bunga bermekaran, musim panas dengan suhu tinggi, musim gugur dengan daun berubah warna dan gugur, dan musim dingin dengan turunnya salju'
  },

  // Topic: Musim: Simbol Cuaca
  {
    id: 'sains_k2t2_011',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.SCIENCE.id,
    topic: SUBJECTS.REGULAR.SCIENCE.topics.SEASONS,
    question: 'Simbol apa yang menunjukkan cuaca hujan?',
    options: [
      'Gambar awan dengan tetesan air',
      'Gambar matahari',
      'Gambar awan saja',
      'Gambar petir'
    ],
    correctAnswer: 0,
    explanation: 'Simbol cuaca hujan ditunjukkan dengan gambar awan dengan tetesan air di bawahnya'
  },

  {
    id: 'sains_k2t2_012',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.SCIENCE.id,
    topic: SUBJECTS.REGULAR.SCIENCE.topics.SEASONS,
    question: 'Pilih simbol cuaca yang biasanya digunakan dalam prakiraan cuaca:',
    options: [
      'Matahari',
      'Awan',
      'Hujan',
      'Bola dunia',
      'Pohon'
    ],
    correctAnswer: [0, 1, 2],
    explanation: 'Simbol cuaca yang umum digunakan dalam prakiraan cuaca adalah matahari (cerah), awan (berawan), dan hujan (hujan)'
  },

  {
    id: 'sains_k2t2_013',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.SCIENCE.id,
    topic: SUBJECTS.REGULAR.SCIENCE.topics.SEASONS,
    question: 'Apa yang dimaksud dengan simbol awan dengan matahari mengintip?',
    options: [
      'Cuaca cerah berawan',
      'Cuaca hujan',
      'Cuaca berangin',
      'Cuaca berkabut'
    ],
    correctAnswer: 0,
    explanation: 'Simbol awan dengan matahari mengintip menunjukkan cuaca cerah berawan, artinya ada awan tetapi matahari masih terlihat'
  },

  // Topic: Musim: Perubahan Cuaca
  {
    id: 'sains_k2t2_014',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.SCIENCE.id,
    topic: SUBJECTS.REGULAR.SCIENCE.topics.SEASONS,
    question: 'Apa yang menyebabkan perubahan cuaca?',
    options: [
      'Perubahan suhu, tekanan udara, dan kelembaban',
      'Perputaran bumi pada porosnya',
      'Gravitasi bulan',
      'Rotasi matahari'
    ],
    correctAnswer: 0,
    explanation: 'Perubahan cuaca disebabkan oleh perubahan suhu, tekanan udara, dan kelembaban di atmosfer'
  },

  {
    id: 'sains_k2t2_015',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.SCIENCE.id,
    topic: SUBJECTS.REGULAR.SCIENCE.topics.SEASONS,
    question: 'Pilih tanda-tanda cuaca akan hujan:',
    options: [
      'Langit berawan tebal',
      'Udara terasa lebih lembab',
      'Kemunculan pelangi',
      'Serangga seperti semut bergerak ke tempat yang lebih tinggi',
      'Matahari bersinar terang'
    ],
    correctAnswer: [0, 1, 3],
    explanation: 'Tanda-tanda akan hujan: langit berawan tebal, udara terasa lebih lembab, dan beberapa serangga seperti semut bergerak ke tempat yang lebih tinggi'
  },

  // Topic: Musim: Khatulistiwa/Equator
  {
    id: 'sains_k2t2_016',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.SCIENCE.id,
    topic: SUBJECTS.REGULAR.SCIENCE.topics.SEASONS,
    question: 'Apa yang dimaksud dengan garis khatulistiwa?',
    options: [
      'Garis imajiner yang membagi bumi menjadi belahan utara dan selatan',
      'Garis imajiner yang membagi bumi menjadi belahan timur dan barat',
      'Garis yang menunjukkan arah utara dan selatan',
      'Garis yang menunjukkan waktu di berbagai negara'
    ],
    correctAnswer: 0,
    explanation: 'Garis khatulistiwa (equator) adalah garis imajiner yang membagi bumi menjadi belahan bumi utara dan belahan bumi selatan'
  },

  {
    id: 'sains_k2t2_017',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.REGULAR.SCIENCE.id,
    topic: SUBJECTS.REGULAR.SCIENCE.topics.SEASONS,
    question: 'Negara-negara di sekitar garis khatulistiwa umumnya memiliki:',
    options: [
      'Iklim tropis dengan suhu hangat sepanjang tahun',
      'Empat musim yang jelas',
      'Musim dingin yang panjang',
      'Suhu yang sangat panas sepanjang tahun'
    ],
    correctAnswer: 0,
    explanation: 'Negara-negara di sekitar garis khatulistiwa umumnya memiliki iklim tropis dengan suhu yang relatif hangat dan stabil sepanjang tahun'
  },

  // Topic: Bencana Alam di Indonesia: Banjir dan Kekeringan
  {
    id: 'sains_k2t2_018',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.SCIENCE.id,
    topic: SUBJECTS.REGULAR.SCIENCE.topics.NATURAL_DISASTERS,
    question: 'Apa penyebab utama terjadinya banjir?',
    options: [
      'Hujan lebat dan sistem drainase yang buruk',
      'Gempa bumi',
      'Letusan gunung berapi',
      'Angin kencang'
    ],
    correctAnswer: 0,
    explanation: 'Banjir umumnya disebabkan oleh hujan lebat yang berkepanjangan serta sistem drainase yang tidak mampu menampung air dalam jumlah besar'
  },

  {
    id: 'sains_k2t2_019',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.SCIENCE.id,
    topic: SUBJECTS.REGULAR.SCIENCE.topics.NATURAL_DISASTERS,
    question: 'Pilih cara-cara mencegah banjir:',
    options: [
      'Tidak membuang sampah di sungai',
      'Membuat sumur resapan',
      'Melakukan reboisasi (penanaman pohon)',
      'Menggunduli hutan',
      'Membakar sampah'
    ],
    correctAnswer: [0, 1, 2],
    explanation: 'Cara mencegah banjir antara lain: tidak membuang sampah di sungai agar aliran air lancar, membuat sumur resapan untuk menyerap air hujan, dan melakukan reboisasi agar tanah dapat menyerap air'
  },

  {
    id: 'sains_k2t2_020',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.SCIENCE.id,
    topic: SUBJECTS.REGULAR.SCIENCE.topics.NATURAL_DISASTERS,
    question: 'Apa yang dimaksud dengan kekeringan?',
    options: [
      'Kondisi kekurangan air dalam jangka waktu lama',
      'Kondisi ketika air sungai meluap',
      'Kondisi ketika tanah bergetar dan runtuh',
      'Kondisi ketika air laut naik ke daratan'
    ],
    correctAnswer: 0,
    explanation: 'Kekeringan adalah kondisi dimana suatu daerah mengalami kekurangan air dalam jangka waktu yang lama, biasanya terjadi pada musim kemarau'
  },

  // Additional Earth/Planet Questions
  {
    id: 'sains_k2t2_021',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.SCIENCE.id,
    topic: SUBJECTS.REGULAR.SCIENCE.topics.EARTH,
    question: 'Batuan yang berubah bentuk karena panas dan tekanan tinggi disebut:',
    options: [
      'Batuan metamorf',
      'Batuan beku',
      'Batuan sedimen',
      'Batuan kapur'
    ],
    correctAnswer: 0,
    explanation: 'Batuan metamorf adalah batuan yang telah mengalami perubahan bentuk akibat panas dan tekanan tinggi di dalam bumi'
  },

  {
    id: 'sains_k2t2_022',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.REGULAR.SCIENCE.id,
    topic: SUBJECTS.REGULAR.SCIENCE.topics.EARTH,
    question: 'Pilih semua contoh batuan beku:',
    options: [
      'Granit',
      'Obsidian',
      'Batu kapur',
      'Basal',
      'Marmer'
    ],
    correctAnswer: [0, 1, 3],
    explanation: 'Granit, obsidian, dan basal adalah contoh batuan beku. Batu kapur adalah batuan sedimen, dan marmer adalah batuan metamorf.'
  },

  {
    id: 'sains_k2t2_023',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.SCIENCE.id,
    topic: SUBJECTS.REGULAR.SCIENCE.topics.EARTH,
    question: 'Jenis tanah yang paling baik untuk pertanian adalah:',
    options: [
      'Tanah humus',
      'Tanah liat',
      'Tanah kapur',
      'Tanah berpasir'
    ],
    correctAnswer: 0,
    explanation: 'Tanah humus sangat subur dan kaya akan nutrisi, sehingga paling baik untuk pertanian'
  },

  {
    id: 'sains_k2t2_024',
    type: QUESTION_TYPES.CMC2,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.SCIENCE.id,
    topic: SUBJECTS.REGULAR.SCIENCE.topics.EARTH,
    question: 'Pasangkan jenis tanah dengan karakteristiknya:',
    leftOptions: [
      'Tanah humus',
      'Tanah liat',
      'Tanah berpasir',
      'Tanah kapur'
    ],
    rightOptions: [
      'Kaya akan nutrisi dan subur',
      'Lengket dan dapat dibentuk',
      'Kering dan mudah menyerap air',
      'Mengandung banyak kalsium'
    ],
    correctPairs: [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3]
    ],
    explanation: 'Setiap jenis tanah memiliki karakteristik khas: humus kaya nutrisi, liat lengket, berpasir kering, dan kapur mengandung kalsium'
  },

  {
    id: 'sains_k2t2_025',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.SCIENCE.id,
    topic: SUBJECTS.REGULAR.SCIENCE.topics.EARTH,
    question: 'Lapisan bumi yang kita tinggali adalah:',
    options: [
      'Kerak bumi',
      'Mantel bumi',
      'Inti luar',
      'Inti dalam'
    ],
    correctAnswer: 0,
    explanation: 'Kerak bumi adalah lapisan terluar bumi tempat manusia dan makhluk hidup lainnya tinggal'
  },

  // Additional Seasons Questions
  {
    id: 'sains_k2t2_026',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.SCIENCE.id,
    topic: SUBJECTS.REGULAR.SCIENCE.topics.SEASONS,
    question: 'Kapan biasanya musim kemarau terjadi di Indonesia?',
    options: [
      'April hingga September',
      'Januari hingga Maret',
      'Oktober hingga Desember',
      'Sepanjang tahun'
    ],
    correctAnswer: 0,
    explanation: 'Di sebagian besar wilayah Indonesia, musim kemarau biasanya terjadi antara bulan April hingga September'
  },

  {
    id: 'sains_k2t2_027',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.SCIENCE.id,
    topic: SUBJECTS.REGULAR.SCIENCE.topics.SEASONS,
    question: 'Pilih ciri-ciri musim kemarau di Indonesia:',
    options: [
      'Curah hujan rendah',
      'Suhu udara lebih tinggi',
      'Tanah menjadi kering dan retak',
      'Sering terjadi badai',
      'Banyak pohon berbunga'
    ],
    correctAnswer: [0, 1, 2],
    explanation: 'Musim kemarau ditandai dengan curah hujan rendah, suhu udara yang lebih tinggi, dan tanah yang menjadi kering dan retak'
  },

  {
    id: 'sains_k2t2_028',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.SCIENCE.id,
    topic: SUBJECTS.REGULAR.SCIENCE.topics.SEASONS,
    question: 'Apa akibat dari musim kemarau yang berkepanjangan?',
    options: [
      'Kekeringan',
      'Banjir',
      'Longsor',
      'Tsunami'
    ],
    correctAnswer: 0,
    explanation: 'Musim kemarau yang berkepanjangan dapat menyebabkan kekeringan, yang berdampak pada kesulitan mendapatkan air dan gagal panen'
  },

  {
    id: 'sains_k2t2_029',
    type: QUESTION_TYPES.CMC2,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.REGULAR.SCIENCE.id,
    topic: SUBJECTS.REGULAR.SCIENCE.topics.SEASONS,
    question: 'Pasangkan aktivitas dengan musim yang paling tepat:',
    leftOptions: [
      'Menanam padi',
      'Mengeringkan hasil panen',
      'Bermain layang-layang',
      'Menggunakan payung'
    ],
    rightOptions: [
      'Awal musim hujan',
      'Musim kemarau',
      'Musim kemarau',
      'Musim hujan'
    ],
    correctPairs: [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3]
    ],
    explanation: 'Petani biasanya menanam padi di awal musim hujan, mengeringkan hasil panen dan bermain layang-layang dilakukan saat musim kemarau, dan payung digunakan saat musim hujan'
  },

  {
    id: 'sains_k2t2_030',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.SCIENCE.id,
    topic: SUBJECTS.REGULAR.SCIENCE.topics.SEASONS,
    question: 'Apa yang menyebabkan terjadinya perubahan musim di negara dengan empat musim?',
    options: [
      'Kemiringan sumbu bumi dan rotasi bumi mengelilingi matahari',
      'Jarak bumi ke bulan',
      'Rotasi bumi pada porosnya',
      'Letak benua di bumi'
    ],
    correctAnswer: 0,
    explanation: 'Perubahan musim di negara dengan empat musim disebabkan oleh kemiringan sumbu bumi dan rotasi bumi mengelilingi matahari'
  },

  // Additional Natural Disasters Questions
  {
    id: 'sains_k2t2_031',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.SCIENCE.id,
    topic: SUBJECTS.REGULAR.SCIENCE.topics.NATURAL_DISASTERS,
    question: 'Manakah yang bukan termasuk bencana alam?',
    options: [
      'Kebakaran gedung',
      'Gempa bumi',
      'Letusan gunung berapi',
      'Tsunami'
    ],
    correctAnswer: 0,
    explanation: 'Kebakaran gedung adalah bencana yang disebabkan oleh manusia, bukan bencana alam'
  },

  {
    id: 'sains_k2t2_032',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.SCIENCE.id,
    topic: SUBJECTS.REGULAR.SCIENCE.topics.NATURAL_DISASTERS,
    question: 'Pilih bencana alam yang sering terjadi di Indonesia:',
    options: [
      'Gempa bumi',
      'Banjir',
      'Tornado',
      'Letusan gunung berapi',
      'Badai salju'
    ],
    correctAnswer: [0, 1, 3],
    explanation: 'Gempa bumi, banjir, dan letusan gunung berapi sering terjadi di Indonesia. Tornado jarang terjadi, dan badai salju tidak terjadi di Indonesia karena beriklim tropis.'
  },

  {
    id: 'sains_k2t2_033',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.SCIENCE.id,
    topic: SUBJECTS.REGULAR.SCIENCE.topics.NATURAL_DISASTERS,
    question: 'Apa yang harus dilakukan saat terjadi gempa bumi?',
    options: [
      'Berlindung di bawah meja yang kokoh',
      'Berdiri di dekat jendela',
      'Naik ke atap',
      'Menggunakan lift'
    ],
    correctAnswer: 0,
    explanation: 'Saat gempa bumi, berlindung di bawah meja yang kokoh dapat melindungi dari reruntuhan. Hindari jendela, atap, dan lift.'
  },

  {
    id: 'sains_k2t2_034',
    type: QUESTION_TYPES.CMC2,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.REGULAR.SCIENCE.id,
    topic: SUBJECTS.REGULAR.SCIENCE.topics.NATURAL_DISASTERS,
    question: 'Pasangkan bencana alam dengan penyebabnya:',
    leftOptions: [
      'Banjir',
      'Gempa bumi',
      'Tsunami',
      'Tanah longsor'
    ],
    rightOptions: [
      'Hujan deras dan sistem drainase buruk',
      'Pergerakan lempeng tektonik',
      'Gempa bumi di dasar laut',
      'Erosi tanah dan hujan lebat'
    ],
    correctPairs: [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3]
    ],
    explanation: 'Setiap bencana alam memiliki penyebab spesifik: banjir disebabkan hujan deras, gempa bumi oleh pergerakan lempeng, tsunami oleh gempa di dasar laut, dan longsor oleh erosi tanah'
  },

  {
    id: 'sains_k2t2_035',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.SCIENCE.id,
    topic: SUBJECTS.REGULAR.SCIENCE.topics.NATURAL_DISASTERS,
    question: 'Tanda bahaya tsunami setelah gempa bumi adalah:',
    options: [
      'Air laut tiba-tiba surut jauh ke tengah laut',
      'Cuaca menjadi sangat panas',
      'Banyak burung beterbangan',
      'Langit menjadi gelap'
    ],
    correctAnswer: 0,
    explanation: 'Tanda bahaya tsunami yang paling umum adalah air laut yang tiba-tiba surut jauh ke tengah laut sebelum gelombang tsunami datang'
  },

  // Add even more questions on each topic to reach 50 total
  {
    id: 'sains_k2t2_036',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.SCIENCE.id,
    topic: SUBJECTS.REGULAR.SCIENCE.topics.EARTH,
    question: 'Bumi terbagi menjadi berapa lapisan utama?',
    options: [
      '3 lapisan',
      '4 lapisan',
      '5 lapisan',
      '6 lapisan'
    ],
    correctAnswer: 1,
    explanation: 'Bumi terbagi menjadi 4 lapisan utama: kerak bumi, mantel bumi, inti luar, dan inti dalam'
  },
  
  {
    id: 'sains_k2t2_037',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.SCIENCE.id,
    topic: SUBJECTS.REGULAR.SCIENCE.topics.EARTH,
    question: 'Pilih pernyataan yang benar tentang batuan vulkanik:',
    options: [
      'Terbentuk dari magma atau lava yang mendingin',
      'Memiliki struktur kristalin',
      'Contohnya adalah obsidian',
      'Terbentuk dari sedimen',
      'Selalu berwarna hitam'
    ],
    correctAnswer: [0, 1, 2],
    explanation: 'Batuan vulkanik terbentuk dari magma/lava yang mendingin, memiliki struktur kristalin, dan salah satu contohnya adalah obsidian'
  },
  
  {
    id: 'sains_k2t2_038',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.REGULAR.SCIENCE.id,
    topic: SUBJECTS.REGULAR.SCIENCE.topics.EARTH,
    question: 'Manakah yang BUKAN merupakan manfaat tanah liat?',
    options: [
      'Sebagai bahan bakar',
      'Membuat gerabah',
      'Membuat batu bata',
      'Membuat keramik'
    ],
    correctAnswer: 0,
    explanation: 'Tanah liat digunakan untuk membuat gerabah, batu bata, dan keramik, tetapi tidak digunakan sebagai bahan bakar'
  },
  
  {
    id: 'sains_k2t2_039',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.SCIENCE.id,
    topic: SUBJECTS.REGULAR.SCIENCE.topics.SEASONS,
    question: 'Manakah yang merupakan tanda-tanda awal musim hujan di Indonesia?',
    options: [
      'Mulai turun hujan secara teratur',
      'Suhu udara sangat panas',
      'Daun-daun mulai mengering',
      'Air sungai surut'
    ],
    correctAnswer: 0,
    explanation: 'Tanda awal musim hujan di Indonesia adalah mulai turunnya hujan secara teratur dan konsisten'
  },
  
  {
    id: 'sains_k2t2_040',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.SCIENCE.id,
    topic: SUBJECTS.REGULAR.SCIENCE.topics.SEASONS,
    question: 'Pilih kegiatan yang biasa dilakukan saat musim hujan:',
    options: [
      'Membawa payung',
      'Menggunakan jas hujan',
      'Mengeringkan pakaian di luar',
      'Memakai alas kaki anti licin',
      'Bermain layang-layang'
    ],
    correctAnswer: [0, 1, 3],
    explanation: 'Saat musim hujan, orang biasanya membawa payung, menggunakan jas hujan, dan memakai alas kaki anti licin untuk mencegah terpeleset'
  },
  
  {
    id: 'sains_k2t2_041',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.SCIENCE.id,
    topic: SUBJECTS.REGULAR.SCIENCE.topics.SEASONS,
    question: 'Apa nama alat untuk mengukur curah hujan?',
    options: [
      'Rain gauge (Penakar hujan)',
      'Barometer',
      'Termometer',
      'Anemometer'
    ],
    correctAnswer: 0,
    explanation: 'Rain gauge atau penakar hujan adalah alat yang digunakan untuk mengukur jumlah curah hujan'
  },
  
  {
    id: 'sains_k2t2_042',
    type: QUESTION_TYPES.CMC2,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.REGULAR.SCIENCE.id,
    topic: SUBJECTS.REGULAR.SCIENCE.topics.NATURAL_DISASTERS,
    question: 'Pasangkan bencana alam dengan tindakan penanggulangannya:',
    leftOptions: [
      'Banjir',
      'Gempa bumi',
      'Kebakaran hutan',
      'Kekeringan'
    ],
    rightOptions: [
      'Membuat tanggul dan sistem drainase',
      'Membangun rumah tahan gempa',
      'Patroli hutan dan pencegahan pembakaran lahan',
      'Membangun waduk dan sumur resapan'
    ],
    correctPairs: [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3]
    ],
    explanation: 'Setiap bencana alam memiliki tindakan penanggulangan spesifik yang sesuai dengan karakteristik bencana tersebut'
  },
  
  {
    id: 'sains_k2t2_043',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.SCIENCE.id,
    topic: SUBJECTS.REGULAR.SCIENCE.topics.NATURAL_DISASTERS,
    question: 'Apa yang dimaksud dengan mitigasi bencana?',
    options: [
      'Upaya untuk mengurangi dampak bencana',
      'Memindahkan penduduk setelah bencana',
      'Memperbaiki kerusakan akibat bencana',
      'Memprediksi kapan bencana akan terjadi'
    ],
    correctAnswer: 0,
    explanation: 'Mitigasi bencana adalah upaya yang dilakukan untuk mengurangi risiko dan dampak yang ditimbulkan oleh bencana'
  },
  
  {
    id: 'sains_k2t2_044',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.SCIENCE.id,
    topic: SUBJECTS.REGULAR.SCIENCE.topics.EARTH,
    question: 'Perbedaan utama antara batuan beku dan batuan sedimen adalah:',
    options: [
      'Cara terbentuknya',
      'Warnanya',
      'Beratnya',
      'Usianya'
    ],
    correctAnswer: 0,
    explanation: 'Perbedaan utama antara batuan beku dan batuan sedimen adalah cara terbentuknya: batuan beku dari magma/lava yang mendingin, sedangkan batuan sedimen dari pengendapan material'
  },
  
  {
    id: 'sains_k2t2_045',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.REGULAR.SCIENCE.id,
    topic: SUBJECTS.REGULAR.SCIENCE.topics.EARTH,
    question: 'Pilih yang termasuk dalam siklus batuan:',
    options: [
      'Pelapukan dan erosi',
      'Pengangkutan dan pengendapan',
      'Pendinginan magma',
      'Perubahan bentuk karena panas dan tekanan',
      'Penyerapan air tanah'
    ],
    correctAnswer: [0, 1, 2, 3],
    explanation: 'Siklus batuan meliputi proses pelapukan/erosi, pengangkutan/pengendapan, pendinginan magma, dan perubahan bentuk karena panas/tekanan'
  },
  
  {
    id: 'sains_k2t2_046',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.SCIENCE.id,
    topic: SUBJECTS.REGULAR.SCIENCE.topics.SEASONS,
    question: 'Manakah dari berikut ini yang BUKAN merupakan alat untuk memantau cuaca?',
    options: [
      'Mikroskop',
      'Termometer',
      'Anemometer',
      'Barometer'
    ],
    correctAnswer: 0,
    explanation: 'Mikroskop digunakan untuk melihat benda kecil, bukan untuk memantau cuaca. Sedangkan termometer, anemometer, dan barometer adalah alat pemantau cuaca'
  },
  
  {
    id: 'sains_k2t2_047',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.SCIENCE.id,
    topic: SUBJECTS.REGULAR.SCIENCE.topics.NATURAL_DISASTERS,
    question: 'Apa yang dimaksud dengan gunung berapi?',
    options: [
      'Tempat keluarnya magma ke permukaan bumi',
      'Gunung yang sangat tinggi',
      'Gunung yang dikelilingi hutan',
      'Gunung yang terbuat dari batuan sedimen'
    ],
    correctAnswer: 0,
    explanation: 'Gunung berapi adalah tempat di permukaan bumi dimana magma dari dalam bumi keluar ke permukaan'
  },
  
  {
    id: 'sains_k2t2_048',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.SCIENCE.id,
    topic: SUBJECTS.REGULAR.SCIENCE.topics.NATURAL_DISASTERS,
    question: 'Pilih materi yang dikeluarkan gunung berapi saat meletus:',
    options: [
      'Lava',
      'Abu vulkanik',
      'Gas beracun',
      'Air hujan',
      'Batuan kristal'
    ],
    correctAnswer: [0, 1, 2],
    explanation: 'Saat gunung berapi meletus, materi yang dikeluarkan adalah lava (magma yang mencapai permukaan), abu vulkanik, dan berbagai gas'
  },
  
  {
    id: 'sains_k2t2_049',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.REGULAR.SCIENCE.id,
    topic: SUBJECTS.REGULAR.SCIENCE.topics.NATURAL_DISASTERS,
    question: 'Apa yang menyebabkan tanah longsor?',
    options: [
      'Kombinasi dari hujan lebat, lereng curam, dan deforestasi',
      'Pergerakan lempeng tektonik',
      'Letusan gunung berapi',
      'Angin kencang'
    ],
    correctAnswer: 0,
    explanation: 'Tanah longsor umumnya disebabkan oleh kombinasi faktor-faktor seperti hujan lebat yang melemahkan struktur tanah, lereng yang curam, dan deforestasi (penebangan hutan)'
  },
  
  {
    id: 'sains_k2t2_050',
    type: QUESTION_TYPES.CMC2,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.SCIENCE.id,
    topic: SUBJECTS.REGULAR.SCIENCE.topics.EARTH,
    question: 'Pasangkan alat dengan fungsinya:',
    leftOptions: [
      'Termometer',
      'Barometer',
      'Anemometer',
      'Higrometer'
    ],
    rightOptions: [
      'Mengukur suhu',
      'Mengukur tekanan udara',
      'Mengukur kecepatan angin',
      'Mengukur kelembaban udara'
    ],
    correctPairs: [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3]
    ],
    explanation: 'Setiap alat memiliki fungsi spesifik: termometer mengukur suhu, barometer mengukur tekanan udara, anemometer mengukur kecepatan angin, dan higrometer mengukur kelembaban udara'
  }
];

// Additional metadata for learning tracking
export const topicDistribution = {
  [SUBJECTS.REGULAR.SCIENCE.topics.EARTH]: 15,            // 30%
  [SUBJECTS.REGULAR.SCIENCE.topics.SEASONS]: 20,          // 40%
  [SUBJECTS.REGULAR.SCIENCE.topics.NATURAL_DISASTERS]: 15 // 30%
};

// Question type distribution
export const questionTypeDistribution = {
  [QUESTION_TYPES.MC]: 30,      // 60%
  [QUESTION_TYPES.CMC1]: 15,    // 30%
  [QUESTION_TYPES.CMC2]: 5      // 10%
};

// Difficulty distribution
export const difficultyDistribution = {
  [DIFFICULTY_LEVELS.EASY]: 20,      // 40%
  [DIFFICULTY_LEVELS.MEDIUM]: 20,    // 40% 
  [DIFFICULTY_LEVELS.HARD]: 10       // 20%
};
