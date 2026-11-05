import { Outlet } from 'react-router-dom';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CartDrawer from '@/components/CartDrawer';

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-ivory text-charcoal">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
      <CartDrawer />
    </div>
  );
}