import React from 'react';

export default function ProgressTracker({ topics }) {
  // Calculate overall progress percentage
  const completedCount = topics.filter(topic => topic.completed).length;
  const totalTopics = topics.length;
  const progressPercentage = Math.round((completedCount / totalTopics) * 100);
  
  return (
    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4">
      {/* Overall Progress Bar */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-lg font-bold text-gray-700">Total Kemajuan</span>
          <span className="font-bold text-green-600">{progressPercentage}%</span>
        </div>
        <div className="h-6 w-full bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-xs font-bold text-white"
            style={{ width: `${progressPercentage}%` }}
          >
            {progressPercentage > 10 ? `${completedCount}/${totalTopics}` : ''}
          </div>
        </div>
      </div>
      
      {/* Topic Checklist */}
      <div className="space-y-3">
        <h3 className="font-bold text-gray-700 mb-2">Topik Pelajaran:</h3>
        {topics.map((topic) => (
          <div 
            key={topic.id}
            className={`p-3 rounded-lg border-2 ${
              topic.completed 
                ? 'bg-green-100 border-green-300' 
                : 'bg-white border-gray-200'
            } transition-all transform hover:scale-102`}
          >
            <div className="flex items-center">
              <div 
                className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                  topic.completed 
                    ? 'bg-green-500 text-white' 
                    : 'bg-gray-200 text-gray-500'
                }`}
              >
                {topic.completed ? '✓' : '○'}
              </div>
              <span className="font-medium text-gray-800">{topic.name}</span>
              {topic.completed && (
                <div className="ml-auto text-2xl animate-bounce">🎉</div>
              )}
            </div>
            {/* Show a mini progress bar for partial completion if needed */}
            {topic.progress && !topic.completed && (
              <div className="mt-2 h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-blue-400 rounded-full"
                  style={{ width: `${topic.progress}%` }}
                ></div>
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Motivational message based on progress */}
      <div className="mt-4 p-3 rounded-lg bg-yellow-100 border-2 border-yellow-200">
        <div className="flex items-center">
          <span className="text-2xl mr-2">
            {progressPercentage < 30 ? '🌱' : progressPercentage < 70 ? '🌿' : '🌳'}
          </span>
          <p className="text-sm text-gray-700">
            {progressPercentage < 30 
              ? 'Kamu baru memulai! Terus semangat belajar ya!' 
              : progressPercentage < 70 
                ? 'Kamu sudah belajar dengan baik! Lanjutkan!' 
                : 'Hebat! Kamu hampir menyelesaikan semua topik!'}
          </p>
        </div>
      </div>
    </div>
  );
}
