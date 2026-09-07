import React, { useEffect, useState } from 'react';
import { Play, Pause, SkipForward, SkipBack, X, Compass } from 'lucide-react';
import { RoomInfo } from '../../data/propertyData';

interface GuidedTourControlsProps {
  isGuidedTour: boolean;
  guidedTourSequence: string[];
  rooms: RoomInfo[];
  selectedRoomId: string;
  onSelectRoom: (roomId: string) => void;
  onExitGuidedTour: () => void;
}

export const GuidedTourControls: React.FC<GuidedTourControlsProps> = ({
  isGuidedTour,
  guidedTourSequence,
  rooms,
  selectedRoomId,
  onSelectRoom,
  onExitGuidedTour,
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const currentIndex = guidedTourSequence.indexOf(selectedRoomId);
  const currentStep = currentIndex >= 0 ? currentIndex + 1 : 1;
  const totalSteps = guidedTourSequence.length;

  useEffect(() => {
    if (!isGuidedTour || !isPlaying) {
      setProgress(0);
      return;
    }

    const intervalTime = 60; // 60ms tick
    const totalDuration = 6000; // 6 seconds per room
    const increment = (intervalTime / totalDuration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          // Advance to next room
          const nextIndex = (currentIndex + 1) % totalSteps;
          onSelectRoom(guidedTourSequence[nextIndex]);
          return 0;
        }
        return prev + increment;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isGuidedTour, isPlaying, currentIndex, totalSteps, guidedTourSequence, onSelectRoom]);

  if (!isGuidedTour) return null;

  const currentRoom = rooms.find((r) => r.id === selectedRoomId);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % totalSteps;
    onSelectRoom(guidedTourSequence[nextIndex]);
    setProgress(0);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + totalSteps) % totalSteps;
    onSelectRoom(guidedTourSequence[prevIndex]);
    setProgress(0);
  };

  return (
    <div className="fixed top-20 left-1/2 -translate-x-1/2 z-40 w-full max-w-xl px-4 animate-fade-in">
      <div className="bg-slate-900/90 border border-indigo-500/40 backdrop-blur-xl rounded-2xl p-4 shadow-2xl text-slate-100 flex flex-col gap-3">
        {/* Progress Line Bar */}
        <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
          <div
            className="bg-indigo-500 h-full transition-all duration-75"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex items-center justify-between gap-4">
          {/* Room Title & Step Counter */}
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <Compass className="w-5 h-5 animate-spin-slow" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
                  Guided Tour • Stop {currentStep} of {totalSteps}
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-100">
                {currentRoom?.name || 'Exploring Property'}
              </h3>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-1.5 bg-slate-950/60 p-1.5 rounded-xl border border-slate-800">
            <button
              onClick={handlePrev}
              title="Previous Room"
              className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            >
              <SkipBack className="w-4 h-4" />
            </button>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              title={isPlaying ? 'Pause Guided Tour' : 'Resume Guided Tour'}
              className="p-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors shadow-md shadow-indigo-600/30"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
            </button>

            <button
              onClick={handleNext}
              title="Next Room"
              className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            >
              <SkipForward className="w-4 h-4" />
            </button>

            <div className="w-px h-5 bg-slate-800 mx-1" />

            <button
              onClick={onExitGuidedTour}
              title="Exit Guided Tour"
              className="p-2 text-rose-400 hover:text-rose-300 hover:bg-rose-950/40 rounded-lg transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
