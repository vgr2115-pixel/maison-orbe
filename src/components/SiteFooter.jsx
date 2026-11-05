import { Link } from 'react-router-dom';
import NewsletterForm from '@/components/NewsletterForm';

const COLUMNS = [
  {
    title: 'Maison',
    links: [
      { label: 'Notre maison', to: '/notre-maison' },
      { label: 'Journal', to: '/journal' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    title: 'Boutique',
    links: [
      { label: 'La collection', to: '/collection' },
      { label: 'Panier', to: '/panier' },
      { label: 'Livraison & retours', to: '/informations/livraison-retours' },
    ],
  },
  {
    title: 'Informations',
    links: [
      { label: 'FAQ', to: '/informations/faq' },
      { label: 'Mentions légales', to: '/informations/mentions-legales' },
      { label: 'Confidentialité', to: '/informations/confidentialite' },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="bg-charcoal text-ivory">
      <div className="mx-auto max-w-[1600px] px-5 pb-10 pt-16 sm:px-8 lg:px-[4vw] lg:pt-20">
        <div className="grid gap-12 border-b border-ivory/12 pb-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <p className="font-heading text-[17px] tracking-[0.42em] text-ivory">MAISON ORBE</p>
            <p className="mt-5 max-w-xs text-[14px] leading-[1.75] text-ivory/55">
              Des objets faits pour durer. Maroquinerie contemporaine dessinée et assemblée à Lyon,
              en petites séries.
            </p>
            <p className="mt-4 text-[10px] uppercase tracking-[0.22em] text-ivory/35">
              Maison fictive · Projet de démonstration
            </p>
            <p className="mt-5 text-[12px] leading-relaxed text-ivory/40">
              14 rue des Fantasques
              <br />
              69001 Lyon, France
              <br />
              bonjour@maisonorbe.fr
            </p>
          </div>

          {COLUMNS.map((column) => (
            <nav key={column.title} className="lg:col-span-2">
              <p className="text-[10px] uppercase tracking-[0.26em] text-ivory/40">{column.title}</p>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-[13px] text-ivory/70 transition-colors hover:text-ivory"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="lg:col-span-3">
            <p className="text-[10px] uppercase tracking-[0.26em] text-ivory/40">La lettre</p>
            <p className="mt-5 font-heading text-[21px] leading-snug text-ivory">
              Quelques nouvelles, de temps en temps.
            </p>
            <div className="mt-5">
              <NewsletterForm tone="dark" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-7 text-[11px] leading-relaxed text-ivory/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Maison Orbe</p>
          <p className="max-w-xl sm:text-right">
            Maison Orbe est une maison fictive créée pour un projet de démonstration. Les produits,
            prix et informations présentés ne constituent pas une offre commerciale.
          </p>
        </div>
      </div>
    </footer>
  );
}