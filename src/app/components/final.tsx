export default function CutScene03({ }: {}) {
    // Add whatever content you want for the special page
    return (
        <div className="relative flex flex-col items-center justify-center w-screen text-center text-black bg-white h-svh">
            <div className="absolute top-[21rem]">
                <img
                    className="relative w-8 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 aspect-square"
                    src={'image/number_none.png'}
                    alt="Envelope" />
                <h1 className="text-black w-screen px-[4rem] font-medium italic text-[21px] top-[0rem] relative">You open the envelope...</h1>
            </div>
        </div>
    );

}