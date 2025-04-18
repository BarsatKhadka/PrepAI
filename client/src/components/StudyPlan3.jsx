import { useRef, useState } from 'react';
import axios from 'axios';
import HeroSectionBarsat from './HeroSectionBarsat';

export const StudyPlan3 = () => {
  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [days, setDays] = useState(10);
  const [response, setResponse] = useState('');

  const handleFileClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFileName(selectedFile.name);
    }
  };

  const handleGenerateFlashcards = async (event) => {
    event.preventDefault();
    if (!file) {
      alert("Please select a file.");
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('days', days);

    try {
      const openApiKey = import.meta.env.VITE_OPENAI_API_KEY;

      const result = await axios.post('http://localhost:8080/api/study-plan/generate', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ` + openApiKey,
        },
      });

      setResponse(result.data); 
    } catch (error) {
      console.error('Error uploading the file:', error);
      setResponse('An error occurred while generating the flashcards.');
    }
  };

  const formatResponse = (response) => {
    return response.split('\n').map((line, index) => <p key={index}>{line}</p>);
  };

  return (
    <div className="flex flex-col items-center my-10">
      <HeroSectionBarsat/>

      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        accept="application/pdf"
        onChange={handleFileChange}
      />

      <div className="flex items-center space-x-4">
        <button
          onClick={handleFileClick}
          className="text-sm sm:text-base bg-gradient-to-r from-orange-500 to-orange-800 hover:from-orange-600 hover:to-orange-900 text-white py-2 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-200 ease-in-out"
        >
          Choose PDF File
        </button>
      </div>

      {fileName && (
        <p className="text-sm mt-4 text-gray-400 text-center mx-2">
          Selected file: <span className="italic">{fileName}</span>
        </p>
      )}

      <div className="mt-8 flex flex-col items-center">
        <p className="text-lg mb-2 text-white-600">Study Plan for(days)</p>
        <input
          type="number"
          min="1"
          value={days}
          onChange={(e) => setDays(e.target.value)}
          className="border rounded-lg p-2 text-center w-20 mb-4"
          placeholder="Days"
        />
        <button
          onClick={handleGenerateFlashcards}
          className="text-sm sm:text-base bg-gradient-to-r from-orange-500 to-orange-800 hover:from-orange-600 hover:to-orange-900 text-white py-2 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-200 ease-in-out"
        >
          Generate Flashcards
        </button>
      </div>

      {response && (
        <div className="mt-8 bg-neutral-800 p-6 rounded-lg text-white">
          <h3 className="text-2xl mb-4">Generated Flashcards:</h3>
          <div className="space-y-2">{formatResponse(response)}</div>
        </div>
      )}
    </div>
  );
};

export default StudyPlan3;
