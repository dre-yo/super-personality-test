'use client'
import { useState } from "react";
import QuestionComponent from "./components/quiz";
import ResultScreen from "./components/result";
import WelcomeScreen from "./components/welcome";

export default function Home() {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [isStarted, setIsStarted] = useState(false);

  const handleStart = () => {
    setIsStarted(true);
  };

  const handleNextQuestion = (options: string[]) => {
    setSelectedOptions(options);
    setQuestionNumber(questionNumber + 1);
  };

  const handleRestart = () => {
    setIsStarted(false);
    setQuestionNumber(0);
    setSelectedOptions([]);
  };

  return (
    <main className="flex flex-col items-center justify-between bg-white min-h-svh">
      {!isStarted ? (
        <WelcomeScreen onStart={handleStart} />
      ) : questionNumber < 12 ? (
        <QuestionComponent onNextQuestion={handleNextQuestion} />
      ) : (
        <ResultScreen selectedOptions={selectedOptions} onRestart={handleRestart} />
      )}
    </main>
  );
}
