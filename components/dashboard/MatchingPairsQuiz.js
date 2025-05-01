import React, { useState, useEffect } from 'react';
import MotivationalPopup from './MotivationalPopup';

export default function MatchingPairsQuiz({ question, onComplete }) {
  const [leftSelected, setLeftSelected] = useState(null);
  const [rightSelected, setRightSelected] = useState(null);
  const [matches, setMatches] = useState([]);
  const [isComplete, setIsComplete] = useState(false);
  const [showMotivation, setShowMotivation] = useState(false);
  const [motivationMessage, setMotivationMessage] = useState('');
  const [randomizedLeftOptions, setRandomizedLeftOptions] = useState([]);
  const [randomizedRightOptions, setRandomizedRightOptions] = useState([]);
  const [leftOriginalToRandom, setLeftOriginalToRandom] = useState({});
  const [rightOriginalToRandom, setRightOriginalToRandom] = useState({});
  const [leftRandomToOriginal, setLeftRandomToOriginal] = useState({});
  const [rightRandomToOriginal, setRightRandomToOriginal] = useState({});
  
  // Randomize answer choices when component mounts or question changes
  useEffect(() => {
    if (question && question.leftOptions && question.rightOptions) {
      randomizeOptions();
    }
  }, [question]);
  
  // Function to randomize both sets of options
  const randomizeOptions = () => {
    // Randomize left options
    const leftResult = randomizeColumnOptions(question.leftOptions);
    setRandomizedLeftOptions(leftResult.randomized);
    setLeftOriginalToRandom(leftResult.originalToRandom);
    setLeftRandomToOriginal(leftResult.randomToOriginal);
    
    // Randomize right options
    const rightResult = randomizeColumnOptions(question.rightOptions);
    setRandomizedRightOptions(rightResult.randomized);
    setRightOriginalToRandom(rightResult.originalToRandom);
    setRightRandomToOriginal(rightResult.randomToOriginal);
  };
  
  // Helper function to randomize a column of options
  const randomizeColumnOptions = (options) => {
    const originalOptions = [...options];
    const randomized = [];
    const originalToRandom = {};
    const randomToOriginal = {};
    
    // Build the randomized array and mapping
    while (originalOptions.length > 0) {
      const randomIndex = Math.floor(Math.random() * originalOptions.length);
      const originalIndex = options.indexOf(originalOptions[randomIndex]);
      const newIndex = randomized.length;
      
      // Add to randomized array
      randomized.push(originalOptions[randomIndex]);
      
      // Build mappings between original and randomized indices
      originalToRandom[originalIndex] = newIndex;
      randomToOriginal[newIndex] = originalIndex;
      
      // Remove the selected option from the original array
      originalOptions.splice(randomIndex, 1);
    }
    
    return { randomized, originalToRandom, randomToOriginal };
  };
  
  // Handle selecting items
  const handleLeftSelect = (randomIndex) => {
    // Convert to original index for internal logic
    const originalIndex = leftRandomToOriginal[randomIndex];
    
    if (matches.some(match => match.leftOriginal === originalIndex)) return; // Don't allow selection of already matched items
    setLeftSelected(randomIndex);
    
    // If right is already selected, check for a match
    if (rightSelected !== null) {
      checkForMatch(randomIndex, rightSelected);
    }
  };
  
  const handleRightSelect = (randomIndex) => {
    // Convert to original index for internal logic
    const originalIndex = rightRandomToOriginal[randomIndex];
    
    if (matches.some(match => match.rightOriginal === originalIndex)) return; // Don't allow selection of already matched items
    setRightSelected(randomIndex);
    
    // If left is already selected, check for a match
    if (leftSelected !== null) {
      checkForMatch(leftSelected, randomIndex);
    }
  };
  
  // Check if selected pair is a match
  const checkForMatch = (leftRandomIndex, rightRandomIndex) => {
    // Convert to original indices
    const leftOriginalIndex = leftRandomToOriginal[leftRandomIndex];
    const rightOriginalIndex = rightRandomToOriginal[rightRandomIndex];
    
    // Check if the pair matches correctly
    const isMatch = question.pairs.some(pair => {
      return pair.left === question.leftOptions[leftOriginalIndex] && 
             pair.right === question.rightOptions[rightOriginalIndex];
    });
    
    // Add to matches if correct
    if (isMatch) {
      setMatches([...matches, { 
        left: leftRandomIndex, 
        right: rightRandomIndex,
        leftOriginal: leftOriginalIndex,
        rightOriginal: rightOriginalIndex
      }]);
      
      // Show mini motivation popup for each correct match
      if (matches.length + 1 < question.leftOptions.length) {
        setMotivationMessage('Bagus! Pasangan yang tepat! 🌈');
        setShowMotivation(true);
        setTimeout(() => setShowMotivation(false), 1200);
      }
    }
    
    // Reset selections
    setLeftSelected(null);
    setRightSelected(null);
    
    // Check if all pairs are matched
    if (isMatch && matches.length + 1 === question.leftOptions.length) {
      setIsComplete(true);
      setMotivationMessage('Hebat! Kamu berhasil mencocokkan semua pasangan! 🌟');
      setShowMotivation(true);
      
      // Notify parent component after delay
      setTimeout(() => {
        if (onComplete) onComplete(true);
      }, 1800);
    }
  };
  
  // Get match status for a left item
  const getLeftMatchStatus = (randomIndex) => {
    const match = matches.find(m => m.left === randomIndex);
    if (match) return match.right;
    return null;
  };
  
  // Get match status for a right item
  const getRightMatchStatus = (randomIndex) => {
    const match = matches.find(m => m.right === randomIndex);
    if (match) return match.left;
    return null;
  };
  
  // Calculate connection line between matched items
  const getConnectionLine = (leftRandomIndex, rightRandomIndex, index) => {
    // Generate vibrant colors based on the index
    const colorPalette = [
      '#FF5733', // Orange-red
      '#33FF57', // Lime green
      '#3357FF', // Blue
      '#FF33A8', // Pink
      '#FFD633', // Yellow
      '#33FFD6', // Turquoise
      '#A833FF', // Purple
      '#FF8333', // Light orange
      '#33FFA8', // Light green
      '#8333FF'  // Violet
    ];
    
    const color = colorPalette[index % colorPalette.length];
    
    return {
      leftIndex: leftRandomIndex,
      rightIndex: rightRandomIndex,
      color
    };
  };
  
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Question Header */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-6">
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
          
          <p className="text-lg text-gray-600 italic ml-14 font-medium">Cocokkan item di sebelah kiri dengan pasangannya di sebelah kanan</p>
        </div>
        
        {/* Matching Area */}
        <div className="flex justify-between space-x-8 mb-8">
          {/* Left Column */}
          <div className="w-1/2 space-y-4">
            {randomizedLeftOptions.map((item, randomIndex) => {
              const isMatched = getLeftMatchStatus(randomIndex) !== null;
              const isSelected = leftSelected === randomIndex;
              
              return (
                <div 
                  key={`left-${randomIndex}`}
                  onClick={() => !isMatched && handleLeftSelect(randomIndex)}
                  className={`p-4 border-3 rounded-xl transition-all flex items-center ${isMatched 
                    ? 'border-green-500 bg-green-50 quiz-option-correct shadow-lg' 
                    : isSelected
                      ? 'border-indigo-500 bg-indigo-50 shadow-md'
                      : 'border-gray-200 hover:border-indigo-400 hover:bg-indigo-50 cursor-pointer'
                  }`}
                >
                  {isMatched && (
                    <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center mr-3 text-lg font-bold">
                      ✓
                    </div>
                  )}
                  <span className="text-gray-800 text-lg">{item}</span>
                </div>
              );
            })}
          </div>
          
          {/* Right Column */}
          <div className="w-1/2 space-y-4">
            {randomizedRightOptions.map((item, randomIndex) => {
              const isMatched = getRightMatchStatus(randomIndex) !== null;
              const isSelected = rightSelected === randomIndex;
              
              return (
                <div 
                  key={`right-${randomIndex}`}
                  onClick={() => !isMatched && handleRightSelect(randomIndex)}
                  className={`p-4 border-3 rounded-xl transition-all flex items-center ${isMatched 
                    ? 'border-green-500 bg-green-50 quiz-option-correct shadow-lg' 
                    : isSelected
                      ? 'border-indigo-500 bg-indigo-50 shadow-md'
                      : 'border-gray-200 hover:border-indigo-400 hover:bg-indigo-50 cursor-pointer'
                  }`}
                >
                  <span className="text-gray-800 text-lg">{item}</span>
                  {isMatched && (
                    <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center ml-auto text-lg font-bold">
                      ✓
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Connection Lines (visually improved) */}
        <div className="relative h-10 mb-8 overflow-hidden">
          {matches.map((match, index) => {
            const connection = getConnectionLine(match.left, match.right, index);
            const pathHeight = 8 + (index % 3) * 4; // Vary the path heights
            
            return (
              <div 
                key={`connection-${index}`}
                className="absolute inset-0 flex items-center justify-center overflow-hidden">
                <div 
                  className="h-2 w-full rounded-full shadow-sm animate-pulse-slow"
                  style={{ 
                    backgroundColor: connection.color,
                    transform: `translateY(${pathHeight}px)`,
                    opacity: 0.8
                  }}
                ></div>
              </div>
            );
          })}
        </div>
        
        {/* Instructions */}
        <div className="text-center text-gray-700 mb-6 text-lg font-medium">
          {matches.length === 0 && 'Klik satu item dari setiap kolom untuk membuat pasangan'}
          {matches.length > 0 && !isComplete && (
            <span className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full">
              {matches.length} dari {question.leftOptions.length} pasangan ditemukan!
            </span>
          )}
          {isComplete && (
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full animate-bounce-once">
              Semua pasangan telah ditemukan! 🎉
            </span>
          )}
        </div>
        
        {/* Explanation (shown after completion) */}
        {isComplete && (
          <div className="mt-8 p-5 bg-indigo-50 rounded-xl border-2 border-indigo-100">
            <p className="font-bold text-indigo-700 mb-2 text-lg">Penjelasan:</p>
            {question.explanation ? (
              <p className="text-gray-700 text-lg">{question.explanation}</p>
            ) : (
              <div className="text-gray-700">
                <p className="text-lg mb-2">Pasangan yang benar:</p>
                <ul className="list-disc pl-5">
                  {question.correctPairs.map(([leftIdx, rightIdx], idx) => (
                    <li key={idx} className="mb-1">
                      <span className="font-medium">{question.leftOptions[leftIdx]}</span> ↔ 
                      <span className="font-medium">{question.rightOptions[rightIdx]}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
        
        {/* Continue Button (visible after completion) */}
        {isComplete && (
          <button
            onClick={() => onComplete && onComplete(true)}
            className="w-full mt-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white rounded-xl font-bold text-lg transition-all shadow-md transform hover:scale-102"
          >
            Lanjutkan
          </button>
        )}
      </div>
      
      {/* Motivational Popup */}
      {showMotivation && (
        <MotivationalPopup
          message={motivationMessage}
          type="success"
          onClose={() => setShowMotivation(false)}
        />
      )}
    </div>
  );
}
