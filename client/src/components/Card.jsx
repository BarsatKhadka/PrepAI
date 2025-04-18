import { Link } from 'react-router-dom';

const Card = ({ title, description, image, linkTo, buttonText }) => {
  return (
    <div className="rounded-lg w-full sm:w-[45%] md:w-[30%] border border-gray-700 shadow-lg shadow-black mb-6 p-4 border-white bg-black-800">
      <img 
        src={image} 
        alt={title} 
        className="rounded-t-lg w-full h-40 object-cover mb-4" 
      />
      <h3 className="text-base sm:text-lg font-bold text-orange-400">{title}</h3>
      <p className="text-sm sm:text-base text-gray-300 min-h-[60px]">{description}</p>
      <Link to={linkTo} className="block w-full">
        <button className="mt-4 w-full px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 transition-colors duration-200">
          {buttonText || 'Learn More'}
        </button>
      </Link>
    </div>
  );
};

export default Card;