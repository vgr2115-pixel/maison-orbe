import { Link } from 'react-router-dom';
import { Image } from '@/components/ui/image';
import Reveal from '@/components/Reveal';
import { journalPosts } from '@/data/journal';
import { formatDate } from '@/lib/format';

export default function Journal() {
  return (
    <section className="mx-auto max-w-[1500px] px-6 pb-24 pt-12 sm:px-10 lg:px-[5vw] lg:pb-32 lg:pt-16">
      <Reveal className="max-w-2xl">
        <p className="eyebrow">Journal</p>
        <h1 className="mt-4 font-heading text-[clamp(2.4rem,5vw,4rem)] leading-[1.04] text-espresso">
          Notes d’atelier
        </h1>
        <p className="mt-6 text-[15.5px] leading-[1.8] text-charcoal/70">
          Peu d’articles, écrits quand nous avons quelque chose à dire : une matière, un geste, une
          décision. Trois ou quatre fois par an.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
        {journalPosts.map((post, index) => (
          <Reveal key={post.slug} delay={index * 0.07}>
            <Link to={`/journal/${post.slug}`} className="group block">
              <div className="aspect-[3/2] w-full overflow-hidden bg-sand/40">
                <Image
                  src={post.image}
                  alt={post.title}
                  fittingType="fill"
                  className="h-full w-full object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-[1.035]"
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
              </div>
              <div className="mt-5 flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-espresso/45">
                <span>{post.category}</span>
                <span className="h-px w-4 bg-espresso/25" />
                <span>{post.readingTime}</span>
              </div>
              <h2 className="mt-3 font-heading text-[23px] leading-[1.2] text-espresso">
                {post.title}
              </h2>
              <p className="mt-2 text-[13.5px] leading-[1.7] text-charcoal/60">{post.excerpt}</p>
              <p className="mt-4 text-[11px] text-charcoal/40">{formatDate(post.date)}</p>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}