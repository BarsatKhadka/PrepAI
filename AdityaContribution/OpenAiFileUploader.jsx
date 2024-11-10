import React, { useState, useEffect } from 'react';
import Display from './Display';
import OpenAI from 'openai';

const OpenAIFileUploader = ({ pdfText }) => {
  const [loading, setLoading] = useState(false);
  const [quizData, setQuizData] = useState(null);
  const [error, setError] = useState('');
  const [hasStarted, setHasStarted] = useState(false);  // Add this state

  const openai = new OpenAI({
    apiKey: import.meta.env.VITE_REACT_APP_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
  });

  const fetchQuizData = async (text) => {
    try {
      setLoading(true);
      setError('');
      setHasStarted(true);  // Set this when fetching starts

      const response = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
          { "role": "user", "content": `I want to prepare for quizzes so that I can remember the contents for examination. Prepare a quiz using the text I have extracted from my source pdf: \n ${text}. Generate the quiz in json format which is an array of objects that have "question", "options" and the right answer index as keys. Don't generate other text except JSON. also remove 3 backticks and json while sending the response` }
        ],
      });

      const quizResponseText = response.choices[0].message.content;
      setQuizData(quizResponseText);
    } catch (error) {
      console.error('Error communicating with OpenAI API', error);
      setError('Error communicating with OpenAI API');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (pdfText && !hasStarted) {  // Only fetch if not already started
      fetchQuizData(pdfText);
    }
  }, [pdfText]);

  return (
    <div className="flex items-center justify-center py-6 px-4 sm:px-6 md:px-8">
      {loading && (
        <div className="flex flex-col items-center justify-center">
          <div className="w-12 h-12 border-4 border-[#f27d0c] border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-[#f27d0c] font-semibold text-lg">Generating quiz...</p>
        </div>
      )}

      {error && <p className="text-red-500 text-center text-sm sm:text-base">{error}</p>}

      {quizData && !loading && !error && <Display quizData={quizData} />}
    </div>
  );

};

export default OpenAIFileUploader;