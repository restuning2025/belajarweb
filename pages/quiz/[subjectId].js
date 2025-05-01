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
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  // Track submitted state for multiple answer questions
  const [submittedQuestions, setSubmittedQuestions] = useState({});
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
    // For regular MC (single correct answer), just store the selected index and show feedback
    else {
      setAnswers({
        ...answers,
        [currentQuestionIndex]: optionIndex,
      });
    }
  };

  const handleNext = () => {
    // Move to next question or show results
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedLeftOption(null); // Reset selected left option for CMC2 questions
    } else {
      const finalScore = calculateScore();
      setScore(finalScore.score);
      setTotalQuestions(finalScore.total);
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    Object.keys(answers).forEach(key => {
      const question = questions[key];
      const userAnswer = answers[key];
      
      if (question.type === QUESTION_TYPES.MC) {
        // For multiple choice, direct comparison
        if (userAnswer === question.correctAnswer) {
          correct++;
        }
      } else if (question.type === QUESTION_TYPES.CMC1) {
        // For multiple answers, check if arrays match exactly (order doesn't matter)
        if (userAnswer && question.correctAnswers) {
          const sortedUser = [...userAnswer].sort();
          const sortedCorrect = [...question.correctAnswers].sort();
          if (sortedUser.length === sortedCorrect.length && 
              sortedUser.every((val, idx) => val === sortedCorrect[idx])) {
            correct++;
          }
        }
      } else if (question.type === QUESTION_TYPES.CMC2) {
        // For matching pairs, check each pair
        if (userAnswer && question.correctPairs) {
          const allCorrect = userAnswer.every(([leftIdx, rightIdx]) => {
            // Find if this left index has a matching correct right index
            return question.correctPairs.some(([correctLeft, correctRight]) => 
              leftIdx === correctLeft && rightIdx === correctRight
            );
          }) && userAnswer.length === question.correctPairs.length;
          
          if (allCorrect) {
            correct++;
          }
        }
      }
    });
    return { 
      score: correct, 
      total: questions.length,
      percentage: Math.round((correct / questions.length) * 100)
    };
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setShowResults(false);
    setScore(0);
    setSelectedLeftOption(null);
    setSubmittedQuestions({});
  };

  if (showResults) {
    const correctAnswers = Object.keys(answers).filter(key => {
      const question = questions[key];
      const userAnswer = answers[key];
      
      if (question.type === QUESTION_TYPES.MC) {
        return userAnswer === question.correctAnswer;
      } else if (question.type === QUESTION_TYPES.CMC1) {
        if (userAnswer && question.correctAnswers) {
          const sortedUser = [...userAnswer].sort();
          const sortedCorrect = [...question.correctAnswers].sort();
          return sortedUser.length === sortedCorrect.length && 
                 sortedUser.every((val, idx) => val === sortedCorrect[idx]);
        }
        return false;
      } else if (question.type === QUESTION_TYPES.CMC2) {
        if (userAnswer && question.correctPairs) {
          return userAnswer.every(([leftIdx, rightIdx]) => {
            return question.correctPairs.some(([correctLeft, correctRight]) => 
              leftIdx === correctLeft && rightIdx === correctRight
            );
          }) && userAnswer.length === question.correctPairs.length;
        }
        return false;
      }
      return false;
    }).length;
    
    // Save result to user
    if (user) {
      saveQuizResult(user.id, subjectId, score, totalQuestions);
    }
    
    // Determine message based on score
    let scoreMessage = '';
    const percentage = Math.round((score / totalQuestions) * 100);
    
    if (percentage >= 90) {
      scoreMessage = 'Luar Biasa! Kamu sangat menguasai materi ini!';
    } else if (percentage >= 75) {
      scoreMessage = 'Bagus Sekali! Kamu memahami sebagian besar materinya!';
    } else if (percentage >= 60) {
      scoreMessage = 'Cukup Baik! Teruslah berlatih untuk lebih baik lagi!';
    } else {
      scoreMessage = 'Jangan menyerah! Cobalah lagi untuk hasil yang lebih baik!';
    }
    
    // Select a confetti color based on score
    const confettiColor = percentage >= 75 ? 'from-green-500 to-blue-500' : 
                           percentage >= 50 ? 'from-yellow-500 to-orange-500' : 
                           'from-orange-500 to-red-500';
    
    return (
      <div className="min-h-screen bg-[var(--background)] py-8">
        <Head>
          <title>Hasil Quiz - {subject.name}</title>
        </Head>
        
        <div className="container mx-auto px-4">
          <div className="bg-[var(--card)] rounded-xl shadow-lg p-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className={`w-28 h-28 bg-gradient-to-r ${confettiColor} rounded-full mx-auto flex items-center justify-center mb-6`}>
                {percentage >= 60 ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="white" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="white" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
                  </svg>
                )}
              </div>
              
              <h2 className="text-3xl font-bold mb-2">{subject.name} - Hasil Quiz</h2>
              <p className="text-[var(--muted)] text-lg mb-6">{scoreMessage}</p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
                <div className="bg-[var(--card-foreground)] p-6 rounded-xl flex-1">
                  <div className="text-6xl font-bold text-[var(--primary)] mb-2">
                    {score}
                  </div>
                  <p className="text-[var(--muted)]">Jawaban Benar</p>
                </div>
                
                <div className="bg-[var(--card-foreground)] p-6 rounded-xl flex-1">
                  <div className="text-6xl font-bold text-[var(--foreground)] mb-2">
                    {totalQuestions}
                  </div>
                  <p className="text-[var(--muted)]">Total Pertanyaan</p>
                </div>
                
                <div className="bg-[var(--card-foreground)] p-6 rounded-xl flex-1">
                  <div className="text-6xl font-bold text-[var(--primary)] mb-2">
                    {percentage}%
                  </div>
                  <p className="text-[var(--muted)]">Persentase</p>
                </div>
              </div>
              
              <div className="space-y-4 sm:space-y-0 sm:flex sm:gap-4 justify-center">
                <button 
                  onClick={resetQuiz}
                  className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white rounded-xl font-bold transition-all shadow-md text-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="mr-2" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
                    <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
                  </svg>
                  Ulangi Quiz
                </button>
                
                <Link href="/dashboard" className="w-full sm:w-auto px-6 py-3 bg-[var(--card-foreground)] hover:bg-[var(--card-hover)] text-[var(--foreground)] rounded-xl font-bold transition-all shadow-md text-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="mr-2" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                  </svg>
                  Kembali ke Dashboard
                </Link>
              </div>
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
                {currentQuestion.options.map((option, index) => {
                  // Determine styling for regular MCQ
                  let buttonClass = "w-full text-left p-4 rounded-lg transition-colors flex items-center justify-between";
                  let isAnswered = answers[currentQuestionIndex] !== undefined;
                  let isCorrect = false;
                  let isSelected = false;
                  
                  if (currentQuestion.type === QUESTION_TYPES.MC) {
                    isSelected = answers[currentQuestionIndex] === index;
                    isCorrect = index === currentQuestion.correctAnswer;
                    
                    if (isAnswered) {
                      if (isSelected && isCorrect) {
                        // Selected and correct
                        buttonClass += " bg-green-100 border-2 border-green-500 text-green-800";
                      } else if (isSelected && !isCorrect) {
                        // Selected but wrong
                        buttonClass += " bg-red-100 border-2 border-red-500 text-red-800";
                      } else if (!isSelected && isCorrect) {
                        // Not selected but is correct answer
                        buttonClass += " bg-green-100 border-2 border-green-500 text-green-800";
                      } else {
                        // Not selected and not correct
                        buttonClass += " dark-card opacity-70";
                      }
                    } else {
                      // Not answered yet
                      buttonClass += " dark-card hover:bg-[var(--card-hover)]";
                    }
                  } else {
                    // For CMC1 (multiple answers)
                    isSelected = answers[currentQuestionIndex] && answers[currentQuestionIndex].includes(index);
                    const isSubmitted = submittedQuestions[currentQuestionIndex] === true;
                    
                    // Check if this option is a correct answer
                    const isCorrectOption = currentQuestion.correctAnswers && currentQuestion.correctAnswers.includes(index);
                    
                    if (isSubmitted) {
                      // After submission
                      if (isSelected && isCorrectOption) {
                        // Selected and correct
                        buttonClass += " bg-green-100 border-2 border-green-500 text-green-800";
                      } else if (isSelected && !isCorrectOption) {
                        // Selected but wrong
                        buttonClass += " bg-red-100 border-2 border-red-500 text-red-800";
                      } else if (!isSelected && isCorrectOption) {
                        // Not selected but is correct answer
                        buttonClass += " bg-green-100 border-2 border-green-500 text-green-800";
                      } else {
                        // Not selected and not correct
                        buttonClass += " dark-card opacity-70";
                      }
                    } else {
                      // Before submission
                      if (isSelected) {
                        buttonClass += " bg-[var(--primary)] text-white";
                      } else {
                        buttonClass += " dark-card hover:bg-[var(--card-hover)]";
                      }
                    }
                  }
                  
                  return (
                    <button
                      key={index}
                      onClick={() => handleAnswer(index)}
                      className={buttonClass}
                      disabled={isAnswered && currentQuestion.type === QUESTION_TYPES.MC}
                    >
                      <span>{option}</span>
                      {/* Show indicators for correct/incorrect answers */}
                      {(isAnswered && currentQuestion.type === QUESTION_TYPES.MC) || 
                       (submittedQuestions[currentQuestionIndex] && currentQuestion.type === QUESTION_TYPES.CMC1) ? (
                        <span className="ml-2">
                          {isCorrect || (currentQuestion.type === QUESTION_TYPES.CMC1 && Array.isArray(currentQuestion.correctAnswers) && currentQuestion.correctAnswers.includes(index) && isSelected) ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-green-600" viewBox="0 0 16 16">
                              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                              <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                            </svg>
                          ) : (isSelected && currentQuestion.type === QUESTION_TYPES.MC) || 
                             (currentQuestion.type === QUESTION_TYPES.CMC1 && isSelected && Array.isArray(currentQuestion.correctAnswers) && !currentQuestion.correctAnswers.includes(index)) ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-red-600" viewBox="0 0 16 16">
                              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                          ) : null}
                        </span>
                      ) : null }
                    </button>
                  );
                })}
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
          
          {/* Submit button for multiple answer questions */}
          {currentQuestion.type === QUESTION_TYPES.CMC1 && 
           answers[currentQuestionIndex] && 
           answers[currentQuestionIndex].length > 0 && 
           !submittedQuestions[currentQuestionIndex] && (
            <div className="mt-6">
              <button
                onClick={() => {
                  // Mark this question as submitted
                  setSubmittedQuestions({
                    ...submittedQuestions,
                    [currentQuestionIndex]: true
                  });
                }}
                className="py-3 px-5 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="mr-2" viewBox="0 0 16 16">
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                </svg>
                Periksa Jawaban
              </button>
            </div>
          )}

          <div className="flex justify-end">
            {/* Explanation section (displayed after answering a question) */}
            {(currentQuestion.type === QUESTION_TYPES.MC && answers[currentQuestionIndex] !== undefined) || 
             (currentQuestion.type === QUESTION_TYPES.CMC1 && submittedQuestions[currentQuestionIndex]) ? (
              <div className="mt-6 p-4 bg-blue-50 border-2 border-blue-100 rounded-lg">
                <h3 className="font-bold text-blue-800 mb-2">Penjelasan:</h3>
                {currentQuestion.explanation ? (
                  <p className="text-gray-700">{currentQuestion.explanation}</p>
                ) : (
                  currentQuestion.type === QUESTION_TYPES.MC ? (
                    <p className="text-gray-700">Jawaban yang benar adalah: <span className="font-bold">{currentQuestion.options[currentQuestion.correctAnswer]}</span></p>
                  ) : (
                    <div className="text-gray-700">
                      <p className="mb-2">Jawaban yang benar adalah:</p>
                      <ul className="list-disc pl-5">
                        {currentQuestion.correctAnswers.map((correctIndex, idx) => (
                          <li key={idx} className="mb-1 font-medium">{currentQuestion.options[correctIndex]}</li>
                        ))}
                      </ul>
                    </div>
                  )
                )}
              </div>
            ) : null}
            
            <button
              onClick={handleNext}
              disabled={answers[currentQuestionIndex] === undefined || 
                      (currentQuestion.type === QUESTION_TYPES.CMC1 && 
                       (!answers[currentQuestionIndex] || answers[currentQuestionIndex].length === 0)) ||
                      (currentQuestion.type === QUESTION_TYPES.CMC2 && 
                       (!answers[currentQuestionIndex] || answers[currentQuestionIndex].length === 0))}
              className={`mt-6 px-6 py-2 rounded-lg transition-opacity ${
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
