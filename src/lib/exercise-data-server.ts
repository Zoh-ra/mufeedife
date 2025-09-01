// Server-only module for exercise data

export interface ExercisePhrase {
  id: string;
  phrase: string;
  translation: string;
  phonetic?: string;
}

export interface ExerciseSet {
  id: string;
  phrases: ExercisePhrase[];
}

export interface ThemeExercise {
  id: string;
  name: string;
  exercises: ExerciseSet[];
}

export interface CountryExerciseData {
  country: string;
  themes: ThemeExercise[];
}

// Données d'exercices pour la Turquie
const turkeyExerciseData: CountryExerciseData = {
  country: 'turquie',
  themes: [
    {
      id: 'airport',
      name: 'Aéroport',
      exercises: [
        {
          id: 'airport_1',
          phrases: [
            { id: 'tr_airport_1_1', phrase: 'Pasaportum burada', translation: 'Mon passeport est ici', phonetic: 'pa-sa-por-toum bou-ra-da' },
            { id: 'tr_airport_1_2', phrase: 'Bagajım kayboldu', translation: 'Mon bagage est perdu', phonetic: 'ba-ga-jim kay-bol-dou' },
            { id: 'tr_airport_1_3', phrase: 'Gümrük nerede?', translation: 'Où est la douane ?', phonetic: 'gum-ruk ne-re-de' },
            { id: 'tr_airport_1_4', phrase: 'Uçağım gecikti', translation: 'Mon avion est en retard', phonetic: 'ou-cha-im ge-djik-ti' }
          ]
        },
        {
          id: 'airport_2',
          phrases: [
            { id: 'tr_airport_2_1', phrase: 'Biletim nerede?', translation: 'Où est mon billet ?', phonetic: 'bi-le-tim ne-re-de' },
            { id: 'tr_airport_2_2', phrase: 'Kapı numarası kaç?', translation: 'Quel est le numéro de porte ?', phonetic: 'ka-pı nou-ma-ra-sı kach' },
            { id: 'tr_airport_2_3', phrase: 'Check-in nerede?', translation: 'Où est l\'enregistrement ?', phonetic: 'check-in ne-re-de' },
            { id: 'tr_airport_2_4', phrase: 'Güvenlik kontrolü', translation: 'Contrôle de sécurité', phonetic: 'gu-ven-lik kon-tro-lu' }
          ]
        },
        {
          id: 'airport_3',
          phrases: [
            { id: 'tr_airport_3_1', phrase: 'Duty free nerede?', translation: 'Où est le duty free ?', phonetic: 'duty free ne-re-de' },
            { id: 'tr_airport_3_2', phrase: 'Bekleme salonu', translation: 'Salle d\'attente', phonetic: 'bek-le-me sa-lo-nou' },
            { id: 'tr_airport_3_3', phrase: 'Uçuş iptal edildi', translation: 'Le vol est annulé', phonetic: 'ou-chouch ip-tal e-dil-di' },
            { id: 'tr_airport_3_4', phrase: 'Boarding başladı', translation: 'L\'embarquement a commencé', phonetic: 'boarding bach-la-dı' }
          ]
        },
        {
          id: 'airport_4',
          phrases: [
            { id: 'tr_airport_4_1', phrase: 'Bagaj teslim', translation: 'Récupération des bagages', phonetic: 'ba-gaj tes-lim' },
            { id: 'tr_airport_4_2', phrase: 'Çıkış kapısı', translation: 'Porte de sortie', phonetic: 'chı-kıch ka-pı-sı' },
            { id: 'tr_airport_4_3', phrase: 'Taksi durağı', translation: 'Station de taxi', phonetic: 'tak-si dou-ra-ı' },
            { id: 'tr_airport_4_4', phrase: 'Otobüs terminali', translation: 'Terminal de bus', phonetic: 'o-to-bus ter-mi-na-li' }
          ]
        }
      ]
    },
    {
      id: 'accommodation',
      name: 'Hébergement',
      exercises: [
        {
          id: 'accommodation_1',
          phrases: [
            { id: 'tr_hotel_1_1', phrase: 'Rezervasyonum var', translation: 'J\'ai une réservation', phonetic: 're-zer-vas-yo-noum var' },
            { id: 'tr_hotel_1_2', phrase: 'Oda anahtarı lütfen', translation: 'La clé de la chambre s\'il vous plaît', phonetic: 'o-da a-nah-ta-ri lut-fen' },
            { id: 'tr_hotel_1_3', phrase: 'Kahvaltı dahil mi?', translation: 'Le petit-déjeuner est-il inclus ?', phonetic: 'kah-val-ti da-hil mi' },
            { id: 'tr_hotel_1_4', phrase: 'Wifi şifresi nedir?', translation: 'Quel est le mot de passe wifi ?', phonetic: 'wi-fi shif-re-si ne-dir' }
          ]
        },
        {
          id: 'accommodation_2',
          phrases: [
            { id: 'tr_hotel_2_1', phrase: 'Temizlik servisi', translation: 'Service de ménage', phonetic: 'te-miz-lik ser-vi-si' },
            { id: 'tr_hotel_2_2', phrase: 'Havlu değişimi', translation: 'Changement de serviettes', phonetic: 'hav-lou de-i-shi-mi' },
            { id: 'tr_hotel_2_3', phrase: 'Klima çalışmıyor', translation: 'La climatisation ne marche pas', phonetic: 'kli-ma chal-ısh-mı-yor' },
            { id: 'tr_hotel_2_4', phrase: 'Ekstra yatak', translation: 'Lit supplémentaire', phonetic: 'ek-stra ya-tak' }
          ]
        },
        {
          id: 'accommodation_3',
          phrases: [
            { id: 'tr_hotel_3_1', phrase: 'Check-out saati', translation: 'Heure de départ', phonetic: 'check-out sa-a-ti' },
            { id: 'tr_hotel_3_2', phrase: 'Bagaj saklama', translation: 'Consigne à bagages', phonetic: 'ba-gaj sak-la-ma' },
            { id: 'tr_hotel_3_3', phrase: 'Resepsiyon nerede?', translation: 'Où est la réception ?', phonetic: 're-sep-si-yon ne-re-de' },
            { id: 'tr_hotel_3_4', phrase: 'Asansör bozuk', translation: 'L\'ascenseur est en panne', phonetic: 'a-san-sor bo-zouk' }
          ]
        },
        {
          id: 'accommodation_4',
          phrases: [
            { id: 'tr_hotel_4_1', phrase: 'Spa merkezi', translation: 'Centre spa', phonetic: 'spa mer-ke-zi' },
            { id: 'tr_hotel_4_2', phrase: 'Yüzme havuzu', translation: 'Piscine', phonetic: 'yuz-me ha-vou-zou' },
            { id: 'tr_hotel_4_3', phrase: 'Fitness salonu', translation: 'Salle de fitness', phonetic: 'fit-ness sa-lo-nou' },
            { id: 'tr_hotel_4_4', phrase: 'Otopark ücretsiz mi?', translation: 'Le parking est-il gratuit ?', phonetic: 'o-to-park uch-ret-siz mi' }
          ]
        }
      ]
    },
    {
      id: 'greetings',
      name: 'Salutations',
      exercises: [
        {
          id: 'greetings_1',
          phrases: [
            { id: 'tr_greet_1_1', phrase: 'Merhaba', translation: 'Bonjour', phonetic: 'mer-ha-ba' },
            { id: 'tr_greet_1_2', phrase: 'Nasılsınız?', translation: 'Comment allez-vous ?', phonetic: 'na-sil-si-niz' },
            { id: 'tr_greet_1_3', phrase: 'Teşekkür ederim', translation: 'Merci', phonetic: 'te-shek-kur e-de-rim' },
            { id: 'tr_greet_1_4', phrase: 'Görüşürüz', translation: 'À bientôt', phonetic: 'go-ru-shu-ruz' }
          ]
        },
        {
          id: 'greetings_2',
          phrases: [
            { id: 'tr_greet_2_1', phrase: 'İyi günler', translation: 'Bonne journée', phonetic: 'i-yi gun-ler' },
            { id: 'tr_greet_2_2', phrase: 'İyi akşamlar', translation: 'Bonsoir', phonetic: 'i-yi ak-sham-lar' },
            { id: 'tr_greet_2_3', phrase: 'Hoş geldiniz', translation: 'Bienvenue', phonetic: 'hosh gel-di-niz' },
            { id: 'tr_greet_2_4', phrase: 'Özür dilerim', translation: 'Excusez-moi', phonetic: 'o-zur di-le-rim' }
          ]
        },
        {
          id: 'greetings_3',
          phrases: [
            { id: 'tr_greet_3_1', phrase: 'Adım...', translation: 'Je m\'appelle...', phonetic: 'a-dim' },
            { id: 'tr_greet_3_2', phrase: 'Tanıştığımıza memnun oldum', translation: 'Ravi de vous rencontrer', phonetic: 'ta-nish-ti-i-mi-za mem-nun ol-dum' },
            { id: 'tr_greet_3_3', phrase: 'Nereden geliyorsunuz?', translation: 'D\'où venez-vous ?', phonetic: 'ne-re-den ge-li-yor-su-nuz' },
            { id: 'tr_greet_3_4', phrase: 'İyi yolculuklar', translation: 'Bon voyage', phonetic: 'i-yi yol-djou-louk-lar' }
          ]
        },
        {
          id: 'greetings_4',
          phrases: [
            { id: 'tr_greet_4_1', phrase: 'Güle güle', translation: 'Au revoir', phonetic: 'gu-le gu-le' },
            { id: 'tr_greet_4_2', phrase: 'İyi geceler', translation: 'Bonne nuit', phonetic: 'i-yi ge-je-ler' },
            { id: 'tr_greet_4_3', phrase: 'Yarın görüşürüz', translation: 'À demain', phonetic: 'ya-rin go-ru-shu-ruz' },
            { id: 'tr_greet_4_4', phrase: 'Kendine iyi bak', translation: 'Prends soin de toi', phonetic: 'ken-di-ne i-yi bak' }
          ]
        }
      ]
    },
    {
      id: 'orientation',
      name: 'Orientation',
      exercises: [
        {
          id: 'orientation_1',
          phrases: [
            { id: 'tr_orient_1_1', phrase: 'Nerede?', translation: 'Où ?', phonetic: 'ne-re-de' },
            { id: 'tr_orient_1_2', phrase: 'Sağa dönün', translation: 'Tournez à droite', phonetic: 'sa-a do-nun' },
            { id: 'tr_orient_1_3', phrase: 'Sola dönün', translation: 'Tournez à gauche', phonetic: 'so-la do-nun' },
            { id: 'tr_orient_1_4', phrase: 'Düz gidin', translation: 'Allez tout droit', phonetic: 'duz gi-din' }
          ]
        },
        {
          id: 'orientation_2',
          phrases: [
            { id: 'tr_orient_2_1', phrase: 'Harita var mı?', translation: 'Y a-t-il une carte ?', phonetic: 'ha-ri-ta var mi' },
            { id: 'tr_orient_2_2', phrase: 'Kayboldum', translation: 'Je suis perdu', phonetic: 'kay-bol-dum' },
            { id: 'tr_orient_2_3', phrase: 'Yakın mı?', translation: 'Est-ce proche ?', phonetic: 'ya-kin mi' },
            { id: 'tr_orient_2_4', phrase: 'Uzak mı?', translation: 'Est-ce loin ?', phonetic: 'ou-zak mi' }
          ]
        },
        {
          id: 'orientation_3',
          phrases: [
            { id: 'tr_orient_3_1', phrase: 'Kaç dakika?', translation: 'Combien de minutes ?', phonetic: 'kach da-ki-ka' },
            { id: 'tr_orient_3_2', phrase: 'Yürüyerek', translation: 'À pied', phonetic: 'yu-ru-ye-rek' },
            { id: 'tr_orient_3_3', phrase: 'Arabayla', translation: 'En voiture', phonetic: 'a-ra-bay-la' },
            { id: 'tr_orient_3_4', phrase: 'Otobüsle', translation: 'En bus', phonetic: 'o-to-bus-le' }
          ]
        },
        {
          id: 'orientation_4',
          phrases: [
            { id: 'tr_orient_4_1', phrase: 'İlk kavşakta', translation: 'Au premier carrefour', phonetic: 'ilk kav-shak-ta' },
            { id: 'tr_orient_4_2', phrase: 'Köprüden geçin', translation: 'Traversez le pont', phonetic: 'kop-ru-den ge-chin' },
            { id: 'tr_orient_4_3', phrase: 'Karşıda', translation: 'En face', phonetic: 'kar-shi-da' },
            { id: 'tr_orient_4_4', phrase: 'Yanında', translation: 'À côté de', phonetic: 'ya-nin-da' }
          ]
        }
      ]
    },
    {
      id: 'shopping',
      name: 'Shopping',
      exercises: [
        {
          id: 'shopping_1',
          phrases: [
            { id: 'tr_shop_1_1', phrase: 'Ne kadar?', translation: 'Combien ça coûte ?', phonetic: 'ne ka-dar' },
            { id: 'tr_shop_1_2', phrase: 'Çok pahalı', translation: 'C\'est trop cher', phonetic: 'chok pa-ha-li' },
            { id: 'tr_shop_1_3', phrase: 'İndirim var mı?', translation: 'Y a-t-il une réduction ?', phonetic: 'in-di-rim var mi' },
            { id: 'tr_shop_1_4', phrase: 'Bunu alıyorum', translation: 'Je prends ça', phonetic: 'bou-nou a-li-yo-roum' }
          ]
        },
        {
          id: 'shopping_2',
          phrases: [
            { id: 'tr_shop_2_1', phrase: 'Kredi kartı', translation: 'Carte de crédit', phonetic: 'kre-di kar-ti' },
            { id: 'tr_shop_2_2', phrase: 'Nakit', translation: 'Espèces', phonetic: 'na-kit' },
            { id: 'tr_shop_2_3', phrase: 'Fiş lütfen', translation: 'Le reçu s\'il vous plaît', phonetic: 'fish lut-fen' },
            { id: 'tr_shop_2_4', phrase: 'Poşet istiyorum', translation: 'Je veux un sac', phonetic: 'po-shet is-ti-yo-roum' }
          ]
        },
        {
          id: 'shopping_3',
          phrases: [
            { id: 'tr_shop_3_1', phrase: 'Beden var mı?', translation: 'Avez-vous la taille ?', phonetic: 'be-den var mi' },
            { id: 'tr_shop_3_2', phrase: 'Deneyebilir miyim?', translation: 'Puis-je essayer ?', phonetic: 'de-ne-ye-bi-lir mi-yim' },
            { id: 'tr_shop_3_3', phrase: 'Çok büyük', translation: 'Trop grand', phonetic: 'chok bu-yuk' },
            { id: 'tr_shop_3_4', phrase: 'Çok küçük', translation: 'Trop petit', phonetic: 'chok ku-chuk' }
          ]
        },
        {
          id: 'shopping_4',
          phrases: [
            { id: 'tr_shop_4_1', phrase: 'Başka renk var mı?', translation: 'Y a-t-il d\'autres couleurs ?', phonetic: 'bash-ka renk var mi' },
            { id: 'tr_shop_4_2', phrase: 'Saat kaçta açık?', translation: 'À quelle heure ouvrez-vous ?', phonetic: 'sa-at kach-ta a-chik' },
            { id: 'tr_shop_4_3', phrase: 'Saat kaçta kapanıyor?', translation: 'À quelle heure fermez-vous ?', phonetic: 'sa-at kach-ta ka-pa-ni-yor' },
            { id: 'tr_shop_4_4', phrase: 'İade edebilir miyim?', translation: 'Puis-je le retourner ?', phonetic: 'i-a-de e-de-bi-lir mi-yim' }
          ]
        }
      ]
    },
    {
      id: 'transport',
      name: 'Transport',
      exercises: [
        {
          id: 'transport_1',
          phrases: [
            { id: 'tr_trans_1_1', phrase: 'Otobüs durağı nerede?', translation: 'Où est l\'arrêt de bus ?', phonetic: 'o-to-bus dou-ra-i ne-re-de' },
            { id: 'tr_trans_1_2', phrase: 'Tren istasyonu', translation: 'Gare', phonetic: 'tren is-tas-yo-nou' },
            { id: 'tr_trans_1_3', phrase: 'Taksi çağırın', translation: 'Appelez un taxi', phonetic: 'tak-si cha-i-rin' },
            { id: 'tr_trans_1_4', phrase: 'Metro haritası', translation: 'Plan du métro', phonetic: 'met-ro ha-ri-ta-si' }
          ]
        },
        {
          id: 'transport_2',
          phrases: [
            { id: 'tr_trans_2_1', phrase: 'Bilet ne kadar?', translation: 'Combien coûte le billet ?', phonetic: 'bi-let ne ka-dar' },
            { id: 'tr_trans_2_2', phrase: 'Tek yön', translation: 'Aller simple', phonetic: 'tek yon' },
            { id: 'tr_trans_2_3', phrase: 'Gidiş dönüş', translation: 'Aller-retour', phonetic: 'gi-dish do-nush' },
            { id: 'tr_trans_2_4', phrase: 'Hangi platform?', translation: 'Quel quai ?', phonetic: 'han-gi plat-form' }
          ]
        },
        {
          id: 'transport_3',
          phrases: [
            { id: 'tr_trans_3_1', phrase: 'Saat kaçta kalkıyor?', translation: 'À quelle heure part-il ?', phonetic: 'sa-at kach-ta kal-ki-yor' },
            { id: 'tr_trans_3_2', phrase: 'Geç kaldım', translation: 'Je suis en retard', phonetic: 'gech kal-dim' },
            { id: 'tr_trans_3_3', phrase: 'Son tren', translation: 'Dernier train', phonetic: 'son tren' },
            { id: 'tr_trans_3_4', phrase: 'İlk otobüs', translation: 'Premier bus', phonetic: 'ilk o-to-bus' }
          ]
        },
        {
          id: 'transport_4',
          phrases: [
            { id: 'tr_trans_4_1', phrase: 'Burada inin', translation: 'Descendez ici', phonetic: 'bou-ra-da i-nin' },
            { id: 'tr_trans_4_2', phrase: 'Bir sonraki durak', translation: 'Prochain arrêt', phonetic: 'bir son-ra-ki dou-rak' },
            { id: 'tr_trans_4_3', phrase: 'Aktarma yapmalıyım', translation: 'Je dois changer', phonetic: 'ak-tar-ma yap-ma-li-yim' },
            { id: 'tr_trans_4_4', phrase: 'Doğru yolda mıyım?', translation: 'Suis-je sur la bonne route ?', phonetic: 'do-rou yol-da mi-yim' }
          ]
        }
      ]
    },
    {
      id: 'health',
      name: 'Santé',
      exercises: [
        {
          id: 'health_1',
          phrases: [
            { id: 'tr_health_1_1', phrase: 'Doktor lazım', translation: 'J\'ai besoin d\'un médecin', phonetic: 'dok-tor la-zim' },
            { id: 'tr_health_1_2', phrase: 'Hastane nerede?', translation: 'Où est l\'hôpital ?', phonetic: 'has-ta-ne ne-re-de' },
            { id: 'tr_health_1_3', phrase: 'Eczane', translation: 'Pharmacie', phonetic: 'edj-za-ne' },
            { id: 'tr_health_1_4', phrase: 'Acil durum', translation: 'Urgence', phonetic: 'a-djil dou-roum' }
          ]
        },
        {
          id: 'health_2',
          phrases: [
            { id: 'tr_health_2_1', phrase: 'Başım ağrıyor', translation: 'J\'ai mal à la tête', phonetic: 'ba-shim a-ri-yor' },
            { id: 'tr_health_2_2', phrase: 'Midem bulanıyor', translation: 'J\'ai la nausée', phonetic: 'mi-dem bou-la-ni-yor' },
            { id: 'tr_health_2_3', phrase: 'Ateşim var', translation: 'J\'ai de la fièvre', phonetic: 'a-te-shim var' },
            { id: 'tr_health_2_4', phrase: 'Öksürüyorum', translation: 'Je tousse', phonetic: 'ok-su-ru-yo-roum' }
          ]
        },
        {
          id: 'health_3',
          phrases: [
            { id: 'tr_health_3_1', phrase: 'Reçete', translation: 'Ordonnance', phonetic: 're-che-te' },
            { id: 'tr_health_3_2', phrase: 'İlaç', translation: 'Médicament', phonetic: 'i-lach' },
            { id: 'tr_health_3_3', phrase: 'Alerjim var', translation: 'Je suis allergique', phonetic: 'a-ler-jim var' },
            { id: 'tr_health_3_4', phrase: 'Sigorta', translation: 'Assurance', phonetic: 'si-gor-ta' }
          ]
        },
        {
          id: 'health_4',
          phrases: [
            { id: 'tr_health_4_1', phrase: 'Randevu', translation: 'Rendez-vous', phonetic: 'ran-de-vou' },
            { id: 'tr_health_4_2', phrase: 'Muayene', translation: 'Examen', phonetic: 'mou-a-ye-ne' },
            { id: 'tr_health_4_3', phrase: 'Ameliyat', translation: 'Opération', phonetic: 'a-me-li-yat' },
            { id: 'tr_health_4_4', phrase: 'İyileşiyorum', translation: 'Je vais mieux', phonetic: 'i-yi-le-shi-yo-roum' }
          ]
        }
      ]
    },
    {
      id: 'admin',
      name: 'Administration',
      exercises: [
        {
          id: 'admin_1',
          phrases: [
            { id: 'tr_admin_1_1', phrase: 'Pasaport kontrol', translation: 'Contrôle des passeports', phonetic: 'pa-sa-port kon-trol' },
            { id: 'tr_admin_1_2', phrase: 'Vize gerekli mi?', translation: 'Faut-il un visa ?', phonetic: 'vi-ze ge-rek-li mi' },
            { id: 'tr_admin_1_3', phrase: 'Kimlik belgesi', translation: 'Pièce d\'identité', phonetic: 'kim-lik bel-ge-si' },
            { id: 'tr_admin_1_4', phrase: 'Belediye binası', translation: 'Mairie', phonetic: 'be-le-di-ye bi-na-si' }
          ]
        },
        {
          id: 'admin_2',
          phrases: [
            { id: 'tr_admin_2_1', phrase: 'Başvuru formu', translation: 'Formulaire de demande', phonetic: 'bash-vou-rou for-mou' },
            { id: 'tr_admin_2_2', phrase: 'Belge çevirisi', translation: 'Traduction de document', phonetic: 'bel-ge che-vi-ri-si' },
            { id: 'tr_admin_2_3', phrase: 'Noter tasdik', translation: 'Authentification notariale', phonetic: 'no-ter tas-dik' },
            { id: 'tr_admin_2_4', phrase: 'Harç ücreti', translation: 'Frais administratifs', phonetic: 'harch uch-re-ti' }
          ]
        },
        {
          id: 'admin_3',
          phrases: [
            { id: 'tr_admin_3_1', phrase: 'İkamet belgesi', translation: 'Certificat de résidence', phonetic: 'i-ka-met bel-ge-si' },
            { id: 'tr_admin_3_2', phrase: 'Çalışma izni', translation: 'Permis de travail', phonetic: 'cha-lish-ma iz-ni' },
            { id: 'tr_admin_3_3', phrase: 'Öğrenci vizesi', translation: 'Visa étudiant', phonetic: 'o-ren-dji vi-ze-si' },
            { id: 'tr_admin_3_4', phrase: 'Süresi doldu', translation: 'Expiré', phonetic: 'su-re-si dol-dou' }
          ]
        },
        {
          id: 'admin_4',
          phrases: [
            { id: 'tr_admin_4_1', phrase: 'Yenileme', translation: 'Renouvellement', phonetic: 'ye-ni-le-me' },
            { id: 'tr_admin_4_2', phrase: 'Onay bekleniyor', translation: 'En attente d\'approbation', phonetic: 'o-nay bek-le-ni-yor' },
            { id: 'tr_admin_4_3', phrase: 'Red edildi', translation: 'Refusé', phonetic: 'red e-dil-di' },
            { id: 'tr_admin_4_4', phrase: 'Kabul edildi', translation: 'Accepté', phonetic: 'ka-boul e-dil-di' }
          ]
        }
      ]
    },
    {
      id: 'restaurant',
      name: 'Restaurant',
      exercises: [
        {
          id: 'restaurant_1',
          phrases: [
            { id: 'tr_rest_1_1', phrase: 'Masa rezervasyonu', translation: 'Réservation de table', phonetic: 'ma-sa re-zer-vas-yo-nou' },
            { id: 'tr_rest_1_2', phrase: 'Menü lütfen', translation: 'Le menu s\'il vous plaît', phonetic: 'me-nu lut-fen' },
            { id: 'tr_rest_1_3', phrase: 'Ne önerirsiniz?', translation: 'Que recommandez-vous ?', phonetic: 'ne o-ne-rir-si-niz' },
            { id: 'tr_rest_1_4', phrase: 'Hesap lütfen', translation: 'L\'addition s\'il vous plaît', phonetic: 'he-sap lut-fen' }
          ]
        },
        {
          id: 'restaurant_2',
          phrases: [
            { id: 'tr_rest_2_1', phrase: 'Vejetaryen yemek', translation: 'Plat végétarien', phonetic: 've-je-tar-yen ye-mek' },
            { id: 'tr_rest_2_2', phrase: 'Alerjim var', translation: 'J\'ai des allergies', phonetic: 'a-ler-jim var' },
            { id: 'tr_rest_2_3', phrase: 'Acılı sevmiyorum', translation: 'Je n\'aime pas épicé', phonetic: 'a-dji-li sev-mi-yo-roum' },
            { id: 'tr_rest_2_4', phrase: 'Az pişmiş', translation: 'Saignant', phonetic: 'az pish-mish' }
          ]
        },
        {
          id: 'restaurant_3',
          phrases: [
            { id: 'tr_rest_3_1', phrase: 'Su lütfen', translation: 'De l\'eau s\'il vous plaît', phonetic: 'sou lut-fen' },
            { id: 'tr_rest_3_2', phrase: 'Şarap listesi', translation: 'Carte des vins', phonetic: 'sha-rap lis-te-si' },
            { id: 'tr_rest_3_3', phrase: 'Çay', translation: 'Thé', phonetic: 'chay' },
            { id: 'tr_rest_3_4', phrase: 'Türk kahvesi', translation: 'Café turc', phonetic: 'turk kah-ve-si' }
          ]
        },
        {
          id: 'restaurant_4',
          phrases: [
            { id: 'tr_rest_4_1', phrase: 'Çok lezzetli', translation: 'Très délicieux', phonetic: 'chok lez-zet-li' },
            { id: 'tr_rest_4_2', phrase: 'Doydum', translation: 'Je suis rassasié', phonetic: 'doy-doum' },
            { id: 'tr_rest_4_3', phrase: 'Bahşiş', translation: 'Pourboire', phonetic: 'bah-shish' },
            { id: 'tr_rest_4_4', phrase: 'Paket yapın', translation: 'À emporter', phonetic: 'pa-ket ya-pin' }
          ]
        }
      ]
    },
    {
      id: 'events',
      name: 'Événements',
      exercises: [
        {
          id: 'events_1',
          phrases: [
            { id: 'tr_event_1_1', phrase: 'Müze nerede?', translation: 'Où est le musée ?', phonetic: 'mu-ze ne-re-de' },
            { id: 'tr_event_1_2', phrase: 'Bilet ne kadar?', translation: 'Combien coûte le billet ?', phonetic: 'bi-let ne ka-dar' },
            { id: 'tr_event_1_3', phrase: 'Saat kaçta açık?', translation: 'À quelle heure ouvre-t-il ?', phonetic: 'sa-at kach-ta a-chik' },
            { id: 'tr_event_1_4', phrase: 'Rehber var mı?', translation: 'Y a-t-il un guide ?', phonetic: 're-ber var mi' }
          ]
        },
        {
          id: 'events_2',
          phrases: [
            { id: 'tr_event_2_1', phrase: 'Konser bileti', translation: 'Billet de concert', phonetic: 'kon-ser bi-le-ti' },
            { id: 'tr_event_2_2', phrase: 'Tiyatro oyunu', translation: 'Pièce de théâtre', phonetic: 'ti-yat-ro o-you-nou' },
            { id: 'tr_event_2_3', phrase: 'Sanat galerisi', translation: 'Galerie d\'art', phonetic: 'sa-nat ga-le-ri-si' },
            { id: 'tr_event_2_4', phrase: 'Festival', translation: 'Festival', phonetic: 'fes-ti-val' }
          ]
        },
        {
          id: 'events_3',
          phrases: [
            { id: 'tr_event_3_1', phrase: 'Fotoğraf çekebilir miyim?', translation: 'Puis-je prendre des photos ?', phonetic: 'fo-to-raf che-ke-bi-lir mi-yim' },
            { id: 'tr_event_3_2', phrase: 'Ses kaydı yasak', translation: 'Enregistrement interdit', phonetic: 'ses kay-di ya-sak' },
            { id: 'tr_event_3_3', phrase: 'Öğrenci indirimi', translation: 'Réduction étudiant', phonetic: 'o-ren-dji in-di-ri-mi' },
            { id: 'tr_event_3_4', phrase: 'Grup bileti', translation: 'Billet de groupe', phonetic: 'groop bi-le-ti' }
          ]
        },
        {
          id: 'events_4',
          phrases: [
            { id: 'tr_event_4_1', phrase: 'Çok güzel', translation: 'Très beau', phonetic: 'chok gu-zel' },
            { id: 'tr_event_4_2', phrase: 'Etkileyici', translation: 'Impressionnant', phonetic: 'et-ki-le-yi-dji' },
            { id: 'tr_event_4_3', phrase: 'Tarihi eser', translation: 'Monument historique', phonetic: 'ta-ri-hi e-ser' },
            { id: 'tr_event_4_4', phrase: 'Kültürel etkinlik', translation: 'Événement culturel', phonetic: 'kul-tu-rel et-kin-lik' }
          ]
        }
      ]
    }
  ]
};

