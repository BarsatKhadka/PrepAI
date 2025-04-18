import { CheckCircle2 } from "lucide-react";
import learningImg from "../assets/CodeWorkFlow1.png"; // You might want to replace this with a more appropriate image

const Workflow = () => {
  const learningWorkflow = [
    {
      title: "Upload Study Materials",
      description: "Upload your lecture notes, textbooks, or any PDF document you want to study from."
    },
    {
      title: "Choose Your Learning Tool",
      description: "Select from quizzes, flashcards, or study plans based on your learning preference."
    },
    {
      title: "AI Analysis & Generation",
      description: "Our AI processes your content and creates personalized learning materials optimized for retention."
    },
    {
      title: "Study & Track Progress",
      description: "Use the generated materials to study effectively and track your improvement over time."
    }
  ];

  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        Simple steps to{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          learning success.
        </span>
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="p-2 w-full lg:w-1/2">
          <img src={learningImg} alt="Learning Workflow" className="rounded-lg shadow-lg" />
        </div>
        <div className="pt-12 w-full lg:w-1/2">
          {learningWorkflow.map((item, index) => (
            <div key={index} className="flex mb-12">
              <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
