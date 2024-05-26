'use client'
import React, { useEffect, useState } from "react";
import CutScene03 from "./final";
import INTJ from "../../../public/svg/intj/Dreamwalking.svg"
import INTP from "../../../public/svg/intp/necromancy.svg"
import ENTJ from "../../../public/svg/entj/super villain.svg"
import ENTP from "../../../public/svg/entp/shapeshifter.svg"
import INFJ from "../../../public/svg/infj/telepathy.svg"
import INFP from "../../../public/svg/infp/weather control.svg"
import ENFJ from "../../../public/svg/enfj/the hero.svg"
import ENFP from "../../../public/svg/enfp/cupid.svg"
import ISTJ from "../../../public/svg/istj/telescopic vision.svg"
import ISFJ from "../../../public/svg/isfj/accelerated healting.svg"
import ESTJ from "../../../public/svg/estj/time travel.svg"
import ESFJ from "../../../public/svg/esfj/animal whisperer.svg"
import ISTP from "../../../public/svg/istp/nine lives.svg"
import ISFP from "../../../public/svg/isfp/pictomancy.svg"
import ESTP from "../../../public/svg/estp/pyromancy.svg"
import ESFP from "../../../public/svg/esfp/power mimcry.svg"
import ReactGA from "react-ga4";

export default function ResultScreen({ selectedOptions, onRestart }: { selectedOptions: string[], onRestart: () => void }) {
    const [showResult, setShowResult] = useState(false);

    useEffect(() => {
        ReactGA.send({
            hitType: 'pageview'
        });
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

    const mbtiSvgs: { [key: string]: React.FC } = {
        INTJ: INTJ,
        INTP: INTP,
        ENTJ: ENTJ,
        ENTP: ENTP,
        INFJ: INFJ,
        INFP: INFP,
        ENFJ: ENFJ,
        ENFP: ENFP,
        ISTJ: ISTJ,
        ISFJ: ISFJ,
        ESTJ: ESTJ,
        ESFJ: ESFJ,
        ISTP: ISTP,
        ISFP: ISFP,
        ESTP: ESTP,
        ESFP: ESFP
    }
    const ResultSvg = mbtiSvgs[mbtiResults];

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'Super Personality Test',
                    text: 'Check out this personality test!',
                    url: 'https://dre-yo.github.io/super-personality-test/',
                });
                console.log('Shared successfully');
            } catch (error) {
                console.error('Sharing failed:', error);
            }
        } else {
            console.error('Web Share API is not supported in this browser.');
        }
    };

    return (
        <div className="flex flex-col items-center text-black">
            {!showResult ? (
                <CutScene03 />
            ) : (
                <>
                    {ResultSvg && <ResultSvg />}
                    <div className="flex flex-row align-center">
                        <button
                            className="w-40 mx-2 my-8 text-lg border-2 btn btn-outline rounded-3xl"
                            onClick={onRestart}
                        >
                            Restart
                        </button>
                        <button
                            className="w-40 mx-2 my-8 text-lg border-2 btn btn-outline rounded-3xl"
                            onClick={handleShare}
                        >
                            Share
                        </button>
                    </div>
                </>
            )}
        </div>
    )
}
