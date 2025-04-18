import { useRef, useState } from 'react';
import axios from 'axios';
import pdfToText from 'react-pdftotext';
import FlashCardDisplay from './FlashCardDisplay';

const FlashCardai = () => {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState('');
  const [pdfText, setPdfText] = useState('');
  const [loading, setLoading] = useState(false);
  const [flashcards, setFlashcards] = useState(null);
  const [error, setError] = useState('');

  const handleFileClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const extractText = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    
    setFileName(file.name);
    setFlashcards(null); // Reset previous flashcards
    setError('');
    
    pdfToText(file)
      .then((text) => setPdfText(text))
      .catch((error) => {
        console.error("Failed to extract text from PDF:", error);
        setError("Failed to extract text from the PDF. Please try a different file.");
      });
  };

  const handleGenerateFlashcards = async () => {
    if (!pdfText) {
      setError("No text extracted from PDF. Please upload a valid PDF file.");
      return;
    }

    setLoading(true);
    setError('');
    
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: 'Generate flashcards in valid JSON format with an array of objects, each having "front" and "back" fields. Each front should be a question or concept, and back should be the explanation or answer. Make the content educational and accurate.',
            },
            {
              role: 'user',
              content: `Generate 10 flashcards from the following text:\n${pdfText.substring(0, 6000)}`,
            },
          ],
          max_tokens: 1000,
          temperature: 0.7,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
          },
        }
      );

      let content = response.data.choices[0].message.content;
      // Clean up the response if needed
      content = content.replace(/```json|```/g, '').trim();
      
      try {
        const parsedFlashcards = JSON.parse(content);
        setFlashcards(parsedFlashcards);
      } catch (parseError) {
        console.error("Error parsing flashcards JSON:", parseError);
        setError("Error creating flashcards. The AI response was not in the expected format.");
      }
    } catch (apiError) {
      console.error("Error generating flashcards:", apiError);
      setError("Error communicating with OpenAI API. Please check your API key and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center my-10 px-4 sm:px-6 md:px-8 lg:px-10">
      <div className="w-full max-w-3xl">
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          accept="application/pdf"
          onChange={extractText}
        />

        <div className="flex flex-wrap gap-4 justify-center mb-6">
          <button
            onClick={handleFileClick}
            className="text-sm bg-gradient-to-r from-yellow-600 via-amber-700 to-amber-800 text-white py-3 px-6 rounded-md cursor-pointer text-center"
          >
            Choose PDF File
          </button>

          <button
            onClick={handleGenerateFlashcards}
            disabled={!pdfText || loading}
            className={`text-sm py-3 px-6 rounded-md cursor-pointer text-white text-center
              ${!pdfText || loading 
                ? 'bg-gray-600 cursor-not-allowed' 
                : 'border border-white hover:bg-gray-700'}`}
          >
            Generate Flashcards
          </button>
        </div>

        {fileName && (
          <p className="text-sm mt-2 text-gray-400 text-center">
            Selected file: <span className='italic'>{fileName}</span>
          </p>
        )}

        {error && (
          <div className="mt-4 p-3 bg-red-900/30 border border-red-800 text-red-200 rounded-md text-center">
            {error}
          </div>
        )}

        {loading && (
          <div className="flex justify-center items-center h-64 mt-8">
            <div className="w-16 h-16 border-4 border-orange-600 border-t-transparent rounded-full animate-spin"></div>
            <p className="ml-4 text-orange-500 font-semibold">Generating flashcards...</p>
          </div>
        )}

        {flashcards && !loading && (
          <div className="mt-8">
            <h2 className="text-xl text-center text-orange-500 mb-6">Your Flashcards</h2>
            <FlashCardDisplay flashcards={flashcards} />
          </div>
        )}

        {!fileName && !loading && !flashcards && (
          <div className="flex items-center justify-center h-64 mt-8 border border-gray-700 rounded-lg p-6">
            <p className="text-gray-400 text-center">
              Upload a PDF document to create flashcards for studying. <br />
              The AI will analyze your content and generate helpful study materials.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FlashCardai;