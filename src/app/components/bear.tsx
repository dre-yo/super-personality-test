export default function CutScene02({ onContinue }: { onContinue: () => void }) {
    // Add whatever content you want for the special page
    return (
        <div className="flex flex-col items-center justify-center h-svh w-screen text-center text-black bg-[url('../../public/image/slide_5.png')] bg-no-repeat bg-center">
            <img
                className="absolute w-8 aspect-square place-self-center bottom-[22rem]"
                src={'image/number_none_white.png'}
                alt="Envelope" />
            <div className="absolute top-[21rem]">
                <h1 className="text-black w-screen px-[24px] font-semibold text-lg top-[0rem] relative">You are brought to another world with lush green fields and purple skies. You look around and notice the envelope is gone, but you see two people nearby.</h1>
                <button className="w-2/3 border-black bg-white/50 btn rounded-3xl h-[4rem] text-[18px] mt-[5rem]" onClick={onContinue}>Continue</button>
            </div>
        </div>
    );
}