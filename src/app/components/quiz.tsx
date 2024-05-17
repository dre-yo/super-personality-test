'use client'
import React, { useState } from "react";
import { questions } from "../data/questions";
import Envelope from '../../../public/image/envelope.svg'

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
            }, 500); // Animation duration
        }
    };

    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden text-black rounded-2xl">
            <img src={Envelope} alt="Envelope" />
            <h1 className="mt-6 text-2xl text-center">Question {questions[index].id}</h1>
            <h2 className="mt-4 text-center w-[18rem]">{questions[index].text}</h2>
            <ul className="flex flex-col items-center justify-center text-center">
                {Object.entries(questions[index].options).map(([key, value]) => (
                    <button
                        key={key}
                        id={key}
                        className={`btn btn-outline border-2 rounded-3xl mt-3 h-[5rem] w-[17rem] font-normal cursor-pointer flex items-center justify-center ${selected === key ? 'bg-[#98e888] text-white' : 'text-black'}`}
                        onClick={() => handleOptionSelect(key)}
                    >
                        {key}
                    </button>
                ))}
            </ul>
            <progress className="w-2/3 mt-3 progress progress-primary" value={index} max="12"></progress>
        </div>
    );
}
