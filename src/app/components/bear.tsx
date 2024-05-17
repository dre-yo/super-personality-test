export default function CutScene02({ onContinue }: { onContinue: () => void }) {
    // Add whatever content you want for the special page
    return (
        <div className="flex flex-col items-center justify-center h-svh w-screen text-center text-black bg-[#14031B] relative">
            <div className="absolute top-[21rem]">
                <img
                    className="relative w-8 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 aspect-square"
                    src={'image/number_none_white.png'}
                    alt="Envelope" />
                <h1 className="text-white w-screen px-[4rem] font-medium italic text-[21px] top-[0rem] relative">The bear pounces on you and you blackout.</h1>
                <button className="w-2/3 border-black bg-white/50 btn rounded-3xl h-[4rem] text-[18px] mt-[5rem]" onClick={onContinue}>Continue</button>
            </div>
        </div>
    );

}