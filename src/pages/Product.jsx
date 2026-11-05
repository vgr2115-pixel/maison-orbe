import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Image } from '@/components/ui/image';
import Reveal from '@/components/Reveal';
import QuantityStepper from '@/components/QuantityStepper';
import ProductCard from '@/components/ProductCard';
import NotFoundMessage from '@/components/NotFoundMessage';
import { COLOURS, COLOUR_ORDER, DEFAULT_COLOUR, getProduct, relatedProducts } from '@/data/collection';
import { formatPrice } from '@/lib/format';
import { useCart } from '@/lib/cart';

export default function Product() {
  const { slug } = useParams();
  const product = getProduct(slug);
  const { addItem } = useCart();
  const [colour, setColour] = useState(DEFAULT_COLOUR);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setColour(DEFAULT_COLOUR);
    setQuantity(1);
  }, [slug]);

  if (!product) {
    return (
      <NotFoundMessage
        title="Cette pièce n’existe pas"
        message="Le modèle demandé ne fait pas partie de la collection. Les quatre essentiels vous attendent."
        backTo="/collection"
        backLabel="Voir la collection"
      />
    );
  }

  return (
    <>
      <section className="mx-auto max-w-[1500px] px-6 pb-20 pt-8 sm:px-10 lg:px-[5vw] lg:pb-28">
        <nav className="flex flex-wrap items-center gap-2 text-[10.5px] uppercase tracking-[0.2em] text-espresso/45">
          <Link to="/" className="hover:text-espresso">Accueil</Link>
          <span>/</span>
          <Link to="/collection" className="hover:text-espresso">La collection</Link>
          <span>/</span>
          <span className="text-espresso/70">{product.name}</span>
        </nav>

        <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <div className="aspect-[4/5] w-full overflow-hidden bg-sand/40">
              <Image
                src={product.variants[colour]}
                alt={`${product.name} en cuir ${colour.toLowerCase()}`}
                fittingType="fill"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
            <div className="mt-4 flex gap-3">
              {COLOUR_ORDER.map((name) => (
                <button
                  key={name}
                  type="button"
                  onClick={() => setColour(name)}
                  aria-label={`Voir en ${name}`}
                  className={`h-[74px] w-[60px] overflow-hidden border transition-colors ${
                    colour === name ? 'border-espresso' : 'border-espresso/15 hover:border-espresso/40'
                  }`}
                >
                  <Image
                    src={product.variants[name]}
                    alt=""
                    fittingType="fill"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 lg:sticky lg:top-[104px] lg:self-start">
            <p className="eyebrow">{product.category}</p>
            <h1 className="mt-3 font-heading text-[clamp(2.1rem,3.6vw,2.9rem)] leading-[1.05] text-espresso">
              {product.name}
            </h1>
            <p className="mt-2 font-heading text-[19px] italic text-espresso/60">{product.tagline}</p>
            <p className="mt-5 text-[16px] tabular-nums text-espresso">{formatPrice(product.price)}</p>

            <div className="mt-8">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.24em] text-espresso/50">
                  Couleur
                </span>
                <span className="text-[12px] text-espresso/70">{colour}</span>
              </div>
              <div className="mt-3 flex gap-3">
                {COLOUR_ORDER.map((name) => (
                  <button
                    key={name}
                    type="button"
                    onClick={() => setColour(name)}
                    aria-label={name}
                    aria-pressed={colour === name}
                    className="h-8 w-8 rounded-full transition-transform duration-300 hover:scale-105"
                    style={{
                      backgroundColor: COLOURS[name].hex,
                      boxShadow:
                        colour === name
                          ? '0 0 0 2px #F4F0E8, 0 0 0 3px rgba(52,37,31,0.5)'
                          : '0 0 0 1px rgba(52,37,31,0.18)',
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <QuantityStepper value={quantity} onChange={setQuantity} />
              <button
                type="button"
                onClick={() =>
                  addItem({
                    slug: product.slug,
                    name: product.name,
                    price: product.price,
                    colour,
                    image: product.variants[colour],
                    quantity,
                  })
                }
                className="btn-solid flex-1 min-w-[200px]"
              >
                Ajouter au panier
              </button>
            </div>
            <p className="mt-3 text-[11.5px] leading-relaxed text-charcoal/45">
              En stock — expédié sous 2 à 3 jours ouvrés depuis Lyon.
            </p>

            <div className="mt-9 space-y-5 border-t border-espresso/12 pt-7">
              {product.description.map((paragraph) => (
                <p key={paragraph} className="text-[14.8px] leading-[1.8] text-charcoal/72">
                  {paragraph}
                </p>
              ))}
            </div>

            <dl className="mt-8 border-t border-espresso/12">
              {product.specs.map((spec) => (
                <div key={spec.label} className="flex gap-6 border-b border-espresso/10 py-3">
                  <dt className="w-[38%] shrink-0 text-[11px] uppercase tracking-[0.16em] text-espresso/45">
                    {spec.label}
                  </dt>
                  <dd className="text-[13.5px] leading-relaxed text-charcoal/75">{spec.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-7 space-y-3 text-[13px] leading-relaxed text-charcoal/60">
              <p>
                <span className="text-espresso/80">Livraison</span> — offerte dès 150 €, sinon 9 € en
                France. 48 à 72 h après expédition.
              </p>
              <p>
                <span className="text-espresso/80">Retours</span> — 30 jours, pièce non portée, dans
                son étui.{' '}
                <Link to="/informations/livraison-retours" className="link-underline text-espresso">
                  En savoir plus
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1500px] border-t border-espresso/12 px-6 py-16 sm:px-10 lg:px-[5vw] lg:py-24">
        <Reveal className="flex items-end justify-between gap-6">
          <h2 className="font-heading text-[clamp(1.7rem,3vw,2.4rem)] leading-tight text-espresso">
            Dans la même collection
          </h2>
          <Link
            to="/collection"
            className="link-underline hidden text-[11px] uppercase tracking-[0.22em] text-espresso/70 sm:inline-block"
          >
            Tout voir
          </Link>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {relatedProducts(product.slug).map((item, index) => (
            <Reveal key={item.slug} delay={index * 0.06}>
              <ProductCard product={item} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}