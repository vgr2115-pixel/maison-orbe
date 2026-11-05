import { IMAGES } from '@/data/collection';

export const journalPosts = [
  {
    slug: 'le-geste-avant-la-machine',
    title: 'Le geste avant la machine',
    category: 'Savoir-faire',
    date: '2026-09-18',
    readingTime: '4 min',
    image: IMAGES.swatches,
    excerpt:
      'Pourquoi nous coupons, ponçons et teintons encore à la main des pièces qui pourraient être faites autrement.',
    body: [
      'Une machine coud plus vite et plus droit qu’une main. Ce n’est pas le sujet. Le sujet, c’est ce qui se passe avant la couture : choisir la partie du cuir, sentir où la peau est la plus souple, poser la coupe là où le grain ne tire pas.',
      'Sur une peau de veau, deux zones voisines n’ont pas la même tenue. Un emplacement de carte taillé dans le dos de l’animal tiendra dix ans ; taillé dans le flanc, il se détendra en deux. Aucun logiciel ne nous a encore appris à le voir.',
      'Nous travaillons donc en petites séries, avec les mêmes gestes répétés jusqu’à ce qu’ils deviennent une habitude du corps. Les bords sont poncés, teintés, poncés de nouveau. Trois passages, parfois quatre. C’est long, c’est ennuyeux, et c’est exactement ce qui fait la différence au bout de cinq ans.',
    ],
    quote: 'Un objet bien fait ne se remarque pas au premier regard. Il se remarque au troisième hiver.',
  },
  {
    slug: 'ce-que-le-cuir-garde',
    title: 'Ce que le cuir garde',
    category: 'Matière',
    date: '2026-06-04',
    readingTime: '3 min',
    image: IMAGES.patina,
    excerpt:
      'La patine n’est pas un défaut d’entretien. C’est la mémoire de l’usage, et cela s’accompagne.',
    body: [
      'Un cuir neuf est uniforme. C’est pratique pour la photographie, moins pour la vie : au bout de quelques mois, les angles s’éclaircissent, la main marque, la lumière change de ton.',
      'Nous ne cherchons pas à retarder cela. Un baume neutre deux fois par an suffit à nourrir la matière sans la saturer ; le reste appartient au temps. Le Sable prend une teinte de miel. Le Cognac s’assombrit. Le Noir se patine en gris doux sur les arêtes.',
      'C’est pour cette raison que nos pièces ne sont pas doublées de plastique et que les bords sont teintés plutôt que plastifiés. Un objet qui doit durer doit pouvoir être réparé, nourri, et vieillir sans être caché.',
    ],
    quote: 'On ne garde pas un objet intact. On le garde vivant.',
  },
  {
    slug: 'trois-couleurs-une-maison',
    title: 'Trois couleurs, une maison',
    category: 'Maison',
    date: '2026-03-11',
    readingTime: '3 min',
    image: IMAGES.atelier,
    excerpt:
      'Pourquoi nous ne proposons que trois teintes, et pourquoi ce n’est pas une limite mais un choix.',
    body: [
      'Une collection saisonnière a besoin de nouvelles couleurs pour exister. Nous n’en faisons pas. Notre travail est de rendre les mêmes objets disponibles assez longtemps pour qu’on puisse les remplacer, les associer, ou simplement en offrir un.',
      'Noir parce qu’il traverse tout. Cognac parce que c’est la couleur du cuir avant qu’on le travaille, celle qui révèle le mieux sa matière. Sable parce qu’il laisse respirer un intérieur, une garde-robe claire, un été.',
      'Trois teintes, sept objets, une seule logique : ce qui reste quand on arrête de changer.',
    ],
    quote: 'Une couleur qui traverse dix ans vaut mieux que dix couleurs qui traversent une saison.',
  },
];

export const getPost = (slug) => journalPosts.find((post) => post.slug === slug);