import Home from "./components/Home";
const App = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-violet-700 via-black to-cyan-500  text-white py-8 px-4
 ">
            <div className="text-center mb-8">
                <h1 className="text-5xl font-bold text-white mb-2">
                    PixNova AI{" "}
                </h1>
                <p className="text-lg text-cyan-400">
                    Upload your Image and let AI enhance to in seconds!
                </p>
            </div>

            <Home />

            {/* <div className="text-sm text-gray-500 mt-6">
               // Powered By @SheryiansAI
            </div> */}
        </div>
    );
};

export default App;