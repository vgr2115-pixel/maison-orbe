const MEDIA = 'https://media.base44.com/images/public/6aecec7c9dbac33ac8c67648';

export const IMAGES = {
  heroEditorial: `${MEDIA}/2fc0bef60_generated_image.png`,
  craft: `${MEDIA}/49cf36d6e_generated_e937eea3.png`,
  atelier: `${MEDIA}/b725d844f_generated_0056b0fe.png`,
  interior: `${MEDIA}/a7427d0cf_generated_4111faed.png`,
  street: `${MEDIA}/8e0dd38c3_generated_8ed5edfc.png`,
  swatches: `${MEDIA}/0d7a33a15_generated_ddbcdac5.png`,
  patina: `${MEDIA}/59b93547c_generated_4224e756.png`,
};

const img = (file) => `${MEDIA}/${file}`;

const alma = {
  Noir: [img('04dfa868a_generated_75da6074.png'), img('7943720f9_generated_image.png')],
  Cognac: [img('89738abba_generated_3497da3f.png'), img('49ed984a6_generated_image.png')],
  Sable: [img('245544424_generated_a143d0d3.png'), img('30f2b60d4_generated_image.png')],
};

const noe = {
  Noir: [img('a4e3ace3c_generated_0a6749f9.png'), img('5f759c623_generated_image.png')],
  Cognac: [img('714b854e0_generated_61efb93f.png'), img('033c904b5_generated_image.png')],
  Sable: [img('239f5b42d_generated_367fe48d.png'), img('838dd4fb3_generated_image.png')],
};

const jules = {
  Noir: [img('92ca88090_generated_1d34cc8b.png'), img('d0b6a8f3c_generated_image.png')],
  Cognac: [img('e2a0e3394_generated_d8e134a5.png'), img('c264b2ed6_generated_image.png')],
  Sable: [img('82c247a59_generated_b7f3ea98.png'), img('766fd44a7_generated_image.png')],
};

const emile = {
  Noir: [img('c609594b0_generated_bde45b4f.png'), img('41c7dcd4e_generated_image.png')],
  Cognac: [img('cd5b35fe7_generated_ae5b4c74.png'), img('688095b8b_generated_image.png')],
  Sable: [img('8653778be_generated_40bc535b.png'), img('95f919118_generated_image.png')],
};

const voyage = {
  Noir: [img('2bfba2963_generated_image.png'), img('ac6f2d1e3_generated_image.png')],
  Cognac: [img('a4855e5a3_generated_image.png'), img('42ef76c5e_generated_image.png')],
  Sable: [img('3fb0396a5_generated_image.png'), img('3995e2ac4_generated_image.png')],
};

const iris = {
  Noir: [img('6644ab57c_generated_image.png'), img('d00a5794d_generated_image.png')],
  Cognac: [img('34134379e_generated_image.png'), img('e0154f93b_generated_image.png')],
  Sable: [img('cef740a73_generated_image.png'), img('872edce8e_generated_image.png')],
};

const alix = {
  Noir: [img('a07be91ab_generated_image.png'), img('ff03fc0eb_generated_image.png')],
  Cognac: [img('f2cdd1590_generated_image.png'), img('a36e07d38_generated_image.png')],
  Sable: [img('3d3504b9a_generated_image.png'), img('e6ce7902f_generated_image.png')],
};

export const COLOURS = {
  Noir: { hex: '#221F1D', label: 'Noir' },
  Cognac: { hex: '#A56F4E', label: 'Cognac' },
  Sable: { hex: '#D9CCBA', label: 'Sable' },
};

export const COLOUR_ORDER = ['Noir', 'Cognac', 'Sable'];
export const DEFAULT_COLOUR = 'Cognac';

const cuir = { label: 'Matière', value: 'Cuir de veau pleine fleur, finition naturelle' };
const entretien = {
  label: 'Entretien',
  value: 'Chiffon doux, baume neutre deux fois par an',
};
const assemblage = { label: 'Assemblage', value: 'Petites séries, à Lyon' };

