import { NextRequest, NextResponse } from 'next/server';
import { getCountryExerciseData, getExercisePhrases, getThemeExerciseCount } from '@/lib/exercise-data-server';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const country = searchParams.get('country');
    const theme = searchParams.get('theme');
    const exerciseIndex = searchParams.get('exerciseIndex');

    if (!country) {
      return NextResponse.json({ error: 'Country parameter is required' }, { status: 400 });
    }

    // Si aucun thème spécifié, retourner la liste des thèmes avec le nombre d'exercices
    if (!theme) {
      const countryData = getCountryExerciseData(country);
      if (!countryData) {
        return NextResponse.json({ error: 'Country not found' }, { status: 404 });
      }

      const themes = countryData.themes.map(t => ({
        id: t.id,
        name: t.name,
        exerciseCount: t.exercises.length
      }));

      return NextResponse.json({ themes });
    }

    // Récupérer les phrases pour le thème et exercice spécifiés
    const index = exerciseIndex ? parseInt(exerciseIndex) : undefined;
    const phrases = getExercisePhrases(country, theme, index);
    if (!phrases) {
      return NextResponse.json({ error: 'Theme not found or no phrases available' }, { status: 404 });
    }

    // Mélanger les traductions pour le drag & drop
    const translations = [...phrases.map(p => p.translation)];
    for (let i = translations.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [translations[i], translations[j]] = [translations[j], translations[i]];
    }

    const exerciseCount = getThemeExerciseCount(country, theme);

    return NextResponse.json({
      phrases: phrases.map(p => ({
        id: p.id,
        phrase: p.phrase,
        translation: p.translation,
        phonetic: p.phonetic
      })),
      translations,
      exerciseCount,
      currentExercise: index !== undefined ? index + 1 : 1
    });

  } catch (error) {
    console.error('Error fetching exercise phrases:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
