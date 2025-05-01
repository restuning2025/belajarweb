import React, { useState, useEffect } from 'react';
import MotivationalPopup from './MotivationalPopup';

export default function MultipleAnswerQuiz({ question, onComplete }) {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
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
  
  // Handle option selection/deselection
  const handleToggleOption = (randomIndex) => {
    if (isSubmitted) return; // Prevent changes after submission
    
    // Convert randomized index back to original index
    const originalIndex = randomToOriginalMap[randomIndex];
    
    const newSelectedOptions = [...selectedOptions];
    const optionIndex = newSelectedOptions.indexOf(originalIndex);
    
    if (optionIndex === -1) {
      // Add option if not already selected
      newSelectedOptions.push(originalIndex);
    } else {
      // Remove option if already selected
      newSelectedOptions.splice(optionIndex, 1);
    }
    
    setSelectedOptions(newSelectedOptions);
  };
  
  // Submit answers
  const handleSubmit = () => {
    if (selectedOptions.length === 0 || isSubmitted) return;
    
    setIsSubmitted(true);
    
    // Sort both arrays to compare regardless of order
    const sortedSelected = [...selectedOptions].sort();
    const sortedCorrect = [...question.correctAnswers].sort();
    
    // Check if arrays are identical
    const isAllCorrect = sortedSelected.length === sortedCorrect.length && 
      sortedSelected.every((value, index) => value === sortedCorrect[index]);
    
    setIsCorrect(isAllCorrect);
    
    // Show appropriate motivational message
    if (isAllCorrect) {
      setMotivationMessage('Hebat! Semua jawaban kamu benar! 🎊');
    } else {
      // Check how many are correct
      const correctCount = selectedOptions.filter(opt => question.correctAnswers.includes(opt)).length;
      const totalCorrect = question.correctAnswers.length;
      
      if (correctCount > 0) {
        setMotivationMessage(`Hampir benar! Kamu benar ${correctCount} dari ${totalCorrect}. 💪`);
      } else {
        setMotivationMessage('Jawabannya akan ditunjukkan. Perhatikan jawaban yang benar! 🤔');
      }
    }
    
    setShowMotivation(true);
    
    // Notify parent component after delay
    setTimeout(() => {
      if (onComplete) onComplete(isAllCorrect);
    }, 1500);
  };
  
  // Check if an original index is selected
  const isOptionSelected = (originalIndex) => {
    return selectedOptions.includes(originalIndex);
  };
  
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Question Header */}
      <div className="bg-gradient-to-r from-pink-500 to-orange-500 p-6">
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
            <span className="bg-pink-100 text-pink-600 rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
              ?
            </span>
            <span>{question.question}</span>
          </div>
          
          <p className="text-lg text-gray-600 italic ml-14 font-medium">Pilih semua jawaban yang benar (bisa lebih dari satu)</p>
        </div>
        
        {/* Options */}
        <div className="space-y-4 mb-8">
          {randomizedOptions.map((option, randomIndex) => {
            // Get original index for checking correct answers
            const originalIndex = randomToOriginalMap[randomIndex];
            
            // Determine styling based on selection and correctness after submission
            let optionClass = "p-5 border-3 rounded-2xl transition-all flex items-center quiz-option";
            
            if (isSubmitted) {
              optionClass += " quiz-option-locked";
              
              if (question.correctAnswers.includes(originalIndex)) {
                // Correct answer
                optionClass += " quiz-option-correct bg-green-100 border-green-500";
              } else if (selectedOptions.includes(originalIndex)) {
                // Wrong selection
                optionClass += " quiz-option-incorrect bg-red-100 border-red-500";
              } else {
                // Not selected
                optionClass += " opacity-70";
              }
            } else {
              optionClass += " border-gray-200 hover:border-pink-400 hover:bg-pink-50 cursor-pointer";
              
              if (selectedOptions.includes(originalIndex)) {
                // Selected but not submitted yet
                optionClass += " border-pink-400 bg-pink-50";
              }
            }
            
            return (
              <div
                key={randomIndex}
                className={optionClass}
                onClick={() => handleToggleOption(randomIndex)}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 border-3 text-lg ${
                  selectedOptions.includes(originalIndex) 
                    ? 'bg-pink-500 border-pink-500 text-white' 
                    : 'border-gray-300'
                }`}>
                  {selectedOptions.includes(originalIndex) && "✓"}
                </div>
                <span className="flex-1 text-lg">{option}</span>
                
                {isSubmitted && (
                  <div className="ml-3">
                    {question.correctAnswers.includes(originalIndex) ? (
                      <span className="text-green-500 text-3xl">✓</span>
                    ) : selectedOptions.includes(originalIndex) ? (
                      <span className="text-red-500 text-3xl">✗</span>
                    ) : null}
                  </div>
                )}
              </div>
            );
          })}
        </div>
        
        {/* Submit Button (visible only before submission) */}
        {!isSubmitted && (
          <button
            onClick={handleSubmit}
            disabled={selectedOptions.length === 0}
            className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
              selectedOptions.length > 0
                ? 'bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white shadow-md transform hover:scale-102'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            Periksa Jawaban
          </button>
        )}
        
        {/* Explanation (shown after submission) */}
        {isSubmitted && (
          <div className="mt-8 p-5 bg-pink-50 rounded-xl border-2 border-pink-100">
            <p className="font-bold text-pink-700 mb-2 text-lg">Penjelasan:</p>
            {question.explanation ? (
              <p className="text-gray-700 text-lg">{question.explanation}</p>
            ) : (
              <div className="text-gray-700">
                <p className="text-lg mb-2">Jawaban yang benar adalah:</p>
                <ul className="list-disc pl-5">
                  {question.correctAnswers.map((correctIndex, idx) => (
                    <li key={idx} className="mb-1 font-medium">{question.options[correctIndex]}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
        
        {/* Continue Button (visible after submission) */}
        {isSubmitted && (
          <button
            onClick={() => onComplete && onComplete(isCorrect)}
            className="w-full mt-8 py-4 bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white rounded-xl font-bold text-lg transition-colors shadow-md transform hover:scale-102"
          >
            Lanjutkan
          </button>
        )}
      </div>
      
      {/* Motivational Popup */}
      {showMotivation && (
        <MotivationalPopup
          message={motivationMessage}
          type={isCorrect ? 'success' : 'warning'}
          onClose={() => setShowMotivation(false)}
        />
      )}
    </div>
  );
}