export const products = [
  {
    slug: 'le-sac-alma',
    name: 'Le Sac Alma',
    category: 'Sacs',
    price: 290,
    tagline: 'Le sac du quotidien, tenu.',
    summary: 'Un sac structuré, dessiné pour la journée entière.',
    description: [
      'Alma a été dessiné autour d’une contrainte simple : tenir sa forme, même presque vide. Le corps est légèrement trapézoïdal, l’anse arquée laisse la main libre, le rabat ferme sans insister.',
      'À l’intérieur, une poche zippée et deux emplacements plats. Assez pour un ordinateur de 13 pouces, un carnet et le reste de la journée. Rien de plus.',
    ],
    specs: [
      cuir,
      { label: 'Doublure', value: 'Coton épais, ton sur ton' },
      { label: 'Dimensions', value: '30 × 22 × 12 cm' },
      { label: 'Anse', value: '11 cm de hauteur' },
      { label: 'Poids', value: '720 g' },
      entretien,
      assemblage,
    ],
    variants: alma,
  },
  {
    slug: 'le-sac-noe',
    name: 'Le Sac Noé',
    category: 'Sacs',
    price: 240,
    tagline: 'Un sac d’épaule, presque rien.',
    summary: 'Étroit, souple, porté à l’épaule ou en bandoulière.',
    description: [
      'Noé tient dans une main. Sa ligne est continue : aucun fermoir apparent, une fermeture zippée posée dans le prolongement du cuir, une bandoulière plate qui se porte courte, à l’épaule.',
      'Il s’assouplit dès la première semaine et prend la forme de ce qu’on y met. C’est prévu ainsi.',
    ],
    specs: [
      cuir,
      { label: 'Doublure', value: 'Coton épais, ton sur ton' },
      { label: 'Dimensions', value: '24 × 18 × 6 cm' },
      { label: 'Bandoulière', value: 'Fixe, 58 cm' },
      { label: 'Poids', value: '380 g' },
      entretien,
      assemblage,
    ],
    variants: noe,
  },
  {
    slug: 'le-portefeuille-jules',
    name: 'Le Portefeuille Jules',
    category: 'Petite maroquinerie',
    price: 85,
    tagline: 'Compact, sans mauvaise surprise.',
    summary: 'Six cartes, deux compartiments, une poche zippée.',
    description: [
      'Six emplacements pour cartes, deux compartiments à billets, une poche zippée pour la monnaie. Le tout tient dans une poche arrière, fermé, sans déformer le cuir.',
      'Les bords sont poncés et teintés à la main, un par un. C’est le détail qui tient le plus longtemps.',
    ],
    specs: [
      cuir,
      { label: 'Dimensions', value: '11 × 9,5 × 1,5 cm' },
      { label: 'Rangements', value: '6 emplacements cartes, 2 compartiments billets, 1 poche zippée' },
      { label: 'Poids', value: '95 g' },
      { label: 'Entretien', value: 'Chiffon doux, à sec' },
      assemblage,
    ],
    variants: jules,
  },
  {
    slug: 'le-porte-cartes-emile',
    name: 'Le Porte-cartes Émile',
    category: 'Petite maroquinerie',
    price: 65,
    tagline: 'Quatre cartes, l’essentiel.',
    summary: 'Deux panneaux cousus, une coupe franche.',
    description: [
      'Deux panneaux de cuir cousus, quatre emplacements, une coupe franche. Émile ne prend pas de place et ne gonfle pas avec le temps.',
      'On le glisse dans une poche de veste et on l’oublie. C’est exactement ce qu’on lui demande.',
    ],
    specs: [
      cuir,
      { label: 'Dimensions', value: '10 × 7,5 cm' },
      { label: 'Rangements', value: '4 emplacements cartes' },
      { label: 'Poids', value: '35 g' },
      { label: 'Entretien', value: 'Chiffon doux, à sec' },
      assemblage,
    ],
    variants: emile,
  },
  {
    slug: 'le-sac-voyage',
    name: 'Le Sac Voyage',
    category: 'Sacs',
    price: 390,
    tagline: 'Deux jours, une seule pièce.',
    summary: 'Un format week-end qui tient sous un siège de train.',
    description: [
      'Un sac de week-end souple, avec un fond doublé et renforcé pour qu’il tienne debout. Deux anses courtes, une bandoulière amovible pour les jours où l’on marche.',
      'À l’intérieur, une grande poche zippée et deux poches plates : de quoi tenir trois jours si l’on sait voyager léger.',
    ],
    specs: [
      cuir,
      { label: 'Doublure', value: 'Coton épais, fond renforcé' },
      { label: 'Dimensions', value: '48 × 28 × 22 cm' },
      { label: 'Bandoulière', value: 'Amovible, 110 cm' },
      { label: 'Poids', value: '1,5 kg' },
      entretien,
      assemblage,
    ],
    variants: voyage,
  },
  {
    slug: 'la-pochette-iris',
    name: 'La Pochette Iris',
    category: 'Petite maroquinerie',
    price: 130,
    tagline: 'L’essentiel, à la main.',
    summary: 'Un rectangle souple, une fermeture zippée, rien de superflu.',
    description: [
      'Un rectangle souple, une fermeture zippée, une poche intérieure. Iris se glisse dans un sac plus grand ou se porte seule, à la main.',
      'Le cuir n’est pas doublé : il s’assouplit vite et prend la forme de ce qu’on y met.',
    ],
    specs: [
      cuir,
      { label: 'Dimensions', value: '26 × 17 × 2 cm' },
      { label: 'Fermeture', value: 'Zip laiton mat, tirette en cuir' },
      { label: 'Poids', value: '210 g' },
      entretien,
      assemblage,
    ],
    variants: iris,
  },
  {
    slug: 'la-ceinture-alix',
    name: 'La Ceinture Alix',
    category: 'Ceintures',
    price: 95,
    tagline: 'Trente-cinq millimètres, pas un de plus.',
    summary: 'Une bande de cuir pleine fleur, boucle laiton mat.',
    description: [
      'Une bande de cuir de 35 mm, une boucle laiton mat, cinq passants. Une longueur unique de 95 cm, portée à la taille ou sur les hanches.',
      'Les bords sont teintés à la main. Elle se patine comme le reste, là où la boucle frotte.',
    ],
    specs: [
      cuir,
      { label: 'Largeur', value: '35 mm' },
      { label: 'Longueur', value: '95 cm, cinq passants' },
      { label: 'Boucle', value: 'Laiton mat' },
      { label: 'Poids', value: '180 g' },
      entretien,
      assemblage,
    ],
    variants: alix,
  },
];

export const getProduct = (slug) => products.find((product) => product.slug === slug);

export const relatedProducts = (slug) =>
  products.filter((product) => product.slug !== slug).slice(0, 3);