// Données d'exercices pour l'Albanie
const albaniaExerciseData: CountryExerciseData = {
  country: 'albanie',
  themes: [
    {
      id: 'airport',
      name: 'Aéroport',
      exercises: [
        {
          id: 'airport_1',
          phrases: [
            { id: 'al_airport_1_1', phrase: 'Pasaporta ime është këtu', translation: 'Mon passeport est ici', phonetic: 'pa-sa-por-ta i-me ësh-të kë-tu' },
            { id: 'al_airport_1_2', phrase: 'Valixhja ime është humbur', translation: 'Mon bagage est perdu', phonetic: 'va-lix-hja i-me ësh-të hum-bur' },
            { id: 'al_airport_1_3', phrase: 'Ku është dogana?', translation: 'Où est la douane ?', phonetic: 'ku ësh-të do-ga-na' },
            { id: 'al_airport_1_4', phrase: 'Avioni im është vonuar', translation: 'Mon avion est en retard', phonetic: 'a-vi-o-ni im ësh-të vo-nu-ar' }
          ]
        },
        {
          id: 'airport_2',
          phrases: [
            { id: 'al_airport_2_1', phrase: 'Ku është bileta ime?', translation: 'Où est mon billet ?', phonetic: 'ku ësh-të bi-le-ta i-me' },
            { id: 'al_airport_2_2', phrase: 'Cili është numri i portës?', translation: 'Quel est le numéro de porte ?', phonetic: 'tsi-li ësh-të num-ri i por-tës' },
            { id: 'al_airport_2_3', phrase: 'Ku është check-in?', translation: 'Où est l\'enregistrement ?', phonetic: 'ku ësh-të check-in' },
            { id: 'al_airport_2_4', phrase: 'Kontrolli i sigurisë', translation: 'Contrôle de sécurité', phonetic: 'kon-trol-li i si-gu-ri-së' }
          ]
        },
        {
          id: 'airport_3',
          phrases: [
            { id: 'al_airport_3_1', phrase: 'Ku është duty free?', translation: 'Où est le duty free ?', phonetic: 'ku ësh-të duty free' },
            { id: 'al_airport_3_2', phrase: 'Salla e pritjes', translation: 'Salle d\'attente', phonetic: 'sal-la e prit-jes' },
            { id: 'al_airport_3_3', phrase: 'Fluturimi është anuluar', translation: 'Le vol est annulé', phonetic: 'flu-tu-ri-mi ësh-të a-nu-lu-ar' },
            { id: 'al_airport_3_4', phrase: 'Boarding ka filluar', translation: 'L\'embarquement a commencé', phonetic: 'boarding ka fil-lu-ar' }
          ]
        },
        {
          id: 'airport_4',
          phrases: [
            { id: 'al_airport_4_1', phrase: 'Marrja e bagazheve', translation: 'Récupération des bagages', phonetic: 'mar-rja e ba-gazh-e-ve' },
            { id: 'al_airport_4_2', phrase: 'Porta e daljes', translation: 'Porte de sortie', phonetic: 'por-ta e dal-jes' },
            { id: 'al_airport_4_3', phrase: 'Stacioni i taksive', translation: 'Station de taxi', phonetic: 'sta-tsi-o-ni i tak-si-ve' },
            { id: 'al_airport_4_4', phrase: 'Terminali i autobusëve', translation: 'Terminal de bus', phonetic: 'ter-mi-na-li i au-to-bu-së-ve' }
          ]
        }
      ]
    },
    {
      id: 'accommodation',
      name: 'Hébergement',
      exercises: [
        {
          id: 'accommodation_1',
          phrases: [
            { id: 'al_hotel_1_1', phrase: 'Kam një rezervim', translation: 'J\'ai une réservation', phonetic: 'kam një re-zer-vim' },
            { id: 'al_hotel_1_2', phrase: 'Çelësin e dhomës, ju lutem', translation: 'La clé de la chambre s\'il vous plaît', phonetic: 'çe-lë-sin e dho-mës ju lu-tem' },
            { id: 'al_hotel_1_3', phrase: 'A është mëngjesi i përfshirë?', translation: 'Le petit-déjeuner est-il inclus ?', phonetic: 'a ësh-të mën-gje-si i për-fshi-rë' },
            { id: 'al_hotel_1_4', phrase: 'Cila është fjalëkalimi i wifi?', translation: 'Quel est le mot de passe wifi ?', phonetic: 'tsi-la ësh-të fja-lë-ka-li-mi i wifi' }
          ]
        },
        {
          id: 'accommodation_2',
          phrases: [
            { id: 'al_hotel_2_1', phrase: 'Shërbimi i pastrimit', translation: 'Service de ménage', phonetic: 'shër-bi-mi i pas-tri-mit' },
            { id: 'al_hotel_2_2', phrase: 'Ndërrimi i peshqirëve', translation: 'Changement de serviettes', phonetic: 'ndër-ri-mi i pesh-qi-rë-ve' },
            { id: 'al_hotel_2_3', phrase: 'Kondicioneri nuk punon', translation: 'La climatisation ne marche pas', phonetic: 'kon-di-tsi-o-ne-ri nuk pu-non' },
            { id: 'al_hotel_2_4', phrase: 'Shtrat shtesë', translation: 'Lit supplémentaire', phonetic: 'shtra-t shte-së' }
          ]
        },
        {
          id: 'accommodation_3',
          phrases: [
            { id: 'al_hotel_3_1', phrase: 'Ora e check-out', translation: 'Heure de départ', phonetic: 'o-ra e check-out' },
            { id: 'al_hotel_3_2', phrase: 'Ruajtja e bagazheve', translation: 'Consigne à bagages', phonetic: 'ru-aj-tja e ba-gazh-e-ve' },
            { id: 'al_hotel_3_3', phrase: 'Ku është recepsioni?', translation: 'Où est la réception ?', phonetic: 'ku ësh-të re-tsep-si-o-ni' },
            { id: 'al_hotel_3_4', phrase: 'Ashensori është prishur', translation: 'L\'ascenseur est en panne', phonetic: 'a-shen-so-ri ësh-të pri-shur' }
          ]
        },
        {
          id: 'accommodation_4',
          phrases: [
            { id: 'al_hotel_4_1', phrase: 'Qendra spa', translation: 'Centre spa', phonetic: 'qen-dra spa' },
            { id: 'al_hotel_4_2', phrase: 'Pishina', translation: 'Piscine', phonetic: 'pi-shi-na' },
            { id: 'al_hotel_4_3', phrase: 'Salla e fitness', translation: 'Salle de fitness', phonetic: 'sal-la e fitness' },
            { id: 'al_hotel_4_4', phrase: 'A është parkimi falas?', translation: 'Le parking est-il gratuit ?', phonetic: 'a ësh-të par-ki-mi fa-las' }
          ]
        }
      ]
    },
    {
      id: 'greetings',
      name: 'Salutations',
      exercises: [
        {
          id: 'greetings_1',
          phrases: [
            { id: 'al_greet_1_1', phrase: 'Përshëndetje', translation: 'Bonjour', phonetic: 'për-shën-det-je' },
            { id: 'al_greet_1_2', phrase: 'Mirëmëngjes', translation: 'Bon matin', phonetic: 'mi-rë-mën-gjes' },
            { id: 'al_greet_1_3', phrase: 'Si jeni?', translation: 'Comment allez-vous ?', phonetic: 'si je-ni' },
            { id: 'al_greet_1_4', phrase: 'Faleminderit', translation: 'Merci', phonetic: 'fa-le-min-de-rit' }
          ]
        },
        {
          id: 'greetings_2',
          phrases: [
            { id: 'al_greet_2_1', phrase: 'Mirëdita', translation: 'Bonne journée', phonetic: 'mi-rë-di-ta' },
            { id: 'al_greet_2_2', phrase: 'Natën e mirë', translation: 'Bonne nuit', phonetic: 'na-tën e mi-rë' },
            { id: 'al_greet_2_3', phrase: 'Mirupafshim', translation: 'Au revoir', phonetic: 'mi-ru-paf-shim' },
            { id: 'al_greet_2_4', phrase: 'Ju lutem', translation: 'S\'il vous plaît', phonetic: 'ju lu-tem' }
          ]
        },
        {
          id: 'greetings_3',
          phrases: [
            { id: 'al_greet_3_1', phrase: 'Më falni', translation: 'Excusez-moi', phonetic: 'më fal-ni' },
            { id: 'al_greet_3_2', phrase: 'Më vjen keq', translation: 'Je suis désolé', phonetic: 'më vjen keq' },
            { id: 'al_greet_3_3', phrase: 'Nuk ka problem', translation: 'Pas de problème', phonetic: 'nuk ka pro-blem' },
            { id: 'al_greet_3_4', phrase: 'Shihemi më vonë', translation: 'À plus tard', phonetic: 'shi-he-mi më vo-në' }
          ]
        },
        {
          id: 'greetings_4',
          phrases: [
            { id: 'al_greet_4_1', phrase: 'Çfarë bëni?', translation: 'Que faites-vous ?', phonetic: 'çfa-rë bë-ni' },
            { id: 'al_greet_4_2', phrase: 'Gjithçka në rregull', translation: 'Tout va bien', phonetic: 'gjith-çka në rre-gull' },
            { id: 'al_greet_4_3', phrase: 'Keni kohë?', translation: 'Avez-vous le temps ?', phonetic: 'ke-ni ko-hë' },
            { id: 'al_greet_4_4', phrase: 'Me kënaqësi', translation: 'Avec plaisir', phonetic: 'me kë-na-që-si' }
          ]
        }
      ]
    },
    {
      id: 'orientation',
      name: 'Orientation',
      exercises: [
        {
          id: 'orientation_1',
          phrases: [
            { id: 'al_orient_1_1', phrase: 'Ku është?', translation: 'Où est-ce ?', phonetic: 'ku ësh-të' },
            { id: 'al_orient_1_2', phrase: 'Në të djathtë', translation: 'À droite', phonetic: 'në të djath-të' },
            { id: 'al_orient_1_3', phrase: 'Në të majtë', translation: 'À gauche', phonetic: 'në të maj-të' },
            { id: 'al_orient_1_4', phrase: 'Drejt përpara', translation: 'Tout droit', phonetic: 'drejt për-pa-ra' }
          ]
        },
        {
          id: 'orientation_2',
          phrases: [
            { id: 'al_orient_2_1', phrase: 'Larg nga këtu', translation: 'Loin d\'ici', phonetic: 'larg nga kë-tu' },
            { id: 'al_orient_2_2', phrase: 'Afër këtu', translation: 'Près d\'ici', phonetic: 'a-fër kë-tu' },
            { id: 'al_orient_2_3', phrase: 'Në qendër', translation: 'Au centre', phonetic: 'në qen-dër' },
            { id: 'al_orient_2_4', phrase: 'Në cepin e rrugës', translation: 'Au coin de la rue', phonetic: 'në ce-pin e rru-gës' }
          ]
        },
        {
          id: 'orientation_3',
          phrases: [
            { id: 'al_orient_3_1', phrase: 'Harta', translation: 'Carte', phonetic: 'har-ta' },
            { id: 'al_orient_3_2', phrase: 'Adresa', translation: 'Adresse', phonetic: 'a-dre-sa' },
            { id: 'al_orient_3_3', phrase: 'Numri i shtëpisë', translation: 'Numéro de maison', phonetic: 'num-ri i shtë-pi-së' },
            { id: 'al_orient_3_4', phrase: 'Emri i rrugës', translation: 'Nom de rue', phonetic: 'em-ri i rru-gës' }
          ]
        },
        {
          id: 'orientation_4',
          phrases: [
            { id: 'al_orient_4_1', phrase: 'Sa larg është?', translation: 'À quelle distance ?', phonetic: 'sa larg ësh-të' },
            { id: 'al_orient_4_2', phrase: 'Pesë minuta', translation: 'Cinq minutes', phonetic: 'pe-së mi-nu-ta' },
            { id: 'al_orient_4_3', phrase: 'Me këmbë', translation: 'À pied', phonetic: 'me këm-bë' },
            { id: 'al_orient_4_4', phrase: 'Me makinë', translation: 'En voiture', phonetic: 'me ma-ki-në' }
          ]
        }
      ]
    },
    {
      id: 'shopping',
      name: 'Shopping',
      exercises: [
        {
          id: 'shopping_1',
          phrases: [
            { id: 'al_shop_1_1', phrase: 'Sa kushton?', translation: 'Combien ça coûte ?', phonetic: 'sa kush-ton' },
            { id: 'al_shop_1_2', phrase: 'Shumë shtrenjtë', translation: 'Très cher', phonetic: 'shu-më shtrenjt-të' },
            { id: 'al_shop_1_3', phrase: 'Ka zbritje?', translation: 'Y a-t-il une réduction ?', phonetic: 'ka zbrit-je' },
            { id: 'al_shop_1_4', phrase: 'Do ta blej', translation: 'Je vais l\'acheter', phonetic: 'do ta blej' }
          ]
        },
        {
          id: 'shopping_2',
          phrases: [
            { id: 'al_shop_2_1', phrase: 'Madhësia', translation: 'Taille', phonetic: 'ma-dhë-si-a' },
            { id: 'al_shop_2_2', phrase: 'Ngjyra', translation: 'Couleur', phonetic: 'ngjy-ra' },
            { id: 'al_shop_2_3', phrase: 'Cilësia', translation: 'Qualité', phonetic: 'ci-lë-si-a' },
            { id: 'al_shop_2_4', phrase: 'Garancia', translation: 'Garantie', phonetic: 'ga-ran-ci-a' }
          ]
        },
        {
          id: 'shopping_3',
          phrases: [
            { id: 'al_shop_3_1', phrase: 'Karta e kreditit', translation: 'Carte de crédit', phonetic: 'kar-ta e kre-di-tit' },
            { id: 'al_shop_3_2', phrase: 'Para në dorë', translation: 'Argent liquide', phonetic: 'pa-ra në do-rë' },
            { id: 'al_shop_3_3', phrase: 'Fatura', translation: 'Facture', phonetic: 'fa-tu-ra' },
            { id: 'al_shop_3_4', phrase: 'Kthimi i parave', translation: 'Remboursement', phonetic: 'kthi-mi i pa-ra-ve' }
          ]
        },
        {
          id: 'shopping_4',
          phrases: [
            { id: 'al_shop_4_1', phrase: 'Dyqani', translation: 'Magasin', phonetic: 'dy-qa-ni' },
            { id: 'al_shop_4_2', phrase: 'Tregu', translation: 'Marché', phonetic: 'tre-gu' },
            { id: 'al_shop_4_3', phrase: 'Qendra tregtare', translation: 'Centre commercial', phonetic: 'qen-dra treg-ta-re' },
            { id: 'al_shop_4_4', phrase: 'Shitësi', translation: 'Vendeur', phonetic: 'shi-të-si' }
          ]
        }
      ]
    },
    {
      id: 'transport',
      name: 'Transport',
      exercises: [
        {
          id: 'transport_1',
          phrases: [
            { id: 'al_trans_1_1', phrase: 'Autobusi', translation: 'Bus', phonetic: 'au-to-bu-si' },
            { id: 'al_trans_1_2', phrase: 'Treni', translation: 'Train', phonetic: 'tre-ni' },
            { id: 'al_trans_1_3', phrase: 'Taksia', translation: 'Taxi', phonetic: 'tak-si-a' },
            { id: 'al_trans_1_4', phrase: 'Metro', translation: 'Métro', phonetic: 'me-tro' }
          ]
        },
        {
          id: 'transport_2',
          phrases: [
            { id: 'al_trans_2_1', phrase: 'Bileta', translation: 'Billet', phonetic: 'bi-le-ta' },
            { id: 'al_trans_2_2', phrase: 'Stacioni', translation: 'Station', phonetic: 'sta-tsi-o-ni' },
            { id: 'al_trans_2_3', phrase: 'Orari', translation: 'Horaire', phonetic: 'o-ra-ri' },
            { id: 'al_trans_2_4', phrase: 'Vonesa', translation: 'Retard', phonetic: 'vo-ne-sa' }
          ]
        },
        {
          id: 'transport_3',
          phrases: [
            { id: 'al_trans_3_1', phrase: 'Ku është stacioni?', translation: 'Où est la station ?', phonetic: 'ku ësh-të sta-tsi-o-ni' },
            { id: 'al_trans_3_2', phrase: 'Sa kushton bileta?', translation: 'Combien coûte le billet ?', phonetic: 'sa kush-ton bi-le-ta' },
            { id: 'al_trans_3_3', phrase: 'Kur niset?', translation: 'Quand part-il ?', phonetic: 'kur ni-set' },
            { id: 'al_trans_3_4', phrase: 'Kur mbërrin?', translation: 'Quand arrive-t-il ?', phonetic: 'kur mbër-rin' }
          ]
        },
        {
          id: 'transport_4',
          phrases: [
            { id: 'al_trans_4_1', phrase: 'Ndalesa e ardhshme', translation: 'Prochain arrêt', phonetic: 'nda-le-sa e ardh-shme' },
            { id: 'al_trans_4_2', phrase: 'Më lini këtu', translation: 'Laissez-moi ici', phonetic: 'më li-ni kë-tu' },
            { id: 'al_trans_4_3', phrase: 'Karta e udhëtimit', translation: 'Carte de transport', phonetic: 'kar-ta e u-dhë-ti-mit' },
            { id: 'al_trans_4_4', phrase: 'Platforma', translation: 'Quai', phonetic: 'pla-for-ma' }
          ]
        }
      ]
    },
    {
      id: 'health',
      name: 'Santé',
      exercises: [
        {
          id: 'health_1',
          phrases: [
            { id: 'al_health_1_1', phrase: 'Më dhemb koka', translation: 'J\'ai mal à la tête', phonetic: 'më dhemb ko-ka' },
            { id: 'al_health_1_2', phrase: 'Më dhemb stomaku', translation: 'J\'ai mal au ventre', phonetic: 'më dhemb sto-ma-ku' },
            { id: 'al_health_1_3', phrase: 'Kam temperaturë', translation: 'J\'ai de la fièvre', phonetic: 'kam tem-pe-ra-tu-rë' },
            { id: 'al_health_1_4', phrase: 'Kam kollë', translation: 'J\'ai une toux', phonetic: 'kam kol-lë' }
          ]
        },
        {
          id: 'health_2',
          phrases: [
            { id: 'al_health_2_1', phrase: 'Farmacia', translation: 'Pharmacie', phonetic: 'far-ma-tsi-a' },
            { id: 'al_health_2_2', phrase: 'Mjeku', translation: 'Médecin', phonetic: 'mje-ku' },
            { id: 'al_health_2_3', phrase: 'Spitali', translation: 'Hôpital', phonetic: 'spi-ta-li' },
            { id: 'al_health_2_4', phrase: 'Ambulanca', translation: 'Ambulance', phonetic: 'am-bu-lan-tsa' }
          ]
        },
        {
          id: 'health_3',
          phrases: [
            { id: 'al_health_3_1', phrase: 'Ilaci', translation: 'Médicament', phonetic: 'i-la-tsi' },
            { id: 'al_health_3_2', phrase: 'Recepta', translation: 'Ordonnance', phonetic: 're-tsep-ta' },
            { id: 'al_health_3_3', phrase: 'Alergji', translation: 'Allergie', phonetic: 'a-ler-gji' },
            { id: 'al_health_3_4', phrase: 'Dhimbje', translation: 'Douleur', phonetic: 'dhim-bje' }
          ]
        },
        {
          id: 'health_4',
          phrases: [
            { id: 'al_health_4_1', phrase: 'Kam nevojë për ndihmë', translation: 'J\'ai besoin d\'aide', phonetic: 'kam ne-vo-jë për ndi-hmë' },
            { id: 'al_health_4_2', phrase: 'Thirni mjekun', translation: 'Appelez le médecin', phonetic: 'thir-ni mje-kun' },
            { id: 'al_health_4_3', phrase: 'Është urgjente', translation: 'C\'est urgent', phonetic: 'ësh-të ur-gjen-te' },
            { id: 'al_health_4_4', phrase: 'Siguracioni shëndetësor', translation: 'Assurance santé', phonetic: 'si-gu-ra-tsi-o-ni shën-de-të-sor' }
          ]
        }
      ]
    },
    {
      id: 'admin',
      name: 'Administration',
      exercises: [
        {
          id: 'admin_1',
          phrases: [
            { id: 'al_admin_1_1', phrase: 'Dokumentet', translation: 'Documents', phonetic: 'do-ku-men-tet' },
            { id: 'al_admin_1_2', phrase: 'Pasaporta', translation: 'Passeport', phonetic: 'pa-sa-por-ta' },
            { id: 'al_admin_1_3', phrase: 'Viza', translation: 'Visa', phonetic: 'vi-za' },
            { id: 'al_admin_1_4', phrase: 'Leja e qëndrimit', translation: 'Permis de séjour', phonetic: 'le-ja e qën-dri-mit' }
          ]
        },
        {
          id: 'admin_2',
          phrases: [
            { id: 'al_admin_2_1', phrase: 'Zyra e komunës', translation: 'Mairie', phonetic: 'zy-ra e ko-mu-nës' },
            { id: 'al_admin_2_2', phrase: 'Policia', translation: 'Police', phonetic: 'po-li-tsi-a' },
            { id: 'al_admin_2_3', phrase: 'Ambasada', translation: 'Ambassade', phonetic: 'am-ba-sa-da' },
            { id: 'al_admin_2_4', phrase: 'Konsullata', translation: 'Consulat', phonetic: 'kon-sul-la-ta' }
          ]
        },
        {
          id: 'admin_3',
          phrases: [
            { id: 'al_admin_3_1', phrase: 'Formulari', translation: 'Formulaire', phonetic: 'for-mu-la-ri' },
            { id: 'al_admin_3_2', phrase: 'Nënshkrimi', translation: 'Signature', phonetic: 'nën-shkri-mi' },
            { id: 'al_admin_3_3', phrase: 'Fotokopja', translation: 'Photocopie', phonetic: 'fo-to-kop-ja' },
            { id: 'al_admin_3_4', phrase: 'Vula zyrtare', translation: 'Tampon officiel', phonetic: 'vu-la zyr-ta-re' }
          ]
        },
        {
          id: 'admin_4',
          phrases: [
            { id: 'al_admin_4_1', phrase: 'Taksa', translation: 'Taxe', phonetic: 'tak-sa' },
            { id: 'al_admin_4_2', phrase: 'Pagesa', translation: 'Paiement', phonetic: 'pa-ge-sa' },
            { id: 'al_admin_4_3', phrase: 'Fatura zyrtare', translation: 'Facture officielle', phonetic: 'fa-tu-ra zyr-ta-re' },
            { id: 'al_admin_4_4', phrase: 'Afati', translation: 'Délai', phonetic: 'a-fa-ti' }
          ]
        }
      ]
    },
    {
      id: 'restaurant',
      name: 'Restaurant',
      exercises: [
        {
          id: 'restaurant_1',
          phrases: [
            { id: 'al_rest_1_1', phrase: 'Tavolina për dy persona', translation: 'Table pour deux personnes', phonetic: 'ta-vo-li-na për dy per-so-na' },
            { id: 'al_rest_1_2', phrase: 'Menuja, ju lutem', translation: 'Le menu s\'il vous plaît', phonetic: 'me-nu-ja ju lu-tem' },
            { id: 'al_rest_1_3', phrase: 'Çfarë rekomandoni?', translation: 'Que recommandez-vous ?', phonetic: 'çfa-rë re-ko-man-do-ni' },
            { id: 'al_rest_1_4', phrase: 'Jam vegjetarian', translation: 'Je suis végétarien', phonetic: 'jam veg-je-ta-ri-an' }
          ]
        },
        {
          id: 'restaurant_2',
          phrases: [
            { id: 'al_rest_2_1', phrase: 'Ujë', translation: 'Eau', phonetic: 'u-jë' },
            { id: 'al_rest_2_2', phrase: 'Verë', translation: 'Vin', phonetic: 've-rë' },
            { id: 'al_rest_2_3', phrase: 'Birra', translation: 'Bière', phonetic: 'bir-ra' },
            { id: 'al_rest_2_4', phrase: 'Kafe', translation: 'Café', phonetic: 'ka-fe' }
          ]
        },
        {
          id: 'restaurant_3',
          phrases: [
            { id: 'al_rest_3_1', phrase: 'Mishi', translation: 'Viande', phonetic: 'mi-shi' },
            { id: 'al_rest_3_2', phrase: 'Peshku', translation: 'Poisson', phonetic: 'pesh-ku' },
            { id: 'al_rest_3_3', phrase: 'Sallatë', translation: 'Salade', phonetic: 'sal-la-të' },
            { id: 'al_rest_3_4', phrase: 'Ëmbëlsira', translation: 'Dessert', phonetic: 'ëm-bël-si-ra' }
          ]
        },
        {
          id: 'restaurant_4',
          phrases: [
            { id: 'al_rest_4_1', phrase: 'Llogaria, ju lutem', translation: 'L\'addition s\'il vous plaît', phonetic: 'llo-ga-ri-a ju lu-tem' },
            { id: 'al_rest_4_2', phrase: 'Është i shijshëm', translation: 'C\'est délicieux', phonetic: 'ësh-të i shij-shëm' },
            { id: 'al_rest_4_3', phrase: 'Shumë i kripur', translation: 'Très salé', phonetic: 'shu-më i kri-pur' },
            { id: 'al_rest_4_4', phrase: 'Bakshishi', translation: 'Pourboire', phonetic: 'bak-shi-shi' }
          ]
        }
      ]
    },
    {
      id: 'events',
      name: 'Événements',
      exercises: [
        {
          id: 'events_1',
          phrases: [
            { id: 'al_event_1_1', phrase: 'Festivali', translation: 'Festival', phonetic: 'fes-ti-va-li' },
            { id: 'al_event_1_2', phrase: 'Koncert', translation: 'Concert', phonetic: 'kon-tsert' },
            { id: 'al_event_1_3', phrase: 'Teatri', translation: 'Théâtre', phonetic: 'te-a-tri' },
            { id: 'al_event_1_4', phrase: 'Kinema', translation: 'Cinéma', phonetic: 'ki-ne-ma' }
          ]
        },
        {
          id: 'events_2',
          phrases: [
            { id: 'al_event_2_1', phrase: 'Bileta për spektakël', translation: 'Billet pour spectacle', phonetic: 'bi-le-ta për spek-ta-kël' },
            { id: 'al_event_2_2', phrase: 'Çfarë ore fillon?', translation: 'À quelle heure ça commence ?', phonetic: 'çfa-rë o-re fil-lon' },
            { id: 'al_event_2_3', phrase: 'Sa zgjat?', translation: 'Combien de temps ça dure ?', phonetic: 'sa zgjat' },
            { id: 'al_event_2_4', phrase: 'Ka ndërprerje?', translation: 'Y a-t-il un entracte ?', phonetic: 'ka ndër-prer-je' }
          ]
        },
        {
          id: 'events_3',
          phrases: [
            { id: 'al_event_3_1', phrase: 'Muzeu', translation: 'Musée', phonetic: 'mu-ze-u' },
            { id: 'al_event_3_2', phrase: 'Galeria e artit', translation: 'Galerie d\'art', phonetic: 'ga-le-ri-a e ar-tit' },
            { id: 'al_event_3_3', phrase: 'Ekspozita', translation: 'Exposition', phonetic: 'eks-po-zi-ta' },
            { id: 'al_event_3_4', phrase: 'Udhëzuesi', translation: 'Guide', phonetic: 'u-dhë-zu-e-si' }
          ]
        },
        {
          id: 'events_4',
          phrases: [
            { id: 'al_event_4_1', phrase: 'Tradita lokale', translation: 'Tradition locale', phonetic: 'tra-di-ta lo-ka-le' },
            { id: 'al_event_4_2', phrase: 'Festa kombëtare', translation: 'Fête nationale', phonetic: 'fes-ta kom-bë-ta-re' },
            { id: 'al_event_4_3', phrase: 'Vallëzimi tradicional', translation: 'Danse traditionnelle', phonetic: 'val-lë-zi-mi tra-di-tsi-o-nal' },
            { id: 'al_event_4_4', phrase: 'Kostumi popullor', translation: 'Costume traditionnel', phonetic: 'kos-tu-mi po-pul-lor' }
          ]
        }
      ]
    }
  ]
};

