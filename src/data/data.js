import mama from './image/mama.png';
import mama_one from './image/mama_one.png';
import helene from './image/helene.png';
import dorette from './image/dorette.png';
import colette from './image/colette.png';
import raymond from './image/raymond.png';

export const nav = [
  {
    id: 1,
    name: 'ACCUEIL',
    link: '/',
    color: '#8a3c7f',
  },
  {
    id: 2,
    name: 'FAIRE PART',
    link: '/faire',
    color: '#8a3c7f',
  },
  {
    id: 3,
    name: 'BIOGRAPHIE',
    link: '/bio',
    color: '#8a3c7f',
  },
  {
    id: 4,
    name: 'PROGRAMME',
    link: '/programmes',
    color: '#8a3c7f',
  },
  {
    id: 5,
    name: 'HOMMAGES',
    link: '/hommages',
    color: '#8a3c7f',
  },
  {
    id: 6,
    name: 'LOCALISATION',
    link: '/plan',
    color: '#8a3c7f',
  },
];

export const dataSlider = [
  {
    id: 1,
    image: mama,
    name: 'Mme veuve Ngandjo née Nkwatchou berthe',
    text: 'Dans ma détresse, j’ai fait appel à l’éternel, j’ai crié mon Dieu, de son palais, il a entendu ma voix, mon crie est parvenue à ses oreilles',
    bible: 'Psaume: 18.7',
    date: '1940 - 17 DECEMBRE 2023',
  },
  {
    id: 2,
    image: mama_one,
    name: 'Mme veuve Ngandjo née Nkwatchou berthe',
    text: 'Dans ma détresse, j’ai fait appel à l’éternel, j’ai crié mon Dieu, de son palais, il a entendu ma voix, mon crie est parvenue à ses oreilles',
    bible: 'Psaume: 18.7',
    date: '1940 - 17 DECEMBRE 2023',
  },
];

export const programData = {
  name: 'Programmes',
  image: mama,
  infos:
    'Du 1er au 7 février recueillement tous les soirs à Douala Deido Grand-moulin.',
  allPrograms: [
    {
      id: 1,
      date: 'Jeudi 8 février 2024',
      eleven: '11:00',
      elevenInfos:
        'Mise en bière à la morgue de l’hopital militaire de Douala.',
      twelve: '12:30',
      twelveInfos:
        'Arrivée du cortège au Grand-moulin et installation de dépouille à l’Eglise évangelique du Cameroun.',
      fourteen: '14:30',
      fourteenInfos:
        'Transfert de la dépouille au domicile famillial, suivie des lamentations.',
      eighteen: '18:00 - 18:30',
      eighteenInfos: 'Début de la veillée, Culte et hommages.',
      twenty: '21:00',
      twentyInfos: 'Collation et animations.',
      midnight: '24:00',
      midnightInfos:
        'Départ pour le village Fanda (Arrondissement de NDOBIAN).',
    },

    {
      id: 2,
      date: 'Vendredi 9 février 2024',
      eleven: '11:00',
      elevenInfos:
        'Mise en bière à la morgue de l’hopital militaire de Douala.',
      twelve: '11:30',
      twelveInfos:
        'Arrivée du cortège à Fanda et installation de la dépuille au domicile familliale.',
      fourteen: '13:00',
      fourteenInfos: 'Raffraichissement.',
      eighteen: '18:00 - 19:00',
      eighteenInfos: 'Début de la grande veillée et culte.',
      twenty: '21:00',
      twentyInfos: 'Danse traditionnelle jusquà l’aube.',
    },
    {
      id: 3,
      date: 'Samedi 10 février 2024',
      eleven: '09:00 - 09:30',
      elevenInfos: 'Arrivée des populations, cultes et hommages',
      twelve: '11:00',
      twelveInfos: 'Ihnumation.',
      fourteen: '12:00',
      fourteenInfos: 'Colloation..',
    },
  ],
};

