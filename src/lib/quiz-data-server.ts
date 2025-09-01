import 'server-only';

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number; // Index of correct answer (0-3)
  explanation?: string;
}

export interface QuizTheme {
  id: string;
  name: string;
  emoji?: string;
  questions: QuizQuestion[];
}

export interface CountryQuizData {
  country: string;
  language: string;
  themes: QuizTheme[];
}

// TURQUIE - Quiz sécurisé côté serveur
const turkeyQuizData: CountryQuizData = {
  country: "Turquie",
  language: "Turc",
  themes: [
    {
      id: "airport",
      name: "Aéroport",
      emoji: "✈️",
      questions: [
        {
          id: "tr_airport_1",
          question: 'Comment dire "Carte d\'embarquement, s\'il vous plaît" ?',
          options: ["Boarding pass, lütfen", "Pasaport, lütfen", "Check-in, lütfen", "Bagaj, lütfen"],
          correctAnswer: 0
        },
        {
          id: "tr_airport_2",
          question: 'Vrai ou faux : "Güvenlik kontrolü" = bagage perdu.',
          options: ["Vrai", "Faux"],
          correctAnswer: 1
        },
        {
          id: "tr_airport_3",
          question: 'Complétez : "Nerede ____ teslimi?" (Où est la livraison de …)',
          options: ["bilet", "bagaj", "otobüs", "pasaport"],
          correctAnswer: 1
        },
        {
          id: "tr_airport_4",
          question: 'Traduisez : "Sadece el bagajım var."',
          options: ["J'ai un billet.", "J'ai seulement un bagage à main.", "J'ai une réservation.", "J'ai perdu ma valise."],
          correctAnswer: 1
        }
      ]
    },
    {
      id: "accommodation",
      name: "Hébergement", 
      emoji: "🏨",
      questions: [
        {
          id: "tr_hotel_1",
          question: 'Traduisez : "Rezervasyonum var."',
          options: ["J'ai une réservation", "J'ai une clé", "Je veux payer", "Je veux sortir"],
          correctAnswer: 0
        },
        {
          id: "tr_hotel_2",
          question: 'Vrai ou faux : "Banyo" = chambre.',
          options: ["Vrai", "Faux"],
          correctAnswer: 1
        },
        {
          id: "tr_hotel_3",
          question: 'Complétez : "Anahtarı ____ misiniz?" (Pouvez-vous donner la clé ?)',
          options: ["verebilir", "içebilir", "yazabilir", "kapatabilir"],
          correctAnswer: 0
        },
        {
          id: "tr_hotel_4",
          question: 'Que veut dire "Kahvaltı dahil mi?"',
          options: ["Le déjeuner est inclus ?", "Le petit-déjeuner est inclus ?", "La chambre est propre ?", "La salle de bain est fermée ?"],
          correctAnswer: 1
        }
      ]
    },
    {
      id: "greetings",
      name: "Salutations & Politesse",
      emoji: "👋",
      questions: [
        {
          id: "tr_greet_1",
          question: 'Traduisez : "Merhaba."',
          options: ["Bonjour", "Merci", "Excusez-moi", "Au revoir"],
          correctAnswer: 0
        },
        {
          id: "tr_greet_2",
          question: 'Vrai ou faux : "Teşekkür ederim" = Merci.',
          options: ["Vrai", "Faux"],
          correctAnswer: 0
        },
        {
          id: "tr_greet_3",
          question: 'Complétez : "Su, ____."',
          options: ["merhaba", "teşekkürler", "lütfen", "güle güle"],
          correctAnswer: 2
        },
        {
          id: "tr_greet_4",
          question: 'Que veut dire "Özür dilerim"?',
          options: ["Excusez-moi", "Bonjour", "Merci", "Bonne nuit"],
          correctAnswer: 0
        }
      ]
    },
    {
      id: "orientation",
      name: "Orientation",
      emoji: "🧭",
      questions: [
        {
          id: "tr_orient_1",
          question: 'Traduisez : "İstasyon nerede?"',
          options: ["Où est la gare ?", "Où est l'hôtel ?", "Où est le taxi ?", "Où est la police ?"],
          correctAnswer: 0
        },
        {
          id: "tr_orient_2",
          question: 'Vrai ou faux : "Uzak mı?" = Est-ce loin ?',
          options: ["Vrai", "Faux"],
          correctAnswer: 0
        },
        {
          id: "tr_orient_3",
          question: 'Complétez : "____ / Sağ / Düz"',
          options: ["Sol", "Ev", "Para", "Araba"],
          correctAnswer: 0
        },
        {
          id: "tr_orient_4",
          question: 'Que veut dire "Düz git"?',
          options: ["À gauche", "À droite", "Tout droit", "Derrière"],
          correctAnswer: 2
        }
      ]
    },
    {
      id: "shopping",
      name: "Shopping & Argent",
      emoji: "🛍️",
      questions: [
        {
          id: "tr_shop_1",
          question: 'Traduisez : "Bu ne kadar?"',
          options: ["Combien ça coûte ?", "Où est le magasin ?", "C'est trop cher", "Je veux acheter"],
          correctAnswer: 0
        },
        {
          id: "tr_shop_2",
          question: 'Vrai ou faux : "Çok pahalı" = "C\'est trop cher".',
          options: ["Vrai", "Faux"],
          correctAnswer: 0
        },
        {
          id: "tr_shop_3",
          question: 'Complétez : "Kredi kartı ____ mı?"',
          options: ["kabul ediyor", "gidiyor", "geliyor", "okuyor"],
          correctAnswer: 0
        },
        {
          id: "tr_shop_4",
          question: 'Que veut dire "Bunu satın almak istiyorum"?',
          options: ["Je veux vendre ceci", "Je voudrais acheter ceci", "Je voudrais voir ceci", "Je n'aime pas ceci"],
          correctAnswer: 1
        }
      ]
    },
    {
      id: "transport",
      name: "Transports locaux",
      emoji: "🚌",
      questions: [
        {
          id: "tr_transport_1",
          question: 'Traduisez : "Otobüs durağı nerede?"',
          options: ["Où est la gare ?", "Où est l'arrêt de bus ?", "Où est la station essence ?", "Où est la réception ?"],
          correctAnswer: 1
        },
        {
          id: "tr_transport_2",
          question: 'Vrai ou faux : "Bir bilet, lütfen" = "Un ticket, s\'il vous plaît".',
          options: ["Vrai", "Faux"],
          correctAnswer: 0
        },
        {
          id: "tr_transport_3",
          question: 'Complétez : "Bilet ne ____?"',
          options: ["kadar", "nerede", "nasıl", "kim"],
          correctAnswer: 0
        },
        {
          id: "tr_transport_4",
          question: 'Que veut dire "Burada dur, lütfen"?',
          options: ["Continuez tout droit, s'il vous plaît.", "Arrêtez ici, s'il vous plaît.", "Attendez un peu, s'il vous plaît.", "Reprenez la route, s'il vous plaît."],
          correctAnswer: 1
        }
      ]
    },
    {
      id: "health",
      name: "Santé & sécurité",
      emoji: "🏥",
      questions: [
        {
          id: "tr_health_1",
          question: 'Traduisez : "Doktora ihtiyacım var."',
          options: ["J'ai besoin d'un médecin", "J'ai besoin d'un taxi", "J'ai besoin d'une chambre", "J'ai besoin d'un passeport"],
          correctAnswer: 0
        },
        {
          id: "tr_health_2",
          question: 'Vrai ou faux : "Eczane" = hôpital.',
          options: ["Vrai", "Faux"],
          correctAnswer: 1
        },
        {
          id: "tr_health_3",
          question: 'Complétez : "Ambulans ____."',
          options: ["çağırın", "yiyin", "gidin", "okuyun"],
          correctAnswer: 0
        },
        {
          id: "tr_health_4",
          question: 'Que veut dire "Kendimi iyi hissetmiyorum"?',
          options: ["Je ne me sens pas bien", "Je n'ai pas faim", "Je ne comprends pas", "Je ne peux pas marcher"],
          correctAnswer: 0
        }
      ]
    },
    {
      id: "admin",
      name: "Urgences administratives",
      emoji: "📋",
      questions: [
        {
          id: "tr_admin_1",
          question: 'Traduisez : "Pasaportumu kaybettim."',
          options: ["J'ai perdu mon billet", "J'ai perdu mon passeport", "J'ai perdu ma clé", "J'ai perdu mon argent"],
          correctAnswer: 1
        },
        {
          id: "tr_admin_2",
          question: 'Vrai ou faux : "Büyükelçilik" = ambassade.',
          options: ["Vrai", "Faux"],
          correctAnswer: 0
        },
        {
          id: "tr_admin_3",
          question: 'Complétez : "Polise ____ var."',
          options: ["ihtiyacım", "gidiyorum", "geliyorum", "okuyorum"],
          correctAnswer: 0
        },
        {
          id: "tr_admin_4",
          question: 'Que veut dire "Bana yardım edebilir misiniz?"',
          options: ["Pouvez-vous m'aider ?", "Pouvez-vous m'attendre ?", "Pouvez-vous me donner ?", "Pouvez-vous me vendre ?"],
          correctAnswer: 0
        }
      ]
    },
    {
      id: "restaurant",
      name: "Restaurant",
      emoji: "🍽️",
      questions: [
        {
          id: "tr_restaurant_1",
          question: 'Traduisez : "Hesap, lütfen."',
          options: ["L'addition, s'il vous plaît", "Le menu, s'il vous plaît", "Une table, s'il vous plaît", "De l'eau, s'il vous plaît"],
          correctAnswer: 0
        },
        {
          id: "tr_restaurant_2",
          question: 'Vrai ou faux : "Su" = eau.',
          options: ["Vrai", "Faux"],
          correctAnswer: 0
        },
        {
          id: "tr_restaurant_3",
          question: 'Complétez : "____ kişilik masa, lütfen."',
          options: ["Bir", "İki", "Üç", "Dört"],
          correctAnswer: 1
        },
        {
          id: "tr_restaurant_4",
          question: 'Que veut dire "Acı mı?"',
          options: ["C'est froid ?", "C'est épicé ?", "C'est gratuit ?", "C'est sucré ?"],
          correctAnswer: 1
        }
      ]
    },
    {
      id: "events",
      name: "Événements & Loisirs",
      emoji: "🎭",
      questions: [
        {
          id: "tr_events_1",
          question: 'Traduisez : "Saat kaçta başlıyor?"',
          options: ["À quelle heure ça commence ?", "Combien ça coûte ?", "Où est la sortie ?", "Où est l'hôtel ?"],
          correctAnswer: 0
        },
        {
          id: "tr_events_2",
          question: 'Vrai ou faux : "Bilet ne kadar?" = "Combien coûte le billet ?"',
          options: ["Vrai", "Faux"],
          correctAnswer: 0
        },
        {
          id: "tr_events_3",
          question: 'Complétez : "Müze ____?"',
          options: ["nerede", "nasıl", "kim", "ne"],
          correctAnswer: 0
        },
        {
          id: "tr_events_4",
          question: 'Que veut dire "Çok güzel!"?',
          options: ["Très beau", "Trop cher", "Trop loin", "Très mauvais"],
          correctAnswer: 0
        }
      ]
    }
  ]
};

