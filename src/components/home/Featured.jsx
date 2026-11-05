import { Link } from 'react-router-dom';
import Reveal from '@/components/Reveal';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/collection';

export default function Featured() {
  return (
    <section className="mx-auto max-w-[1500px] px-6 py-20 sm:px-10 lg:px-[5vw] lg:py-28">
      <Reveal className="flex flex-col gap-6 border-t border-espresso/12 pt-7 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="eyebrow">Collection 01 — Les Essentiels</p>
          <h2 className="mt-3 max-w-md font-heading text-[clamp(1.85rem,3.4vw,2.9rem)] leading-[1.1] text-espresso">
            Les essentiels du quotidien.
          </h2>
        </div>
        <Link
          to="/collection"
          className="link-underline shrink-0 text-[11px] uppercase tracking-[0.22em] text-espresso/80"
        >
          Voir la collection
        </Link>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-x-7 gap-y-14 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
        {products.map((product, index) => (
          <Reveal
            key={product.slug}
            delay={index * 0.07}
            className={index % 2 === 1 ? 'lg:mt-16' : ''}
          >
            <ProductCard product={product} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}