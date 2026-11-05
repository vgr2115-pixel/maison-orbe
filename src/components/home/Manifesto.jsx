import { Link } from 'react-router-dom';
import Reveal from '@/components/Reveal';

export default function Manifesto() {
  return (
    <section className="bg-sand">
      <div className="mx-auto max-w-[1500px] px-6 py-20 sm:px-10 lg:px-[5vw] lg:py-32">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-3">
            <p className="eyebrow">Notre maison</p>
            <p className="mt-5 hidden text-[13px] leading-[1.8] text-espresso/55 lg:block">
              14 rue des Fantasques
              <br />
              69001 Lyon
            </p>
          </Reveal>

          <div className="lg:col-span-9">
            <Reveal>
              <p className="max-w-3xl font-heading text-[clamp(1.9rem,3.9vw,3.3rem)] leading-[1.14] text-espresso">
                Nous croyons aux objets que l’on garde.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-8 sm:grid-cols-2 sm:gap-12">
              <Reveal delay={0.08}>
                <p className="text-[15.5px] leading-[1.8] text-espresso/75">
                  Maison Orbe est une maison de maroquinerie indépendante installée à Lyon. Nous
                  dessinons peu d’objets, et nous les dessinons longtemps.
                </p>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="text-[15.5px] leading-[1.8] text-espresso/75">
                  Pas de collection saisonnière, pas de logo visible. Quatre pièces qui couvrent le
                  quotidien, dans trois couleurs qui traversent les années.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.2} className="mt-11">
              <Link
                to="/notre-maison"
                className="link-underline text-[11px] uppercase tracking-[0.22em] text-espresso/80"
              >
                Lire notre histoire
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}