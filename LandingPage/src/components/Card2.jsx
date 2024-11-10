import { Link } from 'react-router-dom';
import flashCard from '../assets/flashCard.png';

export const Card2 = () => {
  return (
    <div className="rounded-lg w-1/3 border border-gray-700 shadow-lg shadow-black mx-2 my-4 p-4 border-white bg-black-800"> {/* Darker background */}
      <img 
        src={flashCard} 
        alt="Flashcard" 
        className="rounded-t-lg w-full h-48 object-cover mb-4" 
      />
      <h3 className="text-lg font-bold text-orange-400">FlashCard</h3>
      <p className="text-gray-300">This is a brief description of the second card.</p> {/* Lighter text for better contrast */}
      <Link to="/UploadPdf">
        <button className="mt-4 px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700"> {/* Slightly darker hover */}
          Go to Study Plan 
        </button>
      </Link>
    </div>
  );
};
