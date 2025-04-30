import { QUESTION_TYPES, DIFFICULTY_LEVELS, SUBJECTS } from '../questionSchema';

export const questions = [
  // Topic: Life skills: komunikasi efektif
  {
    id: 'ppkn_k2t2_001',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.PPKN.id,
    topic: SUBJECTS.REGULAR.PPKN.topics.LIFE_SKILLS,
    question: 'Ketika berbicara dengan orang yang lebih tua, sikap yang tepat adalah...',
    options: [
      'Menggunakan bahasa yang sopan dan menatap mata lawan bicara',
      'Berbicara sambil bermain handphone',
      'Menggunakan bahasa gaul',
      'Berbicara sambil tertawa keras'
    ],
    correctAnswer: 0,
    explanation: 'Komunikasi efektif dengan orang yang lebih tua harus sopan dan menunjukkan rasa hormat'
  },

  {
    id: 'ppkn_k2t2_002',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.PPKN.id,
    topic: SUBJECTS.REGULAR.PPKN.topics.LIFE_SKILLS,
    question: 'Apa yang harus kita lakukan ketika ada teman yang sedang berbicara di depan kelas?',
    options: [
      'Mendengarkan dengan penuh perhatian',
      'Berbisik-bisik dengan teman lain',
      'Bermain dengan alat tulis',
      'Melihat ke luar jendela'
    ],
    correctAnswer: 0,
    explanation: 'Mendengarkan dengan penuh perhatian adalah sikap sopan dan menghargai orang yang sedang berbicara di depan kelas'
  },

  {
    id: 'ppkn_k2t2_003',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.PPKN.id,
    topic: SUBJECTS.REGULAR.PPKN.topics.LIFE_SKILLS,
    question: 'Pilih semua cara berkomunikasi yang efektif di sekolah:',
    options: [
      'Berbicara dengan jelas dan sopan',
      'Mendengarkan ketika orang lain berbicara',
      'Memotong pembicaraan orang lain',
      'Menggunakan bahasa yang kasar',
      'Mengangkat tangan sebelum bertanya'
    ],
    correctAnswer: [0, 1, 4],
    explanation: 'Komunikasi efektif di sekolah meliputi berbicara dengan jelas dan sopan, mendengarkan saat orang lain berbicara, dan mengangkat tangan sebelum bertanya'
  },

  {
    id: 'ppkn_k2t2_004',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.PPKN.id,
    topic: SUBJECTS.REGULAR.PPKN.topics.LIFE_SKILLS,
    question: 'Ketika kita tidak setuju dengan pendapat teman, sebaiknya kita...',
    options: [
      'Menyampaikan pendapat dengan bahasa yang sopan',
      'Marah dan memaksakan pendapat kita',
      'Diam saja meskipun tidak setuju',
      'Mengejek pendapat teman tersebut'
    ],
    correctAnswer: 0,
    explanation: 'Meskipun tidak setuju, kita tetap harus menghargai pendapat orang lain dan menyampaikan pendapat kita dengan sopan'
  },

  {
    id: 'ppkn_k2t2_005',
    type: QUESTION_TYPES.CMC2,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.REGULAR.PPKN.id,
    topic: SUBJECTS.REGULAR.PPKN.topics.LIFE_SKILLS,
    question: 'Pasangkan sikap dengan kategori yang tepat:',
    leftOptions: [
      'Mendengarkan saat guru menjelaskan',
      'Mengejek teman yang pendiam',
      'Membantu teman yang kesulitan',
      'Berbicara saat teman presentasi'
    ],
    rightOptions: [
      'Sikap baik',
      'Sikap tidak baik',
      'Sikap baik',
      'Sikap tidak baik'
    ],
    correctPairs: [
      [0, 0],
      [1, 1],
      [2, 0],
      [3, 1]
    ],
    explanation: 'Sikap baik meliputi mendengarkan guru dan membantu teman. Sikap tidak baik meliputi mengejek teman dan berbicara saat presentasi'
  },

  // Topic: Pancasila: sifat demokratis
  {
    id: 'ppkn_k2t2_006',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.PPKN.id,
    topic: SUBJECTS.REGULAR.PPKN.topics.PANCASILA,
    question: 'Pancasila sila ke-4 berbunyi...',
    options: [
      'Kerakyatan yang dipimpin oleh hikmat kebijaksanaan dalam permusyawaratan/perwakilan',
      'Ketuhanan Yang Maha Esa',
      'Keadilan sosial bagi seluruh rakyat Indonesia',
      'Persatuan Indonesia'
    ],
    correctAnswer: 0,
    explanation: 'Sila ke-4 Pancasila adalah "Kerakyatan yang dipimpin oleh hikmat kebijaksanaan dalam permusyawaratan/perwakilan"'
  },

  {
    id: 'ppkn_k2t2_007',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.PPKN.id,
    topic: SUBJECTS.REGULAR.PPKN.topics.PANCASILA,
    question: 'Pilih semua contoh sikap demokratis dalam kehidupan sehari-hari:',
    options: [
      'Menghargai pendapat teman',
      'Memaksakan kehendak',
      'Mengikuti musyawarah kelas',
      'Membuat keputusan sendiri tanpa diskusi',
      'Menyelesaikan masalah dengan voting jika tidak ada kesepakatan'
    ],
    correctAnswer: [0, 2, 4],
    explanation: 'Sikap demokratis meliputi menghargai pendapat orang lain, bermusyawarah, dan menyelesaikan masalah dengan voting jika tidak ada kesepakatan'
  },

  {
    id: 'ppkn_k2t2_008',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.PPKN.id,
    topic: SUBJECTS.REGULAR.PPKN.topics.PANCASILA,
    question: 'Lambang sila ke-4 Pancasila adalah...',
    options: [
      'Kepala banteng',
      'Bintang',
      'Pohon beringin',
      'Padi dan kapas'
    ],
    correctAnswer: 0,
    explanation: 'Lambang sila ke-4 Pancasila adalah kepala banteng, yang melambangkan musyawarah/demokrasi'
  },

  {
    id: 'ppkn_k2t2_009',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.PPKN.id,
    topic: SUBJECTS.REGULAR.PPKN.topics.PANCASILA,
    question: 'Apa yang dimaksud dengan musyawarah?',
    options: [
      'Membicarakan masalah bersama untuk mencapai kesepakatan',
      'Memaksakan pendapat kita kepada orang lain',
      'Menyerah pada pendapat orang lain',
      'Mengambil keputusan tanpa diskusi'
    ],
    correctAnswer: 0,
    explanation: 'Musyawarah adalah membicarakan masalah bersama untuk mencapai kesepakatan atau mufakat'
  },

  {
    id: 'ppkn_k2t2_010',
    type: QUESTION_TYPES.CMC2,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.REGULAR.PPKN.id,
    topic: SUBJECTS.REGULAR.PPKN.topics.PANCASILA,
    question: 'Pasangkan lambang Pancasila dengan silanya:',
    leftOptions: [
      'Bintang',
      'Rantai',
      'Pohon Beringin',
      'Kepala Banteng'
    ],
    rightOptions: [
      'Sila ke-1',
      'Sila ke-2',
      'Sila ke-3',
      'Sila ke-4'
    ],
    correctPairs: [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3]
    ],
    explanation: 'Lambang Pancasila: Bintang untuk sila ke-1, Rantai untuk sila ke-2, Pohon Beringin untuk sila ke-3, Kepala Banteng untuk sila ke-4'
  },

  // Topic: Neighborhood: kehidupan bermasyarakat
  {
    id: 'ppkn_k2t2_011',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.PPKN.id,
    topic: SUBJECTS.REGULAR.PPKN.topics.NEIGHBORHOOD,
    question: 'Contoh sikap gotong royong di lingkungan rumah adalah...',
    options: [
      'Kerja bakti membersihkan lingkungan',
      'Bermain video game sendirian',
      'Menonton TV sepanjang hari',
      'Tidur siang di rumah'
    ],
    correctAnswer: 0,
    explanation: 'Kerja bakti membersihkan lingkungan adalah contoh sikap gotong royong yang melibatkan kerjasama warga'
  },

  {
    id: 'ppkn_k2t2_012',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.PPKN.id,
    topic: SUBJECTS.REGULAR.PPKN.topics.NEIGHBORHOOD,
    question: 'Apa yang sebaiknya kita lakukan jika tetangga sedang sakit?',
    options: [
      'Menjenguk dan memberi bantuan',
      'Tidak peduli karena bukan keluarga',
      'Bermain dengan keras di dekat rumahnya',
      'Mengganggu istirahatnya'
    ],
    correctAnswer: 0,
    explanation: 'Menjenguk dan memberi bantuan pada tetangga yang sakit adalah wujud kepedulian dalam hidup bertetangga'
  },

  {
    id: 'ppkn_k2t2_013',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.PPKN.id,
    topic: SUBJECTS.REGULAR.PPKN.topics.NEIGHBORHOOD,
    question: 'Pilih semua kegiatan yang termasuk kegiatan sosial di masyarakat:',
    options: [
      'Kerja bakti',
      'Ronda malam',
      'Bermain game online',
      'Membuang sampah sembarangan',
      'Belajar sendiri di kamar'
    ],
    correctAnswer: [0, 1],
    explanation: 'Kegiatan sosial di masyarakat termasuk kerja bakti dan ronda malam yang melibatkan interaksi dan kerjasama warga'
  },

  {
    id: 'ppkn_k2t2_014',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.PPKN.id,
    topic: SUBJECTS.REGULAR.PPKN.topics.NEIGHBORHOOD,
    question: 'Sikap yang tepat saat tetangga mengadakan hajatan adalah...',
    options: [
      'Membantu sesuai kemampuan',
      'Mengabaikan dan tetap bermain',
      'Membuat keributan di sekitar tempat hajatan',
      'Meminta makanan meskipun tidak diundang'
    ],
    correctAnswer: 0,
    explanation: 'Membantu tetangga yang sedang hajatan sesuai kemampuan adalah bentuk solidaritas dalam kehidupan bertetangga'
  },

  {
    id: 'ppkn_k2t2_015',
    type: QUESTION_TYPES.CMC2,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.REGULAR.PPKN.id,
    topic: SUBJECTS.REGULAR.PPKN.topics.NEIGHBORHOOD,
    question: 'Pasangkan kegiatan dengan manfaatnya dalam kehidupan bermasyarakat:',
    leftOptions: [
      'Kerja bakti',
      'Arisan RT',
      'Ronda malam',
      'Posyandu'
    ],
    rightOptions: [
      'Lingkungan bersih dan nyaman',
      'Mempererat silaturahmi antar warga',
      'Keamanan lingkungan terjaga',
      'Kesehatan ibu dan anak terpantau'
    ],
    correctPairs: [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3]
    ],
    explanation: 'Setiap kegiatan masyarakat memiliki manfaat: kerja bakti untuk kebersihan, arisan untuk silaturahmi, ronda untuk keamanan, dan posyandu untuk kesehatan'
  },

  // Topic: Character building: sikap jujur dan tanggung jawab
  {
    id: 'ppkn_k2t2_016',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.PPKN.id,
    topic: SUBJECTS.REGULAR.PPKN.topics.CHARACTER_BUILDING,
    question: 'Jika kita menemukan uang di kelas, sikap yang benar adalah...',
    options: [
      'Melaporkan kepada guru',
      'Mengambil dan menyimpannya untuk diri sendiri',
      'Berpura-pura tidak melihat',
      'Memberitahu teman tanpa melaporkan kepada guru'
    ],
    correctAnswer: 0,
    explanation: 'Melaporkan kepada guru menunjukkan sikap jujur dan bertanggung jawab'
  },

  {
    id: 'ppkn_k2t2_017',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.PPKN.id,
    topic: SUBJECTS.REGULAR.PPKN.topics.CHARACTER_BUILDING,
    question: 'Apa yang dimaksud dengan sikap jujur?',
    options: [
      'Mengatakan atau melakukan sesuatu sesuai kenyataan',
      'Mengatakan sesuatu yang membuat orang senang',
      'Menyembunyikan kesalahan',
      'Menyalahkan orang lain'
    ],
    correctAnswer: 0,
    explanation: 'Jujur berarti mengatakan atau melakukan sesuatu sesuai dengan kenyataan atau kebenaran'
  },

  {
    id: 'ppkn_k2t2_018',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.PPKN.id,
    topic: SUBJECTS.REGULAR.PPKN.topics.CHARACTER_BUILDING,
    question: 'Pilih semua contoh sikap tanggung jawab seorang siswa:',
    options: [
      'Mengerjakan PR tepat waktu',
      'Membuang sampah pada tempatnya',
      'Mencontek saat ujian',
      'Terlambat ke sekolah',
      'Menjaga kebersihan kelas'
    ],
    correctAnswer: [0, 1, 4],
    explanation: 'Contoh sikap tanggung jawab siswa antara lain mengerjakan PR tepat waktu, membuang sampah pada tempatnya, dan menjaga kebersihan kelas'
  },

  {
    id: 'ppkn_k2t2_019',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.PPKN.id,
    topic: SUBJECTS.REGULAR.PPKN.topics.CHARACTER_BUILDING,
    question: 'Mengapa sikap disiplin penting dalam kehidupan sehari-hari?',
    options: [
      'Membuat hidup lebih teratur dan tertib',
      'Membuat orang lain takut kepada kita',
      'Agar bisa mendapatkan hadiah',
      'Supaya tidak dimarahi guru atau orang tua'
    ],
    correctAnswer: 0,
    explanation: 'Sikap disiplin penting karena membuat hidup lebih teratur dan tertib, baik untuk diri sendiri maupun lingkungan'
  },

  {
    id: 'ppkn_k2t2_020',
    type: QUESTION_TYPES.CMC2,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.REGULAR.PPKN.id,
    topic: SUBJECTS.REGULAR.PPKN.topics.CHARACTER_BUILDING,
    question: 'Pasangkan sikap berikut dengan kategori yang tepat:',
    leftOptions: [
      'Mengakui kesalahan',
      'Mengembalikan barang temuan',
      'Datang ke sekolah tepat waktu',
      'Merapikan mainan setelah bermain'
    ],
    rightOptions: [
      'Sikap jujur',
      'Sikap jujur',
      'Sikap disiplin',
      'Sikap tanggung jawab'
    ],
    correctPairs: [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3]
    ],
    explanation: 'Mengakui kesalahan dan mengembalikan barang temuan termasuk sikap jujur, datang tepat waktu adalah sikap disiplin, dan merapikan mainan adalah sikap tanggung jawab'
  },

  // Additional questions for Life skills: komunikasi efektif
  {
    id: 'ppkn_k2t2_021',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.PPKN.id,
    topic: SUBJECTS.REGULAR.PPKN.topics.LIFE_SKILLS,
    question: 'Apa yang sebaiknya kita lakukan jika lupa nama teman yang baru kita kenal?',
    options: [
      'Jujur dan meminta maaf, lalu bertanya kembali namanya',
      'Pura-pura ingat dan menghindar',
      'Tidak menyapa teman tersebut',
      'Memberinya nama panggilan baru'
    ],
    correctAnswer: 0,
    explanation: 'Jujur dan meminta maaf lalu bertanya kembali adalah sikap yang baik dalam komunikasi efektif. Hal ini menunjukkan kejujuran dan penghargaan terhadap orang lain.'
  },

  {
    id: 'ppkn_k2t2_022',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.PPKN.id,
    topic: SUBJECTS.REGULAR.PPKN.topics.LIFE_SKILLS,
    question: 'Apa yang harus dilakukan ketika kita ingin berbicara dalam diskusi kelompok?',
    options: [
      'Mengangkat tangan dan menunggu giliran',
      'Langsung berbicara dengan suara keras',
      'Menyela pembicaraan orang lain',
      'Mengetuk meja untuk mendapat perhatian'
    ],
    correctAnswer: 0,
    explanation: 'Dalam diskusi kelompok, mengangkat tangan dan menunggu giliran adalah etika yang baik. Ini menunjukkan penghargaan terhadap orang yang sedang berbicara.'
  },

  {
    id: 'ppkn_k2t2_023',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.REGULAR.PPKN.id,
    topic: SUBJECTS.REGULAR.PPKN.topics.LIFE_SKILLS,
    question: 'Pilih sikap-sikap yang menunjukkan pendengar yang baik:',
    options: [
      'Menjaga kontak mata dengan pembicara',
      'Mengangguk untuk menunjukkan pemahaman',
      'Bermain ponsel sambil mendengarkan',
      'Mengajukan pertanyaan yang relevan',
      'Sering melihat jam tangan'
    ],
    correctAnswer: [0, 1, 3],
    explanation: 'Pendengar yang baik menjaga kontak mata, mengangguk untuk menunjukkan pemahaman, dan mengajukan pertanyaan yang relevan. Bermain ponsel dan sering melihat jam tangan menunjukkan ketidakfokusan.'
  },

  // Additional questions for Pancasila: sifat demokratis
  {
    id: 'ppkn_k2t2_024',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.PPKN.id,
    topic: SUBJECTS.REGULAR.PPKN.topics.PANCASILA,
    question: 'Apa arti dari demokratis?',
    options: [
      'Mengutamakan kepentingan rakyat dan musyawarah',
      'Mementingkan diri sendiri',
      'Melakukan segala hal sendiri',
      'Mengikuti pendapat pemimpin saja'
    ],
    correctAnswer: 0,
    explanation: 'Demokratis berarti mengutamakan kepentingan rakyat dan musyawarah dalam pengambilan keputusan, sesuai dengan sila keempat Pancasila.'
  },

  {
    id: 'ppkn_k2t2_025',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.PPKN.id,
    topic: SUBJECTS.REGULAR.PPKN.topics.PANCASILA,
    question: 'Bagaimana cara pemilihan ketua kelas yang sesuai dengan nilai Pancasila?',
    options: [
      'Dipilih melalui musyawarah atau voting',
      'Ditunjuk oleh guru tanpa diskusi',
      'Yang paling kaya menjadi ketua kelas',
      'Yang paling pintar otomatis jadi ketua kelas'
    ],
    correctAnswer: 0,
    explanation: 'Pemilihan ketua kelas melalui musyawarah atau voting mencerminkan nilai demokrasi dalam Pancasila sila keempat, karena melibatkan partisipasi semua anggota kelas.'
  },

  {
    id: 'ppkn_k2t2_026',
    type: QUESTION_TYPES.CMC2,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.REGULAR.PPKN.id,
    topic: SUBJECTS.REGULAR.PPKN.topics.PANCASILA,
    question: 'Pasangkan perilaku dengan sila Pancasila yang sesuai:',
    leftOptions: [
      'Berdoa sebelum belajar',
      'Menolong teman yang kesulitan',
      'Tidak membeda-bedakan teman',
      'Membuang sampah pada tempatnya'
    ],
    rightOptions: [
      'Sila ke-1',
      'Sila ke-2',
      'Sila ke-3',
      'Sila ke-5'
    ],
    correctPairs: [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3]
    ],
    explanation: 'Berdoa mencerminkan sila ke-1 (Ketuhanan), menolong teman mencerminkan sila ke-2 (Kemanusiaan), tidak membeda-bedakan teman mencerminkan sila ke-3 (Persatuan), dan membuang sampah pada tempatnya mencerminkan sila ke-5 (Keadilan sosial).'
  },

  // Additional questions for Neighborhood: kehidupan bermasyarakat
  {
    id: 'ppkn_k2t2_027',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.PPKN.id,
    topic: SUBJECTS.REGULAR.PPKN.topics.NEIGHBORHOOD,
    question: 'Apa manfaat dari kegiatan gotong royong di lingkungan tempat tinggal?',
    options: [
      'Pekerjaan menjadi lebih ringan dan cepat selesai',
      'Mendapatkan uang yang banyak',
      'Bisa memilih pekerjaan yang mudah saja',
      'Tidak perlu membantu tetangga lain kali'
    ],
    correctAnswer: 0,
    explanation: 'Kegiatan gotong royong membuat pekerjaan menjadi lebih ringan dan cepat selesai karena dikerjakan bersama-sama. Selain itu juga memperkuat hubungan antarwarga.'
  },

  {
    id: 'ppkn_k2t2_028',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.PPKN.id,
    topic: SUBJECTS.REGULAR.PPKN.topics.NEIGHBORHOOD,
    question: 'Pilih kegiatan yang merupakan bentuk kerja sama di lingkungan sekolah:',
    options: [
      'Piket kelas bersama',
      'Lomba kebersihan antar kelas',
      'Belajar sendiri di perpustakaan',
      'Mengerjakan PR kelompok',
      'Bermain video game sendiri'
    ],
    correctAnswer: [0, 1, 3],
    explanation: 'Bentuk kerja sama di lingkungan sekolah meliputi piket kelas bersama, lomba kebersihan antar kelas, dan mengerjakan PR kelompok. Belajar sendiri dan bermain video game sendiri merupakan kegiatan individual.'
  },

  {
    id: 'ppkn_k2t2_029',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.PPKN.id,
    topic: SUBJECTS.REGULAR.PPKN.topics.NEIGHBORHOOD,
    question: 'Bagaimana sikap yang tepat saat bertemu dengan tetangga baru?',
    options: [
      'Menyapa dengan ramah dan memperkenalkan diri',
      'Mengabaikan dan tidak menyapa',
      'Menunggu tetangga baru menyapa duluan',
      'Membicarakan tetangga baru dengan tetangga lain'
    ],
    correctAnswer: 0,
    explanation: 'Sikap yang tepat saat bertemu tetangga baru adalah menyapa dengan ramah dan memperkenalkan diri. Ini menunjukkan keramahan dan keterbukaan dalam hidup bertetangga.'
  },

  // Additional questions for Character building: sikap jujur dan tanggung jawab
  {
    id: 'ppkn_k2t2_030',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.PPKN.id,
    topic: SUBJECTS.REGULAR.PPKN.topics.CHARACTER_BUILDING,
    question: 'Apa yang dimaksud dengan sikap tanggung jawab?',
    options: [
      'Kesediaan menanggung akibat dari perbuatan yang dilakukan',
      'Mengerjakan tugas ketika diawasi saja',
      'Melimpahkan kesalahan kepada orang lain',
      'Mengaku benar meskipun salah'
    ],
    correctAnswer: 0,
    explanation: 'Tanggung jawab adalah kesediaan menanggung akibat dari perbuatan yang dilakukan, baik perbuatan yang benar maupun yang salah.'
  },

  {
    id: 'ppkn_k2t2_031',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.REGULAR.PPKN.id,
    topic: SUBJECTS.REGULAR.PPKN.topics.CHARACTER_BUILDING,
    question: 'Pilih sikap yang menunjukkan kejujuran:',
    options: [
      'Mengembalikan barang yang dipinjam',
      'Mengakui kesalahan meskipun akan dihukum',
      'Berbohong untuk melindungi teman',
      'Mengatakan yang sebenarnya meskipun pahit',
      'Menjaga rahasia meskipun itu sebuah kesalahan'
    ],
    correctAnswer: [0, 1, 3],
    explanation: 'Sikap jujur ditunjukkan dengan mengembalikan barang yang dipinjam, mengakui kesalahan meskipun akan dihukum, dan mengatakan yang sebenarnya meskipun pahit. Berbohong dan menyembunyikan kesalahan tidak termasuk kejujuran.'
  },

  {
    id: 'ppkn_k2t2_032',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.PPKN.id,
    topic: SUBJECTS.REGULAR.PPKN.topics.CHARACTER_BUILDING,
    question: 'Apa manfaat dari sikap disiplin?',
    options: [
      'Menumbuhkan kebiasaan yang baik dan tertib',
      'Mendapatkan pujian dari orang lain',
      'Menjadi terkenal di sekolah',
      'Disukai oleh guru saja'
    ],
    correctAnswer: 0,
    explanation: 'Sikap disiplin bermanfaat untuk menumbuhkan kebiasaan yang baik dan tertib dalam kehidupan sehari-hari, baik di rumah, sekolah, maupun masyarakat.'
  },

  {
    id: 'ppkn_k2t2_033',
    type: QUESTION_TYPES.CMC2,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.REGULAR.PPKN.id,
    topic: SUBJECTS.REGULAR.PPKN.topics.CHARACTER_BUILDING,
    question: 'Pasangkan sikap dengan nilai karakternya:',
    leftOptions: [
      'Menyelesaikan tugas tepat waktu',
      'Berkata apa adanya',
      'Membantu orang tua di rumah',
      'Menabung uang jajan'
    ],
    rightOptions: [
      'Disiplin',
      'Jujur',
      'Tanggung jawab',
      'Hemat'
    ],
    correctPairs: [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3]
    ],
    explanation: 'Menyelesaikan tugas tepat waktu mencerminkan disiplin, berkata apa adanya mencerminkan kejujuran, membantu orang tua mencerminkan tanggung jawab, dan menabung mencerminkan sikap hemat.'
  },

  {
    id: 'ppkn_k2t2_034',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.PPKN.id,
    topic: SUBJECTS.REGULAR.PPKN.topics.LIFE_SKILLS,
    question: 'Saat berbicara dengan teman yang berbeda pendapat, sikap yang tepat adalah...',
    options: [
      'Mendengarkan dengan baik dan menghargai pendapatnya',
      'Bersikeras mempertahankan pendapat sendiri',
      'Mengabaikan pendapatnya',
      'Menyuruhnya diam'
    ],
    correctAnswer: 0,
    explanation: 'Dalam komunikasi efektif, kita harus mendengarkan dan menghargai pendapat orang lain meskipun berbeda dengan pendapat kita.'
  },

  {
    id: 'ppkn_k2t2_035',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.PPKN.id,
    topic: SUBJECTS.REGULAR.PPKN.topics.PANCASILA,
    question: 'Apa simbol dari sila pertama Pancasila?',
    options: [
      'Bintang',
      'Rantai',
      'Pohon beringin',
      'Kepala banteng'
    ],
    correctAnswer: 0,
    explanation: 'Simbol sila pertama Pancasila (Ketuhanan Yang Maha Esa) adalah bintang.'
  },

  {
    id: 'ppkn_k2t2_036',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.PPKN.id,
    topic: SUBJECTS.REGULAR.PPKN.topics.NEIGHBORHOOD,
    question: 'Apa yang dimaksud dengan rukun tetangga (RT)?',
    options: [
      'Lembaga kemasyarakatan yang membantu menjalankan tugas pemerintahan desa/kelurahan',
      'Organisasi para tetangga yang hobi berkumpul',
      'Tempat berkumpul para warga',
      'Komunitas yang hanya bertemu saat ada masalah'
    ],
    correctAnswer: 0,
    explanation: 'Rukun Tetangga (RT) adalah lembaga kemasyarakatan yang membantu menjalankan tugas pemerintahan desa/kelurahan, terutama dalam pelayanan masyarakat.'
  },

  {
    id: 'ppkn_k2t2_037',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.PPKN.id,
    topic: SUBJECTS.REGULAR.PPKN.topics.LIFE_SKILLS,
    question: 'Bagaimana cara yang baik untuk menyampaikan pendapat?',
    options: [
      'Bicara dengan sopan dan tidak menyinggung perasaan orang lain',
      'Memaksakan pendapat agar didengarkan',
      'Bicara dengan suara yang sangat keras',
      'Menyela pembicaraan orang lain'
    ],
    correctAnswer: 0,
    explanation: 'Cara yang baik untuk menyampaikan pendapat adalah dengan bicara sopan dan tidak menyinggung perasaan orang lain, karena hal ini menunjukkan penghargaan terhadap orang lain.'
  },

  {
    id: 'ppkn_k2t2_038',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.PPKN.id,
    topic: SUBJECTS.REGULAR.PPKN.topics.PANCASILA,
    question: 'Pilih contoh perilaku yang sesuai dengan sila kelima Pancasila:',
    options: [
      'Bersikap adil terhadap semua teman',
      'Membantu teman yang kesulitan tanpa membeda-bedakan',
      'Memilih berteman dengan yang kaya saja',
      'Membagi makanan sama rata',
      'Mengambil lebih banyak makanan untuk diri sendiri'
    ],
    correctAnswer: [0, 1, 3],
    explanation: 'Sila kelima Pancasila adalah "Keadilan sosial bagi seluruh rakyat Indonesia". Perilaku yang sesuai yaitu bersikap adil, membantu tanpa membeda-bedakan, dan membagi makanan sama rata.'
  },

  {
    id: 'ppkn_k2t2_039',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.REGULAR.PPKN.id,
    topic: SUBJECTS.REGULAR.PPKN.topics.CHARACTER_BUILDING,
    question: 'Mengapa kita perlu memiliki sikap toleransi?',
    options: [
      'Untuk menciptakan kerukunan dalam keberagaman',
      'Agar dianggap baik oleh orang lain',
      'Agar mendapat pujian',
      'Karena dipaksa oleh peraturan'
    ],
    correctAnswer: 0,
    explanation: 'Toleransi diperlukan untuk menciptakan kerukunan dalam keberagaman, sehingga kita bisa hidup berdampingan dengan damai meskipun berbeda suku, agama, ras, atau golongan.'
  },

  {
    id: 'ppkn_k2t2_040',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.PPKN.id,
    topic: SUBJECTS.REGULAR.PPKN.topics.CHARACTER_BUILDING,
    question: 'Contoh sikap peduli lingkungan adalah...',
    options: [
      'Membuang sampah pada tempatnya',
      'Mencoret-coret tembok sekolah',
      'Membiarkan sampah berserakan',
      'Merusak tanaman di taman'
    ],
    correctAnswer: 0,
    explanation: 'Membuang sampah pada tempatnya adalah contoh sikap peduli lingkungan, karena membantu menjaga kebersihan dan mencegah pencemaran lingkungan.'
  },

  {
    id: 'ppkn_k2t2_041',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.PPKN.id,
    topic: SUBJECTS.REGULAR.PPKN.topics.NEIGHBORHOOD,
    question: 'Apa manfaat menjaga kerukunan dalam kehidupan bermasyarakat?',
    options: [
      'Hidup menjadi damai dan nyaman',
      'Menjadi terkenal di lingkungan',
      'Mendapatkan hadiah dari ketua RT',
      'Disukai oleh tetangga kaya'
    ],
    correctAnswer: 0,
    explanation: 'Menjaga kerukunan dalam kehidupan bermasyarakat membuat hidup menjadi damai dan nyaman, karena konflik dapat dihindari dan kerja sama dapat terjalin dengan baik.'
  },

  {
    id: 'ppkn_k2t2_042',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.PPKN.id,
    topic: SUBJECTS.REGULAR.PPKN.topics.CHARACTER_BUILDING,
    question: 'Pilih perilaku yang menunjukkan sikap disiplin di sekolah:',
    options: [
      'Datang tepat waktu',
      'Mengenakan seragam sesuai aturan',
      'Tidur saat pelajaran berlangsung',
      'Mengerjakan PR',
      'Bermain saat jam pelajaran'
    ],
    correctAnswer: [0, 1, 3],
    explanation: 'Sikap disiplin di sekolah ditunjukkan dengan datang tepat waktu, mengenakan seragam sesuai aturan, dan mengerjakan PR. Tidur dan bermain saat jam pelajaran menunjukkan ketidakdisiplinan.'
  },

  {
    id: 'ppkn_k2t2_043',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.REGULAR.PPKN.id,
    topic: SUBJECTS.REGULAR.PPKN.topics.LIFE_SKILLS,
    question: 'Apa yang dimaksud dengan empati?',
    options: [
      'Kemampuan memahami dan merasakan apa yang dirasakan orang lain',
      'Kemampuan berbicara dengan lancar',
      'Kemampuan menyelesaikan masalah sendiri',
      'Kemampuan memimpin orang lain'
    ],
    correctAnswer: 0,
    explanation: 'Empati adalah kemampuan memahami dan merasakan apa yang dirasakan orang lain. Ini merupakan keterampilan sosial penting dalam berkomunikasi dan membangun hubungan.'
  },

  {
    id: 'ppkn_k2t2_044',
    type: QUESTION_TYPES.CMC2,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.REGULAR.PPKN.id,
    topic: SUBJECTS.REGULAR.PPKN.topics.LIFE_SKILLS,
    question: 'Pasangkan sikap komunikasi dengan kategorinya:',
    leftOptions: [
      'Mendengarkan dengan penuh perhatian',
      'Berbicara dengan suara keras di perpustakaan',
      'Menggunakan kata-kata sopan',
      'Mengejek pendapat teman'
    ],
    rightOptions: [
      'Komunikasi baik',
      'Komunikasi tidak baik',
      'Komunikasi baik',
      'Komunikasi tidak baik'
    ],
    correctPairs: [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3]
    ],
    explanation: 'Komunikasi yang baik ditunjukkan dengan mendengarkan dan menggunakan kata-kata sopan. Komunikasi tidak baik ditunjukkan dengan berbicara keras di tempat yang membutuhkan ketenangan dan mengejek pendapat orang lain.'
  },

  {
    id: 'ppkn_k2t2_045',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.PPKN.id,
    topic: SUBJECTS.REGULAR.PPKN.topics.NEIGHBORHOOD,
    question: 'Apa yang harus dilakukan jika melihat tetangga sedang kesulitan?',
    options: [
      'Menawarkan bantuan',
      'Pura-pura tidak melihat',
      'Menertawakan kesulitannya',
      'Menceritakan kesulitannya kepada orang lain'
    ],
    correctAnswer: 0,
    explanation: 'Menawarkan bantuan kepada tetangga yang kesulitan menunjukkan sikap peduli dan gotong royong yang merupakan nilai penting dalam kehidupan bermasyarakat.'
  },

  {
    id: 'ppkn_k2t2_046',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.PPKN.id,
    topic: SUBJECTS.REGULAR.PPKN.topics.PANCASILA,
    question: 'Sila keberapa Pancasila yang memiliki simbol padi dan kapas?',
    options: [
      'Sila ke-5',
      'Sila ke-1',
      'Sila ke-2',
      'Sila ke-3'
    ],
    correctAnswer: 0,
    explanation: 'Simbol padi dan kapas merupakan lambang dari sila ke-5 Pancasila yaitu "Keadilan sosial bagi seluruh rakyat Indonesia".'
  },

  {
    id: 'ppkn_k2t2_047',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.PPKN.id,
    topic: SUBJECTS.REGULAR.PPKN.topics.CHARACTER_BUILDING,
    question: 'Apa yang dimaksud dengan mandiri?',
    options: [
      'Mampu melakukan sesuatu sendiri tanpa bantuan orang lain',
      'Menyendiri dan tidak mau berteman',
      'Selalu menolak bantuan orang lain',
      'Tidak mau bekerja sama'
    ],
    correctAnswer: 0,
    explanation: 'Mandiri berarti mampu melakukan sesuatu sendiri tanpa bantuan orang lain. Ini merupakan karakter penting yang perlu dikembangkan sejak dini.'
  },

  {
    id: 'ppkn_k2t2_048',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.PPKN.id,
    topic: SUBJECTS.REGULAR.PPKN.topics.NEIGHBORHOOD,
    question: 'Pilih kegiatan yang dapat memperkuat persatuan di lingkungan tempat tinggal:',
    options: [
      'Kerja bakti membersihkan lingkungan',
      'Merayakan hari kemerdekaan bersama',
      'Membuat kelompok-kelompok tertutup',
      'Gotong royong membantu tetangga yang terkena musibah',
      'Bersaing untuk menjadi yang paling kaya'
    ],
    correctAnswer: [0, 1, 3],
    explanation: 'Kegiatan yang memperkuat persatuan di lingkungan adalah kerja bakti, merayakan hari kemerdekaan bersama, dan gotong royong membantu tetangga yang terkena musibah. Kegiatan-kegiatan ini melibatkan kerja sama dan kebersamaan antarwarga.'
  },

  {
    id: 'ppkn_k2t2_049',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.REGULAR.PPKN.id,
    topic: SUBJECTS.REGULAR.PPKN.topics.PANCASILA,
    question: 'Bagaimana cara menerapkan nilai Pancasila dalam kehidupan sehari-hari di sekolah?',
    options: [
      'Menghormati teman yang berbeda agama, suku, dan budaya',
      'Hanya berteman dengan yang sama agamanya',
      'Mengolok-olok teman yang berbeda',
      'Memaksakan pendapat sendiri pada teman'
    ],
    correctAnswer: 0,
    explanation: 'Menghormati teman yang berbeda agama, suku, dan budaya adalah penerapan nilai Pancasila, khususnya sila ke-1 (Ketuhanan), sila ke-2 (Kemanusiaan), dan sila ke-3 (Persatuan).'
  },

  {
    id: 'ppkn_k2t2_050',
    type: QUESTION_TYPES.CMC2,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.REGULAR.PPKN.id,
    topic: SUBJECTS.REGULAR.PPKN.topics.CHARACTER_BUILDING,
    question: 'Pasangkan sikap dengan manfaatnya:',
    leftOptions: [
      'Jujur',
      'Tanggung jawab',
      'Disiplin',
      'Toleransi'
    ],
    rightOptions: [
      'Dipercaya orang lain',
      'Pekerjaan selesai dengan baik',
      'Hidup menjadi teratur',
      'Hidup rukun dalam keberagaman'
    ],
    correctPairs: [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3]
    ],
    explanation: 'Sikap jujur membuat kita dipercaya orang lain, tanggung jawab membuat pekerjaan selesai dengan baik, disiplin membuat hidup menjadi teratur, dan toleransi menciptakan kerukunan dalam keberagaman.'
  }
];

// Additional metadata for learning tracking
export const topicDistribution = {
  [SUBJECTS.REGULAR.PPKN.topics.LIFE_SKILLS]: 15,            // 30%
  [SUBJECTS.REGULAR.PPKN.topics.PANCASILA]: 12,              // 24% 
  [SUBJECTS.REGULAR.PPKN.topics.NEIGHBORHOOD]: 11,           // 22%
  [SUBJECTS.REGULAR.PPKN.topics.CHARACTER_BUILDING]: 12      // 24%
};

// Question type distribution
export const questionTypeDistribution = {
  [QUESTION_TYPES.MC]: 35,     // 70%
  [QUESTION_TYPES.CMC1]: 10,   // 20%
  [QUESTION_TYPES.CMC2]: 5     // 10%
};

// Difficulty distribution
export const difficultyDistribution = {
  [DIFFICULTY_LEVELS.EASY]: 20,      // 40%
  [DIFFICULTY_LEVELS.MEDIUM]: 20,    // 40% 
  [DIFFICULTY_LEVELS.HARD]: 10       // 20%
};
