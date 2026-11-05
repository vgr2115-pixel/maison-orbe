import Reveal from '@/components/Reveal';
import NewsletterForm from '@/components/NewsletterForm';

const LETTERS = [
  {
    index: '01',
    title: 'Une pièce nouvelle',
    detail: 'Ce qu’elle change, et pourquoi nous l’avons dessinée.',
  },
  {
    index: '02',
    title: 'Une note de matière',
    detail: 'Le cuir, l’entretien, la patine — sans jargon.',
  },
  {
    index: '03',
    title: 'Le carnet d’atelier',
    detail: 'Ce qui se passe rue des Fantasques, à Lyon.',
  },
];

export default function NewsletterBand() {
  return (
    <section className="border-t border-espresso/12 bg-sand/35">
      <div className="mx-auto grid max-w-[1500px] gap-14 px-6 py-20 sm:px-10 lg:grid-cols-12 lg:gap-20 lg:px-[5vw] lg:py-28">
        <Reveal className="lg:col-span-6">
          <p className="eyebrow">La lettre</p>
          <h2 className="mt-5 font-heading text-[clamp(2rem,3.6vw,3rem)] leading-[1.06] text-espresso">
            Trois lettres par an.
            <br />
            Pas une de plus.
          </h2>
          <p className="mt-6 max-w-md text-[15px] leading-[1.8] text-charcoal/65">
            Nous n’avons pas de calendrier marketing. Nous écrivons quand il y a quelque chose à
            dire, et nous nous taisons le reste du temps.
          </p>
          <ul className="mt-10 max-w-md border-t border-espresso/15">
            {LETTERS.map((letter) => (
              <li key={letter.index} className="flex gap-5 border-b border-espresso/15 py-4">
                <span className="pt-[3px] font-heading text-[13px] tracking-[0.18em] text-espresso/35">
                  {letter.index}
                </span>
                <div>
                  <p className="text-[14px] text-espresso">{letter.title}</p>
                  <p className="mt-1 text-[13px] leading-relaxed text-charcoal/55">
                    {letter.detail}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-6 lg:self-end">
          <div className="lg:border-l lg:border-espresso/15 lg:pl-14">
            <p className="text-[10px] uppercase tracking-[0.24em] text-espresso/40">L’inscription</p>
            <p className="mt-4 max-w-sm font-heading text-[19px] leading-snug text-espresso">
              Laissez votre adresse. Nous nous en servons pour cela, et rien d’autre.
            </p>
            <div className="mt-7 max-w-md">
              <NewsletterForm />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}