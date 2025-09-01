// Générateur de méthode mixte - mélange quiz, exercices et thèmes

import { ExercisePhrase } from './exercise-data-server';

export interface MixedActivity {
  id: string;
  type: 'quiz' | 'exercise' | 'listening';
  theme: string;
  themeName: string;
  data: ExercisePhrase[];
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface MixedSession {
  id: string;
  activities: MixedActivity[];
  totalActivities: number;
  estimatedDuration: number; // en minutes
}

// Données des thèmes disponibles par pays
const THEME_WEIGHTS = {
  // Thèmes essentiels (plus de chances d'apparaître)
  essential: ['greetings', 'orientation', 'transport', 'accommodation'],
  // Thèmes utiles
  useful: ['restaurant', 'shopping', 'health', 'airport'],
  // Thèmes spécialisés
  specialized: ['admin', 'events']
};

export class MixedMethodGenerator {
  private country: string;
  private allThemes: string[];
  private usedActivities: Set<string> = new Set();

  constructor(country: string) {
    this.country = country;
    this.allThemes = [
      ...THEME_WEIGHTS.essential,
      ...THEME_WEIGHTS.useful,
      ...THEME_WEIGHTS.specialized
    ];
  }

  /**
   * Génère une session mixte avec un mélange équilibré d'activités
   */
  generateMixedSession(sessionLength: number = 10): MixedSession {
    const activities: MixedActivity[] = [];
    const sessionId = `mixed-${Date.now()}`;

    // Répartition des types d'activités
    const activityTypes = this.generateActivityTypeDistribution(sessionLength);
    
    // Sélection des thèmes avec pondération
    const selectedThemes = this.selectThemesWithWeighting(sessionLength);

    for (let i = 0; i < sessionLength; i++) {
      const activityType = activityTypes[i];
      const theme = selectedThemes[i % selectedThemes.length];
      
      const activity = this.createActivity(
        `${sessionId}-${i}`,
        activityType,
        theme,
        this.calculateDifficulty(i, sessionLength)
      );

      if (activity) {
        activities.push(activity);
      }
    }

    // Mélanger les activités pour éviter les patterns prévisibles
    const shuffledActivities = this.shuffleActivities(activities);

    return {
      id: sessionId,
      activities: shuffledActivities,
      totalActivities: shuffledActivities.length,
      estimatedDuration: this.calculateEstimatedDuration(shuffledActivities)
    };
  }

  /**
   * Génère la distribution des types d'activités
   */
  private generateActivityTypeDistribution(length: number): ('quiz' | 'exercise' | 'listening')[] {
    const types: ('quiz' | 'exercise' | 'listening')[] = [];
    
    // Répartition équilibrée : 40% quiz, 40% exercices, 20% écoute
    const quizCount = Math.floor(length * 0.4);
    const exerciseCount = Math.floor(length * 0.4);
    const listeningCount = length - quizCount - exerciseCount;

    // Ajouter les types
    for (let i = 0; i < quizCount; i++) types.push('quiz');
    for (let i = 0; i < exerciseCount; i++) types.push('exercise');
    for (let i = 0; i < listeningCount; i++) types.push('listening');

    // Mélanger
    return this.shuffleArray(types);
  }

  /**
   * Sélectionne les thèmes avec pondération
   */
  private selectThemesWithWeighting(sessionLength: number): string[] {
    const themes: string[] = [];
    const themePool: string[] = [];

    // Créer un pool pondéré
    THEME_WEIGHTS.essential.forEach(theme => {
      for (let i = 0; i < 3; i++) themePool.push(theme); // 3x plus de chances
    });
    THEME_WEIGHTS.useful.forEach(theme => {
      for (let i = 0; i < 2; i++) themePool.push(theme); // 2x plus de chances
    });
    THEME_WEIGHTS.specialized.forEach(theme => {
      themePool.push(theme); // 1x chance normale
    });

    // Sélectionner des thèmes uniques d'abord
    const uniqueThemes = [...new Set(themePool)];
    const selectedUniqueThemes = this.shuffleArray(uniqueThemes).slice(0, Math.min(sessionLength, uniqueThemes.length));

    // Compléter avec des répétitions si nécessaire
    while (themes.length < sessionLength) {
      themes.push(...selectedUniqueThemes);
    }

    return themes.slice(0, sessionLength);
  }

  /**
   * Crée une activité spécifique
   */
  private createActivity(
    id: string,
    type: 'quiz' | 'exercise' | 'listening',
    theme: string,
    difficulty: 'easy' | 'medium' | 'hard'
  ): MixedActivity | null {
    // Simuler la récupération des données (à connecter avec les vraies données)
    const mockData = this.getMockDataForTheme(theme, difficulty);
    
    if (!mockData.length) return null;

    return {
      id,
      type,
      theme,
      themeName: this.getThemeName(theme),
      data: mockData,
      difficulty
    };
  }

  /**
   * Calcule la difficulté basée sur la progression
   */
  private calculateDifficulty(index: number, total: number): 'easy' | 'medium' | 'hard' {
    const progress = index / total;
    
    if (progress < 0.3) return 'easy';
    if (progress < 0.7) return 'medium';
    return 'hard';
  }

  /**
   * Mélange les activités de manière intelligente
   */
  private shuffleActivities(activities: MixedActivity[]): MixedActivity[] {
    const shuffled = [...activities];
    
    // Éviter d'avoir le même type d'activité consécutivement
    for (let i = 0; i < shuffled.length - 1; i++) {
      if (shuffled[i].type === shuffled[i + 1].type) {
        // Chercher une activité différente à échanger
        for (let j = i + 2; j < shuffled.length; j++) {
          if (shuffled[j].type !== shuffled[i].type) {
            [shuffled[i + 1], shuffled[j]] = [shuffled[j], shuffled[i + 1]];
            break;
          }
        }
      }
    }

    return shuffled;
  }

  /**
   * Calcule la durée estimée de la session
   */
  private calculateEstimatedDuration(activities: MixedActivity[]): number {
    return activities.reduce((total, activity) => {
      switch (activity.type) {
        case 'quiz': return total + 2; // 2 minutes par quiz
        case 'exercise': return total + 4; // 4 minutes par exercice
        case 'listening': return total + 3; // 3 minutes par écoute
        default: return total + 3;
      }
    }, 0);
  }

  /**
   * Utilitaire pour mélanger un tableau
   */
  private shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  /**
   * Récupère le nom du thème en français
   */
  private getThemeName(theme: string): string {
    const themeNames: { [key: string]: string } = {
      greetings: 'Salutations',
      orientation: 'Orientation',
      transport: 'Transport',
      accommodation: 'Hébergement',
      restaurant: 'Restaurant',
      shopping: 'Shopping',
      health: 'Santé',
      airport: 'Aéroport',
      admin: 'Administration',
      events: 'Événements'
    };
    return themeNames[theme] || theme;
  }

  /**
   * Données mock (à remplacer par les vraies données)
   */
  private getMockDataForTheme(theme: string, difficulty: 'easy' | 'medium' | 'hard'): ExercisePhrase[] {
    // Retourner des données mock pour le moment
    return [
      {
        id: `${theme}_${difficulty}_1`,
        phrase: `Phrase ${theme} ${difficulty} 1`,
        translation: `Traduction ${theme} ${difficulty} 1`,
        phonetic: 'phonetic-mock'
      },
      {
        id: `${theme}_${difficulty}_2`,
        phrase: `Phrase ${theme} ${difficulty} 2`,
        translation: `Traduction ${theme} ${difficulty} 2`,
        phonetic: 'phonetic-mock'
      }
    ];
  }
}
