// Système de tracking de progression dynamique

export interface ActivityProgress {
  country: string;
  module: 'language' | 'culture';
  activityType: 'quiz' | 'exercise' | 'cultural-lesson';
  category: string;
  score: number;
  completed: boolean;
  timestamp: number;
}

export interface CountryProgress {
  name: string;
  flag: string;
  language: {
    quizzes: { completed: number; total: number; scores: number[] };
    exercises: { completed: number; total: number; scores: number[] };
  };
  culture: {
    lessons: { completed: number; total: number; scores: number[] };
  };
  overallProgress: number;
  firstPlayed: number;
}

// Sauvegarder une activité terminée
export function saveActivityProgress(activity: ActivityProgress) {
  const activities = getStoredActivities();
  activities.push(activity);
  localStorage.setItem('mufeed_activities', JSON.stringify(activities));
  
  // Recalculer la progression des pays
  updateCountryProgress();
}

// Récupérer toutes les activités stockées
export function getStoredActivities(): ActivityProgress[] {
  if (typeof window === 'undefined') return [];
  const stored = localStorage.getItem('mufeed_activities');
  return stored ? JSON.parse(stored) : [];
}

// Récupérer la progression des pays
export function getCountriesProgress(): CountryProgress[] {
  if (typeof window === 'undefined') return [];
  const stored = localStorage.getItem('mufeed_countries_progress');
  return stored ? JSON.parse(stored) : [];
}

// Mettre à jour la progression d'un pays
function updateCountryProgress() {
  const activities = getStoredActivities();
  const countriesMap = new Map<string, CountryProgress>();

  // Mapper les noms de drapeaux
  const flagMap: { [key: string]: string } = {
    'Maroc': 'Morocco.png',
    'Espagne': 'Spain.png',
    'Turquie': 'Turkey.png',
    'Albanie': 'Albaniapng.png',
    'Italie': 'Italy.png',
    'France': 'France.png',
    'Allemagne': 'Germany.png',
    'Royaume-Uni': 'UK.png',
    'États-Unis': 'USA.png',
    'Japon': 'Japan.png',
    'Chine': 'China.png'
  };

  // Grouper les activités par pays
  activities.forEach(activity => {
    if (!countriesMap.has(activity.country)) {
      countriesMap.set(activity.country, {
        name: activity.country,
        flag: flagMap[activity.country] || 'default.png',
        language: {
          quizzes: { completed: 0, total: 12, scores: [] },
          exercises: { completed: 0, total: 10, scores: [] }
        },
        culture: {
          lessons: { completed: 0, total: 6, scores: [] }
        },
        overallProgress: 0,
        firstPlayed: activity.timestamp
      });
    }

    const country = countriesMap.get(activity.country)!;
    
    // Mettre à jour selon le type d'activité
    if (activity.module === 'language') {
      if (activity.activityType === 'quiz') {
        country.language.quizzes.completed++;
        country.language.quizzes.scores.push(activity.score);
      } else if (activity.activityType === 'exercise') {
        country.language.exercises.completed++;
        country.language.exercises.scores.push(activity.score);
      }
    } else if (activity.module === 'culture') {
      country.culture.lessons.completed++;
      country.culture.lessons.scores.push(activity.score);
    }

    // Garder le timestamp le plus ancien
    if (activity.timestamp < country.firstPlayed) {
      country.firstPlayed = activity.timestamp;
    }
  });

  // Calculer la progression globale pour chaque pays
  const countriesProgress = Array.from(countriesMap.values()).map(country => {
    const totalCompleted = country.language.quizzes.completed + 
                          country.language.exercises.completed + 
                          country.culture.lessons.completed;
    const totalPossible = country.language.quizzes.total + 
                         country.language.exercises.total + 
                         country.culture.lessons.total;
    
    country.overallProgress = Math.round((totalCompleted / totalPossible) * 100);
    return country;
  });

  // Trier par date de première activité (plus récent en premier)
  countriesProgress.sort((a, b) => b.firstPlayed - a.firstPlayed);

  localStorage.setItem('mufeed_countries_progress', JSON.stringify(countriesProgress));
}

// Calculer le score moyen d'un tableau de scores
export function calculateAverageScore(scores: number[]): number {
  if (scores.length === 0) return 0;
  return Math.round(scores.reduce((sum, score) => sum + score, 0) / scores.length);
}

// Réinitialiser toute la progression
export function resetAllProgress() {
  localStorage.removeItem('mufeed_activities');
  localStorage.removeItem('mufeed_countries_progress');
}
