import { Link, useParams } from 'react-router-dom';
import { Image } from '@/components/ui/image';
import Reveal from '@/components/Reveal';
import NotFoundMessage from '@/components/NotFoundMessage';
import { getPost, journalPosts } from '@/data/journal';
import { formatDate } from '@/lib/format';

export default function JournalArticle() {
  const { slug } = useParams();
  const post = getPost(slug);

  if (!post) {
    return (
      <NotFoundMessage
        title="Cet article n’existe pas"
        message="Le texte demandé a peut-être été retiré du journal."
        backTo="/journal"
        backLabel="Lire le journal"
      />
    );
  }

  const others = journalPosts.filter((entry) => entry.slug !== post.slug).slice(0, 2);

  return (
    <article>
      <div className="mx-auto max-w-[1500px] px-6 pt-8 sm:px-10 lg:px-[5vw]">
        <Link
          to="/journal"
          className="text-[10.5px] uppercase tracking-[0.2em] text-espresso/45 hover:text-espresso"
        >
          ← Journal
        </Link>
      </div>

      <header className="mx-auto max-w-[900px] px-6 pb-10 pt-8 sm:px-10 lg:pt-12">
        <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-espresso/45">
          <span>{post.category}</span>
          <span className="h-px w-4 bg-espresso/25" />
          <span>{formatDate(post.date)}</span>
          <span className="h-px w-4 bg-espresso/25" />
          <span>{post.readingTime}</span>
        </div>
        <h1 className="mt-5 font-heading text-[clamp(2.2rem,4.6vw,3.6rem)] leading-[1.06] text-espresso">
          {post.title}
        </h1>
        <p className="mt-5 max-w-xl font-heading text-[20px] italic leading-snug text-espresso/60">
          {post.excerpt}
        </p>
      </header>

      <div className="mx-auto max-w-[1500px] px-6 sm:px-10 lg:px-[5vw]">
        <div className="aspect-[16/9] w-full overflow-hidden bg-sand/40">
          <Image
            src={post.image}
            alt={post.title}
            fittingType="fill"
            className="h-full w-full object-cover"
            loading="eager"
          />
        </div>
      </div>

      <div className="mx-auto max-w-[720px] px-6 py-14 sm:px-10 lg:py-20">
        {post.body.map((paragraph, index) => (
          <div key={paragraph}>
            <p className="mb-6 text-[16px] leading-[1.85] text-charcoal/78">{paragraph}</p>
            {index === 1 && post.quote && (
              <blockquote className="my-10 border-l border-espresso/25 pl-6">
                <p className="font-heading text-[24px] italic leading-[1.35] text-espresso">
                  {post.quote}
                </p>
              </blockquote>
            )}
          </div>
        ))}
      </div>

      <section className="border-t border-espresso/12">
        <div className="mx-auto max-w-[1500px] px-6 py-14 sm:px-10 lg:px-[5vw]">
          <Reveal>
            <p className="eyebrow">À lire aussi</p>
            <div className="mt-7 grid gap-8 sm:grid-cols-2">
              {others.map((entry) => (
                <Link key={entry.slug} to={`/journal/${entry.slug}`} className="group block">
                  <div className="aspect-[16/9] w-full overflow-hidden bg-sand/40">
                    <Image
                      src={entry.image}
                      alt={entry.title}
                      fittingType="fill"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="mt-4 font-heading text-[22px] leading-tight text-espresso">
                    {entry.title}
                  </h3>
                  <p className="mt-2 text-[13px] text-charcoal/55">{entry.excerpt}</p>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </article>
  );
}