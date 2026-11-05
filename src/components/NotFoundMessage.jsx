import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundMessage({
  title = 'Page introuvable',
  message = 'Le lien que vous avez suivi ne mène nulle part, ou la pièce n’existe plus.',
  backTo = '/',
  backLabel = 'Retour à l’accueil',
}) {
  useEffect(() => {
    const meta = document.createElement('meta');
    meta.name = 'prerender-status-code';
    meta.content = '404';
    document.head.appendChild(meta);
    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  return (
    <section className="mx-auto flex min-h-[58vh] max-w-[1500px] flex-col justify-center px-6 py-24 sm:px-10 lg:px-[5vw]">
      <p className="eyebrow">Erreur 404</p>
      <h1 className="mt-5 max-w-xl font-heading text-[clamp(2.2rem,4.4vw,3.4rem)] leading-[1.08] text-espresso">
        {title}
      </h1>
      <p className="mt-5 max-w-md text-[15.5px] leading-[1.8] text-charcoal/65">{message}</p>
      <Link
        to={backTo}
        className="link-underline mt-9 inline-block self-start text-[11px] uppercase tracking-[0.22em] text-espresso/80"
      >
        {backLabel}
      </Link>
    </section>
  );
}