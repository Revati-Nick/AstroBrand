import React from 'react';
import { auth } from '../utils/firebaseConfig';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/register");
  };

  return (
    <div className="text-center p-6">
      <h1 className="text-2xl font-bold">Your Profile</h1>
      <p>Email: {auth.currentUser?.email}</p>
      <button onClick={handleLogout} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">Logout</button>
    </div>
  );
};

export default Profile;
