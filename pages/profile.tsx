
import UserProfile from '@/components/UserProfile';
import React from 'react';


const Profile = () => {
  const user = {
    name: 'Tambua Evaristus',
    email: 'evaristustambua@gmail.com',
    phone: '676944889',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
  };

  return (
    <div className="container mx-auto mt-10 ">
      <UserProfile {...user} />
    </div>
  );
};

export default Profile;
