import React, { useState } from 'react';

const Display = ({ quizData }) => {
  const parsedQuizData = quizData ? JSON.parse(quizData) : [];
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]); // Store selected answers
  const [isSubmitted, setIsSubmitted] = useState(false); // Track if quiz is submitted
  const [score, setScore] = useState(0); // User score

  // Get the current question
  const currentQuestion = parsedQuizData[currentQuestionIndex];

  const handleAnswerClick = (index) => {
    // Only allow answer selection before submission
    if (!isSubmitted) {
      const updatedAnswers = [...selectedAnswers];
      updatedAnswers[currentQuestionIndex] = index;
      setSelectedAnswers(updatedAnswers);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < parsedQuizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = () => {
    // Calculate score after submission
    let calculatedScore = 0;
    selectedAnswers.forEach((answer, index) => {
      if (answer === parsedQuizData[index].answer) {
        calculatedScore += 1;
      }
    });
    setScore(calculatedScore);
    setIsSubmitted(true); // Mark quiz as submitted
  };

  return (
    <div className="w-full max-w-screen-md mx-auto mt-5 mb-3 p-4 sm:p-6 md:p-8 bg-[#292929] rounded-lg">
      <div className="flex-grow flex flex-col items-center justify-center p-6 bg-[#292929] rounded-lg">
        {currentQuestion && (
          <>
            <p className="mb-6 text-lg sm:text-xl text-[#f27d0c] font-semibold transition-colors duration-300 ease-in-out text-center">
              {currentQuestion.question}
            </p>
            <ul className="w-full px-4 sm:px-6">
              {currentQuestion.options.map((option, index) => {
                const isSelected = selectedAnswers[currentQuestionIndex] === index;
                const isCorrect = index === currentQuestion.answer;
                const isAnswerMarked =
                  isSubmitted && (isSelected || index === currentQuestion.answer);

                return (
                  <li
                    key={index}
                    onClick={() => handleAnswerClick(index)}
                    className={`p-3 sm:p-4 rounded-md cursor-pointer mb-3 text-center font-medium text-white transition-colors duration-300 ease-in-out ${
                      isSelected
                        ? 'bg-blue-600 hover:bg-blue-500' // Add color for selected option
                        : isAnswerMarked
                        ? isCorrect
                          ? 'bg-green-600 hover:bg-green-500'
                          : 'bg-red-600 hover:bg-red-500'
                        : 'bg-[#3a3a3a] hover:bg-[#4a4a4a] text-[#cccccc]'
                    }`}
                  >
                    {option}
                  </li>
                );
              })}
            </ul>
          </>
        )}

        <div className="flex justify-between w-full px-4 sm:px-6 mb-4">
          <button
            onClick={handlePrev}
            disabled={currentQuestionIndex === 0 || isSubmitted}
            className="text-[0.85rem] sm:text-[0.9rem] md:text-[1rem] bg-gradient-to-r from-yellow-600 via-amber-700 to-amber-800 text-white py-2 px-6 rounded-md cursor-pointer text-center"
          >
            Prev
          </button>
          <button
            onClick={handleNext}
            disabled={currentQuestionIndex === parsedQuizData.length - 1 || isSubmitted}
            className="text-[0.85rem] sm:text-[0.9rem] md:text-[1rem] bg-gradient-to-r from-yellow-600 via-amber-700 to-amber-800 text-white py-2 px-6 rounded-md cursor-pointer text-center"
          >
            Next
          </button>
        </div>

    
        {!isSubmitted && (
          <button
            onClick={handleSubmit}
            className="text-[0.85rem] sm:text-[0.9rem] md:text-[1rem] bg-gradient-to-r from-yellow-600 via-amber-700 to-amber-800 text-white py-2 px-6 rounded-md cursor-pointer text-center mt-4"
          >
            Submit Quiz
          </button>
        )}

        {/* Show Score and Results after Submission */}
        {isSubmitted && (
          <div className="mt-6 text-center text-white">
            <p className="text-xl font-semibold mb-4">Your Score: {score} / {parsedQuizData.length}</p>
            {parsedQuizData.map((quiz, index) => {
              const selectedAnswer = selectedAnswers[index];
              const isCorrect = selectedAnswer === quiz.answer;
              return (
                <div key={index} className="mb-4">
                  <p>{quiz.question}</p>
                  <div className="flex flex-col items-center">
                    {quiz.options.map((option, optionIndex) => {
                      const isSelected = selectedAnswer === optionIndex;
                      const isRightAnswer = optionIndex === quiz.answer;
                      return (
                        <button
                          key={optionIndex}
                          className={`p-2 sm:p-3 rounded-md mt-2 text-center font-medium transition-colors duration-300 ease-in-out ${
                            isSelected
                              ? isRightAnswer
                                ? 'bg-green-600 text-white'
                                : 'bg-red-600 text-white'
                              : isRightAnswer
                              ? 'bg-green-300 text-white'
                              : 'bg-[#3a3a3a] text-[#cccccc]'
                          }`}
                        >
                          {option}
                        </button>
                      );
                    })}
                  </div>
                  <p className={`text-${isCorrect ? 'green' : 'red'}-500 mt-2`}>
                    {isCorrect ? 'Correct!' : `Wrong! Correct answer: ${quiz.options[quiz.answer]}`}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Display;
