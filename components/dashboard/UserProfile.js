import React from 'react';

export default function UserProfile({ user }) {
  return (
    <div className="flex items-center bg-gradient-to-r from-pink-100 to-purple-100 p-3 rounded-xl shadow-md">
      <div className="relative">
        <div className="w-16 h-16 overflow-hidden rounded-full border-4 border-yellow-300 bg-white">
          {user.avatar ? (
            <img 
              src={user.avatar} 
              alt={`Avatar ${user.name}`} 
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-blue-100 text-3xl">
              {user.name.charAt(0)}
            </div>
          )}
        </div>
        <div className="absolute -bottom-2 -right-2 bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold border-2 border-white">
          {user.level}
        </div>
      </div>
      
      <div className="ml-4">
        <div className="text-lg font-bold text-gray-800">{user.name}</div>
        <div className="flex items-center space-x-3 text-sm">
          <div className="flex items-center">
            <span className="text-yellow-500 mr-1">⭐</span>
            <span>{user.points} poin</span>
          </div>
          <div className="flex items-center">
            <span className="text-red-500 mr-1">🔥</span>
            <span>{user.streak} hari</span>
          </div>
        </div>
      </div>
    </div>
  );
}
