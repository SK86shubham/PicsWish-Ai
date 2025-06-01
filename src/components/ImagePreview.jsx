
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid'; // or /outline if you want the outline version

import Loading from "./Loading";

const ImagePreview = (props) => {
    return (
        <div className=" mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
            {/* Original Image */}
            <div className="bg-zinc-800 shadow-lg rounded-xl overflow-hidden">
                <h2 className="text-xl font-semibold text-center bg-black text-gray-100 py-2">
                    Original Image
                </h2>

                {props.uploaded ? (
                    <img
                        src={props.uploaded}
                        alt="Original"
                        className="w-full h-auto object-contain"
                    />
                ) : (
                    <div className="flex items-center justify-center h-80 bg-zinc-800">
                        No Image Selected
                    </div>
                )}
            </div>

            {/* Enhanced Image */}
            <div className="bg-zinc-800 shadow-lg rounded-xl overflow-hidden">
                <h2 className="text-xl font-semibold text-center bg-blue-800 text-white py-2">
                    Enhanced Image
                </h2>

                {props.enhanced && !props.loading ? (
                    <div className="flex flex-col items-center">
                        <img
                            src={props.enhanced}
                            alt="Enhanced"
                            className="w-full h-auto object-contain"
                        />

                        {/* Download Button */}
                        <a
                            href={props.enhanced}
                            download="enhanced-image.jpg"
                            title="Download Image"
                            className="mt-4 p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
                        >
                            <ArrowDownTrayIcon className="w-6 h-6" />
                        </a>
                    </div>
                ) : props.loading ? (
                    <Loading />
                ) : (
                    <div className="flex items-center justify-center h-80 bg-zinc-800">
                        No Enhanced Image
                    </div>
                )}
            </div>
        </div>
    );
};

export default ImagePreview;
