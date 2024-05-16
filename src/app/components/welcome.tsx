export default function WelcomeScreen({ onStart }: { onStart: () => void }) {
    return (
        <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome</h1>
            <p className="mb-4">Are you ready to start the quiz?</p>
            <button
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
                onClick={onStart}
            >
                Start
            </button>
        </div>
    );
}