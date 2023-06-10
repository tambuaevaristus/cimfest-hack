import React from "react";

const UserProfile = ({ name, email, phone, image }: any) => {
  return (
    <div className="flex items-center justify-center flex-col">
      <img
        src={image}
        alt={`${name}'s profile picture`}
        className="w-32 h-32 rounded-full mb-4"
      />
      <h2 className="text-2xl font-bold mb-2">{name}</h2>
      <p className="text-gray-600 mb-2">{email}</p>
      <p className="text-gray-600 mb-4">{phone}</p>
    </div>
  );
};

export default UserProfile;
