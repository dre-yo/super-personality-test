import React from "react";

export default function CutScene01({ onContinue }: { onContinue: () => void }) {
    // Add whatever content you want for the special page
    return (
        <div className="flex flex-col items-center justify-center h-svh w-screen text-center text-black bg-[url('../../public/image/slide_5.png')] bg-no-repeat bg-center">
            <div className="absolute top-[19rem]">
                <img
                    className="relative w-8 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 aspect-square"
                    src={'image/number_none.png'}
                    alt="Envelope" />
                <h1 className="text-black w-screen px-[24px] font-semibold text-lg top-[0rem] relative">You are brought to another world with lush green fields and purple skies. You look around and notice the envelope is gone, but you see two people nearby.</h1>
                <button className="w-2/3 border-black bg-white/50 btn rounded-3xl h-[4rem] text-[18px] mt-[5rem]" onClick={onContinue}>Continue</button>
            </div>
        </div>
    );
}

