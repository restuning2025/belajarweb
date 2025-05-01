import React, { useState } from 'react';
import Head from 'next/head';
import QuizCard from '../components/dashboard/QuizCard';
import MultipleAnswerQuiz from '../components/dashboard/MultipleAnswerQuiz';
import MatchingPairsQuiz from '../components/dashboard/MatchingPairsQuiz';

// Sample question data
const sampleStandardMCQ = {
  id: 'demo-mcq-1',
  subject: 'Matematika',
  topic: 'Penjumlahan',
  difficulty: 'Mudah',
  question: 'Berapakah hasil dari 5 + 3?',
  options: ['8', '7', '9', '6'],
  correctAnswer: 0, // Index 0 (correct answer is "8")
  explanation: 'Lima (5) ditambah tiga (3) sama dengan delapan (8).'
};

const sampleMultipleAnswerMCQ = {
  id: 'demo-mcq-2',
  subject: 'Sains',
  topic: 'Hewan',
  difficulty: 'Sedang',
  question: 'Manakah hewan-hewan berikut yang memiliki empat kaki?',
  options: ['Kucing', 'Ikan', 'Anjing', 'Burung', 'Kuda'],
  correctAnswers: [0, 2, 4], // Indices 0, 2, 4 (Kucing, Anjing, Kuda)
  explanation: 'Kucing, anjing, dan kuda memiliki empat kaki. Ikan tidak memiliki kaki, dan burung memiliki dua kaki.'
};

const sampleMatchingPairs = {
  id: 'demo-mcq-3',
  subject: 'Bahasa Indonesia',
  topic: 'Lawan Kata',
  difficulty: 'Sedang',
  question: 'Cocokkan kata dengan lawan katanya yang tepat.',
  leftOptions: ['Tinggi', 'Cepat', 'Besar', 'Panas'],
  rightOptions: ['Kecil', 'Dingin', 'Rendah', 'Lambat'],
  pairs: [
    { left: 'Tinggi', right: 'Rendah' },
    { left: 'Cepat', right: 'Lambat' },
    { left: 'Besar', right: 'Kecil' },
    { left: 'Panas', right: 'Dingin' }
  ],
  explanation: 'Lawan kata (antonim) adalah kata yang memiliki arti berlawanan dengan kata lain.'
};

export default function QuizRandomizationDemo() {
  const [resetCounter, setResetCounter] = useState(0);
  
  // Function to reset all quizzes (force re-randomization)
  const resetQuizzes = () => {
    setResetCounter(prev => prev + 1);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-100 to-purple-100 py-8">
      <Head>
        <title>Demo Randomisasi Pilihan Quiz</title>
        <meta name="description" content="Demonstrasi randomisasi pilihan jawaban quiz" />
      </Head>
      
      <main className="container mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8 text-center">
          <h1 className="text-3xl font-bold text-indigo-700 mb-3">Demo Randomisasi Pilihan Quiz</h1>
          <p className="text-lg text-gray-600 mb-4">
            Halaman ini menunjukkan bagaimana pilihan jawaban dirandomisasi untuk setiap jenis soal quiz.
            Setiap kali Anda mengklik tombol di bawah, pilihan jawaban akan diacak ulang.
          </p>
          <button 
            onClick={resetQuizzes}
            className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white rounded-xl font-bold text-lg shadow-md transition-all hover:shadow-lg"
          >
            Acak Ulang Semua Soal 🔄
          </button>
        </div>
        
        <div className="grid grid-cols-1 gap-8 mb-12">
          {/* Standard MCQ */}
          <div>
            <h2 className="text-2xl font-bold text-purple-700 mb-3">1. Soal Pilihan Ganda Biasa</h2>
            <p className="text-gray-600 mb-5">
              Jawaban yang benar adalah "8" (indeks 0 di array asli), tetapi posisinya akan diacak setiap kali.
            </p>
            <QuizCard 
              key={`mcq-${resetCounter}`} 
              question={sampleStandardMCQ} 
              onComplete={() => {}} 
            />
          </div>
          
          {/* Multiple Answer MCQ */}
          <div>
            <h2 className="text-2xl font-bold text-purple-700 mb-3">2. Soal Pilihan Ganda dengan Beberapa Jawaban Benar</h2>
            <p className="text-gray-600 mb-5">
              Jawaban yang benar adalah "Kucing", "Anjing", dan "Kuda" (indeks 0, 2, 4 di array asli), tetapi posisinya akan diacak setiap kali.
            </p>
            <MultipleAnswerQuiz 
              key={`multi-${resetCounter}`} 
              question={sampleMultipleAnswerMCQ} 
              onComplete={() => {}} 
            />
          </div>
          
          {/* Matching Pairs */}
          <div>
            <h2 className="text-2xl font-bold text-purple-700 mb-3">3. Soal Menjodohkan</h2>
            <p className="text-gray-600 mb-5">
              Kata-kata di kolom kiri dan kanan akan diacak posisinya setiap kali, tetapi hubungan pasangan yang benar tetap terjaga.
            </p>
            <MatchingPairsQuiz 
              key={`matching-${resetCounter}`} 
              question={sampleMatchingPairs} 
              onComplete={() => {}} 
            />
          </div>
        </div>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-lg mb-8">
          <h3 className="text-xl font-bold text-yellow-700 mb-2">Bagaimana Ini Bekerja?</h3>
          <p className="text-gray-700 mb-3">
            Setiap komponen quiz menggunakan algoritma randomisasi untuk mengacak posisi pilihan jawaban:
          </p>
          <ol className="list-decimal ml-6 space-y-2 text-gray-700">
            <li>Ketika komponen quiz di-render, array pilihan jawaban asli disalin</li>
            <li>Pilihan jawaban diacak menggunakan algoritma Fisher-Yates atau teknik acak lainnya</li>
            <li>Komponen menyimpan pemetaan antara indeks asli dan indeks acak</li>
            <li>Ketika pengguna memilih jawaban, indeks acak dikonversi kembali ke indeks asli untuk memeriksa kebenaran jawaban</li>
            <li>Ini memastikan jawaban yang benar tidak selalu muncul di posisi yang sama (A, B, C, atau D)</li>
          </ol>
        </div>
      </main>
    </div>
  );
}
