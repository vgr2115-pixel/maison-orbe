import { Link } from 'react-router-dom';
import { Image } from '@/components/ui/image';
import Reveal from '@/components/Reveal';
import { COLOURS, COLOUR_ORDER, IMAGES } from '@/data/collection';

const REFUSALS = [
  'Pas de logo apparent sur nos pièces.',
  'Pas de collections saisonnières, pas de soldes.',
  'Pas de cuir corrigé ni de doublure plastique.',
  'Pas de promesse que nous ne pouvons pas tenir.',
];

export default function NotreMaison() {
  return (
    <>
      <section className="mx-auto max-w-[1500px] px-6 pb-14 pt-12 sm:px-10 lg:px-[5vw] lg:pt-20">
        <Reveal className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="lg:col-span-7">
            <p className="eyebrow">Notre maison</p>
            <h1 className="mt-4 font-heading text-[clamp(2.4rem,5vw,4.2rem)] leading-[1.02] text-espresso">
              Une maison sans cent ans d’histoire.
            </h1>
          </div>
          <div className="lg:col-span-5">
            <p className="text-[15.5px] leading-[1.8] text-charcoal/70">
              Maison Orbe est née à Lyon, d’une frustration simple : trouver un objet bien fait, sans
              logo, qui ne coûte pas le prix d’un mythe. Nous avons commencé avec quatre pièces. Nous
              en sommes toujours là.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1600px]">
        <div className="h-[52vh] min-h-[320px] w-full overflow-hidden bg-sand/50 sm:h-[64vh]">
          <Image
            src={IMAGES.atelier}
            alt="L’atelier Maison Orbe à Lyon : mur de pierre, table en chêne, rouleaux de cuir"
            fittingType="fill"
            className="h-full w-full object-cover"
            loading="eager"
          />
        </div>
      </section>

      <section className="mx-auto max-w-[1500px] px-6 py-20 sm:px-10 lg:px-[5vw] lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <h2 className="font-heading text-[clamp(1.8rem,3.2vw,2.6rem)] leading-[1.12] text-espresso">
              Nous avons commencé par refuser.
            </h2>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-7">
            <p className="text-[15.5px] leading-[1.85] text-charcoal/72">
              Refuser le cuir corrigé, qui ne vit pas. Refuser les doublures plastiques qui craquent
              au bout d’un an. Refuser les fermetures qui lâchent avant les coutures. Ce qui restait
              après ces refus ressemblait à une collection : quatre objets assez simples pour
              vieillir, assez solides pour être réparés.
            </p>
            <p className="mt-6 text-[15.5px] leading-[1.85] text-charcoal/72">
              Nous travaillons en petites séries, avec les mêmes gestes répétés jusqu’à ce qu’ils
              deviennent une habitude du corps. Les bords sont poncés et teintés un par un. Les
              pièces sont vérifiées deux fois avant de partir.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-sand">
        <div className="mx-auto max-w-[1500px] px-6 py-20 sm:px-10 lg:px-[5vw] lg:py-28">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <p className="eyebrow">Ce que nous ne faisons pas</p>
              <p className="mt-5 max-w-md font-heading text-[clamp(1.7rem,3vw,2.4rem)] leading-[1.18] text-espresso">
                Un objet bien fait ne se remarque pas au premier regard. Il se remarque au troisième
                hiver.
              </p>
            </Reveal>
            <div className="lg:col-span-7">
              <ul className="divide-y divide-espresso/15 border-t border-espresso/15">
                {REFUSALS.map((item, index) => (
                  <Reveal key={item} delay={index * 0.06}>
                    <li className="flex gap-5 py-5">
                      <span className="pt-1 text-[10px] tabular-nums tracking-[0.2em] text-espresso/35">
                        0{index + 1}
                      </span>
                      <span className="text-[15px] leading-[1.7] text-espresso/80">{item}</span>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1500px] px-6 py-20 sm:px-10 lg:px-[5vw] lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <Reveal className="lg:col-span-7">
            <div className="aspect-[16/11] w-full overflow-hidden bg-sand/40">
              <Image
                src={IMAGES.craft}
                alt="Couture à la main d’un panneau de cuir cognac dans l’atelier"
                fittingType="fill"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-5">
            <p className="eyebrow">Les couleurs</p>
            <h2 className="mt-4 font-heading text-[clamp(1.8rem,3.2vw,2.6rem)] leading-[1.1] text-espresso">
              Trois teintes, pas une de plus.
            </h2>
            <p className="mt-5 text-[15px] leading-[1.8] text-charcoal/70">
              Noir parce qu’il traverse tout. Cognac parce que c’est la couleur du cuir avant qu’on
              le travaille. Sable parce qu’il laisse respirer.
            </p>
            <div className="mt-8 space-y-4">
              {COLOUR_ORDER.map((name) => (
                <div key={name} className="flex items-center gap-4">
                  <span
                    className="h-6 w-6 rounded-full"
                    style={{
                      backgroundColor: COLOURS[name].hex,
                      boxShadow: '0 0 0 1px rgba(52,37,31,0.18)',
                    }}
                  />
                  <span className="text-[13px] uppercase tracking-[0.18em] text-espresso/70">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-espresso/12">
        <div className="mx-auto flex max-w-[1500px] flex-col items-start justify-between gap-6 px-6 py-14 sm:px-10 lg:flex-row lg:items-center lg:px-[5vw]">
          <p className="max-w-lg font-heading text-[clamp(1.6rem,2.8vw,2.2rem)] leading-[1.2] text-espresso">
            Les quatre essentiels vous attendent.
          </p>
          <Link to="/collection" className="btn-solid">
            Voir la collection
          </Link>
        </div>
      </section>
    </>
  );
}