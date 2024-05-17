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
            }, 250); // Animation duration
        }
    };

    return (
        <div className="flex flex-col items-center justify-center w-screen overflow-hidden text-black h-svh rounded-2xl">
            <div className="absolute  h-[15rem] top-[1.5rem]">
                <img
                    className="w-full h-full"
                    src={questions[index].image}
                    alt="Envelope" />
            </div>
            <img
                className="absolute w-8 aspect-square top-[17.5rem]"
                src={questions[index].id}
                alt="Envelope" />
            <div className="flex flex-col fixed items-center justify-start mt-[18rem] border-4 border-black">
                <h2 className="px-4 text-lg text-center md:text-xl lg:text-2xl xl:text-3xl">
                    {questions[index].text}
                </h2>
                <ul className="flex flex-col items-center justify-center text-center">
                    {Object.entries(questions[index].options).map(([key, value]) => (
                        <button
                            key={key}
                            id={key}
                            className={`btn btn-outline border-2 rounded-3xl mt-3 h-[5rem] w-[17rem] font-normal cursor-pointer flex items-center justify-center ${selected === key ? 'bg-primary-muted text-white' : 'text-black'}`}
                            onClick={() => handleOptionSelect(key)}
                        >
                            {key}
                        </button>
                    ))}
                </ul>
            </div>
            <progress className="absolute w-2/3 bottom-6 progress progress-primary" value={index} max="12"></progress>
        </div>
    );
}
