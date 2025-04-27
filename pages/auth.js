import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { registerUser, loginUser } from '../utils/userManager';

export default function Auth() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!username || !password) {
      setError('Mohon isi semua field');
      return;
    }

    const result = isLogin ? loginUser(username, password) : registerUser(username, password);

    if (result.success) {
      router.push('/');
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--background)] py-8">
      <Head>
        <title>{isLogin ? 'Masuk' : 'Daftar'} - Quiz App</title>
      </Head>

      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto dark-card rounded-lg shadow-lg p-8">
          <h1 className="text-2xl font-bold text-center mb-6">
            {isLogin ? 'Masuk' : 'Daftar'}
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Nama Pengguna
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-2 rounded-lg dark-card border border-[var(--border)]"
                placeholder="Masukkan nama pengguna"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Kata Sandi
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 rounded-lg dark-card border border-[var(--border)]"
                placeholder="Masukkan kata sandi"
              />
            </div>

            {error && (
              <div className="text-red-500 text-sm">{error}</div>
            )}

            <button
              type="submit"
              className="w-full bg-[var(--primary)] text-white py-2 rounded-lg hover:opacity-90 transition-opacity"
            >
              {isLogin ? 'Masuk' : 'Daftar'}
            </button>

            <div className="text-center text-sm">
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-[var(--primary)] hover:underline"
              >
                {isLogin ? 'Belum punya akun? Daftar' : 'Sudah punya akun? Masuk'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
