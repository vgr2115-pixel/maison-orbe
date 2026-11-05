import { Link } from 'react-router-dom';
import { Image } from '@/components/ui/image';
import Reveal from '@/components/Reveal';
import { IMAGES } from '@/data/collection';

export default function StoryTeaser() {
  return (
    <section className="mx-auto max-w-[1500px] px-6 py-20 sm:px-10 lg:px-[5vw] lg:py-32">
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow">La maison</p>
            <h2 className="mt-4 font-heading text-[clamp(1.9rem,3.6vw,3rem)] leading-[1.1] text-espresso">
              Une maison sans cent ans d’histoire.
            </h2>
            <p className="mt-6 text-[15.5px] leading-[1.8] text-charcoal/70">
              Nous n’avons pas de légende à raconter. Nous avons un atelier, quelques personnes, et
              une idée assez précise de ce qu’un objet doit être pour qu’on le garde.
            </p>
            <p className="mt-5 text-[15.5px] leading-[1.8] text-charcoal/70">
              Le reste est une affaire de matière, de patience, et d’un peu d’entêtement.
            </p>
            <Link
              to="/notre-maison"
              className="link-underline mt-9 inline-block text-[11px] uppercase tracking-[0.22em] text-espresso/80"
            >
              Visiter la maison
            </Link>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="lg:col-span-7">
          <div className="aspect-[16/11] w-full overflow-hidden bg-sand/40">
            <Image
              src={IMAGES.atelier}
              alt="Intérieur de l’atelier Maison Orbe : mur de pierre, table en chêne et rouleaux de cuir"
              fittingType="fill"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}