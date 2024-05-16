'use client'
import { useState } from "react";
import { questions } from "../data/questions";
import Envelope from '../../../public/svg/envelope.svg'
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
        const selectedValue = questions[index].options[optionKey]; // Accessing the value using the key
        setSelectedOption(selectedValue);
        setIsLocked(false);
    };

    return (
        <div className="card flex flex-col items-center justify-center  text-black border-8 border-gray-500 rounded-2xl w-[25rem]">
            <Envelope style={{ transform: 'rotate(20deg)' }} />
            <h1 className="mt-6 text-2xl text-center">Question {questions[index].id}</h1>
            <h2 className="mt-4 text-center w-[18rem]">{questions[index].text}</h2>
            <ul className="flex flex-col items-center justify-center text-center">
                {Object.entries(questions[index].options).map(([key, value]) => (
                    <li
                        key={key}
                        className={`mt-3 h-[5rem] w-[17rem] rounded-md cursor-pointer flex items-center justify-center ${selected === key ? "bg-gray-600 text-white" : "bg-gray-300 text-black"
                            }`}
                        onClick={() => handleOptionSelect(key)}
                        onMouseEnter={(e) => (e.target as HTMLElement).classList.add("hover:bg-gray-400")}
                        onMouseLeave={(e) => (e.target as HTMLElement).classList.remove("hover:bg-gray-400")}
                    >
                        {key}
                    </li>
                ))}
            </ul>
            <button
                className="h-16 w-[17rem] mt-3 mb-3 border-2 border-gray-700 rounded-xl"
                onClick={next}
                disabled={isLocked || selectedOption === null}
            >
                Submit
            </button>

            <progress className="progress w-56 progress-primary" value={index} max="12"></progress>
        </div>
    );
}
