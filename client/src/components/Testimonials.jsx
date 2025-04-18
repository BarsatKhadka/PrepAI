import { useState } from "react";

export const Feedback = () => {
  const [feedback, setFeedback] = useState([]); // Start with an empty feedback list
  const [formData, setFormData] = useState({
    text: "",
    user: "",
    company: "",
    image: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.text && formData.user) {
      setFeedback([
        ...feedback,
        { ...formData, resolved: false, id: new Date().getTime() } // Add a unique ID to each feedback
      ]);
      setFormData({ text: "", user: "", company: "", image: "" }); // Clear form after submission
    }
  };

  const handleResolve = (id) => {
    const updatedFeedback = feedback.map((item) =>
      item.id === id ? { ...item, resolved: !item.resolved } : item
    );
    setFeedback(updatedFeedback);
  };

  const handleDisappear = (id) => {
    const updatedFeedback = feedback.filter((item) => item.id !== id);
    setFeedback(updatedFeedback); // Remove feedback item
  };

  return (
    <div className="mt-20 tracking-wide">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
        User Feedback
      </h2>
      
      {/* Feedback Form */}
      <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-10">
        <textarea
          name="text"
          value={formData.text}
          onChange={handleInputChange}
          placeholder="Your feedback"
          required
          className="w-full p-4 border border-neutral-800 rounded-md mb-4"
        />
        <input
          name="user"
          value={formData.user}
          onChange={handleInputChange}
          placeholder="Your name"
          required
          className="w-full p-4 border border-neutral-800 rounded-md mb-4"
        />
        <input
          name="company"
          value={formData.company}
          onChange={handleInputChange}
          placeholder="Company (optional)"
          className="w-full p-4 border border-neutral-800 rounded-md mb-4"
        />
        <input
          name="image"
          value={formData.image}
          onChange={handleInputChange}
          placeholder="Image URL (optional)"
          className="w-full p-4 border border-neutral-800 rounded-md mb-4"
        />
        <button type="submit" className="w-full p-4 bg-neutral-900 text-white rounded-md">
          Submit Feedback
        </button>
      </form>

      {/* Feedback Display */}
      {feedback.length > 0 && (
        <div className="flex flex-wrap justify-center">
          {feedback.map((testimonial) => (
            <div key={testimonial.id} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
              <div
                className={`bg-neutral-900 rounded-md p-6 text-md border border-neutral-800 font-thin ${testimonial.resolved ? 'border-green-500' : ''}`}
              >
                <p>{testimonial.text}</p>
                <div className="flex mt-8 items-start">
                  <img
                    className="w-12 h-12 mr-6 rounded-full border border-neutral-300"
                    src={testimonial.image || "/default-avatar.png"}
                    alt={testimonial.user}
                  />
                  <div>
                    <h6>{testimonial.user}</h6>
                    <span className="text-sm font-normal italic text-neutral-600">
                      {testimonial.company}
                    </span>
                  </div>
                </div>
                {/* Resolve button */}
                <button
                  onClick={() => handleResolve(testimonial.id)}
                  className={`mt-4 px-4 py-2 ${testimonial.resolved ? 'bg-green-500' : 'bg-neutral-600'} text-white rounded-md`}
                >
                  {testimonial.resolved ? "Resolved" : "Mark as Resolved"}
                </button>
                {/* Disappear button */}
                <button
                  onClick={() => handleDisappear(testimonial.id)}
                  className="mt-4 ml-2 px-4 py-2 bg-red-500 text-white rounded-md"
                >
                  Disappear
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Feedback;
