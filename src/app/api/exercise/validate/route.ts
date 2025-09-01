import { NextRequest, NextResponse } from 'next/server';
import { getExercisePhrases } from '@/lib/exercise-data-server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { country, theme, matches } = body;

    if (!country || !theme || !matches) {
      return NextResponse.json({ 
        error: 'Missing required parameters: country, theme, matches' 
      }, { status: 400 });
    }

    // Récupérer les phrases correctes
    const correctPhrases = getExercisePhrases(country, theme);
    if (!correctPhrases) {
      return NextResponse.json({ 
        error: 'Theme not found for this country' 
      }, { status: 404 });
    }

    // Valider chaque correspondance
    const results = matches.map((match: { phraseId: string, translationId: string }) => {
      const phrase = correctPhrases.find(p => p.id === match.phraseId);
      if (!phrase) {
        return { phraseId: match.phraseId, correct: false, error: 'Phrase not found' };
      }

      // Vérifier si la traduction correspond (on utilise l'ID de la phrase comme référence)
      const isCorrect = match.translationId === match.phraseId;
      
      return {
        phraseId: match.phraseId,
        correct: isCorrect,
        correctTranslation: phrase.translation
      };
    });

    // Calculer le score
    const correctCount = results.filter(r => r.correct).length;
    const totalCount = results.length;
    const score = Math.round((correctCount / totalCount) * 100);

    return NextResponse.json({
      results,
      score,
      correctCount,
      totalCount
    });

  } catch (error) {
    console.error('Validation error:', error);
    return NextResponse.json({ 
      error: 'Internal server error' 
    }, { status: 500 });
  }
}
