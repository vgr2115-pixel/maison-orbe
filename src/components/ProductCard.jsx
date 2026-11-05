import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Image } from '@/components/ui/image';
import { COLOURS, COLOUR_ORDER, DEFAULT_COLOUR } from '@/data/collection';
import { formatPrice } from '@/lib/format';

export default function ProductCard({ product, priority = false }) {
  const [colour, setColour] = useState(DEFAULT_COLOUR);

  return (
    <Link to={`/collection/${product.slug}`} className="group block">
      <div className="relative overflow-hidden bg-sand/45">
        <div className="aspect-[4/5]">
          <Image
            src={product.variants[colour][0]}
            alt={`${product.name} en cuir ${colour.toLowerCase()}`}
            fittingType="fill"
            className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.035]"
            loading={priority ? 'eager' : 'lazy'}
          />
        </div>
        <span className="pointer-events-none absolute inset-x-0 bottom-0 flex translate-y-3 items-center justify-center bg-ivory/92 py-3 text-[10px] uppercase tracking-[0.26em] text-espresso opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          Découvrir le modèle
        </span>
      </div>

      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-heading text-[20px] leading-tight text-espresso">{product.name}</h3>
          <p className="mt-1 text-[12.5px] leading-relaxed text-charcoal/55">{product.tagline}</p>
        </div>
        <span className="mt-[3px] shrink-0 text-[13px] tabular-nums text-charcoal/70">
          {formatPrice(product.price)}
        </span>
      </div>

      <div className="-ml-1.5 mt-2 flex items-center">
        {COLOUR_ORDER.map((name) => (
          <button
            key={name}
            type="button"
            aria-label={`Voir ${product.name} en ${name}`}
            aria-pressed={colour === name}
            onMouseEnter={() => setColour(name)}
            onFocus={() => setColour(name)}
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              setColour(name);
            }}
            className="flex h-7 w-7 items-center justify-center"
          >
            <span
              className="block h-[11px] w-[11px] rounded-full transition-transform duration-300"
              style={{
                backgroundColor: COLOURS[name].hex,
                boxShadow:
                  colour === name
                    ? '0 0 0 1px #F4F0E8, 0 0 0 2px rgba(52,37,31,0.45)'
                    : '0 0 0 1px rgba(52,37,31,0.14)',
              }}
            />
          </button>
        ))}
      </div>
    </Link>
  );
}