import React from "react";

export default function ResultScreen({ selectedOptions, onRestart }: { selectedOptions: string[], onRestart: () => void }) {
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
        <div className="text-black flex flex-col items-center">
            <h1>Selected Options: {selectedOptions.join(', ')}</h1>
            <h1>MBTI Results: {mbtiResults}</h1>
            <button
                className="px-4 py-2 bg-blue-500 text-white rounded-md mt-4"
                onClick={onRestart}
            >
                Restart
            </button>
        </div>
    )
}
