import React from 'react';

const HeroSectionFlashCard = () => {
  return (
    <div className="mb-10">
      <div className="flex flex-col items-center mt-2 lg:mt-10">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
          Transform PDFs
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            {" "}to Flashcards!
          </span>
        </h1>
        <p className="mt-6 text-lg text-center text-neutral-500 max-w-4xl">
          Empower your knowledge by creating interactive flashcards from any PDF. 
          Perfect for exam preparation, language learning, and memorization.
        </p>
      </div>
    </div>
  );
};

export default HeroSectionFlashCard;