import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLightbulb, FaTimes, FaArrowRight, FaArrowLeft, FaCheck } from "react-icons/fa";

const SocraticMode = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);

    const questions = [
        {
            id: "role",
            question: "What kind of developer are you looking for?",
            options: [
                { value: "frontend", label: "Frontend Developer", icon: "🎨" },
                { value: "backend", label: "Backend Developer", icon: "⚙️" },
                { value: "fullstack", label: "Full Stack Developer", icon: "🚀" },
                { value: "mobile", label: "Mobile Developer", icon: "📱" },
            ],
        },
        {
            id: "tech",
            question: "Which technologies interest you most?",
            options: [
                { value: "react", label: "React / React Native", icon: "⚛️" },
                { value: "java", label: "Java / Spring Boot", icon: "☕" },
                { value: "database", label: "Database / APIs", icon: "🗄️" },
                { value: "all", label: "All of the above", icon: "✨" },
            ],
        },
        {
            id: "purpose",
            question: "What brings you here today?",
            options: [
                { value: "hire", label: "Looking to hire", icon: "💼" },
                { value: "collaborate", label: "Potential collaboration", icon: "🤝" },
                { value: "learn", label: "Learning / Inspiration", icon: "📚" },
                { value: "connect", label: "Just networking", icon: "🌐" },
            ],
        },
    ];

    const getRecommendations = () => {
        const sections = [];

        // Based on role
        if (answers.role === "frontend" || answers.role === "fullstack") {
            sections.push({ name: "Skills", highlight: "Frontend technologies" });
        }
        if (answers.role === "backend" || answers.role === "fullstack") {
            sections.push({ name: "Skills", highlight: "Backend & Database" });
        }
        if (answers.role === "mobile") {
            sections.push({ name: "Skills", highlight: "React Native & Expo" });
        }

        // Based on tech interest
        if (answers.tech === "react" || answers.tech === "all") {
            sections.push({ name: "Projects", highlight: "Portfolio & Todo Apps" });
        }
        if (answers.tech === "java" || answers.tech === "all") {
            sections.push({ name: "Projects", highlight: "Java Full Stack Project" });
        }

        // Based on purpose
        if (answers.purpose === "hire" || answers.purpose === "collaborate") {
            sections.push({ name: "Contact", highlight: "Get in touch" });
            sections.push({ name: "About", highlight: "Who I am" });
        }
        if (answers.purpose === "learn") {
            sections.push({ name: "Projects", highlight: "All projects" });
        }

        return sections;
    };

    const handleAnswer = (questionId, value) => {
        setAnswers((prev) => ({ ...prev, [questionId]: value }));

        if (currentStep < questions.length - 1) {
            setCurrentStep((prev) => prev + 1);
        } else {
            setShowResults(true);
        }
    };

    const handleBack = () => {
        if (currentStep > 0) {
            setCurrentStep((prev) => prev - 1);
        }
    };

    const handleReset = () => {
        setCurrentStep(0);
        setAnswers({});
        setShowResults(false);
    };

    const scrollToSection = (sectionName) => {
        const element = document.getElementById(sectionName.toLowerCase());
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setIsOpen(false);
        }
    };

    const recommendations = getRecommendations();

    return (
        <>
            {/* Floating Trigger Button */}
            <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: "spring" }}
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            >
                <FaLightbulb className="text-white text-xl group-hover:rotate-12 transition-transform" />
                <span className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-pulse" />
            </motion.button>

            {/* Modal */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                        onClick={() => setIsOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: "spring", duration: 0.5 }}
                            onClick={(e) => e.stopPropagation()}
                            className="w-full max-w-lg bg-gray-900 rounded-2xl border border-gray-700 shadow-2xl overflow-hidden"
                        >
                            {/* Header */}
                            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-6 border-b border-gray-700">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                            <FaLightbulb className="text-yellow-400" />
                                            Discover Mode
                                        </h3>
                                        <p className="text-gray-400 text-sm mt-1">
                                            Let me guide you to what you're looking for
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="p-2 text-gray-400 hover:text-white transition-colors"
                                    >
                                        <FaTimes />
                                    </button>
                                </div>

                                {/* Progress Bar */}
                                {!showResults && (
                                    <div className="mt-4 h-1 bg-gray-700 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                                            className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                                        />
                                    </div>
                                )}
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <AnimatePresence mode="wait">
                                    {!showResults ? (
                                        <motion.div
                                            key={currentStep}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <p className="text-gray-400 text-sm mb-2">
                                                Question {currentStep + 1} of {questions.length}
                                            </p>
                                            <h4 className="text-lg font-semibold text-white mb-6">
                                                {questions[currentStep].question}
                                            </h4>

                                            <div className="space-y-3">
                                                {questions[currentStep].options.map((option) => (
                                                    <motion.button
                                                        key={option.value}
                                                        whileHover={{ scale: 1.02 }}
                                                        whileTap={{ scale: 0.98 }}
                                                        onClick={() => handleAnswer(questions[currentStep].id, option.value)}
                                                        className={`w-full p-4 rounded-xl text-left transition-all flex items-center gap-4 ${answers[questions[currentStep].id] === option.value
                                                                ? "bg-blue-500/20 border-blue-500"
                                                                : "bg-gray-800 hover:bg-gray-700 border-gray-700"
                                                            } border`}
                                                    >
                                                        <span className="text-2xl">{option.icon}</span>
                                                        <span className="text-white font-medium">{option.label}</span>
                                                    </motion.button>
                                                ))}
                                            </div>

                                            {/* Navigation */}
                                            {currentStep > 0 && (
                                                <button
                                                    onClick={handleBack}
                                                    className="mt-4 flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                                                >
                                                    <FaArrowLeft /> Back
                                                </button>
                                            )}
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.4 }}
                                        >
                                            <div className="text-center mb-6">
                                                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                                    <FaCheck className="text-green-400 text-2xl" />
                                                </div>
                                                <h4 className="text-xl font-bold text-white mb-2">
                                                    Perfect! Here's what I recommend:
                                                </h4>
                                                <p className="text-gray-400 text-sm">
                                                    Based on your interests, check out these sections:
                                                </p>
                                            </div>

                                            <div className="space-y-3">
                                                {recommendations.map((rec, index) => (
                                                    <motion.button
                                                        key={index}
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: index * 0.1 }}
                                                        onClick={() => scrollToSection(rec.name)}
                                                        className="w-full p-4 rounded-xl bg-gray-800 hover:bg-gray-700 border border-gray-700 text-left transition-all flex items-center justify-between group"
                                                    >
                                                        <div>
                                                            <span className="text-white font-medium">{rec.name}</span>
                                                            <span className="text-gray-400 text-sm ml-2">
                                                                — {rec.highlight}
                                                            </span>
                                                        </div>
                                                        <FaArrowRight className="text-gray-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                                                    </motion.button>
                                                ))}
                                            </div>

                                            <button
                                                onClick={handleReset}
                                                className="mt-6 w-full py-3 rounded-xl border border-gray-700 text-gray-400 hover:text-white hover:border-gray-600 transition-all"
                                            >
                                                Start Over
                                            </button>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default SocraticMode;
