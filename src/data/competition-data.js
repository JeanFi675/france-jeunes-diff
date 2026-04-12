import imgWallMain from '../assets/IMG_4355_opt.jpg';
import imgWallDetail from '../assets/IMG_4364_opt.jpg';
import imgCompetitionAction from '../assets/coupe-deurope-escalade-jeunes--2565jpg_53013559053_o.jpg';
import imgCamp from '../assets/CAMP.png';
import imgAuVieuxCampeur from '../assets/Au vieux Campeur.png';
import imgBeal from '../assets/Beal.png';
import imgCheeta from '../assets/Cheeta.png';
import imgIntersport from '../assets/Intersport.png';
import imgPetzl from '../assets/Petzl.png';
import imgFfcam74 from '../assets/ffcam74-logo.png';
import imgAura from '../assets/01 - Logo_Auvergne-Rhône-Alpes.png';
import imgHauteSavoie from '../assets/02 - Logo_Haute_Savoie_2015.png';
import imgCCPR from '../assets/03 - CCPR.png';
import imgORS from '../assets/04 - Logo ORS 2018 finale.png';
import imgLaRoche from '../assets/05 - La Roche.png';
import imgStPierre from '../assets/06 - Saint Pierre en Faucigny.png';
import imgBonneville from '../assets/07 - Logo_Bonneville_Haute_Savoie.png';

