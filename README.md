# PrepAI: Smart Learning Assistant

A comprehensive AI-powered learning assistant that transforms PDF documents into interactive quizzes, flashcards, and study plans.

## 🚀 Features

- **Quiz Generator**: Convert PDF documents into interactive quizzes for effective learning
- **Flashcards**: Create digital flashcards from your study materials
- **Study Planner**: Generate personalized study plans based on your content
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **OpenAI Integration**: Powered by GPT-4o for intelligent content analysis

## 💻 Tech Stack

- **Frontend**: React (v19), React Router, Tailwind CSS
- **Backend**: Spring Boot, Java 17
- **AI Integration**: OpenAI API
- **PDF Processing**: PDFBox, react-pdftotext

## 🛠️ Setup Instructions

### Frontend Setup

```bash
# Navigate to the frontend directory
cd frontend

# Install dependencies
npm install

# Create a .env file with your OpenAI API key
echo "VITE_REACT_APP_OPENAI_API_KEY=your_openai_api_key_here" > .env

# Start the development server
npm run dev
```

### Backend Setup

```bash
# Navigate to the backend/apiWrapper directory
cd backend/apiWrapper

# Update the OpenAI API key in application.properties
# openai.api.key=your_openai_api_key

# Start the Spring Boot application
./mvnw spring-boot:run
```

## 📖 How to Use

1. Launch the application and navigate to the home page
2. Choose one of the three main features:
   - **Quizzer**: Generate quizzes from PDF documents
   - **FlashCard**: Create flashcards for study sessions
   - **Study Planner**: Generate a comprehensive study plan
3. Upload a PDF document and wait for the AI to process it
4. Access your personalized learning materials

## 📝 Note on React Router

Make sure the `BrowserRouter` is properly set up in your App component to enable routing between different application features:

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/upload" element={<UploadPdf />} />
          <Route path="/study-plan" element={<StudyPlan />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
```

## 🧪 Features in Development

- Enhanced analytics to track learning progress
- Customizable quiz difficulty levels
- Export functionality for quizzes and flashcards
- Multi-language support

## ⚠️ Troubleshooting

If you encounter any API connectivity issues:
1. Verify your OpenAI API key is correct
2. Check that CORS is properly configured for your environment
3. Ensure the backend server is running on the correct port (8080 by default)

## 🤝 Contributing

Contributions are welcome! Feel free to submit a pull request or open an issue to discuss improvements.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
```# PrepAI: Smart Learning Assistant

A comprehensive AI-powered learning assistant that transforms PDF documents into interactive quizzes, flashcards, and study plans.

## 🚀 Features

- **Quiz Generator**: Convert PDF documents into interactive quizzes for effective learning
- **Flashcards**: Create digital flashcards from your study materials
- **Study Planner**: Generate personalized study plans based on your content
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **OpenAI Integration**: Powered by GPT-4o for intelligent content analysis

## 💻 Tech Stack

- **Frontend**: React (v19), React Router, Tailwind CSS
- **Backend**: Spring Boot, Java 17
- **AI Integration**: OpenAI API
- **PDF Processing**: PDFBox, react-pdftotext

## 🛠️ Setup Instructions

### Frontend Setup

```bash
# Navigate to the frontend directory
cd frontend

# Install dependencies
npm install

# Create a .env file with your OpenAI API key
echo "VITE_REACT_APP_OPENAI_API_KEY=your_openai_api_key_here" > .env

# Start the development server
npm run dev
```

### Backend Setup

```bash
# Navigate to the backend/apiWrapper directory
cd backend/apiWrapper

# Update the OpenAI API key in application.properties
# openai.api.key=your_openai_api_key

# Start the Spring Boot application
./mvnw spring-boot:run
```

## 📖 How to Use

1. Launch the application and navigate to the home page
2. Choose one of the three main features:
   - **Quizzer**: Generate quizzes from PDF documents
   - **FlashCard**: Create flashcards for study sessions
   - **Study Planner**: Generate a comprehensive study plan
3. Upload a PDF document and wait for the AI to process it
4. Access your personalized learning materials

## 📝 Note on React Router

Make sure the `BrowserRouter` is properly set up in your App component to enable routing between different application features:

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/upload" element={<UploadPdf />} />
          <Route path="/study-plan" element={<StudyPlan />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
```

## 🧪 Features in Development

- Enhanced analytics to track learning progress
- Customizable quiz difficulty levels
- Export functionality for quizzes and flashcards
- Multi-language support

## ⚠️ Troubleshooting

If you encounter any API connectivity issues:
1. Verify your OpenAI API key is correct
2. Check that CORS is properly configured for your environment
3. Ensure the backend server is running on the correct port (8080 by default)

## 🤝 Contributing

Contributions are welcome! Feel free to submit a pull request or open an issue to discuss improvements.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.