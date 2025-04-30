import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { getCurrentUser, saveQuizResult } from '../../utils/userManager';
import { subjects } from '../../data/subjects';
// Regular class imports
import { questions as bahasaIndonesiaQuestions } from '../../data/questions/bahasa_indonesia_k2t2';
import { questions as matematikaQuestions } from '../../data/questions/matematika_k2t2';
import { questions as ppknQuestions } from '../../data/questions/ppkn_k2t2';
import { questions as pjokQuestions } from '../../data/questions/pjok_k2t2';
import { questions as sbdpQuestions } from '../../data/questions/sbdp_k2t2';
import { questions as agamaQuestions } from '../../data/questions/pai_k2t2';
import { questions as bahasaInggrisQuestions } from '../../data/questions/english_k2t2';
import { questions as sainsQuestions } from '../../data/questions/sains_k2t2';

// Bilingual class imports
import { questions as mathematicsBilQuestions } from '../../data/questions/mathematics_bil_k2t2';
import { questions as englishBilQuestions } from '../../data/questions/english_bil_k2t2';
import { questions as scienceBilQuestions } from '../../data/questions/science_bil_k2t2';
import { QUESTION_TYPES } from '../../data/questionSchema';

export default function Quiz() {
  const router = useRouter();
  const { subjectId } = router.query;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [user, setUser] = useState(null);
  // Always initialize the state hook for CMC2 questions at the top level
  const [selectedLeftOption, setSelectedLeftOption] = useState(null);

  useEffect(() => {
    const currentUser = getCurrentUser();
    if (!currentUser) {
      router.push('/auth');
    } else {
      setUser(currentUser);
    }
  }, []);

  // Wait for router query to be available
  if (!subjectId) {
    return <div className="min-h-screen bg-[var(--background)] py-8 flex items-center justify-center">Loading...</div>;
  }

  const subject = subjects.find((s) => s.id === subjectId);

  // Get questions based on subject
  const getQuestions = (subjectId) => {
    switch (subjectId) {
      // Regular class subjects
      case 'bahasa-indonesia':
        return bahasaIndonesiaQuestions;
      case 'matematika':
        return matematikaQuestions;
      case 'ppkn':
        return ppknQuestions;
      case 'pjok':
        return pjokQuestions;
      case 'sbdp':
        return sbdpQuestions;
      case 'agama':
        return agamaQuestions;
      case 'bahasa-inggris':
        return bahasaInggrisQuestions;
      case 'sains':
        return sainsQuestions;
      
      // Bilingual class subjects
      case 'mathematics_bil':
        return mathematicsBilQuestions;
      case 'english_bil':
        return englishBilQuestions;
      case 'science_bil':
        return scienceBilQuestions;
      default:
        return [];
    }
  };

  const questions = getQuestions(subjectId);

  if (!subject) {
    return <div className="min-h-screen bg-[var(--background)] py-8 flex items-center justify-center">Mata pelajaran tidak ditemukan</div>;
  }

  if (!questions || questions.length === 0) {
    return <div className="min-h-screen bg-[var(--background)] py-8 flex items-center justify-center">Pertanyaan tidak tersedia</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];

  // Track the selected left option for CMC2 questions

  const handleLeftOptionSelect = (index) => {
    setSelectedLeftOption(index);
  };

  const handleRightOptionSelect = (rightIndex) => {
    if (selectedLeftOption === null) return;
    
    // Get current pairs or initialize
    const currentPairs = answers[currentQuestionIndex] || [];
    
    // Remove any existing pair with this left option
    const filteredPairs = currentPairs.filter(pair => pair[0] !== selectedLeftOption);
    
    // Add the new pair
    const updatedPairs = [...filteredPairs, [selectedLeftOption, rightIndex]];
    
    // Update answers
    setAnswers({
      ...answers,
      [currentQuestionIndex]: updatedPairs,
    });
    
    // Reset selection
    setSelectedLeftOption(null);
  };

  const handleAnswer = (optionIndex) => {
    // For CMC1 (multiple correct answers), toggle selection
    if (currentQuestion.type === QUESTION_TYPES.CMC1) {
      const currentSelections = answers[currentQuestionIndex] || [];
      const updatedSelections = currentSelections.includes(optionIndex)
        ? currentSelections.filter(index => index !== optionIndex)
        : [...currentSelections, optionIndex];
      
      setAnswers({
        ...answers,
        [currentQuestionIndex]: updatedSelections,
      });
    } 
    // For regular MC (single correct answer), just store the selected index
    else {
      setAnswers({
        ...answers,
        [currentQuestionIndex]: optionIndex,
      });
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    Object.keys(answers).forEach((questionIndex) => {
      const question = questions[questionIndex];
      const userAnswer = answers[questionIndex];
      
      // Check answers based on question type
      if (question.type === QUESTION_TYPES.MC) {
        // For regular multiple choice
        if (userAnswer === question.correctAnswer) {
          correct++;
        }
      } 
      else if (question.type === QUESTION_TYPES.CMC1) {
        // For multiple correct answers, check if arrays match (sorted for comparison)
        const sortedUserAnswer = [...userAnswer].sort();
        const sortedCorrectAnswer = [...question.correctAnswer].sort();
        
        if (JSON.stringify(sortedUserAnswer) === JSON.stringify(sortedCorrectAnswer)) {
          correct++;
        }
      }
      else if (question.type === QUESTION_TYPES.CMC2) {
        // For matching pairs, check if all pairs match
        const userPairs = userAnswer || [];
        const correctPairs = question.correctPairs || [];
        
        // Check if all pairs match (must have same length and all pairs must match)
        if (userPairs.length === correctPairs.length) {
          // Sort both arrays for consistent comparison
          const sortedUserPairs = [...userPairs].sort((a, b) => a[0] - b[0]);
          const sortedCorrectPairs = [...correctPairs].sort((a, b) => a[0] - b[0]);
          
          // Check if all pairs match exactly
          const allPairsMatch = sortedUserPairs.every((pair, index) => {
            return pair[0] === sortedCorrectPairs[index][0] && 
                   pair[1] === sortedCorrectPairs[index][1];
          });
          
          if (allPairsMatch) {
            correct++;
          }
        }
      }
    });
    return Math.round((correct / questions.length) * 100);
  };

  if (showResults) {
    const score = calculateScore();
    const correctAnswers = Object.keys(answers).filter(key => {
      const question = questions[key];
      const userAnswer = answers[key];
      
      if (question.type === QUESTION_TYPES.MC) {
        return userAnswer === question.correctAnswer;
      } 
      else if (question.type === QUESTION_TYPES.CMC1) {
        const sortedUserAnswer = [...userAnswer].sort();
        const sortedCorrectAnswer = [...question.correctAnswer].sort();
        return JSON.stringify(sortedUserAnswer) === JSON.stringify(sortedCorrectAnswer);
      }
      else if (question.type === QUESTION_TYPES.CMC2) {
        // For matching pairs, check if all pairs match
        const userPairs = userAnswer || [];
        const correctPairs = question.correctPairs || [];
        
        if (userPairs.length === correctPairs.length) {
          // Sort both arrays for consistent comparison
          const sortedUserPairs = [...userPairs].sort((a, b) => a[0] - b[0]);
          const sortedCorrectPairs = [...correctPairs].sort((a, b) => a[0] - b[0]);
          
          // Check if all pairs match exactly
          return sortedUserPairs.every((pair, index) => {
            return pair[0] === sortedCorrectPairs[index][0] && 
                   pair[1] === sortedCorrectPairs[index][1];
          });
        }
        return false;
      }
      return false;
    }).length;
    saveQuizResult(subjectId, score, answers, correctAnswers, questions.length);
    return (
      <div className="min-h-screen bg-[var(--background)] py-8">
        <Head>
          <title>Hasil Quiz - {subject.name}</title>
        </Head>
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto dark-card rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-center mb-8">Hasil Quiz {subject.name}</h1>
            <div className="text-center mb-8">
              <div className="text-6xl font-bold text-[var(--primary)] mb-2">{score}%</div>
              <p className="text-[var(--foreground)] opacity-80">
                Kamu menjawab {Object.keys(answers).length} dari {questions.length} pertanyaan
              </p>
            </div>
            
            <div className="space-y-6">
              {questions.map((question, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg ${
                    answers[index] === question.correctAnswer
                      ? 'bg-green-900/30 border border-green-500/30'
                      : 'bg-red-900/30 border border-red-500/30'
                  }`}
                >
                  <p className="font-medium mb-2">{question.question}</p>
                  <p className="text-sm">
                    Jawaban kamu: {question.options[answers[index]]}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Jawaban benar: {question.options[question.correctAnswer]}
                  </p>
                  <p className="text-sm text-[var(--foreground)] opacity-70 mt-1">
                    {question.explanation}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/"
                className="inline-block bg-[var(--primary)] text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity"
              >
                Kembali ke Beranda
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--background)] py-8">
      <Head>
        <title>Quiz {subject.name} - Pertanyaan {currentQuestionIndex + 1}</title>
      </Head>

      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto dark-card rounded-lg shadow-lg p-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-bold">{subject.name}</h1>
            <div className="text-[var(--foreground)] opacity-80">
              Pertanyaan {currentQuestionIndex + 1} dari {questions.length}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl mb-4">{currentQuestion.question}</h2>
            
            {/* Regular MCQ or CMC1 (Multiple options) */}
            {(currentQuestion.type === QUESTION_TYPES.MC || currentQuestion.type === QUESTION_TYPES.CMC1) && (
              <div className="space-y-3">
                {currentQuestion.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    className={`w-full text-left p-4 rounded-lg transition-colors ${
                      currentQuestion.type === QUESTION_TYPES.CMC1
                        ? (answers[currentQuestionIndex] && answers[currentQuestionIndex].includes(index)
                            ? 'bg-[var(--primary)] text-white'
                            : 'dark-card hover:bg-[var(--card-hover)]')
                        : (answers[currentQuestionIndex] === index
                            ? 'bg-[var(--primary)] text-white'
                            : 'dark-card hover:bg-[var(--card-hover)]')
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
            
            {/* Matching pairs (CMC2) */}
            {currentQuestion.type === QUESTION_TYPES.CMC2 && (
              <div className="flex flex-col md:flex-row gap-4">
                {/* Left column */}
                <div className="flex-1 space-y-3">
                  <h3 className="font-medium mb-2">Kolom A</h3>
                  {currentQuestion.leftOptions.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleLeftOptionSelect(index)}
                      className={`w-full text-left p-4 rounded-lg transition-colors ${
                        selectedLeftOption === index
                          ? 'bg-[var(--primary)] text-white'
                          : 'dark-card hover:bg-[var(--card-hover)]'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
                
                {/* Right column */}
                <div className="flex-1 space-y-3">
                  <h3 className="font-medium mb-2">Kolom B</h3>
                  {currentQuestion.rightOptions.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleRightOptionSelect(index)}
                      className={`w-full text-left p-4 rounded-lg transition-colors ${
                        'dark-card hover:bg-[var(--card-hover)]'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {/* Show current pairing status for CMC2 */}
            {currentQuestion.type === QUESTION_TYPES.CMC2 && answers[currentQuestionIndex] && answers[currentQuestionIndex].length > 0 && (
              <div className="mt-4 p-4 bg-[var(--card-foreground)] rounded-lg">
                <h3 className="font-medium mb-2">Pasangan yang dipilih:</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {answers[currentQuestionIndex].map((pair, index) => (
                    <li key={index}>
                      {currentQuestion.leftOptions[pair[0]]} ↔ {currentQuestion.rightOptions[pair[1]]}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="flex justify-end">
            <button
              onClick={handleNext}
              disabled={answers[currentQuestionIndex] === undefined || 
                      (currentQuestion.type === QUESTION_TYPES.CMC1 && 
                       (!answers[currentQuestionIndex] || answers[currentQuestionIndex].length === 0)) ||
                      (currentQuestion.type === QUESTION_TYPES.CMC2 && 
                       (!answers[currentQuestionIndex] || answers[currentQuestionIndex].length === 0))}
              className={`px-6 py-2 rounded-lg transition-opacity ${
                answers[currentQuestionIndex] === undefined || 
                (currentQuestion.type === QUESTION_TYPES.CMC1 && 
                (!answers[currentQuestionIndex] || answers[currentQuestionIndex].length === 0)) ||
                (currentQuestion.type === QUESTION_TYPES.CMC2 && 
                (!answers[currentQuestionIndex] || answers[currentQuestionIndex].length === 0))
                  ? 'bg-gray-700 cursor-not-allowed'
                  : 'bg-[var(--primary)] text-white hover:opacity-90'
              }`}
            >
              {currentQuestionIndex === questions.length - 1 ? 'Selesai' : 'Selanjutnya'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
