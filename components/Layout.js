import { useRouter } from 'next/router';
import Navbar from './Navbar';

export default function Layout({ children }) {
  const router = useRouter();
  
  // Don't show navbar on dashboard page
  const isDashboard = router.pathname === '/dashboard';
  
  return (
    <>
      {!isDashboard && <Navbar />}
      <main>{children}</main>
    </>
  );
}
