import { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { ArrowRight } from 'lucide-react';

export default function NewsletterForm({ tone = 'light' }) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const isDark = tone === 'dark';

  const submit = async (event) => {
    event.preventDefault();
    if (!email.includes('@')) {
      setStatus('invalid');
      return;
    }
    setStatus('loading');
    try {
      await base44.entities.Subscriber.create({ email: email.trim().toLowerCase() });
      setStatus('done');
      setEmail('');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'done') {
    return (
      <p className={`text-[14px] leading-relaxed ${isDark ? 'text-ivory/75' : 'text-charcoal/70'}`}>
        Merci. Vous recevrez nos prochaines nouvelles, sans excès.
      </p>
    );
  }

  return (
    <form onSubmit={submit} className="w-full">
      <div className="flex items-end gap-4">
        <label className="flex-1">
          <span className="sr-only">Adresse e-mail</span>
          <input
            type="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              setStatus('idle');
            }}
            placeholder="Votre adresse e-mail"
            className={`field-line ${isDark ? 'border-ivory/30 text-ivory placeholder:text-ivory/40 focus:border-ivory/80' : ''}`}
          />
        </label>
        <button
          type="submit"
          disabled={status === 'loading'}
          aria-label="S'inscrire à la lettre"
          className={`flex h-[46px] w-[46px] items-center justify-center border transition-colors disabled:opacity-50 ${
            isDark
              ? 'border-ivory/30 text-ivory hover:border-ivory/70'
              : 'border-espresso/25 text-espresso hover:border-espresso/70'
          }`}
        >
          <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
        </button>
      </div>
      <p
        className={`mt-3 text-[12px] leading-relaxed ${
          status === 'invalid' || status === 'error'
            ? 'text-red-700'
            : isDark
              ? 'text-ivory/45'
              : 'text-charcoal/45'
        }`}
      >
        {status === 'invalid' && 'Merci d’indiquer une adresse e-mail valide.'}
        {status === 'error' && 'L’inscription n’a pas abouti. Réessayez dans un instant.'}
        {status === 'loading' && 'Inscription en cours…'}
        {status === 'idle' && 'Deux ou trois lettres par an. Aucune donnée transmise.'}
      </p>
    </form>
  );
}