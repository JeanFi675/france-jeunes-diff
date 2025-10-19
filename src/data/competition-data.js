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
  
  // Section Hébergement & Restauration avec format spécial
  accommodation: {
    title: "🏨 HÉBERGEMENT & RESTAURATION",
    description: "Les offices de tourisme de La Roche-sur-Foron et Bonneville peuvent vous accompagner pour organiser votre séjour : hébergements, restaurants.",
    offices: [
      {
        title: "LA ROCHE-SUR-FORON",
        link: "http://www.larochesurforon.com/hebergement/centrale-de-disponibilites.htm"
      },
      {
        title: "BONNEVILLE FAUCIGNY-GLIÈRES", 
        link: "https://www.tourisme-faucigny-glieres.fr/"
      }
    ]
  },
  
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
  
  // Section Commerces de proximité
  food: [
    {
      title: "SUPERMARCHÉ BI1",
      content: "59 place des Arcades\n\n• Lun-Sam: 8h-20h\n• Dimanche: 8h30-12h30\n• Parking gratuit disponible",
      icon: "🛒",
      variant: "default",
      link: "https://maps.google.com/maps?q=Bi1+59+place+des+Arcades+74800+Saint-Pierre-en-Faucigny"
    },
    {
      title: "PHARMACIE DE LA GARE",
      content: "20 place des Arcades\n\n• Lun-Ven: 8h15-12h15 / 14h-19h15\n• Sam: 8h15-12h15 / 14h-18h45\n• Dim: Fermé",
      icon: "💊",
      variant: "black",
      link: "https://maps.google.com/maps?q=Pharmacie+de+la+Gare+20+place+des+Arcades+74800+Saint-Pierre-en-Faucigny"
    },
    {
      title: "CRÉDIT AGRICOLE + DAB",
      content: "81 place des Arcades\n\n• DAB disponible 24h/7j\n• Agence: Mar-Ven 9h-12h / 14h-18h\n• Samedi: 9h-12h",
      icon: "💳",
      variant: "default",
      link: "https://maps.google.com/maps?q=Crédit+Agricole+81+place+des+Arcades+74800+Saint-Pierre-en-Faucigny"
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