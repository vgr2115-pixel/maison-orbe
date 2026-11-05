import Reveal from '@/components/Reveal';
import NewsletterForm from '@/components/NewsletterForm';

export default function NewsletterBand() {
  return (
    <section className="border-t border-espresso/12 bg-ivory">
      <div className="mx-auto max-w-[1500px] px-6 py-16 sm:px-10 lg:px-[5vw] lg:py-24">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-16">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow">La lettre</p>
            <h2 className="mt-4 max-w-lg font-heading text-[clamp(1.8rem,3.4vw,2.7rem)] leading-[1.12] text-espresso">
              Quelques nouvelles, de temps en temps.
            </h2>
            <p className="mt-4 max-w-md text-[14.5px] leading-[1.8] text-charcoal/60">
              Une nouvelle pièce, une note sur la matière, l’ouverture d’un atelier. Jamais plus de
              trois lettres par an.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5">
            <NewsletterForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}