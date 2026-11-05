import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useCart } from '@/lib/cart';

const LEFT_LINKS = [
  { label: 'La collection', to: '/collection' },
  { label: 'Notre maison', to: '/notre-maison' },
];

const RIGHT_LINKS = [
  { label: 'Journal', to: '/journal' },
  { label: 'Contact', to: '/contact' },
];

const ALL_LINKS = [...LEFT_LINKS, ...RIGHT_LINKS];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { count, openCart } = useCart();
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-espresso/10 bg-ivory/92 backdrop-blur-md">
        <div className="grid h-[66px] grid-cols-[1fr_auto_1fr] items-center px-5 sm:h-[78px] sm:px-8 lg:px-[4vw]">
          <div className="flex items-center">
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Ouvrir le menu"
              className="lg:hidden"
            >
              <Menu className="h-5 w-5" strokeWidth={1.25} />
            </button>
            <nav className="hidden items-center gap-9 lg:flex">
              {LEFT_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-[11px] uppercase tracking-[0.2em] text-espresso/75 transition-colors hover:text-espresso"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <Link
            to="/"
            aria-label="Maison Orbe — accueil"
            className="justify-self-center whitespace-nowrap font-heading text-[14px] leading-none tracking-[0.38em] text-espresso sm:text-[17px] sm:tracking-[0.44em]"
          >
            MAISON ORBE
          </Link>

          <div className="flex items-center justify-end gap-7">
            <nav className="hidden items-center gap-9 lg:flex">
              {RIGHT_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-[11px] uppercase tracking-[0.2em] text-espresso/75 transition-colors hover:text-espresso"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <button
              type="button"
              onClick={openCart}
              className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-espresso/80 transition-colors hover:text-espresso"
            >
              <span>Panier</span>
              <span className="tabular-nums">({count})</span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex flex-col bg-sand lg:hidden"
          >
            <div className="flex h-[66px] items-center justify-between px-5 sm:px-8">
              <span className="font-heading text-[14px] tracking-[0.38em] text-espresso">MAISON ORBE</span>
              <button type="button" onClick={() => setMenuOpen(false)} aria-label="Fermer le menu">
                <X className="h-5 w-5" strokeWidth={1.25} />
              </button>
            </div>
            <nav className="flex flex-1 flex-col justify-center gap-1 px-6">
              {ALL_LINKS.map((link, index) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + index * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    to={link.to}
                    className="block border-b border-espresso/10 py-5 font-heading text-[30px] leading-none text-espresso"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mt-6"
              >
                <Link to="/panier" className="text-[11px] uppercase tracking-[0.24em] text-espresso/70">
                  Panier ({count})
                </Link>
              </motion.div>
            </nav>
            <p className="px-6 pb-10 text-[12px] leading-relaxed text-espresso/50">
              Maison de maroquinerie contemporaine
              <br />
              Lyon, France
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}