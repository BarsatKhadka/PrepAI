import { useEffect, useRef, useState } from 'react';
import pdfToText from "react-pdftotext";
import OpenAIFileUploader from './OpenAiFileUploader';
import HeroSectionAditya from './HeroSectionAditya';

export const UploadPdf = () => {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState('');
  const [pdfText, setPdfText] = useState('');
  const [file, setFile] = useState(null);
  const [generateQuizzes, setGenerateQuizzes] = useState(false);  // New state to track button click

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
      setGenerateQuizzes(false); // Reset quiz generation when a new file is selected
    }
  };

  const extractText = (file) => {
    pdfToText(file)
      .then((text) => setPdfText(text))
      .catch((error) => console.log("Error extracting PDF text:", error));
  };

  useEffect(() => {
    if (file) {
      extractText(file);
    }
  }, [file]);

  const handleGenerateQuizzes = () => {
    setGenerateQuizzes(true);  // Set this to true when the button is clicked
  };

  return (
    <div className="flex flex-col items-center my-10 px-4 sm:px-6 md:px-8 lg:px-10">
      <HeroSectionAditya/>
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        accept="application/pdf"
        onChange={handleFileChange}
      />
      <div className="flex space-x-4 mb-6">
        <button
          onClick={handleFileClick}
          className="text-[0.85rem] sm:text-[0.9rem] md:text-[1rem] bg-gradient-to-r from-yellow-600 via-amber-700 to-amber-800 text-white py-2 px-6 rounded-md cursor-pointer text-center"
        >
          Choose PDF File
        </button>
        <button
          onClick={handleGenerateQuizzes}
          className="text-[0.85rem] sm:text-[0.9rem] md:text-[1rem] py-2 px-6 rounded-md border cursor-pointer text-white border-white text-center"
        >
          Generate Quizzes
        </button>
      </div>

      {fileName && !generateQuizzes && (
        <div className="flex-col items-center justify-center h-[50vh] w-[90vw] mt-10 rounded-md" >
          <p className="text-[0.85rem] sm:text-[0.9rem] md:text-[1rem] lg:text-base mt-4 text-gray-400 text-center mx-2 mb-4">
            Selected file: <span className='italic'>{fileName}</span>
          </p>
          <div className="flex flex-col items-center justify-center text-center mb-6 ">
            <p className="text-lg text-[#f27d0c] font-semibold mb-4">
              File Uploaded!!
            </p>
            <p className="text-gray-500">
              Please Click "Generate Quizzes" to start generating quizzes.
            </p>
          </div>
        </div>
      )}

      {!pdfText && (
        <div className="flex items-center justify-center h-[50vh] w-[90vw] mt-10 rounded-md">
          <div className="flex flex-col items-center justify-center text-center mb-6 ">
            <p className="text-lg text-[#f27d0c] font-semibold mb-4">
              Welcome! Please upload a PDF file to generate a quiz.
            </p>
            <p className="text-gray-500">
              Get started by choosing a PDF file from your device.
            </p>
          </div>
        </div>
      )}

      {fileName && generateQuizzes && pdfText && (
        <OpenAIFileUploader pdfText={pdfText} />
      )}
    </div>
  );
};

export default UploadPdf;