export const hommagesData = [
  {
    id: 1,
    image: helene,
    name: 'Helene',
    message:
      'Maman Berthe Chérie nous étions deux tu nous a laissé seul que Dieu te garde bien et que tu répose en paix.',
    text: 'Ta soeur cherie',
  },
  {
    id: 2,
    image: colette,
    name: 'Colette',
    message:
      'Maman, comme tu l’as souvent dit, Je suis ton égal parceque je suis la prémière fille. Le seigneur a choisi de te garder à ses côtés et saches que tu resteras toujours gravé dans nos coeurs.. Je t’aime Manan',
    text: 'Ta fille Colette',
  },
  {
    id: 3,
    image: raymond,
    name: 'Raymond',
    message:
      'Notre douce maman, c’est ton fils Raymond qui est dévenue ton père. Nous te rémercions pour tous ce que tu as fait pour nous après le départ de ton marie notre père et ta co-épouse . Tu nous as toujours unie et nous a appris l’esprit de solidarité dans la famille mais aujourd’hui tu es parti en nous laissant un grand vide mais maman, sasches que nous ne t’oubierons jamais et te serons reconnaîssant pour toute la vie. Maman chérie, ma première épouse va et répose en paix',
    text: 'Ton fils Raymond',
  },
  {
    id: 4,
    image: dorette,
    name: 'Doretté',
    message:
      'Maman tu étais ma chérie et celle qui faisait la garde pour mes enfants. Comme ce qui nous plait à Dieu nous plait, le Seigneur tout puissant à décidé de t’appeller à ses cotés et que la terre de nos ancêtre te soit légère. À Dieu maman.',
    text: 'Ta fille Doretté',
  },
];

export const faireData = [
  {
    id: 1,
    message: 'La grande famille Fanda du Cameroun',
  },
  {
    id: 2,
    message: 'La grande Famille BODIMAN de Fanda',
  },
  {
    id: 3,
    message: 'La grande famille MÔ feu SEMBIA',
  },
  {
    id: 4,
    message: 'La grande famille MILOMBE du CAMEROUN',
  },
  {
    id: 5,
    message: 'La famille NDJATE RAIMOND à Yaounde',
  },
  {
    id: 6,
    message: 'La grande famille Fanda du Cameroun',
  },
  {
    id: 7,
    message: 'Madame TCHOUTCHO COLETTE Épouse DOUNKEU à Tiko',
  },
  {
    id: 8,
    message: 'Madame YANGO Julienne épouse BOUM à Douala',
  },
  {
    id: 9,
    message: 'Mademoiselle SANDJONG DORETTE à Yaounde',
  },
  {
    id: 10,
    message: 'La famille NGANDJO CHRISTIAN à Nantes FRANCE',
  },
  {
    id: 11,
    message: 'Madame veuve BIATHEU DORETTE',
  },
  {
    id: 12,
    message: 'Monsieur NOBIA DIEUDONNÉ',
  },
  {
    id: 13,
    message: 'La famille NGASSA BERNARD en Allemagne',
  },
  {
    id: 14,
    message: 'Monsieur TANDA LEONARD de Douala',
  },
  {
    id: 15,
    message: 'La famille TCHONKO à Yaounde',
  },
  {
    id: 16,
    message: 'Madame TUETENG HÉLÈNE épouse HEUSSI de Yaoundé',
  },
  {
    id: 17,
    message: 'La grande famille des élites FANDA',
  },
  {
    id: 18,
    message: 'Tous les fils et filles du GRAND-MOULIN.',
  },
];

export const bioData = [
  {
    id: 1,
    intro: 'VIE ASSOCIATIVE',
    info_one: 'Membre de LOUNG NYAKA de Bonaberie.',
    info_two: "Membre de l'association femme BAKOUA.",
  },
  {
    id: 2,
    intro: 'VIE RELIGIEUSE',
    info_one: "Chrétienne de L'ÉGLISE ÉVANGÉLIQUE du Cameroun.",
    info_two: 'Baptisée et communié.',
  },
];