// MAROC - Quiz sécurisé côté serveur
const moroccoQuizData: CountryQuizData = {
  country: "Maroc",
  language: "Darija",
  themes: [
    {
      id: "airport",
      name: "Aéroport",
      emoji: "✈️",
      questions: [
        {
          id: "ma_airport_1",
          question: 'Traduisez : "Fin kayn l-check-in?"',
          options: ["Où est l'hôtel ?", "Où est l'enregistrement ?", "Où est le taxi ?", "Où est la police ?"],
          correctAnswer: 1
        },
        {
          id: "ma_airport_2",
          question: 'Vrai ou faux : "Boarding pass, 3afak" = "Passeport, s\'il vous plaît".',
          options: ["Vrai", "Faux"],
          correctAnswer: 1
        },
        {
          id: "ma_airport_3",
          question: 'Complétez : "3ndi ghir ____ à main."',
          options: ["sac", "billet", "taxi", "argent"],
          correctAnswer: 0
        },
        {
          id: "ma_airport_4",
          question: 'Traduisez : "Fin kayn l-bagages?"',
          options: ["Où est la gare ?", "Où récupérer les bagages ?", "Où est la pharmacie ?", "Où est la sortie ?"],
          correctAnswer: 1
        }
      ]
    },
    {
      id: "accommodation",
      name: "Hébergement",
      emoji: "🏨",
      questions: [
        {
          id: "ma_hotel_1",
          question: 'Traduisez : "3ndi réservation."',
          options: ["J'ai une réservation", "Je veux payer", "J'ai une clé", "Je veux sortir"],
          correctAnswer: 0
        },
        {
          id: "ma_hotel_2",
          question: 'Vrai ou faux : "Kahwa" = café.',
          options: ["Vrai", "Faux"],
          correctAnswer: 0
        },
        {
          id: "ma_hotel_3",
          question: 'Complétez : "Bghit ndkhol ____ ." (check-in)',
          options: ["daba", "dakhel", "hôtel", "taxi"],
          correctAnswer: 2
        },
        {
          id: "ma_hotel_4",
          question: 'Que veut dire "Fin kayn toilette?"',
          options: ["Où est la salle de bain ?", "Où est la chambre ?", "Où est le restaurant ?", "Où est le magasin ?"],
          correctAnswer: 0
        }
      ]
    },
    {
      id: "greetings",
      name: "Salutations & Politesse",
      emoji: "👋",
      questions: [
        {
          id: "ma_greet_1",
          question: 'Traduisez : "Salam."',
          options: ["Bonjour", "Merci", "Excusez-moi", "Bonsoir"],
          correctAnswer: 0
        },
        {
          id: "ma_greet_2",
          question: 'Vrai ou faux : "Choukran" = Merci.',
          options: ["Vrai", "Faux"],
          correctAnswer: 0
        },
        {
          id: "ma_greet_3",
          question: 'Complétez : "____ , 3afak."',
          options: ["Merci", "Excusez-moi", "S'il vous plaît", "Salut"],
          correctAnswer: 2
        },
        {
          id: "ma_greet_4",
          question: 'Que veut dire "Smah liya"?',
          options: ["Excusez-moi", "Bonjour", "Bonne nuit", "À plus tard"],
          correctAnswer: 0
        }
      ]
    },
    {
      id: "orientation",
      name: "Orientation",
      emoji: "🧭",
      questions: [
        {
          id: "ma_orient_1",
          question: 'Traduisez : "Fin kayna l-gare?"',
          options: ["Où est la gare ?", "Où est le taxi ?", "Où est le musée ?", "Où est l'hôtel ?"],
          correctAnswer: 0
        },
        {
          id: "ma_orient_2",
          question: 'Vrai ou faux : "Nîchân" = tout droit.',
          options: ["Vrai", "Faux"],
          correctAnswer: 0
        },
        {
          id: "ma_orient_3",
          question: 'Complétez : "L-____ / L-yamin / Nîchân"',
          options: ["yasar", "taxi", "magasin", "l-ma"],
          correctAnswer: 0
        },
        {
          id: "ma_orient_4",
          question: 'Que veut dire "Wach b3id?"',
          options: ["Est-ce loin ?", "Est-ce cher ?", "Est-ce prêt ?", "Est-ce gratuit ?"],
          correctAnswer: 0
        }
      ]
    },
    {
      id: "shopping",
      name: "Shopping & Argent",
      emoji: "🛍️",
      questions: [
        {
          id: "ma_shop_1",
          question: 'Traduisez : "Bchhal hadchi?"',
          options: ["Combien ça coûte ?", "Où est le magasin ?", "Je veux acheter ça", "C'est trop cher"],
          correctAnswer: 0
        },
        {
          id: "ma_shop_2",
          question: 'Vrai ou faux : "Ghali bzzaf" = "C\'est trop cher".',
          options: ["Vrai", "Faux"],
          correctAnswer: 0
        },
        {
          id: "ma_shop_3",
          question: 'Complétez : "Katkhdmo ____ ?"',
          options: ["carte", "taxi", "passeport", "monnaie"],
          correctAnswer: 0
        },
        {
          id: "ma_shop_4",
          question: 'Que veut dire "Bghit n-chri hadchi"?',
          options: ["Je voudrais acheter ceci", "Je voudrais vendre ceci", "Je voudrais voir ceci", "Je voudrais manger ceci"],
          correctAnswer: 0
        }
      ]
    },
    {
      id: "transport",
      name: "Transports locaux",
      emoji: "🚌",
      questions: [
        {
          id: "ma_transport_1",
          question: 'Traduisez : "Fin kayn l-autobus?"',
          options: ["Où est la gare ?", "Où est l'arrêt de bus ?", "Où est l'aéroport ?", "Où est la station essence ?"],
          correctAnswer: 1
        },
        {
          id: "ma_transport_2",
          question: 'Vrai ou faux : "Billet wahed, 3afak" = "Un ticket, s\'il vous plaît".',
          options: ["Vrai", "Faux"],
          correctAnswer: 0
        },
        {
          id: "ma_transport_3",
          question: 'Complétez : "Bchhal ____ ?"',
          options: ["billet", "chambre", "taxi", "maison"],
          correctAnswer: 0
        },
        {
          id: "ma_transport_4",
          question: 'Que veut dire "Hna, 3afak!"',
          options: ["Continuez", "Ici, s'il vous plaît", "Attendez", "Encore"],
          correctAnswer: 1
        }
      ]
    },
    {
      id: "health",
      name: "Santé & sécurité",
      emoji: "🏥",
      questions: [
        {
          id: "ma_health_1",
          question: 'Traduisez : "Khassni doctor."',
          options: ["J'ai besoin d'un médecin", "J'ai besoin d'un taxi", "J'ai besoin d'une clé", "J'ai besoin d'un billet"],
          correctAnswer: 0
        },
        {
          id: "ma_health_2",
          question: 'Vrai ou faux : "Eczane" = pharmacie (mot turc). En darija on dit "pharmacie".',
          options: ["Vrai", "Faux"],
          correctAnswer: 1
        },
        {
          id: "ma_health_3",
          question: 'Complétez : "3ayt l-____ ."',
          options: ["police", "taxi", "ambulance", "hôtel"],
          correctAnswer: 2
        },
        {
          id: "ma_health_4",
          question: 'Que veut dire "Ma hssitsh bikhir"?',
          options: ["Je ne me sens pas bien", "Je n'ai pas faim", "Je n'ai pas de billet", "Je n'ai pas de chambre"],
          correctAnswer: 0
        }
      ]
    },
    {
      id: "admin",
      name: "Urgences administratives",
      emoji: "📋",
      questions: [
        {
          id: "ma_emergency_1",
          question: 'Traduisez : "Dya3t passport dyali."',
          options: ["J'ai perdu mon passeport", "J'ai perdu mon billet", "J'ai perdu ma clé", "J'ai perdu mon argent"],
          correctAnswer: 0
        },
        {
          id: "ma_emergency_2",
          question: 'Vrai ou faux : "Consulat" = "Ambassade".',
          options: ["Vrai", "Faux"],
          correctAnswer: 1
        },
        {
          id: "ma_emergency_3",
          question: 'Complétez : "3ayt l-____ ."',
          options: ["police", "taxi", "passeport", "hôtel"],
          correctAnswer: 0
        },
        {
          id: "ma_emergency_4",
          question: 'Que veut dire "Tqdr t-3awnni?"',
          options: ["Pouvez-vous m'aider ?", "Pouvez-vous me donner un ticket ?", "Pouvez-vous me prêter de l'argent ?", "Pouvez-vous m'attendre ?"],
          correctAnswer: 0
        }
      ]
    },
    {
      id: "restaurant",
      name: "Restaurant",
      emoji: "🍽️",
      questions: [
        {
          id: "ma_restaurant_1",
          question: 'Traduisez : "F-chhal kaybda?"',
          options: ["À quelle heure ça commence ?", "Combien ça coûte ?", "Où est la sortie ?", "Où est l'hôtel ?"],
          correctAnswer: 0
        },
        {
          id: "ma_restaurant_2",
          question: 'Vrai ou faux : "Bchhal ticket?" = "Combien coûte le billet ?"',
          options: ["Vrai", "Faux"],
          correctAnswer: 0
        },
        {
          id: "ma_restaurant_3",
          question: 'Complétez : "Fin kayn ____ ?"',
          options: ["musée", "taxi", "pharmacie", "passeport"],
          correctAnswer: 0
        },
        {
          id: "ma_restaurant_4",
          question: 'Que veut dire "Zwin bzzaf!" ?',
          options: ["C'est très beau", "C'est trop cher", "C'est trop loin", "C'est fini"],
          correctAnswer: 0
        }
      ]
    },
    {
      id: "events",
      name: "Événements & Loisirs",
      emoji: "🎭",
      questions: [
        {
          id: "ma_events_1",
          question: 'Traduisez : "Bghit l-hesab, 3afak."',
          options: ["Je voudrais l'addition, s'il vous plaît", "Je voudrais le menu", "Je voudrais une table", "Je voudrais de l'eau"],
          correctAnswer: 0
        },
        {
          id: "ma_events_2",
          question: 'Vrai ou faux : "L-ma" = eau.',
          options: ["Vrai", "Faux"],
          correctAnswer: 0
        },
        {
          id: "ma_events_3",
          question: 'Complétez : "Tabla ____ , 3afak."',
          options: ["wahed", "jouj", "thalatha", "arba"],
          correctAnswer: 1
        },
        {
          id: "ma_events_4",
          question: 'Que veut dire "Hadchi har?"',
          options: ["C'est froid ?", "C'est chaud/épicé ?", "C'est gratuit ?", "C'est sucré ?"],
          correctAnswer: 1
        }
      ]
    }
  ]
};

