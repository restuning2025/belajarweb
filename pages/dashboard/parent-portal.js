import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function ParentPortal() {
  const [activeTab, setActiveTab] = useState('progress');
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  // Mock API call to get student data
  useEffect(() => {
    // Simulate API delay
    const timer = setTimeout(() => {
      const mockStudents = [
        {
          id: 1,
          name: 'Dini',
          avatar: '/images/avatars/girl-1.svg',
          grade: '2',
          class: 'Bilingual',
          lastActive: '2025-05-01T10:15:00',
          progress: {
            overall: 68,
            subjects: [
              { id: 'math', name: 'Matematika', progress: 75, totalQuestions: 40, answered: 30, correct: 22 },
              { id: 'indo', name: 'Bahasa Indonesia', progress: 60, totalQuestions: 35, answered: 20, correct: 15 },
              { id: 'english', name: 'English', progress: 82, totalQuestions: 30, answered: 25, correct: 22 },
              { id: 'science', name: 'Sains', progress: 45, totalQuestions: 25, answered: 15, correct: 8 }
            ],
            recentActivity: [
              { date: '2025-05-01T09:30:00', activity: 'Menyelesaikan Quiz Matematika', score: '8/10', subject: 'Matematika' },
              { date: '2025-04-30T14:20:00', activity: 'Menyelesaikan Quiz Bahasa Inggris', score: '7/10', subject: 'English' },
              { date: '2025-04-29T11:15:00', activity: 'Menggunakan Timer Belajar', duration: '25 menit', subject: 'General' }
            ]
          },
          strengths: ['Matematika', 'Bahasa Inggris'],
          areasForImprovement: ['Sains', 'Kosakata Bahasa Indonesia'],
          achievements: [
            { id: 'math-star', name: 'Bintang Matematika', description: 'Menjawab 10 soal matematika dengan benar secara berturut-turut', date: '2025-04-28', icon: '🌟' },
            { id: 'streak-5', name: '5 Hari Berturut-turut', description: 'Login dan belajar 5 hari berturut-turut', date: '2025-04-25', icon: '🔥' }
          ],
          settings: {
            notificationsEnabled: true,
            reminderTime: '16:00',
            studyDurationGoal: 30, // minutes per day
            weeklyGoal: 5 // days per week
          }
        },
        {
          id: 2,
          name: 'Budi',
          avatar: '/images/avatars/boy-1.svg',
          grade: '2',
          class: 'Regular',
          lastActive: '2025-04-30T15:45:00',
          progress: {
            overall: 55,
            subjects: [
              { id: 'math', name: 'Matematika', progress: 65, totalQuestions: 40, answered: 25, correct: 16 },
              { id: 'indo', name: 'Bahasa Indonesia', progress: 70, totalQuestions: 35, answered: 30, correct: 21 },
              { id: 'english', name: 'English', progress: 40, totalQuestions: 30, answered: 15, correct: 6 },
              { id: 'science', name: 'Sains', progress: 50, totalQuestions: 25, answered: 20, correct: 10 }
            ],
            recentActivity: [
              { date: '2025-04-30T15:40:00', activity: 'Menyelesaikan Quiz Bahasa Indonesia', score: '8/10', subject: 'Bahasa Indonesia' },
              { date: '2025-04-29T10:15:00', activity: 'Mencoba Quiz Sains', score: '6/10', subject: 'Sains' },
              { date: '2025-04-28T14:30:00', activity: 'Menggunakan Timer Belajar', duration: '20 menit', subject: 'General' }
            ]
          },
          strengths: ['Bahasa Indonesia', 'Membaca'],
          areasForImprovement: ['Bahasa Inggris', 'Kosakata Bahasa Inggris'],
          achievements: [
            { id: 'reading-pro', name: 'Kutu Buku', description: 'Menyelesaikan 10 latihan membaca', date: '2025-04-27', icon: '📚' }
          ],
          settings: {
            notificationsEnabled: true,
            reminderTime: '15:30',
            studyDurationGoal: 25, // minutes per day
            weeklyGoal: 4 // days per week
          }
        }
      ];
      
      setStudents(mockStudents);
      setSelectedStudent(mockStudents[0]);
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Format date to more readable format
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', { 
      day: 'numeric', 
      month: 'short', 
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };
  
  // Calculate days since last active
  const getDaysSinceActive = (dateString) => {
    const lastActive = new Date(dateString);
    const today = new Date();
    const diffTime = Math.abs(today - lastActive);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) {
      return 'Hari Ini';
    } else if (diffDays === 1) {
      return 'Kemarin';
    } else {
      return `${diffDays} hari yang lalu`;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100">
      <Head>
        <title>Portal Orang Tua - Quiz SD Kelas 2</title>
        <meta name="description" content="Portal pemantauan untuk orang tua dan guru" />
      </Head>

      <main className="container mx-auto px-4 py-6">
        {/* Header with navigation back to home */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="bg-white/80 hover:bg-white p-2 rounded-full shadow transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </Link>
            <h1 className="ml-4 text-3xl font-bold text-blue-800">Portal Orang Tua</h1>
          </div>
          
          <div className="flex items-center">
            <Link 
              href="/"
              className="text-sm md:text-base py-2 px-4 md:px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow transition-colors"
            >
              Keluar
            </Link>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="md:col-span-1 space-y-6">
            {/* Student Selector */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4">
                <h2 className="text-xl font-bold text-white">Pilih Siswa</h2>
              </div>
              
              <div className="p-4">
                {isLoading ? (
                  <div className="flex justify-center p-4">
                    <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                ) : (
                  <ul className="space-y-3">
                    {students.map(student => (
                      <li 
                        key={student.id}
                        className={`p-3 rounded-xl cursor-pointer transition-all ${
                          selectedStudent && selectedStudent.id === student.id
                            ? 'bg-blue-100 border-2 border-blue-300'
                            : 'hover:bg-gray-100 border-2 border-transparent'
                        }`}
                        onClick={() => setSelectedStudent(student)}
                      >
                        <div className="flex items-center">
                          <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                            <img 
                              src={student.avatar} 
                              alt={student.name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <div className="font-bold text-gray-800">{student.name}</div>
                            <div className="text-xs text-gray-500">
                              Kelas {student.grade} {student.class}
                            </div>
                            <div className="text-xs text-blue-600">
                              Aktif: {getDaysSinceActive(student.lastActive)}
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
                
                <button className="mt-4 w-full py-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-xl font-bold text-lg transition-colors">
                  + Tambah Siswa
                </button>
              </div>
            </div>
            
            {/* Quick Settings */}
            {selectedStudent && (
              <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4">
                  <h2 className="text-xl font-bold text-white">Pengaturan Cepat</h2>
                </div>
                
                <div className="p-4">
                  <div className="space-y-4">
                    <div>
                      <label className="flex items-center justify-between">
                        <span className="text-gray-700 font-medium">Notifikasi:</span>
                        <div className="relative inline-block w-12 h-6 transition duration-200 ease-in-out rounded-full">
                          <input
                            type="checkbox"
                            className="absolute w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer peer border-gray-300 checked:border-blue-500 checked:bg-blue-500 checked:translate-x-6"
                            checked={selectedStudent.settings.notificationsEnabled}
                            readOnly
                          />
                          <span className="absolute w-full h-full rounded-full transition duration-200 ease-in-out bg-gray-300 peer-checked:bg-blue-200"></span>
                        </div>
                      </label>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 font-medium mb-1">Waktu Pengingat:</label>
                      <input
                        type="time"
                        className="w-full p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        value={selectedStudent.settings.reminderTime}
                        readOnly
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 font-medium mb-1">Target Belajar Harian:</label>
                      <div className="flex items-center">
                        <input
                          type="number"
                          className="w-16 p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                          value={selectedStudent.settings.studyDurationGoal}
                          readOnly
                        />
                        <span className="ml-2">menit/hari</span>
                      </div>
                    </div>
                  </div>
                  
                  <button className="mt-4 w-full py-2 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-xl font-bold transition-colors">
                    Edit Pengaturan
                  </button>
                </div>
              </div>
            )}
          </div>
          
          {/* Main Dashboard */}
          <div className="md:col-span-3 space-y-6">
            {isLoading ? (
              <div className="bg-white rounded-2xl shadow-md p-12 flex flex-col items-center justify-center">
                <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-6"></div>
                <p className="text-lg font-medium text-gray-700">Memuat data siswa...</p>
              </div>
            ) : selectedStudent ? (
              <>
                {/* Student Overview */}
                <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6">
                    <div className="flex flex-col md:flex-row md:items-center">
                      <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white">
                        <img 
                          src={selectedStudent.avatar} 
                          alt={selectedStudent.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="mt-4 md:mt-0 md:ml-6">
                        <h2 className="text-3xl font-bold text-white">{selectedStudent.name}</h2>
                        <p className="text-blue-100">Kelas {selectedStudent.grade} {selectedStudent.class}</p>
                        <div className="flex items-center mt-2">
                          <span className="bg-white/20 text-white px-2 py-1 rounded-full text-sm mr-2">
                            Terakhir aktif: {formatDate(selectedStudent.lastActive)}
                          </span>
                        </div>
                      </div>
                      <div className="mt-4 md:mt-0 md:ml-auto flex flex-col items-end">
                        <div className="text-5xl font-bold text-white">{selectedStudent.progress.overall}%</div>
                        <div className="text-blue-100">Progress Keseluruhan</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Tabs */}
                  <div className="border-b">
                    <div className="flex">
                      <button
                        className={`px-6 py-3 text-lg font-bold ${
                          activeTab === 'progress'
                            ? 'text-blue-600 border-b-4 border-blue-500'
                            : 'text-gray-600 hover:text-blue-500'
                        }`}
                        onClick={() => setActiveTab('progress')}
                      >
                        Progress
                      </button>
                      <button
                        className={`px-6 py-3 text-lg font-bold ${
                          activeTab === 'activities'
                            ? 'text-blue-600 border-b-4 border-blue-500'
                            : 'text-gray-600 hover:text-blue-500'
                        }`}
                        onClick={() => setActiveTab('activities')}
                      >
                        Aktivitas
                      </button>
                      <button
                        className={`px-6 py-3 text-lg font-bold ${
                          activeTab === 'achievements'
                            ? 'text-blue-600 border-b-4 border-blue-500'
                            : 'text-gray-600 hover:text-blue-500'
                        }`}
                        onClick={() => setActiveTab('achievements')}
                      >
                        Pencapaian
                      </button>
                      <button
                        className={`px-6 py-3 text-lg font-bold ${
                          activeTab === 'recommendations'
                            ? 'text-blue-600 border-b-4 border-blue-500'
                            : 'text-gray-600 hover:text-blue-500'
                        }`}
                        onClick={() => setActiveTab('recommendations')}
                      >
                        Rekomendasi
                      </button>
                    </div>
                  </div>
                  
                  {/* Tab Content */}
                  <div className="p-6">
                    {activeTab === 'progress' && (
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Progress Per Mata Pelajaran</h3>
                        <div className="space-y-6">
                          {selectedStudent.progress.subjects.map(subject => (
                            <div key={subject.id} className="bg-blue-50 p-4 rounded-xl">
                              <div className="flex justify-between items-center mb-1">
                                <h4 className="font-bold text-lg text-gray-800">{subject.name}</h4>
                                <span className="font-bold text-lg text-blue-600">{subject.progress}%</span>
                              </div>
                              <div className="h-4 w-full bg-gray-200 rounded-full overflow-hidden">
                                <div 
                                  className={`h-full rounded-full ${
                                    subject.progress >= 80 ? 'bg-green-500' :
                                    subject.progress >= 60 ? 'bg-blue-500' :
                                    subject.progress >= 40 ? 'bg-yellow-500' : 'bg-red-500'
                                  }`}
                                  style={{ width: `${subject.progress}%` }}
                                ></div>
                              </div>
                              <div className="mt-2 flex justify-between text-gray-600 text-sm">
                                <span>Dijawab: {subject.answered}/{subject.totalQuestions} pertanyaan</span>
                                <span>Benar: {subject.correct}/{subject.answered} ({Math.round((subject.correct/subject.answered || 0) * 100)}%)</span>
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="bg-blue-50 p-4 rounded-xl">
                            <h4 className="font-bold text-lg text-gray-800 mb-2">Kekuatan</h4>
                            <ul className="space-y-2">
                              {selectedStudent.strengths.map((strength, index) => (
                                <li key={index} className="flex items-center">
                                  <span className="text-green-500 mr-2">✓</span>
                                  <span>{strength}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="bg-blue-50 p-4 rounded-xl">
                            <h4 className="font-bold text-lg text-gray-800 mb-2">Area untuk Ditingkatkan</h4>
                            <ul className="space-y-2">
                              {selectedStudent.areasForImprovement.map((area, index) => (
                                <li key={index} className="flex items-center">
                                  <span className="text-yellow-500 mr-2">!</span>
                                  <span>{area}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {activeTab === 'activities' && (
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Aktivitas Terbaru</h3>
                        <div className="space-y-4">
                          {selectedStudent.progress.recentActivity.map((activity, index) => (
                            <div key={index} className="bg-blue-50 p-4 rounded-xl">
                              <div className="flex justify-between items-start">
                                <div>
                                  <h4 className="font-bold text-gray-800">{activity.activity}</h4>
                                  <p className="text-gray-600">
                                    {activity.subject} 
                                    {activity.score && ` - Skor: ${activity.score}`}
                                    {activity.duration && ` - Durasi: ${activity.duration}`}
                                  </p>
                                </div>
                                <div className="text-right">
                                  <span className="text-sm text-gray-500">{formatDate(activity.date)}</span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        <button className="mt-6 w-full py-3 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-xl font-bold text-lg transition-colors">
                          Lihat Semua Aktivitas
                        </button>
                      </div>
                    )}
                    
                    {activeTab === 'achievements' && (
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Pencapaian</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {selectedStudent.achievements.map(achievement => (
                            <div key={achievement.id} className="bg-blue-50 p-4 rounded-xl flex">
                              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center text-3xl mr-4">
                                {achievement.icon}
                              </div>
                              <div>
                                <h4 className="font-bold text-gray-800">{achievement.name}</h4>
                                <p className="text-sm text-gray-600">{achievement.description}</p>
                                <p className="text-xs text-gray-500 mt-1">Diperoleh: {new Date(achievement.date).toLocaleDateString('id-ID')}</p>
                              </div>
                            </div>
                          ))}
                          
                          {/* Placeholder for locked achievements */}
                          <div className="bg-gray-100 p-4 rounded-xl flex opacity-60">
                            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-3xl mr-4">
                              🔒
                            </div>
                            <div>
                              <h4 className="font-bold text-gray-800">Penguasa Matematika</h4>
                              <p className="text-sm text-gray-600">Selesaikan semua soal matematika dengan benar</p>
                              <p className="text-xs text-blue-500 mt-1">Belum terbuka</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {activeTab === 'recommendations' && (
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Rekomendasi untuk Orang Tua</h3>
                        <div className="space-y-4">
                          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-xl">
                            <h4 className="font-bold text-gray-800">Pertahankan momentum di {selectedStudent.strengths[0]}</h4>
                            <p className="text-gray-600">
                              {selectedStudent.name} menunjukkan kemajuan yang baik dalam {selectedStudent.strengths[0]}. 
                              Terus dorong minat mereka dalam subjek ini dengan aktivitas pendukung di rumah.
                            </p>
                          </div>
                          
                          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-xl">
                            <h4 className="font-bold text-gray-800">Fokus pada {selectedStudent.areasForImprovement[0]}</h4>
                            <p className="text-gray-600">
                              {selectedStudent.name} memerlukan dukungan tambahan dalam {selectedStudent.areasForImprovement[0]}. 
                              Cobalah berlatih dengan aktivitas yang menyenangkan sehari-hari selama 15-20 menit.
                            </p>
                          </div>
                          
                          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-xl">
                            <h4 className="font-bold text-gray-800">Tingkatkan konsistensi belajar</h4>
                            <p className="text-gray-600">
                              Tetapkan jadwal belajar yang konsisten selama {selectedStudent.settings.studyDurationGoal} menit setiap hari 
                              akan membantu {selectedStudent.name} untuk terus berkembang.
                            </p>
                          </div>
                        </div>
                        
                        <div className="mt-8">
                          <h3 className="text-xl font-bold text-gray-800 mb-4">Sumber Daya untuk Orang Tua</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-purple-50 p-4 rounded-xl">
                              <h4 className="font-bold text-gray-800">Video Panduan Pembelajaran</h4>
                              <p className="text-gray-600 mb-3">
                                Pelajari cara mendampingi anak belajar di rumah dengan metode yang menyenangkan.
                              </p>
                              <button className="w-full py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-xl font-bold transition-colors">
                                Tonton Video
                              </button>
                            </div>
                            
                            <div className="bg-green-50 p-4 rounded-xl">
                              <h4 className="font-bold text-gray-800">Panduan Aktivitas di Rumah</h4>
                              <p className="text-gray-600 mb-3">
                                Dapatkan ide-ide aktivitas di rumah yang mendukung pembelajaran di sekolah.
                              </p>
                              <button className="w-full py-2 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold transition-colors">
                                Unduh Panduan
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Print/Export Options */}
                <div className="flex gap-4">
                  <button className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg transition-colors">
                    Cetak Laporan
                  </button>
                  <button className="flex-1 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-bold text-lg transition-colors">
                    Unduh PDF
                  </button>
                </div>
              </>
            ) : (
              <div className="bg-white rounded-2xl shadow-md p-12 flex flex-col items-center justify-center">
                <p className="text-lg font-medium text-gray-700 mb-4">Pilih siswa untuk melihat data</p>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
