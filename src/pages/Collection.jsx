import { useState } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '@/components/Reveal';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/collection';

const FILTERS = ['Tous', ...Array.from(new Set(products.map((product) => product.category)))];

const SERVICES = [
  { title: 'Livraison', detail: 'Offerte dès 150 €, expédiée sous 48 h' },
  { title: 'Retours', detail: '30 jours, pièce non portée' },
  { title: 'Atelier', detail: 'Coupé et assemblé à Lyon' },
];

export default function Collection() {
  const [filter, setFilter] = useState('Tous');
  const visible =
    filter === 'Tous' ? products : products.filter((product) => product.category === filter);

  return (
    <section className="mx-auto max-w-[1500px] px-6 pb-24 pt-12 sm:px-10 lg:px-[5vw] lg:pb-32 lg:pt-16">
      <Reveal className="max-w-2xl">
        <p className="eyebrow">Collection 01</p>
        <h1 className="mt-4 font-heading text-[clamp(2.4rem,5vw,4rem)] leading-[1.04] text-espresso">
          Les Essentiels
        </h1>
        <p className="mt-6 text-[15.5px] leading-[1.8] text-charcoal/70">
          Sacs, petite maroquinerie et ceintures, dessinés dans la même logique : lignes simples,
          cuir pleine fleur, aucune signature apparente. Sept pièces, trois couleurs, disponibles
          toute l’année.
        </p>
      </Reveal>

      <div className="mt-12 flex flex-col gap-5 border-t border-espresso/12 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[11px] uppercase tracking-[0.2em] text-espresso/45">
          {visible.length} pièce{visible.length > 1 ? 's' : ''}
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-3">
          {FILTERS.map((name) => (
            <button
              key={name}
              type="button"
              onClick={() => setFilter(name)}
              aria-pressed={filter === name}
              className={`border-b pb-1 text-[11px] uppercase tracking-[0.2em] transition-colors ${
                filter === name
                  ? 'border-espresso text-espresso'
                  : 'border-transparent text-espresso/45 hover:text-espresso/80'
              }`}
            >
              {name}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-x-7 gap-y-16 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
        {visible.map((product, index) => (
          <Reveal key={`${filter}-${product.slug}`} delay={index * 0.05}>
            <ProductCard product={product} priority={index < 2} />
          </Reveal>
        ))}
      </div>

      <div className="mt-20 grid gap-8 border-t border-espresso/12 pt-8 sm:grid-cols-3">
        {SERVICES.map((item) => (
          <div key={item.title}>
            <p className="text-[10px] uppercase tracking-[0.24em] text-espresso/40">{item.title}</p>
            <p className="mt-2 text-[13px] leading-relaxed text-charcoal/60">{item.detail}</p>
          </div>
        ))}
      </div>

      <p className="mt-8 text-[13px] leading-relaxed text-charcoal/55">
        Une hésitation sur la couleur ?{' '}
        <Link to="/contact" className="link-underline text-espresso">
          Écrivez-nous
        </Link>
        , nous répondons sous 48 h.
      </p>
    </section>
  );
}