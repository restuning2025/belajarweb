import { QUESTION_TYPES, DIFFICULTY_LEVELS, SUBJECTS } from '../questionSchema';

// Define topic constants for PAI (Pendidikan Agama Islam)
export const PAI_TOPICS = {
  ADAB_ETIQUETTE: 'Adab dan etika sehari-hari',
  SURAH_ALKAFIRUN: 'Surah Al-Kafirun',
  PROPHETS_STORIES: 'Kisah para nabi',
  PRAYER_DHIKR: 'Doa dan dzikir',
  ISLAMIC_VALUES: 'Nilai-nilai Islam',
  AKHLAK: 'Akhlak terpuji',
  ASMAUL_HUSNA: 'Asmaul Husna',
  SIRAH_NABAWIYAH: 'Sirah Nabawiyah',
  ISLAMIC_MANNERS: 'Adab Islami',
  RAMADAN_FASTING: 'Puasa Ramadan'
};

export const questions = [
  // Topic: Adab bersin & menguap
  {
    id: 'pai_k2t2_001',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.PAI.id,
    topic: PAI_TOPICS.ADAB_ETIQUETTE,
    question: 'Apa yang seharusnya diucapkan ketika bersin?',
    options: [
      'Alhamdulillah',
      'Subhanallah',
      'Astaghfirullah',
      'Masya Allah'
    ],
    correctAnswer: 0,
    explanation: 'Ketika bersin kita mengucapkan "Alhamdulillah" sebagai ungkapan syukur'
  },

  {
    id: 'pai_k2t2_002',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.PAI.id,
    topic: PAI_TOPICS.ADAB_ETIQUETTE,
    question: 'Pilih semua adab yang benar saat menguap:',
    options: [
      'Menutup mulut dengan tangan',
      'Mengucapkan "Astaghfirullah"',
      'Menahan semampunya',
      'Bersuara keras saat menguap',
      'Membiarkan mulut terbuka lebar'
    ],
    correctAnswer: [0, 1, 2],
    explanation: 'Adab saat menguap adalah menutup mulut dengan tangan, mengucapkan "Astaghfirullah", dan menahan semampunya'
  },

  {
    id: 'pai_k2t2_003',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.PAI.id,
    topic: PAI_TOPICS.ADAB_ETIQUETTE,
    question: 'Jika ada orang yang bersin dan mengucapkan "Alhamdulillah", apa yang sebaiknya kita ucapkan?',
    options: [
      'Yarhamukallah',
      'Alhamdulillah',
      'Astaghfirullah',
      'Masya Allah'
    ],
    correctAnswer: 0,
    explanation: 'Kita mengucapkan "Yarhamukallah" (semoga Allah merahmatimu) sebagai jawaban untuk orang yang bersin dan mengucapkan "Alhamdulillah"'
  },

  {
    id: 'pai_k2t2_004',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.PAI.id,
    topic: PAI_TOPICS.ADAB_ETIQUETTE,
    question: 'Mengapa kita dianjurkan untuk menutup mulut saat menguap?',
    options: [
      'Agar setan tidak masuk ke mulut kita',
      'Agar tidak mengganggu orang lain',
      'Agar tidak masuk serangga',
      'Agar tidak kedinginan'
    ],
    correctAnswer: 0,
    explanation: 'Dalam hadits dijelaskan bahwa kita dianjurkan menutup mulut saat menguap agar setan tidak masuk ke mulut kita'
  },

  {
    id: 'pai_k2t2_005',
    type: QUESTION_TYPES.CMC2,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.REGULAR.PAI.id,
    topic: PAI_TOPICS.ADAB_ETIQUETTE,
    question: 'Pasangkan ucapan dengan situasinya:',
    leftOptions: [
      'Alhamdulillah',
      'Yarhamukallah',
      'Astaghfirullah',
      'Bismillah'
    ],
    rightOptions: [
      'Saat bersin',
      'Menjawab orang bersin',
      'Saat menguap',
      'Saat memulai kegiatan'
    ],
    correctPairs: [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3]
    ],
    explanation: 'Alhamdulillah diucapkan saat bersin, Yarhamukallah saat menjawab orang bersin, Astaghfirullah saat menguap, dan Bismillah saat memulai kegiatan'
  },

  // Topic: Surah Al-Kafirun
  {
    id: 'pai_k2t2_006',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.PAI.id,
    topic: PAI_TOPICS.SURAH_ALKAFIRUN,
    question: 'Surah Al-Kafirun termasuk golongan surah?',
    options: [
      'Makkiyah',
      'Madaniyah',
      'Wustho',
      'Kubra'
    ],
    correctAnswer: 0,
    explanation: 'Surah Al-Kafirun termasuk golongan surah Makkiyah, yaitu surah yang diturunkan di Makkah'
  },

  {
    id: 'pai_k2t2_007',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.PAI.id,
    topic: PAI_TOPICS.SURAH_ALKAFIRUN,
    question: 'Berapa jumlah ayat dalam surah Al-Kafirun?',
    options: [
      '6 ayat',
      '5 ayat',
      '7 ayat',
      '4 ayat'
    ],
    correctAnswer: 0,
    explanation: 'Surah Al-Kafirun terdiri dari 6 ayat'
  },

  {
    id: 'pai_k2t2_008',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.PAI.id,
    topic: PAI_TOPICS.SURAH_ALKAFIRUN,
    question: 'Pilih arti yang benar dari ayat "Qul yā-ayyuhal-kāfirūn":',
    options: [
      'Katakanlah: "Hai orang-orang kafir"',
      'Katakanlah: "Tuhan kami adalah Allah"',
      'Katakanlah: "Hai orang-orang yang beriman"',
      'Katakanlah: "Aku tidak menyembah apa yang kamu sembah"',
      'Katakanlah: "Kepada Allah kita kembali"'
    ],
    correctAnswer: [0],
    explanation: 'Arti dari "Qul yā-ayyuhal-kāfirūn" adalah "Katakanlah: "Hai orang-orang kafir"'
  },

  {
    id: 'pai_k2t2_009',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.PAI.id,
    topic: PAI_TOPICS.SURAH_ALKAFIRUN,
    question: 'Apa tema utama yang dibahas dalam surah Al-Kafirun?',
    options: [
      'Toleransi beragama',
      'Cerita para nabi',
      'Hukum puasa',
      'Tata cara shalat'
    ],
    correctAnswer: 0,
    explanation: 'Tema utama surah Al-Kafirun adalah toleransi beragama dan penegasan bahwa setiap orang berhak menganut agamanya masing-masing'
  },

  {
    id: 'pai_k2t2_010',
    type: QUESTION_TYPES.CMC2,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.REGULAR.PAI.id,
    topic: PAI_TOPICS.SURAH_ALKAFIRUN,
    question: 'Pasangkan potongan ayat dengan artinya:',
    leftOptions: [
      'Qul yā-ayyuhal-kāfirūn',
      'Lā a\'budu mā ta\'budūn',
      'Wa lā antum \'ābidūna mā a\'bud',
      'Lakum dīnukum wa liya dīn'
    ],
    rightOptions: [
      'Katakanlah: "Hai orang-orang kafir"',
      'Aku tidak menyembah apa yang kamu sembah',
      'Dan kamu bukan penyembah apa yang aku sembah',
      'Untukmu agamamu, dan untukku agamaku"'
    ],
    correctPairs: [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3]
    ],
    explanation: 'Pasangan ayat Al-Kafirun dengan artinya yang benar'
  },

  // Topic: Kisah Nabi Muhammad dan Para Nabi
  {
    id: 'pai_k2t2_011',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.PAI.id,
    topic: PAI_TOPICS.PROPHETS_STORIES,
    question: 'Nabi Muhammad SAW lahir pada tahun?',
    options: [
      'Tahun Gajah',
      'Tahun Macan',
      'Tahun Kelinci',
      'Tahun Kuda'
    ],
    correctAnswer: 0,
    explanation: 'Nabi Muhammad SAW lahir pada tahun Gajah (570 M), disebut demikian karena pada tahun itu terjadi peristiwa penyerangan Ka\'bah oleh pasukan bergajah'
  },

  {
    id: 'pai_k2t2_012',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.PAI.id,
    topic: PAI_TOPICS.PROPHETS_STORIES,
    question: 'Siapa nama ibu Nabi Muhammad SAW?',
    options: [
      'Siti Aminah',
      'Siti Khadijah',
      'Siti Aisyah',
      'Siti Fatimah'
    ],
    correctAnswer: 0,
    explanation: 'Ibu Nabi Muhammad SAW bernama Siti Aminah binti Wahab'
  },

  {
    id: 'pai_k2t2_013',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.PAI.id,
    topic: PAI_TOPICS.PROPHETS_STORIES,
    question: 'Pilih nama-nama nabi yang termasuk Ulul Azmi:',
    options: [
      'Nabi Muhammad SAW',
      'Nabi Ibrahim AS',
      'Nabi Musa AS',
      'Nabi Luth AS',
      'Nabi Yunus AS'
    ],
    correctAnswer: [0, 1, 2],
    explanation: 'Nabi Ulul Azmi adalah nabi yang memiliki keteguhan hati tinggi. Lima nabi Ulul Azmi adalah Nabi Muhammad, Nabi Ibrahim, Nabi Musa, Nabi Isa, dan Nabi Nuh'
  },

  {
    id: 'pai_k2t2_014',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.PAI.id,
    topic: PAI_TOPICS.PROPHETS_STORIES,
    question: 'Apa mukjizat terbesar Nabi Muhammad SAW?',
    options: [
      'Al-Quran',
      'Membelah bulan',
      'Isra\' Mi\'raj',
      'Menyembuhkan orang sakit'
    ],
    correctAnswer: 0,
    explanation: 'Mukjizat terbesar Nabi Muhammad SAW adalah Al-Quran yang tetap terjaga kemurniannya hingga akhir zaman'
  },

  {
    id: 'pai_k2t2_015',
    type: QUESTION_TYPES.CMC2,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.REGULAR.PAI.id,
    topic: PAI_TOPICS.PROPHETS_STORIES,
    question: 'Pasangkan nabi dengan mukjizatnya:',
    leftOptions: [
      'Nabi Muhammad SAW',
      'Nabi Musa AS',
      'Nabi Ibrahim AS',
      'Nabi Nuh AS'
    ],
    rightOptions: [
      'Al-Quran',
      'Tongkat menjadi ular',
      'Tidak terbakar oleh api',
      'Membuat kapal di tengah padang pasir'
    ],
    correctPairs: [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3]
    ],
    explanation: 'Masing-masing nabi memiliki mukjizat khusus: Nabi Muhammad dengan Al-Quran, Nabi Musa dengan tongkat yang bisa menjadi ular, Nabi Ibrahim yang tidak terbakar saat dimasukkan ke dalam api, dan Nabi Nuh yang membuat kapal di tengah padang pasir'
  },

  // Topic: Dzikir dan Doa setelah Shalat
  {
    id: 'pai_k2t2_016',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.PAI.id,
    topic: PAI_TOPICS.PRAYER_DHIKR,
    question: 'Bacaan dzikir setelah shalat yang artinya "Maha Suci Allah" adalah...',
    options: [
      'Subhanallah',
      'Alhamdulillah',
      'Allahu Akbar',
      'Astaghfirullah'
    ],
    correctAnswer: 0,
    explanation: 'Subhanallah berarti "Maha Suci Allah" dan merupakan salah satu bacaan dzikir setelah shalat'
  },

  {
    id: 'pai_k2t2_017',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.PAI.id,
    topic: PAI_TOPICS.PRAYER_DHIKR,
    question: 'Berapa kali bacaan tasbih, tahmid, dan takbir yang dianjurkan setelah shalat?',
    options: [
      '33 kali',
      '11 kali',
      '21 kali',
      '41 kali'
    ],
    correctAnswer: 0,
    explanation: 'Bacaan tasbih (Subhanallah), tahmid (Alhamdulillah), dan takbir (Allahu Akbar) dianjurkan dibaca masing-masing 33 kali setelah shalat'
  },

  {
    id: 'pai_k2t2_018',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.PAI.id,
    topic: PAI_TOPICS.PRAYER_DHIKR,
    question: 'Pilih bacaan dzikir yang dibaca setelah shalat:',
    options: [
      'Subhanallah',
      'Alhamdulillah',
      'Allahu Akbar',
      'Inna lillahi wa inna ilaihi raji\'un',
      'Bismillahirrahmanirrahim'
    ],
    correctAnswer: [0, 1, 2],
    explanation: 'Bacaan dzikir yang umum dibaca setelah shalat adalah Subhanallah, Alhamdulillah, dan Allahu Akbar'
  },

  {
    id: 'pai_k2t2_019',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.PAI.id,
    topic: PAI_TOPICS.PRAYER_DHIKR,
    question: 'Doa memohon kebaikan dunia dan akhirat adalah...',
    options: [
      'Rabbana atina fid-dunya hasanah wa fil-akhirati hasanah',
      'Allahummaghfirli',
      'Subhanallah wa bihamdihi',
      'La ilaha illallah'
    ],
    correctAnswer: 0,
    explanation: 'Doa "Rabbana atina fid-dunya hasanah wa fil-akhirati hasanah" artinya "Ya Tuhan kami, berilah kami kebaikan di dunia dan kebaikan di akhirat"'
  },

  {
    id: 'pai_k2t2_020',
    type: QUESTION_TYPES.CMC2,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.REGULAR.PAI.id,
    topic: PAI_TOPICS.PRAYER_DHIKR,
    question: 'Pasangkan dzikir dengan artinya:',
    leftOptions: [
      'Subhanallah',
      'Alhamdulillah',
      'Allahu Akbar',
      'Astaghfirullah'
    ],
    rightOptions: [
      'Maha Suci Allah',
      'Segala puji bagi Allah',
      'Allah Maha Besar',
      'Aku mohon ampun kepada Allah'
    ],
    correctPairs: [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3]
    ],
    explanation: 'Arti dari masing-masing dzikir: Subhanallah (Maha Suci Allah), Alhamdulillah (Segala puji bagi Allah), Allahu Akbar (Allah Maha Besar), Astaghfirullah (Aku mohon ampun kepada Allah)'
  },

  // Additional questions for Adab bersin & menguap
  {
    id: 'pai_k2t2_021',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.PAI.id,
    topic: PAI_TOPICS.ADAB_ETIQUETTE,
    question: 'Apa yang seharusnya dikatakan oleh seseorang ketika mendengar orang lain bersin dan mengucapkan "Alhamdulillah"?',
    options: [
      'Yarhamukallah',
      'Subhanallah',
      'Astaghfirullah',
      'Bismillah'
    ],
    correctAnswer: 0,
    explanation: 'Ketika mendengar orang bersin dan mengucapkan "Alhamdulillah", kita disunnahkan untuk menjawab dengan "Yarhamukallah" yang berarti "Semoga Allah merahmatimu"'
  },

  {
    id: 'pai_k2t2_022',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.PAI.id,
    topic: PAI_TOPICS.ADAB_ETIQUETTE,
    question: 'Apa yang sebaiknya dilakukan jika kita bersin saat berada di tempat umum?',
    options: [
      'Menutup mulut dan hidung dengan tangan atau tisu',
      'Membiarkan saja karena bersin adalah hal alami',
      'Bersin sekeras-kerasnya agar lega',
      'Menahan bersin sekuat tenaga'
    ],
    correctAnswer: 0,
    explanation: 'Saat berada di tempat umum, sebaiknya kita menutup mulut dan hidung saat bersin untuk mencegah penyebaran kuman dan menjaga kebersihan serta kesopanan'
  },

  {
    id: 'pai_k2t2_023',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.PAI.id,
    topic: PAI_TOPICS.ADAB_ETIQUETTE,
    question: 'Pilih adab-adab yang benar saat bersin:',
    options: [
      'Menutup mulut dan hidung',
      'Mengucapkan "Alhamdulillah"',
      'Memalingkan wajah dari orang lain',
      'Bersin sekeras-kerasnya',
      'Menertawakan orang yang bersin'
    ],
    correctAnswer: [0, 1, 2],
    explanation: 'Adab saat bersin meliputi menutup mulut dan hidung, mengucapkan "Alhamdulillah" setelah bersin, dan memalingkan wajah dari orang lain agar tidak mengganggu'
  },

  // Additional questions for Surah Al-Kafirun
  {
    id: 'pai_k2t2_024',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.PAI.id,
    topic: PAI_TOPICS.SURAH_ALKAFIRUN,
    question: 'Apa tema utama dari surah Al-Kafirun?',
    options: [
      'Toleransi dalam beragama',
      'Tata cara shalat',
      'Kisah para nabi',
      'Perintah berpuasa'
    ],
    correctAnswer: 0,
    explanation: 'Surah Al-Kafirun mengajarkan tentang toleransi dalam beragama dengan prinsip "Bagimu agamamu, bagiku agamaku" yang menekankan kebebasan beragama'
  },

  {
    id: 'pai_k2t2_025',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.REGULAR.PAI.id,
    topic: PAI_TOPICS.SURAH_ALKAFIRUN,
    question: 'Apa arti dari ayat "Lakum dīnukum waliya dīn" dalam surah Al-Kafirun?',
    options: [
      'Untukmu agamamu, dan untukku agamaku',
      'Aku tidak menyembah apa yang kamu sembah',
      'Kamu bukan penyembah apa yang aku sembah',
      'Hai orang-orang kafir'
    ],
    correctAnswer: 0,
    explanation: '"Lakum dīnukum waliya dīn" artinya "Untukmu agamamu, dan untukku agamaku", yang merupakan ayat terakhir dari surah Al-Kafirun'
  },

  {
    id: 'pai_k2t2_026',
    type: QUESTION_TYPES.CMC2,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.REGULAR.PAI.id,
    topic: PAI_TOPICS.SURAH_ALKAFIRUN,
    question: 'Pasangkan ayat surah Al-Kafirun dengan urutan yang benar:',
    leftOptions: [
      'Qul yā-ayyuhal-kāfirūn',
      'Lā a\'budu mā ta\'budūn',
      'Wa lā antum \'ābidūna mā a\'bud',
      'Lakum dīnukum waliya dīn'
    ],
    rightOptions: [
      'Ayat ke-1',
      'Ayat ke-2',
      'Ayat ke-5',
      'Ayat ke-6'
    ],
    correctPairs: [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3]
    ],
    explanation: 'Urutan ayat dalam surah Al-Kafirun: Ayat ke-1: "Qul yā-ayyuhal-kāfirūn", Ayat ke-2: "Lā a\'budu mā ta\'budūn", Ayat ke-5: "Wa lā antum \'ābidūna mā a\'bud", dan Ayat ke-6: "Lakum dīnukum waliya dīn"'
  },

  // Additional questions for Kisah Nabi Muhammad dan Para Nabi
  {
    id: 'pai_k2t2_027',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.PAI.id,
    topic: PAI_TOPICS.PROPHETS_STORIES,
    question: 'Siapa nama kakek Nabi Muhammad SAW yang merawat beliau setelah ibunya wafat?',
    options: [
      'Abdul Muthalib',
      'Abu Thalib',
      'Abdullah',
      'Abu Lahab'
    ],
    correctAnswer: 0,
    explanation: 'Setelah ibunya (Siti Aminah) wafat, Nabi Muhammad SAW diasuh oleh kakeknya yang bernama Abdul Muthalib'
  },

  {
    id: 'pai_k2t2_028',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.PAI.id,
    topic: PAI_TOPICS.PROPHETS_STORIES,
    question: 'Nabi Muhammad SAW pertama kali menerima wahyu di...',
    options: [
      'Gua Hira',
      'Masjidil Haram',
      'Madinah',
      'Bukit Uhud'
    ],
    correctAnswer: 0,
    explanation: 'Nabi Muhammad SAW pertama kali menerima wahyu dari Allah SWT melalui malaikat Jibril di Gua Hira yang terletak di Jabal Nur, Makkah'
  },

  {
    id: 'pai_k2t2_029',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.REGULAR.PAI.id,
    topic: PAI_TOPICS.PROPHETS_STORIES,
    question: 'Pilih sifat-sifat yang dimiliki oleh Nabi Muhammad SAW:',
    options: [
      'Sidiq (jujur)',
      'Amanah (dapat dipercaya)',
      'Tablig (menyampaikan)',
      'Kikir',
      'Pemarah'
    ],
    correctAnswer: [0, 1, 2],
    explanation: 'Nabi Muhammad SAW memiliki empat sifat utama yaitu Sidiq (jujur), Amanah (dapat dipercaya), Tablig (menyampaikan), dan Fathanah (cerdas)'
  },

  {
    id: 'pai_k2t2_030',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.PAI.id,
    topic: PAI_TOPICS.PROPHETS_STORIES,
    question: 'Apa nama lain dari Nabi Muhammad SAW?',
    options: [
      'Al-Amin',
      'Al-Karim',
      'Al-Aziz',
      'Al-Jabbar'
    ],
    correctAnswer: 0,
    explanation: 'Nabi Muhammad SAW diberi gelar Al-Amin yang berarti "yang dapat dipercaya" oleh masyarakat Makkah karena kejujuran dan keluhuran budinya'
  },

  {
    id: 'pai_k2t2_031',
    type: QUESTION_TYPES.CMC2,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.REGULAR.PAI.id,
    topic: PAI_TOPICS.PROPHETS_STORIES,
    question: 'Pasangkan nabi dengan kisahnya yang benar:',
    leftOptions: [
      'Nabi Ibrahim AS',
      'Nabi Musa AS',
      'Nabi Yunus AS',
      'Nabi Nuh AS'
    ],
    rightOptions: [
      'Dibakar dalam api tapi tidak terbakar',
      'Membelah lautan dengan tongkat',
      'Ditelan ikan paus',
      'Membuat kapal besar'
    ],
    correctPairs: [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3]
    ],
    explanation: 'Nabi Ibrahim AS dibakar tapi tidak terbakar, Nabi Musa AS membelah lautan dengan tongkat, Nabi Yunus AS ditelan ikan paus, dan Nabi Nuh AS membuat kapal besar untuk menyelamatkan umat dan binatang dari banjir besar'
  },

  // Additional questions for Dzikir dan Doa setelah Shalat
  {
    id: 'pai_k2t2_032',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.PAI.id,
    topic: PAI_TOPICS.PRAYER_DHIKR,
    question: 'Bacaan dzikir apa yang artinya "Segala puji bagi Allah"?',
    options: [
      'Alhamdulillah',
      'Subhanallah',
      'Allahu Akbar',
      'Astaghfirullah'
    ],
    correctAnswer: 0,
    explanation: 'Alhamdulillah berarti "Segala puji bagi Allah" dan merupakan ungkapan syukur atas segala nikmat yang diberikan oleh Allah SWT'
  },

  {
    id: 'pai_k2t2_033',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.PAI.id,
    topic: PAI_TOPICS.PRAYER_DHIKR,
    question: 'Apa manfaat berdzikir setelah shalat?',
    options: [
      'Menentramkan hati dan mendekatkan diri kepada Allah',
      'Membuat orang lain terkesan',
      'Hanya sekadar rutinitas biasa',
      'Agar cepat selesai shalatnya'
    ],
    correctAnswer: 0,
    explanation: 'Berdzikir setelah shalat bermanfaat untuk menentramkan hati dan mendekatkan diri kepada Allah SWT, sebagaimana disebutkan dalam Al-Quran bahwa dengan berdzikir hati menjadi tenang'
  },

  {
    id: 'pai_k2t2_034',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.PAI.id,
    topic: PAI_TOPICS.PRAYER_DHIKR,
    question: 'Pilih doa-doa yang biasa dibaca setelah shalat:',
    options: [
      'Doa kebaikan dunia dan akhirat',
      'Doa mohon ampunan',
      'Doa sebelum makan',
      'Doa mohon perlindungan dari siksa kubur',
      'Doa sebelum tidur'
    ],
    correctAnswer: [0, 1, 3],
    explanation: 'Doa yang biasa dibaca setelah shalat adalah doa kebaikan dunia dan akhirat, doa mohon ampunan, dan doa mohon perlindungan dari siksa kubur'
  },

  {
    id: 'pai_k2t2_035',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.PAI.id,
    topic: PAI_TOPICS.PRAYER_DHIKR,
    question: 'Bacaan istighfar yang benar adalah...',
    options: [
      'Astaghfirullahal \'adzim',
      'Subhanallah',
      'Alhamdulillah',
      'Bismillah'
    ],
    correctAnswer: 0,
    explanation: 'Bacaan istighfar yang benar adalah "Astaghfirullahal \'adzim" yang berarti "Aku memohon ampunan kepada Allah yang Maha Agung"'
  },

  {
    id: 'pai_k2t2_036',
    type: QUESTION_TYPES.CMC2,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.REGULAR.PAI.id,
    topic: PAI_TOPICS.PRAYER_DHIKR,
    question: 'Pasangkan dzikir dengan waktu yang tepat untuk membacanya:',
    leftOptions: [
      'Bismillahirrahmanirrahim',
      'Alhamdulillah',
      'Subhanallah wa bihamdihi',
      'Inna lillahi wa inna ilaihi raji\'un'
    ],
    rightOptions: [
      'Saat akan memulai kegiatan',
      'Setelah mendapat nikmat',
      'Saat melihat keindahan alam',
      'Saat mendapat musibah'
    ],
    correctPairs: [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3]
    ],
    explanation: 'Bismillah dibaca saat memulai kegiatan, Alhamdulillah dibaca setelah mendapat nikmat, Subhanallah dibaca saat melihat keindahan, dan Inna lillahi wa inna ilaihi raji\'un dibaca saat mendapat musibah'
  },

  // Additional general questions
  {
    id: 'pai_k2t2_037',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.PAI.id,
    topic: PAI_TOPICS.ADAB_ETIQUETTE,
    question: 'Apa adab yang benar ketika akan tidur?',
    options: [
      'Berwudhu, membaca doa, dan tidur menghadap ke kanan',
      'Langsung tidur tanpa berdoa',
      'Tidur dalam keadaan lapar',
      'Tidur dengan posisi telungkup'
    ],
    correctAnswer: 0,
    explanation: 'Adab tidur yang diajarkan dalam Islam adalah berwudhu terlebih dahulu, membaca doa sebelum tidur, dan tidur dengan posisi miring ke kanan mengikuti sunnah Nabi Muhammad SAW'
  },

  {
    id: 'pai_k2t2_038',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.PAI.id,
    topic: PAI_TOPICS.SURAH_ALKAFIRUN,
    question: 'Kapan waktu yang disunnahkan untuk membaca surah Al-Kafirun?',
    options: [
      'Saat shalat Subuh dan sebelum tidur',
      'Hanya saat shalat Dzuhur',
      'Saat makan siang',
      'Saat bermain'
    ],
    correctAnswer: 0,
    explanation: 'Surah Al-Kafirun disunnahkan untuk dibaca pada rakaat pertama shalat Subuh dan juga sebelum tidur untuk mendapatkan perlindungan dari Allah SWT'
  },

  {
    id: 'pai_k2t2_039',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.PAI.id,
    topic: PAI_TOPICS.PROPHETS_STORIES,
    question: 'Apa hikmah dari kisah Nabi Muhammad SAW yang dapat kita teladani?',
    options: [
      'Kesabaran dan akhlak mulia dalam menghadapi kesulitan',
      'Mengumpulkan harta sebanyak-banyaknya',
      'Membalas kejahatan dengan kejahatan',
      'Hidup hanya untuk kesenangan dunia'
    ],
    correctAnswer: 0,
    explanation: 'Hikmah utama dari kisah Nabi Muhammad SAW adalah teladan kesabaran dan akhlak mulia beliau dalam menghadapi berbagai kesulitan dan tantangan dalam menyebarkan ajaran Islam'
  },

  {
    id: 'pai_k2t2_040',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.REGULAR.PAI.id,
    topic: PAI_TOPICS.PRAYER_DHIKR,
    question: 'Apa doa setelah shalat yang mengandung permohonan kebaikan dunia dan akhirat?',
    options: [
      'Rabbana atina fid-dunya hasanah wa fil-akhirati hasanah wa qina adhaban-nar',
      'Subhanallah wal hamdulillah',
      'Allahu akbar',
      'Astagfirullah'
    ],
    correctAnswer: 0,
    explanation: 'Doa "Rabbana atina fid-dunya hasanah wa fil-akhirati hasanah wa qina adhaban-nar" berarti "Ya Tuhan kami, berilah kami kebaikan di dunia dan kebaikan di akhirat dan lindungilah kami dari siksa neraka"'
  }
];

