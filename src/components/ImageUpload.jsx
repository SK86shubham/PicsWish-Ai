import { UploadCloud } from "lucide-react";
const ImageUpload = (props) => {
    const ShowImageHandler = (e) => {
        const file = e.target.files[0];

        if (file) {
            props.UploadImageHandler(file);
        }
    };
    return (
        <div className="bg-stone-100 text-white shadow-lg rounded-2x1 p-6 w-half max-w-2x1">
            <label
                htmlFor="fileInput"
                className="block w-full cursor-pointer border-2 border-dashed border-violet-500 rounded-lg p-6 text-center hover:border-[#5409DA] transition-all"
            >
                <input
                    type="file"
                    id="fileInput"
                    className="hidden"
                    onChange={ShowImageHandler}
                />
                <UploadCloud className="w-12 h-12 text-violet-600 mx-auto" />
                <span className="text-lg font-medium text-gray-600">
                    Click and drag to upload your image
                </span>
            </label>
        </div>
    )
}

export default ImageUpload