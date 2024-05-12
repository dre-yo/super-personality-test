'use client'
import { useState } from "react";
import { questions } from "../data/questions";

export default function QuestionComponent({ onNextQuestion }: { onNextQuestion: (options: string[]) => void }) {
    const [index, setIndex] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
    const [isLocked, setIsLocked] = useState(true);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [selected, setSelected] = useState<string | null>(null);

    const next = () => {
        if (!isLocked) {
            const updatedSelectedOptions = [...selectedOptions, selectedOption!];
            setSelectedOptions(updatedSelectedOptions);
            onNextQuestion(updatedSelectedOptions);
            setIndex(index + 1);
            setSelectedOption(null);
            setSelected(null);
            setIsLocked(true);
        }
    };


    const handleOptionSelect = (optionKey: string) => {
        setSelected(optionKey);
        const selectedValue = questions[index].options[optionKey]; // Accessing the value ("I" or "E") using the key
        setSelectedOption(selectedValue);
        setIsLocked(false);
    };

    return (
        <div className="flex flex-col justify-center text-black border-8 border-gray-500 rounded-2xl">
            <img src="/next.svg" alt="Vercel Logo" />
            <h1 className="mt-6 text-center">Question {questions[index].id}</h1>
            <h2 className="mt-4 text-center w-[18rem]">{questions[index].text}</h2>
            <ul className="w-auto text-center">
                {Object.entries(questions[index].options).map(([key, value]) => (
                    <li
                        key={key}
                        className={`mt-3 h-[4rem] border-2 border-black rounded-md cursor-pointer flex items-center justify-center ${selected === key ? "bg-gray-500" : ""
                            }`}
                        onClick={() => handleOptionSelect(key)}
                        onMouseEnter={(e) => (e.target as HTMLElement).classList.add("hover:bg-gray-200")}
                        onMouseLeave={(e) => (e.target as HTMLElement).classList.remove("hover:bg-gray-200")}
                    >
                        {key}
                    </li>
                ))}
            </ul>
            <button
                className="h-16 mt-3 border-2 border-gray-700 "
                onClick={next}
                disabled={isLocked || selectedOption === null}
            >
                Submit
            </button>
        </div>
    );
}
