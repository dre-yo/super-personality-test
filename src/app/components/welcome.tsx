
export default function WelcomeScreen({ onStart }: { onStart: () => void }) {
    return (
        <div className="flex flex-col items-center justify-center h-svh w-screen text-center text-black bg-[url('../../public/image/welcome.png')] bg-no-repeat bg-center">
            <h1 className="text-4xl font-bold">What is your</h1>
            <h1 className="mb-4 text-4xl italic font-bold">Super power?</h1>
            <p className="mb-4 font-medium">Learn what powers you possess</p>
            <button
                className="w-40 text-lg border-2 btn btn-outline rounded-3xl"
                onClick={onStart}
            >
                Start
            </button>
        </div>
    );
}