import React, { useState } from 'react';
import { auth } from '../utils/firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const [error, setError] = useState('');

  const handleAuth = async () => {
    try {
      setError('');
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
    } catch (error) {
      setError(error.message);
      console.error("Auth Error:", error.message);
    }
  };

  return (
    <div className="p-6 text-center">
      <h1 className="text-xl font-bold">{isLogin ? "Login" : "Register"}</h1>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="block border p-2 mt-2 w-full" />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="block border p-2 mt-2 w-full" />
      {error && <p className="text-red-500 mt-2">{error}</p>}
      <button onClick={handleAuth} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">{isLogin ? "Login" : "Register"}</button>
      <p className="mt-2 text-sm cursor-pointer" onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Don't have an account? Register" : "Already have an account? Login"}
      </p>
    </div>
  );
};

export default Register;