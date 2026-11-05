import { useState } from 'react';
import Reveal from '@/components/Reveal';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/collection';

const FILTERS = ['Tous', ...Array.from(new Set(products.map((product) => product.category)))];

export default function Collection() {
  const [filter, setFilter] = useState('Tous');
  const visible =
    filter === 'Tous' ? products : products.filter((product) => product.category === filter);

  return (
    <section className="mx-auto max-w-[1500px] px-6 pb-24 pt-12 sm:px-10 lg:px-[5vw] lg:pb-32 lg:pt-16">
      <Reveal className="grid gap-8 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <p className="eyebrow">Collection 01</p>
          <h1 className="mt-4 font-heading text-[clamp(2.4rem,5vw,4rem)] leading-[1.04] text-espresso">
            Les Essentiels
          </h1>
          <p className="mt-6 max-w-lg text-[15.5px] leading-[1.8] text-charcoal/70">
            Sept objets pour le quotidien, dessinés dans la même logique : lignes simples, cuir
            pleine fleur, aucune signature apparente. Trois couleurs, disponibles toute l’année.
          </p>
        </div>
        <div className="lg:col-span-5 lg:justify-self-end">
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {FILTERS.map((name) => (
              <button
                key={name}
                type="button"
                onClick={() => setFilter(name)}
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
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-x-7 gap-y-14 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
        {visible.map((product, index) => (
          <Reveal
            key={product.slug}
            delay={index * 0.06}
            className={index % 2 === 1 ? 'lg:mt-16' : ''}
          >
            <ProductCard product={product} priority={index < 2} />
          </Reveal>
        ))}
      </div>

      <p className="mt-20 border-t border-espresso/12 pt-6 text-[12.5px] leading-relaxed text-charcoal/50">
        Livraison offerte dès 150 € · Retours sous 30 jours · Pièces assemblées à Lyon
      </p>
    </section>
  );
}