// Données d'exercices pour le Maroc
const moroccoExerciseData: CountryExerciseData = {
  country: 'maroc',
  themes: [
    {
      id: 'airport',
      name: 'Aéroport',
      exercises: [
        {
          id: 'airport_1',
          phrases: [
            { id: 'ma_airport_1_1', phrase: 'Fin passport dyali?', translation: 'Où est mon passeport ?', phonetic: 'fin pass-port dya-li' },
            { id: 'ma_airport_1_2', phrase: 'Baggage dyali dayeʕ', translation: 'Mon bagage est perdu', phonetic: 'ba-ga-ge dya-li da-yeʕ' },
            { id: 'ma_airport_1_3', phrase: 'Fin kayna la douane?', translation: 'Où est la douane ?', phonetic: 'fin kay-na la dou-a-ne' },
            { id: 'ma_airport_1_4', phrase: 'Ṭayara dyali mʕaṭṭla', translation: 'Mon avion est en retard', phonetic: 'ṭa-ya-ra dya-li mʕaṭ-ṭla' }
          ]
        },
        {
          id: 'airport_2',
          phrases: [
            { id: 'ma_airport_2_1', phrase: 'Fin billet dyali?', translation: 'Où est mon billet ?', phonetic: 'fin bil-let dya-li' },
            { id: 'ma_airport_2_2', phrase: 'Chhal raqam l-porte?', translation: 'Quel est le numéro de porte ?', phonetic: 'chhal ra-qam l-por-te' },
            { id: 'ma_airport_2_3', phrase: 'Fin kayn check-in?', translation: 'Où est l\'enregistrement ?', phonetic: 'fin kayn check-in' },
            { id: 'ma_airport_2_4', phrase: 'Contrôle sécurité', translation: 'Contrôle de sécurité', phonetic: 'con-trô-le sé-cu-ri-té' }
          ]
        },
        {
          id: 'airport_3',
          phrases: [
            { id: 'ma_airport_3_1', phrase: 'Fin kayn duty free?', translation: 'Où est le duty free ?', phonetic: 'fin kayn duty free' },
            { id: 'ma_airport_3_2', phrase: 'Salle d\'attente', translation: 'Salle d\'attente', phonetic: 'sal-le d\'at-ten-te' },
            { id: 'ma_airport_3_3', phrase: 'Vol annulé', translation: 'Le vol est annulé', phonetic: 'vol an-nu-lé' },
            { id: 'ma_airport_3_4', phrase: 'Embarquement bda', translation: 'L\'embarquement a commencé', phonetic: 'em-bar-que-ment b-da' }
          ]
        },
        {
          id: 'airport_4',
          phrases: [
            { id: 'ma_airport_4_1', phrase: 'Récupération bagages', translation: 'Récupération des bagages', phonetic: 'ré-cu-pé-ra-tion ba-ga-ges' },
            { id: 'ma_airport_4_2', phrase: 'Porte sortie', translation: 'Porte de sortie', phonetic: 'por-te sor-tie' },
            { id: 'ma_airport_4_3', phrase: 'Station taxi', translation: 'Station de taxi', phonetic: 'sta-tion ta-xi' },
            { id: 'ma_airport_4_4', phrase: 'Terminal bus', translation: 'Terminal de bus', phonetic: 'ter-mi-nal bus' }
          ]
        }
      ]
    },
    {
      id: 'accommodation',
      name: 'Hébergement',
      exercises: [
        {
          id: 'accommodation_1',
          phrases: [
            { id: 'ma_hotel_1_1', phrase: 'ʕandi réservation', translation: 'J\'ai une réservation', phonetic: 'ʕan-di ré-ser-va-tion' },
            { id: 'ma_hotel_1_2', phrase: 'Miftaḥ dyali, ʕafak', translation: 'Ma clé s\'il vous plaît', phonetic: 'mif-taḥ dya-li ʕa-fak' },
            { id: 'ma_hotel_1_3', phrase: 'Petit-déjeuner dakhel?', translation: 'Le petit-déjeuner est inclus ?', phonetic: 'pe-tit-dé-jeu-ner da-khel' },
            { id: 'ma_hotel_1_4', phrase: 'Chnu mot de passe wifi?', translation: 'Quel est le mot de passe wifi ?', phonetic: 'ch-nu mot de pas-se wi-fi' }
          ]
        },
        {
          id: 'accommodation_2',
          phrases: [
            { id: 'ma_hotel_2_1', phrase: 'Service nettoyage', translation: 'Service de ménage', phonetic: 'ser-vi-ce net-to-ya-ge' },
            { id: 'ma_hotel_2_2', phrase: 'Tbdil serviettes', translation: 'Changement de serviettes', phonetic: 'tb-dil ser-viet-tes' },
            { id: 'ma_hotel_2_3', phrase: 'Climatisation khayba', translation: 'La climatisation ne marche pas', phonetic: 'cli-ma-ti-sa-tion khay-ba' },
            { id: 'ma_hotel_2_4', phrase: 'Lit supplémentaire', translation: 'Lit supplémentaire', phonetic: 'lit sup-plé-men-tai-re' }
          ]
        },
        {
          id: 'accommodation_3',
          phrases: [
            { id: 'ma_hotel_3_1', phrase: 'Waqt check-out', translation: 'Heure de départ', phonetic: 'wa-qt check-out' },
            { id: 'ma_hotel_3_2', phrase: 'Consigne bagages', translation: 'Consigne à bagages', phonetic: 'con-si-gne ba-ga-ges' },
            { id: 'ma_hotel_3_3', phrase: 'Fin kayna réception?', translation: 'Où est la réception ?', phonetic: 'fin kay-na ré-cep-tion' },
            { id: 'ma_hotel_3_4', phrase: 'Ascenseur mkhassar', translation: 'L\'ascenseur est en panne', phonetic: 'as-cen-seur mkhas-sar' }
          ]
        },
        {
          id: 'accommodation_4',
          phrases: [
            { id: 'ma_hotel_4_1', phrase: 'Centre spa', translation: 'Centre spa', phonetic: 'cen-tre spa' },
            { id: 'ma_hotel_4_2', phrase: 'Piscine', translation: 'Piscine', phonetic: 'pis-ci-ne' },
            { id: 'ma_hotel_4_3', phrase: 'Salle fitness', translation: 'Salle de fitness', phonetic: 'sal-le fit-ness' },
            { id: 'ma_hotel_4_4', phrase: 'Parking gratuit?', translation: 'Le parking est-il gratuit ?', phonetic: 'par-king gra-tuit' }
          ]
        }
      ]
    },
    {
      id: 'greetings',
      name: 'Salutations',
      exercises: [
        {
          id: 'greetings_1',
          phrases: [
            { id: 'ma_greet_1_1', phrase: 'Salam', translation: 'Bonjour', phonetic: 'sa-lam' },
            { id: 'ma_greet_1_2', phrase: 'Sbah lkhir', translation: 'Bon matin', phonetic: 'sbah lkhir' },
            { id: 'ma_greet_1_3', phrase: 'Kif dayr?', translation: 'Comment allez-vous ?', phonetic: 'kif da-yr' },
            { id: 'ma_greet_1_4', phrase: 'Choukran', translation: 'Merci', phonetic: 'chou-kran' }
          ]
        },
        {
          id: 'greetings_2',
          phrases: [
            { id: 'ma_greet_2_1', phrase: 'Nhar saeed', translation: 'Bonne journée', phonetic: 'nhar sa-eed' },
            { id: 'ma_greet_2_2', phrase: 'Lila saida', translation: 'Bonne nuit', phonetic: 'li-la sa-i-da' },
            { id: 'ma_greet_2_3', phrase: 'Bslama', translation: 'Au revoir', phonetic: 'bs-la-ma' },
            { id: 'ma_greet_2_4', phrase: '3afak', translation: 'S\'il vous plaît', phonetic: '3a-fak' }
          ]
        },
        {
          id: 'greetings_3',
          phrases: [
            { id: 'ma_greet_3_1', phrase: 'Smahli', translation: 'Excusez-moi', phonetic: 'smah-li' },
            { id: 'ma_greet_3_2', phrase: 'Mtassef', translation: 'Je suis désolé', phonetic: 'mta-ssef' },
            { id: 'ma_greet_3_3', phrase: 'Makayn mouchkil', translation: 'Pas de problème', phonetic: 'ma-kayn mou-chkil' },
            { id: 'ma_greet_3_4', phrase: 'Nchofak men ba3d', translation: 'À plus tard', phonetic: 'ncho-fak men ba3d' }
          ]
        },
        {
          id: 'greetings_4',
          phrases: [
            { id: 'ma_greet_4_1', phrase: 'Ach katdir?', translation: 'Que faites-vous ?', phonetic: 'ach kat-dir' },
            { id: 'ma_greet_4_2', phrase: 'Kolchi bikhir', translation: 'Tout va bien', phonetic: 'kol-chi bi-khir' },
            { id: 'ma_greet_4_3', phrase: '3andak lwaqt?', translation: 'Avez-vous le temps ?', phonetic: '3an-dak l-waqt' },
            { id: 'ma_greet_4_4', phrase: 'Bkol farha', translation: 'Avec plaisir', phonetic: 'b-kol far-ha' }
          ]
        }
      ]
    },
    {
      id: 'orientation',
      name: 'Orientation',
      exercises: [
        {
          id: 'orientation_1',
          phrases: [
            { id: 'ma_orient_1_1', phrase: 'Fin kayn?', translation: 'Où est-ce ?', phonetic: 'fin ka-yn' },
            { id: 'ma_orient_1_2', phrase: 'Limen', translation: 'À droite', phonetic: 'li-men' },
            { id: 'ma_orient_1_3', phrase: 'Lisar', translation: 'À gauche', phonetic: 'li-sar' },
            { id: 'ma_orient_1_4', phrase: 'Nit nit', translation: 'Tout droit', phonetic: 'nit nit' }
          ]
        },
        {
          id: 'orientation_2',
          phrases: [
            { id: 'ma_orient_2_1', phrase: 'B3id men hna', translation: 'Loin d\'ici', phonetic: 'b3id men h-na' },
            { id: 'ma_orient_2_2', phrase: 'Qrib men hna', translation: 'Près d\'ici', phonetic: 'qrib men h-na' },
            { id: 'ma_orient_2_3', phrase: 'F lwast', translation: 'Au centre', phonetic: 'f l-wast' },
            { id: 'ma_orient_2_4', phrase: 'F zawit triq', translation: 'Au coin de la rue', phonetic: 'f za-wit triq' }
          ]
        },
        {
          id: 'orientation_3',
          phrases: [
            { id: 'ma_orient_3_1', phrase: 'Khrita', translation: 'Carte', phonetic: 'khri-ta' },
            { id: 'ma_orient_3_2', phrase: '3onwan', translation: 'Adresse', phonetic: '3on-wan' },
            { id: 'ma_orient_3_3', phrase: 'Raqam dar', translation: 'Numéro de maison', phonetic: 'ra-qam dar' },
            { id: 'ma_orient_3_4', phrase: 'Ism triq', translation: 'Nom de rue', phonetic: 'ism triq' }
          ]
        },
        {
          id: 'orientation_4',
          phrases: [
            { id: 'ma_orient_4_1', phrase: 'Chal b3id?', translation: 'À quelle distance ?', phonetic: 'chal b3id' },
            { id: 'ma_orient_4_2', phrase: 'Khamsa dqayeq', translation: 'Cinq minutes', phonetic: 'kham-sa dqa-yeq' },
            { id: 'ma_orient_4_3', phrase: 'Machyan', translation: 'À pied', phonetic: 'mach-yan' },
            { id: 'ma_orient_4_4', phrase: 'B tonobil', translation: 'En voiture', phonetic: 'b to-no-bil' }
          ]
        }
      ]
    },
    {
      id: 'shopping',
      name: 'Shopping',
      exercises: [
        {
          id: 'shopping_1',
          phrases: [
            { id: 'ma_shop_1_1', phrase: 'Chal taman?', translation: 'Combien ça coûte ?', phonetic: 'chal ta-man' },
            { id: 'ma_shop_1_2', phrase: 'Ghali bzaf', translation: 'Très cher', phonetic: 'gha-li b-zaf' },
            { id: 'ma_shop_1_3', phrase: 'Kayn takhfid?', translation: 'Y a-t-il une réduction ?', phonetic: 'ka-yn takh-fid' },
            { id: 'ma_shop_1_4', phrase: 'Ghadi nchriha', translation: 'Je vais l\'acheter', phonetic: 'gha-di nchri-ha' }
          ]
        },
        {
          id: 'shopping_2',
          phrases: [
            { id: 'ma_shop_2_1', phrase: 'Taille', translation: 'Taille', phonetic: 'tail-le' },
            { id: 'ma_shop_2_2', phrase: 'Lon', translation: 'Couleur', phonetic: 'lon' },
            { id: 'ma_shop_2_3', phrase: 'Joda', translation: 'Qualité', phonetic: 'jo-da' },
            { id: 'ma_shop_2_4', phrase: 'Daman', translation: 'Garantie', phonetic: 'da-man' }
          ]
        },
        {
          id: 'shopping_3',
          phrases: [
            { id: 'ma_shop_3_1', phrase: 'Carte bancaire', translation: 'Carte de crédit', phonetic: 'car-te ban-cai-re' },
            { id: 'ma_shop_3_2', phrase: 'Flous cash', translation: 'Argent liquide', phonetic: 'flous cash' },
            { id: 'ma_shop_3_3', phrase: 'Facture', translation: 'Facture', phonetic: 'fac-tu-re' },
            { id: 'ma_shop_3_4', phrase: 'Radd flous', translation: 'Remboursement', phonetic: 'radd flous' }
          ]
        },
        {
          id: 'shopping_4',
          phrases: [
            { id: 'ma_shop_4_1', phrase: 'Hanut', translation: 'Magasin', phonetic: 'ha-nut' },
            { id: 'ma_shop_4_2', phrase: 'Souk', translation: 'Marché', phonetic: 'souk' },
            { id: 'ma_shop_4_3', phrase: 'Centre commercial', translation: 'Centre commercial', phonetic: 'cen-tre com-mer-cial' },
            { id: 'ma_shop_4_4', phrase: 'Bay3', translation: 'Vendeur', phonetic: 'bay3' }
          ]
        }
      ]
    },
    {
      id: 'transport',
      name: 'Transport',
      exercises: [
        {
          id: 'transport_1',
          phrases: [
            { id: 'ma_trans_1_1', phrase: 'Tobis', translation: 'Bus', phonetic: 'to-bis' },
            { id: 'ma_trans_1_2', phrase: 'Train', translation: 'Train', phonetic: 'train' },
            { id: 'ma_trans_1_3', phrase: 'Taxi', translation: 'Taxi', phonetic: 'ta-xi' },
            { id: 'ma_trans_1_4', phrase: 'Metro', translation: 'Métro', phonetic: 'me-tro' }
          ]
        },
        {
          id: 'transport_2',
          phrases: [
            { id: 'ma_trans_2_1', phrase: 'Ticket', translation: 'Billet', phonetic: 'tic-ket' },
            { id: 'ma_trans_2_2', phrase: 'Mahatta', translation: 'Station', phonetic: 'ma-hat-ta' },
            { id: 'ma_trans_2_3', phrase: 'Waqt', translation: 'Horaire', phonetic: 'waqt' },
            { id: 'ma_trans_2_4', phrase: 'Ta2khir', translation: 'Retard', phonetic: 'ta2-khir' }
          ]
        },
        {
          id: 'transport_3',
          phrases: [
            { id: 'ma_trans_3_1', phrase: 'Fin kayna mahatta?', translation: 'Où est la station ?', phonetic: 'fin kay-na ma-hat-ta' },
            { id: 'ma_trans_3_2', phrase: 'Chal taman ticket?', translation: 'Combien coûte le billet ?', phonetic: 'chal ta-man tic-ket' },
            { id: 'ma_trans_3_3', phrase: 'Imta ghadi?', translation: 'Quand part-il ?', phonetic: 'im-ta gha-di' },
            { id: 'ma_trans_3_4', phrase: 'Imta kaywsal?', translation: 'Quand arrive-t-il ?', phonetic: 'im-ta kay-wsal' }
          ]
        },
        {
          id: 'transport_4',
          phrases: [
            { id: 'ma_trans_4_1', phrase: 'Station jaya', translation: 'Prochain arrêt', phonetic: 'sta-tion ja-ya' },
            { id: 'ma_trans_4_2', phrase: 'Khallini hna', translation: 'Laissez-moi ici', phonetic: 'khal-li-ni h-na' },
            { id: 'ma_trans_4_3', phrase: 'Carte transport', translation: 'Carte de transport', phonetic: 'car-te trans-port' },
            { id: 'ma_trans_4_4', phrase: 'Quai', translation: 'Quai', phonetic: 'quai' }
          ]
        }
      ]
    },
    {
      id: 'health',
      name: 'Santé',
      exercises: [
        {
          id: 'health_1',
          phrases: [
            { id: 'ma_health_1_1', phrase: 'Kaywajaani rasi', translation: 'J\'ai mal à la tête', phonetic: 'kay-wa-ja-a-ni ra-si' },
            { id: 'ma_health_1_2', phrase: 'Kaywajaani karchi', translation: 'J\'ai mal au ventre', phonetic: 'kay-wa-ja-a-ni kar-chi' },
            { id: 'ma_health_1_3', phrase: '3andi skhana', translation: 'J\'ai de la fièvre', phonetic: '3an-di skha-na' },
            { id: 'ma_health_1_4', phrase: '3andi ko7la', translation: 'J\'ai une toux', phonetic: '3an-di ko7-la' }
          ]
        },
        {
          id: 'health_2',
          phrases: [
            { id: 'ma_health_2_1', phrase: 'Pharmacie', translation: 'Pharmacie', phonetic: 'phar-ma-cie' },
            { id: 'ma_health_2_2', phrase: 'Tbib', translation: 'Médecin', phonetic: 'tbib' },
            { id: 'ma_health_2_3', phrase: 'Sbitar', translation: 'Hôpital', phonetic: 'sbi-tar' },
            { id: 'ma_health_2_4', phrase: 'Ambulance', translation: 'Ambulance', phonetic: 'am-bu-lan-ce' }
          ]
        },
        {
          id: 'health_3',
          phrases: [
            { id: 'ma_health_3_1', phrase: 'Dwa', translation: 'Médicament', phonetic: 'dwa' },
            { id: 'ma_health_3_2', phrase: 'Ordonnance', translation: 'Ordonnance', phonetic: 'or-don-nan-ce' },
            { id: 'ma_health_3_3', phrase: 'Hassasiya', translation: 'Allergie', phonetic: 'has-sa-si-ya' },
            { id: 'ma_health_3_4', phrase: 'Waja3', translation: 'Douleur', phonetic: 'wa-ja3' }
          ]
        },
        {
          id: 'health_4',
          phrases: [
            { id: 'ma_health_4_1', phrase: 'Bghit mosa3ada', translation: 'J\'ai besoin d\'aide', phonetic: 'bghit mo-sa-3a-da' },
            { id: 'ma_health_4_2', phrase: 'Nadi 3la tbib', translation: 'Appelez le médecin', phonetic: 'na-di 3la tbib' },
            { id: 'ma_health_4_3', phrase: 'Hadi mosta3jala', translation: 'C\'est urgent', phonetic: 'ha-di mos-ta3-ja-la' },
            { id: 'ma_health_4_4', phrase: 'Ta2min saha', translation: 'Assurance santé', phonetic: 'ta2-min sa-ha' }
          ]
        }
      ]
    },
    {
      id: 'admin',
      name: 'Administration',
      exercises: [
        {
          id: 'admin_1',
          phrases: [
            { id: 'ma_admin_1_1', phrase: 'Watha2eq', translation: 'Documents', phonetic: 'wa-tha-2eq' },
            { id: 'ma_admin_1_2', phrase: 'Passeport', translation: 'Passeport', phonetic: 'pas-se-port' },
            { id: 'ma_admin_1_3', phrase: 'Visa', translation: 'Visa', phonetic: 'vi-sa' },
            { id: 'ma_admin_1_4', phrase: 'Carte séjour', translation: 'Permis de séjour', phonetic: 'car-te sé-jour' }
          ]
        },
        {
          id: 'admin_2',
          phrases: [
            { id: 'ma_admin_2_1', phrase: 'Commune', translation: 'Mairie', phonetic: 'com-mu-ne' },
            { id: 'ma_admin_2_2', phrase: 'Boliss', translation: 'Police', phonetic: 'bo-liss' },
            { id: 'ma_admin_2_3', phrase: 'Ambassade', translation: 'Ambassade', phonetic: 'am-bas-sa-de' },
            { id: 'ma_admin_2_4', phrase: 'Consulat', translation: 'Consulat', phonetic: 'con-su-lat' }
          ]
        },
        {
          id: 'admin_3',
          phrases: [
            { id: 'ma_admin_3_1', phrase: 'Formulaire', translation: 'Formulaire', phonetic: 'for-mu-lai-re' },
            { id: 'ma_admin_3_2', phrase: 'Imda', translation: 'Signature', phonetic: 'im-da' },
            { id: 'ma_admin_3_3', phrase: 'Photocopy', translation: 'Photocopie', phonetic: 'pho-to-co-py' },
            { id: 'ma_admin_3_4', phrase: 'Cachet rasmi', translation: 'Tampon officiel', phonetic: 'ca-chet ras-mi' }
          ]
        },
        {
          id: 'admin_4',
          phrases: [
            { id: 'ma_admin_4_1', phrase: 'Dariba', translation: 'Taxe', phonetic: 'da-ri-ba' },
            { id: 'ma_admin_4_2', phrase: 'Khlas', translation: 'Paiement', phonetic: 'khlas' },
            { id: 'ma_admin_4_3', phrase: 'Facture rasmiya', translation: 'Facture officielle', phonetic: 'fac-tu-re ras-mi-ya' },
            { id: 'ma_admin_4_4', phrase: 'Mudda', translation: 'Délai', phonetic: 'mud-da' }
          ]
        }
      ]
    },
    {
      id: 'restaurant',
      name: 'Restaurant',
      exercises: [
        {
          id: 'restaurant_1',
          phrases: [
            { id: 'ma_rest_1_1', phrase: 'Table li joj', translation: 'Table pour deux personnes', phonetic: 'ta-ble li joj' },
            { id: 'ma_rest_1_2', phrase: 'Menu 3afak', translation: 'Le menu s\'il vous plaît', phonetic: 'me-nu 3a-fak' },
            { id: 'ma_rest_1_3', phrase: 'Ach katansah?', translation: 'Que recommandez-vous ?', phonetic: 'ach ka-tan-sah' },
            { id: 'ma_rest_1_4', phrase: 'Ana végétarien', translation: 'Je suis végétarien', phonetic: 'a-na vé-gé-ta-rien' }
          ]
        },
        {
          id: 'restaurant_2',
          phrases: [
            { id: 'ma_rest_2_1', phrase: 'Atay', translation: 'Eau', phonetic: 'a-tay' },
            { id: 'ma_rest_2_2', phrase: 'Sharab', translation: 'Vin', phonetic: 'sha-rab' },
            { id: 'ma_rest_2_3', phrase: 'Birra', translation: 'Bière', phonetic: 'bir-ra' },
            { id: 'ma_rest_2_4', phrase: 'Qahwa', translation: 'Café', phonetic: 'qah-wa' }
          ]
        },
        {
          id: 'restaurant_3',
          phrases: [
            { id: 'ma_rest_3_1', phrase: 'L7am', translation: 'Viande', phonetic: 'l7am' },
            { id: 'ma_rest_3_2', phrase: '7out', translation: 'Poisson', phonetic: '7out' },
            { id: 'ma_rest_3_3', phrase: 'Salata', translation: 'Salade', phonetic: 'sa-la-ta' },
            { id: 'ma_rest_3_4', phrase: 'Dessert', translation: 'Dessert', phonetic: 'des-sert' }
          ]
        },
        {
          id: 'restaurant_4',
          phrases: [
            { id: 'ma_rest_4_1', phrase: 'L7sab 3afak', translation: 'L\'addition s\'il vous plaît', phonetic: 'l7sab 3a-fak' },
            { id: 'ma_rest_4_2', phrase: 'Bnin bzaf', translation: 'C\'est délicieux', phonetic: 'bnin b-zaf' },
            { id: 'ma_rest_4_3', phrase: 'Mal7 bzaf', translation: 'Très salé', phonetic: 'mal7 b-zaf' },
            { id: 'ma_rest_4_4', phrase: 'Pourboire', translation: 'Pourboire', phonetic: 'pour-boi-re' }
          ]
        }
      ]
    },
    {
      id: 'events',
      name: 'Événements',
      exercises: [
        {
          id: 'events_1',
          phrases: [
            { id: 'ma_event_1_1', phrase: 'Festival', translation: 'Festival', phonetic: 'fes-ti-val' },
            { id: 'ma_event_1_2', phrase: 'Concert', translation: 'Concert', phonetic: 'con-cert' },
            { id: 'ma_event_1_3', phrase: 'Masrah', translation: 'Théâtre', phonetic: 'mas-rah' },
            { id: 'ma_event_1_4', phrase: 'Cinema', translation: 'Cinéma', phonetic: 'ci-ne-ma' }
          ]
        },
        {
          id: 'events_2',
          phrases: [
            { id: 'ma_event_2_1', phrase: 'Ticket li spectacle', translation: 'Billet pour spectacle', phonetic: 'tic-ket li spec-ta-cle' },
            { id: 'ma_event_2_2', phrase: 'Imta kaybda?', translation: 'À quelle heure ça commence ?', phonetic: 'im-ta kay-bda' },
            { id: 'ma_event_2_3', phrase: 'Chal kaykhod waqt?', translation: 'Combien de temps ça dure ?', phonetic: 'chal kay-khod waqt' },
            { id: 'ma_event_2_4', phrase: 'Kayn pause?', translation: 'Y a-t-il un entracte ?', phonetic: 'ka-yn pau-se' }
          ]
        },
        {
          id: 'events_3',
          phrases: [
            { id: 'ma_event_3_1', phrase: 'Musée', translation: 'Musée', phonetic: 'mu-sé-e' },
            { id: 'ma_event_3_2', phrase: 'Galerie fann', translation: 'Galerie d\'art', phonetic: 'ga-le-rie fann' },
            { id: 'ma_event_3_3', phrase: 'Exposition', translation: 'Exposition', phonetic: 'ex-po-si-tion' },
            { id: 'ma_event_3_4', phrase: 'Guide', translation: 'Guide', phonetic: 'gui-de' }
          ]
        },
        {
          id: 'events_4',
          phrases: [
            { id: 'ma_event_4_1', phrase: 'Taqalid mahalliya', translation: 'Tradition locale', phonetic: 'ta-qa-lid ma-hal-li-ya' },
            { id: 'ma_event_4_2', phrase: '3id watani', translation: 'Fête nationale', phonetic: '3id wa-ta-ni' },
            { id: 'ma_event_4_3', phrase: 'Raqs taqalidi', translation: 'Danse traditionnelle', phonetic: 'raqs ta-qa-li-di' },
            { id: 'ma_event_4_4', phrase: 'Libas taqalidi', translation: 'Costume traditionnel', phonetic: 'li-bas ta-qa-li-di' }
          ]
        }
      ]
    }
  ]
};

