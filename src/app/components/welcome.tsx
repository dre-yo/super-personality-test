
export default function WelcomeScreen({ onStart }: { onStart: () => void }) {
    return (
        <div className="flex flex-col items-center justify-center h-screen w-screen text-center text-black bg-[url('../../public/image/welcome.png')] bg-no-repeat bg-center">
            <h1 className="text-4xl font-bold">What is your</h1>
            <h1 className="text-4xl font-bold italic mb-4">Super power?</h1>
            <p className="mb-4 font-medium">Learn what powers you possess</p>
            <button
                className="btn btn-outline border-2 rounded-3xl w-40 text-lg"
                onClick={onStart}
            >
                Start
            </button>
        </div>
    );
}