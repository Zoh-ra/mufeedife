'use client';

import { useState, useEffect } from 'react';
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
  closestCorners,
} from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface ExercisePhrase {
  id: string;
  phrase: string;
  translation: string;
  phonetic?: string;
}

interface DragDropExerciseProps {
  phrases: ExercisePhrase[];
  onValidate: (matches: { phraseId: string; translationId: string }[]) => void;
  onNext?: () => void;
  canGoNext?: boolean;
}

interface DroppableItem {
  id: string;
  content: string;
  type: 'phrase' | 'translation';
  originalId: string;
}

interface Match {
  phraseId: string;
  translationId: string;
}

function DraggableItem({ item }: { item: DroppableItem }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: item.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`p-4 rounded-lg border-2 cursor-move transition-all duration-300 ${
        isDragging
          ? 'opacity-50 scale-105'
          : item.type === 'phrase'
          ? 'bg-blue-500/20 border-blue-400 text-blue-100'
          : 'bg-purple-500/20 border-purple-400 text-purple-100'
      } hover:scale-105`}
    >
      {item.content}
      {item.type === 'phrase' && (
        <div className="text-xs text-gray-400 mt-1">Phrase</div>
      )}
      {item.type === 'translation' && (
        <div className="text-xs text-gray-400 mt-1">Français</div>
      )}
    </div>
  );
}

