import React, { useState, useEffect, useRef } from 'react';
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
  const [randomizedQuestions, setRandomizedQuestions] = useState([]);
  // Track if review section is open
  const [showReview, setShowReview] = useState(false);
  // For CMC2 matching pairs questions - to track temporary UI state
  const [matchPairs, setMatchPairs] = useState({});
  
  // Utility function to shuffle an array (Fisher-Yates algorithm)
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };
  
  // Function to randomize all question types
  const randomizeQuestions = (questions) => {
    return questions.map(question => {
      const randomizedQuestion = { ...question };
      
      // For multiple choice (MC) questions
      if (question.type === QUESTION_TYPES.MC) {
        // Create a mapping to track the original indices
        const originalOptions = [...question.options];
        const randomOptions = shuffleArray(originalOptions);
        
        // Find where the correct answer is now
        const correctOption = originalOptions[question.correctAnswer];
        const newCorrectIndex = randomOptions.indexOf(correctOption);
        
        randomizedQuestion.options = randomOptions;
        randomizedQuestion.originalCorrectAnswer = question.correctAnswer;
        randomizedQuestion.correctAnswer = newCorrectIndex;
      }
      
      // For multiple answer (CMC1) questions
      else if (question.type === QUESTION_TYPES.CMC1) {
        const originalOptions = [...question.options];
        const randomOptions = shuffleArray(originalOptions);
        
        // Update correct answers indices, with safety check
        let correctAnswers = [];
        if (Array.isArray(question.correctAnswers)) {
          correctAnswers = question.correctAnswers.map(index => {
            const correctOption = originalOptions[index];
            return randomOptions.indexOf(correctOption);
          });
        }
        
        randomizedQuestion.options = randomOptions;
        randomizedQuestion.originalCorrectAnswers = question.correctAnswers;
        randomizedQuestion.correctAnswers = correctAnswers;
      }
      
      // For matching pairs (CMC2) questions
      else if (question.type === QUESTION_TYPES.CMC2) {
        // Store original options before shuffling
        const originalLeftOptions = [...question.leftOptions];
        const originalRightOptions = [...question.rightOptions];
        
        // Store the original options and create semantic pairs if not present
        randomizedQuestion.originalLeftOptions = originalLeftOptions;
        randomizedQuestion.originalRightOptions = originalRightOptions;
        
        // Create semantic pairs from the correctPairs indices if not already present
        if (!question.pairs) {
          randomizedQuestion.pairs = question.correctPairs.map(([leftIdx, rightIdx]) => ({
            left: originalLeftOptions[leftIdx],
            right: originalRightOptions[rightIdx]
          }));
        } else {
          randomizedQuestion.pairs = [...question.pairs]; // Copy the original pairs
        }
        
        // Shuffle both columns
        const shuffledLeftOptions = shuffleArray([...originalLeftOptions]);
        const shuffledRightOptions = shuffleArray([...originalRightOptions]);
        
        // Add to randomized question
        randomizedQuestion.leftOptions = shuffledLeftOptions;
        randomizedQuestion.rightOptions = shuffledRightOptions;
        
        // Create mappings to track shuffled indices
        randomizedQuestion.leftOriginalToRandom = {};
        randomizedQuestion.rightOriginalToRandom = {};
        randomizedQuestion.leftRandomToOriginal = {};
        randomizedQuestion.rightRandomToOriginal = {};
        
        // Map original indices to randomized indices
        originalLeftOptions.forEach((item, originalIndex) => {
          const newIndex = shuffledLeftOptions.indexOf(item);
          randomizedQuestion.leftOriginalToRandom[originalIndex] = newIndex;
          randomizedQuestion.leftRandomToOriginal[newIndex] = originalIndex;
        });
        
        originalRightOptions.forEach((item, originalIndex) => {
          const newIndex = shuffledRightOptions.indexOf(item);
          randomizedQuestion.rightOriginalToRandom[originalIndex] = newIndex;
          randomizedQuestion.rightRandomToOriginal[newIndex] = originalIndex;
        });
        
        // Store the original correctPairs for reference
        randomizedQuestion.originalCorrectPairs = question.correctPairs;
        
        // Updated correct pairs with the new shuffled indices
        const updatedCorrectPairs = question.correctPairs.map(pair => {
          const [leftOriginalIndex, rightOriginalIndex] = pair;
          const leftNewIndex = randomizedQuestion.leftOriginalToRandom[leftOriginalIndex];
          const rightNewIndex = randomizedQuestion.rightOriginalToRandom[rightOriginalIndex];
          return [leftNewIndex, rightNewIndex];
        });
        
        randomizedQuestion.correctPairs = updatedCorrectPairs;
      }
      
      return randomizedQuestion;
    });
  };
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

  // Get questions from data
  const originalQuestions = getQuestions(subjectId);
  
  // Initialize randomized questions when component mounts
  // Using a ref to track initialization
  const initialized = useRef(false);
  
  useEffect(() => {
    // Always run once, with proper dependency handling
    if (!initialized.current) {
      const randomized = randomizeQuestions(originalQuestions || []);
      setRandomizedQuestions(randomized);
      initialized.current = true;
    }
  }, []);

  if (!subject) {
    return <div className="min-h-screen bg-[var(--background)] py-8 flex items-center justify-center">Mata pelajaran tidak ditemukan</div>;
  }

  if (!originalQuestions || originalQuestions.length === 0) {
    return <div className="min-h-screen bg-[var(--background)] py-8 flex items-center justify-center">Pertanyaan tidak tersedia</div>;
  }

  // Ensure we have randomized questions before rendering the main content
  if (originalQuestions && originalQuestions.length > 0 && randomizedQuestions.length === 0) {
    return <div className="min-h-screen bg-[var(--background)] py-8 flex items-center justify-center">Memuat pertanyaan...</div>;
  }

  const currentQuestion = randomizedQuestions[currentQuestionIndex];

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
    // If at the last question, show results
    if (currentQuestionIndex === randomizedQuestions.length - 1) {
      const scoreData = getCorrectAnswers();
      setScore(scoreData.score);
      setTotalQuestions(scoreData.total);
      setShowResults(true);
      return;
    }
    
    // Otherwise go to next question
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setSelectedLeftOption(null);
  };
  
  // Calculate score with flexible scoring system
  const getCorrectAnswers = () => {
    // Initialize scoring data
    let totalScore = 0;
    const questionScores = {};
    const questionFeedback = {};
    
    // Calculate score for each answered question
    Object.keys(answers).forEach(key => {
      const questionIndex = parseInt(key);
      const question = randomizedQuestions[questionIndex];
      const userAnswer = answers[key];
      let questionScore = 0;
      
      // Generate unique key for score data
      const scoreKey = `q-${questionIndex}`;
      
      // Feedback object to store detailed information
      const feedback = {
        userAnswer: userAnswer,
        isCorrect: false,
        partiallyCorrect: false
      };
      
      if (question.type === QUESTION_TYPES.MC) {
        // For standard multiple choice
        if (userAnswer !== undefined) {
          feedback.correctAnswer = question.correctAnswer;
          
          // Check if answer is correct
          if (userAnswer === question.correctAnswer) {
            questionScore = 1;
            feedback.isCorrect = true;
          } else {
            questionScore = 0;
            feedback.isCorrect = false;
          }
        }
      } 
      
      else if (question.type === QUESTION_TYPES.CMC1) {
        // For multiple answer questions
        if (userAnswer && Array.isArray(userAnswer)) {
          feedback.correctAnswer = question.correctAnswers;
          feedback.answerStatus = [];
          
          // Get detailed feedback for each option
          question.options.forEach((option, idx) => {
            // Determine if answer is mentioned in the explanation as a correct answer
            // This allows us to override the automatic answer check with the explanation text
            const explanationText = question.explanation || '';
            const optionText = option.toLowerCase();
            const isCorrectInExplanation = explanationText.toLowerCase().includes(optionText) && 
              // Check that it's a positive mention (not saying "X is not a correct answer")
              !explanationText.toLowerCase().includes(`${optionText} bukan`) &&
              !explanationText.toLowerCase().includes(`bukan ${optionText}`);
            
            // Either use the explanation override or fallback to the default correct answers
            const isMarkedCorrect = question.correctAnswers && question.correctAnswers.includes(idx);
            const isReallyCorrect = isCorrectInExplanation || isMarkedCorrect;
            const isSelected = userAnswer.includes(idx);
            
            feedback.answerStatus.push({
              option,
              index: idx,
              isCorrectOption: isReallyCorrect,  // Whether this option is a correct answer
              isSelected,                        // Whether the user selected this option
              isCorrect: (isReallyCorrect && isSelected) || (!isReallyCorrect && !isSelected)
            });
          });
          
          // Recalculate correctAnswers based on explanation text
          const correctedAnswers = feedback.answerStatus
            .filter(status => status.isCorrectOption)
            .map(status => status.index);
            
          feedback.correctedAnswers = correctedAnswers;
          
          // Count correct selections (the ones that should be selected and were)
          const correctSelected = userAnswer.filter(ans => 
            correctedAnswers.includes(ans)).length;
          
          // Count incorrect selections (selected options that aren't correct)
          const incorrectSelected = userAnswer.filter(ans => 
            !correctedAnswers.includes(ans)).length;
          
          // Count correct options that weren't selected (missed correct answers)
          const missedCorrect = correctedAnswers.filter(ans => 
            !userAnswer.includes(ans)).length;
          
          // Calculate score based on correct and incorrect selections
          if (correctSelected === correctedAnswers.length && incorrectSelected === 0) {
            // All correct answers selected and no wrong ones
            questionScore = 1;
            feedback.isCorrect = true;
          } else {
            // Get points for each correct selection
            const correctPoints = correctSelected === correctedAnswers.length ? 
                                 1 : (correctSelected / correctedAnswers.length);
            
            // Deduct points for each incorrect selection proportionally
            // but don't let it go below a minimum threshold if some answers are correct
            const penalty = (incorrectSelected > 0) ? 
                           (incorrectSelected / (question.options.length - correctedAnswers.length)) * 0.5 : 0;
            
            // Calculate final score
            questionScore = Math.max(0, correctPoints - penalty);
            
            if (correctSelected > 0) {
              feedback.isCorrect = false;
              feedback.partiallyCorrect = true;
            } else {
              feedback.isCorrect = false;
              feedback.partiallyCorrect = false;
            }
          }
        }
      } 
      
      else if (question.type === QUESTION_TYPES.CMC2) {
        // For matching pairs, with partial credit
        if (userAnswer && question.correctPairs) {
          feedback.correctAnswer = question.correctPairs;
          
          // Count correct pairs
          const correctPairs = userAnswer.filter(([leftIdx, rightIdx]) => 
            question.correctPairs.some(([correctLeft, correctRight]) => 
              leftIdx === correctLeft && rightIdx === correctRight
            )
          ).length;
          
          // Calculate partial score
          if (correctPairs === question.correctPairs.length) {
            // All pairs matched correctly
            questionScore = 1;
            feedback.isCorrect = true;
          } else if (correctPairs > 0) {
            // Some pairs matched correctly
            questionScore = correctPairs / question.correctPairs.length;
            feedback.isCorrect = false;
            feedback.partiallyCorrect = true;
          } else {
            // No pairs matched correctly
            questionScore = 0;
            feedback.isCorrect = false;
          }
        }
      }
      
      // Ensure score is never negative
      questionScore = Math.max(0, questionScore);
      totalScore += questionScore;
      questionScores[key] = questionScore;
      questionFeedback[key] = feedback;
    });
    
    return {
      score: Math.round(totalScore * 10) / 10, // Round to 1 decimal place
      total: randomizedQuestions.length,
      percentage: Math.round((totalScore / randomizedQuestions.length) * 100),
      questionScores: questionScores,
      questionFeedback: questionFeedback
    };
  };

  const resetQuiz = () => {
    // Reset all state
    setCurrentQuestionIndex(0);
    setAnswers({});
    setShowResults(false);
    setScore(0);
    setSelectedLeftOption(null);
    setSubmittedQuestions({});
    
    // Re-randomize questions for a fresh experience
    const randomized = randomizeQuestions(originalQuestions || []);
    setRandomizedQuestions(randomized);
  };

  if (showResults) {
    // Get detailed scoring data
    const scoreData = getCorrectAnswers();
    const percentage = scoreData.percentage;
    
    // Save result to user with detailed information
    if (user) {
      saveQuizResult(subject.id, scoreData.score, answers, scoreData.questionFeedback, randomizedQuestions.length);
    }
    
    // Determine message based on score
    let scoreMessage = '';
    
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
          <div className="bg-[var(--card)] rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
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
                    {scoreData.score}
                  </div>
                  <p className="text-[var(--muted)]">Skor Akhir</p>
                </div>
                
                <div className="bg-[var(--card-foreground)] p-6 rounded-xl flex-1">
                  <div className="text-6xl font-bold text-[var(--foreground)] mb-2">
                    {scoreData.total}
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
              
              {/* Review Section */}
              {showReview && (
                <div className="mt-8 space-y-6">
                  <h3 className="text-2xl font-bold mb-4 border-b pb-2">Ulasan Jawaban</h3>
                  
                  {randomizedQuestions.map((question, qIndex) => {
                    const key = `q-${qIndex}`;
                    const feedback = scoreData.questionFeedback[key];
                    const userScore = scoreData.questionScores[key];
                    
                    // Skip questions with no feedback
                    if (!feedback) return null;
                    
                    // Determine color based on score
                    let scoreColor = "text-red-500";
                    if (userScore === 1) scoreColor = "text-green-500";
                    else if (userScore > 0) scoreColor = "text-yellow-500";
                    
                    return (
                      <div key={key} className={`bg-[var(--card-foreground)] rounded-xl p-6 ${userScore === 1 ? 'border-l-4 border-green-500' : userScore > 0 ? 'border-l-4 border-yellow-500' : 'border-l-4 border-red-500'}`}>
                        <div className="flex justify-between items-start">
                          <h4 className="text-lg font-semibold">Pertanyaan {qIndex + 1}</h4>
                          <div className="font-bold text-lg">
                            <span className={scoreColor}>Skor: {userScore}</span>
                            {userScore === 1 ? (
                              <span className="ml-2 text-green-500">✓</span>
                            ) : userScore === 0 ? (
                              <span className="ml-2 text-red-500">✗</span>
                            ) : (
                              <span className="ml-2 text-yellow-500">⚠</span>
                            )}
                          </div>
                        </div>
                        
                        <p className="text-[var(--foreground)] text-lg mt-3 mb-4 font-medium">{question.text || question.question}</p>
                        
                        {/* DISPLAY FOR MC QUESTIONS (SINGLE ANSWER) */}
                        {question.type === QUESTION_TYPES.MC && (
                          <div className="mt-4 space-y-2">
                            <p className="font-medium mb-2">Ulasan Jawaban:</p>
                            <div className="flex items-center">
                              <div className="w-1/2 pr-4">
                                <p className="font-medium mb-1">Jawaban Kamu:</p>
                                <div className={`p-3 rounded-lg ${feedback.isCorrect ? 'bg-green-100 border border-green-300' : 'bg-red-100 border border-red-300'}`}>
                                  {question.options[answers[qIndex]]} 
                                  {feedback.isCorrect ? 
                                    <span className="ml-2 text-green-600">✓</span> : 
                                    <span className="ml-2 text-red-600">✗</span>}
                                </div>
                              </div>
                              
                              {!feedback.isCorrect && (
                                <div className="w-1/2 pl-4">
                                  <p className="font-medium mb-1">Jawaban Benar:</p>
                                  <div className="p-3 bg-green-100 border border-green-300 rounded-lg">
                                    {question.options[question.correctAnswer]} 
                                    <span className="ml-2 text-green-600">✓</span>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                        
                        {/* DISPLAY FOR CMC1 QUESTIONS (MULTIPLE ANSWERS) */}
                        {question.type === QUESTION_TYPES.CMC1 && (
                          <div className="mt-4">
                            <p className="font-medium mb-2">Ulasan Jawaban:</p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <p className="font-medium mb-1">Jawaban Kamu:</p>
                                <ul className="list-disc pl-5 space-y-1">
                                  {feedback.answerStatus && feedback.answerStatus
                                    .filter(status => status.isSelected)
                                    .map((status, idx) => (
                                      <li key={idx} className={`${status.isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                                        {status.option}
                                        {status.isCorrect ? 
                                          <span className="ml-2 text-green-600">✓</span> : 
                                          <span className="ml-2 text-red-600">✗</span>}
                                      </li>
                                  ))}
                                  {feedback.answerStatus && 
                                   feedback.answerStatus.filter(status => status.isSelected).length === 0 && (
                                    <li className="text-gray-500">Tidak ada jawaban yang dipilih</li>
                                  )}
                                </ul>
                              </div>
                              
                              <div>
                                <p className="font-medium mb-1">Jawaban Benar:</p>
                                <ul className="list-disc pl-5 space-y-1">
                                  {feedback.answerStatus && feedback.answerStatus
                                    .filter(status => status.isCorrectOption)
                                    .map((status, idx) => (
                                      <li key={idx} className="text-green-600">
                                        {status.option}
                                        <span className="ml-2 text-green-600">✓</span>
                                      </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        )}
                        
                        {/* DISPLAY FOR CMC2 QUESTIONS (MATCHING PAIRS) */}
                        {question.type === QUESTION_TYPES.CMC2 && (
                          <div className="mt-4">
                            <p className="font-medium mb-2">Ulasan Jawaban:</p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <p className="font-medium mb-1">Jawaban Kamu:</p>
                                <ul className="space-y-2 list-none">
                                  {answers[qIndex] && answers[qIndex].map(([leftIdx, rightIdx], idx) => {
                                    const isCorrectPair = question.correctPairs && question.correctPairs.some(
                                      ([correctLeft, correctRight]) => 
                                        leftIdx === correctLeft && rightIdx === correctRight
                                    );
                                    
                                    return (
                                      <li key={idx} className={`flex items-center ${isCorrectPair ? 'text-green-600' : 'text-red-600'}`}>
                                        <span>{question.leftColumn && question.leftColumn[leftIdx]} ⟹ {question.rightColumn && question.rightColumn[rightIdx]}</span>
                                        {isCorrectPair ? 
                                          <span className="ml-2 text-green-600">✓</span> : 
                                          <span className="ml-2 text-red-600">✗</span>}
                                      </li>
                                    );
                                  })}
                                  {(!answers[qIndex] || answers[qIndex].length === 0) && (
                                    <li className="text-gray-500">Tidak ada jawaban yang dipilih</li>
                                  )}
                                </ul>
                              </div>
                              
                              <div>
                                <p className="font-medium mb-1">Jawaban Benar:</p>
                                <ul className="space-y-2 list-none">
                                  {question.correctPairs && question.correctPairs.map(([leftIdx, rightIdx], idx) => (
                                    <li key={idx} className="text-green-600 flex items-center">
                                      <span>{question.leftColumn && question.leftColumn[leftIdx]} ⟹ {question.rightColumn && question.rightColumn[rightIdx]}</span>
                                      <span className="ml-2 text-green-600">✓</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        )}
                        
                        {/* Explanation section */}
                        {question.explanation && (
                          <div className="mt-4 p-4 bg-blue-50 border border-blue-100 rounded-lg">
                            <p className="font-medium text-blue-800 mb-1">Penjelasan:</p>
                            <p className="text-gray-700">{question.explanation}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
              
              {/* Toggle review section button */}
              <button
                onClick={() => setShowReview(!showReview)}
                className="w-full mb-6 px-6 py-3 bg-blue-100 hover:bg-blue-200 text-blue-800 rounded-xl font-bold transition-all text-lg flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="mr-2" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
                </svg>
                {showReview ? 'Sembunyikan Ulasan' : 'Lihat Ulasan Detail'}
              </button>
              
              {/* Detailed review section */}
              {showReview && (
                <div className="mb-8 border-2 border-gray-200 rounded-xl p-4">
                  <h3 className="text-xl font-bold mb-4">Ulasan Jawaban</h3>
                  
                  <div className="space-y-6">
                    {randomizedQuestions.map((question, index) => {
                      const feedback = scoreData.questionFeedback[index];
                      const questionScore = scoreData.questionScores[index] || 0;
                      
                      if (!feedback) return null;
                      
                      // Determine the status color and text color
                      const statusColor = feedback.isCorrect ? 'bg-green-100 border-green-500' : 
                                         feedback.partiallyCorrect ? 'bg-yellow-100 border-yellow-500' : 
                                         'bg-red-100 border-red-500';
                      const textColor = 'text-gray-800';
                      
                      // Different display formats based on question type
                      if (question.type === QUESTION_TYPES.MC) {
                        // Nothing to change for standard multiple choice - will use separate format below
                      } 
                      else if (question.type === QUESTION_TYPES.CMC1) {
                        // Multiple answer questions use the answerStatus for display
                      }
                      else if (question.type === QUESTION_TYPES.CMC2) {
                        if (feedback.userAnswer && Array.isArray(feedback.userAnswer)) {
                          const matchingsDisplay = feedback.userAnswer.map(pair => 
                            `${question.leftOptions[pair[0]]} ↔ ${question.rightOptions[pair[1]]}`
                          ).join(', ');
                        } else {
                          const matchingsDisplay = 'Tidak dijawab';
                        }
                        const correctMatchingsDisplay = question.correctPairs.map(pair => 
                          `${question.leftOptions[pair[0]]} ↔ ${question.rightOptions[pair[1]]}`
                        ).join(', ');
                      }
                      
                      return (
                        <div key={index} className={`border-2 ${statusColor} rounded-lg p-4 ${textColor}`}>
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="text-lg font-semibold text-gray-900">Pertanyaan {index + 1}</h4>
                            <div className="flex items-center">
                              <span className="font-bold mr-2 text-gray-900">Skor: {questionScore}</span>
                              {feedback.isCorrect ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-green-700" viewBox="0 0 16 16">
                                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                  <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                                </svg>
                              ) : feedback.partiallyCorrect ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-yellow-700" viewBox="0 0 16 16">
                                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                  <path d="M8 4.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5zm0 9a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z"/>
                                </svg>
                              ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-red-700" viewBox="0 0 16 16">
                                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                              )}
                            </div>
                          </div>
                          
                          <p className="mb-3 text-gray-900">{question.question}</p>
                          
                          <div className="bg-white bg-opacity-90 p-3 rounded border border-gray-200 mb-3">
                            <h5 className="font-medium text-gray-900 mb-2">Ulasan Jawaban:</h5>
                            
                            {question.type === QUESTION_TYPES.MC && (
                              <div className="space-y-2">
                                {question.options.map((option, idx) => {
                                  const isSelected = feedback.userAnswer === idx;
                                  const isCorrect = idx === question.correctAnswer;
                                  let itemClass = "p-2 rounded flex items-center justify-between";
                                  let statusIcon = null;
                                  
                                  if (isSelected && isCorrect) {
                                    // Selected and correct
                                    itemClass += " bg-green-100 border border-green-500";
                                    statusIcon = (
                                      <span className="flex items-center text-green-800">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" className="mr-1">
                                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                          <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                                        </svg>
                                        Jawaban Kamu (Benar)
                                      </span>
                                    );
                                  } else if (isSelected && !isCorrect) {
                                    // Selected but wrong
                                    itemClass += " bg-red-100 border border-red-500";
                                    statusIcon = (
                                      <span className="flex items-center text-red-800">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" className="mr-1">
                                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                        </svg>
                                        Jawaban Kamu (Salah)
                                      </span>
                                    );
                                  } else if (!isSelected && isCorrect) {
                                    // Not selected but is correct answer
                                    itemClass += " bg-green-50 border border-green-300";
                                    statusIcon = (
                                      <span className="flex items-center text-green-800">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" className="mr-1">
                                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                          <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                                        </svg>
                                        Jawaban Benar
                                      </span>
                                    );
                                  }
                                  
                                  return (
                                    <div key={idx} className={itemClass}>
                                      <span className="text-gray-900">{option}</span>
                                      {statusIcon}
                                    </div>
                                  );
                                })}
                              </div>
                            )}
                            
                            {question.type === QUESTION_TYPES.CMC1 && feedback.answerStatus && (
                              <div className="space-y-2">
                                {feedback.answerStatus.map((status, idx) => {
                                  let itemClass = "p-2 rounded flex items-center justify-between";
                                  let statusIcon = null;
                                  
                                  // Determine if answer is mentioned in the explanation as a correct answer
                                  // This allows us to override the automatic answer check with the explanation text
                                  const explanationText = question.explanation || '';
                                  const optionText = status.option.toLowerCase();
                                  const isCorrectInExplanation = explanationText.toLowerCase().includes(optionText) && 
                                    // Check that it's a positive mention (not saying "X is not a correct answer")
                                    !explanationText.toLowerCase().includes(`${optionText} bukan`) &&
                                    !explanationText.toLowerCase().includes(`bukan ${optionText}`);
                                  
                                  // Either use the explanation override or fallback to the default correct answers
                                  const isReallyCorrectOption = isCorrectInExplanation || status.isCorrectOption;
                                    
                                  if (status.isSelected && isReallyCorrectOption) {
                                    // Selected and correct (should be selected and was selected)
                                    itemClass += " bg-green-100 border border-green-500";
                                    statusIcon = (
                                      <span className="flex items-center text-green-800">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" className="mr-1">
                                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                          <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                                        </svg>
                                        Jawaban Benar
                                      </span>
                                    );
                                  } else if (status.isSelected && !isReallyCorrectOption) {
                                    // Selected but wrong (shouldn't be selected but was selected)
                                    itemClass += " bg-red-100 border border-red-500";
                                    statusIcon = (
                                      <span className="flex items-center text-red-800">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" className="mr-1">
                                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                        </svg>
                                        Jawaban Salah
                                      </span>
                                    );
                                  } else if (!status.isSelected && isReallyCorrectOption) {
                                    // Not selected but should be (should be selected but wasn't)
                                    itemClass += " bg-yellow-100 border border-yellow-500";
                                    statusIcon = (
                                      <span className="flex items-center text-yellow-800">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" className="mr-1">
                                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                          <path d="M8 4.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5zm0 9a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z"/>
                                        </svg>
                                        Seharusnya Dipilih
                                      </span>
                                    );
                                  } else if (!status.isSelected && !isReallyCorrectOption) {
                                    // Correctly not selected (shouldn't be selected and wasn't)
                                    itemClass += " bg-gray-50 border border-gray-200";
                                    statusIcon = (
                                      <span className="flex items-center text-gray-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" className="mr-1">
                                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                          <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                                        </svg>
                                        Benar Tidak Dipilih
                                      </span>
                                    );
                                  }
                                  
                                  return (
                                    <div key={idx} className={itemClass}>
                                      <span className="text-gray-900">{status.option}</span>
                                      {statusIcon}
                                    </div>
                                  );
                                })}
                              </div>
                            )}
                            
                            {question.type === QUESTION_TYPES.CMC2 && (
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                  <h6 className="font-medium text-gray-900 mb-1">Jawaban Kamu:</h6>
                                  {feedback.userAnswer && Array.isArray(feedback.userAnswer) && feedback.userAnswer.length > 0 ? (
                                    <ul className="list-disc pl-5 space-y-1">
                                      {feedback.userAnswer.map((pair, idx) => (
                                        <li key={idx}>
                                          {question.leftOptions[pair[0]]} ⟹ {question.rightOptions[pair[1]]}
                                        </li>
                                      ))}
                                    </ul>
                                  ) : (
                                    <p className="text-red-800">Tidak dijawab</p>
                                  )}
                                </div>
                                
                                <div>
                                  <h6 className="font-medium text-gray-900 mb-1">Jawaban Benar:</h6>
                                  <ul className="list-disc pl-5 space-y-1">
                                    {/* If we have pairs array in the original format, use that for review */}
                                    {question.pairs ? (
                                      // Use the original semantic pairs (not indices)
                                      question.pairs.map((pair, idx) => (
                                        <li key={idx} className="text-green-800">
                                          {pair.left} ⟹ {pair.right}
                                        </li>
                                      ))
                                    ) : (
                                      // Fallback to index-based if pairs not available
                                      question.correctPairs && question.correctPairs.map((pair, idx) => (
                                        <li key={idx}>
                                          {question.leftOptions[pair[0]]} ⟹ {question.rightOptions[pair[1]]}
                                        </li>
                                      ))
                                    )}
                                  </ul>
                                </div>
                              </div>
                            )}
                          </div>
                          
                          {feedback.explanation && (
                            <div className="mt-2 bg-white p-3 rounded border border-gray-200">
                              <h5 className="font-medium text-gray-900">Penjelasan:</h5>
                              <p className="text-gray-800">{feedback.explanation}</p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
              
              <div className="space-y-4 sm:space-y-0 sm:flex sm:gap-4 justify-center">
                <button 
                  onClick={resetQuiz}
                  className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white rounded-xl font-bold transition-all shadow-md text-lg flex items-center justify-center"
                >
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
              Pertanyaan {currentQuestionIndex + 1} dari {randomizedQuestions.length}
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
                <div className="flex-1">
                  <h3 className="font-bold text-gray-600 mb-3 text-center">Kolom A</h3>
                  {currentQuestion.leftOptions.map((option, index) => {
                    // Check if this option has already been matched (moved outside the onClick)
                    const isAlreadyMatched = answers[currentQuestionIndex] && 
                      answers[currentQuestionIndex].some(pair => pair[0] === index);
                    
                    return (
                      <button
                        key={index}
                        onClick={() => {
                          if (!isAlreadyMatched) {
                            // Store selected left option in matchPairs
                            setMatchPairs({
                              ...matchPairs,
                              [currentQuestionIndex]: {
                                ...matchPairs[currentQuestionIndex],
                                left: index
                              }
                            });
                          }
                        }}
                        className={`p-4 border-2 rounded-lg transition-all ${isAlreadyMatched ? 'bg-green-50 border-green-300 cursor-not-allowed' : 'cursor-pointer hover:border-blue-400'} ${
                          matchPairs[currentQuestionIndex]?.left === index ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                        }`}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
                
                {/* Right column */}
                <div className="flex-1">
                  <h3 className="font-bold text-gray-600 mb-3 text-center">Kolom B</h3>
                  {currentQuestion.rightOptions.map((option, index) => {
                    // Check if this option has already been matched (moved outside onClick)
                    const isAlreadyMatched = answers[currentQuestionIndex] && 
                      answers[currentQuestionIndex].some(pair => pair[1] === index);
                    
                    const selectedLeft = matchPairs[currentQuestionIndex]?.left;
                    
                    return (
                      <button
                        key={index}
                        onClick={() => {
                          if (!isAlreadyMatched && selectedLeft !== undefined) {
                            // Add the pair to answers
                            const currentPairs = answers[currentQuestionIndex] || [];
                            
                            // Add the new pair
                            const updatedPairs = [...currentPairs, [selectedLeft, index]];
                            
                            // Update answers
                            setAnswers({
                              ...answers,
                              [currentQuestionIndex]: updatedPairs,
                            });
                            
                            // Reset temporary selection
                            setMatchPairs({
                              ...matchPairs,
                              [currentQuestionIndex]: {}
                            });
                          }
                        }}
                        className={`p-4 border-2 rounded-lg transition-all ${isAlreadyMatched ? 'bg-green-50 border-green-300 cursor-not-allowed' : 'cursor-pointer hover:border-blue-400'} ${
                          matchPairs[currentQuestionIndex]?.right === index ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                        }`}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
            
            {/* Show current pairing status for CMC2 */}
            {currentQuestion.type === QUESTION_TYPES.CMC2 && answers[currentQuestionIndex] && (
              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <h3 className="font-bold text-green-800 mb-2">Pasangan yang cocok:</h3>
                <ul className="list-disc pl-6">
                  {answers[currentQuestionIndex].map((match, idx) => {
                    const [leftIndex, rightIndex] = match;
                    return (
                      <li key={idx} className="text-gray-700">
                        <span className="font-medium">{currentQuestion.leftOptions[leftIndex]}</span> — <span className="font-medium">{currentQuestion.rightOptions[rightIndex]}</span>
                      </li>
                    );
                  })}
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
          
          <div className="flex justify-end">
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
              {currentQuestionIndex === randomizedQuestions.length - 1 ? 'Selesai' : 'Selanjutnya'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
