import { Image } from '@/components/ui/image';
import Reveal from '@/components/Reveal';
import { IMAGES } from '@/data/collection';

const POINTS = [
  {
    index: '01',
    title: 'Le cuir',
    text: 'Un cuir de veau pleine fleur, souple et non corrigé. Il garde ses nuances, sa main, et se patine là où on le touche.',
  },
  {
    index: '02',
    title: 'L’assemblage',
    text: 'Coupes franches, coutures régulières, bords poncés et teintés un par un. Les pièces sont montées en petites séries.',
  },
  {
    index: '03',
    title: 'Le temps',
    text: 'Un sac demande deux jours, un portefeuille quelques heures. Le reste s’écrit à l’usage.',
  },
];

export default function Craft() {
  return (
    <section className="mx-auto max-w-[1500px] px-6 py-20 sm:px-10 lg:px-[5vw] lg:py-32">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-6">
          <div className="aspect-[4/5] w-full overflow-hidden bg-sand/40 sm:aspect-[3/2] lg:aspect-[4/5]">
            <Image
              src={IMAGES.craft}
              alt="Mains d’artisan cousant un panneau de cuir cognac à l’établi"
              fittingType="fill"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <p className="mt-3 text-[11px] leading-relaxed text-charcoal/45">
            Atelier Maison Orbe, Lyon 1er — couture sellier sur cuir de veau cognac.
          </p>
        </Reveal>

        <div className="lg:col-span-6 lg:pt-6">
          <Reveal>
            <p className="eyebrow">Matières & savoir-faire</p>
            <h2 className="mt-4 max-w-lg font-heading text-[clamp(1.9rem,3.6vw,3rem)] leading-[1.1] text-espresso">
              Le geste d’abord, la machine ensuite.
            </h2>
            <p className="mt-6 max-w-lg text-[15.5px] leading-[1.8] text-charcoal/70">
              Nous ne fabriquons pas beaucoup. Nous faisons attention, ce qui n’est pas la même
              chose — et se voit au bout de quelques années.
            </p>
          </Reveal>

          <div className="mt-10 divide-y divide-espresso/12 border-t border-espresso/12">
            {POINTS.map((point, index) => (
              <Reveal key={point.index} delay={index * 0.07}>
                <div className="flex gap-6 py-6">
                  <span className="pt-1 text-[10px] tabular-nums tracking-[0.2em] text-espresso/35">
                    {point.index}
                  </span>
                  <div>
                    <h3 className="font-heading text-[22px] leading-tight text-espresso">
                      {point.title}
                    </h3>
                    <p className="mt-2 max-w-[26rem] text-[14.5px] leading-[1.75] text-charcoal/65">
                      {point.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}