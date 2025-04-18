import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";
import { BrainCircuit } from "lucide-react";
import { BookOpen } from "lucide-react";
import { Calendar } from "lucide-react";
import { FileText } from "lucide-react";
import { Sparkles } from "lucide-react";
import { GraduationCap } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "#" },
  { label: "Workflow", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Testimonials", href: "#" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <FileText />,
    text: "PDF Processing",
    description:
      "Upload any PDF document and our system will intelligently extract and process the content for learning purposes."
  },
  {
    icon: <BrainCircuit />,
    text: "AI-Generated Quizzes",
    description:
      "Transform study materials into interactive quizzes that test your knowledge and improve retention with smart question generation."
  },
  {
    icon: <BookOpen />,
    text: "Digital Flashcards",
    description:
      "Create effective study flashcards from your uploaded content to reinforce key concepts and aid memorization."
  },
  {
    icon: <Calendar />,
    text: "Study Planning",
    description:
      "Generate personalized study schedules based on your content and available time for efficient exam preparation."
  },
  {
    icon: <Sparkles />,
    text: "Smart Learning Analytics",
    description:
      "Track your performance across quizzes and study sessions to identify strengths and areas that need improvement."
  },
  {
    icon: <GraduationCap />,
    text: "Cross-Platform Access",
    description:
      "Access your study materials, quizzes, and flashcards across all your devices for learning anytime, anywhere."
  }
];

export const checklistItems = [
  {
    title: "Upload Study Materials",
    description:
      "Upload your lecture notes, textbooks, or any PDF document you want to study from."
  },
  {
    title: "Choose Your Learning Tool",
    description:
      "Select from quizzes, flashcards, or study plans based on your learning preference."
  },
  {
    title: "AI Analysis & Generation",
    description:
      "Our AI processes your content and creates personalized learning materials optimized for retention."
  },
  {
    title: "Study & Track Progress",
    description:
      "Use the generated materials to study effectively and track your improvement over time."
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Access to basic templates",
      "5 Gb Storage",
      "Save up to 2 active study plans.",
      "Access to limited premade flashcard",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Access to all templates",
      "10 Gb Storage",
      "Add multimedia in flashcard",
      "Intermediate analytics",
    ],
  },
  {
    title: "Royal",
    price: "$30",
    features: [
      "Personalized Analytics",
      "Unlimited quiz access across all subjects",
      "Access to premium expert-created flashcard",
      "Integration with calendar apps ",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
