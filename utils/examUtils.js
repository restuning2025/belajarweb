import { QUESTION_TYPES, CLASS_TYPES } from '../data/examTypes';

export const validateQuestion = (question) => {
  const requiredFields = ['id', 'type', 'subject', 'topic', 'question', 'options'];
  
  // Check required fields
  for (const field of requiredFields) {
    if (!question[field]) {
      throw new Error(`Missing required field: ${field}`);
    }
  }

  // Validate question type
  if (!Object.values(QUESTION_TYPES).includes(question.type)) {
    throw new Error('Invalid question type');
  }

  // Validate options based on question type
  switch (question.type) {
    case QUESTION_TYPES.REGULAR_MCQ:
      if (!question.correctAnswer || !question.options.includes(question.correctAnswer)) {
        throw new Error('Invalid correct answer for regular MCQ');
      }
      break;
    case QUESTION_TYPES.COMPLEX_MCQ_1:
      if (!Array.isArray(question.correctAnswers) || question.correctAnswers.length === 0) {
        throw new Error('Complex MCQ Type 1 requires an array of correct answers');
      }
      break;
    case QUESTION_TYPES.COMPLEX_MCQ_2:
      if (!Array.isArray(question.correctPairs) || question.correctPairs.length === 0) {
        throw new Error('Complex MCQ Type 2 requires an array of correct pairs');
      }
      break;
  }

  return true;
};

export const calculateScore = (answers, questions) => {
  let score = 0;
  let totalPossibleScore = 0;

  questions.forEach((question, index) => {
    const userAnswer = answers[index];
    
    switch (question.type) {
      case QUESTION_TYPES.REGULAR_MCQ:
        totalPossibleScore += 1;
        if (userAnswer === question.correctAnswer) score += 1;
        break;
      
      case QUESTION_TYPES.COMPLEX_MCQ_1:
        const correctAnswers = new Set(question.correctAnswers);
        const userAnswers = new Set(userAnswer || []);
        totalPossibleScore += correctAnswers.size;
        
        userAnswers.forEach(ans => {
          if (correctAnswers.has(ans)) score += 1;
        });
        break;
      
      case QUESTION_TYPES.COMPLEX_MCQ_2:
        totalPossibleScore += question.correctPairs.length;
        const userPairs = userAnswer || [];
        
        userPairs.forEach(pair => {
          if (question.correctPairs.some(cp => 
            cp[0] === pair[0] && cp[1] === pair[1])) {
            score += 1;
          }
        });
        break;
    }
  });

  return {
    score,
    totalPossibleScore,
    percentage: Math.round((score / totalPossibleScore) * 100)
  };
};

export const shuffleQuestions = (questions) => {
  const shuffled = [...questions];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const getTopicProgress = (answers, questions) => {
  const progress = {};

  questions.forEach((question, index) => {
    const topic = question.topic;
    if (!progress[topic]) {
      progress[topic] = {
        correct: 0,
        total: 0,
        percentage: 0
      };
    }

    progress[topic].total += 1;
    
    // Check if answer is correct based on question type
    let isCorrect = false;
    const userAnswer = answers[index];

    switch (question.type) {
      case QUESTION_TYPES.REGULAR_MCQ:
        isCorrect = userAnswer === question.correctAnswer;
        break;
      case QUESTION_TYPES.COMPLEX_MCQ_1:
        const correctSet = new Set(question.correctAnswers);
        const userSet = new Set(userAnswer || []);
        isCorrect = userSet.size === correctSet.size && 
          [...userSet].every(ans => correctSet.has(ans));
        break;
      case QUESTION_TYPES.COMPLEX_MCQ_2:
        isCorrect = userAnswer && 
          userAnswer.every(pair => 
            question.correctPairs.some(cp => 
              cp[0] === pair[0] && cp[1] === pair[1]));
        break;
    }

    if (isCorrect) {
      progress[topic].correct += 1;
    }

    progress[topic].percentage = Math.round(
      (progress[topic].correct / progress[topic].total) * 100
    );
  });

  return progress;
};
