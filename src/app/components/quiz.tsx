'use client'
import React, { useState } from "react";
import { questions } from "../data/questions";
import Envelope from '../../../public/image/envelope.svg'
import CutScene01 from "./story";
import CutScene02 from "./bear";

export default function QuestionComponent({ onNextQuestion }: { onNextQuestion: (options: string[]) => void }) {
    const [index, setIndex] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [selected, setSelected] = useState<string | null>(null);

    const next = (selectedValue: string) => {
        const updatedSelectedOptions = [...selectedOptions, selectedValue];
        setSelectedOptions(updatedSelectedOptions);
        onNextQuestion(updatedSelectedOptions);
        setIndex(index + 1);
        setSelectedOption(null);
        setSelected(null);
    };

    const handleOptionSelect = (optionKey: string) => {
        setSelected(optionKey);
        const selectedValue = questions[index].options[optionKey]; // Accessing the value using the key
        setSelectedOption(selectedValue);

        const button = document.getElementById(optionKey);
        if (button) {
            button.classList.add('selected'); // Add animation class
            setTimeout(() => {
                button.classList.remove('selected');
                next(selectedValue);
            }, 250); // Animation duration
        }
    };

    if (index === 3) {
        return <CutScene01 onContinue={() => setIndex(4)} />;
    }
    if (index === 12) {
        return <CutScene02 onContinue={() => setIndex(13)} />;
    }


    return (
        <div className="flex flex-col items-center justify-center w-screen overflow-hidden text-black h-svh rounded-2xl">
            <div className="absolute h-[15rem] top-[1.5rem]">
                <img
                    className="object-contain w-full h-full"
                    src={questions[index].image}
                    alt="Envelope" />
            </div>

            <div className="absolute flex flex-col items-center justify-start top-[17.5rem]">
                <div className="relative flex items-center justify-center mb-6">
                    <div className="rotate-45 border-[1px] border-black aspect-square w-[1.75rem] flex items-center justify-center">
                        <p className="rotate-[-45deg] text-[13px]">{questions[index].id}</p>
                    </div>
                </div>
                <h2 className="px-[20px] text-lg font-medium text-center">
                    {questions[index].text}
                </h2>
                <ul className="flex flex-col items-center justify-center text-center">
                    {Object.entries(questions[index].options).map(([key, value]) => (
                        <button
                            key={key}
                            id={key}
                            className={`btn btn-outline text-base border-1 rounded-3xl mt-3 h-[5rem] w-[17rem] font-normal flex items-center justify-center ${selected === key ? 'bg-primary-muted text-white' : 'text-black'}`}
                            onClick={() => handleOptionSelect(key)}
                        >
                            {key}
                        </button>
                    ))}
                </ul>
            </div>
            <progress className="absolute w-2/3 bottom-4 progress progress-primary" value={index} max="13"></progress>
        </div>
    );
}
