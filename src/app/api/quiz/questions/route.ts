import { NextRequest, NextResponse } from 'next/server';
import { getQuizQuestions, getCountryQuizData } from '@/lib/quiz-data-server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const country = searchParams.get('country');
  const theme = searchParams.get('theme');

  if (!country) {
    return NextResponse.json({ error: 'Country parameter is required' }, { status: 400 });
  }

  try {
    if (theme) {
      // Récupérer les questions d'un thème spécifique (sans les réponses)
      const questions = getQuizQuestions(country, theme);
      if (!questions) {
        return NextResponse.json({ error: 'Theme not found' }, { status: 404 });
      }
      return NextResponse.json(questions);
    } else {
      // Récupérer tous les thèmes disponibles pour un pays
      const countryData = getCountryQuizData(country);
      if (!countryData) {
        return NextResponse.json({ error: 'Country not found' }, { status: 404 });
      }
      
      const themes = countryData.themes.map(theme => ({
        id: theme.id,
        name: theme.name,
        emoji: theme.emoji,
        questionCount: theme.questions.length
      }));
      
      return NextResponse.json({ 
        country: countryData.country,
        language: countryData.language,
        themes 
      });
    }
  } catch (error) {
    console.error('Error fetching quiz data:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
