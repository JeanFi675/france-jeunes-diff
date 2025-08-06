// Données centralisées pour éviter la duplication (DRY)
export const competitionData = {
  // Informations générales
  event: {
    name: "Championnats de France Jeunes Difficulté",
    dates: "16-17 mai 2026",
    location: "Saint-Pierre-en-Faucigny",
    venue: "Complexe Sportif du Pays Rochois",
    address: "110 rue des Alpes, 74800 Saint-Pierre-en-Faucigny",
    eventDate: new Date('2026-05-16'),
  },
  
  // Section Hébergement
  accommodation: [
    {
      title: "Hôtel Alp'Azur",
      content: "5 min de la salle • 65€/nuit • Petit-déj inclus",
      icon: "🏨",
      badge: "🅿️ PARKING",
      variant: "default"
    },
    {
      title: "Ibis Budget Cluses",
      content: "15 min • 45€/nuit • Proche gare",
      icon: "🏢",
      badge: "ÉCONOMIQUE",
      variant: "mint"
    },
    {
      title: "Camping Municipal",
      content: "10 min • 15€/emplacement • Sanitaires chauffés",
      icon: "⛺",
      badge: "NATURE",
      variant: "default"
    }
  ],
  
  // Section Transport
  transport: [
    {
      title: "EN VOITURE",
      content: "A40 sortie 18 • Parking 500 places gratuit • GPS: 46.0644, 6.3698",
      icon: "🚗",
      variant: "default"
    },
    {
      title: "EN TRAIN",
      content: "Gare de Cluses (15 min) • Navette gratuite samedi/dimanche • Départ toutes les heures",
      icon: "🚂",
      badge: "NAVETTE",
      variant: "mint"
    },
    {
      title: "EN AVION",
      content: "Genève 45 min • Lyon 2h • Location voiture sur place",
      icon: "✈️",
      variant: "default"
    }
  ],
  
  // Section Restauration
  food: [
    {
      title: "La Table Savoyarde",
      content: "5 min à pied • Spécialités locales • Menu 15-25€",
      icon: "🍽️",
      badge: "TERROIR",
      variant: "default"
    },
    {
      title: "Food Truck Festival",
      content: "Sur place • Samedi & dimanche • Burgers, crêpes, végé",
      icon: "🚚",
      badge: "SUR PLACE",
      variant: "mint"
    },
    {
      title: "Boulangerie du Centre",
      content: "2 min • Petit-déj dès 6h30 • Sandwichs à emporter",
      icon: "🥐",
      badge: "PETIT-DÉJ",
      variant: "default"
    }
  ],
  
  // Section Public
  publicInfo: {
    title: "🎪 SPECTACLE GRATUIT POUR TOUS",
    points: [
      "✅ Entrée 100% gratuite",
      "✅ Spectacle impressionnant garanti",
      "✅ Animations enfants 14h-16h",
      "✅ Accessible PMR",
      "✅ Buvette et restauration sur place"
    ],
    callToAction: "Venez découvrir l'élite de l'escalade française !"
  },
  
  // Section Compétiteurs
  competitorsInfo: {
    title: "🏆 INFOS COMPÉTITEURS",
    points: [
      "⏰ Accueil dès 7h30",
      "🔥 Salle d'échauffement chauffée",
      "👕 Vestiaires spacieux",
      "📶 WiFi gratuit",
      "☕ Machine à café / snacks"
    ],
    important: "Prévoir licence FFME et certificat médical"
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