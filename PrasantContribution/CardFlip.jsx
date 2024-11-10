import { useState } from 'react';
import UploadPdf from './UploadPdf';

const CardFlip = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [flashcards, setFlashcards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  

  const handleFlashcardsGenerated = (flashcards) => {
    
    setTimeout(() => {
      setFlashcards(flashcards);
      setCurrentIndex(0);
      setIsFlipped(false);
      
    }, 100); // Adjust delay if needed
  };

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
    setIsFlipped(false);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + flashcards.length) % flashcards.length);
    setIsFlipped(false);
  };

  const shuffleFlashcards = () => {
    const shuffled = [...flashcards].sort(() => Math.random() - 0.5);
    setFlashcards(shuffled);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const currentFlashcard = flashcards[currentIndex] || { front: 'No flashcards', back: 'No flashcards' };
  const progressPercentage = ((currentIndex + 1) / flashcards.length) * 100;

  return (
    <div className="flex flex-col items-center justify-center h-full my-4 mt-8 bg-neutral-900 p-6 rounded-lg relative">
      <UploadPdf onFlashcardsGenerated={handleFlashcardsGenerated} />

      <div className="flex flex-col items-center w-full max-w-4xl mt-4 relative">
        

       

        {/* Flashcard and Navigation */}
        {flashcards.length > 0 && (
          <div className="flex items-center justify-between w-full">
            {/* Left Button */}
            <button
              onClick={handlePrev}
              className="text-[0.7rem] sm:text-[0.75rem] md:text-sm bg-gradient-to-r from-gray-700 to-gray-800 text-gray-200 py-2 px-4 rounded-md cursor-pointer text-center"
              aria-label="Previous"
              style={{ visibility: currentIndex > 0 ? 'visible' : 'hidden' }}
            >
              Prev
            </button>

            {/* Card and Counter */}
            <div className="flex flex-col items-center mx-2">
              {/* Card */}
              <div
                className="relative w-[500px] h-[250px] cursor-pointer perspective-1000"
                onClick={handleClick}
              >
                <div
                  className={`relative w-full h-full transition-transform duration-500 ease-in-out transform-style-preserve-3d ${
                    isFlipped ? 'rotate-x-180' : ''
                  }`}
                >
                  {/* Front Side */}
                  <div className="absolute w-full h-full flex items-center justify-center bg-gradient-to-r from-orange-500 to-orange-800 text-white backface-hidden rounded-lg font-bold text-center">
                    <p>{currentFlashcard.front}</p>
                  </div>

                  {/* Back Side */}
                  <div className="absolute w-full h-full flex items-center justify-center bg-gradient-to-r from-orange-500 to-orange-800 text-white backface-hidden rotate-x-180 rounded-lg font-bold text-center">
                    <p>{currentFlashcard.back}</p>
                  </div>
                </div>
              </div>

              {/* Counter */}
              <p className="mt-2 text-white">{currentIndex + 1}/{flashcards.length}</p>

              {/* Shuffle Link */}
              <button
                onClick={shuffleFlashcards}
                className="text-gray-400 text-sm underline mt-1 cursor-pointer focus:outline-none"
                aria-label="Shuffle flashcards"
              >
                Shuffle
              </button>

              {/* Progress Bar */}
              <div className="w-full bg-gray-700 h-2 rounded-full mt-2">
                <div
                  className="bg-gradient-to-r from-teal-400 to-green-500 h-2 rounded-full"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
            </div>

            {/* Right Button */}
            <button
              onClick={handleNext}
              className="text-[0.7rem] sm:text-[0.75rem] md:text-sm bg-gradient-to-r from-gray-700 to-gray-800 text-gray-200 py-2 px-4 rounded-md cursor-pointer text-center"
              aria-label="Next"
              style={{ visibility: currentIndex < flashcards.length - 1 ? 'visible' : 'hidden' }}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardFlip;
