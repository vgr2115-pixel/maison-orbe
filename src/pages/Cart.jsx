import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Image } from '@/components/ui/image';
import QuantityStepper from '@/components/QuantityStepper';
import { useCart } from '@/lib/cart';
import { formatPrice } from '@/lib/format';

export default function Cart() {
  const { items, subtotal, updateQuantity, removeItem, count } = useCart();
  const [noticeOpen, setNoticeOpen] = useState(false);

  const shipping = subtotal >= 150 ? 0 : 9;
  const total = subtotal + shipping;

  if (items.length === 0) {
    return (
      <section className="mx-auto flex min-h-[62vh] max-w-[1500px] flex-col justify-center px-6 py-20 sm:px-10 lg:px-[5vw]">
        <p className="eyebrow">Panier</p>
        <h1 className="mt-4 max-w-lg font-heading text-[clamp(2.2rem,4.4vw,3.4rem)] leading-[1.06] text-espresso">
          Votre panier est vide.
        </h1>
        <p className="mt-5 max-w-md text-[15.5px] leading-[1.8] text-charcoal/65">
          Quatre objets, trois couleurs, une seule collection. Prenez le temps de regarder.
        </p>
        <Link to="/collection" className="btn-solid mt-9 self-start">
          Voir la collection
        </Link>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-[1500px] px-6 pb-24 pt-12 sm:px-10 lg:px-[5vw] lg:pt-16">
      <div className="flex items-end justify-between gap-6 border-b border-espresso/12 pb-7">
        <div>
          <p className="eyebrow">Panier</p>
          <h1 className="mt-3 font-heading text-[clamp(2rem,4vw,3rem)] leading-tight text-espresso">
            {count} pièce{count > 1 ? 's' : ''} sélectionnée{count > 1 ? 's' : ''}
          </h1>
        </div>
        <Link
          to="/collection"
          className="link-underline hidden text-[11px] uppercase tracking-[0.2em] text-espresso/60 sm:inline-block"
        >
          Continuer mes achats
        </Link>
      </div>

      <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <ul className="divide-y divide-espresso/12 border-b border-espresso/12">
            {items.map((item) => (
              <li key={`${item.slug}-${item.colour}`} className="flex gap-5 py-7">
                <Link
                  to={`/collection/${item.slug}`}
                  className="h-[150px] w-[116px] shrink-0 overflow-hidden bg-sand/40"
                >
                  <Image
                    src={item.image}
                    alt={`${item.name} en ${item.colour.toLowerCase()}`}
                    fittingType="fill"
                    className="h-full w-full object-cover"
                  />
                </Link>
                <div className="flex flex-1 flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <Link
                        to={`/collection/${item.slug}`}
                        className="font-heading text-[22px] leading-tight text-espresso"
                      >
                        {item.name}
                      </Link>
                      <p className="mt-1.5 text-[11px] uppercase tracking-[0.18em] text-espresso/45">
                        Couleur · {item.colour}
                      </p>
                      <p className="mt-1 text-[13px] text-charcoal/55">
                        {formatPrice(item.price)} l’unité
                      </p>
                    </div>
                    <span className="text-[14px] tabular-nums text-espresso">
                      {formatPrice(item.price * item.quantity)}
                    </span>
                  </div>
                  <div className="mt-auto flex items-center justify-between pt-5">
                    <QuantityStepper
                      value={item.quantity}
                      onChange={(quantity) => updateQuantity(item.slug, item.colour, quantity)}
                    />
                    <button
                      type="button"
                      onClick={() => removeItem(item.slug, item.colour)}
                      className="text-[11px] uppercase tracking-[0.16em] text-espresso/40 underline-offset-4 hover:text-espresso hover:underline"
                    >
                      Retirer
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8 space-y-3 text-[13px] leading-relaxed text-charcoal/60">
            <p>
              <span className="text-espresso/80">Livraison</span> — offerte dès 150 € d’achat, 9 €
              sinon, en France métropolitaine.
            </p>
            <p>
              <span className="text-espresso/80">Retours</span> — 30 jours après réception.{' '}
              <Link to="/informations/livraison-retours" className="link-underline text-espresso">
                Conditions complètes
              </Link>
            </p>
          </div>
        </div>

        <aside className="lg:col-span-5">
          <div className="bg-sand/60 p-7 sm:p-8">
            <p className="text-[10px] uppercase tracking-[0.24em] text-espresso/50">Récapitulatif</p>
            <dl className="mt-6 space-y-3 text-[14px]">
              <div className="flex justify-between">
                <dt className="text-charcoal/60">Sous-total</dt>
                <dd className="tabular-nums text-espresso">{formatPrice(subtotal)}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-charcoal/60">Livraison</dt>
                <dd className="tabular-nums text-espresso">
                  {shipping === 0 ? 'Offerte' : formatPrice(shipping)}
                </dd>
              </div>
              <div className="flex items-baseline justify-between border-t border-espresso/15 pt-4">
                <dt className="text-[11px] uppercase tracking-[0.2em] text-espresso/60">Total</dt>
                <dd className="font-heading text-[26px] tabular-nums text-espresso">
                  {formatPrice(total)}
                </dd>
              </div>
            </dl>

            <button
              type="button"
              onClick={() => setNoticeOpen(true)}
              className="btn-solid mt-7 w-full"
            >
              Finaliser la commande
            </button>

            {noticeOpen && (
              <div className="mt-4 border border-espresso/20 bg-ivory p-5">
                <p className="text-[11px] uppercase tracking-[0.2em] text-espresso/55">
                  Boutique de démonstration
                </p>
                <p className="mt-3 text-[13.5px] leading-[1.75] text-charcoal/70">
                  Maison Orbe est une maison fictive. Aucun paiement n’est traité et aucune commande
                  n’est enregistrée : ce panier vous permet uniquement de vérifier le parcours
                  d’achat.
                </p>
                <Link
                  to="/contact"
                  className="link-underline mt-4 inline-block text-[11px] uppercase tracking-[0.18em] text-espresso"
                >
                  Nous écrire
                </Link>
              </div>
            )}

            <p className="mt-5 text-[11px] leading-relaxed text-charcoal/45">
              Aucun moyen de paiement n’est demandé. Vos pièces restent dans votre navigateur.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}