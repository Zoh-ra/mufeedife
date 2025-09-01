'use client';

import React, { useState } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Header from '../../../../components/Header';
import { getCulturalTip } from '@/lib/cultural-data';

export default function CultureLessonPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const country = params.country as string;
  const category = searchParams.get('category') || '';
  
  const [showQuiz, setShowQuiz] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const currentTip = getCulturalTip(decodeURIComponent(country), decodeURIComponent(category));

  if (!currentTip) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-2xl font-bold mb-4">Catégorie non trouvée</h1>
          <p className="text-gray-400 mb-4">
            Pays: {decodeURIComponent(country)} | Catégorie: {decodeURIComponent(category)}
          </p>
          <Link href={`/culture/${country}`} className="text-blue-400 hover:text-blue-300">
            Retour aux catégories
          </Link>
        </div>
      </div>
    );
  }

  const handleQuizAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setShowResult(true);
  };

  const handleStartQuiz = () => {
    setShowQuiz(true);
  };

  const resetLesson = () => {
    setShowQuiz(false);
    setSelectedAnswer(null);
    setShowResult(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header country={country} showFlag={true} moduleType="culture" />

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {currentTip.category}
          </h1>
          <p className="text-gray-400 text-lg mb-4">
            {decodeURIComponent(country)}
          </p>
        </div>

        {/* Cultural Tip Card */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-8">
          
          {!showQuiz ? (
            <div className="space-y-8">
              {/* Situation */}
              <div className="bg-red-500/10 border border-red-400/30 rounded-lg p-6">
                <h3 className="text-red-300 font-bold text-xl mb-4">⚠️ Situation</h3>
                <p className="text-gray-300 text-lg leading-relaxed">{currentTip.situation}</p>
              </div>

              {/* Pourquoi c'est gênant */}
              <div className="bg-yellow-500/10 border border-yellow-400/30 rounded-lg p-6">
                <h3 className="text-yellow-300 font-bold text-xl mb-4">🤔 Pourquoi c&apos;est gênant ?</h3>
                <p className="text-gray-300 text-lg leading-relaxed">{currentTip.why}</p>
              </div>

              {/* À faire */}
              <div className="bg-green-500/10 border border-green-400/30 rounded-lg p-6">
                <h3 className="text-green-300 font-bold text-xl mb-4">✅ À faire</h3>
                <p className="text-gray-300 text-lg leading-relaxed">{currentTip.todo}</p>
              </div>

              {/* Button to start quiz */}
              <div className="text-center pt-6">
                <button
                  onClick={handleStartQuiz}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-400 hover:from-blue-600 hover:to-blue-500 text-white rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
                >
                  Tester mes connaissances
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              {/* Quiz Section */}
              <div className="bg-blue-500/10 border border-blue-400/30 rounded-lg p-6">
                <h3 className="text-blue-300 font-bold text-xl mb-6 text-center">Défi</h3>
                <h4 className="text-white text-xl font-semibold mb-6 text-center">
                  {currentTip.quiz.question}
                </h4>
              </div>

              {/* Quiz Options */}
              <div className="space-y-4">
                {currentTip.quiz.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => !showResult && handleQuizAnswer(index)}
                    disabled={showResult}
                    className={`w-full p-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                      showResult
                        ? index === currentTip.quiz.correctAnswer
                          ? 'bg-green-500/20 text-green-300 border-2 border-green-400'
                          : index === selectedAnswer
                          ? 'bg-red-500/20 text-red-300 border-2 border-red-400'
                          : 'bg-white/5 text-gray-400 border border-white/10'
                        : 'bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40 transform hover:scale-105'
                    }`}
                  >
                    {String.fromCharCode(97 + index)}) {option} 
                    {showResult && index === currentTip.quiz.correctAnswer && ' ✅'}
                  </button>
                ))}
              </div>

              {/* Result */}
              {showResult && (
                <div className="text-center pt-6">
                  <div className={`text-xl font-bold mb-6 ${
                    selectedAnswer === currentTip.quiz.correctAnswer ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {selectedAnswer === currentTip.quiz.correctAnswer ? '🎉 Correct !' : '❌ Incorrect'}
                  </div>
                  
                  <div className="flex justify-center gap-4">
                    <button
                      onClick={resetLesson}
                      className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-400 hover:from-blue-600 hover:to-blue-500 text-white rounded-lg font-semibold transition-all duration-300"
                    >
                      🔄 Recommencer
                    </button>
                    <Link
                      href={`/culture/${country}`}
                      className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-400 hover:from-blue-600 hover:to-blue-500 text-white rounded-lg font-semibold transition-all duration-300"
                    >
                      📚 Autres catégories
                    </Link>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Back Button */}
        <div className="text-center">
          <Link 
            href={`/culture/${country}`}
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Retour aux catégories culturelles
          </Link>
        </div>

      </main>
    </div>
  );
}
