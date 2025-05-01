import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import QuizCard from '../../components/dashboard/QuizCard';
import MotivationalPopup from '../../components/dashboard/MotivationalPopup';

export default function QuizPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showMotivation, setShowMotivation] = useState(false);
  const [motivationMessage, setMotivationMessage] = useState('');
  const [motivationType, setMotivationType] = useState('success');
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [score, setScore] = useState(0);
  const [questionsLoaded, setQuestionsLoaded] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState([]);
  
  // Mock loading quiz questions - in a real app, this would fetch from an API
  useEffect(() => {
    // Simulate API call delay
    const timer = setTimeout(() => {
      setQuizQuestions([
        {
          id: 'q001',
          type: 'MC', // Regular multiple choice
          subject: 'Matematika',
          topic: 'Penjumlahan',
          difficulty: 'Mudah',
          question: 'Berapa hasil dari 5 + 3?',
          options: ['7', '8', '9', '10'],
          correctAnswer: 1,
          explanation: '5 + 3 = 8'
        },
        {
          id: 'q002',
          type: 'CMC1', // Complex multiple choice with multiple answers
          subject: 'Bahasa Indonesia',
          topic: 'Kosakata',
          difficulty: 'Sedang',
          question: 'Manakah yang merupakan nama buah-buahan?',
          options: ['Apel', 'Wortel', 'Mangga', 'Bayam', 'Jeruk'],
          correctAnswers: [0, 2, 4],
          explanation: 'Apel, Mangga, dan Jeruk adalah buah-buahan. Wortel dan Bayam adalah sayuran.'
        },
        {
          id: 'q003', 
          type: 'MC',
          subject: 'Matematika Bilingual',
          topic: 'Fractions',
          difficulty: 'Medium',
          question: 'What fraction represents three fourths?',
          options: [
            'One fourth (1/4)',
            'One half (1/2)',
            'Three fourths (3/4)',
            'One whole (1)'
          ],
          correctAnswer: 2,
          explanation: 'Three fourths (3/4) is the fraction that represents three equal parts out of four'
        },
        {
          id: 'q004',
          type: 'CMC2', // Complex multiple choice matching pairs
          subject: 'Sains',
          topic: 'Hewan',
          difficulty: 'Sulit',
          question: 'Pasangkan hewan dengan makanannya:',
          leftOptions: [
            'Kelinci',
            'Singa',
            'Gajah',
            'Burung'
          ],
          rightOptions: [
            'Wortel',
            'Daging',
            'Daun',
            'Biji-bijian'
          ],
          correctPairs: [
            [0, 0],
            [1, 1],
            [2, 2],
            [3, 3]
          ],
          explanation: 'Kelinci makan wortel, singa makan daging, gajah makan daun, dan burung makan biji-bijian.'
        },
        {
          id: 'q005',
          type: 'MC',
          subject: 'English',
          topic: 'Vocabulary',
          difficulty: 'Easy',
          question: 'Which animal says "meow"?',
          options: ['Dog', 'Cat', 'Cow', 'Duck'],
          correctAnswer: 1,
          explanation: 'Cats make the sound "meow".'
        }
      ]);
      setQuestionsLoaded(true);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Handle quiz completion
  const handleQuizCompletion = () => {
    const correctAnswers = userAnswers.filter(answer => answer.correct).length;
    const totalQuestions = quizQuestions.length;
    const finalScore = Math.round((correctAnswers / totalQuestions) * 100);
    
    setScore(finalScore);
    setQuizFinished(true);
    
    // Determine message based on score
    let message = '';
    if (finalScore >= 80) {
      message = 'Hebat! Kamu berhasil mendapatkan nilai yang sangat bagus! 🎉';
      setMotivationType('success');
    } else if (finalScore >= 60) {
      message = 'Bagus! Kamu sudah belajar dengan baik! 👍';
      setMotivationType('success');
    } else {
      message = 'Jangan menyerah! Ayo belajar lagi ya! 💪';
      setMotivationType('info');
    }
    
    setMotivationMessage(message);
    setShowMotivation(true);
  };
  
  // Handle question answer
  const handleQuestionAnswer = (correct) => {
    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestionIndex] = { 
      questionId: quizQuestions[currentQuestionIndex].id,
      correct 
    };
    setUserAnswers(newUserAnswers);
    
    // Move to next question after a short delay
    setTimeout(() => {
      if (currentQuestionIndex < quizQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        handleQuizCompletion();
      }
    }, 1500);
  };
  
  // Current question - safely handle when questions are still loading
  const currentQuestion = questionsLoaded && quizQuestions.length > 0 ? 
    quizQuestions[currentQuestionIndex] : null;
  
  // Handle navigation between questions
  const goToNextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      handleQuizCompletion();
    }
  };
  
  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
  
  // Start quiz
  const startQuiz = () => {
    setQuizStarted(true);
    setUserAnswers(new Array(quizQuestions.length).fill(null));
  };
  
  // Restart quiz
  const restartQuiz = () => {
    setQuizStarted(false);
    setQuizFinished(false);
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setScore(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-400 to-purple-300">
      <Head>
        <title>Quiz Interaktif - SD Kelas 2</title>
        <meta name="description" content="Quiz interaktif untuk siswa SD kelas 2" />
      </Head>

      <main className="container mx-auto px-4 py-6">
        {/* Header with navigation back to dashboard */}
        <div className="mb-6 flex items-center">
          <Link href="/dashboard" className="bg-white/80 hover:bg-white p-2 rounded-full shadow transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </Link>
          <h1 className="ml-4 text-3xl font-bold text-white">Quiz Interaktif</h1>
        </div>
        
        {/* Loading State */}
        {!questionsLoaded && (
          <div className="flex flex-col items-center justify-center h-80 bg-white/90 rounded-2xl shadow-lg p-8">
            <div className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mb-6"></div>
            <p className="text-lg font-medium text-gray-700">Menyiapkan pertanyaan quiz...</p>
            <p className="text-sm text-gray-500 mt-2">Tunggu sebentar ya!</p>
          </div>
        )}
        
        {/* Quiz Not Started Yet */}
        {questionsLoaded && !quizStarted && !quizFinished && (
          <div className="bg-white/90 rounded-2xl shadow-lg p-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-indigo-600 mb-4">Quiz Siap Dimulai!</h2>
              <p className="text-gray-700 mb-6">
                Ada {quizQuestions.length} pertanyaan yang harus kamu jawab. 
                Baca baik-baik dan pilih jawaban yang benar ya!
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {['Matematika', 'Bahasa Indonesia', 'English'].map((subject, index) => (
                  <div key={index} className="p-4 rounded-lg bg-indigo-50 border border-indigo-100">
                    <p className="font-bold text-indigo-700">{subject}</p>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col items-center">
                <button
                  onClick={startQuiz}
                  className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white rounded-xl font-bold text-lg transition-colors shadow-lg transform hover:scale-105"
                >
                  Mulai Quiz! 🚀
                </button>
                <p className="text-sm text-gray-500 mt-4">Semoga berhasil!</p>
              </div>
            </div>
          </div>
        )}
        
        {/* Quiz In Progress */}
        {questionsLoaded && quizStarted && !quizFinished && currentQuestion && (
          <div className="space-y-4">
            {/* Progress Bar */}
            <div className="bg-white/80 rounded-xl p-4 shadow-md">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium text-gray-700">
                  Pertanyaan {currentQuestionIndex + 1} dari {quizQuestions.length}
                </span>
                <span className="font-medium text-indigo-600">
                  {Math.round(((currentQuestionIndex + 1) / quizQuestions.length) * 100)}%
                </span>
              </div>
              <div className="h-3 w-full bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                  style={{ width: `${((currentQuestionIndex + 1) / quizQuestions.length) * 100}%` }}
                ></div>
              </div>
            </div>
            
            {/* Quiz Card */}
            <QuizCard 
              question={currentQuestion} 
              onComplete={handleQuestionAnswer}
            />
          </div>
        )}
        
        {/* Quiz Finished */}
        {questionsLoaded && quizFinished && (
          <div className="bg-white/90 rounded-2xl shadow-lg p-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-indigo-600 mb-2">Quiz Selesai!</h2>
              
              <div className="my-8">
                <div className="w-40 h-40 mx-auto relative">
                  <div className="absolute inset-0 rounded-full bg-indigo-100 flex items-center justify-center">
                    <div className="text-4xl font-bold text-indigo-600">{score}%</div>
                  </div>
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle 
                      cx="50" cy="50" r="45" 
                      fill="none" 
                      stroke="#E0E7FF" 
                      strokeWidth="8"
                    />
                    <circle 
                      cx="50" cy="50" r="45" 
                      fill="none" 
                      stroke={score >= 80 ? '#4ADE80' : score >= 60 ? '#FACC15' : '#F87171'} 
                      strokeWidth="8"
                      strokeDasharray={`${score * 2.83} 283`}
                      strokeLinecap="round"
                      transform="rotate(-90 50 50)"
                    />
                  </svg>
                </div>
              </div>
              
              <p className="text-gray-700 mb-8">
                Kamu menjawab benar {userAnswers.filter(a => a && a.correct).length} dari {quizQuestions.length} pertanyaan.
                {score >= 80 
                  ? ' Hebat! Kamu sangat pintar!' 
                  : score >= 60 
                    ? ' Bagus! Teruslah belajar!' 
                    : ' Jangan menyerah! Ayo coba lagi!'}
              </p>
              
              {/* Show stars for achievements */}
              <div className="flex justify-center space-x-2 mb-8">
                {[...Array(5)].map((_, i) => (
                  <span 
                    key={i} 
                    className={`text-3xl ${i < Math.ceil(score/20) ? 'animate-bounce text-yellow-400' : 'text-gray-300'}`}
                  >
                    ⭐
                  </span>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link 
                  href="/dashboard" 
                  className="w-full sm:w-auto px-6 py-3 bg-indigo-100 hover:bg-indigo-200 text-indigo-700 rounded-xl font-bold transition-colors shadow-md"
                >
                  Kembali ke Dashboard
                </Link>
                <button
                  onClick={restartQuiz}
                  className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white rounded-xl font-bold transition-colors shadow-md"
                >
                  Coba Lagi 🔄
                </button>
              </div>
            </div>
          </div>
        )}
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