// Additional metadata for learning tracking
export const topicDistribution = {
  [PAI_TOPICS.ADAB_ETIQUETTE]: 10,        // 25%
  [PAI_TOPICS.SURAH_ALKAFIRUN]: 10,       // 25% 
  [PAI_TOPICS.PROPHETS_STORIES]: 10,       // 25%
  [PAI_TOPICS.PRAYER_DHIKR]: 10,           // 25%
  [PAI_TOPICS.AKHLAK]: 0,                 // 0%
  [PAI_TOPICS.ISLAMIC_VALUES]: 0,          // 0%
  [PAI_TOPICS.ASMAUL_HUSNA]: 0,            // 0%
  [PAI_TOPICS.SIRAH_NABAWIYAH]: 0,         // 0%
  [PAI_TOPICS.ISLAMIC_MANNERS]: 0,         // 0%
  [PAI_TOPICS.RAMADAN_FASTING]: 0          // 0%
};

// Question type distribution
export const questionTypeDistribution = {
  [QUESTION_TYPES.MC]: 28,     // 70%
  [QUESTION_TYPES.CMC1]: 8,    // 20%
  [QUESTION_TYPES.CMC2]: 4     // 10%
};

// Difficulty distribution
export const difficultyDistribution = {
  [DIFFICULTY_LEVELS.EASY]: 16,      // 40%
  [DIFFICULTY_LEVELS.MEDIUM]: 16,    // 40% 
  [DIFFICULTY_LEVELS.HARD]: 8        // 20%
};
