import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { subjects } from '../data/subjects';
import UserProfile from '../components/dashboard/UserProfile';
import Leaderboard from '../components/dashboard/Leaderboard';
import ProgressTracker from '../components/dashboard/ProgressTracker';
import RewardCase from '../components/dashboard/RewardCase';
import MotivationalPopup from '../components/dashboard/MotivationalPopup';

export default function Dashboard() {
  const [showMotivation, setShowMotivation] = useState(false);
  const [motivationMessage, setMotivationMessage] = useState('');
  const [motivationType, setMotivationType] = useState('success');
  
  // Mock user data - would come from actual authentication in production
  const user = {
    name: 'Dini',
    avatar: '/images/avatars/girl-1.png',
    level: 3,
    points: 750,
    streak: 5
  };
  
  // Mock completed topics
  const completedTopics = [
    { id: 'math_k2t2_001', name: 'Penjumlahan', completed: true },
    { id: 'math_k2t2_002', name: 'Pengurangan', completed: true },
    { id: 'math_k2t2_003', name: 'Perkalian', completed: false },
    { id: 'math_k2t2_004', name: 'Pembagian', completed: false },
    { id: 'bi_k2t2_001', name: 'Membaca Cerita', completed: true },
    { id: 'bi_k2t2_002', name: 'Menulis Kalimat', completed: false },
  ];
  
  // Mock rewards
  const rewards = {
    stars: 45,
    badges: [
      { id: 'math-star', name: 'Bintang Matematika', icon: '🌟', earned: true },
      { id: 'reading-badge', name: 'Kutu Buku', icon: '📚', earned: true },
      { id: 'streak', name: '5 Hari Berturut-turut', icon: '🔥', earned: true },
      { id: 'perfect', name: 'Nilai Sempurna', icon: '🏆', earned: false },
    ],
    trophies: [
      { id: 'gold-math', name: 'Juara Matematika', icon: '🏆', earned: true },
      { id: 'silver-reading', name: 'Pembaca Cepat', icon: '🥈', earned: false },
    ]
  };
  
  // Mock leaderboard data
  const leaderboardData = [
    { id: 1, name: 'Siti', avatar: '/images/avatars/girl-2.png', points: 920, icon: '🦊' },
    { id: 2, name: 'Dini', avatar: '/images/avatars/girl-1.png', points: 750, icon: '🐼' },
    { id: 3, name: 'Budi', avatar: '/images/avatars/boy-1.png', points: 680, icon: '🦁' },
    { id: 4, name: 'Ahmad', avatar: '/images/avatars/boy-2.png', points: 590, icon: '🐯' },
    { id: 5, name: 'Dewi', avatar: '/images/avatars/girl-3.png', points: 540, icon: '🐰' },
  ];
  
  // Function to trigger motivational popup
  const triggerMotivation = (message, type = 'success') => {
    setMotivationMessage(message);
    setMotivationType(type);
    setShowMotivation(true);
    
    setTimeout(() => {
      setShowMotivation(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-400 to-blue-300">
      <Head>
        <title>Dashboard Belajar - Quiz SD Kelas 2</title>
        <meta name="description" content="Dashboard belajar interaktif untuk siswa SD kelas 2" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-6 relative">
        {/* Header with Welcome Message */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 bg-white/90 rounded-2xl p-4 shadow-lg">
          <div className="mb-4 md:mb-0">
            <h1 className="text-3xl md:text-4xl font-bold text-purple-600">
              Halo, <span className="text-pink-500">{user.name}!</span> 
            </h1>
            <p className="text-lg text-gray-700">Siap belajar hari ini? 🌈</p>
          </div>
          <UserProfile user={user} />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content Area (2/3 width on large screens) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Progress Tracker */}
            <div className="bg-white/90 rounded-2xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-green-600 mb-4 flex items-center">
                <span className="mr-2">📚</span> Kemajuan Belajarmu
              </h2>
              <ProgressTracker topics={completedTopics} />
            </div>
            
            {/* Subject Selection */}
            <div className="bg-white/90 rounded-2xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-orange-500 mb-4 flex items-center">
                <span className="mr-2">🎯</span> Pilih Mata Pelajaran
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {subjects.map((subject) => (
                  <Link
                    href={`/quiz/${subject.id}`}
                    key={subject.id}
                    className="bg-gradient-to-r from-yellow-300 to-orange-300 hover:from-yellow-400 hover:to-orange-400 rounded-xl p-4 shadow-md transition-all hover:shadow-lg hover:scale-105"
                  >
                    <div className="flex flex-col items-center text-center space-y-2">
                      <span className="text-4xl">{subject.icon}</span>
                      <h3 className="text-xl font-bold text-gray-800">{subject.name}</h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
          {/* Sidebar (1/3 width on large screens) */}
          <div className="space-y-6">
            {/* Rewards Case */}
            <div className="bg-white/90 rounded-2xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-yellow-600 mb-4 flex items-center">
                <span className="mr-2">🏆</span> Penghargaanmu
              </h2>
              <RewardCase rewards={rewards} onViewReward={() => triggerMotivation('Wah, kamu punya banyak penghargaan! 🌟', 'success')} />
            </div>
            
            {/* Leaderboard */}
            <div className="bg-white/90 rounded-2xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-pink-600 mb-4 flex items-center">
                <span className="mr-2">🏅</span> Papan Peringkat
              </h2>
              <Leaderboard data={leaderboardData} userId={user.id} />
            </div>
            
            {/* Quick Tips */}
            <div className="bg-white/90 rounded-2xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-purple-600 mb-4 flex items-center">
                <span className="mr-2">💡</span> Tip Hari Ini
              </h2>
              <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-lg text-gray-700">
                <p className="text-lg">Coba kerjakan quiz secara rutin untuk hasil belajar yang lebih baik! 🧠</p>
              </div>
              <button 
                onClick={() => triggerMotivation('Kamu bisa! Terus semangat belajar! 💪', 'success')}
                className="mt-4 w-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-bold py-3 px-4 rounded-xl shadow-md transition-all hover:shadow-lg"
              >
                Dapatkan Semangat! 🚀
              </button>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-sm text-white">
            © 2025 Quiz SD Kelas 2 - Dibuat dengan ❤️ untuk pendidikan Indonesia
          </p>
        </div>
      </main>
      
      {/* Motivational Popup */}
      {showMotivation && (
        <MotivationalPopup
          message={motivationMessage}
          type={motivationType}
          onClose={() => setShowMotivation(false)}
        />
      )}
    </div>
  );
}
