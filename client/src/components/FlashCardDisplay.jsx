import React, { useState } from 'react';

const FlashCardDisplay = ({ flashcards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const handleNext = () => {
    if (currentIndex < flashcards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setFlipped(false);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setFlipped(false);
    }
  };

  const toggleFlip = () => {
    setFlipped(!flipped);
  };

  if (!flashcards || flashcards.length === 0) {
    return (
      <div className="text-center text-gray-400">
        No flashcards available. Please generate flashcards first.
      </div>
    );
  }

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="perspective-1000 w-full">
        <div 
          className={`relative transform-style-preserve-3d transition-all duration-500 w-full h-64 sm:h-80 
            ${flipped ? 'rotate-y-180' : ''} cursor-pointer`}
          onClick={toggleFlip}
        >
          {/* Front of card */}
          <div className="backface-hidden absolute w-full h-full flex items-center justify-center 
            bg-gradient-to-r from-orange-500 to-orange-800 text-white rounded-xl p-6 shadow-xl">
            <p className="text-xl sm:text-2xl font-bold text-center">
              {flashcards[currentIndex].front}
            </p>
          </div>

          {/* Back of card */}
          <div className="backface-hidden absolute w-full h-full rotate-y-180 flex items-center justify-center 
            bg-neutral-800 text-white rounded-xl p-6 shadow-xl">
            <p className="text-lg sm:text-xl text-center">
              {flashcards[currentIndex].back}
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-6">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={`px-4 py-2 rounded-md ${
            currentIndex === 0 
              ? 'bg-gray-600 cursor-not-allowed' 
              : 'bg-gradient-to-r from-yellow-600 via-amber-700 to-amber-800 hover:from-yellow-500'
          } text-white`}
        >
          Previous
        </button>
        <div className="text-white">
          {currentIndex + 1} / {flashcards.length}
        </div>
        <button
          onClick={handleNext}
          disabled={currentIndex === flashcards.length - 1}
          className={`px-4 py-2 rounded-md ${
            currentIndex === flashcards.length - 1 
              ? 'bg-gray-600 cursor-not-allowed' 
              : 'bg-gradient-to-r from-yellow-600 via-amber-700 to-amber-800 hover:from-yellow-500'
          } text-white`}
        >
          Next
        </button>
      </div>
      <div className="text-center mt-4 text-gray-400">
        (Click on the card to flip)
      </div>
    </div>
  );
};

export default FlashCardDisplay;