// Données d'exercices pour l'Espagne
const spainExerciseData: CountryExerciseData = {
  country: 'espagne',
  themes: [
    {
      id: 'airport',
      name: 'Aéroport',
      exercises: [
        {
          id: 'airport_1',
          phrases: [
            { id: 'es_airport_1_1', phrase: 'Mi pasaporte está aquí', translation: 'Mon passeport est ici', phonetic: 'mi pa-sa-por-te es-tá a-quí' },
            { id: 'es_airport_1_2', phrase: 'Mi equipaje está perdido', translation: 'Mon bagage est perdu', phonetic: 'mi e-qui-pa-je es-tá per-di-do' },
            { id: 'es_airport_1_3', phrase: '¿Dónde está la aduana?', translation: 'Où est la douane ?', phonetic: 'dón-de es-tá la a-dua-na' },
            { id: 'es_airport_1_4', phrase: 'Mi vuelo está retrasado', translation: 'Mon vol est en retard', phonetic: 'mi vue-lo es-tá re-tra-sa-do' }
          ]
        },
        {
          id: 'airport_2',
          phrases: [
            { id: 'es_airport_2_1', phrase: '¿Dónde está mi billete?', translation: 'Où est mon billet ?', phonetic: 'dón-de es-tá mi bi-lle-te' },
            { id: 'es_airport_2_2', phrase: '¿Cuál es el número de puerta?', translation: 'Quel est le numéro de porte ?', phonetic: 'cuál es el nú-me-ro de puer-ta' },
            { id: 'es_airport_2_3', phrase: '¿Dónde está el check-in?', translation: 'Où est l\'enregistrement ?', phonetic: 'dón-de es-tá el check-in' },
            { id: 'es_airport_2_4', phrase: 'Control de seguridad', translation: 'Contrôle de sécurité', phonetic: 'con-trol de se-gu-ri-dad' }
          ]
        },
        {
          id: 'airport_3',
          phrases: [
            { id: 'es_airport_3_1', phrase: '¿Dónde está el duty free?', translation: 'Où est le duty free ?', phonetic: 'dón-de es-tá el duty free' },
            { id: 'es_airport_3_2', phrase: 'Sala de espera', translation: 'Salle d\'attente', phonetic: 'sa-la de es-pe-ra' },
            { id: 'es_airport_3_3', phrase: 'El vuelo está cancelado', translation: 'Le vol est annulé', phonetic: 'el vue-lo es-tá can-ce-la-do' },
            { id: 'es_airport_3_4', phrase: 'El embarque ha comenzado', translation: 'L\'embarquement a commencé', phonetic: 'el em-bar-que ha co-men-za-do' }
          ]
        },
        {
          id: 'airport_4',
          phrases: [
            { id: 'es_airport_4_1', phrase: 'Recogida de equipajes', translation: 'Récupération des bagages', phonetic: 're-co-gi-da de e-qui-pa-jes' },
            { id: 'es_airport_4_2', phrase: 'Puerta de salida', translation: 'Porte de sortie', phonetic: 'puer-ta de sa-li-da' },
            { id: 'es_airport_4_3', phrase: 'Parada de taxis', translation: 'Station de taxi', phonetic: 'pa-ra-da de ta-xis' },
            { id: 'es_airport_4_4', phrase: 'Terminal de autobuses', translation: 'Terminal de bus', phonetic: 'ter-mi-nal de au-to-bu-ses' }
          ]
        }
      ]
    },
    {
      id: 'accommodation',
      name: 'Hébergement',
      exercises: [
        {
          id: 'accommodation_1',
          phrases: [
            { id: 'es_hotel_1_1', phrase: 'Tengo una reserva', translation: 'J\'ai une réservation', phonetic: 'ten-go u-na re-ser-va' },
            { id: 'es_hotel_1_2', phrase: 'La llave de la habitación, por favor', translation: 'La clé de la chambre s\'il vous plaît', phonetic: 'la lla-ve de la ha-bi-ta-ción por fa-vor' },
            { id: 'es_hotel_1_3', phrase: '¿Está incluido el desayuno?', translation: 'Le petit-déjeuner est-il inclus ?', phonetic: 'es-tá in-clui-do el de-sa-yu-no' },
            { id: 'es_hotel_1_4', phrase: '¿Cuál es la contraseña del wifi?', translation: 'Quel est le mot de passe wifi ?', phonetic: 'cuál es la con-tra-se-ña del wi-fi' }
          ]
        },
        {
          id: 'accommodation_2',
          phrases: [
            { id: 'es_hotel_2_1', phrase: 'Servicio de limpieza', translation: 'Service de ménage', phonetic: 'ser-vi-cio de lim-pie-za' },
            { id: 'es_hotel_2_2', phrase: 'Cambio de toallas', translation: 'Changement de serviettes', phonetic: 'cam-bio de to-a-llas' },
            { id: 'es_hotel_2_3', phrase: 'El aire acondicionado no funciona', translation: 'La climatisation ne marche pas', phonetic: 'el ai-re a-con-di-cio-na-do no fun-cio-na' },
            { id: 'es_hotel_2_4', phrase: 'Cama extra', translation: 'Lit supplémentaire', phonetic: 'ca-ma ex-tra' }
          ]
        },
        {
          id: 'accommodation_3',
          phrases: [
            { id: 'es_hotel_3_1', phrase: 'Hora de check-out', translation: 'Heure de départ', phonetic: 'o-ra de check-out' },
            { id: 'es_hotel_3_2', phrase: 'Consigna de equipajes', translation: 'Consigne à bagages', phonetic: 'con-sig-na de e-qui-pa-jes' },
            { id: 'es_hotel_3_3', phrase: '¿Dónde está la recepción?', translation: 'Où est la réception ?', phonetic: 'dón-de es-tá la re-cep-ción' },
            { id: 'es_hotel_3_4', phrase: 'El ascensor está averiado', translation: 'L\'ascenseur est en panne', phonetic: 'el as-cen-sor es-tá a-ve-ria-do' }
          ]
        },
        {
          id: 'accommodation_4',
          phrases: [
            { id: 'es_hotel_4_1', phrase: 'Centro de spa', translation: 'Centre spa', phonetic: 'cen-tro de spa' },
            { id: 'es_hotel_4_2', phrase: 'Piscina', translation: 'Piscine', phonetic: 'pis-ci-na' },
            { id: 'es_hotel_4_3', phrase: 'Sala de fitness', translation: 'Salle de fitness', phonetic: 'sa-la de fit-ness' },
            { id: 'es_hotel_4_4', phrase: '¿Es gratuito el aparcamiento?', translation: 'Le parking est-il gratuit ?', phonetic: 'es gra-tui-to el a-par-ca-mien-to' }
          ]
        }
      ]
    },
    {
      id: 'greetings',
      name: 'Salutations',
      exercises: [
        {
          id: 'greetings_1',
          phrases: [
            { id: 'es_greet_1_1', phrase: 'Hola', translation: 'Bonjour', phonetic: 'o-la' },
            { id: 'es_greet_1_2', phrase: 'Buenos días', translation: 'Bon matin', phonetic: 'bue-nos dí-as' },
            { id: 'es_greet_1_3', phrase: '¿Cómo está?', translation: 'Comment allez-vous ?', phonetic: 'có-mo es-tá' },
            { id: 'es_greet_1_4', phrase: 'Gracias', translation: 'Merci', phonetic: 'gra-cias' }
          ]
        },
        {
          id: 'greetings_2',
          phrases: [
            { id: 'es_greet_2_1', phrase: 'Buenas tardes', translation: 'Bonne journée', phonetic: 'bue-nas tar-des' },
            { id: 'es_greet_2_2', phrase: 'Buenas noches', translation: 'Bonne nuit', phonetic: 'bue-nas no-ches' },
            { id: 'es_greet_2_3', phrase: 'Adiós', translation: 'Au revoir', phonetic: 'a-diós' },
            { id: 'es_greet_2_4', phrase: 'Por favor', translation: 'S\'il vous plaît', phonetic: 'por fa-vor' }
          ]
        },
        {
          id: 'greetings_3',
          phrases: [
            { id: 'es_greet_3_1', phrase: 'Disculpe', translation: 'Excusez-moi', phonetic: 'dis-cul-pe' },
            { id: 'es_greet_3_2', phrase: 'Lo siento', translation: 'Je suis désolé', phonetic: 'lo sien-to' },
            { id: 'es_greet_3_3', phrase: 'No hay problema', translation: 'Pas de problème', phonetic: 'no ay pro-ble-ma' },
            { id: 'es_greet_3_4', phrase: 'Hasta luego', translation: 'À plus tard', phonetic: 'as-ta lue-go' }
          ]
        },
        {
          id: 'greetings_4',
          phrases: [
            { id: 'es_greet_4_1', phrase: '¿Qué hace?', translation: 'Que faites-vous ?', phonetic: 'qué a-ce' },
            { id: 'es_greet_4_2', phrase: 'Todo bien', translation: 'Tout va bien', phonetic: 'to-do bien' },
            { id: 'es_greet_4_3', phrase: '¿Tiene tiempo?', translation: 'Avez-vous le temps ?', phonetic: 'tie-ne tiem-po' },
            { id: 'es_greet_4_4', phrase: 'Con mucho gusto', translation: 'Avec plaisir', phonetic: 'con mu-cho gus-to' }
          ]
        }
      ]
    },
    {
      id: 'orientation',
      name: 'Orientation',
      exercises: [
        {
          id: 'orientation_1',
          phrases: [
            { id: 'es_orient_1_1', phrase: '¿Dónde está?', translation: 'Où est-ce ?', phonetic: 'dón-de es-tá' },
            { id: 'es_orient_1_2', phrase: 'A la derecha', translation: 'À droite', phonetic: 'a la de-re-cha' },
            { id: 'es_orient_1_3', phrase: 'A la izquierda', translation: 'À gauche', phonetic: 'a la iz-quier-da' },
            { id: 'es_orient_1_4', phrase: 'Todo recto', translation: 'Tout droit', phonetic: 'to-do rec-to' }
          ]
        },
        {
          id: 'orientation_2',
          phrases: [
            { id: 'es_orient_2_1', phrase: 'Lejos de aquí', translation: 'Loin d\'ici', phonetic: 'le-jos de a-quí' },
            { id: 'es_orient_2_2', phrase: 'Cerca de aquí', translation: 'Près d\'ici', phonetic: 'cer-ca de a-quí' },
            { id: 'es_orient_2_3', phrase: 'En el centro', translation: 'Au centre', phonetic: 'en el cen-tro' },
            { id: 'es_orient_2_4', phrase: 'En la esquina', translation: 'Au coin de la rue', phonetic: 'en la es-qui-na' }
          ]
        },
        {
          id: 'orientation_3',
          phrases: [
            { id: 'es_orient_3_1', phrase: 'Mapa', translation: 'Carte', phonetic: 'ma-pa' },
            { id: 'es_orient_3_2', phrase: 'Dirección', translation: 'Adresse', phonetic: 'di-rec-ción' },
            { id: 'es_orient_3_3', phrase: 'Número de casa', translation: 'Numéro de maison', phonetic: 'nú-me-ro de ca-sa' },
            { id: 'es_orient_3_4', phrase: 'Nombre de calle', translation: 'Nom de rue', phonetic: 'nom-bre de ca-lle' }
          ]
        },
        {
          id: 'orientation_4',
          phrases: [
            { id: 'es_orient_4_1', phrase: '¿Qué tan lejos está?', translation: 'À quelle distance ?', phonetic: 'qué tan le-jos es-tá' },
            { id: 'es_orient_4_2', phrase: 'Cinco minutos', translation: 'Cinq minutes', phonetic: 'cin-co mi-nu-tos' },
            { id: 'es_orient_4_3', phrase: 'A pie', translation: 'À pied', phonetic: 'a pie' },
            { id: 'es_orient_4_4', phrase: 'En coche', translation: 'En voiture', phonetic: 'en co-che' }
          ]
        }
      ]
    },
    {
      id: 'shopping',
      name: 'Shopping',
      exercises: [
        {
          id: 'shopping_1',
          phrases: [
            { id: 'es_shop_1_1', phrase: '¿Cuánto cuesta?', translation: 'Combien ça coûte ?', phonetic: 'cuán-to cues-ta' },
            { id: 'es_shop_1_2', phrase: 'Muy caro', translation: 'Très cher', phonetic: 'muy ca-ro' },
            { id: 'es_shop_1_3', phrase: '¿Hay descuento?', translation: 'Y a-t-il une réduction ?', phonetic: 'ay des-cuen-to' },
            { id: 'es_shop_1_4', phrase: 'Lo voy a comprar', translation: 'Je vais l\'acheter', phonetic: 'lo voy a com-prar' }
          ]
        },
        {
          id: 'shopping_2',
          phrases: [
            { id: 'es_shop_2_1', phrase: 'Talla', translation: 'Taille', phonetic: 'ta-lla' },
            { id: 'es_shop_2_2', phrase: 'Color', translation: 'Couleur', phonetic: 'co-lor' },
            { id: 'es_shop_2_3', phrase: 'Calidad', translation: 'Qualité', phonetic: 'ca-li-dad' },
            { id: 'es_shop_2_4', phrase: 'Garantía', translation: 'Garantie', phonetic: 'ga-ran-tí-a' }
          ]
        },
        {
          id: 'shopping_3',
          phrases: [
            { id: 'es_shop_3_1', phrase: 'Tarjeta de crédito', translation: 'Carte de crédit', phonetic: 'tar-je-ta de cré-di-to' },
            { id: 'es_shop_3_2', phrase: 'Dinero en efectivo', translation: 'Argent liquide', phonetic: 'di-ne-ro en e-fec-ti-vo' },
            { id: 'es_shop_3_3', phrase: 'Factura', translation: 'Facture', phonetic: 'fac-tu-ra' },
            { id: 'es_shop_3_4', phrase: 'Reembolso', translation: 'Remboursement', phonetic: 're-em-bol-so' }
          ]
        },
        {
          id: 'shopping_4',
          phrases: [
            { id: 'es_shop_4_1', phrase: 'Tienda', translation: 'Magasin', phonetic: 'tien-da' },
            { id: 'es_shop_4_2', phrase: 'Mercado', translation: 'Marché', phonetic: 'mer-ca-do' },
            { id: 'es_shop_4_3', phrase: 'Centro comercial', translation: 'Centre commercial', phonetic: 'cen-tro co-mer-cial' },
            { id: 'es_shop_4_4', phrase: 'Vendedor', translation: 'Vendeur', phonetic: 'ven-de-dor' }
          ]
        }
      ]
    },
    {
      id: 'transport',
      name: 'Transport',
      exercises: [
        {
          id: 'transport_1',
          phrases: [
            { id: 'es_trans_1_1', phrase: 'Autobús', translation: 'Bus', phonetic: 'au-to-bús' },
            { id: 'es_trans_1_2', phrase: 'Tren', translation: 'Train', phonetic: 'tren' },
            { id: 'es_trans_1_3', phrase: 'Taxi', translation: 'Taxi', phonetic: 'ta-xi' },
            { id: 'es_trans_1_4', phrase: 'Metro', translation: 'Métro', phonetic: 'me-tro' }
          ]
        },
        {
          id: 'transport_2',
          phrases: [
            { id: 'es_trans_2_1', phrase: 'Billete', translation: 'Billet', phonetic: 'bi-lle-te' },
            { id: 'es_trans_2_2', phrase: 'Estación', translation: 'Station', phonetic: 'es-ta-ción' },
            { id: 'es_trans_2_3', phrase: 'Horario', translation: 'Horaire', phonetic: 'ho-ra-rio' },
            { id: 'es_trans_2_4', phrase: 'Retraso', translation: 'Retard', phonetic: 're-tra-so' }
          ]
        },
        {
          id: 'transport_3',
          phrases: [
            { id: 'es_trans_3_1', phrase: '¿Dónde está la estación?', translation: 'Où est la station ?', phonetic: 'dón-de es-tá la es-ta-ción' },
            { id: 'es_trans_3_2', phrase: '¿Cuánto cuesta el billete?', translation: 'Combien coûte le billet ?', phonetic: 'cuán-to cues-ta el bi-lle-te' },
            { id: 'es_trans_3_3', phrase: '¿Cuándo sale?', translation: 'Quand part-il ?', phonetic: 'cuán-do sa-le' },
            { id: 'es_trans_3_4', phrase: '¿Cuándo llega?', translation: 'Quand arrive-t-il ?', phonetic: 'cuán-do lle-ga' }
          ]
        },
        {
          id: 'transport_4',
          phrases: [
            { id: 'es_trans_4_1', phrase: 'Próxima parada', translation: 'Prochain arrêt', phonetic: 'pró-xi-ma pa-ra-da' },
            { id: 'es_trans_4_2', phrase: 'Déjeme aquí', translation: 'Laissez-moi ici', phonetic: 'dé-je-me a-quí' },
            { id: 'es_trans_4_3', phrase: 'Tarjeta de transporte', translation: 'Carte de transport', phonetic: 'tar-je-ta de trans-por-te' },
            { id: 'es_trans_4_4', phrase: 'Andén', translation: 'Quai', phonetic: 'an-dén' }
          ]
        }
      ]
    },
    {
      id: 'health',
      name: 'Santé',
      exercises: [
        {
          id: 'health_1',
          phrases: [
            { id: 'es_health_1_1', phrase: 'Me duele la cabeza', translation: 'J\'ai mal à la tête', phonetic: 'me due-le la ca-be-za' },
            { id: 'es_health_1_2', phrase: 'Me duele el estómago', translation: 'J\'ai mal au ventre', phonetic: 'me due-le el es-tó-ma-go' },
            { id: 'es_health_1_3', phrase: 'Tengo fiebre', translation: 'J\'ai de la fièvre', phonetic: 'ten-go fie-bre' },
            { id: 'es_health_1_4', phrase: 'Tengo tos', translation: 'J\'ai une toux', phonetic: 'ten-go tos' }
          ]
        },
        {
          id: 'health_2',
          phrases: [
            { id: 'es_health_2_1', phrase: 'Farmacia', translation: 'Pharmacie', phonetic: 'far-ma-cia' },
            { id: 'es_health_2_2', phrase: 'Médico', translation: 'Médecin', phonetic: 'mé-di-co' },
            { id: 'es_health_2_3', phrase: 'Hospital', translation: 'Hôpital', phonetic: 'hos-pi-tal' },
            { id: 'es_health_2_4', phrase: 'Ambulancia', translation: 'Ambulance', phonetic: 'am-bu-lan-cia' }
          ]
        },
        {
          id: 'health_3',
          phrases: [
            { id: 'es_health_3_1', phrase: 'Medicina', translation: 'Médicament', phonetic: 'me-di-ci-na' },
            { id: 'es_health_3_2', phrase: 'Receta', translation: 'Ordonnance', phonetic: 're-ce-ta' },
            { id: 'es_health_3_3', phrase: 'Alergia', translation: 'Allergie', phonetic: 'a-ler-gia' },
            { id: 'es_health_3_4', phrase: 'Dolor', translation: 'Douleur', phonetic: 'do-lor' }
          ]
        },
        {
          id: 'health_4',
          phrases: [
            { id: 'es_health_4_1', phrase: 'Necesito ayuda', translation: 'J\'ai besoin d\'aide', phonetic: 'ne-ce-si-to a-yu-da' },
            { id: 'es_health_4_2', phrase: 'Llame al médico', translation: 'Appelez le médecin', phonetic: 'lla-me al mé-di-co' },
            { id: 'es_health_4_3', phrase: 'Es urgente', translation: 'C\'est urgent', phonetic: 'es ur-gen-te' },
            { id: 'es_health_4_4', phrase: 'Seguro médico', translation: 'Assurance santé', phonetic: 'se-gu-ro mé-di-co' }
          ]
        }
      ]
    },
    {
      id: 'admin',
      name: 'Administration',
      exercises: [
        {
          id: 'admin_1',
          phrases: [
            { id: 'es_admin_1_1', phrase: 'Documentos', translation: 'Documents', phonetic: 'do-cu-men-tos' },
            { id: 'es_admin_1_2', phrase: 'Pasaporte', translation: 'Passeport', phonetic: 'pa-sa-por-te' },
            { id: 'es_admin_1_3', phrase: 'Visa', translation: 'Visa', phonetic: 'vi-sa' },
            { id: 'es_admin_1_4', phrase: 'Permiso de residencia', translation: 'Permis de séjour', phonetic: 'per-mi-so de re-si-den-cia' }
          ]
        },
        {
          id: 'admin_2',
          phrases: [
            { id: 'es_admin_2_1', phrase: 'Ayuntamiento', translation: 'Mairie', phonetic: 'a-yun-ta-mien-to' },
            { id: 'es_admin_2_2', phrase: 'Policía', translation: 'Police', phonetic: 'po-li-cí-a' },
            { id: 'es_admin_2_3', phrase: 'Embajada', translation: 'Ambassade', phonetic: 'em-ba-ja-da' },
            { id: 'es_admin_2_4', phrase: 'Consulado', translation: 'Consulat', phonetic: 'con-su-la-do' }
          ]
        },
        {
          id: 'admin_3',
          phrases: [
            { id: 'es_admin_3_1', phrase: 'Formulario', translation: 'Formulaire', phonetic: 'for-mu-la-rio' },
            { id: 'es_admin_3_2', phrase: 'Firma', translation: 'Signature', phonetic: 'fir-ma' },
            { id: 'es_admin_3_3', phrase: 'Fotocopia', translation: 'Photocopie', phonetic: 'fo-to-co-pia' },
            { id: 'es_admin_3_4', phrase: 'Sello oficial', translation: 'Tampon officiel', phonetic: 'se-llo o-fi-cial' }
          ]
        },
        {
          id: 'admin_4',
          phrases: [
            { id: 'es_admin_4_1', phrase: 'Tasa', translation: 'Taxe', phonetic: 'ta-sa' },
            { id: 'es_admin_4_2', phrase: 'Pago', translation: 'Paiement', phonetic: 'pa-go' },
            { id: 'es_admin_4_3', phrase: 'Factura oficial', translation: 'Facture officielle', phonetic: 'fac-tu-ra o-fi-cial' },
            { id: 'es_admin_4_4', phrase: 'Plazo', translation: 'Délai', phonetic: 'pla-zo' }
          ]
        }
      ]
    },
    {
      id: 'restaurant',
      name: 'Restaurant',
      exercises: [
        {
          id: 'restaurant_1',
          phrases: [
            { id: 'es_rest_1_1', phrase: 'Mesa para dos personas', translation: 'Table pour deux personnes', phonetic: 'me-sa pa-ra dos per-so-nas' },
            { id: 'es_rest_1_2', phrase: 'La carta, por favor', translation: 'Le menu s\'il vous plaît', phonetic: 'la car-ta por fa-vor' },
            { id: 'es_rest_1_3', phrase: '¿Qué recomienda?', translation: 'Que recommandez-vous ?', phonetic: 'qué re-co-mien-da' },
            { id: 'es_rest_1_4', phrase: 'Soy vegetariano', translation: 'Je suis végétarien', phonetic: 'soy ve-ge-ta-ria-no' }
          ]
        },
        {
          id: 'restaurant_2',
          phrases: [
            { id: 'es_rest_2_1', phrase: 'Agua', translation: 'Eau', phonetic: 'a-gua' },
            { id: 'es_rest_2_2', phrase: 'Vino', translation: 'Vin', phonetic: 'vi-no' },
            { id: 'es_rest_2_3', phrase: 'Cerveza', translation: 'Bière', phonetic: 'cer-ve-za' },
            { id: 'es_rest_2_4', phrase: 'Café', translation: 'Café', phonetic: 'ca-fé' }
          ]
        },
        {
          id: 'restaurant_3',
          phrases: [
            { id: 'es_rest_3_1', phrase: 'Carne', translation: 'Viande', phonetic: 'car-ne' },
            { id: 'es_rest_3_2', phrase: 'Pescado', translation: 'Poisson', phonetic: 'pes-ca-do' },
            { id: 'es_rest_3_3', phrase: 'Ensalada', translation: 'Salade', phonetic: 'en-sa-la-da' },
            { id: 'es_rest_3_4', phrase: 'Postre', translation: 'Dessert', phonetic: 'pos-tre' }
          ]
        },
        {
          id: 'restaurant_4',
          phrases: [
            { id: 'es_rest_4_1', phrase: 'La cuenta, por favor', translation: 'L\'addition s\'il vous plaît', phonetic: 'la cuen-ta por fa-vor' },
            { id: 'es_rest_4_2', phrase: 'Está delicioso', translation: 'C\'est délicieux', phonetic: 'es-tá de-li-cio-so' },
            { id: 'es_rest_4_3', phrase: 'Muy salado', translation: 'Très salé', phonetic: 'muy sa-la-do' },
            { id: 'es_rest_4_4', phrase: 'Propina', translation: 'Pourboire', phonetic: 'pro-pi-na' }
          ]
        }
      ]
    },
    {
      id: 'events',
      name: 'Événements',
      exercises: [
        {
          id: 'events_1',
          phrases: [
            { id: 'es_event_1_1', phrase: 'Festival', translation: 'Festival', phonetic: 'fes-ti-val' },
            { id: 'es_event_1_2', phrase: 'Concierto', translation: 'Concert', phonetic: 'con-cier-to' },
            { id: 'es_event_1_3', phrase: 'Teatro', translation: 'Théâtre', phonetic: 'te-a-tro' },
            { id: 'es_event_1_4', phrase: 'Cine', translation: 'Cinéma', phonetic: 'ci-ne' }
          ]
        },
        {
          id: 'events_2',
          phrases: [
            { id: 'es_event_2_1', phrase: 'Entrada para espectáculo', translation: 'Billet pour spectacle', phonetic: 'en-tra-da pa-ra es-pec-tá-cu-lo' },
            { id: 'es_event_2_2', phrase: '¿A qué hora empieza?', translation: 'À quelle heure ça commence ?', phonetic: 'a qué o-ra em-pie-za' },
            { id: 'es_event_2_3', phrase: '¿Cuánto dura?', translation: 'Combien de temps ça dure ?', phonetic: 'cuán-to du-ra' },
            { id: 'es_event_2_4', phrase: '¿Hay intermedio?', translation: 'Y a-t-il un entracte ?', phonetic: 'ay in-ter-me-dio' }
          ]
        },
        {
          id: 'events_3',
          phrases: [
            { id: 'es_event_3_1', phrase: 'Museo', translation: 'Musée', phonetic: 'mu-se-o' },
            { id: 'es_event_3_2', phrase: 'Galería de arte', translation: 'Galerie d\'art', phonetic: 'ga-le-rí-a de ar-te' },
            { id: 'es_event_3_3', phrase: 'Exposición', translation: 'Exposition', phonetic: 'ex-po-si-ción' },
            { id: 'es_event_3_4', phrase: 'Guía', translation: 'Guide', phonetic: 'guí-a' }
          ]
        },
        {
          id: 'events_4',
          phrases: [
            { id: 'es_event_4_1', phrase: 'Tradición local', translation: 'Tradition locale', phonetic: 'tra-di-ción lo-cal' },
            { id: 'es_event_4_2', phrase: 'Fiesta nacional', translation: 'Fête nationale', phonetic: 'fies-ta na-cio-nal' },
            { id: 'es_event_4_3', phrase: 'Baile tradicional', translation: 'Danse traditionnelle', phonetic: 'bai-le tra-di-cio-nal' },
            { id: 'es_event_4_4', phrase: 'Traje típico', translation: 'Costume traditionnel', phonetic: 'tra-je tí-pi-co' }
          ]
        }
      ]
    }
  ]
};

