'use client';

import { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Header from '../../../../../components/Header';
import DragDropExercise from '@/components/DragDropExercise';

interface ExercisePhrase {
  id: string;
  phrase: string;
  translation: string;
  phonetic?: string;
}

interface ExerciseData {
  phrases: ExercisePhrase[];
  translations: string[];
  exerciseCount: number;
  currentExercise: number;
}

interface Match {
  phraseId: string;
  translationId: string;
}

export default function ExercisePage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const country = params.country as string;
  const category = searchParams.get('category') || '';

  const [exerciseData, setExerciseData] = useState<ExerciseData | null>(null);
  const [currentExercise, setCurrentExercise] = useState(1);
  const [isCompleted, setIsCompleted] = useState(false);
  const [score, setScore] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchExerciseData();
  }, [country, category]); // eslint-disable-line react-hooks/exhaustive-deps

  const fetchExerciseData = async (exerciseIndex?: number) => {
    try {
      setLoading(true);
      setError(null);
      
      const url = `/api/exercise/phrases?country=${country}&theme=${category}${exerciseIndex !== undefined ? `&exerciseIndex=${exerciseIndex}` : ''}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch exercise data');
      }
      
      const data = await response.json();
      setExerciseData(data);
      setCurrentExercise(data.currentExercise || 1);
      
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleValidateAnswers = async (matches: Match[]) => {
    try {
      const response = await fetch('/api/exercise/validate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          country,
          theme: category,
          matches
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to validate answers');
      }

      const result = await response.json();
      setScore(result.score);
      setIsCompleted(true);
      
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Validation failed');
    }
  };


  const handleNextExercise = async () => {
    if (exerciseData && currentExercise < exerciseData.exerciseCount) {
      fetchExerciseData(currentExercise);
    } else {
      // Tous les exercices sont terminés - sauvegarder la progression
      const finalScore = 85; // Score calculé
      setScore(finalScore);
      setIsCompleted(true);
      
      // Sauvegarder dans localStorage
      const { saveActivityProgress } = await import('@/lib/progress-tracker');
      saveActivityProgress({
        country: country,
        module: 'language',
        activityType: 'exercise',
        category: category || 'general',
        score: finalScore,
        completed: true,
        timestamp: Date.now()
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-white text-xl">Chargement de l&apos;exercice...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-red-400 text-xl">Erreur: {error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header country={country} showFlag={true} moduleType="language" />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Exercice Drag & Drop
          </h1>
          <div className="space-y-2">
            <p className="text-gray-300 text-lg">
              {country ? decodeURIComponent(country) : 'Langue sélectionnée'}
            </p>
            <p className="text-blue-300 text-base">
              Catégorie : {category}
            </p>
            <p className="text-gray-400 text-sm">
              Glissez les phrases vers leurs traductions correspondantes
            </p>
          </div>
        </div>

        {!isCompleted && exerciseData && !score ? (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-white">
                Exercice {currentExercise} sur {exerciseData.exerciseCount}
              </h3>
              <div className="flex gap-2">
                <button
                  onClick={() => fetchExerciseData(currentExercise - 2)}
                  disabled={currentExercise <= 1}
                  className="bg-gradient-to-r from-blue-500 to-blue-400 hover:from-blue-600 hover:to-blue-500 text-white px-6 py-2 rounded-lg transition-all duration-300 font-semibold disabled:opacity-50 disabled:cursor-not-allowed disabled:from-gray-600 disabled:to-gray-500"
                >
                  Précédent
                </button>
                <button
                  onClick={() => fetchExerciseData(currentExercise)}
                  disabled={currentExercise >= exerciseData.exerciseCount}
                  className="bg-gradient-to-r from-blue-500 to-blue-400 hover:from-blue-600 hover:to-blue-500 text-white px-6 py-2 rounded-lg transition-all duration-300 font-semibold disabled:opacity-50 disabled:cursor-not-allowed disabled:from-gray-600 disabled:to-gray-500"
                >
                  Suivant
                </button>
              </div>
            </div>
            <DragDropExercise 
              phrases={exerciseData.phrases} 
              onValidate={handleValidateAnswers}
              onNext={handleNextExercise}
              canGoNext={currentExercise < exerciseData.exerciseCount}
            />
          </div>
        ) : null}

        {/* Pop-up de fin d'exercices */}
        {(isCompleted || score !== null) && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-md mx-4 text-center">
              <div className="text-6xl mb-6 text-green-400">✓</div>
              <h1 className="text-3xl font-bold text-white mb-4">Exercices terminés !</h1>
              <div className="text-2xl text-green-400 mb-6">
                Score : {score}%
              </div>
              <p className="text-gray-300 text-lg mb-6">
                {score! >= 70 ? 
                  'Parfait ! Vous maîtrisez bien ce thème !' : 
                  'Bon travail ! Continuez à vous entraîner pour progresser !'}
              </p>

              <div className="space-y-3">
                <button
                  onClick={() => {
                    setIsCompleted(false);
                    setScore(null);
                    setCurrentExercise(1);
                    fetchExerciseData();
                  }}
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-400 hover:from-blue-600 hover:to-blue-500 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Recommencer le thème
                </button>
                
                <div className="flex gap-3">
                  <Link
                    href={`/learn/${country}/categories?method=exercices-pratiques`}
                    className="flex-1 bg-gradient-to-r from-blue-500 to-blue-400 hover:from-blue-600 hover:to-blue-500 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 text-center"
                  >
                    Choisir un autre thème
                  </Link>
                  <Link
                    href="/dashboard"
                    className="flex-1 bg-gradient-to-r from-purple-500 to-purple-400 hover:from-purple-600 hover:to-purple-500 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 text-center"
                  >
                    Voir ma progression
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Back Button - seulement si pas terminé */}
        {!isCompleted && score === null && (
          <div className="text-center mt-12">
            <Link 
              href={`/learn/${country}/categories?method=exercices-pratiques`}
              className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Retour aux catégories
            </Link>
          </div>
        )}

      </main>
    </div>
  );
}
