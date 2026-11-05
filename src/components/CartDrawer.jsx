import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { Image } from '@/components/ui/image';
import { useCart } from '@/lib/cart';
import { formatPrice } from '@/lib/format';
import QuantityStepper from '@/components/QuantityStepper';

export default function CartDrawer() {
  const { isOpen, closeCart, items, subtotal, updateQuantity, removeItem, count } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            onClick={closeCart}
            className="fixed inset-0 z-50 bg-charcoal/45"
          />
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="fixed right-0 top-0 z-50 flex h-full w-full max-w-[420px] flex-col bg-sand"
            aria-label="Panier"
          >
            <div className="flex items-center justify-between border-b border-espresso/12 px-6 py-5">
              <p className="text-[11px] uppercase tracking-[0.24em] text-espresso">
                Panier {count > 0 && <span className="text-espresso/50">({count})</span>}
              </p>
              <button
                type="button"
                onClick={closeCart}
                aria-label="Fermer le panier"
                className="-mr-2 p-2"
              >
                <X className="h-[18px] w-[18px]" strokeWidth={1.3} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6">
              {items.length === 0 ? (
                <div className="flex h-full flex-col justify-center">
                  <p className="font-heading text-[26px] leading-tight text-espresso">
                    Votre panier est vide.
                  </p>
                  <p className="mt-3 text-[14px] leading-relaxed text-espresso/60">
                    Sept objets, trois couleurs, une seule collection.
                  </p>
                  <Link
                    to="/collection"
                    onClick={closeCart}
                    className="btn-solid mt-7 self-start"
                  >
                    Voir la collection
                  </Link>
                </div>
              ) : (
                <ul className="divide-y divide-espresso/10">
                  {items.map((item) => (
                    <li key={`${item.slug}-${item.colour}`} className="flex gap-4 py-5">
                      <Link
                        to={`/collection/${item.slug}`}
                        onClick={closeCart}
                        className="h-[112px] w-[86px] shrink-0 overflow-hidden bg-ivory"
                      >
                        <Image
                          src={item.image}
                          alt={`${item.name} en ${item.colour.toLowerCase()}`}
                          fittingType="fill"
                          className="h-full w-full object-cover"
                        />
                      </Link>
                      <div className="flex flex-1 flex-col">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <Link
                              to={`/collection/${item.slug}`}
                              onClick={closeCart}
                              className="font-heading text-[19px] leading-tight text-espresso"
                            >
                              {item.name}
                            </Link>
                            <p className="mt-1 text-[12px] uppercase tracking-[0.16em] text-espresso/45">
                              {item.colour}
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeItem(item.slug, item.colour)}
                            className="p-1 -m-1 text-[11px] text-espresso/45 underline-offset-4 hover:text-espresso hover:underline"
                          >
                            Retirer
                          </button>
                        </div>
                        <div className="mt-auto flex items-end justify-between pt-3">
                          <QuantityStepper
                            value={item.quantity}
                            onChange={(quantity) => updateQuantity(item.slug, item.colour, quantity)}
                          />
                          <span className="text-[14px] tabular-nums text-espresso">
                            {formatPrice(item.price * item.quantity)}
                          </span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t border-espresso/12 px-6 pb-6 pt-5">
                <div className="flex items-baseline justify-between">
                  <span className="text-[11px] uppercase tracking-[0.22em] text-espresso/60">
                    Sous-total
                  </span>
                  <span className="font-heading text-[24px] text-espresso">{formatPrice(subtotal)}</span>
                </div>
                <p className="mt-2 text-[11px] leading-relaxed text-espresso/45">
                  {subtotal >= 150
                    ? 'Livraison offerte.'
                    : `Livraison 9 € — offerte dès 150 €, soit ${formatPrice(150 - subtotal)} de plus.`}
                </p>
                <Link to="/panier" onClick={closeCart} className="btn-solid mt-5 w-full">
                  Voir le panier
                </Link>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}