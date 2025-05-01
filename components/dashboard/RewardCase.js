import React, { useState } from 'react';

export default function RewardCase({ rewards, onViewReward }) {
  const [activeTab, setActiveTab] = useState('badges');
  
  const tabs = [
    { id: 'badges', label: 'Lencana', icon: '🏅' },
    { id: 'trophies', label: 'Piala', icon: '🏆' }
  ];
  
  return (
    <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl p-4">
      {/* Stars Counter */}
      <div className="flex items-center justify-center mb-4 py-3 px-4 bg-gradient-to-r from-yellow-200 to-amber-300 rounded-lg shadow-md">
        <div className="flex items-center">
          <div className="relative">
            <span className="text-4xl animate-pulse">⭐</span>
            <span className="absolute -top-1 -right-1 text-2xl animate-bounce">✨</span>
          </div>
          <div className="ml-3">
            <div className="text-2xl font-bold text-yellow-800">{rewards.stars}</div>
            <div className="text-xs text-yellow-800">Bintang</div>
          </div>
        </div>
      </div>
      
      {/* Reward Tabs */}
      <div className="flex rounded-lg bg-gray-100 mb-4">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-2 px-4 text-center rounded-lg transition-all font-bold ${
              activeTab === tab.id
                ? 'bg-white text-yellow-600 shadow-md'
                : 'text-gray-600 hover:bg-gray-200'
            }`}
          >
            <span className="mr-1">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>
      
      {/* Rewards Display */}
      <div className="h-48 overflow-y-auto pr-2 custom-scrollbar">
        {activeTab === 'badges' && (
          <div className="grid grid-cols-2 gap-3">
            {rewards.badges.map(badge => (
              <div 
                key={badge.id}
                onClick={() => badge.earned && onViewReward && onViewReward(badge)}
                className={`p-3 rounded-lg border-2 ${
                  badge.earned
                    ? 'bg-gradient-to-r from-yellow-100 to-amber-100 border-yellow-300 cursor-pointer transform transition-transform hover:scale-105'
                    : 'bg-gray-100 border-gray-200 opacity-60'
                }`}
              >
                <div className="flex items-center justify-center mb-2">
                  <span className="text-3xl">{badge.icon}</span>
                  {!badge.earned && (
                    <div className="absolute bg-gray-800 bg-opacity-60 inset-0 rounded-lg flex items-center justify-center">
                      <span className="text-xl text-white">🔒</span>
                    </div>
                  )}
                </div>
                <p className="text-center text-sm font-medium text-gray-800 truncate">
                  {badge.name}
                </p>
                {badge.earned && (
                  <div className="mt-1 text-center text-xs text-green-600 font-bold">
                    Diperoleh!
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
        
        {activeTab === 'trophies' && (
          <div className="grid grid-cols-2 gap-3">
            {rewards.trophies.map(trophy => (
              <div 
                key={trophy.id}
                onClick={() => trophy.earned && onViewReward && onViewReward(trophy)}
                className={`p-3 rounded-lg border-2 ${
                  trophy.earned
                    ? 'bg-gradient-to-r from-amber-100 to-yellow-100 border-amber-300 cursor-pointer transform transition-transform hover:scale-105'
                    : 'bg-gray-100 border-gray-200 opacity-60'
                }`}
              >
                <div className="flex items-center justify-center mb-2 relative">
                  <span className="text-3xl">{trophy.icon}</span>
                  {!trophy.earned && (
                    <div className="absolute bg-gray-800 bg-opacity-60 inset-0 rounded-lg flex items-center justify-center">
                      <span className="text-xl text-white">🔒</span>
                    </div>
                  )}
                </div>
                <p className="text-center text-sm font-medium text-gray-800 truncate">
                  {trophy.name}
                </p>
                {trophy.earned && (
                  <div className="mt-1 text-center text-xs text-green-600 font-bold">
                    Diperoleh!
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Challenge Button */}
      <button
        onClick={() => onViewReward && onViewReward({ id: 'challenge', name: 'Tantangan Baru', icon: '🎯' })}
        className="mt-4 w-full bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition-all transform hover:scale-102"
      >
        Tantangan Berikutnya 🎯
      </button>
    </div>
  );
}
