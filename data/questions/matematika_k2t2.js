import { QUESTION_TYPES, DIFFICULTY_LEVELS, SUBJECTS } from '../questionSchema';

// Updated topics for Matematika K2T2
export const MATH_TOPICS = {
  SATUAN_WAKTU: 'Satuan waktu & lama waktu',
  KALIMAT_MATEMATIKA_PEMBAGIAN_PENJUMLAHAN: 'Kalimat Matematika - pembagian & penjumlahan',
  PENJUMLAHAN_PEMBAGIAN_NILAI_TEMPAT: 'Penjumlahan & pembagian (nilai tempat)',
  NILAI_TEMPAT_3_ANGKA_PENJUMLAHAN_PENGURANGAN: 'Nilai Tempat (3 angka) - penjumlahan & pengurangan',
  NILAI_TEMPAT_3_ANGKA_PEMECAHAN_MASALAH: 'Nilai tempat (3 angka) - Pemecahan masalah',
  KALIMAT_MATEMATIKA_PEMBAGIAN: 'Kalimat Matematika - pembagian',
  KALIMAT_MATEMATIKA_PENJUMLAHAN: 'Kalimat Matematika - penjumlahan',
  KALIMAT_MATEMATIKA_PENGURANGAN: 'Kalimat Matematika - pengurangan',
  KALIMAT_MATEMATIKA_PERKALIAN: 'Kalimat Matematika - perkalian',
  BANGUN_DATAR_RUANG: 'Bangun datar & bangun ruang'
};

