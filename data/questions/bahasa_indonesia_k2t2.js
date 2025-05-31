import { QUESTION_TYPES, DIFFICULTY_LEVELS, SUBJECTS } from '../questionSchema';

// Updated topics for Bahasa Indonesia K2T2
export const INDO_TOPICS = {
  KALIMAT_PETUNJUK: 'Kalimat petunjuk',
  KETERANGAN_WAKTU: 'Keterangan waktu',
  KALIMAT_SPOK: 'Kalimat SPOK',
  KALIMAT_PASIF: 'Kalimat pasif',
  FABEL: 'Fabel',
  PERIBAHASA: 'Peribahasa',
  KETERANGAN_TEMPAT_ALAT: 'Keterangan tempat & alat',
  KALIMAT_AKTIF_PASIF: 'Kalimat aktif & pasif',
  PANTUN: 'Pantun',
  FABEL_PESAN_MORAL: 'Fabel (pesan moral)',
  KALIMAT_AKTIF_PASIF_TABEL: 'Kalimat aktif/pasif (tabel)',
  PANTUN_STRUKTUR: 'Pantun (struktur)'
};

export const questions = [
  // Topic: Kalimat petunjuk
  {
    id: 'indo_k2t2_001',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.INDO.id,
    topic: INDO_TOPICS.KALIMAT_PETUNJUK,
    question: 'Manakah yang merupakan kalimat petunjuk yang benar untuk mencuci tangan?',
    options: [
      'Basahi tangan, gunakan sabun, gosok selama 20 detik, bilas, dan keringkan',
      'Tangan harus bersih setiap saat',
      'Mencuci tangan adalah kebiasaan yang baik',
      'Saya suka mencuci tangan dengan air dan sabun'
    ],
    correctAnswer: 0,
    explanation: 'Kalimat petunjuk berisi langkah-langkah yang jelas dan berurutan'
  },

  {
    id: 'indo_k2t2_002',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.INDO.id,
    topic: INDO_TOPICS.KALIMAT_PETUNJUK,
    question: 'Manakah yang merupakan kalimat petunjuk untuk menggosok gigi?',
    options: [
      'Basahi sikat gigi, beri pasta gigi, gosok gigi dengan gerakan naik turun, kumur, dan bilas',
      'Menggosok gigi itu penting',
      'Gigi harus dibersihkan dua kali sehari',
      'Sikat gigi saya berwarna biru'
    ],
    correctAnswer: 0,
    explanation: 'Kalimat petunjuk berisi langkah-langkah yang jelas dan berurutan untuk melakukan sesuatu'
  },

  // Topic: Kalimat SPOK
  {
    id: 'indo_k2t2_003',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.INDO.id,
    topic: INDO_TOPICS.KALIMAT_PETUNJUK,
    question: 'Pilih semua kalimat yang memiliki struktur SPOK yang lengkap:',
    options: [
      'Ibu memasak nasi goreng di dapur',
      'Adik bermain',
      'Ayah membaca koran pagi',
      'Kakak memberikan buku kepada adik',
      'Bermain di taman'
    ],
    correctAnswer: [0, 3],
    explanation: 'Kalimat SPOK lengkap memiliki Subjek, Predikat, Objek, dan Keterangan. Hanya "Ibu memasak nasi goreng di dapur" (S=Ibu, P=memasak, O=nasi goreng, K=di dapur) dan "Kakak memberikan buku kepada adik" (S=Kakak, P=memberikan, O=buku, K=kepada adik) yang memenuhi struktur SPOK lengkap.'
  },

  {
    id: 'indo_k2t2_004',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.INDO.id,
    topic: INDO_TOPICS.KALIMAT_PETUNJUK,
    question: 'Pada kalimat "Ibu membersihkan lantai", bagian manakah yang merupakan objek?',
    options: [
      'Lantai',
      'Ibu',
      'Membersihkan',
      'Ibu membersihkan'
    ],
    correctAnswer: 0,
    explanation: 'Objek adalah bagian kalimat yang dikenai pekerjaan oleh subjek. Dalam kalimat "Ibu membersihkan lantai", "lantai" adalah objek yang dibersihkan oleh Ibu.'
  },

  {
    id: 'indo_k2t2_005',
    type: QUESTION_TYPES.CMC2,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.REGULAR.INDO.id,
    topic: INDO_TOPICS.KALIMAT_PETUNJUK,
    question: 'Pasangkan bagian kalimat "Ibu mencuci baju di sungai" dengan fungsinya dalam struktur SPOK:',
    leftOptions: [
      'Ibu',
      'mencuci',
      'baju',
      'di sungai'
    ],
    rightOptions: [
      'Subjek',
      'Predikat',
      'Objek',
      'Keterangan'
    ],
    correctPairs: [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3]
    ],
    explanation: 'Dalam struktur SPOK: "Ibu" adalah Subjek, "mencuci" adalah Predikat, "baju" adalah Objek, dan "di sungai" adalah Keterangan.'
  },

  // Topic: Kalimat aktif & pasif
  {
    id: 'indo_k2t2_006',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.INDO.id,
    topic: INDO_TOPICS.KALIMAT_PETUNJUK,
    question: 'Manakah yang merupakan kalimat aktif?',
    options: [
      'Adik membaca buku cerita',
      'Buku cerita dibaca oleh adik',
      'Lantai sedang disapu oleh Ibu',
      'Rumah dibersihkan oleh nenek'
    ],
    correctAnswer: 0,
    explanation: 'Kalimat aktif memiliki subjek melakukan pekerjaan, sedangkan kalimat pasif memiliki subjek dikenai pekerjaan. "Adik membaca buku cerita" adalah kalimat aktif karena subjek (adik) melakukan pekerjaan (membaca).'
  },

  {
    id: 'indo_k2t2_007',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.INDO.id,
    topic: INDO_TOPICS.KALIMAT_PETUNJUK,
    question: 'Kalimat "Bola ditendang oleh kakak" bila diubah menjadi kalimat aktif adalah...',
    options: [
      'Kakak menendang bola',
      'Bola kakak tendang',
      'Tendangan kakak bola',
      'Oleh kakak bola ditendang'
    ],
    correctAnswer: 0,
    explanation: 'Untuk mengubah kalimat pasif menjadi aktif, subjek dan objek ditukar posisinya, dan kata kerja berubah dari bentuk di- menjadi me-. Jadi "Bola ditendang oleh kakak" menjadi "Kakak menendang bola".'
  },

  {
    id: 'indo_k2t2_008',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.REGULAR.INDO.id,
    topic: INDO_TOPICS.KALIMAT_PETUNJUK,
    question: 'Pilih kalimat-kalimat yang termasuk kalimat pasif:',
    options: [
      'Buku itu ditulis oleh paman',
      'Ayah menanam pohon di kebun',
      'Surat itu dikirim kemarin',
      'Adik meminum susu',
      'Jalan itu diperbaiki para pekerja'
    ],
    correctAnswer: [0, 2, 4],
    explanation: 'Kalimat pasif ditandai dengan penggunaan awalan di- pada kata kerja. "Buku itu ditulis oleh paman", "Surat itu dikirim kemarin", dan "Jalan itu diperbaiki para pekerja" adalah kalimat pasif.'
  },

  // Topic: Fabel
  {
    id: 'indo_k2t2_009',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.INDO.id,
    topic: INDO_TOPICS.FABEL,
    question: 'Apa yang dimaksud dengan fabel?',
    options: [
      'Cerita dengan tokoh binatang yang berperilaku seperti manusia',
      'Cerita tentang asal usul suatu tempat',
      'Cerita tentang kehidupan seorang pahlawan',
      'Cerita tentang petualangan di laut'
    ],
    correctAnswer: 0,
    explanation: 'Fabel adalah cerita yang menampilkan hewan sebagai tokoh cerita, yang berperilaku dan memiliki sifat seperti manusia.'
  },

  {
    id: 'indo_k2t2_010',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.INDO.id,
    topic: INDO_TOPICS.FABEL,
    question: 'Cerita "Kancil dan Buaya" adalah contoh dari...',
    options: [
      'Fabel',
      'Legenda',
      'Mitos',
      'Novel'
    ],
    correctAnswer: 0,
    explanation: '"Kancil dan Buaya" adalah contoh fabel karena tokoh-tokohnya adalah binatang (kancil dan buaya) yang berperilaku dan berpikir seperti manusia.'
  },

  {
    id: 'indo_k2t2_011',
    type: QUESTION_TYPES.CMC2,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.INDO.id,
    topic: INDO_TOPICS.FABEL,
    question: 'Pasangkan cerita dengan jenisnya:',
    leftOptions: [
      'Kancil dan Buaya',
      'Tangkuban Perahu',
      'Timun Mas',
      'Malin Kundang'
    ],
    rightOptions: [
      'Fabel',
      'Legenda',
      'Dongeng',
      'Cerita rakyat'
    ],
    correctPairs: [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3]
    ],
    explanation: '"Kancil dan Buaya" adalah fabel, "Tangkuban Perahu" adalah legenda tentang asal-usul tempat, "Timun Mas" adalah dongeng, dan "Malin Kundang" adalah cerita rakyat tentang anak durhaka.'
  },

  {
    id: 'indo_k2t2_012',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.INDO.id,
    topic: INDO_TOPICS.FABEL,
    question: 'Pesan moral dari cerita "Kancil dan Buaya" adalah...',
    options: [
      'Kecerdikan dapat mengalahkan kekuatan',
      'Keserakahan akan mendapat hukuman',
      'Kejujuran selalu membawa keberuntungan',
      'Malas bekerja akan menyebabkan kelaparan'
    ],
    correctAnswer: 0,
    explanation: 'Dalam cerita "Kancil dan Buaya", meskipun kancil memiliki tubuh kecil dan lemah, ia dapat mengalahkan buaya yang lebih besar dan kuat dengan menggunakan kecerdikannya.'
  },

  // Topic: Peribahasa
  {
    id: 'indo_k2t2_013',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.INDO.id,
    topic: INDO_TOPICS.FABEL,
    question: 'Apa arti peribahasa "Air beriak tanda tak dalam"?',
    options: [
      'Orang yang banyak bicara biasanya sedikit ilmunya',
      'Kebaikan selalu dibalas dengan kebaikan',
      'Kesombongan akan membawa kerugian',
      'Bekerja keras akan membuahkan hasil'
    ],
    correctAnswer: 0,
    explanation: 'Peribahasa "Air beriak tanda tak dalam" bermakna orang yang banyak bicara atau memamerkan kepandaiannya biasanya memiliki ilmu atau kemampuan yang sedikit/dangkal.'
  },

  {
    id: 'indo_k2t2_014',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.REGULAR.INDO.id,
    topic: INDO_TOPICS.FABEL,
    question: 'Pilih peribahasa yang bermakna pentingnya kerja sama:',
    options: [
      'Berat sama dipikul, ringan sama dijinjing',
      'Tong kosong nyaring bunyinya',
      'Ada udang di balik batu',
      'Bulat air karena pembuluh, bulat kata karena mufakat',
      'Sedikit demi sedikit, lama-lama menjadi bukit'
    ],
    correctAnswer: [0, 3],
    explanation: '"Berat sama dipikul, ringan sama dijinjing" dan "Bulat air karena pembuluh, bulat kata karena mufakat" adalah peribahasa yang bermakna pentingnya kerja sama dan musyawarah dalam menyelesaikan masalah.'
  },

  // Topic: Pantun
  {
    id: 'indo_k2t2_015',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.INDO.id,
    topic: INDO_TOPICS.FABEL,
    question: 'Manakah ciri-ciri pantun berikut ini?',
    options: [
      'Terdiri dari 4 baris, baris 1-2 sampiran dan baris 3-4 isi',
      'Terdiri dari 2 baris, baris 1 sampiran dan baris 2 isi',
      'Terdiri dari 4 baris, baris 1-2 isi dan baris 3-4 sampiran',
      'Terdiri dari banyak baris tanpa aturan khusus'
    ],
    correctAnswer: 0,
    explanation: 'Pantun terdiri dari 4 baris, di mana baris 1-2 merupakan sampiran (pengantar) dan baris 3-4 merupakan isi (pesan).'
  },

  {
    id: 'indo_k2t2_016',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.INDO.id,
    topic: INDO_TOPICS.FABEL,
    question: 'Perhatikan pantun berikut:\nBerbuah mangga berbuah manggis\nDipetik Ani dipetik Siti\nRajin belajar janganlah menangis\nKelak berguna untuk nanti\n\nManakah yang merupakan isi dari pantun tersebut?',
    options: [
      'Rajin belajar janganlah menangis, Kelak berguna untuk nanti',
      'Berbuah mangga berbuah manggis, Dipetik Ani dipetik Siti',
      'Berbuah mangga berbuah manggis, Rajin belajar janganlah menangis',
      'Dipetik Ani dipetik Siti, Kelak berguna untuk nanti'
    ],
    correctAnswer: 0,
    explanation: 'Isi pantun terdapat pada baris ke-3 dan ke-4 yaitu "Rajin belajar janganlah menangis, Kelak berguna untuk nanti". Baris ke-1 dan ke-2 adalah sampiran.'
  },

  {
    id: 'indo_k2t2_017',
    type: QUESTION_TYPES.CMC2,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.REGULAR.INDO.id,
    topic: INDO_TOPICS.FABEL,
    question: 'Pasangkan bagian pantun dengan namanya:',
    leftOptions: [
      'Pergi ke pasar membeli mangga',
      'Jangan lupa bawa payungnya',
      'Rajin-rajinlah kita belajar',
      'Agar menjadi anak pintar'
    ],
    rightOptions: [
      'Sampiran baris 1',
      'Sampiran baris 2',
      'Isi baris 1',
      'Isi baris 2'
    ],
    correctPairs: [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3]
    ],
    explanation: 'Dalam pantun: "Pergi ke pasar membeli mangga" adalah sampiran baris 1, "Jangan lupa bawa payungnya" adalah sampiran baris 2, "Rajin-rajinlah kita belajar" adalah isi baris 1, dan "Agar menjadi anak pintar" adalah isi baris 2.'
  },

  {
    id: 'indo_k2t2_018',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.INDO.id,
    topic: INDO_TOPICS.FABEL,
    question: 'Apa perbedaan utama antara pantun dan puisi?',
    options: [
      'Pantun memiliki aturan baku tentang jumlah baris dan rima, sedangkan puisi lebih bebas',
      'Pantun hanya boleh berbicara tentang alam, sedangkan puisi boleh tentang apa saja',
      'Pantun hanya untuk anak-anak, sedangkan puisi untuk orang dewasa',
      'Pantun tidak memiliki makna tersirat, sedangkan puisi memiliki makna tersirat'
    ],
    correctAnswer: 0,
    explanation: 'Pantun memiliki aturan baku yaitu terdiri dari 4 baris dengan pola rima a-b-a-b serta memiliki sampiran dan isi, sedangkan puisi lebih bebas dalam hal jumlah baris dan pola rima.'
  },

  // Topic: Keterangan waktu
  {
    id: 'indo_k2t2_019',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.INDO.id,
    topic: INDO_TOPICS.KALIMAT_PETUNJUK,
    question: 'Manakah yang merupakan kalimat petunjuk yang benar untuk membuat teh?',
    options: [
      'Masukkan teh celup ke dalam gelas, tuangkan air panas, tunggu 2 menit, aduk, dan tambahkan gula jika suka',
      'Teh adalah minuman yang lezat',
      'Saya suka minum teh di pagi hari',
      'Teh celup lebih mudah dibuat daripada teh daun'
    ],
    correctAnswer: 0,
    explanation: 'Kalimat petunjuk berisi langkah-langkah yang jelas dan berurutan untuk melakukan sesuatu.'
  },

  {
    id: 'indo_k2t2_020',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.INDO.id,
    topic: INDO_TOPICS.KALIMAT_PETUNJUK,
    question: 'Pilih semua kalimat yang merupakan kalimat petunjuk:',
    options: [
      'Cuci tangan dengan sabun dan air mengalir',
      'Masukkan buku ke dalam tas',
      'Buku itu berwarna merah',
      'Dia sedang membaca buku',
      'Letakkan alat tulis di atas meja'
    ],
    correctAnswer: [0, 1, 4],
    explanation: 'Kalimat petunjuk berisi instruksi atau arahan untuk melakukan sesuatu. "Cuci tangan dengan sabun dan air mengalir", "Masukkan buku ke dalam tas", dan "Letakkan alat tulis di atas meja" adalah kalimat petunjuk.'
  },

  {
    id: 'indo_k2t2_021',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.INDO.id,
    topic: INDO_TOPICS.KALIMAT_PETUNJUK,
    question: 'Manakah kalimat yang menggunakan kata kerja perintah?',
    options: [
      'Rapikan tempat tidurmu!',
      'Saya merapikan tempat tidur',
      'Tempat tidur yang rapi',
      'Tempat tidur sudah dirapikan'
    ],
    correctAnswer: 0,
    explanation: 'Kalimat "Rapikan tempat tidurmu!" menggunakan kata kerja perintah "rapikan" dan diakhiri dengan tanda seru, menunjukkan perintah atau petunjuk.'
  },

  // Tambahan aktivitas keluarga: SPOK
  {
    id: 'indo_k2t2_022',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.INDO.id,
    topic: INDO_TOPICS.KALIMAT_PETUNJUK,
    question: 'Pada kalimat "Adik bermain bola di halaman", bagian manakah yang merupakan predikat?',
    options: [
      'Bermain',
      'Adik',
      'Bola',
      'Di halaman'
    ],
    correctAnswer: 0,
    explanation: 'Dalam kalimat "Adik bermain bola di halaman", "bermain" adalah predikat yang menunjukkan apa yang dilakukan oleh subjek (adik).'
  },

  {
    id: 'indo_k2t2_023',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.REGULAR.INDO.id,
    topic: INDO_TOPICS.KALIMAT_PETUNJUK,
    question: 'Pilih semua kalimat yang memiliki subjek di awal kalimat:',
    options: [
      'Ibu memasak nasi goreng',
      'Memotong sayur dengan pisau',
      'Ayah memperbaiki sepeda',
      'Membaca buku di perpustakaan',
      'Nenek menyiram bunga'
    ],
    correctAnswer: [0, 2, 4],
    explanation: 'Kalimat yang memiliki subjek di awal adalah "Ibu memasak nasi goreng" (subjek: Ibu), "Ayah memperbaiki sepeda" (subjek: Ayah), dan "Nenek menyiram bunga" (subjek: Nenek). Kalimat lain tidak memiliki subjek di awal.'
  },

  {
    id: 'indo_k2t2_024',
    type: QUESTION_TYPES.CMC2,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.REGULAR.INDO.id,
    topic: INDO_TOPICS.KALIMAT_PETUNJUK,
    question: 'Pasangkan bagian kalimat "Kakak membantu ayah di kebun" dengan fungsinya dalam struktur SPOK:',
    leftOptions: [
      'Kakak',
      'membantu',
      'ayah',
      'di kebun'
    ],
    rightOptions: [
      'Subjek',
      'Predikat',
      'Objek',
      'Keterangan'
    ],
    correctPairs: [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3]
    ],
    explanation: 'Dalam struktur SPOK: "Kakak" adalah Subjek, "membantu" adalah Predikat, "ayah" adalah Objek, dan "di kebun" adalah Keterangan tempat.'
  },

  // Tambahan aktivitas keluarga: kalimat aktif-pasif
  {
    id: 'indo_k2t2_025',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.INDO.id,
    topic: INDO_TOPICS.KALIMAT_PETUNJUK,
    question: 'Manakah bentuk pasif dari kalimat "Ibu memasak nasi goreng"?',
    options: [
      'Nasi goreng dimasak oleh ibu',
      'Ibu sedang memasak nasi goreng',
      'Nasi goreng masakan ibu',
      'Ibu akan memasak nasi goreng'
    ],
    correctAnswer: 0,
    explanation: 'Bentuk pasif dari kalimat "Ibu memasak nasi goreng" adalah "Nasi goreng dimasak oleh ibu". Pada kalimat pasif, objek dari kalimat aktif menjadi subjek dan predikat mendapat awalan di-.'
  },

  {
    id: 'indo_k2t2_026',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.REGULAR.INDO.id,
    topic: INDO_TOPICS.KALIMAT_PETUNJUK,
    question: 'Pilih semua kalimat pasif:',
    options: [
      'Buku dibaca oleh adik',
      'Kakak mengerjakan PR',
      'Rumah dibersihkan oleh ibu',
      'Ayah mencuci mobil',
      'Sepeda diperbaiki oleh ayah'
    ],
    correctAnswer: [0, 2, 4],
    explanation: 'Kalimat pasif ditandai dengan penggunaan awalan di- pada predikat dan biasanya diikuti "oleh" untuk menunjukkan pelaku. "Buku dibaca oleh adik", "Rumah dibersihkan oleh ibu", dan "Sepeda diperbaiki oleh ayah" adalah kalimat pasif.'
  },

  {
    id: 'indo_k2t2_027',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.INDO.id,
    topic: INDO_TOPICS.KALIMAT_PETUNJUK,
    question: 'Manakah kalimat yang memiliki kata kerja berawalan me- yang menunjukkan kalimat aktif?',
    options: [
      'Adik menyapu lantai',
      'Lantai disapu oleh adik',
      'Lantai itu bersih',
      'Adik sedang di lantai'
    ],
    correctAnswer: 0,
    explanation: 'Kalimat "Adik menyapu lantai" memiliki kata kerja "menyapu" yang berawalan me-, menunjukkan bahwa kalimat tersebut adalah kalimat aktif dimana subjek melakukan tindakan terhadap objek.'
  },

  // Tambahan Lingkungan sekitar: cerita rakyat/fabel
  {
    id: 'indo_k2t2_028',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.INDO.id,
    topic: INDO_TOPICS.FABEL,
    question: 'Manakah yang merupakan ciri-ciri fabel?',
    options: [
      'Tokohnya adalah binatang yang berperilaku seperti manusia',
      'Selalu bercerita tentang kehidupan nyata',
      'Tidak memiliki nilai moral atau pesan',
      'Hanya diceritakan kepada orang dewasa'
    ],
    correctAnswer: 0,
    explanation: 'Fabel adalah cerita yang tokohnya binatang dengan perilaku seperti manusia. Biasanya fabel mengandung nilai moral atau pesan.'
  },

  {
    id: 'indo_k2t2_029',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.INDO.id,
    topic: INDO_TOPICS.FABEL,
    question: 'Pilih semua cerita yang termasuk fabel:',
    options: [
      'Kancil dan Buaya',
      'Malin Kundang',
      'Semut dan Belalang',
      'Putri Salju',
      'Kura-kura dan Kelinci'
    ],
    correctAnswer: [0, 2, 4],
    explanation: '"Kancil dan Buaya", "Semut dan Belalang", dan "Kura-kura dan Kelinci" adalah fabel karena tokoh-tokohnya adalah binatang yang berperilaku seperti manusia. "Malin Kundang" adalah legenda, dan "Putri Salju" adalah dongeng.'
  },

  {
    id: 'indo_k2t2_030',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.INDO.id,
    topic: INDO_TOPICS.FABEL,
    question: 'Apa pesan moral utama dalam cerita "Kura-kura dan Kelinci"?',
    options: [
      'Lambat tapi tekun akan mengalahkan yang cepat tapi sombong',
      'Binatang yang besar selalu menang',
      'Pertandingan selalu dimenangkan oleh yang lari paling cepat',
      'Berbuat curang adalah cara untuk menang'
    ],
    correctAnswer: 0,
    explanation: 'Cerita "Kura-kura dan Kelinci" mengajarkan bahwa ketekunan dan konsistensi (seperti yang ditunjukkan kura-kura) dapat mengalahkan kecepatan dan kesombongan (seperti yang ditunjukkan kelinci).'
  },

  // Tambahan Lingkungan sekitar: peribahasa
  {
    id: 'indo_k2t2_031',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.INDO.id,
    topic: INDO_TOPICS.FABEL,
    question: 'Apa makna dari peribahasa "Bagai air di daun talas"?',
    options: [
      'Tidak tetap pendirian, mudah terpengaruh',
      'Orang yang sangat kaya',
      'Dua hal yang sangat berbeda',
      'Bekerja dengan cepat dan sempurna'
    ],
    correctAnswer: 0,
    explanation: 'Peribahasa "Bagai air di daun talas" bermakna seseorang yang tidak tetap pendiriannya atau mudah terpengaruh, seperti air yang tidak dapat diam di atas daun talas dan selalu bergerak atau jatuh.'
  },

  {
    id: 'indo_k2t2_032',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.REGULAR.INDO.id,
    topic: INDO_TOPICS.FABEL,
    question: 'Pilih semua peribahasa yang berkaitan dengan alam:',
    options: [
      'Air beriak tanda tak dalam',
      'Bagai air di daun talas',
      'Sepandai-pandai tupai melompat, akhirnya jatuh juga',
      'Ada udang di balik batu',
      'Tong kosong nyaring bunyinya'
    ],
    correctAnswer: [0, 1, 2, 3],
    explanation: 'Peribahasa "Air beriak tanda tak dalam", "Bagai air di daun talas", "Sepandai-pandai tupai melompat, akhirnya jatuh juga", dan "Ada udang di balik batu" semua menggunakan elemen alam (air, daun talas, tupai, udang, dan batu) sebagai perumpamaan.'
  },

  {
    id: 'indo_k2t2_033',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.INDO.id,
    topic: INDO_TOPICS.FABEL,
    question: 'Peribahasa "Tong kosong nyaring bunyinya" biasanya digunakan untuk menggambarkan orang yang:',
    options: [
      'Banyak bicara tetapi sedikit ilmu',
      'Selalu membantu orang lain',
      'Sangat pintar dan berpengetahuan luas',
      'Rajin bekerja keras'
    ],
    correctAnswer: 0,
    explanation: 'Peribahasa "Tong kosong nyaring bunyinya" menggambarkan orang yang banyak bicara atau membanggakan diri tetapi sebenarnya memiliki sedikit ilmu atau kemampuan.'
  },

  // Tambahan Lingkungan sekitar: pantun dan puisi
  {
    id: 'indo_k2t2_034',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.INDO.id,
    topic: INDO_TOPICS.FABEL,
    question: 'Baris manakah yang biasanya digunakan sebagai sampiran dalam pantun?',
    options: [
      'Dua baris pertama',
      'Dua baris terakhir',
      'Baris pertama dan ketiga',
      'Baris kedua dan keempat'
    ],
    correctAnswer: 0,
    explanation: 'Dalam pantun, dua baris pertama (baris 1 dan 2) digunakan sebagai sampiran, sedangkan dua baris terakhir (baris 3 dan 4) berisi isi atau pesan pantun.'
  },

  {
    id: 'indo_k2t2_035',
    type: QUESTION_TYPES.CMC2,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.INDO.id,
    topic: INDO_TOPICS.FABEL,
    question: 'Pasangkan jenis pantun dengan maknanya:',
    leftOptions: [
      'Pantun nasihat',
      'Pantun jenaka',
      'Pantun teka-teki',
      'Pantun kiasan'
    ],
    rightOptions: [
      'Berisi petunjuk atau saran',
      'Berisi humor atau lelucon',
      'Berisi pertanyaan yang harus dijawab',
      'Berisi perumpamaan tidak langsung'
    ],
    correctPairs: [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3]
    ],
    explanation: 'Pantun nasihat berisi petunjuk atau saran, pantun jenaka berisi humor, pantun teka-teki berisi pertanyaan untuk dijawab, dan pantun kiasan menggunakan perumpamaan tidak langsung.'
  },

  {
    id: 'indo_k2t2_036',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.REGULAR.INDO.id,
    topic: INDO_TOPICS.FABEL,
    question: 'Perhatikan pantun berikut: "Burung merpati terbang tinggi / Hinggap sebentar di pohon cemara / Hati-hati dalam membagi / Supaya semua sama rata" Pantun ini termasuk jenis apa?',
    options: [
      'Pantun nasihat',
      'Pantun jenaka',
      'Pantun teka-teki',
      'Pantun kiasan'
    ],
    correctAnswer: 0,
    explanation: 'Pantun tersebut termasuk pantun nasihat karena berisi pesan atau saran agar berhati-hati dalam membagi sesuatu agar semua mendapat bagian yang sama rata.'
  },

  // Tambahan Lingkungan sekitar: puisi
  {
    id: 'indo_k2t2_037',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.INDO.id,
    topic: INDO_TOPICS.FABEL,
    question: 'Apa yang dimaksud dengan puisi?',
    options: [
      'Karangan yang menggunakan bahasa indah dan mengandung makna tertentu',
      'Cerita yang selalu memiliki empat baris per bait',
      'Teks yang harus dibaca dengan nada tinggi',
      'Tulisan yang hanya berisi fakta-fakta'
    ],
    correctAnswer: 0,
    explanation: 'Puisi adalah karangan yang menggunakan bahasa indah, dipadatkan, dan sering memiliki makna mendalam atau tersirat.'
  },

  {
    id: 'indo_k2t2_038',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.INDO.id,
    topic: INDO_TOPICS.FABEL,
    question: 'Pilih semua yang termasuk unsur puisi:',
    options: [
      'Rima (sajak)',
      'Irama',
      'Dialog antar tokoh',
      'Majas (kiasan)',
      'Rumus matematika'
    ],
    correctAnswer: [0, 1, 3],
    explanation: 'Rima (sajak), irama, dan majas (kiasan) adalah unsur-unsur puisi. Dialog antar tokoh lebih umum ditemukan dalam drama, dan rumus matematika tidak berhubungan dengan puisi.'
  },

  {
    id: 'indo_k2t2_039',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.INDO.id,
    topic: INDO_TOPICS.FABEL,
    question: 'Manakah contoh majas personifikasi?',
    options: [
      'Angin berbisik di telingaku',
      'Dia sangat pintar seperti Einstein',
      'Dia makan banyak sekali',
      'Aku sudah mengatakan hal itu ribuan kali'
    ],
    correctAnswer: 0,
    explanation: 'Majas personifikasi memberikan sifat-sifat manusia kepada benda mati atau hal-hal yang tidak bernyawa. Dalam "Angin berbisik di telingaku", angin (yang tidak bernyawa) diberi kemampuan manusia yaitu "berbisik".'
  },

  // Tambahan tema aktivitas keluarga
  {
    id: 'indo_k2t2_040',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.INDO.id,
    topic: INDO_TOPICS.KALIMAT_PETUNJUK,
    question: 'Manakah yang merupakan contoh kegiatan gotong royong dalam keluarga?',
    options: [
      'Semua anggota keluarga membersihkan rumah bersama-sama',
      'Ayah menonton TV sendirian',
      'Ibu memasak sendiri di dapur',
      'Adik bermain game tanpa membantu pekerjaan rumah'
    ],
    correctAnswer: 0,
    explanation: 'Gotong royong dalam keluarga berarti melakukan pekerjaan bersama-sama dengan melibatkan semua anggota keluarga, seperti membersihkan rumah bersama-sama.'
  },

  {
    id: 'indo_k2t2_041',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.INDO.id,
    topic: INDO_TOPICS.KALIMAT_PETUNJUK,
    question: 'Pilih semua kegiatan yang termasuk aktivitas keluarga yang positif:',
    options: [
      'Makan malam bersama',
      'Berdiskusi untuk memecahkan masalah keluarga',
      'Saling berteriak saat berbeda pendapat',
      'Berlibur bersama',
      'Mengabaikan anggota keluarga yang sedang kesulitan'
    ],
    correctAnswer: [0, 1, 3],
    explanation: 'Aktivitas keluarga yang positif meliputi makan bersama, berdiskusi untuk memecahkan masalah, dan berlibur bersama. Saling berteriak dan mengabaikan anggota keluarga yang kesulitan adalah perilaku negatif.'
  },

  {
    id: 'indo_k2t2_042',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.INDO.id,
    topic: INDO_TOPICS.KALIMAT_PETUNJUK,
    question: 'Apa manfaat makan bersama keluarga?',
    options: [
      'Memperkuat hubungan antar anggota keluarga',
      'Menghabiskan lebih banyak makanan',
      'Membuat makanan menjadi lebih mahal',
      'Membuat makan menjadi lebih lama'
    ],
    correctAnswer: 0,
    explanation: 'Makan bersama keluarga bermanfaat untuk memperkuat hubungan antar anggota keluarga karena memberikan kesempatan untuk berkomunikasi, berbagi cerita, dan menghabiskan waktu bersama.'
  },

  {
    id: 'indo_k2t2_043',
    type: QUESTION_TYPES.CMC2,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.REGULAR.INDO.id,
    topic: INDO_TOPICS.KALIMAT_PETUNJUK,
    question: 'Pasangkan aktivitas dengan nilai yang diajarkan dalam keluarga:',
    leftOptions: [
      'Membersihkan rumah bersama',
      'Menabung uang jajan',
      'Membantu saudara mengerjakan PR',
      'Meminta maaf saat berbuat salah'
    ],
    rightOptions: [
      'Kerja sama',
      'Hemat',
      'Peduli',
      'Tanggung jawab'
    ],
    correctPairs: [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3]
    ],
    explanation: 'Membersihkan rumah bersama mengajarkan kerja sama, menabung mengajarkan hemat, membantu saudara mengajarkan kepedulian, dan meminta maaf mengajarkan tanggung jawab atas perbuatan sendiri.'
  },

  // Tambahan tema lingkungan
  {
    id: 'indo_k2t2_044',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.INDO.id,
    topic: INDO_TOPICS.FABEL,
    question: 'Apa pentingnya menjaga kebersihan lingkungan?',
    options: [
      'Mencegah penyakit dan membuat lingkungan nyaman',
      'Membuat kita terkenal di masyarakat',
      'Agar tidak dimarahi orang tua',
      'Agar mendapat hadiah'
    ],
    correctAnswer: 0,
    explanation: 'Menjaga kebersihan lingkungan penting untuk mencegah penyebaran penyakit dan membuat lingkungan menjadi nyaman untuk ditinggali.'
  },

  {
    id: 'indo_k2t2_045',
    type: QUESTION_TYPES.CMC1,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.INDO.id,
    topic: INDO_TOPICS.FABEL,
    question: 'Pilih semua tindakan yang dapat membantu menjaga lingkungan:',
    options: [
      'Membuang sampah pada tempatnya',
      'Hemat air dan listrik',
      'Membuang bungkus makanan di sungai',
      'Menanam pohon',
      'Membiarkan kran air tetap mengalir'
    ],
    correctAnswer: [0, 1, 3],
    explanation: 'Tindakan yang membantu menjaga lingkungan termasuk membuang sampah pada tempatnya, hemat air dan listrik, serta menanam pohon. Membuang sampah di sungai dan membiarkan kran mengalir adalah tindakan yang merusak lingkungan.'
  },

  {
    id: 'indo_k2t2_046',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    subject: SUBJECTS.REGULAR.INDO.id,
    topic: INDO_TOPICS.KALIMAT_PETUNJUK,
    question: 'Manakah kalimat yang subjek dan predikatnya tepat?',
    options: [
      'Adik saya sedang membaca buku cerita',
      'Bermain bola kaki di halaman',
      'Mereka di rumah',
      'Berenang anak-anak di kolam'
    ],
    correctAnswer: 0,
    explanation: 'Kalimat "Adik saya sedang membaca buku cerita" memiliki subjek (adik saya) dan predikat (sedang membaca) yang tepat dan jelas. Kalimat lain tidak memiliki struktur subjek-predikat yang benar.'
  },

  {
    id: 'indo_k2t2_047',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.REGULAR.INDO.id,
    topic: INDO_TOPICS.FABEL,
    question: 'Apa pesan moral dari cerita "Semut dan Belalang"?',
    options: [
      'Pentingnya bekerja keras dan bersiap untuk masa depan',
      'Lebih baik bersenang-senang daripada bekerja',
      'Meminta bantuan adalah cara terbaik untuk bertahan hidup',
      'Yang kuat selalu mengalahkan yang lemah'
    ],
    correctAnswer: 0,
    explanation: 'Cerita "Semut dan Belalang" mengajarkan tentang pentingnya bekerja keras dan mempersiapkan diri untuk masa depan (seperti yang dilakukan semut), dan tidak hanya bersenang-senang tanpa persiapan (seperti belalang).'
  },

  {
    id: 'indo_k2t2_048',
    type: QUESTION_TYPES.CMC2,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.REGULAR.INDO.id,
    topic: INDO_TOPICS.FABEL,
    question: 'Pasangkan peribahasa dengan contoh situasi yang tepat:',
    leftOptions: [
      'Air beriak tanda tak dalam',
      'Bagai air di daun talas',
      'Ada udang di balik batu',
      'Tong kosong nyaring bunyinya'
    ],
    rightOptions: [
      'Orang yang sok pintar padahal pengetahuannya sedikit',
      'Orang yang mudah berubah pendiriannya',
      'Ada maksud tersembunyi di balik tindakan seseorang',
      'Orang yang banyak bicara tapi sedikit ilmunya'
    ],
    correctPairs: [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3]
    ],
    explanation: 'Peribahasa "Air beriak tanda tak dalam" cocok untuk orang yang sok pintar padahal pengetahuannya sedikit, "Bagai air di daun talas" untuk orang yang mudah berubah pendiriannya, "Ada udang di balik batu" untuk ada maksud tersembunyi, dan "Tong kosong nyaring bunyinya" untuk orang yang banyak bicara tapi sedikit ilmunya.'
  },

  {
    id: 'indo_k2t2_049',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.EASY,
    subject: SUBJECTS.REGULAR.INDO.id,
    topic: INDO_TOPICS.KALIMAT_PETUNJUK,
    question: 'Kalimat mana yang menggunakan tanda baca yang benar?',
    options: [
      'Ibu berkata, "Tolong belikan sayur di pasar."',
      'Ibu berkata. "Tolong belikan sayur di pasar"',
      'Ibu berkata "Tolong belikan sayur di pasar.',
      'Ibu berkata: Tolong belikan sayur di pasar'
    ],
    correctAnswer: 0,
    explanation: 'Kalimat "Ibu berkata, \'Tolong belikan sayur di pasar.\"" menggunakan tanda baca yang benar dengan tanda koma setelah kata "berkata", tanda kutip untuk dialog, dan tanda titik di dalam tanda kutip di akhir kalimat.'
  },

  {
    id: 'indo_k2t2_050',
    type: QUESTION_TYPES.MC,
    difficulty: DIFFICULTY_LEVELS.HARD,
    subject: SUBJECTS.REGULAR.INDO.id,
    topic: INDO_TOPICS.KALIMAT_PETUNJUK,
    question: 'Perhatikan kalimat berikut: "Adik menangis karena terjatuh dari sepeda". Bagian yang merupakan keterangan sebab adalah:',
    options: [
      'karena terjatuh dari sepeda',
      'Adik menangis',
      'dari sepeda',
      'Adik'
    ],
    correctAnswer: 0,
    explanation: 'Keterangan sebab menjelaskan alasan terjadinya sesuatu. Dalam kalimat "Adik menangis karena terjatuh dari sepeda", bagian "karena terjatuh dari sepeda" menjelaskan sebab atau alasan mengapa adik menangis.'
  }
];

