'use client';

import { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import Link from 'next/link';

interface Question {
  id: string;
  question_text: string;
  question_type: 'multiple_choice' | 'true_false';
  options: string[];
}

interface QuizData {
  country: { id: string; name: string; language: string };
  category: { id: string; name: string; icon: string };
  questions: Question[];
}

interface AnswerResult {
  isCorrect: boolean;
  correctAnswer: string;
  explanation?: string;
}

export default function QuizPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const country = params.country as string;
  const category = searchParams.get('category');

  const [quizData, setQuizData] = useState<QuizData | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [answerResults, setAnswerResults] = useState<AnswerResult[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showAnswerFeedback, setShowAnswerFeedback] = useState(false);
  const [lastAnswerResult, setLastAnswerResult] = useState<AnswerResult | null>(null);

  useEffect(() => {
    const loadQuizData = async () => {
      try {
        setLoading(true);
        setError('');

        // Charger les questions depuis la nouvelle API sécurisée
        const response = await fetch(`/api/quiz/questions?country=${encodeURIComponent(country)}&theme=${encodeURIComponent(category || '')}`);
        
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Erreur lors du chargement');
        }

        const questionsData = await response.json();
        
        // Adapter les données au format attendu par le composant
        const data = {
          country: { id: country, name: country, language: country },
          category: { id: category || '', name: category || '', icon: '📚' },
          questions: questionsData.map((q: { id: string; question: string; options: string[] }) => ({
            id: q.id,
            question_text: q.question,
            question_type: 'multiple_choice' as const,
            options: q.options
          }))
        };
        
        setQuizData(data);
      } catch (err) {
        console.error('Erreur chargement quiz:', err);
        setError(err instanceof Error ? err.message : 'Erreur lors du chargement du quiz');
      } finally {
        setLoading(false);
      }
    };

    if (country && category) {
      loadQuizData();
    }
  }, [country, category]);

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const nextQuestion = async () => {
    if (!quizData || !selectedAnswer || isSubmitting) return;

    setIsSubmitting(true);
    
    // Vérifier la réponse côté serveur avec la nouvelle API
    try {
      const answerIndex = currentQuestion.options.indexOf(selectedAnswer);
      const response = await fetch('/api/quiz/validate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          country,
          questionId: quizData.questions[currentQuestionIndex].id,
          answerIndex
        })
      });

      const validationResult = await response.json();
      
      // Adapter le résultat au format attendu
      const result = {
        isCorrect: validationResult.correct,
        correctAnswer: validationResult.correct ? selectedAnswer : currentQuestion.options[0], // Placeholder - la vraie réponse n'est pas exposée
        explanation: undefined
      };
      
      // Afficher le feedback immédiatement
      setLastAnswerResult(result);
      setShowAnswerFeedback(true);
      
      // Stocker les résultats
      setAnswerResults(prev => [...prev, result]);
      setUserAnswers(prev => [...prev, selectedAnswer]);

      // Attendre 2 secondes pour montrer le feedback
      setTimeout(() => {
        setShowAnswerFeedback(false);
        
        // Passer à la question suivante ou terminer
        if (currentQuestionIndex < quizData.questions.length - 1) {
          setCurrentQuestionIndex(prev => prev + 1);
          setSelectedAnswer('');
        } else {
          // Calculer le score final
          const finalScore = [...answerResults, result].filter(r => r.isCorrect).length;
          setScore(finalScore);
          setShowResults(true);
        }
      }, 2000);
      
    } catch (err) {
      console.error('Erreur vérification réponse:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const previousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
      setSelectedAnswer(userAnswers[currentQuestionIndex - 1] || '');
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer('');
    setUserAnswers([]);
    setAnswerResults([]);
    setShowResults(false);
    setScore(0);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-white text-xl">Chargement du quiz...</div>
      </div>
    );
  }

  if (error || !quizData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-400 text-xl mb-4">{error || 'Quiz non trouvé'}</div>
          <Link 
            href={`/learn/${country}/categories?method=mini-quiz`}
            className="text-blue-400 hover:text-blue-300"
          >
            Retour aux catégories
          </Link>
        </div>
      </div>
    );
  }

  const currentQuestion = quizData.questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / quizData.questions.length) * 100;

  if (showResults) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <header className="relative overflow-hidden bg-black/20 backdrop-blur-sm border-b border-white/10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <Link href="/" className="flex items-center space-x-4">
              <div className="text-3xl font-bold text-blue-400">MUFEED</div>
            </Link>
          </div>
        </header>

        <main className="flex items-center justify-center min-h-[calc(100vh-120px)]">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-6xl mb-6">🎉</div>
              <h1 className="text-3xl font-bold text-white mb-4">Quiz terminé !</h1>
              <div className="text-2xl text-blue-300 mb-6">
                Score : {score}/{quizData.questions.length}
              </div>
              <div className="text-lg text-gray-300 mb-8">
                {score === quizData.questions.length 
                  ? "Parfait ! Vous maîtrisez ce thème !" 
                  : score >= quizData.questions.length * 0.7 
                  ? "Très bien ! Continuez comme ça !" 
                  : "Bon début ! Un peu plus de pratique et ce sera parfait !"}
              </div>
              
              <div className="space-y-4">
                <button
                  onClick={resetQuiz}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  Recommencer le quiz
                </button>
                <Link
                  href={`/learn/${country}/categories?method=mini-quiz`}
                  className="block w-full bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  Choisir un autre thème
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <header className="relative overflow-hidden bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/" className="flex items-center space-x-4">
            <div className="text-3xl font-bold text-blue-400">MUFEED</div>
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* En-tête du quiz */}
        <div className="text-center mb-8">
          <div className="text-4xl mb-2">{quizData.category.icon}</div>
          <h1 className="text-2xl font-bold text-white mb-2">{quizData.category.name}</h1>
          <p className="text-gray-300">{quizData.country.name}</p>
        </div>

        {/* Barre de progression */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-300 mb-2">
            <span>Question {currentQuestionIndex + 1} sur {quizData.questions.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div 
              className="bg-blue-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question actuelle */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 mb-8">
          <h2 className="text-xl font-semibold text-white mb-6">
            {currentQuestion.question_text}
          </h2>

          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedAnswer === option;
              const isCorrect = showAnswerFeedback && lastAnswerResult?.correctAnswer === option;
              const isWrong = showAnswerFeedback && isSelected && !lastAnswerResult?.isCorrect;
              
              return (
                <div key={index} className="relative">
                  <button
                    onClick={() => !showAnswerFeedback && handleAnswerSelect(option)}
                    disabled={showAnswerFeedback}
                    className={`w-full text-left p-4 rounded-lg border transition-all duration-500 transform ${
                      isCorrect
                        ? 'bg-green-600/40 border-green-400 text-white scale-105 shadow-lg shadow-green-500/20 animate-bounce-in'
                        : isWrong
                        ? 'bg-red-600/40 border-red-400 text-white animate-shake'
                        : isSelected
                        ? 'bg-blue-600/30 border-blue-400 text-white'
                        : 'bg-white/5 border-white/20 text-gray-300 hover:bg-white/10 hover:border-white/30'
                    } ${showAnswerFeedback ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                  >
                    <div className="flex items-center">
                      <span className="font-medium mr-3">
                        {String.fromCharCode(65 + index)})
                      </span>
                      <span className="flex-1">{option}</span>
                      {isCorrect && (
                        <span className="text-green-400 text-2xl ml-2 animate-bounce-in">✓</span>
                      )}
                      {isWrong && (
                        <span className="text-red-400 text-2xl ml-2 animate-shake">✗</span>
                      )}
                    </div>
                  </button>
                  
                  {/* Effet de particules pour bonne réponse */}
                  {isCorrect && (
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute top-2 right-2 text-yellow-400 text-xs animate-bounce-in">⭐</div>
                      <div className="absolute top-4 right-8 text-yellow-400 text-xs animate-bounce-in" style={{animationDelay: '0.1s'}}>✨</div>
                      <div className="absolute top-6 right-4 text-yellow-400 text-xs animate-bounce-in" style={{animationDelay: '0.2s'}}>⭐</div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Feedback de la réponse avec animation */}
          {showAnswerFeedback && lastAnswerResult && (
            <div className={`mt-6 p-4 rounded-lg border-l-4 transform transition-all duration-500 ${
              lastAnswerResult.isCorrect 
                ? 'bg-green-900/30 border-green-400 text-green-100 scale-105' 
                : 'bg-red-900/30 border-red-400 text-red-100'
            } animate-fade-in`}>
              <div className="flex items-center mb-2">
                <span className="text-3xl mr-3 animate-bounce-in">
                  {lastAnswerResult.isCorrect ? '🎉' : '😅'}
                </span>
                <span className="font-bold text-lg">
                  {lastAnswerResult.isCorrect ? 'Excellent !' : 'Oups !'}
                </span>
              </div>
              {!lastAnswerResult.isCorrect && (
                <div className="bg-black/20 p-3 rounded-lg mt-3">
                  <p className="text-sm font-medium">
                    ✅ Bonne réponse : <strong className="text-green-300">{lastAnswerResult.correctAnswer}</strong>
                  </p>
                </div>
              )}
              {lastAnswerResult.explanation && (
                <div className="bg-blue-900/20 p-3 rounded-lg mt-3">
                  <p className="text-sm">
                    <span className="text-blue-300 font-medium">💡 Le saviez-vous ?</span><br/>
                    {lastAnswerResult.explanation}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button
            onClick={previousQuestion}
            disabled={currentQuestionIndex === 0 || showAnswerFeedback}
            className="flex items-center px-4 py-2 text-gray-400 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Précédent
          </button>

          {!showAnswerFeedback && (
            currentQuestionIndex === quizData.questions.length - 1 ? (
              <button
                onClick={nextQuestion}
                disabled={!selectedAnswer || isSubmitting}
                className="bg-green-600 hover:bg-green-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold py-2 px-6 rounded-lg transition-colors"
              >
                {isSubmitting ? 'Vérification...' : 'Terminer le quiz'}
              </button>
            ) : (
              <button
                onClick={nextQuestion}
                disabled={!selectedAnswer || isSubmitting}
                className="flex items-center bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold py-2 px-6 rounded-lg transition-colors"
              >
                {isSubmitting ? 'Vérification...' : 'Suivant'}
                {!isSubmitting && (
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                )}
              </button>
            )
          )}
        </div>
      </main>
    </div>
  );
}
