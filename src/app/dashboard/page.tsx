'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import { getCountriesProgress, CountryProgress, calculateAverageScore } from '@/lib/progress-tracker';

export default function DashboardPage() {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [countriesProgress, setCountriesProgress] = useState<CountryProgress[]>([]);

  // Charger les données dynamiques depuis localStorage
  useEffect(() => {
    const loadProgress = () => {
      const progress = getCountriesProgress();
      setCountriesProgress(progress);
    };

    loadProgress();

    // Écouter les changements dans localStorage
    const handleStorageChange = () => {
      loadProgress();
    };

    window.addEventListener('storage', handleStorageChange);
    
    // Vérifier les changements toutes les secondes (pour les changements dans la même fenêtre)
    const interval = setInterval(loadProgress, 1000);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, []);

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return 'text-green-400';
    if (progress >= 60) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getProgressBgColor = (progress: number) => {
    if (progress >= 80) return 'bg-green-500';
    if (progress >= 60) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header showFlag={false} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Tableau de Bord
          </h1>
          <p className="text-gray-300 text-lg">
            Suivez votre progression d&apos;apprentissage par destination
          </p>
        </div>

        {countriesProgress.length === 0 ? (
          <div className="text-center py-20">
            <svg className="w-20 h-20 text-gray-400 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
            </svg>
            <h2 className="text-2xl font-bold text-white mb-4">Commencez votre aventure !</h2>
            <p className="text-gray-300 mb-8">
              Votre progression apparaîtra ici dès que vous commencerez à jouer aux quiz, exercices ou défis culturels.
            </p>
            <Link 
              href="/countries"
              className="inline-block bg-gradient-to-r from-blue-500 to-blue-400 hover:from-blue-600 hover:to-blue-500 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Découvrir les destinations
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Countries List */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <svg className="w-6 h-6 mr-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Destinations ({countriesProgress.length})
              </h2>
              <div className="space-y-4">
                {countriesProgress.map((country) => (
                <div
                  key={country.name}
                  onClick={() => setSelectedCountry(selectedCountry === country.name ? null : country.name)}
                  className={`bg-white/5 backdrop-blur-sm rounded-xl p-4 border transition-all duration-300 cursor-pointer hover:scale-105 ${
                    selectedCountry === country.name 
                      ? 'border-blue-500 bg-blue-500/10' 
                      : 'border-white/20 hover:border-white/40'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="relative w-8 h-6 rounded overflow-hidden">
                        <Image
                          src={`/images/drapeaux/${country.flag}`}
                          alt={country.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span className="text-white font-semibold">{country.name}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className={`text-lg font-bold ${getProgressColor(country.overallProgress)}`}>
                        {country.overallProgress}%
                      </div>
                      <div className="w-16 h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${getProgressBgColor(country.overallProgress)} transition-all duration-500`}
                          style={{ width: `${country.overallProgress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Progress */}
          <div className="lg:col-span-2">
            {selectedCountry ? (
              <div className="space-y-6">
                {(() => {
                  const country = countriesProgress.find(c => c.name === selectedCountry)!;
                  return (
                    <>
                      <div className="flex items-center mb-6">
                        <div className="relative w-12 h-8 rounded overflow-hidden mr-4">
                          <Image
                            src={`/images/drapeaux/${country.flag}`}
                            alt={country.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <h2 className="text-3xl font-bold text-white">{country.name}</h2>
                      </div>

                      {/* Module Langue */}
                      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                        <div className="flex items-center mb-6">
                          <div className="relative w-8 h-8 mr-3">
                            <Image
                              src="/images/elements/eclairorange.png"
                              alt="Module Langue"
                              fill
                              className="object-contain"
                            />
                          </div>
                          <h3 className="text-2xl font-bold text-white">Module Langue</h3>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {/* Quiz */}
                          <div className="bg-orange-500/10 rounded-xl p-4 border border-orange-500/30">
                            <div className="flex items-center mb-3">
                              <svg className="w-5 h-5 text-orange-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                              </svg>
                              <h4 className="text-orange-300 font-semibold">Quiz Interactifs</h4>
                            </div>
                            <div className="space-y-2">
                              <div className="flex justify-between text-sm">
                                <span className="text-gray-300">Progression</span>
                                <span className="text-white">{country.language.quizzes.completed}/{country.language.quizzes.total}</span>
                              </div>
                              <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                                <div 
                                  className="h-full bg-orange-500 transition-all duration-500"
                                  style={{ width: `${(country.language.quizzes.completed / country.language.quizzes.total) * 100}%` }}
                                />
                              </div>
                              <div className="flex justify-between text-sm">
                                <span className="text-gray-300">Score moyen</span>
                                <span className={`font-semibold ${getProgressColor(calculateAverageScore(country.language.quizzes.scores))}`}>
                                  {calculateAverageScore(country.language.quizzes.scores)}%
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Exercices */}
                          <div className="bg-blue-500/10 rounded-xl p-4 border border-blue-500/30">
                            <div className="flex items-center mb-3">
                              <svg className="w-5 h-5 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a1 1 0 01-1-1V9a1 1 0 011-1h1a2 2 0 100-4H4a1 1 0 01-1-1V4a1 1 0 011-1h3a1 1 0 001-1v-1a2 2 0 012-2z"/>
                              </svg>
                              <h4 className="text-blue-300 font-semibold">Exercices Pratiques</h4>
                            </div>
                            <div className="space-y-2">
                              <div className="flex justify-between text-sm">
                                <span className="text-gray-300">Progression</span>
                                <span className="text-white">{country.language.exercises.completed}/{country.language.exercises.total}</span>
                              </div>
                              <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                                <div 
                                  className="h-full bg-blue-500 transition-all duration-500"
                                  style={{ width: `${(country.language.exercises.completed / country.language.exercises.total) * 100}%` }}
                                />
                              </div>
                              <div className="flex justify-between text-sm">
                                <span className="text-gray-300">Score moyen</span>
                                <span className={`font-semibold ${getProgressColor(calculateAverageScore(country.language.exercises.scores))}`}>
                                  {calculateAverageScore(country.language.exercises.scores)}%
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Module Coutume */}
                      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                        <div className="flex items-center mb-6">
                          <div className="relative w-8 h-8 mr-3">
                            <Image
                              src="/images/elements/eclairvert.png"
                              alt="Module Coutume"
                              fill
                              className="object-contain"
                            />
                          </div>
                          <h3 className="text-2xl font-bold text-white">Module Coutume</h3>
                        </div>
                        
                        <div className="bg-green-500/10 rounded-xl p-4 border border-green-500/30">
                          <div className="flex items-center mb-3">
                            <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                            </svg>
                            <h4 className="text-green-300 font-semibold">Défis Culturels</h4>
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-300">Progression</span>
                              <span className="text-white">{country.culture.lessons.completed}/{country.culture.lessons.total}</span>
                            </div>
                            <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-green-500 transition-all duration-500"
                                style={{ width: `${(country.culture.lessons.completed / country.culture.lessons.total) * 100}%` }}
                              />
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-300">Score moyen</span>
                              <span className={`font-semibold ${getProgressColor(calculateAverageScore(country.culture.lessons.scores))}`}>
                                {calculateAverageScore(country.culture.lessons.scores)}%
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Statistiques globales */}
                      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                          <svg className="w-6 h-6 mr-3 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                          </svg>
                          Statistiques
                        </h3>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center">
                            <div className={`text-3xl font-bold mb-2 ${getProgressColor(country.overallProgress)}`}>
                              {country.overallProgress}%
                            </div>
                            <div className="text-gray-300 text-sm">Progression Globale</div>
                          </div>
                          <div className="text-center">
                            <div className="text-3xl font-bold text-blue-400 mb-2">
                              {country.language.quizzes.completed + country.language.exercises.completed + country.culture.lessons.completed}
                            </div>
                            <div className="text-gray-300 text-sm">Activités Terminées</div>
                          </div>
                        </div>
                      </div>

                      {/* Actions rapides */}
                      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                        <h3 className="text-xl font-bold text-white mb-4">Actions Rapides</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <Link 
                            href={`/choice/${country.name}`}
                            className="bg-gradient-to-r from-blue-500 to-blue-400 hover:from-blue-600 hover:to-blue-500 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 text-center"
                          >
                            Continuer l&apos;apprentissage
                          </Link>
                          <Link 
                            href={`/language/${country.name}`}
                            className="bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 text-center"
                          >
                            Module Langue
                          </Link>
                        </div>
                      </div>
                    </>
                  );
                })()}
              </div>
            ) : (
              <div className="flex items-center justify-center h-96">
                <div className="text-center">
                  <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                  </svg>
                  <h3 className="text-xl font-bold text-white mb-2">Sélectionnez un pays</h3>
                  <p className="text-gray-400">Cliquez sur un pays à gauche pour voir votre progression détaillée</p>
                </div>
              </div>
            )}
          </div>
        </div>
        )}

        {/* Back Button */}
        <div className="text-center mt-12">
          <Link 
            href="/"
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Retour à l&apos;accueil
          </Link>
        </div>
      </main>
    </div>
  );
}
