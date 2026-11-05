const MEDIA = 'https://media.base44.com/images/public/6aecec7c9dbac33ac8c67648';

export const IMAGES = {
  almaCognac: `${MEDIA}/89738abba_generated_3497da3f.png`,
  almaNoir: `${MEDIA}/04dfa868a_generated_75da6074.png`,
  almaSable: `${MEDIA}/245544424_generated_a143d0d3.png`,
  craft: `${MEDIA}/49cf36d6e_generated_e937eea3.png`,
  atelier: `${MEDIA}/b725d844f_generated_0056b0fe.png`,
  interior: `${MEDIA}/a7427d0cf_generated_4111faed.png`,
  street: `${MEDIA}/8e0dd38c3_generated_8ed5edfc.png`,
  swatches: `${MEDIA}/0d7a33a15_generated_ddbcdac5.png`,
  patina: `${MEDIA}/59b93547c_generated_4224e756.png`,
  noeCognac: `${MEDIA}/714b854e0_generated_61efb93f.png`,
  noeNoir: `${MEDIA}/a4e3ace3c_generated_0a6749f9.png`,
  noeSable: `${MEDIA}/239f5b42d_generated_367fe48d.png`,
  julesCognac: `${MEDIA}/e2a0e3394_generated_d8e134a5.png`,
  julesNoir: `${MEDIA}/92ca88090_generated_1d34cc8b.png`,
  julesSable: `${MEDIA}/82c247a59_generated_b7f3ea98.png`,
  emileCognac: `${MEDIA}/cd5b35fe7_generated_ae5b4c74.png`,
  emileNoir: `${MEDIA}/c609594b0_generated_bde45b4f.png`,
  emileSable: `${MEDIA}/8653778be_generated_40bc535b.png`,
};

export const COLOURS = {
  Noir: { hex: '#221F1D', label: 'Noir' },
  Cognac: { hex: '#A56F4E', label: 'Cognac' },
  Sable: { hex: '#D9CCBA', label: 'Sable' },
};

export const COLOUR_ORDER = ['Noir', 'Cognac', 'Sable'];
export const DEFAULT_COLOUR = 'Cognac';

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
      { label: 'Matière', value: 'Cuir de veau pleine fleur, finition naturelle' },
      { label: 'Doublure', value: 'Coton épais, ton sur ton' },
      { label: 'Dimensions', value: '30 × 22 × 12 cm' },
      { label: 'Anse', value: '11 cm de hauteur' },
      { label: 'Poids', value: '720 g' },
      { label: 'Entretien', value: 'Chiffon doux, baume neutre deux fois par an' },
      { label: 'Assemblage', value: 'Petites séries, à Lyon' },
    ],
    variants: {
      Noir: IMAGES.almaNoir,
      Cognac: IMAGES.almaCognac,
      Sable: IMAGES.almaSable,
    },
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
      'Il se souple dès la première semaine et prend la forme de ce qu’on y met. C’est prévu ainsi.',
    ],
    specs: [
      { label: 'Matière', value: 'Cuir de veau pleine fleur, finition naturelle' },
      { label: 'Doublure', value: 'Coton épais, ton sur ton' },
      { label: 'Dimensions', value: '24 × 18 × 6 cm' },
      { label: 'Bandoulière', value: 'Fixe, 58 cm' },
      { label: 'Poids', value: '380 g' },
      { label: 'Entretien', value: 'Chiffon doux, baume neutre deux fois par an' },
      { label: 'Assemblage', value: 'Petites séries, à Lyon' },
    ],
    variants: {
      Noir: IMAGES.noeNoir,
      Cognac: IMAGES.noeCognac,
      Sable: IMAGES.noeSable,
    },
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
      { label: 'Matière', value: 'Cuir de veau pleine fleur, finition naturelle' },
      { label: 'Dimensions', value: '11 × 9,5 × 1,5 cm' },
      { label: 'Rangements', value: '6 emplacements cartes, 2 compartiments billets, 1 poche zippée' },
      { label: 'Poids', value: '95 g' },
      { label: 'Entretien', value: 'Chiffon doux, à sec' },
      { label: 'Assemblage', value: 'Petites séries, à Lyon' },
    ],
    variants: {
      Noir: IMAGES.julesNoir,
      Cognac: IMAGES.julesCognac,
      Sable: IMAGES.julesSable,
    },
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
      { label: 'Matière', value: 'Cuir de veau pleine fleur, finition naturelle' },
      { label: 'Dimensions', value: '10 × 7,5 cm' },
      { label: 'Rangements', value: '4 emplacements cartes' },
      { label: 'Poids', value: '35 g' },
      { label: 'Entretien', value: 'Chiffon doux, à sec' },
      { label: 'Assemblage', value: 'Petites séries, à Lyon' },
    ],
    variants: {
      Noir: IMAGES.emileNoir,
      Cognac: IMAGES.emileCognac,
      Sable: IMAGES.emileSable,
    },
  },
];

export const getProduct = (slug) => products.find((product) => product.slug === slug);

export const relatedProducts = (slug) =>
  products.filter((product) => product.slug !== slug).slice(0, 3);