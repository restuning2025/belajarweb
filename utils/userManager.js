// User management functions
export const registerUser = (username, password) => {
  const users = JSON.parse(localStorage.getItem('users') || '{}');
  
  if (users[username]) {
    return { success: false, message: 'Username sudah digunakan' };
  }

  users[username] = {
    password,
    quizHistory: {},
    quizResults: [],
    createdAt: new Date().toISOString()
  };

  localStorage.setItem('users', JSON.stringify(users));
  return { success: true, message: 'Pendaftaran berhasil' };
};

export const loginUser = (username, password) => {
  const users = JSON.parse(localStorage.getItem('users') || '{}');
  const user = users[username];

  if (!user || user.password !== password) {
    return { success: false, message: 'Username atau password salah' };
  }

  localStorage.setItem('currentUser', username);
  return { success: true, message: 'Login berhasil' };
};

export const getCurrentUser = () => {
  const username = localStorage.getItem('currentUser');
  if (!username) return null;

  const users = JSON.parse(localStorage.getItem('users') || '{}');
  return users[username];
};

export const saveQuizResult = (subject, score, answers, correctAnswers, totalQuestions) => {
  const username = localStorage.getItem('currentUser');
  if (!username) return false;

  const users = JSON.parse(localStorage.getItem('users') || '{}');
  const user = users[username];

  if (!user.quizHistory[subject]) {
    user.quizHistory[subject] = [];
  }

  if (!user.quizResults) {
    user.quizResults = [];
  }

  const result = {
    score,
    answers,
    correctAnswers,
    totalQuestions,
    subject,
    date: new Date().toISOString()
  };

  user.quizHistory[subject].push(result);
  user.quizResults.push(result);

  localStorage.setItem('users', JSON.stringify(users));
  return true;
};

export const getQuizHistory = (subject = null) => {
  const user = getCurrentUser();
  if (!user) return [];

  if (subject) {
    return user.quizHistory[subject] || [];
  }
  return user.quizHistory;
};

export const getUserScores = () => {
  const user = getCurrentUser();
  if (!user || !user.quizResults) return [];
  return user.quizResults.sort((a, b) => new Date(b.date) - new Date(a.date));
};

export const getUserBestScore = (subject) => {
  const user = getCurrentUser();
  if (!user || !user.quizResults) return 0;
  
  const subjectScores = user.quizResults.filter(result => result.subject === subject);
  if (subjectScores.length > 0) {
    return Math.max(...subjectScores.map(result => result.score));
  }
  return 0;
};

export const logoutUser = () => {
  localStorage.removeItem('currentUser');
};
