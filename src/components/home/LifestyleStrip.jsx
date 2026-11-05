import { Image } from '@/components/ui/image';
import Reveal from '@/components/Reveal';
import { IMAGES } from '@/data/collection';

export default function LifestyleStrip() {
  return (
    <section className="relative">
      <div className="relative h-[62vh] min-h-[380px] w-full overflow-hidden bg-sand sm:h-[72vh]">
        <Image
          src={IMAGES.street}
          alt="Une personne en manteau de laine portant un sac d’épaule en cuir noir le long d’une façade de pierre à Lyon"
          fittingType="fill"
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/65 via-charcoal/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 px-6 pb-10 sm:px-10 lg:px-[5vw] lg:pb-14">
          <Reveal>
            <p className="eyebrow text-ivory/60">En usage</p>
            <p className="mt-4 max-w-xl font-heading text-[clamp(1.7rem,3.4vw,2.8rem)] leading-[1.15] text-ivory">
              Porté tous les jours, pendant des années.
            </p>
            <p className="mt-3 text-[12px] uppercase tracking-[0.2em] text-ivory/55">
              Lyon, quartier de la Croix-Rousse
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}