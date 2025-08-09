// Données centralisées pour éviter la duplication (DRY)
export const competitionData = {
  // Informations générales
  event: {
    name: "Championnats de France Jeunes de Difficulté",
    dates: "16-17 mai 2026",
    location: "Saint-Pierre-en-Faucigny",
    venue: "Complexe Sportif du Pays Rochois",
    address: "110 rue des Alpes, 74800 Saint-Pierre-en-Faucigny",
    eventDate: new Date('2026-05-16'),
  },
  
  // Section Hébergement
  accommodation: [
    {
      title: "Office Tourisme La Roche",
      content: "larochesurforon.com • +33 4 50 03 36 68 • Hôtels, gîtes, chambres d'hôtes",
      icon: "🏨",
      badge: "RÉSERVATIONS",
      variant: "mint"
    },
    {
      title: "Office Tourisme Bonneville", 
      content: "tourism.tourisme-faucigny-glieres.fr • +33 4 50 97 38 37 • Tous hébergements",
      icon: "🏢",
      badge: "CONSEIL EXPERT",
      variant: "default"
    },
    {
      title: "Partenaires Hébergement",
      content: "Partenaires officiels à venir • Tarifs préférentiels négociés • Info bientôt disponible",
      icon: "🤝",
      badge: "BIENTÔT",
      variant: "default"
    }
  ],
  
  // Section Transport
  transport: [
    {
      title: "EN AVION",
      content: "Aéroport de Genève\n\n• Train : 2h total (plusieurs correspondances : Aéroport → Genève → St-Pierre)\n• Voiture : 30min\n• Location recommandée",
      icon: "✈️",
      variant: "mint",
      link: "https://www.gva.ch/fr/Site/Passagers/Acces-Transports/Transports-publics-aeroport"
    },
    {
      title: "EN TRAIN",
      content: "🚶 20min à pied\n\n• Gare Saint-Pierre-en-Faucigny\n• Annecy : 1h\n• Genève : 1h15",
      icon: "🚂",
      variant: "default",
      link: "https://www.ter.sncf.com/auvergne-rhone-alpes/se-deplacer/gares/saint-pierre-en-faucigny-87746313"
    },
    {
      title: "EN BUS",
      content: "Détours possibles sur réservation\n\n• Lignes 360/380 : La Roche, Bonneville, Marignier\n• Ligne 460 : St-Jean-de-Sixt\n\n⚠️ PAS DE SERVICE LE DIMANCHE",
      icon: "🚌",
      variant: "mint",
      link: "https://www.proximiti.fr/"
    }
  ],
  
  // Section Restauration
  food: [
    {
      title: "Supermarchés",
      content: "BI1 (59 place Arcades) • Netto La Roche • Intermarché • Courses et pique-niques",
      icon: "🏪",
      badge: "COURSES",
      variant: "default"
    },
    {
      title: "Restaurants sur place",
      content: "La Piccola Sicilia (pizzas) • Anatole Alpes (turc) • À St-Pierre et villes proches",
      icon: "🍽️",
      badge: "PROCHE",
      variant: "mint"
    },
    {
      title: "Petit-déjeuner",
      content: "Boulangerie La Panière • Ouverture tôt • Sandwichs pour la journée",
      icon: "🥐",
      badge: "DÈS 6H30",
      variant: "default"
    }
  ],
  
  // Section Public
  publicInfo: {
    title: "UN WEEK-END D'ESCALADE INTENSE",
    subtitle: "👥 SPECTATEURS",
    points: [
      "🎫 Entrée 100% gratuite",
      "✨ Spectacle impressionnant garanti",
      "🍽️ Buvette et restauration sur place"
    ],
    callToAction: "Venez vibrer avec nous !"
  },
  
  // Section Compétiteurs
  competitorsInfo: {
    title: "UN WEEK-END D'ESCALADE INTENSE",
    subtitle: "🏆 COMPÉTITEURS",
    points: [
      "⏰ Accueil dès 7h30",
      "🧳 Consigne",
      "👕 Vestiaires et douches disponibles",
      "🍽️ Buvette et restauration sur place"
    ],
    important: "",
    callToAction: "Donnez tout sur le mur !"
  },
  
  // Témoignages
  testimonials: [
    {
      text: "Une ambiance de folie ! Les enfants ont adoré voir les grimpeurs voler sur le mur",
      author: "Marie, spectatrice 2024",
      rating: 5
    },
    {
      text: "Super organisation, parking facile, et le food truck était top !",
      author: "Thomas, papa grimpeur",
      rating: 5
    },
    {
      text: "On ne connaissait pas l'escalade, on est repartis fans ! Merci pour ce spectacle gratuit",
      author: "Famille Durand, Cluses",
      rating: 5
    }
  ],
  
  // Météo et conseils
  weatherTips: {
    outside: "Mai en Haute-Savoie : 15-20°C, prévoir une veste",
    inside: "Salle chauffée à 22°C, t-shirt suffisant",
    accessories: [
      "📱 Batterie externe pour filmer",
      "🥤 Gourde (fontaine gratuite)",
      "🪑 Coussin pour les gradins",
      "📸 Appareil photo autorisé"
    ]
  }
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