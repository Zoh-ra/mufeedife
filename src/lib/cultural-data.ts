export interface CulturalTip {
  id: string;
  category: string;
  situation: string;
  why: string;
  todo: string;
  quiz: {
    question: string;
    options: string[];
    correctAnswer: number;
  };
}

export interface CountryCulturalData {
  [category: string]: CulturalTip;
}

export interface CulturalDatabase {
  [country: string]: CountryCulturalData;
}

export const culturalData: CulturalDatabase = {
  'Turquie': {
    'Relations sociales & politesse': {
      id: '1',
      category: 'Relations sociales & politesse',
      situation: 'Refuser une offre de thé ou de café chez un habitant, sans explications.',
      why: 'L\'hospitalité est un pilier en Turquie. Refuser une invitation peut être vu comme un affront.',
      todo: 'Accepte au moins une petite tasse, remercie poliment (Teşekkür ederim) et offre un retour si possible.',
      quiz: {
        question: 'Que montre le geste d\'accepter une boisson lors d\'une visite ?',
        options: ['Indifférence', 'Respect et gratitude', 'Méfiance'],
        correctAnswer: 1
      }
    },
    'Gestes & communication non verbale': {
      id: '2',
      category: 'Gestes & communication non verbale',
      situation: 'Faire le signe "OK" (forme cercle avec pouce et index) en Turquie.',
      why: 'Ce geste est considéré offensant, connotant une insulte sur l\'orientation sexuelle.',
      todo: 'Garde les gestes simples : un sourire ou un hochement de tête. Utilise le langage corporel local avec attention.',
      quiz: {
        question: 'Le signe "OK" en Turquie est interprété comme…',
        options: ['Un compliment', 'Une insulte', 'Un accord'],
        correctAnswer: 1
      }
    },
    'Repas & habitudes alimentaires': {
      id: '3',
      category: 'Repas & habitudes alimentaires',
      situation: 'Ne pas utiliser sa main droite pour manger ou recevoir un aliment/paiement.',
      why: 'Selon les principes locaux, la main gauche est considérée impure.',
      todo: 'Utilise systématiquement la main droite, ou les deux mains si nécessaire. Offre, rends ou reçois avec la main droite.',
      quiz: {
        question: 'Quelle main utiliser pour donner un cadeau ?',
        options: ['Gauche', 'Droite', 'Indifférent'],
        correctAnswer: 1
      }
    },
    'Religion & spiritualité': {
      id: '4',
      category: 'Religion & spiritualité',
      situation: 'Porter ses chaussures dans une maison ou une mosquée turque.',
      why: 'Il est respectueux de retirer ses chaussures avant d\'entrer dans une maison ou un lieu de prière.',
      todo: 'Observe à l\'entrée : en général, on enlève ses chaussures. Accepte les chaussons si proposés.',
      quiz: {
        question: 'Que devrais-tu faire à l\'entrée d\'une maison turque ?',
        options: ['Garder tes chaussures', 'Les enlever', 'Mettre des sandales'],
        correctAnswer: 1
      }
    },
    'Vie quotidienne & comportements publics': {
      id: '5',
      category: 'Vie quotidienne & comportements publics',
      situation: 'Diriger l\'attention vers ton téléphone (ou bavarder fort) dans un lieu public sans regard ni respect.',
      why: 'Cela peut sembler impoli ou présomptueux, en particulier auprès d\'aînés ou dans un environnement calme.',
      todo: 'Regarde autour, minimise les distractions. Priorise l\'attention aux personnes — regard, politesse.',
      quiz: {
        question: 'Comment dois-tu te comporter dans un café traditionnel turc ?',
        options: ['Regarder ton téléphone sans faire attention', 'Engager un regard et respecter les codes locaux', 'Parler fort pour que tout le monde entende'],
        correctAnswer: 1
      }
    },
    'Fêtes & traditions locales': {
      id: '6',
      category: 'Fêtes & traditions locales',
      situation: 'Parler de politique, du statut d\'Atatürk ou de sujets sensibles en présence de personnes moins connues.',
      why: 'Le nationalisme et les figures historiques sont très sensibles — en parler sans précaution peut provoquer du malaise.',
      todo: 'Privilégie des sujets sûrs : gastronomie, paysages, traditions régionales.',
      quiz: {
        question: 'Est-il judicieux d\'aborder des sujets politiques avec des locaux que tu connais à peine ?',
        options: ['Oui, sans filtre', 'Non, mieux vaut rester neutre'],
        correctAnswer: 1
      }
    }
  },
  'Albanie': {
    'Relations sociales & politesse': {
      id: '1',
      category: 'Relations sociales & politesse',
      situation: 'Refuser une invitation à boire du café ou un petit encas chez un habitant.',
      why: 'Les Albanais sont extrêmement hospitaliers ; un refus peut être perçu comme un manque de respect ou d\'intérêt. Ils incarnent le principe du Besa, un code d\'honneur qui fait de l\'hospitalité un devoir sacré.',
      todo: 'Accepte toujours, même brièvement, en remerciant (Faleminderit) et propose de revenir la prochaine fois.',
      quiz: {
        question: 'Que signifie refuser une boisson proposée chez quelqu\'un en Albanie ?',
        options: ['Une question de goût', 'Un manque de respect envers l\'hospitalité', 'Une décision neutre'],
        correctAnswer: 1
      }
    },
    'Gestes & communication non verbale': {
      id: '2',
      category: 'Gestes & communication non verbale',
      situation: 'Hocher la tête verticalement (comme "oui" en Occident) sans réaliser que dans la culture albanaise cela signifie "non".',
      why: 'Les signes non verbaux sont inversés : acquiescer (hochement vertical) signifie "non", et secouer horizontalement la tête signifie "oui" — ce qui peut engager des quiproquos importants.',
      todo: 'Sois attentif à l\'expression faciale et aux mots pour confirmer le sens et reformuler si besoin.',
      quiz: {
        question: 'Quel geste correspond à "oui" en Albanie ?',
        options: ['Hochement de tête vertical (comme en Occident)', 'Secouer horizontal la tête', 'Haussement d\'épaules'],
        correctAnswer: 1
      }
    },
    'Religion & spiritualité': {
      id: '3',
      category: 'Religion & spiritualité',
      situation: 'Porter des vêtements courts ou provocants dans les zones rurales ou lors de visites de sites religieux.',
      why: 'Les régions rurales d\'Albanie et les lieux de culte restent conservateurs. Une tenue révélatrice peut gêner et sembler irrespectueuse.',
      todo: 'Couvre-toi de manière modeste — t-shirts manches courtes raisonnables, pantalons ou jupes mi-longues, épaules couvertes.',
      quiz: {
        question: 'Quel vêtement est le plus adapté pour visiter une mosquée rurale en Albanie ?',
        options: ['Mini-jupe + débardeur', 'Pantalon léger + chemisier couvrant', 'Short + t-shirt sans manches'],
        correctAnswer: 1
      }
    },
    'Vie quotidienne & comportements publics': {
      id: '4',
      category: 'Vie quotidienne & comportements publics',
      situation: 'Penser qu\'on peut tout payer par carte ou se fier aux distributeurs automatiques inconnus.',
      why: 'L\'Albanie reste majoritairement une économie en liquide : nombreuses petites entreprises n\'acceptent pas les cartes. De plus, certains distributeurs non bancaires imposent des frais importants.',
      todo: 'Retire des lek (monnaie locale) dans des banques reconnues à ton arrivée, et aie toujours du liquide pour les petites dépenses.',
      quiz: {
        question: 'Comment payer pour un café en dehors de Tirana en Albanie ?',
        options: ['Carte bancaire', 'Espèces (lek)', 'Bitcoin'],
        correctAnswer: 1
      }
    },
    'Fêtes & traditions locales': {
      id: '5',
      category: 'Fêtes & traditions locales',
      situation: 'Ignorer les particularités de conduite locale (priorité, ronds-points) ou compter trop sur Google Maps.',
      why: 'La circulation en Albanie n\'est pas toujours conforme aux règles officielles : priorité accordée souvent arbitrairement, et Google Maps peut être peu fiable dans les zones rurales.',
      todo: 'Sois vigilant sur la route, demande conseil aux locaux pour les itinéraires, et privilégie les transports guidés si tu n\'es pas sûr.',
      quiz: {
        question: 'Qui mérite la priorité dans un rond-point en Albanie, selon les observateurs ?',
        options: ['Celui qui entre', 'Celui qui est déjà dedans', 'Celui sans signalisation'],
        correctAnswer: 1
      }
    },
    'Repas & habitudes alimentaires': {
      id: '6',
      category: 'Repas & habitudes alimentaires',
      situation: 'Boire l\'eau du robinet ou jeter du papier toilette dans les toilettes.',
      why: 'L\'eau du robinet n\'est pas toujours potable ; jeter le papier dans les toilettes peut causer des obstructions, normalement on utilise une poubelle dédiée.',
      todo: 'Achète de l\'eau minérale pour boire ; jette le papier toilette dans la corbeille prévue à cet effet.',
      quiz: {
        question: 'Que fais-tu du papier toilette dans un établissement albanais ?',
        options: ['Je le jette dans la poubelle', 'Je le jette dans la toilette'],
        correctAnswer: 0
      }
    }
  },
  'Espagne': {
    'Relations sociales & politesse': {
      id: '1',
      category: 'Relations sociales & politesse',
      situation: 'Ne pas saluer la personne derrière le comptoir ou dans un petit commerce avec un simple « Hola » ou « Buenos días ».',
      why: 'Les Espagnols accordent beaucoup d\'importance aux salutations, même brèves — ne pas saluer peut sembler impoli.',
      todo: 'Un salut cordial suffit : « Hola » ou « Buenos días », accompagné d\'un léger sourire.😊',
      quiz: {
        question: 'Devrais-tu dire « Hola » en entrant dans une boutique espagnole ?',
        options: ['Oui, c\'est poli et attendu', 'Non, pas nécessaire'],
        correctAnswer: 0
      }
    },
    'Gestes & communication non verbale': {
      id: '2',
      category: 'Gestes & communication non verbale',
      situation: 'Exprimer de l\'ennui en baillant devant quelqu\'un, ou adopter une posture trop détendue ou impolie.',
      why: 'Les Espagnols sont chaleureux, mais la politesse et le respect visuel ont leur place ; bailler sans discrétion ou paraître fermé peut être mal interprété.',
      todo: 'Reste ouvert, maintiens le contact visuel, et si tu bâilles, couvre-toi avec la main.',
      quiz: {
        question: 'Est-il acceptable de bâiller franchement en face de quelqu\'un en Espagne ?',
        options: ['Oui', 'Non, couvre ta bouche'],
        correctAnswer: 1
      }
    },
    'Repas & habitudes alimentaires': {
      id: '3',
      category: 'Repas & habitudes alimentaires',
      situation: 'Essayer d\'acheter de la sangria dans un bar traditionnel en pensant que c\'est le vin typique.',
      why: 'La sangria est plutôt un cliché touristique ; les locaux préfèrent le tinto de verano ou un vin local.',
      todo: 'Demande au barman ce que boivent les habitués — souvent, le tinto de verano est le choix le plus courant en été, accompagné de quelques olives.',
      quiz: {
        question: 'Que préfèrent boire les Espagnols plutôt que le classique « turista-sangria » ?',
        options: ['Tinto de verano', 'Sangria'],
        correctAnswer: 0
      }
    },
    'Religion & spiritualité': {
      id: '4',
      category: 'Religion & spiritualité',
      situation: 'Porter des tenues de plage (maillot, paréo) en ville, dans les centres historiques ou religieux.',
      why: 'Hors plage, cette tenue est perçue comme inappropriée et peu respectueuse des espaces publics et de ceux qui les fréquentent.',
      todo: 'Habille-toi de manière décontractée mais respectueuse : pantalon léger, tee-shirt ou robe convenable suffisent.',
      quiz: {
        question: 'Est-il convenable de passer en maillot en ville après la plage ?',
        options: ['Oui', 'Non, il faut couvrir'],
        correctAnswer: 1
      }
    },
    'Vie quotidienne & comportements publics': {
      id: '5',
      category: 'Vie quotidienne & comportements publics',
      situation: 'Être assis sur une terrasse et jeter tes déchets par terre (serviette, mouchoir, canette).',
      why: 'Même si cela se voit parfois, la propreté publique reste valorisée ; jeter des déchets est mal vu.',
      todo: 'Toujours jeter tes déchets dans les poubelles ou emporter ton petit sachet jusqu\'à en trouver une.',
      quiz: {
        question: 'Où dois-tu jeter ton mouchoir usagé dans un endroit public ?',
        options: ['Par terre', 'Dans une poubelle'],
        correctAnswer: 1
      }
    },
    'Fêtes & traditions locales': {
      id: '6',
      category: 'Fêtes & traditions locales',
      situation: 'Ne pas tenir compte des heures locales des repas — vouloir dîner à 18 h comme à la maison.',
      why: 'Les Espagnols dînent tard (souvent après 21h) ; aller trop tôt peut limiter les options et te faire paraître pressé ou mal informé.',
      todo: 'Planifie tes dîners autour de 21‑22 h, ou attends le service des tapas si tu as faim tôt.',
      quiz: {
        question: 'À quelle heure dîne-t-on généralement en Espagne ?',
        options: ['18h', '21h‑22h'],
        correctAnswer: 1
      }
    }
  },
  'Italie': {
    'Relations sociales & politesse': {
      id: '1',
      category: 'Relations sociales & politesse',
      situation: 'Faire des remarques négatives sur la mafia ou comparer le Nord et le Sud de l\'Italie.',
      why: 'Ces sujets sont sensibles : l\'Italie est fière de son histoire. La division Nord–Sud peut déclencher des tensions.',
      todo: 'Parle de la cuisine, de la beauté locale ou de l\'architecture — des sujets toujours bienvenus.',
      quiz: {
        question: 'Est‑ce poli de plaisanter sur la mafia en Italie ?',
        options: ['Oui', 'Non'],
        correctAnswer: 1
      }
    },
    'Gestes & communication non verbale': {
      id: '2',
      category: 'Gestes & communication non verbale',
      situation: 'Serrer la main trop ferme (comme un power handshake) avec un Italien inconnu.',
      why: 'En Italie, la poignée de main est traditionnelle mais calme. Une prise de main trop forte peut être perçue comme agressive ou maladroite.',
      todo: 'Opte pour une poignée ferme mais douce, accompagnée d\'un sourire. Utilise aussi le bon titre : Signore / Signora selon le contexte.',
      quiz: {
        question: 'Une poignée de main italienne doit être...',
        options: ['Ferme mais modérée', 'Forte et énergique', 'À peine perceptible'],
        correctAnswer: 0
      }
    },
    'Repas & habitudes alimentaires': {
      id: '3',
      category: 'Repas & habitudes alimentaires',
      situation: 'Demander du parmesan sur un plat de fruits de mer, voire sur une pizza ou une salade.',
      why: 'En Italie, on n\'ajoute jamais de fromage (comme le Parmigiano) sur des plats de fruits de mer ou des pizzas, car cela masque les saveurs délicates. Les chefs conçoivent les plats pour être dégustés tels quels.',
      todo: 'Savoure les plats comme proposés. Si tu veux vraiment du fromage, demande poliment s\'il est disponible à côté.',
      quiz: {
        question: 'Lors d\'un repas italien, demander du parmesan sur un plat de fruits de mer peut être perçu comme :',
        options: ['Un enrichissement du goût', 'Une imprudence culinaire (réduit les saveurs)'],
        correctAnswer: 1
      }
    },
    'Religion & spiritualité': {
      id: '4',
      category: 'Religion & spiritualité',
      situation: 'Entrer dans une église habillé·e en short, robe courte ou sans épaule couverte.',
      why: 'Les églises italiennes — en particulier les sites religieux comme la Basilique Saint-Pierre ou Saint-Marc — imposent un code vestimentaire strict : épaules et genoux doivent être couverts. À défaut, l\'accès peut être refusé.',
      todo: 'Couvre-toi avec un châle ou une tenue adaptée (pantalon ou jupe longueur genou, blouse à manches).',
      quiz: {
        question: 'Quelle tenue est la plus appropriée pour visiter une église italienne ?',
        options: ['Débardeur + short (méthode chill)', 'Jupes au-dessus du genou + épaule découverte (peu convenable)', 'Pantalon + épaules couvertes (le meilleur choix)'],
        correctAnswer: 2
      }
    },
    'Vie quotidienne & comportements publics': {
      id: '5',
      category: 'Vie quotidienne & comportements publics',
      situation: 'Laisser son sac sur le siège du train ou bloquer le passage en étant absorbé·e par son téléphone.',
      why: 'Dans les espaces étroits comme les trains italiens, cela gêne la circulation d\'autrui — c\'est perçu comme un manque de respect pour l\'espace commun.',
      todo: 'Place ton sac entre tes pieds ou sur les étagères prévues, et tiens-toi sur le côté pour consulter ton téléphone.',
      quiz: {
        question: 'Que faut-il faire dans un espace exigu ?',
        options: ['Garder son sac sur le siège (gain de place perso)', 'Le poser sur ses genoux en occupant l\'allée', 'Le placer hors du passage — la bonne attitude'],
        correctAnswer: 2
      }
    },
    'Fêtes & traditions locales': {
      id: '6',
      category: 'Fêtes & traditions locales',
      situation: 'Acheter des souvenirs bon marché en plastique près des attractions plutôt que des articles artisanaux.',
      why: 'Ces souvenirs, bien que pratiques, manquent d\'authenticité et ne soutiennent ni les artisans locaux ni la culture locale.',
      todo: 'Explore les quartiers moins touristiques pour trouver des produits locaux (céramique, textile, gastronomie), plus respectueux et durables.',
      quiz: {
        question: 'Qu\'est-il préférable d\'acheter comme souvenir en Italie ?',
        options: ['Figurine plastique sur le trottoir', 'Artisanat local authentique'],
        correctAnswer: 1
      }
    }
  },
  'Maroc': {
    'Relations sociales & politesse': {
      id: '1',
      category: 'Relations sociales & politesse',
      situation: 'Critiquer le roi ou la monarchie — sujet tabou extrême.',
      why: 'La monarchie est sacrée au Maroc, toute critique est interdite culturellement et légalement.',
      todo: 'Évite tout sujet sur la royauté. Parle plutôt de cuisine locale ou de sites historiques.',
      quiz: {
        question: 'Le roi est-il un sujet sensible à discuter au Maroc ?',
        options: ['Oui', 'Non'],
        correctAnswer: 0
      }
    },
    'Gestes & communication non verbale': {
      id: '2',
      category: 'Gestes & communication non verbale',
      situation: 'Pointer quelqu\'un du doigt ou utiliser la main gauche pour saluer/manger.',
      why: 'Directions ou saluts inadéquats sont considérés impolis. La main gauche est perçue comme sale.',
      todo: 'Salue avec la main droite ou place la main sur le cœur ; utilise un geste de la main paume vers le bas.',
      quiz: {
        question: 'Quelle main utiliser pour donner un objet ou manger ?',
        options: ['Gauche', 'Droite'],
        correctAnswer: 1
      }
    },
    'Repas & habitudes alimentaires': {
      id: '3',
      category: 'Repas & habitudes alimentaires',
      situation: 'Refuser le thé à la menthe offert par l\'hôte.',
      why: 'Le thé est symbole d\'hospitalité ; le refuser peut offenser.',
      todo: 'Accepte une petite tasse en souriant : "shukran bezaf" (merci beaucoup).',
      quiz: {
        question: 'Le thé à la menthe au Maroc est un symbole de …',
        options: ['Luxe', 'Hospitalité', 'Sueur'],
        correctAnswer: 1
      }
    },
    'Religion & spiritualité': {
      id: '4',
      category: 'Religion & spiritualité',
      situation: 'Manger, boire ou fumer en public durant le Ramadan.',
      why: 'Cela viole le jeûne observé par beaucoup — socialement et parfois légalement problématique.',
      todo: 'Prévois d\'attendre l\'iftar ; respecte les restrictions publiques.',
      quiz: {
        question: 'Fumer en public pendant le Ramadan est…',
        options: ['Quelques fois mal vu', 'Très mal vu/neutre', 'Socialement inacceptable'],
        correctAnswer: 2
      }
    },
    'Vie quotidienne & comportements publics': {
      id: '5',
      category: 'Vie quotidienne & comportements publics',
      situation: 'Photographier des habitants sans demander.',
      why: 'Considéré comme intrusif, irrespectueux, surtout envers femmes et enfants.',
      todo: 'Demande "Mumkin nsawrou?" (puis-je vous photographier ?) avant de shooter.',
      quiz: {
        question: 'Toujours demander avant de photographier quelqu\'un au Maroc ?',
        options: ['Oui', 'Non'],
        correctAnswer: 0
      }
    },
    'Fêtes & traditions locales': {
      id: '6',
      category: 'Fêtes & traditions locales',
      situation: 'Arriver en retard (plus de flexibilité mais limite tolérance) à un repas chez un hôte.',
      why: 'L\'hospitalité est centrale — arriver tard peut être perçu comme un manque de respect.',
      todo: 'Prévenir si tu es en retard, au mieux arriver à l\'heure ou avec 15 min de délai.',
      quiz: {
        question: 'Arriver à l\'heure est poli si…',
        options: ['Tu veux prendre ton temps', 'Tu veux montrer ton respect'],
        correctAnswer: 1
      }
    },
  }
};

export const getCulturalTip = (country: string, category: string): CulturalTip | null => {
  const countryData = culturalData[country];
  if (!countryData) return null;
  
  return countryData[category] || null;
};

export const getCategoriesForCountry = (country: string): string[] => {
  const countryData = culturalData[country];
  if (!countryData) return [];
  
  return Object.keys(countryData);
};
