import React from 'react';

const ProfileCard = ({ profile }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <h3 className="text-xl font-bold">{profile.name}</h3>
      <p>{profile.skills}</p>
      <p className="text-sm text-gray-500">{profile.education}</p>
    </div>
  );
};

export default ProfileCard;