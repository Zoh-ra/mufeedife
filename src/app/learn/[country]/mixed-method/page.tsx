'use client';

import React from 'react';
import Link from 'next/link';
import Header from '../../../../components/Header';

export default function MixedMethodPage({ params }: { params: Promise<{ country: string }> }) {
  const { country } = React.use(params);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header country={country} showFlag={true} moduleType="language" />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Méthode Mixte
          </h1>
          <p className="text-gray-400 text-lg mb-4">
            {country ? decodeURIComponent(country) : 'Destination sélectionnée'}
          </p>
          <p className="text-blue-300 text-xl">
            Mélange intelligent de quiz et exercices pratiques
          </p>
        </div>

        {/* Disabled Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-600/30 text-center opacity-60">
            <div className="text-6xl mb-6">🔒</div>
            <h2 className="text-2xl font-bold text-gray-300 mb-4">
              Méthode Mixte
            </h2>
            <p className="text-gray-500 mb-8">
              Cette fonctionnalité n&apos;est pas encore disponible. Elle combinera quiz interactifs et exercices pratiques pour une expérience d&apos;apprentissage complète.
            </p>
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-3 text-gray-500">
                <span className="text-2xl">📝</span>
                <span>Quiz adaptatifs</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-500">
                <span className="text-2xl">🎮</span>
                <span>Exercices interactifs</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-500">
                <span className="text-2xl">📊</span>
                <span>Suivi des progrès</span>
              </div>
            </div>
            
            <div className="mt-8">
              <div className="inline-flex items-center px-4 py-2 bg-gray-700/50 rounded-lg border border-gray-600/30 cursor-not-allowed">
                <span className="text-gray-400 text-sm">Bientôt disponible</span>
              </div>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="text-center mt-12">
          <Link 
            href={`/language/${country}`}
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Retour aux méthodes d&apos;apprentissage
          </Link>
        </div>

      </main>
    </div>
  );
}
