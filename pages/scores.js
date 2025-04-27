import { useEffect, useState } from 'react';
import { getUserScores } from '../utils/userManager';
import Link from 'next/link';

export default function Scores() {
  const [scores, setScores] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user is logged in
    const loggedInUser = localStorage.getItem('currentUser');
    if (loggedInUser) {
      // Get user's scores
      const userScores = getUserScores();
      setScores(userScores);
      setUser({ username: loggedInUser });
    }
  }, []);

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <p>Please log in to view your scores.</p>
                  <div className="pt-6">
                    <Link href="/auth" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                      Go to Login
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <h1 className="text-2xl font-bold mb-4">Your Quiz Scores</h1>
                {scores.length === 0 ? (
                  <p>You haven't taken any quizzes yet.</p>
                ) : (
                  <div className="space-y-4">
                    {scores.map((score, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-lg">{score.subject}</h3>
                        <p>Score: {score.score}%</p>
                        <p className="text-sm text-gray-500">
                          Date: {new Date(score.date).toLocaleDateString()}
                        </p>
                        <p className="text-sm text-gray-500">
                          Correct Answers: {score.correctAnswers} / {score.totalQuestions}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
                <div className="pt-6">
                  <Link href="/" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Back to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
