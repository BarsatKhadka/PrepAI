import Card from './Card';
import flashCard from '../assets/flashCard.png';

export const VideoSection = () => {
  const cardData = [
    {
      title: "Quizzer",
      description: "Generate interactive quizzes from your study materials to test your knowledge.",
      image: flashCard,
      linkTo: "/UploadPdf",
      buttonText: "Create Quiz"
    },
    {
      title: "FlashCard",
      description: "Create digital flashcards for quick study sessions and memory reinforcement.",
      image: flashCard,
      linkTo: "/flashcards",  // Updated to point to the correct route
      buttonText: "Make Flashcards"
    },
    {
      title: "Study Planner",
      description: "Generate personalized study plans based on your materials and available study time.",
      image: flashCard,
      linkTo: "/study-plan-3",
      buttonText: "Plan My Studies"
    }
  ];

  return (
    <div className="flex flex-wrap mt-6 justify-center gap-4 px-4 sm:px-0">
      {cardData.map((card, index) => (
        <Card 
          key={index}
          title={card.title}
          description={card.description}
          image={card.image}
          linkTo={card.linkTo}
          buttonText={card.buttonText}
        />
      ))}
    </div>
  );
};
