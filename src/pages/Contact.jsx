import { useState } from 'react';
import { base44 } from '@/api/base44Client';
import Reveal from '@/components/Reveal';

const SUBJECTS = [
  'Une question sur un produit',
  'Commande & livraison',
  'Retours & échanges',
  'Entretien & réparation',
  'Presse & collaborations',
];

const EMPTY = { name: '', email: '', subject: SUBJECTS[0], message: '' };

export default function Contact() {
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState('idle');

  const update = (field) => (event) => {
    setForm((current) => ({ ...current, [field]: event.target.value }));
    setStatus('idle');
  };

  const submit = async (event) => {
    event.preventDefault();
    if (!form.name.trim() || !form.email.includes('@') || !form.message.trim()) {
      setStatus('invalid');
      return;
    }
    setStatus('sending');
    try {
      await base44.entities.Enquiry.create({
        name: form.name.trim(),
        email: form.email.trim().toLowerCase(),
        subject: form.subject,
        message: form.message.trim(),
        status: 'nouveau',
      });
      setStatus('sent');
      setForm(EMPTY);
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="mx-auto max-w-[1500px] px-6 pb-24 pt-12 sm:px-10 lg:px-[5vw] lg:pb-32 lg:pt-16">
      <Reveal className="grid gap-10 border-b border-espresso/12 pb-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-4 font-heading text-[clamp(2.4rem,5vw,3.8rem)] leading-[1.04] text-espresso">
            Écrivez-nous.
          </h1>
        </div>
        <div className="lg:col-span-5">
          <p className="text-[15.5px] leading-[1.8] text-charcoal/70">
            Une question sur une pièce, une taille, un entretien, une réparation : nous répondons
            nous-mêmes, sous 48 h ouvrées.
          </p>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-14 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-7">
          {status === 'sent' ? (
            <div className="border border-espresso/15 bg-sand/50 p-8">
              <p className="font-heading text-[26px] leading-tight text-espresso">
                Message reçu, merci.
              </p>
              <p className="mt-3 max-w-md text-[14.5px] leading-[1.8] text-charcoal/70">
                Nous vous répondons sous 48 h ouvrées. En attendant, la collection reste ouverte.
              </p>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="link-underline mt-6 text-[11px] uppercase tracking-[0.2em] text-espresso"
              >
                Écrire un autre message
              </button>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-8">
              <div className="grid gap-8 sm:grid-cols-2">
                <label className="block">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-espresso/50">
                    Nom
                  </span>
                  <input
                    type="text"
                    value={form.name}
                    onChange={update('name')}
                    className="field-line mt-1"
                    autoComplete="name"
                  />
                </label>
                <label className="block">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-espresso/50">
                    Adresse e-mail
                  </span>
                  <input
                    type="email"
                    value={form.email}
                    onChange={update('email')}
                    className="field-line mt-1"
                    autoComplete="email"
                  />
                </label>
              </div>

              <label className="block">
                <span className="text-[10px] uppercase tracking-[0.22em] text-espresso/50">
                  Sujet
                </span>
                <select
                  value={form.subject}
                  onChange={update('subject')}
                  className="field-line mt-1 cursor-pointer appearance-none"
                >
                  {SUBJECTS.map((subject) => (
                    <option key={subject} value={subject}>
                      {subject}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="text-[10px] uppercase tracking-[0.22em] text-espresso/50">
                  Message
                </span>
                <textarea
                  value={form.message}
                  onChange={update('message')}
                  rows={6}
                  className="mt-2 w-full resize-none border border-espresso/20 bg-transparent p-4 text-[15px] leading-relaxed text-charcoal outline-none transition-colors focus:border-espresso/60"
                />
              </label>

              <div className="flex flex-wrap items-center gap-6">
                <button type="submit" disabled={status === 'sending'} className="btn-solid">
                  {status === 'sending' ? 'Envoi…' : 'Envoyer le message'}
                </button>
                <p className="text-[12px] text-charcoal/45">
                  {status === 'invalid'
                    ? 'Merci de compléter le nom, l’e-mail et le message.'
                    : status === 'error'
                      ? 'L’envoi n’a pas abouti. Réessayez dans un instant.'
                      : 'Vos informations ne servent qu’à vous répondre.'}
                </p>
              </div>
            </form>
          )}
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-5">
          <div className="space-y-8 border-t border-espresso/12 pt-7 text-[14px] leading-[1.8] text-charcoal/70">
            <div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-espresso/45">Atelier</p>
              <p className="mt-2">
                14 rue des Fantasques
                <br />
                69001 Lyon, France
              </p>
              <p className="mt-2 text-[13px] text-charcoal/50">
                Visites sur rendez-vous, du mardi au vendredi.
              </p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-espresso/45">Écrire</p>
              <p className="mt-2">
                bonjour@maisonorbe.fr
                <br />
                presse@maisonorbe.fr
              </p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-espresso/45">Horaires</p>
              <p className="mt-2">
                Mardi – vendredi, 10 h – 18 h
                <br />
                Samedi, 11 h – 17 h
              </p>
            </div>
            <p className="border-t border-espresso/12 pt-6 text-[12px] leading-relaxed text-charcoal/45">
              Les commandes sont préparées à l’atelier et expédiées sous 3 jours ouvrés, du mardi au
              vendredi.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}