export const questions = [
  // Topic: Satuan waktu & lama waktu
  {
    id: 'math_k2t2_001',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.MATH.id,
    topic: MATH_TOPICS.SATUAN_WAKTU,
    question: 'Jika jarum pendek jam menunjuk angka 7 dan jarum panjang menunjuk angka 6, pukul berapakah saat itu?',
    options: [
      'Pukul tujuh lebih tiga puluh menit',
      'Pukul delapan kurang tiga puluh menit',
      'Pukul tujuh kurang tiga puluh menit',
      'Pukul delapan lebih tiga puluh menit'
    ],
    correctAnswer: 0,
    explanation: 'Jarum pendek menunjuk di antara 7 dan 8, dan jarum panjang menunjuk ke 6, yang berarti pukul tujuh lebih tiga puluh menit (7:30)'
  },
  
  {
    id: 'math_k2t2_002',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.MATH.id,
    topic: MATH_TOPICS.SATUAN_WAKTU,
    question: 'Jam digital menunjukkan angka 03:45. Bagaimana cara membaca waktu tersebut?',
    options: [
      'Pukul tiga lebih empat puluh lima menit',
      'Pukul empat kurang lima belas menit',
      'Pukul empat lebih empat puluh lima menit',
      'Pukul tiga kurang lima belas menit'
    ],
    correctAnswer: 0,
    explanation: 'Jam digital 03:45 dibaca sebagai pukul tiga lebih empat puluh lima menit'
  },
  
  {
    id: 'math_k2t2_003',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.MATH.id,
    topic: MATH_TOPICS.SATUAN_WAKTU,
    question: 'Pilih pernyataan yang benar tentang cara membaca jam:',
    options: [
      'Jarum pendek menunjukkan jam',
      'Jarum panjang menunjukkan menit',
      'Satu putaran penuh jarum panjang sama dengan 60 menit',
      'Jarum panjang menunjukkan jam',
      'Satu putaran penuh jarum pendek sama dengan 60 menit'
    ],
    correctAnswer: [0, 1, 2],
    explanation: 'Pada jam analog: jarum pendek menunjukkan jam, jarum panjang menunjukkan menit, dan satu putaran penuh jarum panjang sama dengan 60 menit'
  },

  {
    id: 'math_k2t2_004',
    type: QUESTION_TYPES.CMC2,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.REGULAR.MATH.id,
    topic: MATH_TOPICS.SATUAN_WAKTU,
    question: 'Pasangkan waktu pada jam digital dengan cara membacanya yang benar:',
    leftOptions: [
      '09:15',
      '12:30',
      '04:45',
      '06:00'
    ],
    rightOptions: [
      'Pukul sembilan lebih lima belas menit',
      'Pukul dua belas lebih tiga puluh menit',
      'Pukul empat lebih empat puluh lima menit',
      'Pukul enam tepat'
    ],
    correctPairs: [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3]
    ],
    explanation: 'Jam digital dibaca dengan menyebutkan jam diikuti dengan menit'
  },

  {
    id: 'math_k2t2_005',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.MATH.id,
    topic: MATH_TOPICS.SATUAN_WAKTU,
    question: 'Jika sekarang pukul 5 sore, jam digital akan menunjukkan:',
    options: [
      '17:00',
      '05:00',
      '5:00 PM',
      '12:00'
    ],
    correctAnswer: 0,
    explanation: 'Pukul 5 sore dalam format 24 jam ditulis sebagai 17:00'
  },

  // Topic: Satuan waktu & lama waktu - Konversi
  {
    id: 'math_k2t2_006',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.MATH.id,
    topic: MATH_TOPICS.SATUAN_WAKTU,
    question: '1 jam = ... menit',
    options: [
      '60 menit',
      '30 menit',
      '24 menit',
      '100 menit'
    ],
    correctAnswer: 0,
    explanation: '1 jam sama dengan 60 menit'
  },

  {
    id: 'math_k2t2_007',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.MATH.id,
    topic: MATH_TOPICS.SATUAN_WAKTU,
    question: '1 hari = ... jam',
    options: [
      '24 jam',
      '12 jam',
      '60 jam',
      '7 jam'
    ],
    correctAnswer: 0,
    explanation: '1 hari sama dengan 24 jam'
  },

  {
    id: 'math_k2t2_008',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.MATH.id,
    topic: MATH_TOPICS.SATUAN_WAKTU,
    question: '2 jam = ... menit',
    options: [
      '120 menit',
      '60 menit',
      '200 menit',
      '20 menit'
    ],
    correctAnswer: 0,
    explanation: '2 jam = 2 × 60 menit = 120 menit'
  },

  {
    id: 'math_k2t2_009',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.MATH.id,
    topic: MATH_TOPICS.SATUAN_WAKTU,
    question: 'Pilih konversi waktu yang benar:',
    options: [
      '1 menit = 60 detik',
      '1 jam = 60 menit',
      '1 hari = 24 jam',
      '1 jam = 24 menit',
      '1 menit = 100 detik'
    ],
    correctAnswer: [0, 1, 2],
    explanation: 'Konversi waktu yang benar adalah: 1 menit = 60 detik, 1 jam = 60 menit, dan 1 hari = 24 jam'
  },

  {
    id: 'math_k2t2_010',
    type: QUESTION_TYPES.CMC2,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.REGULAR.MATH.id,
    topic: MATH_TOPICS.SATUAN_WAKTU,
    question: 'Pasangkan satuan waktu dengan konversinya yang benar:',
    leftOptions: [
      '1 jam',
      '1 hari',
      '1 minggu',
      '1 menit'
    ],
    rightOptions: [
      '60 menit',
      '24 jam',
      '7 hari',
      '60 detik'
    ],
    correctPairs: [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3]
    ],
    explanation: 'Konversi satuan waktu: 1 jam = 60 menit, 1 hari = 24 jam, 1 minggu = 7 hari, 1 menit = 60 detik'
  },

  // Topic: Mengukur dan menghitung durasi waktu (10 questions)
  {
    id: 'math_k2t2_011',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.MATH.id,
    topic: MATH_TOPICS.SATUAN_WAKTU,
    question: 'Andi mulai belajar pukul 15:00 dan selesai pukul 16:30. Berapa lama Andi belajar?',
    options: [
      '1 jam 30 menit',
      '1 jam',
      '30 menit',
      '2 jam'
    ],
    correctAnswer: 0,
    explanation: 'Andi belajar dari pukul 15:00 sampai 16:30, yaitu selama 1 jam 30 menit'
  },

  {
    id: 'math_k2t2_012',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.MATH.id,
    topic: MATH_TOPICS.SATUAN_WAKTU,
    question: 'Budi berangkat ke sekolah pukul 06:30 dan tiba di sekolah pukul 07:15. Berapa lama perjalanan Budi ke sekolah?',
    options: [
      '45 menit',
      '30 menit',
      '1 jam',
      '15 menit'
    ],
    correctAnswer: 0,
    explanation: 'Perjalanan Budi dari 06:30 sampai 07:15 memakan waktu 45 menit'
  },

  {
    id: 'math_k2t2_013',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.MATH.id,
    topic: MATH_TOPICS.SATUAN_WAKTU,
    question: 'Pilih kegiatan yang biasanya memerlukan waktu lebih dari 1 jam:',
    options: [
      'Menonton film',
      'Perjalanan dari Jakarta ke Bandung',
      'Makan siang',
      'Tidur malam',
      'Menyikat gigi'
    ],
    correctAnswer: [0, 1, 3],
    explanation: 'Kegiatan yang biasanya memerlukan waktu lebih dari 1 jam adalah menonton film, perjalanan Jakarta-Bandung, dan tidur malam'
  },

  {
    id: 'math_k2t2_014',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.MATH.id,
    topic: MATH_TOPICS.SATUAN_WAKTU,
    question: 'Siti mulai mengerjakan PR pukul 19:00 dan selesai pukul 20:15. Berapa menit Siti mengerjakan PR?',
    options: [
      '75 menit',
      '60 menit',
      '45 menit',
      '90 menit'
    ],
    correctAnswer: 0,
    explanation: 'Siti mengerjakan PR dari 19:00 sampai 20:15, yaitu 1 jam 15 menit atau 75 menit'
  },

  {
    id: 'math_k2t2_015',
    type: QUESTION_TYPES.CMC2,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.REGULAR.MATH.id,
    topic: MATH_TOPICS.SATUAN_WAKTU,
    question: 'Pasangkan kegiatan dengan perkiraan waktu yang dibutuhkan:',
    leftOptions: [
      'Menyikat gigi',
      'Tidur malam',
      'Belajar di sekolah',
      'Makan malam'
    ],
    rightOptions: [
      '3 menit',
      '8 jam',
      '6 jam',
      '30 menit'
    ],
    correctPairs: [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3]
    ],
    explanation: 'Estimasi durasi: menyikat gigi sekitar 3 menit, tidur malam 8 jam, belajar di sekolah 6 jam, dan makan malam 30 menit'
  },

  // Topic: Satuan waktu & lama waktu - Alat ukur
  {
    id: 'math_k2t2_016',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.MATH.id,
    topic: MATH_TOPICS.SATUAN_WAKTU,
    question: 'Alat untuk mengukur waktu dalam hitungan detik adalah:',
    options: [
      'Stopwatch',
      'Kalender',
      'Penggaris',
      'Termometer'
    ],
    correctAnswer: 0,
    explanation: 'Stopwatch adalah alat untuk mengukur waktu dalam hitungan detik'
  },

  {
    id: 'math_k2t2_017',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.MATH.id,
    topic: MATH_TOPICS.SATUAN_WAKTU,
    question: 'Alat berikut yang BUKAN merupakan alat pengukur waktu adalah:',
    options: [
      'Termometer',
      'Jam tangan',
      'Jam dinding',
      'Jam pasir'
    ],
    correctAnswer: 0,
    explanation: 'Termometer adalah alat untuk mengukur suhu, bukan waktu'
  },

  {
    id: 'math_k2t2_018',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.MATH.id,
    topic: MATH_TOPICS.SATUAN_WAKTU,
    question: 'Pilih alat pengukur waktu:',
    options: [
      'Jam matahari',
      'Jam pasir',
      'Stopwatch',
      'Penggaris',
      'Timbangan'
    ],
    correctAnswer: [0, 1, 2],
    explanation: 'Alat pengukur waktu antara lain: jam matahari, jam pasir, dan stopwatch'
  },

  {
    id: 'math_k2t2_019',
    type: QUESTION_TYPES.CMC2,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.REGULAR.MATH.id,
    topic: MATH_TOPICS.SATUAN_WAKTU,
    question: 'Pasangkan aktivitas berikut dengan durasi waktunya yang paling sesuai:',
    leftOptions: [
      'Waktu istirahat sekolah',
      'Durasi tidur malam',
      'Waktu makan siang',
      'Perjalanan ke sekolah'
    ],
    rightOptions: [
      '30 menit',
      '8 jam',
      '15 menit',
      '20 menit'
    ],
    correctPairs: [
      [0, 0], // Istirahat - 30 menit
      [1, 1], // Tidur - 8 jam
      [2, 2], // Makan - 15 menit
      [3, 3]  // Perjalanan - 20 menit
    ],
    explanation: 'Durasi waktu yang tepat untuk aktivitas sehari-hari:\n- Istirahat sekolah biasanya 30 menit\n- Tidur malam yang sehat untuk anak adalah 8 jam\n- Makan siang sekitar 15 menit\n- Perjalanan ke sekolah rata-rata 20 menit'
  },

  {
    id: 'math_k2t2_020',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.MATH.id,
    topic: MATH_TOPICS.SATUAN_WAKTU,
    question: 'Manakah alat pengukur waktu yang paling kuno?',
    options: [
      'Jam matahari',
      'Jam digital',
      'Stopwatch',
      'Jam tangan'
    ],
    correctAnswer: 0,
    explanation: 'Jam matahari adalah alat pengukur waktu paling kuno yang memanfaatkan bayangan matahari'
  },

  {
    id: 'math_k2t2_021',
    type: QUESTION_TYPES.CMC2,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.REGULAR.MATH.id,
    topic: MATH_TOPICS.SATUAN_WAKTU,
    question: 'Pasangkan alat pengukur waktu dengan ciri-cirinya:',
    leftOptions: [
      'Jam digital',
      'Jam analog',
      'Stopwatch',
      'Jam pasir'
    ],
    rightOptions: [
      'Menampilkan angka elektronik',
      'Memiliki tiga jarum penunjuk',
      'Digunakan untuk mengukur waktu dengan sangat presisi',
      'Menggunakan aliran pasir untuk menunjukkan waktu'
    ],
    correctPairs: [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3]
    ],
    explanation: 'Jam digital menampilkan angka elektronik, jam analog memiliki jarum, stopwatch untuk waktu presisi, dan jam pasir menggunakan aliran pasir'
  },

  // Topic: Operasi waktu (15 questions)
  {
    id: 'math_k2t2_022',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.MATH.id,
    topic: MATH_TOPICS.SATUAN_WAKTU,
    question: 'Jika sekarang pukul 09:30, 2 jam kemudian pukul berapa?',
    options: [
      'Pukul 11:30',
      'Pukul 10:30',
      'Pukul 11:00',
      'Pukul 12:30'
    ],
    correctAnswer: 0,
    explanation: '9:30 + 2 jam = 11:30'
  },

  {
    id: 'math_k2t2_023',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.MATH.id,
    topic: MATH_TOPICS.SATUAN_WAKTU,
    question: 'Jika sekarang pukul 10:45, 30 menit yang lalu pukul berapa?',
    options: [
      'Pukul 10:15',
      'Pukul 10:30',
      'Pukul 11:15',
      'Pukul 11:45'
    ],
    correctAnswer: 0,
    explanation: '10:45 - 30 menit = 10:15'
  },

  {
    id: 'math_k2t2_024',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.MATH.id,
    topic: MATH_TOPICS.SATUAN_WAKTU,
    question: 'Pukul 08:50 ditambah 25 menit menjadi pukul:',
    options: [
      'Pukul 09:15',
      'Pukul 09:25',
      'Pukul 08:75',
      'Pukul 08:25'
    ],
    correctAnswer: 0,
    explanation: '8:50 + 25 menit = 9:15, karena 50 + 25 = 75 menit = 1 jam 15 menit'
  },

  {
    id: 'math_k2t2_025',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.REGULAR.MATH.id,
    topic: MATH_TOPICS.SATUAN_WAKTU,
    question: 'Pukul 07:15 ditambah 1 jam 50 menit menjadi pukul:',
    options: [
      'Pukul 09:05',
      'Pukul 08:65',
      'Pukul 09:65',
      'Pukul 08:05'
    ],
    correctAnswer: 0,
    explanation: '7:15 + 1 jam 50 menit = 7:15 + 1:50 = 9:05'
  },

  {
    id: 'math_k2t2_026',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.MATH.id,
    topic: MATH_TOPICS.SATUAN_WAKTU,
    question: 'Pilih operasi waktu yang benar:',
    options: [
      '10:30 + 20 menit = 10:50',
      '09:45 + 30 menit = 10:15',
      '11:15 - 30 menit = 10:45',
      '08:15 + 1 jam = 8:75',
      '07:30 + 1 jam 45 menit = 8:75'
    ],
    correctAnswer: [0, 1, 2],
    explanation: 'Operasi waktu yang benar: 10:30 + 20 menit = 10:50, 09:45 + 30 menit = 10:15, dan 11:15 - 30 menit = 10:45'
  },

  {
    id: 'math_k2t2_027',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.REGULAR.MATH.id,
    topic: MATH_TOPICS.SATUAN_WAKTU,
    question: 'Jika sekarang pukul 23:45, 30 menit kemudian pukul berapa?',
    options: [
      'Pukul 00:15',
      'Pukul 24:15',
      'Pukul 23:75',
      'Pukul 00:45'
    ],
    correctAnswer: 0,
    explanation: '23:45 + 30 menit = 00:15 (hari berikutnya)'
  },

  {
    id: 'math_k2t2_028',
    type: QUESTION_TYPES.CMC2,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.REGULAR.MATH.id,
    topic: MATH_TOPICS.SATUAN_WAKTU,
    question: 'Pasangkan operasi waktu dengan hasilnya yang benar:',
    leftOptions: [
      '07:30 + 2 jam 45 menit',
      '12:15 - 1 jam 30 menit',
      '09:50 + 25 menit',
      '11:45 - 2 jam'
    ],
    rightOptions: [
      '10:15',
      '10:45',
      '10:15',
      '09:45'
    ],
    correctPairs: [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3]
    ],
    explanation: '07:30 + 2:45 = 10:15, 12:15 - 1:30 = 10:45, 09:50 + 0:25 = 10:15, dan 11:45 - 2:00 = 09:45'
  },

  {
    id: 'math_k2t2_029',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.MATH.id,
    topic: MATH_TOPICS.SATUAN_WAKTU,
    question: 'Dina berangkat ke sekolah pukul 06:30. Jika ia membutuhkan waktu 45 menit untuk sampai, pukul berapa Dina tiba di sekolah?',
    options: [
      'Pukul 07:15',
      'Pukul 07:30',
      'Pukul 06:75',
      'Pukul 07:45'
    ],
    correctAnswer: 0,
    explanation: '06:30 + 45 menit = 07:15'
  },

  {
    id: 'math_k2t2_030',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.MATH.id,
    topic: MATH_TOPICS.SATUAN_WAKTU,
    question: 'Jika sekarang pukul 14:00, 2 jam yang lalu pukul berapa?',
    options: [
      'Pukul 12:00',
      'Pukul 16:00',
      'Pukul 13:00',
      'Pukul 15:00'
    ],
    correctAnswer: 0,
    explanation: '14:00 - 2 jam = 12:00'
  },

  {
    id: 'math_k2t2_031',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.REGULAR.MATH.id,
    topic: MATH_TOPICS.SATUAN_WAKTU,
    question: 'Kereta berangkat pukul 08:15 dan tiba di stasiun tujuan pukul 10:45. Berapa lama perjalanan kereta?',
    options: [
      '2 jam 30 menit',
      '2 jam 15 menit',
      '2 jam 45 menit',
      '1 jam 30 menit'
    ],
    correctAnswer: 0,
    explanation: '10:45 - 08:15 = 2 jam 30 menit'
  },

  {
    id: 'math_k2t2_032',
    type: QUESTION_TYPES.CMC2,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.REGULAR.MATH.id,
    topic: MATH_TOPICS.SATUAN_WAKTU,
    question: 'Pasangkan soal dengan jawabannya:',
    leftOptions: [
      '2 jam + 45 menit',
      '3 jam - 75 menit',
      '90 menit : 30 menit',
      '2 jam × 2'
    ],
    rightOptions: [
      '2 jam 45 menit',
      '1 jam 45 menit',
      '3',
      '4 jam'
    ],
    correctPairs: [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3]
    ],
    explanation: 'Operasi waktu:\n2 jam + 45 menit = 2 jam 45 menit\n3 jam - 75 menit = 3 jam - 1 jam 15 menit = 1 jam 45 menit\n90 menit : 30 menit = 3\n2 jam × 2 = 4 jam'
  },

  // Additional questions for CLOCK_READING topic
  {
    id: 'math_k2t2_033',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.MATH.id,
    topic: MATH_TOPICS.SATUAN_WAKTU,
    question: 'Jika jarum pendek jam berada di antara angka 3 dan 4, serta jarum panjang menunjuk ke angka 6, pukul berapakah saat itu?',
    options: [
      'Pukul tiga lebih tiga puluh menit',
      'Pukul empat kurang tiga puluh menit',
      'Pukul tiga kurang tiga puluh menit',
      'Pukul empat lebih tiga puluh menit'
    ],
    correctAnswer: 0,
    explanation: 'Jarum pendek menunjuk di antara 3 dan 4, dan jarum panjang menunjuk ke 6, yang berarti pukul tiga lebih tiga puluh menit (3:30)'
  },

  {
    id: 'math_k2t2_034',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.REGULAR.MATH.id,
    topic: MATH_TOPICS.SATUAN_WAKTU,
    question: 'Ketika jarum pendek jam berada di antara angka 8 dan 9, serta jarum panjang menunjuk ke angka 9, waktu yang ditunjukkan adalah...',
    options: [
      'Pukul delapan lebih empat puluh lima menit',
      'Pukul sembilan kurang lima belas menit',
      'Pukul delapan kurang empat puluh lima menit',
      'Pukul sembilan lebih empat puluh lima menit'
    ],
    correctAnswer: 0,
    explanation: 'Jarum pendek menunjuk di antara 8 dan 9, dan jarum panjang menunjuk ke 9, yang berarti pukul delapan lebih empat puluh lima menit (8:45)'
  },

  // Additional questions for TIME_CONVERSION topic
  {
    id: 'math_k2t2_035',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.MATH.id,
    topic: MATH_TOPICS.SATUAN_WAKTU,
    question: '1 menit = ... detik',
    options: [
      '60 detik',
      '30 detik',
      '100 detik',
      '6 detik'
    ],
    correctAnswer: 0,
    explanation: '1 menit sama dengan 60 detik'
  },

  {
    id: 'math_k2t2_036',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.MATH.id,
    topic: MATH_TOPICS.SATUAN_WAKTU,
    question: '3 jam = ... menit',
    options: [
      '180 menit',
      '120 menit',
      '90 menit',
      '160 menit'
    ],
    correctAnswer: 0,
    explanation: '3 jam = 3 × 60 menit = 180 menit'
  },

  {
    id: 'math_k2t2_037',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.MATH.id,
    topic: MATH_TOPICS.SATUAN_WAKTU,
    question: 'Pilih konversi waktu yang benar:',
    options: [
      '2 jam = 120 menit',
      '90 menit = 1,5 jam',
      '1 minggu = 7 hari',
      '1 jam = 36 menit',
      '100 detik = 1 menit'
    ],
    correctAnswer: [0, 1, 2],
    explanation: 'Konversi waktu yang benar: 2 jam = 120 menit (2 × 60), 90 menit = 1,5 jam (90 ÷ 60), dan 1 minggu = 7 hari'
  },

  {
    id: 'math_k2t2_038',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.REGULAR.MATH.id,
    topic: MATH_TOPICS.SATUAN_WAKTU,
    question: '2 hari = ... jam',
    options: [
      '48 jam',
      '42 jam',
      '24 jam',
      '72 jam'
    ],
    correctAnswer: 0,
    explanation: '2 hari = 2 × 24 jam = 48 jam'
  },

  {
    id: 'math_k2t2_039',
    type: QUESTION_TYPES.CMC2,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.REGULAR.MATH.id,
    topic: MATH_TOPICS.SATUAN_WAKTU,
    question: 'Pasangkan satuan waktu dengan konversinya yang tepat:',
    leftOptions: [
      '1 jam',
      '2 hari',
      '3 menit',
      '4 minggu'
    ],
    rightOptions: [
      '60 menit',
      '48 jam',
      '180 detik',
      '28 hari'
    ],
    correctPairs: [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3]
    ],
    explanation: 'Konversi waktu: 1 jam = 60 menit, 2 hari = 48 jam, 3 menit = 180 detik, dan 4 minggu = 28 hari'
  },

  // Additional questions for DURATION topic
  {
    id: 'math_k2t2_040',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.MATH.id,
    topic: MATH_TOPICS.SATUAN_WAKTU,
    question: 'Berapa lama biasanya kegiatan bermain sepak bola?',
    options: [
      'Sekitar 90 menit',
      'Sekitar 5 menit',
      'Sekitar 10 detik',
      'Sekitar 24 jam'
    ],
    correctAnswer: 0,
    explanation: 'Kegiatan bermain sepak bola biasanya berlangsung sekitar 90 menit (2 × 45 menit)'
  },

  {
    id: 'math_k2t2_041',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.MATH.id,
    topic: MATH_TOPICS.SATUAN_WAKTU,
    question: 'Pilih kegiatan yang biasanya memerlukan waktu kurang dari 5 menit:',
    options: [
      'Mencuci tangan',
      'Menyikat gigi',
      'Makan malam',
      'Menonton film',
      'Membaca satu halaman buku'
    ],
    correctAnswer: [0, 1, 4],
    explanation: 'Kegiatan yang biasanya memerlukan waktu kurang dari 5 menit adalah mencuci tangan, menyikat gigi, dan membaca satu halaman buku. Makan malam dan menonton film umumnya membutuhkan waktu lebih lama.'
  },

  // Additional questions for TIME_TOOLS topic
  {
    id: 'math_k2t2_042',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.MATH.id,
    topic: MATH_TOPICS.SATUAN_WAKTU,
    question: 'Alat apa yang biasa digunakan untuk mengukur waktu dalam lomba lari?',
    options: [
      'Stopwatch',
      'Jam dinding',
      'Jam pasir',
      'Kalender'
    ],
    correctAnswer: 0,
    explanation: 'Stopwatch adalah alat yang biasa digunakan untuk mengukur waktu dalam lomba lari karena dapat mengukur waktu dengan akurat hingga persepuluh atau perseratus detik'
  },

  {
    id: 'math_k2t2_043',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.MATH.id,
    topic: MATH_TOPICS.SATUAN_WAKTU,
    question: 'Apa fungsi utama dari kalender?',
    options: [
      'Menunjukkan tanggal, bulan, dan tahun',
      'Mengukur waktu dalam detik',
      'Menghitung durasi kegiatan',
      'Mengukur kecepatan'
    ],
    correctAnswer: 0,
    explanation: 'Fungsi utama kalender adalah untuk menunjukkan tanggal, bulan, dan tahun, membantu kita mengingat dan merencanakan kegiatan berdasarkan waktu'
  },

  {
    id: 'math_k2t2_044',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.REGULAR.MATH.id,
    topic: MATH_TOPICS.SATUAN_WAKTU,
    question: 'Pilih pernyataan yang benar tentang alat pengukur waktu:',
    options: [
      'Jam digital menggunakan angka untuk menunjukkan waktu',
      'Jam analog menggunakan jarum untuk menunjukkan waktu',
      'Stopwatch dapat digunakan untuk mengukur lama waktu suatu kegiatan',
      'Kalender digunakan untuk mengukur kecepatan',
      'Jam pasir menggunakan air untuk mengukur waktu'
    ],
    correctAnswer: [0, 1, 2],
    explanation: 'Pernyataan yang benar: jam digital menggunakan angka untuk menunjukkan waktu, jam analog menggunakan jarum, dan stopwatch dapat mengukur lama waktu suatu kegiatan. Kalender tidak mengukur kecepatan dan jam pasir menggunakan pasir (bukan air)'
  },

  // Additional questions for TIME_OPERATIONS topic
  {
    id: 'math_k2t2_045',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.MATH.id,
    topic: MATH_TOPICS.SATUAN_WAKTU,
    question: 'Jika Budi bangun pukul 05:00 dan berangkat sekolah 1 jam kemudian, pukul berapa Budi berangkat sekolah?',
    options: [
      'Pukul 06:00',
      'Pukul 05:30',
      'Pukul 04:00',
      'Pukul 07:00'
    ],
    correctAnswer: 0,
    explanation: '05:00 + 1 jam = 06:00'
  },

  {
    id: 'math_k2t2_046',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.MATH.id,
    topic: MATH_TOPICS.SATUAN_WAKTU,
    question: 'Siti belajar dari pukul 19:15 sampai pukul 20:45. Berapa lama Siti belajar?',
    options: [
      '1 jam 30 menit',
      '1 jam 15 menit',
      '2 jam',
      '45 menit'
    ],
    correctAnswer: 0,
    explanation: '20:45 - 19:15 = 1 jam 30 menit'
  },

  {
    id: 'math_k2t2_047',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.REGULAR.MATH.id,
    topic: MATH_TOPICS.SATUAN_WAKTU,
    question: 'Rudi mulai mengerjakan PR pukul 15:20. Jika ia mengerjakan selama 1 jam 45 menit, pukul berapa Rudi selesai mengerjakan PR?',
    options: [
      'Pukul 17:05',
      'Pukul 16:05',
      'Pukul 17:15',
      'Pukul 16:35'
    ],
    correctAnswer: 0,
    explanation: '15:20 + 1 jam 45 menit = 15:20 + 1:45 = 17:05'
  },

  {
    id: 'math_k2t2_048',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.MATH.id,
    topic: MATH_TOPICS.SATUAN_WAKTU,
    question: 'Pilih perhitungan waktu yang benar:',
    options: [
      '10:15 + 30 menit = 10:45',
      '14:50 + 25 menit = 15:15',
      '08:30 - 45 menit = 07:45',
      '12:30 + 45 menit = 12:75',
      '11:15 - 30 menit = 10:45'
    ],
    correctAnswer: [0, 1, 2, 4],
    explanation: 'Perhitungan waktu yang benar: 10:15 + 30 menit = 10:45, 14:50 + 25 menit = 15:15, 08:30 - 45 menit = 07:45, dan 11:15 - 30 menit = 10:45. Perhitungan 12:30 + 45 menit = 12:75 salah, seharusnya 13:15'
  },

  {
    id: 'math_k2t2_049',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.REGULAR.MATH.id,
    topic: MATH_TOPICS.SATUAN_WAKTU,
    question: 'Film dimulai pukul 18:45 dan selesai pukul 20:30. Jika ada jeda iklan 15 menit, berapa lama durasi film tersebut?',
    options: [
      '1 jam 30 menit',
      '1 jam 45 menit',
      '2 jam',
      '1 jam 15 menit'
    ],
    correctAnswer: 0,
    explanation: 'Total waktu = 20:30 - 18:45 = 1 jam 45 menit. Durasi film = 1 jam 45 menit - 15 menit (iklan) = 1 jam 30 menit'
  },

  {
    id: 'math_k2t2_050',
    type: QUESTION_TYPES.CMC2,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.REGULAR.MATH.id,
    topic: MATH_TOPICS.SATUAN_WAKTU,
    question: 'Pasangkan soal dengan jawabannya:',
    leftOptions: [
      '14:25 + 1 jam 45 menit',
      '09:50 - 2 jam 15 menit',
      '18:15 + 50 menit',
      '23:30 + 45 menit'
    ],
    rightOptions: [
      '16:10',
      '07:35',
      '19:05',
      '00:15'
    ],
    correctPairs: [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3]
    ],
    explanation: 'Operasi waktu: 14:25 + 1:45 = 16:10, 09:50 - 2:15 = 7:35, 18:15 + 50 menit = 19:05, dan 23:30 + 45 menit = 00:15 (hari berikutnya)'
  }
];

