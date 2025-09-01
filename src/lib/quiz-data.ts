// Types pour les quiz
export interface QuizQuestion {
  id: string;
  question_text: string;
  question_type: 'multiple_choice' | 'true_false';
  options: string[];
  correct_answer: string;
  explanation?: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface Country {
  id: string;
  name: string;
  language: string;
  language_code: string;
}

// Données des pays
export const countries: Country[] = [
  { id: "tr", name: "Turquie", language: "Turc", language_code: "tr" },
  { id: "uk", name: "Royaume-Uni", language: "Anglais", language_code: "en" },
  { id: "es", name: "Espagne", language: "Espagnol", language_code: "es" }
];

// Catégories de quiz
export const categories: Category[] = [
  { id: "aeroport", name: "Aéroport & Formalités", icon: "✈️", description: "Vocabulaire pour les contrôles, bagages et procédures" },
  { id: "hebergement", name: "Hébergement", icon: "🏨", description: "Communication avec les hôtels et logements" },
  { id: "salutations", name: "Salutations & Politesse", icon: "👋", description: "Formules de courtoisie et interactions sociales" },
  { id: "orientation", name: "Orientation", icon: "🧭", description: "Demander son chemin et se repérer" },
  { id: "shopping", name: "Shopping & Argent", icon: "🛍️", description: "Achats, négociation et gestion financière" },
  { id: "transports", name: "Transports locaux", icon: "🚌", description: "Bus, métro, taxi et moyens de transport" },
  { id: "sante", name: "Santé & Sécurité", icon: "🏥", description: "Urgences médicales et situations de sécurité" },
  { id: "urgences", name: "Urgences administratives", icon: "🛂", description: "Consulats, police et démarches officielles" },
  { id: "restaurant", name: "Restaurant", icon: "🍽️", description: "Commander, payer et découvrir la cuisine locale" },
  { id: "loisirs", name: "Événements & Loisirs", icon: "🎭", description: "Activités culturelles et divertissements" }
];

// Questions de quiz pour la Turquie
export const turkeyQuestions: { [categoryId: string]: QuizQuestion[] } = {
  aeroport: [
    {
      id: "tr_aero_1",
      question_text: "Comment dire \"Carte d'embarquement, s'il vous plaît\" ?",
      question_type: "multiple_choice",
      options: ["Boarding pass, lütfen", "Pasaport, lütfen", "Check-in, lütfen", "Bagaj, lütfen"],
      correct_answer: "Boarding pass, lütfen"
    },
    {
      id: "tr_aero_2",
      question_text: "Vrai ou faux : \"Güvenlik kontrolü\" = bagage perdu.",
      question_type: "true_false",
      options: ["Vrai", "Faux"],
      correct_answer: "Faux",
      explanation: "Güvenlik kontrolü signifie contrôle de sécurité"
    },
    {
      id: "tr_aero_3",
      question_text: "Complétez : \"Nerede ____ teslimi?\" (Où est la livraison de …)",
      question_type: "multiple_choice",
      options: ["bilet", "bagaj", "otobüs", "pasaport"],
      correct_answer: "bagaj"
    },
    {
      id: "tr_aero_4",
      question_text: "Traduisez : \"Sadece el bagajım var.\"",
      question_type: "multiple_choice",
      options: ["J'ai un billet", "J'ai seulement un bagage à main", "J'ai une réservation", "J'ai perdu ma valise"],
      correct_answer: "J'ai seulement un bagage à main"
    }
  ],
  
  hebergement: [
    {
      id: "tr_hotel_1",
      question_text: "Traduisez : \"Rezervasyonum var.\"",
      question_type: "multiple_choice",
      options: ["J'ai une réservation", "J'ai une clé", "Je veux payer", "Je veux sortir"],
      correct_answer: "J'ai une réservation"
    },
    {
      id: "tr_hotel_2",
      question_text: "Vrai ou faux : \"Banyo\" = chambre.",
      question_type: "true_false",
      options: ["Vrai", "Faux"],
      correct_answer: "Faux",
      explanation: "Banyo signifie salle de bain"
    },
    {
      id: "tr_hotel_3",
      question_text: "Complétez : \"Anahtarı ____ misiniz?\" (Pouvez-vous donner la clé ?)",
      question_type: "multiple_choice",
      options: ["verebilir", "içebilir", "yazabilir", "kapatabilir"],
      correct_answer: "verebilir"
    },
    {
      id: "tr_hotel_4",
      question_text: "Que veut dire \"Kahvaltı dahil mi?\"",
      question_type: "multiple_choice",
      options: ["Le déjeuner est inclus ?", "Le petit-déjeuner est inclus ?", "La chambre est propre ?", "La salle de bain est fermée ?"],
      correct_answer: "Le petit-déjeuner est inclus ?"
    }
  ],

  salutations: [
    {
      id: "tr_salut_1",
      question_text: "Traduisez : \"Merhaba.\"",
      question_type: "multiple_choice",
      options: ["Bonjour", "Merci", "Excusez-moi", "Au revoir"],
      correct_answer: "Bonjour"
    },
    {
      id: "tr_salut_2",
      question_text: "Vrai ou faux : \"Teşekkür ederim\" = Merci.",
      question_type: "true_false",
      options: ["Vrai", "Faux"],
      correct_answer: "Vrai"
    },
    {
      id: "tr_salut_3",
      question_text: "Complétez : \"____ , lütfen.\"",
      question_type: "multiple_choice",
      options: ["Su", "Araba", "Çanta", "Uçak"],
      correct_answer: "Su",
      explanation: "Su signifie eau"
    },
    {
      id: "tr_salut_4",
      question_text: "Que veut dire \"Affedersiniz\"?",
      question_type: "multiple_choice",
      options: ["Excusez-moi", "Bonjour", "Merci", "Bonne nuit"],
      correct_answer: "Excusez-moi"
    }
  ],

  orientation: [
    {
      id: "tr_orient_1",
      question_text: "Traduisez : \"İstasyon nerede?\"",
      question_type: "multiple_choice",
      options: ["Où est la gare ?", "Où est la chambre ?", "Où est le restaurant ?", "Où est la police ?"],
      correct_answer: "Où est la gare ?"
    },
    {
      id: "tr_orient_2",
      question_text: "Vrai ou faux : \"Uzak mı?\" = Est-ce loin ?",
      question_type: "true_false",
      options: ["Vrai", "Faux"],
      correct_answer: "Vrai"
    },
    {
      id: "tr_orient_3",
      question_text: "Complétez : \"____ / Sağ / Düz\"",
      question_type: "multiple_choice",
      options: ["Sol", "Ev", "Çanta", "Para"],
      correct_answer: "Sol",
      explanation: "Sol signifie gauche"
    },
    {
      id: "tr_orient_4",
      question_text: "Que veut dire \"Düz\"?",
      question_type: "multiple_choice",
      options: ["À gauche", "À droite", "Tout droit", "Derrière"],
      correct_answer: "Tout droit"
    }
  ],

  shopping: [
    {
      id: "tr_shop_1",
      question_text: "Traduisez : \"Bu ne kadar?\"",
      question_type: "multiple_choice",
      options: ["Combien ça coûte ?", "Où est la gare ?", "Je voudrais acheter ceci", "C'est trop cher"],
      correct_answer: "Combien ça coûte ?"
    },
    {
      id: "tr_shop_2",
      question_text: "Vrai ou faux : \"Çok pahalı\" = C'est trop cher.",
      question_type: "true_false",
      options: ["Vrai", "Faux"],
      correct_answer: "Vrai"
    },
    {
      id: "tr_shop_3",
      question_text: "Complétez : \"Kart ____ musunuz?\" (Acceptez-vous la carte ?)",
      question_type: "multiple_choice",
      options: ["kabul", "araba", "otobüs", "yemek"],
      correct_answer: "kabul"
    },
    {
      id: "tr_shop_4",
      question_text: "Que veut dire \"Bunu almak istiyorum\"?",
      question_type: "multiple_choice",
      options: ["Je voudrais acheter ceci", "Je voudrais vendre ceci", "Je voudrais manger ceci", "Je voudrais donner ceci"],
      correct_answer: "Je voudrais acheter ceci"
    }
  ],

  transports: [
    {
      id: "tr_trans_1",
      question_text: "Traduisez : \"Otobüs durağı nerede?\"",
      question_type: "multiple_choice",
      options: ["Où est la gare ?", "Où est l'arrêt de bus ?", "Où est l'aéroport ?", "Où est la chambre ?"],
      correct_answer: "Où est l'arrêt de bus ?"
    },
    {
      id: "tr_trans_2",
      question_text: "Vrai ou faux : \"Bir bilet, lütfen\" = Un billet, s'il vous plaît.",
      question_type: "true_false",
      options: ["Vrai", "Faux"],
      correct_answer: "Vrai"
    },
    {
      id: "tr_trans_3",
      question_text: "Complétez : \"Bilet ____?\" (Le billet coûte combien ?)",
      question_type: "multiple_choice",
      options: ["ne kadar", "araba", "yemek", "otel"],
      correct_answer: "ne kadar"
    },
    {
      id: "tr_trans_4",
      question_text: "Que veut dire \"Burada durun, lütfen\"?",
      question_type: "multiple_choice",
      options: ["Arrêtez ici, s'il vous plaît", "Continuez", "Attendez", "Tout droit"],
      correct_answer: "Arrêtez ici, s'il vous plaît"
    }
  ],

  sante: [
    {
      id: "tr_sante_1",
      question_text: "Traduisez : \"Doktora ihtiyacım var.\"",
      question_type: "multiple_choice",
      options: ["J'ai besoin d'un médecin", "J'ai besoin d'un taxi", "J'ai besoin d'une clé", "J'ai besoin d'un billet"],
      correct_answer: "J'ai besoin d'un médecin"
    },
    {
      id: "tr_sante_2",
      question_text: "Vrai ou faux : \"Eczane\" = pharmacie.",
      question_type: "true_false",
      options: ["Vrai", "Faux"],
      correct_answer: "Vrai"
    },
    {
      id: "tr_sante_3",
      question_text: "Complétez : \"Ambulans ____ !\"",
      question_type: "multiple_choice",
      options: ["çağırın", "kapatın", "satın", "yazın"],
      correct_answer: "çağırın",
      explanation: "çağırın signifie appelez"
    },
    {
      id: "tr_sante_4",
      question_text: "Que veut dire \"Kendimi iyi hissetmiyorum\"?",
      question_type: "multiple_choice",
      options: ["Je ne me sens pas bien", "Je n'ai pas faim", "Je ne comprends pas", "Je veux partir"],
      correct_answer: "Je ne me sens pas bien"
    }
  ],

  urgences: [
    {
      id: "tr_urgence_1",
      question_text: "Traduisez : \"Pasaportumu kaybettim.\"",
      question_type: "multiple_choice",
      options: ["J'ai perdu mon passeport", "J'ai perdu ma valise", "J'ai perdu mon argent", "J'ai perdu mon billet"],
      correct_answer: "J'ai perdu mon passeport"
    },
    {
      id: "tr_urgence_2",
      question_text: "Vrai ou faux : \"Konsolosluk\" = consulat.",
      question_type: "true_false",
      options: ["Vrai", "Faux"],
      correct_answer: "Vrai"
    },
    {
      id: "tr_urgence_3",
      question_text: "Complétez : \"Polis ____ .\"",
      question_type: "multiple_choice",
      options: ["lazım", "yemek", "otel", "araba"],
      correct_answer: "lazım",
      explanation: "lazım signifie nécessaire"
    },
    {
      id: "tr_urgence_4",
      question_text: "Que veut dire \"Bana yardım eder misiniz?\"",
      question_type: "multiple_choice",
      options: ["Pouvez-vous m'aider ?", "Pouvez-vous m'attendre ?", "Pouvez-vous me donner un billet ?", "Pouvez-vous m'accompagner ?"],
      correct_answer: "Pouvez-vous m'aider ?"
    }
  ],

  restaurant: [
    {
      id: "tr_resto_1",
      question_text: "Traduisez : \"Hesap, lütfen.\"",
      question_type: "multiple_choice",
      options: ["L'addition, s'il vous plaît", "Le ticket, s'il vous plaît", "La chambre, s'il vous plaît", "Le passeport, s'il vous plaît"],
      correct_answer: "L'addition, s'il vous plaît"
    },
    {
      id: "tr_resto_2",
      question_text: "Vrai ou faux : \"Su\" = eau.",
      question_type: "true_false",
      options: ["Vrai", "Faux"],
      correct_answer: "Vrai"
    },
    {
      id: "tr_resto_3",
      question_text: "Complétez : \"Bir masa ____ , lütfen.\"",
      question_type: "multiple_choice",
      options: ["iki kişilik", "araba", "bilet", "kapı"],
      correct_answer: "iki kişilik",
      explanation: "iki kişilik signifie pour deux personnes"
    },
    {
      id: "tr_resto_4",
      question_text: "Que veut dire \"Bu yemek acı mı?\"",
      question_type: "multiple_choice",
      options: ["Ce plat est froid ?", "Ce plat est épicé ?", "Ce plat est gratuit ?", "Ce plat est sucré ?"],
      correct_answer: "Ce plat est épicé ?"
    }
  ],

  loisirs: [
    {
      id: "tr_loisir_1",
      question_text: "Traduisez : \"Saat kaçta başlıyor?\"",
      question_type: "multiple_choice",
      options: ["À quelle heure ça commence ?", "Où est la gare ?", "Combien ça coûte ?", "Où est le taxi ?"],
      correct_answer: "À quelle heure ça commence ?"
    },
    {
      id: "tr_loisir_2",
      question_text: "Vrai ou faux : \"Bilet ne kadar?\" = Combien coûte le billet ?",
      question_type: "true_false",
      options: ["Vrai", "Faux"],
      correct_answer: "Vrai"
    },
    {
      id: "tr_loisir_3",
      question_text: "Complétez : \"Müze ____ ?\"",
      question_type: "multiple_choice",
      options: ["nerede", "araba", "para", "yemek"],
      correct_answer: "nerede",
      explanation: "nerede signifie où"
    },
    {
      id: "tr_loisir_4",
      question_text: "Que veut dire \"Çok güzel!\" ?",
      question_type: "multiple_choice",
      options: ["Très beau", "Très cher", "Très loin", "Très mauvais"],
      correct_answer: "Très beau"
    }
  ]
};

// Fonctions utilitaires côté serveur
export function getCountryByName(name: string): Country | undefined {
  return countries.find(c => c.name === name);
}

export function getCategoryByName(name: string): Category | undefined {
  return categories.find(c => c.name === name);
}


export function getQuizQuestions(countryCode: string, categoryId: string): QuizQuestion[] {
  if (countryCode === 'tr') {
    return turkeyQuestions[categoryId] || [];
  }
  return [];
}
