import Link from 'next/link';
import { useRouter } from 'next/router';
import { getCurrentUser, logoutUser } from '../utils/userManager';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = getCurrentUser();
    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  const handleLogout = () => {
    logoutUser();
    router.push('/auth');
  };

  return (
    <nav className="bg-[var(--card)] shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-[var(--primary)]">
            Quiz App
          </Link>

          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <Link
                  href="/scores"
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    router.pathname === '/scores'
                      ? 'bg-[var(--primary)] text-white'
                      : 'text-[var(--foreground)] hover:bg-[var(--card-hover)]'
                  }`}
                >
                  Nilai Saya
                </Link>
                <button
                  onClick={handleLogout}
                  className="px-3 py-2 rounded-md text-sm font-medium text-[var(--foreground)] hover:bg-[var(--card-hover)]"
                >
                  Keluar
                </button>
              </>
            ) : (
              <Link
                href="/auth"
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  router.pathname === '/auth'
                    ? 'bg-[var(--primary)] text-white'
                    : 'text-[var(--foreground)] hover:bg-[var(--card-hover)]'
                }`}
              >
                Masuk
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
