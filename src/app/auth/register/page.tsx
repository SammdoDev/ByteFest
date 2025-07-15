'use client';

import { useState, useEffect } from 'react';
import { auth, db } from '@/lib/firebase';
import {
  createUserWithEmailAndPassword,
  fetchSignInMethodsForEmail,
} from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [emailExists, setEmailExists] = useState(false);
  const [password, setPassword] = useState('');
  const [checking, setChecking] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (!email) return;
    const checkEmail = async () => {
      setChecking(true);
      try {
        const methods = await fetchSignInMethodsForEmail(auth, email);
        setEmailExists(methods.length > 0);
      } catch {
        setEmailExists(false);
      } finally {
        setChecking(false);
      }
    };
    const timeout = setTimeout(checkEmail, 500);
    return () => clearTimeout(timeout);
  }, [email]);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (emailExists) {
      setErrorMsg('Email sudah digunakan.');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, 'users', user.uid), {
        name: username,
        email: user.email,
        level: 1,
      });

      localStorage.setItem('username', username);
      router.push('/auth/login');
    } catch (error: any) {
      setErrorMsg(error.message);
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <form onSubmit={handleRegister} className="bg-white p-6 rounded shadow w-full max-w-sm">
        <h2 className="text-xl font-semibold mb-4">Register</h2>
        {errorMsg && <p className="text-red-600 text-sm mb-2">{errorMsg}</p>}
        <input
          type="text"
          placeholder="Username"
          required
          className="w-full mb-3 p-2 border rounded text-black"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          required
          className="w-full mb-3 p-2 border rounded text-black"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="w-full mb-3 p-2 border rounded text-black"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Register
        </button>
      </form>
    </main>
  );
}