export const competitionData = {
  // Informations générales
  event: {
    name: 'Championnats de France Jeunes de Difficulté',
    shortName: 'CHPT FRANCE JEUNES ESCALADE DIFFICULTÉ',
    dates: '16-17 mai 2026',
    datesShort: '16-17 MAI 2026',
    year: '2026',
    location: 'Saint-Pierre-en-Faucigny',
    locationShort: 'SAINT-PIERRE-EN-FAUCIGNY (74)',
    venue: 'Complexe Sportif du Pays Rochois',
    address: '110 rue des Alpes, 74800 Saint-Pierre-en-Faucigny',
    gpsCoords: '46.058511, 6.375860',
    eventDate: new Date('2026-05-16T09:00:00'),
    organizers: {
      main: 'CAF La Roche Bonneville',
      federation: "Fédération Française de Montagne et d'Escalade",
      shortText: 'FFME & CAF La Roche Bonneville & CT74 FFME',
    },
  },

  // Section Hébergement & Restauration avec format spécial
  accommodation: {
    title: '🏨 HÉBERGEMENT & RESTAURATION',
    description:
      'Les offices de tourisme de La Roche-sur-Foron et Bonneville peuvent vous accompagner pour organiser votre séjour : hébergements, restaurants.',
    offices: [
      {
        title: 'LA ROCHE-SUR-FORON',
        link: 'https://www.larochesurforon.com/hebergement/centrale-de-disponibilites.htm',
      },
      {
        title: 'BONNEVILLE FAUCIGNY-GLIÈRES',
        link: 'https://www.tourisme-faucigny-glieres.fr/',
      },
    ],
  },

  // Section Transport
  transport: [
    {
      title: 'EN AVION',
      content:
        'Aéroport de Genève\n\n• Train : 2h total (plusieurs correspondances : Aéroport → Genève → St-Pierre)\n• Voiture : 30min\n• Location recommandée',
      icon: '✈️',
      variant: 'mint',
      link: 'https://www.gva.ch/fr/Site/Passagers/Acces-Transports/Transports-publics-aeroport',
    },
    {
      title: 'EN TRAIN',
      content: '🚶 20min à pied\n\n• Gare Saint-Pierre-en-Faucigny\n• Annecy : 1h\n• Genève : 1h15',
      icon: '🚂',
      variant: 'default',
      link: 'https://www.ter.sncf.com/auvergne-rhone-alpes/se-deplacer/gares/saint-pierre-en-faucigny-87746313',
    },
    {
      title: 'EN BUS',
      content:
        'Détours possibles sur réservation\n\n• Lignes 360/380 : La Roche, Bonneville, Marignier\n• Ligne 460 : St-Jean-de-Sixt\n\n⚠️ PAS DE SERVICE LE DIMANCHE',
      icon: '🚌',
      variant: 'mint',
      link: 'https://www.proximiti.fr/',
    },
  ],

  // Section Commerces de proximité
  food: [
    {
      title: 'SUPERMARCHÉ SUPER U',
      content: '59 place des Arcades\n74800 SAINT PIERRE EN FAUCIGNY',
      icon: '🛒',
      variant: 'default',
      link: 'https://www.google.fr/maps/place/Super+U/@46.0585137,6.3730111,17z/data=!3m1!4b1!4m6!3m5!1s0x478c0b005a92d187:0xec332f40c73a8dac!8m2!3d46.05851!4d6.375586!16s%2Fg%2F11xzcssclm?entry=ttu&g_ep=EgoyMDI1MTAxNC4wIKXMDSoASAFQAw%3D%3D',
    },
    {
      title: 'PHARMACIE DE LA GARE',
      content:
        '20 place des Arcades\n74800 SAINT PIERRE EN FAUCIGNY\n\n• Lun-Ven: 8h15-12h15 / 14h-19h15\n• Sam: 8h15-12h15 / 14h-18h45\n• Dim: Fermé',
      icon: '💊',
      variant: 'black',
      link: 'https://maps.google.com/maps?q=Pharmacie+de+la+Gare+20+place+des+Arcades+74800+Saint-Pierre-en-Faucigny',
    },
    {
      title: 'CRÉDIT AGRICOLE + DAB',
      content:
        '81 place des Arcades\n74800 SAINT PIERRE EN FAUCIGNY\n\n• DAB disponible 24h/7j\n• Agence: Mar-Ven 9h-12h / 14h-18h\n• Samedi: 9h-12h',
      icon: '💳',
      variant: 'default',
      link: 'https://maps.google.com/maps?q=Crédit+Agricole+81+place+des+Arcades+74800+Saint-Pierre-en-Faucigny',
    },
  ],

  // Section Public
  publicInfo: {
    title: "UN WEEK-END D'ESCALADE INTENSE",
    subtitle: '👥 SPECTATEURS',
    highlights: [
      {
        parts: [
          { text: '🔥 Plus de ', style: null },
          { text: '300 jeunes grimpeurs', style: 'highlight' },
          { text: ', ', style: null },
          { text: '6 catégories', style: 'highlight' },
          { text: ', un seul objectif: décrocher les titres de ', style: null },
          { text: 'Champions et Championnes de France', style: 'highlight' },
        ],
      },
      {
        parts: [
          { text: '💥 Vibrez au rythme des ', style: null },
          { text: 'qualifications', style: 'highlight' },
          { text: ', tremblez pendant les ', style: null },
          { text: 'finales', style: 'highlight' },
          { text: '… et assistez à la naissance des ', style: null },
          { text: 'futures stars', style: 'highlight' },
          { text: " de l'escalade !", style: null },
        ],
      },
    ],
    points: [
      '🎫 Entrée 100% gratuite',
      '✨ Spectacle impressionnant garanti',
      '🍽️ Buvette et restauration sur place',
    ],
    callToAction: 'Venez vibrer avec nous !',
  },

  // Section Compétiteurs
  competitorsInfo: {
    title: "UN WEEK-END D'ESCALADE INTENSE",
    subtitle: '🏆 COMPÉTITEURS',
    points: [
      '⏰ Accueil dès 7h00',
      '🧳 Consigne',
      '👕 Vestiaires et douches disponibles',
      '🍽️ Buvette et restauration sur place',
    ],
    important: '',
    callToAction: 'Donnez tout sur le mur !',
  },

  // Section Statistiques
  stats: [
    { value: '300', label: 'ATHLÈTES', rotation: -3 },
    { value: '6', label: 'CATÉGORIES', rotation: 2 },
    { value: '2', label: 'JOURS', rotation: -1 },
    { value: '1', label: 'OBJECTIF : LE TITRE', rotation: 3 },
  ],

  // Section Programme
  program: {
    disclaimer:
      "Compétiteurs : voir horaires officiels sur <a href='https://mycompet.ffme.fr/action/resumeCompetition/18306' target='_blank' style='text-decoration:underline;'>MyCompet</a>.",
    saturday: {
      date: 'SAMEDI 16 MAI',
      badge: 'QUALIFICATIONS',
      badgeVariant: 'mint',
      mainHours: '9H00 → 19H00',
      details: [
        { time: '9h00', label: 'U15 Femmes / U15 Hommes / U17 Hommes' },
        { time: '13h45', label: 'Diffusion de Vale M la montagne' },
        { time: '14h30', label: 'U17 Femmes / U19 Femmes / U19 Hommes' },
      ],
      rotation: -1,
    },
    dimanche: {
      date: 'DIMANCHE 17 MAI',
      badge: 'FINALES',
      badgeVariant: 'finales',
      mainHours: '10H25 → 16H00',
      details: [
        { time: '10h25-11h45', label: 'Finales U15' },
        { time: '11h55-13h15', label: 'Finales U17' },
        { time: '14h10-15h30', label: 'Finales U19' },
        { label: 'Suivi par la Cérémonie des Podiums' },
      ],
      rotation: 1,
    },
  },

  // Section Partenaires
  partners: {
    ffme: {
      title: 'PARTENAIRES OFFICIELS DE LA FFME',
      items: [
        {
          src: imgAuVieuxCampeur,
          alt: 'Au Vieux Campeur',
          url: 'https://www.auvieuxcampeur.fr/',
          rotation: -1,
          width: '180px',
          height: '110px',
        },
        {
          src: imgBeal,
          alt: 'Beal',
          url: 'https://www.beal-planet.com/',
          rotation: 2,
          width: '180px',
          height: '110px',
        },
      ],
    },
    club: {
      title: 'PARTENAIRES DU CLUB',
      items: [
        {
          src: imgCheeta,
          alt: 'Cheeta Climbing Holds',
          url: 'https://www.cheeta-holds.com/',
          rotation: -1,
          width: '180px',
          height: '110px',
        },
        {
          src: imgFfcam74,
          alt: 'FFCAM 74',
          url: 'https://cd-haute-savoie.ffcam.fr/',
          rotation: 1,
          width: '180px',
          height: '110px',
        },
        {
          src: imgPetzl,
          alt: 'Petzl',
          url: 'https://www.petzl.com/',
          rotation: -2,
          width: '180px',
          height: '110px',
        },
        {
          src: imgIntersport,
          alt: 'Intersport La Roche-sur-Foron',
          url: 'https://www.intersport.fr/Haute-Savoie-74/LAROCHES_FORON-74800/INTERSPORT-LAROCHES_FORON/00460_000/',
          rotation: 2,
          width: '180px',
          height: '110px',
        },
        {
          src: imgCamp,
          alt: 'CAMP',
          url: 'https://www.camp.it/d/fr/fr/corporate',
          rotation: -2,
          width: '180px',
          height: '110px',
        },
      ],
    },
    collectivites: {
      title: 'COLLECTIVITÉS',
      items: [
        {
          src: imgAura,
          alt: 'Région Auvergne-Rhône-Alpes',
          url: 'https://www.auvergnerhonealpes.fr/',
          rotation: -2,
          width: '190px',
          height: '120px',
        },
        {
          src: imgHauteSavoie,
          alt: 'Département Haute-Savoie',
          url: 'https://hautesavoie.fr/',
          rotation: 1,
          width: '190px',
          height: '120px',
        },
        {
          src: imgCCPR,
          alt: 'Communauté de Communes du Pays Rochois',
          url: 'https://www.ccpaysrochois.fr/',
          rotation: -1,
          width: '190px',
          height: '120px',
        },
        {
          src: imgORS,
          alt: 'Office Rochois des Sports',
          url: 'https://www.facebook.com/ORSLaRoche/',
          rotation: 2,
          width: '190px',
          height: '120px',
        },
        {
          src: imgLaRoche,
          alt: 'La Roche-sur-Foron',
          url: 'https://www.larochesurforon.fr/',
          rotation: -2,
          width: '190px',
          height: '120px',
        },
        {
          src: imgStPierre,
          alt: 'Saint-Pierre-en-Faucigny',
          url: 'https://www.saintpierreenfaucigny.fr/',
          rotation: 1,
          width: '190px',
          height: '120px',
        },
        {
          src: imgBonneville,
          alt: 'Bonneville',
          url: 'https://www.bonneville.fr/',
          rotation: -1,
          width: '190px',
          height: '120px',
        },
      ],
    },
  },

  // Section Formulaire de contact
  formSubjects: [
    { value: '', label: 'Choisissez un sujet' },
    { value: 'Inscription / Participation', label: 'Inscription / Participation' },
    { value: 'Informations pratiques', label: 'Informations pratiques' },
    { value: 'Hébergement / Transport', label: 'Hébergement / Transport' },
    { value: 'Bénévolat', label: 'Bénévolat' },
    { value: 'Partenariat / Sponsoring', label: 'Partenariat / Sponsoring' },
    { value: 'Presse / Média', label: 'Presse / Média' },
    { value: 'Autre', label: 'Autre' },
  ],

  // Section Arène des Champions
  arena: {
    wallData: {
      title: "NOTRE MUR D'ESCALADE",
      specs: [
        { value: '14,5M', label: 'HAUTEUR' },
        { value: '705M²', label: 'SURFACE GRIMPABLE' },
        { value: '8M', label: 'AVANCÉE' },
      ],
      photos: [
        { src: imgWallMain, alt: "Mur d'escalade principal du complexe sportif" },
        { src: imgWallDetail, alt: "Vue détaillée du mur d'escalade" },
        {
          src: imgCompetitionAction,
          alt: "Compétition d'escalade en action",
        },
      ],
    },
    historyEvents: [
      {
        year: '2019 & 2023',
        title: "2 Coupes d'Europe jeunes",
        description: '200 grimpeurs européens à chaque fois. Les French ont tout explosé !',
        rotation: -2,
      },
      {
        year: '2021',
        title: 'Championnat de France U12-U14',
        description: "220 jeunes grimpeurs, le seul championnat national de l'année COVID.",
        rotation: 1,
      },
      {
        year: '2022',
        title: 'Championnat régional Auvergne-Rhône-Alpes',
        description: 'Une région de très haut niveau en escalade.',
        rotation: -1,
      },
      {
        year: 'Depuis 2006',
        title: "14 R'batte",
        description: "Notre compét' locale qui cartonne depuis toujours.",
        rotation: 2,
      },
    ],
    champions: [
      {
        name: 'Oriane BERTONE',
        stPierreVictory: "🏆 Or U16 - Coupe d'Europe 2019",
        achievements: [
          'N°1 MONDIALE 2025 (1ère française depuis 2007)',
          'Vice-championne du monde 2023 et 2025',
          'Finaliste JO Paris 2024',
        ],
        photoUrl:
          'https://www.ifsc-climbing.org/_next/image?url=https%3A%2F%2Fd1n1qj9geboqnb.cloudfront.net%2Fifsc%2Fpublic%2Famnere1bc35p9o3slgolzq0eoahp&w=1920&q=75',
        rotation: 2,
      },
      {
        name: 'Mejdi SCHALCK',
        stPierreVictory: "🥈 Argent U16 - Coupe d'Europe 2019",
        achievements: ['N°2 MONDIAL 2025 (4 145 points)', 'Vice-champion du monde 2023 et 2025'],
        photoUrl:
          'https://www.ifsc-climbing.org/_next/image?url=https%3A%2F%2Fd1n1qj9geboqnb.cloudfront.net%2Fifsc%2Fpublic%2Fs1hp3hca9sgnilgndzsqx0xglr0u&w=1920&q=75',
        rotation: -2,
      },
      {
        name: 'Paul JENFT',
        stPierreVictory: "🏆 Or U18 - Coupe d'Europe 2019",
        achievements: [
          'Finaliste JO Paris 2024',
          "Champion d'Europe 2017, 2018, 2019",
          'Bronze Coupe du monde 2023 (Hachioji)',
        ],
        photoUrl:
          'https://www.ifsc-climbing.org/_next/image?url=https%3A%2F%2Fd1n1qj9geboqnb.cloudfront.net%2Fifsc%2Fpublic%2F84js5tt7ogsd2xnow56v5bchwo86&w=1920&q=75',
        rotation: 1,
      },
      {
        name: 'Sam AVEZOU',
        stPierreVictory: "🏆 Or U20 - Coupe d'Europe 2019",
        achievements: [
          'Demi-finaliste JO Paris 2024',
          '3 médailles européennes 2024 (2 or + 1 argent)',
          'Bronze JOJ 2018 (1er français médaillé JOJ)',
        ],
        photoUrl:
          'https://www.ifsc-climbing.org/_next/image?url=https%3A%2F%2Fd1n1qj9geboqnb.cloudfront.net%2Fifsc%2Fpublic%2Fhtxm4ch4wps6rim6us1iozkc2tsk&w=1920&q=75',
        rotation: -1,
      },
      {
        name: 'Max BERTONE',
        stPierreVictory: "🏆 Or U18 - Coupe d'Europe 2023",
        achievements: [
          'Champion du monde U16 difficulté 2022',
          'Champion de France senior 2025 (18 ans)',
          '2e Coupe du monde 2025 (Bali)',
        ],
        photoUrl: '/images/champions/Max-Bertone.jpg',
        rotation: 2,
      },
      {
        name: 'Louise PUECH YAZID',
        stPierreVictory: '🏆 Championne France U14 2021',
        achievements: [
          'Bronze championne du monde jeunes 2025 (difficulté, 3 août)',
          "Or Coupe d'Europe jeunes 2024",
          'Équipe de France jeunes',
        ],
        photoUrl: '/images/champions/Louise.jpg',
        rotation: -2,
      },
      {
        name: 'Alberto GINÉS LÓPEZ',
        stPierreVictory: "🥉 Bronze U18 - Coupe d'Europe 2019",
        achievements: [
          'CHAMPION OLYMPIQUE 2021 (1er titre escalade JO)',
          "Champion d'Europe senior 2019",
        ],
        photoUrl:
          'https://www.ifsc-climbing.org/_next/image?url=https%3A%2F%2Fd1n1qj9geboqnb.cloudfront.net%2Fifsc%2Fpublic%2Fmo6typrlxpapfeghys0tfqq76v06&w=1920&q=75',
        rotation: -1,
      },
    ],
    videos: [
      {
        title: "Coupe d'Europe 2023",
        rotation: -2,
        videoUrl: 'videos/coupe-europe-2023.mp4',
        thumbnail: 'videos/coupe-europe-2023-thumb.jpg',
      },
      {
        title: 'Championnat de France U12-U14 2021',
        rotation: 1,
        videoUrl: 'videos/championnats-france-u12-u14-2021.mp4',
        thumbnail: 'videos/championnats-france-u12-u14-2021-thumb.jpg',
      },
      {
        title: "Coupe d'Europe 2019",
        rotation: -1,
        videoUrl: 'videos/coupe-europe-2019.mp4',
        thumbnail: 'videos/coupe-europe-2019-thumb.jpg',
      },
      {
        title: "R'batte 2018",
        rotation: 2,
        videoUrl: 'videos/rbatte-2018.mp4',
        thumbnail: 'videos/rbatte-2018-thumb.jpg',
      },
      {
        title: "R'batte 2017",
        rotation: -2,
        videoUrl: 'videos/rbatte-2017.mp4',
        thumbnail: 'videos/rbatte-2017-thumb.jpg',
      },
    ],
  },
};

// Fonction helper pour calculer les jours restants (DRY)
export function getDaysUntilEvent() {
  const today = new Date();
  const eventDate = competitionData.event.eventDate;
  const diffTime = eventDate - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}

// Export pour réutilisation
export default competitionData;