// ESPAGNE - Quiz sécurisé côté serveur
const spainQuizData: CountryQuizData = {
  country: "Espagne",
  language: "Espagnol",
  themes: [
    {
      id: "airport",
      name: "Aéroport",
      emoji: "✈️",
      questions: [
        {
          id: "es_airport_1",
          question: 'Traduisez : "¿Dónde está el check-in?"',
          options: ["Où est l'enregistrement ?", "Où est la sortie ?", "Où est le taxi ?", "Où est l'hôtel ?"],
          correctAnswer: 0
        },
        {
          id: "es_airport_2",
          question: 'Vrai ou faux : "Tarjeta de embarque" = carte d\'embarquement.',
          options: ["Vrai", "Faux"],
          correctAnswer: 0
        },
        {
          id: "es_airport_3",
          question: 'Complétez : "Solo tengo equipaje de ____."',
          options: ["mano", "facturación", "viaje", "hotel"],
          correctAnswer: 0
        },
        {
          id: "es_airport_4",
          question: 'Que veut dire "¿Dónde está la recogida de equipajes?"',
          options: ["Où est la gare ?", "Où récupérer les bagages ?", "Où est la pharmacie ?", "Où est la police ?"],
          correctAnswer: 1
        }
      ]
    },
    {
      id: "accommodation",
      name: "Hébergement",
      emoji: "🏨",
      questions: [
        {
          id: "es_hotel_1",
          question: 'Traduisez : "Tengo una reserva."',
          options: ["J'ai une réservation", "Je veux payer", "J'ai une clé", "Je veux sortir"],
          correctAnswer: 0
        },
        {
          id: "es_hotel_2",
          question: 'Vrai ou faux : "Baño" = salle de bain.',
          options: ["Vrai", "Faux"],
          correctAnswer: 0
        },
        {
          id: "es_hotel_3",
          question: 'Complétez : "¿Puede darme la ____?"',
          options: ["llave", "comida", "cuenta", "maleta"],
          correctAnswer: 0
        },
        {
          id: "es_hotel_4",
          question: 'Que veut dire "¿Está incluido el desayuno?"',
          options: ["Le déjeuner est inclus ?", "Le petit-déjeuner est inclus ?", "La chambre est propre ?", "Le wifi est gratuit ?"],
          correctAnswer: 1
        }
      ]
    },
    {
      id: "greetings",
      name: "Salutations & Politesse",
      emoji: "👋",
      questions: [
        {
          id: "es_greet_1",
          question: 'Traduisez : "Hola."',
          options: ["Bonjour", "Merci", "Excusez-moi", "Au revoir"],
          correctAnswer: 0
        },
        {
          id: "es_greet_2",
          question: 'Vrai ou faux : "Gracias" = Merci.',
          options: ["Vrai", "Faux"],
          correctAnswer: 0
        },
        {
          id: "es_greet_3",
          question: 'Complétez : "Agua, ____."',
          options: ["gracias", "hola", "por favor", "adiós"],
          correctAnswer: 2
        },
        {
          id: "es_greet_4",
          question: 'Que veut dire "Disculpe"?',
          options: ["Excusez-moi", "Bonjour", "Merci", "Bonne nuit"],
          correctAnswer: 0
        }
      ]
    },
    {
      id: "orientation",
      name: "Orientation",
      emoji: "🧭",
      questions: [
        {
          id: "es_orient_1",
          question: 'Traduisez : "¿Dónde está la estación?"',
          options: ["Où est la gare ?", "Où est la chambre ?", "Où est le restaurant ?", "Où est la police ?"],
          correctAnswer: 0
        },
        {
          id: "es_orient_2",
          question: 'Vrai ou faux : "¿Está lejos?" = Est-ce loin ?',
          options: ["Vrai", "Faux"],
          correctAnswer: 0
        },
        {
          id: "es_orient_3",
          question: 'Complétez : "____ / Derecha / Recto"',
          options: ["Izquierda", "Casa", "Dinero", "Coche"],
          correctAnswer: 0
        },
        {
          id: "es_orient_4",
          question: 'Que veut dire "Todo recto"?',
          options: ["À gauche", "À droite", "Tout droit", "Derrière"],
          correctAnswer: 2
        }
      ]
    },
    {
      id: "shopping",
      name: "Shopping & Argent",
      emoji: "🛍️",
      questions: [
        {
          id: "es_shop_1",
          question: 'Traduisez : "¿Cuánto cuesta?"',
          options: ["Combien ça coûte ?", "Où est le magasin ?", "C'est trop cher", "J'aimerais payer"],
          correctAnswer: 0
        },
        {
          id: "es_shop_2",
          question: 'Vrai ou faux : "Es demasiado caro" = "C\'est trop cher".',
          options: ["Vrai", "Faux"],
          correctAnswer: 0
        },
        {
          id: "es_shop_3",
          question: 'Complétez : "¿Acepta ____?"',
          options: ["coche", "tarjeta", "ventana", "dinero"],
          correctAnswer: 1
        },
        {
          id: "es_shop_4",
          question: 'Que veut dire "Quiero comprar esto"?',
          options: ["Je veux vendre ceci", "Je voudrais acheter ceci", "Je voudrais voir ceci", "Je n'aime pas ceci"],
          correctAnswer: 1
        }
      ]
    },
    {
      id: "transport",
      name: "Transports locaux",
      emoji: "🚌",
      questions: [
        {
          id: "es_transport_1",
          question: 'Traduisez : "¿Dónde está la parada de autobús?"',
          options: ["Où est la gare ?", "Où est l'arrêt de bus ?", "Où est la station essence ?", "Où est la réception ?"],
          correctAnswer: 1
        },
        {
          id: "es_transport_2",
          question: 'Vrai ou faux : "Un billete, por favor" = "Un ticket, s\'il vous plaît".',
          options: ["Vrai", "Faux"],
          correctAnswer: 0
        },
        {
          id: "es_transport_3",
          question: 'Complétez : "¿Cuánto cuesta el ____?"',
          options: ["billete", "coche", "hotel", "avión"],
          correctAnswer: 0
        },
        {
          id: "es_transport_4",
          question: 'Que veut dire "Pare aquí, por favor"?',
          options: ["Continuez tout droit, s'il vous plaît.", "Arrêtez ici, s'il vous plaît.", "Attendez un peu, s'il vous plaît.", "Reprenez la route, s'il vous plaît."],
          correctAnswer: 1
        }
      ]
    },
    {
      id: "health",
      name: "Santé & sécurité",
      emoji: "🏥",
      questions: [
        {
          id: "es_health_1",
          question: 'Traduisez : "Necesito un médico."',
          options: ["J'ai besoin d'un médecin", "J'ai besoin d'un taxi", "J'ai besoin d'une chambre", "J'ai besoin d'un passeport"],
          correctAnswer: 0
        },
        {
          id: "es_health_2",
          question: 'Vrai ou faux : "Farmacia" = hôpital.',
          options: ["Vrai", "Faux"],
          correctAnswer: 1
        },
        {
          id: "es_health_3",
          question: 'Complétez : "Llame a una ____."',
          options: ["ambulancia", "comida", "estación", "lámpara"],
          correctAnswer: 0
        },
        {
          id: "es_health_4",
          question: 'Que veut dire "No me siento bien"?',
          options: ["Je ne me sens pas bien", "Je n'ai pas faim", "Je ne comprends pas", "Je ne peux pas marcher"],
          correctAnswer: 0
        }
      ]
    },
    {
      id: "admin",
      name: "Urgences administratives",
      emoji: "📋",
      questions: [
        {
          id: "es_emergency_1",
          question: 'Traduisez : "He perdido mi pasaporte."',
          options: ["J'ai perdu mon billet", "J'ai perdu mon passeport", "J'ai perdu ma clé", "J'ai perdu mon argent"],
          correctAnswer: 1
        },
        {
          id: "es_emergency_2",
          question: 'Vrai ou faux : "Embajada" = ambassade.',
          options: ["Vrai", "Faux"],
          correctAnswer: 0
        },
        {
          id: "es_emergency_3",
          question: 'Complétez : "Necesito a la ____."',
          options: ["policía", "farmacia", "estación", "recepcionista"],
          correctAnswer: 0
        },
        {
          id: "es_emergency_4",
          question: 'Que veut dire "¿Me puede ayudar?"',
          options: ["Pouvez-vous m'aider ?", "Pouvez-vous m'attendre ?", "Pouvez-vous me donner ?", "Pouvez-vous me vendre ?"],
          correctAnswer: 0
        }
      ]
    },
    {
      id: "restaurant",
      name: "Restaurant",
      emoji: "🍽️",
      questions: [
        {
          id: "es_restaurant_1",
          question: 'Traduisez : "La cuenta, por favor."',
          options: ["L'addition, s'il vous plaît", "Le menu, s'il vous plaît", "Une table, s'il vous plaît", "De l'eau, s'il vous plaît"],
          correctAnswer: 0
        },
        {
          id: "es_restaurant_2",
          question: 'Vrai ou faux : "Agua" = eau.',
          options: ["Vrai", "Faux"],
          correctAnswer: 0
        },
        {
          id: "es_restaurant_3",
          question: 'Complétez : "Una mesa para ____, por favor."',
          options: ["uno", "dos", "tres", "cuatro"],
          correctAnswer: 1
        },
        {
          id: "es_restaurant_4",
          question: 'Que veut dire "¿Está picante?"',
          options: ["C'est froid ?", "C'est épicé ?", "C'est gratuit ?", "C'est sucré ?"],
          correctAnswer: 1
        }
      ]
    },
    {
      id: "events",
      name: "Événements & Loisirs",
      emoji: "🎭",
      questions: [
        {
          id: "es_events_1",
          question: 'Traduisez : "¿A qué hora empieza?"',
          options: ["À quelle heure ça commence ?", "Combien ça coûte ?", "Où est la sortie ?", "Où est l'hôtel ?"],
          correctAnswer: 0
        },
        {
          id: "es_events_2",
          question: 'Vrai ou faux : "¿Cuánto cuesta la entrada?" = "Combien coûte le billet ?"',
          options: ["Vrai", "Faux"],
          correctAnswer: 0
        },
        {
          id: "es_events_3",
          question: 'Complétez : "¿Dónde está el ____?"',
          options: ["museo", "taxi", "farmacia", "pasaporte"],
          correctAnswer: 0
        },
        {
          id: "es_events_4",
          question: 'Que veut dire "¡Muy bonito!"?',
          options: ["Très beau", "Trop cher", "Trop loin", "Très mauvais"],
          correctAnswer: 0
        }
      ]
    }
  ]
};

