'use client'
import React, { useEffect, useState } from "react";
import CutScene03 from "./final";

export default function ResultScreen({ selectedOptions, onRestart }: { selectedOptions: string[], onRestart: () => void }) {
    const [showResult, setShowResult] = useState(false);

    useEffect(() => {
        // Show the result screen after 3 seconds
        const timer = setTimeout(() => {
            setShowResult(true);
        }, 1000);

        // Clear the timer on component unmount
        return () => clearTimeout(timer);
    }, []);
    function calculateMBTI(array: string[]) {
        const counts: { [key: string]: number } = {
            I: 0,
            E: 0,
            N: 0,
            S: 0,
            F: 0,
            T: 0,
            P: 0,
            J: 0
        };

        // Count occurrences of each letter
        array.forEach(letter => {
            counts[letter]++;
        });

        // Determine MBTI type
        let mbti = '';
        mbti += counts['I'] >= counts['E'] ? 'I' : 'E';
        mbti += counts['N'] >= counts['S'] ? 'N' : 'S';
        mbti += counts['F'] >= counts['T'] ? 'F' : 'T';
        mbti += counts['P'] >= counts['J'] ? 'P' : 'J';

        return mbti;
    }

    const mbtiResults = calculateMBTI(selectedOptions);

    return (
        <div className="flex flex-col items-center text-black">
            {!showResult ? (
                <CutScene03 />
            ) : (
                <>
                    <h1>Selected Options: {selectedOptions.join(', ')}</h1>
                    <h1>MBTI Results: {mbtiResults}</h1>
                    <button
                        className="w-40 text-lg border-2 btn btn-outline rounded-3xl"
                        onClick={onRestart}
                    >
                        Restart
                    </button>
                </>
            )}
        </div>
    )
}