// Additional metadata for learning tracking
export const metadata = {
  subject: SUBJECTS.REGULAR.MATH.id,
  totalQuestions: 50,
  topicDistribution: {
    [MATH_TOPICS.SATUAN_WAKTU]: 15,                                       // 30%
    [MATH_TOPICS.KALIMAT_MATEMATIKA_PEMBAGIAN_PENJUMLAHAN]: 5,             // 10%
    [MATH_TOPICS.PENJUMLAHAN_PEMBAGIAN_NILAI_TEMPAT]: 5,                   // 10%
    [MATH_TOPICS.NILAI_TEMPAT_3_ANGKA_PENJUMLAHAN_PENGURANGAN]: 5,         // 10%
    [MATH_TOPICS.NILAI_TEMPAT_3_ANGKA_PEMECAHAN_MASALAH]: 4,               // 8%
    [MATH_TOPICS.KALIMAT_MATEMATIKA_PEMBAGIAN]: 3,                         // 6%
    [MATH_TOPICS.KALIMAT_MATEMATIKA_PENJUMLAHAN]: 3,                       // 6%
    [MATH_TOPICS.KALIMAT_MATEMATIKA_PENGURANGAN]: 3,                       // 6%
    [MATH_TOPICS.KALIMAT_MATEMATIKA_PERKALIAN]: 3,                         // 6%
    [MATH_TOPICS.BANGUN_DATAR_RUANG]: 4                                    // 8%
  },
  difficultyDistribution: {
    [DIFFICULTY_LEVELS.EASY]: 15,    // 30%
    [DIFFICULTY_LEVELS.MEDIUM]: 20,  // 40%
    [DIFFICULTY_LEVELS.HARD]: 15     // 30%
  },
  questionTypeDistribution: {
    [QUESTION_TYPES.MC]: 30,        // 60%
    [QUESTION_TYPES.CMC1]: 10,      // 20%
    [QUESTION_TYPES.CMC2]: 10       // 20%
  }
};