// ALBANIE - Quiz sécurisé côté serveur
const albaniaQuizData: CountryQuizData = {
  country: "Albanie",
  language: "Albanais",
  themes: [
    {
      id: "airport",
      name: "Aéroport",
      emoji: "✈️",
      questions: [
        {
          id: "al_airport_1",
          question: 'Traduisez : "Ku është check-in?"',
          options: ["Où est l'enregistrement ?", "Où est la sortie ?", "Où est le taxi ?", "Où est l'hôtel ?"],
          correctAnswer: 0
        },
        {
          id: "al_airport_2",
          question: 'Vrai ou faux : "Kartë hipjeje" = carte d\'embarquement.',
          options: ["Vrai", "Faux"],
          correctAnswer: 0
        },
        {
          id: "al_airport_3",
          question: 'Complétez : "Kam vetëm bagazh ____."',
          options: ["dore", "madh", "vogël", "zi"],
          correctAnswer: 0
        },
        {
          id: "al_airport_4",
          question: 'Que veut dire "Ku është marrja e bagazheve?"',
          options: ["Où est la gare ?", "Où récupérer les bagages ?", "Où est la pharmacie ?", "Où est la police ?"],
          correctAnswer: 1
        }
      ]
    },
    {
      id: "accommodation",
      name: "Hébergement",
      emoji: "🏨",
      questions: [
        {
          id: "al_hotel_1",
          question: 'Traduisez : "Kam një rezervim."',
          options: ["J'ai une réservation", "Je veux payer", "J'ai une clé", "Je veux sortir"],
          correctAnswer: 0
        },
        {
          id: "al_hotel_2",
          question: 'Vrai ou faux : "Banjo" = salle de bain.',
          options: ["Vrai", "Faux"],
          correctAnswer: 0
        },
        {
          id: "al_hotel_3",
          question: 'Complétez : "Mund të më jepni ____?"',
          options: ["çelësin", "ushqimin", "makinën", "librin"],
          correctAnswer: 0
        },
        {
          id: "al_hotel_4",
          question: 'Que veut dire "A është i përfshirë mëngjesi?"',
          options: ["Le déjeuner est inclus ?", "Le petit-déjeuner est inclus ?", "La chambre est propre ?", "Le wifi est gratuit ?"],
          correctAnswer: 1
        }
      ]
    },
    {
      id: "greetings",
      name: "Salutations & Politesse",
      emoji: "👋",
      questions: [
        {
          id: "al_greet_1",
          question: 'Traduisez : "Përshëndetje."',
          options: ["Bonjour", "Merci", "Excusez-moi", "Au revoir"],
          correctAnswer: 0
        },
        {
          id: "al_greet_2",
          question: 'Vrai ou faux : "Faleminderit" = Merci.',
          options: ["Vrai", "Faux"],
          correctAnswer: 0
        },
        {
          id: "al_greet_3",
          question: 'Complétez : "Ujë, ____."',
          options: ["faleminderit", "përshëndetje", "ju lutem", "mirupafshim"],
          correctAnswer: 2
        },
        {
          id: "al_greet_4",
          question: 'Que veut dire "Më falni"?',
          options: ["Excusez-moi", "Bonjour", "Merci", "Bonne nuit"],
          correctAnswer: 0
        }
      ]
    },
    {
      id: "orientation",
      name: "Orientation",
      emoji: "🧭",
      questions: [
        {
          id: "al_orient_1",
          question: 'Traduisez : "Ku është stacioni?"',
          options: ["Où est la gare ?", "Où est l'hôtel ?", "Où est le taxi ?", "Où est la police ?"],
          correctAnswer: 0
        },
        {
          id: "al_orient_2",
          question: 'Vrai ou faux : "A është larg?" = Est-ce loin ?',
          options: ["Vrai", "Faux"],
          correctAnswer: 0
        },
        {
          id: "al_orient_3",
          question: 'Complétez : "____ / Djathtas / Drejt"',
          options: ["Majtas", "Shtëpi", "Para", "Makina"],
          correctAnswer: 0
        },
        {
          id: "al_orient_4",
          question: 'Que veut dire "Vazhdoni drejt"?',
          options: ["À gauche", "À droite", "Tout droit", "Derrière"],
          correctAnswer: 2
        }
      ]
    },
    {
      id: "shopping",
      name: "Shopping & Argent",
      emoji: "🛍️",
      questions: [
        {
          id: "al_shop_1",
          question: 'Traduisez : "Sa kushton?"',
          options: ["Combien ça coûte ?", "Où est le magasin ?", "C'est trop cher", "Je veux acheter"],
          correctAnswer: 0
        },
        {
          id: "al_shop_2",
          question: 'Vrai ou faux : "Është shumë shtrenjtë" = "C\'est trop cher".',
          options: ["Vrai", "Faux"],
          correctAnswer: 0
        },
        {
          id: "al_shop_3",
          question: 'Complétez : "A pranoni ____?"',
          options: ["kartë", "makina", "dritare", "para"],
          correctAnswer: 0
        },
        {
          id: "al_shop_4",
          question: 'Que veut dire "Dua ta blej këtë"?',
          options: ["Je veux vendre ceci", "Je voudrais acheter ceci", "Je voudrais voir ceci", "Je n'aime pas ceci"],
          correctAnswer: 1
        }
      ]
    },
    {
      id: "transport",
      name: "Transports locaux",
      emoji: "🚌",
      questions: [
        {
          id: "al_transport_1",
          question: 'Traduisez : "Ku është stacioni i autobusit?"',
          options: ["Où est la gare ?", "Où est l'arrêt de bus ?", "Où est la station essence ?", "Où est la réception ?"],
          correctAnswer: 1
        },
        {
          id: "al_transport_2",
          question: 'Vrai ou faux : "Një biletë, ju lutem" = "Un ticket, s\'il vous plaît".',
          options: ["Vrai", "Faux"],
          correctAnswer: 0
        },
        {
          id: "al_transport_3",
          question: 'Complétez : "Sa kushton ____?"',
          options: ["bileta", "makina", "hoteli", "aeroplani"],
          correctAnswer: 0
        },
        {
          id: "al_transport_4",
          question: 'Que veut dire "Ndaloni këtu, ju lutem"?',
          options: ["Continuez tout droit, s'il vous plaît.", "Arrêtez ici, s'il vous plaît.", "Attendez un peu, s'il vous plaît.", "Reprenez la route, s'il vous plaît."],
          correctAnswer: 1
        }
      ]
    },
    {
      id: "health",
      name: "Santé & sécurité",
      emoji: "🏥",
      questions: [
        {
          id: "al_health_1",
          question: 'Traduisez : "Më duhet një doktor."',
          options: ["J'ai besoin d'un médecin", "J'ai besoin d'un taxi", "J'ai besoin d'une chambre", "J'ai besoin d'un passeport"],
          correctAnswer: 0
        },
        {
          id: "al_health_2",
          question: 'Vrai ou faux : "Farmaci" = hôpital.',
          options: ["Vrai", "Faux"],
          correctAnswer: 1
        },
        {
          id: "al_health_3",
          question: 'Complétez : "Thirrni një ____."',
          options: ["ambulancë", "ushqim", "stacion", "dritë"],
          correctAnswer: 0
        },
        {
          id: "al_health_4",
          question: 'Que veut dire "Nuk ndihem mirë"?',
          options: ["Je ne me sens pas bien", "Je n'ai pas faim", "Je ne comprends pas", "Je ne peux pas marcher"],
          correctAnswer: 0
        }
      ]
    },
    {
      id: "admin",
      name: "Urgences administratives",
      emoji: "📋",
      questions: [
        {
          id: "al_admin_1",
          question: 'Traduisez : "Kam humbur pasaportën."',
          options: ["J'ai perdu mon billet", "J'ai perdu mon passeport", "J'ai perdu ma clé", "J'ai perdu mon argent"],
          correctAnswer: 1
        },
        {
          id: "al_admin_2",
          question: 'Vrai ou faux : "Ambasadë" = ambassade.',
          options: ["Vrai", "Faux"],
          correctAnswer: 0
        },
        {
          id: "al_admin_3",
          question: 'Complétez : "Më duhet ____."',
          options: ["policia", "farmacia", "stacioni", "recepsionisti"],
          correctAnswer: 0
        },
        {
          id: "al_admin_4",
          question: 'Que veut dire "Mund të më ndihmoni?"',
          options: ["Pouvez-vous m'aider ?", "Pouvez-vous m'attendre ?", "Pouvez-vous me donner ?", "Pouvez-vous me vendre ?"],
          correctAnswer: 0
        }
      ]
    },
    {
      id: "restaurant",
      name: "Restaurant",
      emoji: "🍽️",
      questions: [
        {
          id: "al_restaurant_1",
          question: 'Traduisez : "Faturën, ju lutem."',
          options: ["L'addition, s'il vous plaît", "Le menu, s'il vous plaît", "Une table, s'il vous plaît", "De l'eau, s'il vous plaît"],
          correctAnswer: 0
        },
        {
          id: "al_restaurant_2",
          question: 'Vrai ou faux : "Ujë" = eau.',
          options: ["Vrai", "Faux"],
          correctAnswer: 0
        },
        {
          id: "al_restaurant_3",
          question: 'Complétez : "Një tavolinë për ____, ju lutem."',
          options: ["një", "dy", "tre", "katër"],
          correctAnswer: 1
        },
        {
          id: "al_restaurant_4",
          question: 'Que veut dire "A është djegës?"',
          options: ["C'est froid ?", "C'est épicé ?", "C'est gratuit ?", "C'est sucré ?"],
          correctAnswer: 1
        }
      ]
    },
    {
      id: "events",
      name: "Événements & Loisirs",
      emoji: "🎭",
      questions: [
        {
          id: "al_events_1",
          question: 'Traduisez : "Në ç\'orë fillon?"',
          options: ["À quelle heure ça commence ?", "Combien ça coûte ?", "Où est la sortie ?", "Où est l'hôtel ?"],
          correctAnswer: 0
        },
        {
          id: "al_events_2",
          question: 'Vrai ou faux : "Sa kushton bileta?" = "Combien coûte le billet ?"',
          options: ["Vrai", "Faux"],
          correctAnswer: 0
        },
        {
          id: "al_events_3",
          question: 'Complétez : "Ku është ____?"',
          options: ["muzeu", "taksia", "farmacia", "pasaporta"],
          correctAnswer: 0
        },
        {
          id: "al_events_4",
          question: 'Que veut dire "Shumë bukur!"?',
          options: ["Très beau", "Trop cher", "Trop loin", "Très mauvais"],
          correctAnswer: 0
        }
      ]
    }
  ]
};

