import { useRef, useState } from 'react';
import axios from 'axios';
import HeroSectionBarsat from './HeroSectionBarsat';


export const StudyPlan3 = () => {
    
  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');
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
          className="text-[0.7rem] sm:text-[0.75] md:text-sm bg-gradient-to-r from-yellow-600 via-amber-700 to-amber-800 text-white py-2 px-4 rounded-md cursor-pointer text-center"
        >
          Choose PDF File
        </button>

        
        <button
          onClick={handleGenerateFlashcards}
          className="bg-gradient-to-r from-orange-500 to-orange-800 text-white py-2 px-4 rounded-md cursor-pointer text-center"
        >
          Generate Flashcards
        </button>
      </div>

      
      {fileName && (
        <p className="text-[0.7rem] sm:text-[0.75rem] md:text-sm lg:text-base mt-4 text-gray-400 text-center mx-2">
          Selected file: <span className="italic">{fileName}</span>
        </p>
      )}

      
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
