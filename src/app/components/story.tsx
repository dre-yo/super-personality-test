import React from "react";

export default function CutScene01({ onContinue }: { onContinue: () => void }) {
    // Add whatever content you want for the special page
    return (
        <div className="flex flex-col items-center justify-center h-svh w-screen text-center text-black bg-[url('../../public/image/slide_5.png')] bg-no-repeat bg-center">
            <div className="w-8 mt-[15rem] rotate-45 border-[2px] border-black aspect-square"></div>
            <h1 className="text-black w-screen mt-8 px-[24px] font-semibold text-lg  ">You are brought to another world with lush green fields and purple skies. You look around and notice the envelope is gone, but you see two people nearby.</h1>
            <button className="w-2/3 border-black bg-white/50 btn rounded-3xl h-[4rem] text-[18px] mt-[5rem]" onClick={onContinue}>Continue</button>
            <progress className="w-2/3 mt-8 progress progress-primary" value={3} max="13"></progress>
        </div>

    );
}