// ITALIE - Quiz sécurisé côté serveur
const italyQuizData: CountryQuizData = {
  country: "Italie",
  language: "Italien",
  themes: [
    {
      id: "airport",
      name: "Aéroport",
      emoji: "✈️",
      questions: [
        {
          id: "it_airport_1",
          question: 'Traduisez : "Dove è il controllo di sicurezza?"',
          options: ["Où est le contrôle de sécurité ?", "Où est la sortie ?", "Où est la chambre ?", "Où est le restaurant ?"],
          correctAnswer: 0
        },
        {
          id: "it_airport_2",
          question: 'Vrai ou faux : "Bagaglio" = bagage.',
          options: ["Vrai", "Faux"],
          correctAnswer: 0
        },
        {
          id: "it_airport_3",
          question: 'Complétez : "Dove è la ____ bagagli?"',
          options: ["sala", "uscita", "consegna", "polizia"],
          correctAnswer: 2
        },
        {
          id: "it_airport_4",
          question: 'Traduisez : "Solo bagaglio a mano."',
          options: ["J'ai seulement un bagage à main", "J'ai perdu mes bagages", "J'ai deux valises", "Je n'ai pas de bagages"],
          correctAnswer: 0
        }
      ]
    },
    {
      id: "accommodation",
      name: "Hébergement",
      emoji: "🏨",
      questions: [
        {
          id: "it_hotel_1",
          question: 'Traduisez : "Chiave, per favore."',
          options: ["La clé, s'il vous plaît", "Le menu, s'il vous plaît", "L'addition, s'il vous plaît", "Le billet, s'il vous plaît"],
          correctAnswer: 0
        },
        {
          id: "it_hotel_2",
          question: 'Vrai ou faux : "Bagno" = salle de bain.',
          options: ["Vrai", "Faux"],
          correctAnswer: 0
        },
        {
          id: "it_hotel_3",
          question: 'Complétez : "Quanto costa per ____?"',
          options: ["giorno", "taxi", "biglietto", "colazione"],
          correctAnswer: 0
        },
        {
          id: "it_hotel_4",
          question: 'Que veut dire "La colazione è inclusa?"',
          options: ["Le déjeuner est inclus ?", "Le petit-déjeuner est inclus ?", "Le dîner est inclus ?", "La chambre est propre ?"],
          correctAnswer: 1
        }
      ]
    },
    {
      id: "greetings",
      name: "Salutations & Politesse",
      emoji: "👋",
      questions: [
        {
          id: "it_greet_1",
          question: 'Que veut dire "Arrivederci"?',
          options: ["Merci", "Bonjour", "Au revoir", "Excusez-moi"],
          correctAnswer: 2
        },
        {
          id: "it_greet_2",
          question: 'Vrai ou faux : "Scusi" = Excusez-moi.',
          options: ["Vrai", "Faux"],
          correctAnswer: 0
        },
        {
          id: "it_greet_3",
          question: 'Complétez : "____ mille."',
          options: ["Grazie", "Ciao", "Prego", "Buona"],
          correctAnswer: 0
        },
        {
          id: "it_greet_4",
          question: 'Traduisez : "Buongiorno."',
          options: ["Bonsoir", "Bonjour", "Bonne nuit", "Au revoir"],
          correctAnswer: 1
        }
      ]
    },
    {
      id: "orientation",
      name: "Orientation",
      emoji: "🧭",
      questions: [
        {
          id: "it_orient_1",
          question: 'Traduisez : "Come arrivo al centro?"',
          options: ["Comment aller au centre-ville ?", "Comment aller à l'hôtel ?", "Comment aller à la plage ?", "Comment aller au restaurant ?"],
          correctAnswer: 0
        },
        {
          id: "it_orient_2",
          question: 'Vrai ou faux : "Uscita" = sortie.',
          options: ["Vrai", "Faux"],
          correctAnswer: 0
        },
        {
          id: "it_orient_3",
          question: 'Complétez : "A ____" (à gauche).',
          options: ["destra", "sinistra", "stazione", "dritto"],
          correctAnswer: 1
        },
        {
          id: "it_orient_4",
          question: 'Que veut dire "È lontano?"',
          options: ["Est-ce proche ?", "Est-ce loin ?", "Est-ce cher ?", "Est-ce gratuit ?"],
          correctAnswer: 1
        }
      ]
    },
    {
      id: "shopping",
      name: "Shopping & Argent",
      emoji: "🛍️",
      questions: [
        {
          id: "it_shop_1",
          question: 'Traduisez : "Vorrei comprare questo."',
          options: ["Je voudrais acheter ceci", "Je voudrais vendre ceci", "Je voudrais manger ceci", "Je voudrais donner ceci"],
          correctAnswer: 0
        },
        {
          id: "it_shop_2",
          question: 'Vrai ou faux : "Soldi" = argent.',
          options: ["Vrai", "Faux"],
          correctAnswer: 0
        },
        {
          id: "it_shop_3",
          question: 'Complétez : "Non ho ____."',
          options: ["soldi", "taxi", "acqua", "biglietto"],
          correctAnswer: 0
        },
        {
          id: "it_shop_4",
          question: 'Que veut dire "È troppo caro"?',
          options: ["C'est très bon", "C'est trop cher", "C'est très beau", "C'est très loin"],
          correctAnswer: 1
        }
      ]
    },
    {
      id: "transport",
      name: "Transports locaux",
      emoji: "🚌",
      questions: [
        {
          id: "it_transport_1",
          question: 'Traduisez : "Vorrei un taxi."',
          options: ["Je voudrais un taxi", "Je voudrais un bus", "Je voudrais une chambre", "Je voudrais un repas"],
          correctAnswer: 0
        },
        {
          id: "it_transport_2",
          question: 'Vrai ou faux : "Treno" = train.',
          options: ["Vrai", "Faux"],
          correctAnswer: 0
        },
        {
          id: "it_transport_3",
          question: 'Complétez : "Un ____ per Roma, per favore."',
          options: ["biglietto", "colazione", "taxi", "museo"],
          correctAnswer: 0
        },
        {
          id: "it_transport_4",
          question: 'Que veut dire "Si fermi qui, per favore"?',
          options: ["Continuez tout droit, s'il vous plaît", "Arrêtez ici, s'il vous plaît", "Attendez un moment, s'il vous plaît", "Tournez à droite, s'il vous plaît"],
          correctAnswer: 1
        }
      ]
    },
    {
      id: "health",
      name: "Santé & sécurité",
      emoji: "🏥",
      questions: [
        {
          id: "it_health_1",
          question: 'Traduisez : "Dove è la farmacia?"',
          options: ["Où est la gare ?", "Où est la pharmacie ?", "Où est la chambre ?", "Où est le restaurant ?"],
          correctAnswer: 1
        },
        {
          id: "it_health_2",
          question: 'Vrai ou faux : "Ospedale" = hôpital.',
          options: ["Vrai", "Faux"],
          correctAnswer: 0
        },
        {
          id: "it_health_3",
          question: 'Complétez : "Ho perso il ____."',
          options: ["passaporto", "taxi", "letto", "ristorante"],
          correctAnswer: 0
        },
        {
          id: "it_health_4",
          question: 'Que veut dire "Non mi sento bene"?',
          options: ["Je ne me sens pas bien", "Je n'ai pas faim", "Je ne comprends pas", "Je ne veux pas partir"],
          correctAnswer: 0
        }
      ]
    },
    {
      id: "admin",
      name: "Urgences administratives",
      emoji: "📋",
      questions: [
        {
          id: "it_admin_1",
          question: 'Traduisez : "Polizia"',
          options: ["Gare", "Hôtel", "Police", "Taxi"],
          correctAnswer: 2
        },
        {
          id: "it_admin_2",
          question: 'Vrai ou faux : "Ambasciata" = Ambassade.',
          options: ["Vrai", "Faux"],
          correctAnswer: 0
        },
        {
          id: "it_admin_3",
          question: 'Complétez : "Può ____?"',
          options: ["aiutarmi", "comprare", "dormire", "viaggiare"],
          correctAnswer: 0
        },
        {
          id: "it_admin_4",
          question: 'Que veut dire "Ho perso il passaporto"?',
          options: ["J'ai trouvé mon passeport", "J'ai perdu mon passeport", "J'ai oublié mon passeport", "J'ai donné mon passeport"],
          correctAnswer: 1
        }
      ]
    },
    {
      id: "restaurant",
      name: "Restaurant",
      emoji: "🍽️",
      questions: [
        {
          id: "it_restaurant_1",
          question: 'Traduisez : "È piccante?"',
          options: ["Est-ce sucré ?", "Est-ce épicé ?", "Est-ce gratuit ?", "Est-ce cher ?"],
          correctAnswer: 1
        },
        {
          id: "it_restaurant_2",
          question: 'Vrai ou faux : "Pane" = pain.',
          options: ["Vrai", "Faux"],
          correctAnswer: 0
        },
        {
          id: "it_restaurant_3",
          question: 'Complétez : "Vorrei un ____."',
          options: ["bicchiere d'acqua", "biglietto", "taxi", "museo"],
          correctAnswer: 0
        },
        {
          id: "it_restaurant_4",
          question: 'Que veut dire "Il conto, per favore"?',
          options: ["Le menu, s'il vous plaît", "L'addition, s'il vous plaît", "L'eau, s'il vous plaît", "Une table, s'il vous plaît"],
          correctAnswer: 1
        }
      ]
    },
    {
      id: "events",
      name: "Événements & Loisirs",
      emoji: "🎭",
      questions: [
        {
          id: "it_events_1",
          question: 'Traduisez : "Vorrei una guida."',
          options: ["Je voudrais une chambre", "Je voudrais un guide", "Je voudrais un taxi", "Je voudrais un billet"],
          correctAnswer: 1
        },
        {
          id: "it_events_2",
          question: 'Vrai ou faux : "Concerto" = concert.',
          options: ["Vrai", "Faux"],
          correctAnswer: 0
        },
        {
          id: "it_events_3",
          question: 'Complétez : "Il ____ è molto bello."',
          options: ["museo", "taxi", "pane", "letto"],
          correctAnswer: 0
        },
        {
          id: "it_events_4",
          question: 'Que veut dire "A che ora inizia?"',
          options: ["À quelle heure ça commence ?", "Combien ça coûte ?", "Où est la sortie ?", "Comment y aller ?"],
          correctAnswer: 0
        }
      ]
    }
  ]
};

// Export des fonctions pour récupérer les données
export function getCountryQuizData(country: string): CountryQuizData | null {
  switch (country.toLowerCase()) {
    case 'turquie':
      return turkeyQuizData;
    case 'maroc':
      return moroccoQuizData;
    case 'espagne':
      return spainQuizData;
    case 'albanie':
      return albaniaQuizData;
    case 'italie':
      return italyQuizData;
    default:
      return null;
  }
}

export function getQuizQuestions(country: string, themeId: string): Omit<QuizQuestion, 'correctAnswer'>[] | null {
  const countryData = getCountryQuizData(country);
  if (!countryData) return null;
  
  const theme = countryData.themes.find(t => t.id === themeId);
  if (!theme) return null;
  
  // Retourne les questions SANS les réponses correctes
  return theme.questions.map(({ correctAnswer: _, ...question }) => question);
}

export function validateAnswer(country: string, questionId: string, answerIndex: number): boolean {
  const countryData = getCountryQuizData(country);
  if (!countryData) return false;
  
  for (const theme of countryData.themes) {
    const question = theme.questions.find(q => q.id === questionId);
    if (question) {
      return question.correctAnswer === answerIndex;
    }
  }
  return false;
}
