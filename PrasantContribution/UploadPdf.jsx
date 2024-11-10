import { useRef, useState } from 'react';
import axios from 'axios';
import pdfToText from 'react-pdftotext';

const UploadPdf = ({ onFlashcardsGenerated }) => {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState('');
  const [pdfText, setPdfText] = useState('');
  const [loading, setLoading] = useState(false); // New loading state

  const handleFileClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const extractText = (event) => {
    const file = event.target.files[0];
    setFileName(file.name);
    pdfToText(file)
      .then((text) => setPdfText(text))
      .catch((error) => console.error("Failed to extract text from PDF"));
  };

  const handleGenerateFlashcards = async () => {
    if (!pdfText) {
      console.log("No text extracted from PDF.");
      return;
    }

    setLoading(true); // Start loading
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: 'Generate flashcards in valid JSON format with an array of objects, each having "front" and "back" fields. Each front and back should be no more than 10 words. Front should be a question and back should be an answer to the question.',
            },
            {
              role: 'user',
              content: `Generate flashcards from the following text:\n${pdfText}`,
            },
          ],
          max_tokens: 500,
          temperature: 0.5,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_REACT_APP_OPENAI_API_KEY}`,
          },
        }
      );

      let content = response.data.choices[0].message.content;
      content = content.replace(/```json|```/g, '').trim();
      
      const flashcards = JSON.parse(content);
      if (onFlashcardsGenerated) {
        onFlashcardsGenerated(flashcards, setLoading);
      }
    } catch (error) {
      console.error("Error generating flashcards:", error);
    } finally {
      setLoading(false); // End loading
    }
  };

  return (
    <div className="flex flex-col items-center my-10">
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        accept="application/pdf"
        onChange={extractText}
      />

      <div className="flex space-x-4">
        <button
          onClick={handleFileClick}
          className="text-[0.7rem] sm:text-[0.75rem] md:text-sm bg-gradient-to-r from-yellow-600 via-amber-700 to-amber-800 text-white py-2 px-4 rounded-md cursor-pointer text-center"
        >
          Choose PDF File
        </button>

        <button
          onClick={handleGenerateFlashcards}
          className="text-[0.7rem] sm:text-[0.8rem] md:text-sm py-2 px-4 rounded-md border cursor-pointer text-white border-white text-center"
        >
          Generate Flashcards
        </button>
      </div>

      {fileName && (
        <p className="text-[0.7rem] sm:text-[0.75rem] md:text-sm lg:text-base mt-4 text-gray-400 text-center mx-2">
          Selected file: <span className='italic'>{fileName}</span>
        </p>
      )}

      {loading && (
        // Circular Loading Spinner
        <div className="flex justify-center items-center h-24 mt-4">
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16"></div>
        </div>
      )}

<style jsx>{`
          .loader {
            width: 6rem; /* Adjust size as needed */
            height: 6rem;
            border-radius: 50%;
            border: 6px solid transparent; /* Creates transparent border */
            border-top-color: #b35900; /* Visible part of the border for "snake" effect */
            animation: rotate 1s linear infinite;
          }

          @keyframes rotate {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}</style>
    </div>
  );
};

export default UploadPdf;