function DroppableZone({ 
  phraseItem, 
  matchedTranslation, 
  showResults,
  isCorrect
}: { 
  phraseItem: DroppableItem;
  matchedTranslation: DroppableItem | null;
  showResults?: boolean;
  isCorrect?: boolean;
}) {
  const {
    setNodeRef,
    isOver,
  } = useSortable({ 
    id: `zone-${phraseItem.id}`,
    data: {
      type: 'droppable-zone',
      phraseId: phraseItem.originalId,
    }
  });

  return (
    <div
      ref={setNodeRef}
      className={`min-h-[120px] p-4 rounded-lg border-2 border-dashed transition-all duration-300 ${
        isOver
          ? 'border-green-400 bg-green-500/20'
          : matchedTranslation
          ? showResults
            ? isCorrect === true
              ? 'border-green-400 bg-green-500/10'
              : isCorrect === false
              ? 'border-red-400 bg-red-500/10'
              : 'border-gray-400 bg-gray-500/10'
            : 'border-blue-400 bg-blue-500/10'
          : 'border-gray-400 bg-gray-500/10'
      }`}
    >
      <div className="mb-2">
        <DraggableItem item={phraseItem} />
      </div>
      
      <div className="text-center text-gray-400 text-sm mb-2">
        ↓ Déposez la traduction ici ↓
      </div>
      
      {matchedTranslation && (
        <div className="mt-2 relative">
          <div className={`p-4 rounded-lg border-2 transition-all duration-300 ${
            showResults
              ? isCorrect === true
                ? 'bg-green-500/20 border-green-400 text-green-100'
                : isCorrect === false
                ? 'bg-red-500/20 border-red-400 text-red-100'
                : 'bg-purple-500/20 border-purple-400 text-purple-100'
              : 'bg-blue-500/20 border-blue-400 text-blue-100'
          }`}>
            {matchedTranslation.content}
            <div className="text-xs text-gray-400 mt-1">Français</div>
            {showResults && isCorrect !== undefined && (
              <div className="absolute top-2 right-2">
                {isCorrect ? (
                  <div className="w-6 h-6 bg-green-500 text-white rounded-full text-xs flex items-center justify-center">
                    ✓
                  </div>
                ) : (
                  <div className="w-6 h-6 bg-red-500 text-white rounded-full text-xs flex items-center justify-center">
                    ✗
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default function DragDropExercise({ phrases, onValidate, onNext, canGoNext }: DragDropExerciseProps) {
  const [phraseItems, setPhraseItems] = useState<DroppableItem[]>([]);
  const [translationItems, setTranslationItems] = useState<DroppableItem[]>([]);
  const [matches, setMatches] = useState<Match[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState<{correct: Match[], incorrect: Match[], score: number} | null>(null);
  const [activeId, setActiveId] = useState<string | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  useEffect(() => {
    // Créer les éléments draggables
    const pItems: DroppableItem[] = phrases.map((p) => ({
      id: `phrase-${p.id}`,
      content: p.phrase,
      type: 'phrase' as const,
      originalId: p.id,
    }));

    const tItems: DroppableItem[] = phrases.map((p) => ({
      id: `translation-${p.id}`,
      content: p.translation,
      type: 'translation' as const,
      originalId: p.id,
    }));

    // Mélanger les traductions
    const shuffledTranslations = [...tItems].sort(() => Math.random() - 0.5);

    setPhraseItems(pItems);
    setTranslationItems(shuffledTranslations);
  }, [phrases]);

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as string);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    setActiveId(null);

    if (!over) return;

    const activeItem = [...phraseItems, ...translationItems].find(
      item => item.id === active.id
    );

    if (!activeItem || activeItem.type !== 'translation') return;

    // Vérifier si on dépose sur une zone de drop
    const overData = over.data.current;
    if (overData?.type === 'droppable-zone') {
      const phraseId = overData.phraseId;
      const translationId = activeItem.originalId;

      // Créer ou mettre à jour la correspondance
      const newMatches = matches.filter(m => m.phraseId !== phraseId);
      newMatches.push({ phraseId, translationId });
      setMatches(newMatches);

      // Retirer la traduction de la liste disponible
      setTranslationItems(prev => prev.filter(item => item.id !== activeItem.id));
    }
  };

  const getMatchedTranslation = (phraseId: string): DroppableItem | null => {
    const match = matches.find(m => m.phraseId === phraseId);
    if (!match) return null;

    return {
      id: `matched-translation-${match.translationId}`,
      content: phrases.find(p => p.id === match.translationId)?.translation || '',
      type: 'translation' as const,
      originalId: match.translationId,
    };
  };

  const resetMatch = (phraseId: string) => {
    const match = matches.find(m => m.phraseId === phraseId);
    if (!match) return;

    // Remettre la traduction dans la liste disponible
    const phrase = phrases.find(p => p.id === match.translationId);
    if (phrase) {
      const translationItem: DroppableItem = {
        id: `translation-${phrase.id}`,
        content: phrase.translation,
        type: 'translation',
        originalId: phrase.id,
      };
      setTranslationItems(prev => [...prev, translationItem]);
    }

    // Supprimer la correspondance
    setMatches(prev => prev.filter(m => m.phraseId !== phraseId));
  };

  const handleValidate = () => {
    // Calculer les résultats
    const correct: Match[] = [];
    const incorrect: Match[] = [];
    
    matches.forEach(match => {
      if (match.phraseId === match.translationId) {
        correct.push(match);
      } else {
        incorrect.push(match);
      }
    });
    
    const score = Math.round((correct.length / phrases.length) * 100);
    
    setResults({ correct, incorrect, score });
    setShowResults(true);
  };

  const handleRetry = () => {
    // Réinitialiser l'exercice
    setMatches([]);
    setShowResults(false);
    setResults(null);
    
    // Recréer les éléments
    const pItems: DroppableItem[] = phrases.map((p) => ({
      id: `phrase-${p.id}`,
      content: p.phrase,
      type: 'phrase' as const,
      originalId: p.id,
    }));

    const tItems: DroppableItem[] = phrases.map((p) => ({
      id: `translation-${p.id}`,
      content: p.translation,
      type: 'translation' as const,
      originalId: p.id,
    }));

    // Mélanger les traductions
    const shuffledTranslations = [...tItems].sort(() => Math.random() - 0.5);

    setPhraseItems(pItems);
    setTranslationItems(shuffledTranslations);
  };

  const handleNext = () => {
    if (onNext) {
      onNext();
    } else {
      onValidate(matches);
    }
  };

  const activeItem = activeId ? [...phraseItems, ...translationItems].find(item => item.id === activeId) : null;

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Zone de correspondances */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white mb-4">
            Associez les phrases ({matches.length}/{phrases.length})
          </h3>
          
          <SortableContext
            items={phraseItems.map(item => `zone-${item.id}`)}
            strategy={verticalListSortingStrategy}
          >
            {phraseItems.map((phraseItem) => {
              const matchedTranslation = getMatchedTranslation(phraseItem.originalId);
              const match = matches.find(m => m.phraseId === phraseItem.originalId);
              const isCorrect = match ? match.phraseId === match.translationId : undefined;
              
              return (
                <div key={phraseItem.id} className="relative">
                  <DroppableZone
                    phraseItem={phraseItem}
                    matchedTranslation={matchedTranslation}
                    showResults={showResults}
                    isCorrect={isCorrect}
                  />
                  
                  {matchedTranslation && !showResults && (
                    <button
                      onClick={() => resetMatch(phraseItem.originalId)}
                      className="absolute top-2 right-8 w-6 h-6 bg-gray-500 hover:bg-gray-600 text-white rounded-full text-xs flex items-center justify-center z-10"
                    >
                      ↻
                    </button>
                  )}
                </div>
              );
            })}
          </SortableContext>
        </div>

        {/* Traductions disponibles */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white mb-4">
            Traductions disponibles ({translationItems.length})
          </h3>
          
          {showResults && results?.incorrect && results.incorrect.length > 0 && (
            <div className="mb-4 p-4 bg-red-500/10 border border-red-400/30 rounded-lg">
              <h4 className="text-red-300 font-semibold mb-2">Corrections :</h4>
              <div className="space-y-2 text-sm">
                {results.incorrect.map(match => {
                  const phrase = phrases.find(p => p.id === match.phraseId);
                  const wrongTranslation = phrases.find(p => p.id === match.translationId);
                  const correctTranslation = phrases.find(p => p.id === match.phraseId);
                  return (
                    <div key={match.phraseId} className="text-gray-300">
                      <span className="text-blue-300">&quot;{phrase?.phrase}&quot;</span>
                      <br />
                      <span className="text-red-300">❌ Votre réponse: &quot;{wrongTranslation?.translation}&quot;</span>
                      <br />
                      <span className="text-green-300">✅ Bonne réponse: &quot;{correctTranslation?.translation}&quot;</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          
          {!showResults && (
            <SortableContext
              items={translationItems.map(item => item.id)}
              strategy={verticalListSortingStrategy}
            >
              <div className="space-y-3">
                {translationItems.map((item) => (
                  <DraggableItem key={item.id} item={item} />
                ))}
              </div>
            </SortableContext>
          )}
        </div>
      </div>

      {/* Boutons de validation et résultats */}
      <div className="text-center mt-8">
        {!showResults ? (
          <div className="space-y-4">
            {/* Progression */}
            <div className="text-center">
              <div className="flex justify-center gap-2 text-lg">
                <span className="text-blue-400">
                  Associations: {matches.length}/{phrases.length}
                </span>
              </div>
            </div>
            
            <button
              onClick={handleValidate}
              disabled={matches.length !== phrases.length}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                matches.length === phrases.length
                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                  : 'bg-gray-600 text-gray-400 cursor-not-allowed'
              }`}
            >
              Valider mes réponses ({matches.length}/{phrases.length})
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Résultats détaillés */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Résultats de l&apos;exercice</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">{results?.correct.length || 0}</div>
                  <div className="text-green-300">Correctes</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-400">{results?.incorrect.length || 0}</div>
                  <div className="text-red-300">Incorrectes</div>
                </div>
                <div className="text-center">
                  <div className={`text-4xl font-bold ${(results?.score || 0) >= 70 ? 'text-green-400' : 'text-red-400'}`}>
                    {results?.score || 0}%
                  </div>
                  <div className="text-gray-300">Score</div>
                </div>
              </div>
              
              <div className="text-center text-lg text-gray-300 mb-6">
                {(results?.score || 0) >= 70 ? 
                  '🎉 Excellent travail ! Vous maîtrisez bien ces expressions.' : 
                  '💪 Continuez à vous entraîner, vous progressez !'
                }
              </div>
            </div>
            
            {/* Boutons d\'action */}
            <div className="flex justify-center gap-4">
              <button
                onClick={handleRetry}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-300"
              >
                🔄 Refaire cet exercice
              </button>
              <button
                onClick={handleNext}
                disabled={!canGoNext}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  canGoNext
                    ? 'bg-green-600 hover:bg-green-700 text-white'
                    : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                }`}
              >
                {canGoNext ? '➡️ Exercice suivant' : '✅ Exercices terminés'}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Drag Overlay */}
      <DragOverlay>
        {activeItem ? <DraggableItem item={activeItem} /> : null}
      </DragOverlay>
    </DndContext>
  );
}
