import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Image } from '@/components/ui/image';
import { IMAGES } from '@/data/collection';

const ease = [0.22, 1, 0.36, 1];

export default function Hero() {
  return (
    <section className="bg-ivory">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 lg:grid-cols-12">
        <div className="order-2 flex flex-col justify-center px-6 pb-16 pt-12 sm:px-10 lg:order-1 lg:col-span-5 lg:px-[5vw] lg:py-28">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="eyebrow"
          >
            Maroquinerie · Lyon
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.08, ease }}
            className="mt-6 font-heading text-[clamp(2.7rem,5.4vw,4.4rem)] font-normal leading-[1.02] tracking-[-0.005em] text-espresso"
          >
            Des objets faits
            <br />
            pour durer.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.18, ease }}
            className="mt-7 max-w-sm font-heading text-[24px] italic leading-snug text-espresso/75 sm:text-[26px]"
          >
            Le quotidien mérite de belles choses.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.26, ease }}
            className="mt-5 max-w-[27rem] text-[15.5px] leading-[1.75] text-charcoal/70"
          >
            Découvrez une collection de maroquinerie contemporaine, pensée autour de lignes simples
            et d’une élégance sans effort.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.34, ease }}
            className="mt-10 flex flex-wrap items-center gap-x-9 gap-y-5"
          >
            <Link to="/collection" className="btn-solid">
              Découvrir la collection
            </Link>
            <Link
              to="/notre-maison"
              className="link-underline text-[11px] uppercase tracking-[0.22em] text-espresso/80"
            >
              Notre maison
            </Link>
          </motion.div>
        </div>

        <div className="relative order-1 lg:order-2 lg:col-span-7">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease }}
            className="relative h-[58vh] min-h-[340px] w-full overflow-hidden bg-sand/40 sm:h-[64vh] lg:h-[calc(100vh-78px)] lg:max-h-[860px]"
          >
            <Image
              src={IMAGES.almaCognac}
              alt="Le Sac Alma en cuir cognac, posé sur un rebord de pierre dans la lumière du matin"
              fittingType="fill"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </motion.div>
          <p className="absolute bottom-4 right-4 bg-ivory/90 px-3 py-1.5 text-[9.5px] uppercase tracking-[0.24em] text-espresso/80">
            Le Sac Alma — Cognac
          </p>
        </div>
      </div>
    </section>
  );
}