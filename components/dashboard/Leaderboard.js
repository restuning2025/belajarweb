import React from 'react';

export default function Leaderboard({ data, userId }) {
  return (
    <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-4">
      <ul className="space-y-3">
        {data.map((user, index) => {
          // Determine if this is the current user
          const isCurrentUser = user.id === userId;
          
          // Different styling based on position
          let rankingStyle = "flex items-center p-3 rounded-lg transition-transform hover:scale-102";
          let rankBadge = "";
          
          if (index === 0) {
            // Gold for 1st place
            rankingStyle += " bg-gradient-to-r from-yellow-200 to-yellow-100 border-2 border-yellow-400";
            rankBadge = "🥇";
          } else if (index === 1) {
            // Silver for 2nd place
            rankingStyle += " bg-gradient-to-r from-gray-200 to-gray-100 border-2 border-gray-300";
            rankBadge = "🥈";
          } else if (index === 2) {
            // Bronze for 3rd place
            rankingStyle += " bg-gradient-to-r from-amber-200 to-amber-100 border-2 border-amber-300";
            rankBadge = "🥉";
          } else {
            // Normal style for other positions
            rankingStyle += " bg-white border-2 border-gray-100";
            rankBadge = `${index + 1}`;
          }
          
          // Highlight current user
          if (isCurrentUser) {
            rankingStyle += " border-2 border-blue-400 shadow-md";
          }
          
          return (
            <li key={user.id} className={rankingStyle}>
              <div className="w-8 h-8 flex items-center justify-center font-bold text-lg">
                {typeof rankBadge === 'string' && rankBadge.length === 1 ? (
                  <span className="w-7 h-7 rounded-full bg-purple-100 flex items-center justify-center">{rankBadge}</span>
                ) : (
                  <span>{rankBadge}</span>
                )}
              </div>
              
              <div className="w-8 h-8 mx-2 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full flex items-center justify-center text-xl">
                {user.icon}
              </div>
              
              <div className="w-10 h-10 overflow-hidden rounded-full border-2 border-purple-200 mx-2">
                {user.avatar ? (
                  <img 
                    src={user.avatar} 
                    alt={`${user.name} avatar`} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-blue-100 text-lg">
                    {user.name.charAt(0)}
                  </div>
                )}
              </div>
              
              <div className="flex-1 ml-2">
                <div className="font-bold text-gray-800">{user.name}</div>
              </div>
              
              <div className="text-right">
                <div className="font-bold text-purple-600">{user.points}</div>
                <div className="text-xs text-gray-500">poin</div>
              </div>
            </li>
          );
        })}
      </ul>
      
      <button className="mt-4 w-full bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white font-bold py-2 px-4 rounded-lg shadow transition-all">
        Lihat Peringkat Lengkap
      </button>
    </div>
  );
}
