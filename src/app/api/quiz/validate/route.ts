import { NextRequest, NextResponse } from 'next/server';
import { validateAnswer } from '@/lib/quiz-data-server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { country, questionId, answerIndex } = body;

    if (!country || !questionId || answerIndex === undefined) {
      return NextResponse.json({ 
        error: 'Missing required parameters: country, questionId, answerIndex' 
      }, { status: 400 });
    }

    const isCorrect = validateAnswer(country, questionId, answerIndex);
    
    return NextResponse.json({ 
      correct: isCorrect,
      questionId 
    });
  } catch (error) {
    console.error('Error validating answer:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
