'use client'
import { useState } from "react";
import QuestionComponent from "./components/quiz";
import ResultScreen from "./components/result";


export default function Home() {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleNextQuestion = (options: string[]) => { // Modified handleNextQuestion to receive selected options
    setSelectedOptions(options); // Update selectedOptions state
    setQuestionNumber(questionNumber + 1);
  }
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24 bg-white">
      {questionNumber < 12 ? (
        <QuestionComponent onNextQuestion={handleNextQuestion} />
      ) : (
        <ResultScreen selectedOptions={selectedOptions} /> // Pass selectedOptions as prop to ResultScreen
      )}
    </main>
  );
}