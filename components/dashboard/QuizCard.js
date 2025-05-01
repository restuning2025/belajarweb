import React, { useState, useEffect } from 'react';
import MotivationalPopup from './MotivationalPopup';

export default function QuizCard({ question, onComplete }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showMotivation, setShowMotivation] = useState(false);
  const [motivationMessage, setMotivationMessage] = useState('');
  const [randomizedOptions, setRandomizedOptions] = useState([]);
  const [originalToRandomMap, setOriginalToRandomMap] = useState({});
  const [randomToOriginalMap, setRandomToOriginalMap] = useState({});
  
  // Randomize answer choices when component mounts or question changes
  useEffect(() => {
    if (question && question.options) {
      randomizeOptions();
    }
  }, [question]);
  
  // Function to randomize the options
  const randomizeOptions = () => {
    // Create a copy of the original options
    const originalOptions = [...question.options];
    const randomized = [];
    const originalToRandom = {};
    const randomToOriginal = {};
    
    // Build the randomized array and mapping
    while (originalOptions.length > 0) {
      const randomIndex = Math.floor(Math.random() * originalOptions.length);
      const originalIndex = question.options.indexOf(originalOptions[randomIndex]);
      const newIndex = randomized.length;
      
      // Add to randomized array
      randomized.push(originalOptions[randomIndex]);
      
      // Build mappings between original and randomized indices
      originalToRandom[originalIndex] = newIndex;
      randomToOriginal[newIndex] = originalIndex;
      
      // Remove the selected option from the original array
      originalOptions.splice(randomIndex, 1);
    }
    
    setRandomizedOptions(randomized);
    setOriginalToRandomMap(originalToRandom);
    setRandomToOriginalMap(randomToOriginal);
  };
  
  // Handle option selection
  const handleSelectOption = (randomIndex) => {
    if (isAnswered) return; // Prevent changing answers after submission
    
    // Convert randomized index back to original index
    const originalIndex = randomToOriginalMap[randomIndex];
    
    setSelectedOption(randomIndex);
    setIsAnswered(true);
    
    // Check if correct answer using the original index
    const correct = originalIndex === question.correctAnswer;
    setIsCorrect(correct);
    
    // Show motivational message
    if (correct) {
      setMotivationMessage('Hebat! Jawaban kamu benar! 🎉');
      setShowMotivation(true);
    } else {
      setMotivationMessage('Belum tepat, jawabannya akan ditunjukkan! 💪');
      setShowMotivation(true);
    }
    
    // Delay the notification to onComplete to allow animation to play
    setTimeout(() => {
      if (onComplete) {
        onComplete(correct);
      }
    }, 1500);
  };
  
  // Get the randomized index of the correct answer
  const getRandomizedCorrectIndex = () => {
    if (!Object.keys(originalToRandomMap).length) return null;
    return originalToRandomMap[question.correctAnswer];
  };
  
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all transform hover:shadow-xl">
      {/* Question Header */}
      <div className="bg-gradient-to-r from-purple-500 to-indigo-500 p-6">
        <h3 className="text-2xl font-bold text-white">{question.subject || 'Pertanyaan'}</h3>
        <div className="flex items-center mt-2">
          <span className="bg-white/20 text-white text-sm px-3 py-1 rounded-full mr-3">
            {question.topic || 'Topik'}
          </span>
          <span className="bg-white/20 text-white text-sm px-3 py-1 rounded-full">
            {question.difficulty || 'Mudah'}
          </span>
        </div>
      </div>
      
      {/* Question Content */}
      <div className="p-6">
        <div className="mb-8">
          <div className="text-2xl font-bold text-gray-800 mb-4 flex items-start">
            <span className="bg-indigo-100 text-indigo-600 rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
              ?
            </span>
            <span>{question.question}</span>
          </div>
          
          {question.imageUrl && (
            <div className="mt-5 flex justify-center">
              <img 
                src={question.imageUrl} 
                alt="Quiz Question" 
                className="max-w-full h-auto rounded-xl shadow-md" 
                style={{ maxHeight: '200px' }}
              />
            </div>
          )}
        </div>
        
        {/* Options */}
        <div className="space-y-4">
          {randomizedOptions.map((option, randomIndex) => {
            // Get original index for checking correct answer
            const originalIndex = randomToOriginalMap[randomIndex];
            
            // Determine styling based on selection and correctness
            let optionClass = "p-5 border-3 rounded-2xl transition-all flex items-center quiz-option";
            
            if (isAnswered) {
              // After answering, apply specific styles
              if (selectedOption === randomIndex) {
                // This is the user's selected option
                optionClass += " quiz-option-locked";
                if (originalIndex === question.correctAnswer) {
                  // User selected correct answer
                  optionClass += " quiz-option-correct bg-green-100 border-green-500";
                } else {
                  // User selected wrong answer
                  optionClass += " quiz-option-incorrect bg-red-100 border-red-500";
                }
              } else {
                // All other options after answering
                if (originalIndex === question.correctAnswer) {
                  // Highlight correct answer (even if not selected)
                  optionClass += " quiz-option-correct bg-green-100 border-green-500";
                } else {
                  // Regular unselected option
                  optionClass += " border-gray-200 opacity-70";
                }
              }
            } else {
              // Before answering, apply hover styles
              optionClass += " border-gray-200 hover:border-indigo-400 hover:bg-indigo-50 cursor-pointer";
            }
            
            return (
              <div
                key={randomIndex}
                className={optionClass}
                onClick={() => handleSelectOption(randomIndex)}
              >
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mr-4 flex-shrink-0 text-xl font-bold text-indigo-700">
                  {String.fromCharCode(65 + randomIndex)}
                </div>
                <span className="flex-1 text-lg">{option}</span>
                
                {isAnswered && (
                  <div className="ml-3">
                    {originalIndex === question.correctAnswer ? (
                      <span className="text-green-500 text-3xl">✓</span>
                    ) : selectedOption === randomIndex ? (
                      <span className="text-red-500 text-3xl">✗</span>
                    ) : null}
                  </div>
                )}
              </div>
            );
          })}
        </div>
        
        {/* Explanation (shown after answering) */}
        {isAnswered && (
          <div className="mt-8 p-5 bg-indigo-50 rounded-xl border-2 border-indigo-100">
            <p className="font-bold text-indigo-700 mb-2 text-lg">Penjelasan:</p>
            {question.explanation ? (
              <p className="text-gray-700 text-lg">{question.explanation}</p>
            ) : (
              <p className="text-gray-700 text-lg">Jawaban yang benar adalah: <span className="font-bold">{question.options[question.correctAnswer]}</span></p>
            )}
          </div>
        )}
        
        {/* Navigation Buttons */}
        <div className="mt-8 flex justify-between">
          <button className="px-6 py-3 bg-gray-200 hover:bg-gray-300 rounded-xl font-bold transition-colors text-lg">
            ← Sebelumnya
          </button>
          <button className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white rounded-xl font-bold transition-colors text-lg shadow-md">
            Selanjutnya →
          </button>
        </div>
      </div>
      
      {/* Motivational Popup */}
      {showMotivation && (
        <MotivationalPopup
          message={motivationMessage}
          type={isCorrect ? 'success' : 'error'}
          onClose={() => setShowMotivation(false)}
        />
      )}
    </div>
  );
}