// Données d'exercices pour l'Italie
const italyExerciseData: CountryExerciseData = {
  country: 'italie',
  themes: [
    {
      id: 'airport',
      name: 'Aéroport',
      exercises: [
        {
          id: 'airport_1',
          phrases: [
            { id: 'it_airport_1_1', phrase: 'Il mio passaporto è qui', translation: 'Mon passeport est ici', phonetic: 'il mi-o pas-sa-por-to è qui' },
            { id: 'it_airport_1_2', phrase: 'Il mio bagaglio è perso', translation: 'Mon bagage est perdu', phonetic: 'il mi-o ba-ga-glio è per-so' },
            { id: 'it_airport_1_3', phrase: 'Dov\'è la dogana?', translation: 'Où est la douane ?', phonetic: 'do-v\'è la do-ga-na' },
            { id: 'it_airport_1_4', phrase: 'Il mio volo è in ritardo', translation: 'Mon vol est en retard', phonetic: 'il mi-o vo-lo è in ri-tar-do' }
          ]
        },
        {
          id: 'airport_2',
          phrases: [
            { id: 'it_airport_2_1', phrase: 'Dov\'è il mio biglietto?', translation: 'Où est mon billet ?', phonetic: 'do-v\'è il mi-o bi-gliet-to' },
            { id: 'it_airport_2_2', phrase: 'Qual è il numero del gate?', translation: 'Quel est le numéro de porte ?', phonetic: 'qual è il nu-me-ro del ga-te' },
            { id: 'it_airport_2_3', phrase: 'Dov\'è il check-in?', translation: 'Où est l\'enregistrement ?', phonetic: 'do-v\'è il check-in' },
            { id: 'it_airport_2_4', phrase: 'Controllo di sicurezza', translation: 'Contrôle de sécurité', phonetic: 'con-trol-lo di si-cu-rez-za' }
          ]
        },
        {
          id: 'airport_3',
          phrases: [
            { id: 'it_airport_3_1', phrase: 'Dov\'è il duty free?', translation: 'Où est le duty free ?', phonetic: 'do-v\'è il duty free' },
            { id: 'it_airport_3_2', phrase: 'Sala d\'attesa', translation: 'Salle d\'attente', phonetic: 'sa-la d\'at-te-sa' },
            { id: 'it_airport_3_3', phrase: 'Il volo è cancellato', translation: 'Le vol est annulé', phonetic: 'il vo-lo è can-cel-la-to' },
            { id: 'it_airport_3_4', phrase: 'L\'imbarco è iniziato', translation: 'L\'embarquement a commencé', phonetic: 'l\'im-bar-co è i-ni-zia-to' }
          ]
        },
        {
          id: 'airport_4',
          phrases: [
            { id: 'it_airport_4_1', phrase: 'Ritiro bagagli', translation: 'Récupération des bagages', phonetic: 'ri-ti-ro ba-ga-gli' },
            { id: 'it_airport_4_2', phrase: 'Porta d\'uscita', translation: 'Porte de sortie', phonetic: 'por-ta d\'u-sci-ta' },
            { id: 'it_airport_4_3', phrase: 'Stazione taxi', translation: 'Station de taxi', phonetic: 'sta-zio-ne ta-xi' },
            { id: 'it_airport_4_4', phrase: 'Terminal autobus', translation: 'Terminal de bus', phonetic: 'ter-mi-nal au-to-bus' }
          ]
        }
      ]
    },
    {
      id: 'accommodation',
      name: 'Hébergement',
      exercises: [
        {
          id: 'accommodation_1',
          phrases: [
            { id: 'it_hotel_1_1', phrase: 'Ho una prenotazione', translation: 'J\'ai une réservation', phonetic: 'ho u-na pre-no-ta-zio-ne' },
            { id: 'it_hotel_1_2', phrase: 'La chiave della camera, per favore', translation: 'La clé de la chambre s\'il vous plaît', phonetic: 'la chia-ve del-la ca-me-ra per fa-vo-re' },
            { id: 'it_hotel_1_3', phrase: 'È inclusa la colazione?', translation: 'Le petit-déjeuner est-il inclus ?', phonetic: 'è in-clu-sa la co-la-zio-ne' },
            { id: 'it_hotel_1_4', phrase: 'Qual è la password del wifi?', translation: 'Quel est le mot de passe wifi ?', phonetic: 'qual è la pass-word del wi-fi' }
          ]
        },
        {
          id: 'accommodation_2',
          phrases: [
            { id: 'it_hotel_2_1', phrase: 'Servizio di pulizia', translation: 'Service de ménage', phonetic: 'ser-vi-zio di pu-li-zia' },
            { id: 'it_hotel_2_2', phrase: 'Cambio asciugamani', translation: 'Changement de serviettes', phonetic: 'cam-bio a-sciu-ga-ma-ni' },
            { id: 'it_hotel_2_3', phrase: 'L\'aria condizionata non funziona', translation: 'La climatisation ne marche pas', phonetic: 'l\'a-ria con-di-zio-na-ta non fun-zio-na' },
            { id: 'it_hotel_2_4', phrase: 'Letto aggiuntivo', translation: 'Lit supplémentaire', phonetic: 'let-to ag-giun-ti-vo' }
          ]
        },
        {
          id: 'accommodation_3',
          phrases: [
            { id: 'it_hotel_3_1', phrase: 'Orario di check-out', translation: 'Heure de départ', phonetic: 'o-ra-rio di check-out' },
            { id: 'it_hotel_3_2', phrase: 'Deposito bagagli', translation: 'Consigne à bagages', phonetic: 'de-po-si-to ba-ga-gli' },
            { id: 'it_hotel_3_3', phrase: 'Dov\'è la reception?', translation: 'Où est la réception ?', phonetic: 'do-v\'è la re-cep-tion' },
            { id: 'it_hotel_3_4', phrase: 'L\'ascensore è guasto', translation: 'L\'ascenseur est en panne', phonetic: 'l\'a-scen-so-re è gua-sto' }
          ]
        },
        {
          id: 'accommodation_4',
          phrases: [
            { id: 'it_hotel_4_1', phrase: 'Centro spa', translation: 'Centre spa', phonetic: 'cen-tro spa' },
            { id: 'it_hotel_4_2', phrase: 'Piscina', translation: 'Piscine', phonetic: 'pi-sci-na' },
            { id: 'it_hotel_4_3', phrase: 'Sala fitness', translation: 'Salle de fitness', phonetic: 'sa-la fit-ness' },
            { id: 'it_hotel_4_4', phrase: 'Il parcheggio è gratuito?', translation: 'Le parking est-il gratuit ?', phonetic: 'il par-cheg-gio è gra-tui-to' }
          ]
        }
      ]
    },
    {
      id: 'greetings',
      name: 'Salutations',
      exercises: [
        {
          id: 'greetings_1',
          phrases: [
            { id: 'it_greet_1_1', phrase: 'Ciao', translation: 'Bonjour', phonetic: 'cha-o' },
            { id: 'it_greet_1_2', phrase: 'Buongiorno', translation: 'Bon matin', phonetic: 'buo-n-gior-no' },
            { id: 'it_greet_1_3', phrase: 'Come sta?', translation: 'Comment allez-vous ?', phonetic: 'co-me sta' },
            { id: 'it_greet_1_4', phrase: 'Grazie', translation: 'Merci', phonetic: 'gra-zie' }
          ]
        },
        {
          id: 'greetings_2',
          phrases: [
            { id: 'it_greet_2_1', phrase: 'Buon pomeriggio', translation: 'Bonne journée', phonetic: 'buo-n po-me-rig-gio' },
            { id: 'it_greet_2_2', phrase: 'Buonanotte', translation: 'Bonne nuit', phonetic: 'buo-na-not-te' },
            { id: 'it_greet_2_3', phrase: 'Arrivederci', translation: 'Au revoir', phonetic: 'ar-ri-ve-der-ci' },
            { id: 'it_greet_2_4', phrase: 'Per favore', translation: 'S\'il vous plaît', phonetic: 'per fa-vo-re' }
          ]
        },
        {
          id: 'greetings_3',
          phrases: [
            { id: 'it_greet_3_1', phrase: 'Mi scusi', translation: 'Excusez-moi', phonetic: 'mi scu-si' },
            { id: 'it_greet_3_2', phrase: 'Mi dispiace', translation: 'Je suis désolé', phonetic: 'mi dis-pia-ce' },
            { id: 'it_greet_3_3', phrase: 'Nessun problema', translation: 'Pas de problème', phonetic: 'nes-sun pro-ble-ma' },
            { id: 'it_greet_3_4', phrase: 'A dopo', translation: 'À plus tard', phonetic: 'a do-po' }
          ]
        },
        {
          id: 'greetings_4',
          phrases: [
            { id: 'it_greet_4_1', phrase: 'Cosa fa?', translation: 'Que faites-vous ?', phonetic: 'co-sa fa' },
            { id: 'it_greet_4_2', phrase: 'Tutto bene', translation: 'Tout va bien', phonetic: 'tut-to be-ne' },
            { id: 'it_greet_4_3', phrase: 'Ha tempo?', translation: 'Avez-vous le temps ?', phonetic: 'a tem-po' },
            { id: 'it_greet_4_4', phrase: 'Con piacere', translation: 'Avec plaisir', phonetic: 'con pia-ce-re' }
          ]
        }
      ]
    },
    {
      id: 'orientation',
      name: 'Orientation',
      exercises: [
        {
          id: 'orientation_1',
          phrases: [
            { id: 'it_orient_1_1', phrase: 'Dov\'è?', translation: 'Où est-ce ?', phonetic: 'do-v\'è' },
            { id: 'it_orient_1_2', phrase: 'A destra', translation: 'À droite', phonetic: 'a des-tra' },
            { id: 'it_orient_1_3', phrase: 'A sinistra', translation: 'À gauche', phonetic: 'a si-nis-tra' },
            { id: 'it_orient_1_4', phrase: 'Dritto', translation: 'Tout droit', phonetic: 'drit-to' }
          ]
        },
        {
          id: 'orientation_2',
          phrases: [
            { id: 'it_orient_2_1', phrase: 'Lontano da qui', translation: 'Loin d\'ici', phonetic: 'lon-ta-no da qui' },
            { id: 'it_orient_2_2', phrase: 'Vicino a qui', translation: 'Près d\'ici', phonetic: 'vi-ci-no a qui' },
            { id: 'it_orient_2_3', phrase: 'In centro', translation: 'Au centre', phonetic: 'in cen-tro' },
            { id: 'it_orient_2_4', phrase: 'All\'angolo', translation: 'Au coin de la rue', phonetic: 'al-l\'an-go-lo' }
          ]
        },
        {
          id: 'orientation_3',
          phrases: [
            { id: 'it_orient_3_1', phrase: 'Mappa', translation: 'Carte', phonetic: 'map-pa' },
            { id: 'it_orient_3_2', phrase: 'Indirizzo', translation: 'Adresse', phonetic: 'in-di-riz-zo' },
            { id: 'it_orient_3_3', phrase: 'Numero civico', translation: 'Numéro de maison', phonetic: 'nu-me-ro ci-vi-co' },
            { id: 'it_orient_3_4', phrase: 'Nome della strada', translation: 'Nom de rue', phonetic: 'no-me del-la stra-da' }
          ]
        },
        {
          id: 'orientation_4',
          phrases: [
            { id: 'it_orient_4_1', phrase: 'Quanto è lontano?', translation: 'À quelle distance ?', phonetic: 'quan-to è lon-ta-no' },
            { id: 'it_orient_4_2', phrase: 'Cinque minuti', translation: 'Cinq minutes', phonetic: 'cin-que mi-nu-ti' },
            { id: 'it_orient_4_3', phrase: 'A piedi', translation: 'À pied', phonetic: 'a pie-di' },
            { id: 'it_orient_4_4', phrase: 'In macchina', translation: 'En voiture', phonetic: 'in mac-chi-na' }
          ]
        }
      ]
    },
    {
      id: 'shopping',
      name: 'Shopping',
      exercises: [
        {
          id: 'shopping_1',
          phrases: [
            { id: 'it_shop_1_1', phrase: 'Quanto costa?', translation: 'Combien ça coûte ?', phonetic: 'quan-to cos-ta' },
            { id: 'it_shop_1_2', phrase: 'Molto caro', translation: 'Très cher', phonetic: 'mol-to ca-ro' },
            { id: 'it_shop_1_3', phrase: 'C\'è uno sconto?', translation: 'Y a-t-il une réduction ?', phonetic: 'c\'è u-no scon-to' },
            { id: 'it_shop_1_4', phrase: 'Lo comprerò', translation: 'Je vais l\'acheter', phonetic: 'lo com-pre-rò' }
          ]
        },
        {
          id: 'shopping_2',
          phrases: [
            { id: 'it_shop_2_1', phrase: 'Taglia', translation: 'Taille', phonetic: 'ta-glia' },
            { id: 'it_shop_2_2', phrase: 'Colore', translation: 'Couleur', phonetic: 'co-lo-re' },
            { id: 'it_shop_2_3', phrase: 'Qualità', translation: 'Qualité', phonetic: 'qua-li-tà' },
            { id: 'it_shop_2_4', phrase: 'Garanzia', translation: 'Garantie', phonetic: 'ga-ran-zi-a' }
          ]
        },
        {
          id: 'shopping_3',
          phrases: [
            { id: 'it_shop_3_1', phrase: 'Carta di credito', translation: 'Carte de crédit', phonetic: 'car-ta di cre-di-to' },
            { id: 'it_shop_3_2', phrase: 'Contanti', translation: 'Argent liquide', phonetic: 'con-tan-ti' },
            { id: 'it_shop_3_3', phrase: 'Fattura', translation: 'Facture', phonetic: 'fat-tu-ra' },
            { id: 'it_shop_3_4', phrase: 'Rimborso', translation: 'Remboursement', phonetic: 'rim-bor-so' }
          ]
        },
        {
          id: 'shopping_4',
          phrases: [
            { id: 'it_shop_4_1', phrase: 'Negozio', translation: 'Magasin', phonetic: 'ne-go-zio' },
            { id: 'it_shop_4_2', phrase: 'Mercato', translation: 'Marché', phonetic: 'mer-ca-to' },
            { id: 'it_shop_4_3', phrase: 'Centro commerciale', translation: 'Centre commercial', phonetic: 'cen-tro com-mer-cia-le' },
            { id: 'it_shop_4_4', phrase: 'Venditore', translation: 'Vendeur', phonetic: 'ven-di-to-re' }
          ]
        }
      ]
    },
    {
      id: 'transport',
      name: 'Transport',
      exercises: [
        {
          id: 'transport_1',
          phrases: [
            { id: 'it_trans_1_1', phrase: 'Autobus', translation: 'Bus', phonetic: 'au-to-bus' },
            { id: 'it_trans_1_2', phrase: 'Treno', translation: 'Train', phonetic: 'tre-no' },
            { id: 'it_trans_1_3', phrase: 'Taxi', translation: 'Taxi', phonetic: 'ta-xi' },
            { id: 'it_trans_1_4', phrase: 'Metro', translation: 'Métro', phonetic: 'me-tro' }
          ]
        },
        {
          id: 'transport_2',
          phrases: [
            { id: 'it_trans_2_1', phrase: 'Biglietto', translation: 'Billet', phonetic: 'bi-gliet-to' },
            { id: 'it_trans_2_2', phrase: 'Stazione', translation: 'Station', phonetic: 'sta-zio-ne' },
            { id: 'it_trans_2_3', phrase: 'Orario', translation: 'Horaire', phonetic: 'o-ra-rio' },
            { id: 'it_trans_2_4', phrase: 'Ritardo', translation: 'Retard', phonetic: 'ri-tar-do' }
          ]
        },
        {
          id: 'transport_3',
          phrases: [
            { id: 'it_trans_3_1', phrase: 'Dov\'è la stazione?', translation: 'Où est la station ?', phonetic: 'do-v\'è la sta-zio-ne' },
            { id: 'it_trans_3_2', phrase: 'Quanto costa il biglietto?', translation: 'Combien coûte le billet ?', phonetic: 'quan-to cos-ta il bi-gliet-to' },
            { id: 'it_trans_3_3', phrase: 'Quando parte?', translation: 'Quand part-il ?', phonetic: 'quan-do par-te' },
            { id: 'it_trans_3_4', phrase: 'Quando arriva?', translation: 'Quand arrive-t-il ?', phonetic: 'quan-do ar-ri-va' }
          ]
        },
        {
          id: 'transport_4',
          phrases: [
            { id: 'it_trans_4_1', phrase: 'Prossima fermata', translation: 'Prochain arrêt', phonetic: 'pros-si-ma fer-ma-ta' },
            { id: 'it_trans_4_2', phrase: 'Mi lasci qui', translation: 'Laissez-moi ici', phonetic: 'mi la-sci qui' },
            { id: 'it_trans_4_3', phrase: 'Tessera di trasporto', translation: 'Carte de transport', phonetic: 'tes-se-ra di tras-por-to' },
            { id: 'it_trans_4_4', phrase: 'Binario', translation: 'Quai', phonetic: 'bi-na-rio' }
          ]
        }
      ]
    },
    {
      id: 'health',
      name: 'Santé',
      exercises: [
        {
          id: 'health_1',
          phrases: [
            { id: 'it_health_1_1', phrase: 'Mi fa male la testa', translation: 'J\'ai mal à la tête', phonetic: 'mi fa ma-le la tes-ta' },
            { id: 'it_health_1_2', phrase: 'Mi fa male lo stomaco', translation: 'J\'ai mal au ventre', phonetic: 'mi fa ma-le lo sto-ma-co' },
            { id: 'it_health_1_3', phrase: 'Ho la febbre', translation: 'J\'ai de la fièvre', phonetic: 'o la feb-bre' },
            { id: 'it_health_1_4', phrase: 'Ho la tosse', translation: 'J\'ai une toux', phonetic: 'o la tos-se' }
          ]
        },
        {
          id: 'health_2',
          phrases: [
            { id: 'it_health_2_1', phrase: 'Farmacia', translation: 'Pharmacie', phonetic: 'far-ma-cia' },
            { id: 'it_health_2_2', phrase: 'Medico', translation: 'Médecin', phonetic: 'me-di-co' },
            { id: 'it_health_2_3', phrase: 'Ospedale', translation: 'Hôpital', phonetic: 'os-pe-da-le' },
            { id: 'it_health_2_4', phrase: 'Ambulanza', translation: 'Ambulance', phonetic: 'am-bu-lan-za' }
          ]
        },
        {
          id: 'health_3',
          phrases: [
            { id: 'it_health_3_1', phrase: 'Medicina', translation: 'Médicament', phonetic: 'me-di-ci-na' },
            { id: 'it_health_3_2', phrase: 'Ricetta', translation: 'Ordonnance', phonetic: 'ri-cet-ta' },
            { id: 'it_health_3_3', phrase: 'Allergia', translation: 'Allergie', phonetic: 'al-ler-gia' },
            { id: 'it_health_3_4', phrase: 'Dolore', translation: 'Douleur', phonetic: 'do-lo-re' }
          ]
        },
        {
          id: 'health_4',
          phrases: [
            { id: 'it_health_4_1', phrase: 'Ho bisogno di aiuto', translation: 'J\'ai besoin d\'aide', phonetic: 'o bi-so-gno di a-iu-to' },
            { id: 'it_health_4_2', phrase: 'Chiami il medico', translation: 'Appelez le médecin', phonetic: 'chia-mi il me-di-co' },
            { id: 'it_health_4_3', phrase: 'È urgente', translation: 'C\'est urgent', phonetic: 'è ur-gen-te' },
            { id: 'it_health_4_4', phrase: 'Assicurazione sanitaria', translation: 'Assurance santé', phonetic: 'as-si-cu-ra-zio-ne sa-ni-ta-ria' }
          ]
        }
      ]
    },
    {
      id: 'admin',
      name: 'Administration',
      exercises: [
        {
          id: 'admin_1',
          phrases: [
            { id: 'it_admin_1_1', phrase: 'Documenti', translation: 'Documents', phonetic: 'do-cu-men-ti' },
            { id: 'it_admin_1_2', phrase: 'Passaporto', translation: 'Passeport', phonetic: 'pas-sa-por-to' },
            { id: 'it_admin_1_3', phrase: 'Visto', translation: 'Visa', phonetic: 'vis-to' },
            { id: 'it_admin_1_4', phrase: 'Permesso di soggiorno', translation: 'Permis de séjour', phonetic: 'per-mes-so di sog-gior-no' }
          ]
        },
        {
          id: 'admin_2',
          phrases: [
            { id: 'it_admin_2_1', phrase: 'Comune', translation: 'Mairie', phonetic: 'co-mu-ne' },
            { id: 'it_admin_2_2', phrase: 'Polizia', translation: 'Police', phonetic: 'po-li-zia' },
            { id: 'it_admin_2_3', phrase: 'Ambasciata', translation: 'Ambassade', phonetic: 'am-ba-scia-ta' },
            { id: 'it_admin_2_4', phrase: 'Consolato', translation: 'Consulat', phonetic: 'con-so-la-to' }
          ]
        },
        {
          id: 'admin_3',
          phrases: [
            { id: 'it_admin_3_1', phrase: 'Modulo', translation: 'Formulaire', phonetic: 'mo-du-lo' },
            { id: 'it_admin_3_2', phrase: 'Firma', translation: 'Signature', phonetic: 'fir-ma' },
            { id: 'it_admin_3_3', phrase: 'Fotocopia', translation: 'Photocopie', phonetic: 'fo-to-co-pia' },
            { id: 'it_admin_3_4', phrase: 'Timbro ufficiale', translation: 'Tampon officiel', phonetic: 'tim-bro uf-fi-cia-le' }
          ]
        },
        {
          id: 'admin_4',
          phrases: [
            { id: 'it_admin_4_1', phrase: 'Tassa', translation: 'Taxe', phonetic: 'tas-sa' },
            { id: 'it_admin_4_2', phrase: 'Pagamento', translation: 'Paiement', phonetic: 'pa-ga-men-to' },
            { id: 'it_admin_4_3', phrase: 'Fattura ufficiale', translation: 'Facture officielle', phonetic: 'fat-tu-ra uf-fi-cia-le' },
            { id: 'it_admin_4_4', phrase: 'Scadenza', translation: 'Délai', phonetic: 'sca-den-za' }
          ]
        }
      ]
    },
    {
      id: 'restaurant',
      name: 'Restaurant',
      exercises: [
        {
          id: 'restaurant_1',
          phrases: [
            { id: 'it_rest_1_1', phrase: 'Tavolo per due persone', translation: 'Table pour deux personnes', phonetic: 'ta-vo-lo per due per-so-ne' },
            { id: 'it_rest_1_2', phrase: 'Il menu, per favore', translation: 'Le menu s\'il vous plaît', phonetic: 'il me-nu per fa-vo-re' },
            { id: 'it_rest_1_3', phrase: 'Cosa consiglia?', translation: 'Que recommandez-vous ?', phonetic: 'co-sa con-si-glia' },
            { id: 'it_rest_1_4', phrase: 'Sono vegetariano', translation: 'Je suis végétarien', phonetic: 'so-no ve-ge-ta-ria-no' }
          ]
        },
        {
          id: 'restaurant_2',
          phrases: [
            { id: 'it_rest_2_1', phrase: 'Acqua', translation: 'Eau', phonetic: 'ac-qua' },
            { id: 'it_rest_2_2', phrase: 'Vino', translation: 'Vin', phonetic: 'vi-no' },
            { id: 'it_rest_2_3', phrase: 'Birra', translation: 'Bière', phonetic: 'bir-ra' },
            { id: 'it_rest_2_4', phrase: 'Caffè', translation: 'Café', phonetic: 'caf-fè' }
          ]
        },
        {
          id: 'restaurant_3',
          phrases: [
            { id: 'it_rest_3_1', phrase: 'Carne', translation: 'Viande', phonetic: 'car-ne' },
            { id: 'it_rest_3_2', phrase: 'Pesce', translation: 'Poisson', phonetic: 'pe-sce' },
            { id: 'it_rest_3_3', phrase: 'Insalata', translation: 'Salade', phonetic: 'in-sa-la-ta' },
            { id: 'it_rest_3_4', phrase: 'Dolce', translation: 'Dessert', phonetic: 'dol-ce' }
          ]
        },
        {
          id: 'restaurant_4',
          phrases: [
            { id: 'it_rest_4_1', phrase: 'Il conto, per favore', translation: 'L\'addition s\'il vous plaît', phonetic: 'il con-to per fa-vo-re' },
            { id: 'it_rest_4_2', phrase: 'È delizioso', translation: 'C\'est délicieux', phonetic: 'è de-li-zio-so' },
            { id: 'it_rest_4_3', phrase: 'Molto salato', translation: 'Très salé', phonetic: 'mol-to sa-la-to' },
            { id: 'it_rest_4_4', phrase: 'Mancia', translation: 'Pourboire', phonetic: 'man-cia' }
          ]
        }
      ]
    },
    {
      id: 'events',
      name: 'Événements',
      exercises: [
        {
          id: 'events_1',
          phrases: [
            { id: 'it_event_1_1', phrase: 'Festival', translation: 'Festival', phonetic: 'fes-ti-val' },
            { id: 'it_event_1_2', phrase: 'Concerto', translation: 'Concert', phonetic: 'con-cer-to' },
            { id: 'it_event_1_3', phrase: 'Teatro', translation: 'Théâtre', phonetic: 'te-a-tro' },
            { id: 'it_event_1_4', phrase: 'Cinema', translation: 'Cinéma', phonetic: 'ci-ne-ma' }
          ]
        },
        {
          id: 'events_2',
          phrases: [
            { id: 'it_event_2_1', phrase: 'Biglietto per spettacolo', translation: 'Billet pour spectacle', phonetic: 'bi-gliet-to per spet-ta-co-lo' },
            { id: 'it_event_2_2', phrase: 'A che ora inizia?', translation: 'À quelle heure ça commence ?', phonetic: 'a che o-ra i-ni-zia' },
            { id: 'it_event_2_3', phrase: 'Quanto dura?', translation: 'Combien de temps ça dure ?', phonetic: 'quan-to du-ra' },
            { id: 'it_event_2_4', phrase: 'C\'è un intervallo?', translation: 'Y a-t-il un entracte ?', phonetic: 'c\'è un in-ter-val-lo' }
          ]
        },
        {
          id: 'events_3',
          phrases: [
            { id: 'it_event_3_1', phrase: 'Museo', translation: 'Musée', phonetic: 'mu-se-o' },
            { id: 'it_event_3_2', phrase: 'Galleria d\'arte', translation: 'Galerie d\'art', phonetic: 'gal-le-ria d\'ar-te' },
            { id: 'it_event_3_3', phrase: 'Mostra', translation: 'Exposition', phonetic: 'mos-tra' },
            { id: 'it_event_3_4', phrase: 'Guida', translation: 'Guide', phonetic: 'gui-da' }
          ]
        },
        {
          id: 'events_4',
          phrases: [
            { id: 'it_event_4_1', phrase: 'Tradizione locale', translation: 'Tradition locale', phonetic: 'tra-di-zio-ne lo-ca-le' },
            { id: 'it_event_4_2', phrase: 'Festa nazionale', translation: 'Fête nationale', phonetic: 'fes-ta na-zio-na-le' },
            { id: 'it_event_4_3', phrase: 'Ballo tradizionale', translation: 'Danse traditionnelle', phonetic: 'bal-lo tra-di-zio-na-le' },
            { id: 'it_event_4_4', phrase: 'Costume tradizionale', translation: 'Costume traditionnel', phonetic: 'cos-tu-me tra-di-zio-na-le' }
          ]
        }
      ]
    }
  ]
};

export function getCountryExerciseData(country: string): CountryExerciseData | null {
  switch (country.toLowerCase()) {
    case 'turquie':
      return turkeyExerciseData;
    case 'albanie':
      return albaniaExerciseData;
    case 'maroc':
      return moroccoExerciseData;
    case 'espagne':
      return spainExerciseData;
    case 'italie':
      return italyExerciseData;
    default:
      return null;
  }
}

export function getExercisePhrases(country: string, themeId: string, exerciseIndex?: number): ExercisePhrase[] | null {
  const countryData = getCountryExerciseData(country);
  if (!countryData) return null;
  
  const theme = countryData.themes.find(t => t.id === themeId);
  if (!theme) return null;
  
  // Si aucun index spécifié, retourner un exercice aléatoire
  const index = exerciseIndex !== undefined ? exerciseIndex : Math.floor(Math.random() * theme.exercises.length);
  const exercise = theme.exercises[index];
  
  return exercise ? exercise.phrases : null;
}

export function getThemeExerciseCount(country: string, themeId: string): number {
  const countryData = getCountryExerciseData(country);
  if (!countryData) return 0;
  
  const theme = countryData.themes.find(t => t.id === themeId);
  return theme ? theme.exercises.length : 0;
}
