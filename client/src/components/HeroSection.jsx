const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-3 lg:mt-0 px-4 sm:px-6">
      <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-center tracking-wide">
        PrepAI : Smart Tools for
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          Smarter Learning
        </span>
      </h1>
      <p className="mt-6 sm:mt-8 lg:mt-10 text-base sm:text-lg text-center text-neutral-500 max-w-4xl">
        Unlock the power of AI to personalize your study experience. With PrepAI's intelligent planning, flashcards, and quizzes, learning has never been more efficient!
      </p>
      <div className="flex flex-col sm:flex-row justify-center my-6 sm:my-8 lg:my-10 w-full">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md text-center mb-4 sm:mb-0 w-full sm:w-auto"
        >
          Start for free
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border text-center w-full sm:w-auto">
          Documentation
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
