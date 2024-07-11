export let DATA_CATEGORIES = [
  {
    id: 0,
    libelle: "Toutes les catégories",
    subcategories: [],
  },
  {
    id: 1,
    libelle: "Alimentation",
    subcategories: ["Supermarché", "Restaurant", "Café", "Boulangerie"],
  },
  {
    id: 2,
    libelle: "Transport",
    subcategories: ["Essence", "Train", "Bus", "Taxi"],
  },
  {
    id: 3,
    libelle: "Santé",
    subcategories: ["Pharmacie", "Dentiste", "Médecin", "Opticien"],
  },
  {
    id: 4,
    libelle: "Maison",
    subcategories: ["Loyer", "électricité", "Eau", "Internet"],
  },
  {
    id: 5,
    libelle: "Loisirs",
    subcategories: ["Cinéma", "Théâtre", "Concert", "Parc"],
  },
  {
    id: 6,
    libelle: "Education",
    subcategories: [
      "Livres",
      "Frais de scolarité",
      "Cours en ligne",
      "Matériel scolaire",
    ],
  },
  {
    id: 7,
    libelle: "Vêtements",
    subcategories: ["Magasin", "En ligne", "Chaussures", "Accessoires"],
  },
  {
    id: 8,
    libelle: "Voyages",
    subcategories: ["Billets d'avion", "Hôtel", "Excursions", "Souvenirs"],
  },
  {
    id: 9,
    libelle: "Technologie",
    subcategories: ["Ordinateur", "Téléphone", "Accessoires", "Logiciels"],
  },
  {
    id: 10,
    libelle: "Sport",
    subcategories: [
      "Salle de sport",
      "Équipement",
      "Vêtements de sport",
      "Coaching",
    ],
  },
  {
    id: 11,
    libelle: "Beauté",
    subcategories: ["Coiffure", "Maquillage", "Soins du visage", "Parfum"],
  },
  {
    id: 12,
    libelle: "Animaux",
    subcategories: ["Nourriture", "Vétérinaire", "Accessoires", "Toilettage"],
  },
  {
    id: 13,
    libelle: "Cadeaux",
    subcategories: ["Anniversaire", "Noël", "Mariage", "Divers"],
  },
  {
    id: 14,
    libelle: "Banque",
    subcategories: ["Frais bancaires", "Prêt", "Épargne", "Investissements"],
  },
  {
    id: 15,
    libelle: "Impôts",
    subcategories: ["Revenu", "Propriété", "Taxe d'habitation", "TVA"],
  },
  {
    id: 16,
    libelle: "Services",
    subcategories: ["Nettoyage", "Réparations", "Jardinage", "Garde d'enfants"],
  },
  {
    id: 17,
    libelle: "Assurances",
    subcategories: ["Santé", "Voiture", "Maison", "Vie"],
  },
  {
    id: 18,
    libelle: "Communications",
    subcategories: ["Téléphone", "Internet", "Télévision", "Poste"],
  },
  {
    id: 19,
    libelle: "Divertissement",
    subcategories: ["Jeux", "Streaming", "Sorties", "Livres"],
  },
  {
    id: 20,
    libelle: "Charité",
    subcategories: ["Dons", "Bénévolat", "Événements caritatifs", "Campagnes"],
  },
];
/*
export let DATA_CATEGORIES = [
  {
    id: 0,
    libelle: "Alimentation",
    subcategories: ["Supermarché", "Restaurant", "Café", "Boulangerie"],
  },
  {
    id: 1,
    libelle: "Transport",
    subcategories: ["Essence", "Train", "Bus", "Taxi"],
  },
  {
    id: 2,
    libelle: "Santé",
    subcategories: ["Pharmacie", "Dentiste", "Médecin", "Opticien"],
  },
  {
    id: 3,
    libelle: "Maison",
    subcategories: ["Loyer", "électricité", "Eau", "Internet"],
  },
  {
    id: 4,
    libelle: "Loisirs",
    subcategories: ["Cinéma", "Théâtre", "Concert", "Parc"],
  },
  {
    id: 5,
    libelle: "Education",
    subcategories: [
      "Livres",
      "Frais de scolarité",
      "Cours en ligne",
      "Matériel scolaire",
    ],
  },
  {
    id: 6,
    libelle: "Vêtements",
    subcategories: ["Magasin", "En ligne", "Chaussures", "Accessoires"],
  },
  {
    id: 7,
    libelle: "Voyages",
    subcategories: ["Billets d'avion", "Hôtel", "Excursions", "Souvenirs"],
  },
  {
    id: 8,
    libelle: "Technologie",
    subcategories: ["Ordinateur", "Téléphone", "Accessoires", "Logiciels"],
  },
  {
    id: 9,
    libelle: "Sport",
    subcategories: [
      "Salle de sport",
      "Équipement",
      "Vêtements de sport",
      "Coaching",
    ],
  },
  {
    id: 10,
    libelle: "Beauté",
    subcategories: ["Coiffure", "Maquillage", "Soins du visage", "Parfum"],
  },
  {
    id: 11,
    libelle: "Animaux",
    subcategories: ["Nourriture", "Vétérinaire", "Accessoires", "Toilettage"],
  },
  {
    id: 12,
    libelle: "Cadeaux",
    subcategories: ["Anniversaire", "Noël", "Mariage", "Divers"],
  },
  {
    id: 13,
    libelle: "Banque",
    subcategories: ["Frais bancaires", "Prêt", "Épargne", "Investissements"],
  },
  {
    id: 14,
    libelle: "Impôts",
    subcategories: ["Revenu", "Propriété", "Taxe d'habitation", "TVA"],
  },
  {
    id: 15,
    libelle: "Services",
    subcategories: ["Nettoyage", "Réparations", "Jardinage", "Garde d'enfants"],
  },
  {
    id: 16,
    libelle: "Assurances",
    subcategories: ["Santé", "Voiture", "Maison", "Vie"],
  },
  {
    id: 17,
    libelle: "Communications",
    subcategories: ["Téléphone", "Internet", "Télévision", "Poste"],
  },
  {
    id: 18,
    libelle: "Divertissement",
    subcategories: ["Jeux", "Streaming", "Sorties", "Livres"],
  },
  {
    id: 19,
    libelle: "Charité",
    subcategories: ["Dons", "Bénévolat", "Événements caritatifs", "Campagnes"],
  },
];*/
