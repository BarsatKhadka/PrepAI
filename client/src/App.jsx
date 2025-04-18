import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import { VideoSection } from "./components/VideoSection";
import UploadPdf from "./components/UploadPdf";
import StudyPlan3 from "./components/StudyPlan3";
import FlashCardai from "./components/FlashCardai";  // Import the flashcard component

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="w-full max-w-7xl mx-auto pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <VideoSection />
              <FeatureSection />
              <Workflow />
              <Pricing />
              <Testimonials />
            </>
          } />
          <Route path="/UploadPdf" element={<UploadPdf />} />
          <Route path="/study-plan-3" element={<StudyPlan3 />} />
          <Route path="/flashcards" element={<FlashCardai />} />  {/* Add this new route */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;