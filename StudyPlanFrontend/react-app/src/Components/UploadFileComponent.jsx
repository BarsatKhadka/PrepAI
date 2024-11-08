import React, { useState } from 'react';
import axios from 'axios';



export const UploadFileComponent = () => {
    const formatResponse = (response) => {
        return response.split('\n').map((line, index) => <p key={index}>{line}</p>);
      };
  const [file, setFile] = useState(null);
  const [response, setResponse] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!file) {
      alert("Please select a file.");
      return;
    }

    

    const formData = new FormData();
    formData.append('file', file);

    try {
      
      const openApiKey = process.env.REACT_APP_OPENAPI_KEY;
      
      const result = await axios.post('http://localhost:8080/api/study-plan/generate', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer `+openApiKey, // Using the API key from .env
        },
      });
      setResponse(result.data);
    } catch (error) {
      console.error('Error uploading the file:', error);
      setResponse('An error occurred while generating the study plan.');
    }
  };

  return (
    <div>
      <h2>Upload a PDF to Generate a Study Plan</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" accept=".pdf" onChange={handleFileChange} />
        <button type="submit">Upload and Generate Study Plan</button>
      </form>
      {response && (
        <div>
          <h3>Generated Study Plan:</h3>
          <p>{formatResponse(response)}</p>
        </div>
      )}
      </div>

  );
};

export default UploadFileComponent;