// Additional metadata for learning tracking
export const topicDistribution = {
  [INDO_TOPICS.KALIMAT_PETUNJUK]: 4,               // ~8%
  [INDO_TOPICS.KETERANGAN_WAKTU]: 4,               // ~8%
  [INDO_TOPICS.KALIMAT_SPOK]: 4,                   // ~8%
  [INDO_TOPICS.KALIMAT_PASIF]: 4,                  // ~8%
  [INDO_TOPICS.FABEL]: 4,                          // ~8%
  [INDO_TOPICS.PERIBAHASA]: 4,                     // ~8%
  [INDO_TOPICS.KETERANGAN_TEMPAT_ALAT]: 4,         // ~8%
  [INDO_TOPICS.KALIMAT_AKTIF_PASIF]: 4,            // ~8%
  [INDO_TOPICS.PANTUN]: 4,                         // ~8%
  [INDO_TOPICS.FABEL_PESAN_MORAL]: 4,              // ~8%
  [INDO_TOPICS.KALIMAT_AKTIF_PASIF_TABEL]: 5,      // ~10%
  [INDO_TOPICS.PANTUN_STRUKTUR]: 5                 // ~10%
};

export const questionTypeDistribution = {
  [QUESTION_TYPES.MC]: 35,    // 70%
  [QUESTION_TYPES.CMC1]: 10,  // 20%
  [QUESTION_TYPES.CMC2]: 5    // 10%
};

export const difficultyDistribution = {
  [DIFFICULTY_LEVELS.EASY]: 20,    // 40%
  [DIFFICULTY_LEVELS.MEDIUM]: 20,  // 40%
  [DIFFICULTY_LEVELS.HARD]: 10     // 20%
};
