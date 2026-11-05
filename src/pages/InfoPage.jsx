import { Link, useParams } from 'react-router-dom';
import Reveal from '@/components/Reveal';
import NotFoundMessage from '@/components/NotFoundMessage';
import { getInfoPage } from '@/data/info';

export default function InfoPage() {
  const { slug } = useParams();
  const page = getInfoPage(slug);

  if (!page) {
    return (
      <NotFoundMessage
        title="Page introuvable"
        message="Cette information n’existe pas sur notre site."
      />
    );
  }

  return (
    <section className="mx-auto max-w-[1100px] px-6 pb-24 pt-10 sm:px-10 lg:pb-32 lg:pt-14">
      <nav className="flex items-center gap-2 text-[10.5px] uppercase tracking-[0.2em] text-espresso/45">
        <Link to="/" className="hover:text-espresso">Accueil</Link>
        <span>/</span>
        <span className="text-espresso/70">{page.title}</span>
      </nav>

      <Reveal className="mt-10 border-b border-espresso/12 pb-10">
        <h1 className="font-heading text-[clamp(2.2rem,4.4vw,3.4rem)] leading-[1.05] text-espresso">
          {page.title}
        </h1>
        <p className="mt-5 max-w-xl text-[15.5px] leading-[1.8] text-charcoal/70">{page.intro}</p>
      </Reveal>

      <div className="mt-4">
        {page.blocks.map((block, index) => (
          <Reveal key={block.heading} delay={index * 0.04}>
            <div className="grid gap-4 border-b border-espresso/10 py-8 sm:grid-cols-12 sm:gap-10">
              <h2 className="font-heading text-[21px] leading-snug text-espresso sm:col-span-4">
                {block.heading}
              </h2>
              <div className="sm:col-span-8">
                {block.paragraphs?.map((paragraph) => (
                  <p key={paragraph} className="mb-4 text-[14.8px] leading-[1.85] text-charcoal/72 last:mb-0">
                    {paragraph}
                  </p>
                ))}
                {block.list && (
                  <ul className="space-y-2.5">
                    {block.list.map((item) => (
                      <li key={item} className="flex gap-3 text-[14.5px] leading-[1.75] text-charcoal/72">
                        <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-cognac" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {page.note && (
        <p className="mt-8 border border-espresso/15 bg-sand/45 p-5 text-[12.5px] leading-relaxed text-espresso/70">
          {page.note}
        </p>
      )}

      <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 text-[11px] uppercase tracking-[0.2em] text-espresso/55">
        <Link to="/informations/livraison-retours" className="hover:text-espresso">Livraison & retours</Link>
        <Link to="/informations/faq" className="hover:text-espresso">FAQ</Link>
        <Link to="/informations/mentions-legales" className="hover:text-espresso">Mentions légales</Link>
        <Link to="/informations/confidentialite" className="hover:text-espresso">Confidentialité</Link>
        <Link to="/contact" className="hover:text-espresso">Contact</Link>
      </div>
    </section>
  );
}