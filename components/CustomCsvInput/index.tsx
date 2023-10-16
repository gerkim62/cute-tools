"use client";
import toast from "react-hot-toast";
import { useState } from "react";
import { getCSVStringFrom } from "./helpers";

interface CustomFileInputProps {
  handleInput: (csvString:string) => void;
  fileType: "csv";
}


const CustomFileInput: React.FC<CustomFileInputProps> = ({
   handleInput,
  fileType,
}) => {
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);
  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      setSelectedFileName(file.name);
    }

    if (!file) {
      console.error("No file selected.");
      toast.error("No file selected.", {});
    } else if (fileType && !file.name.endsWith(`.${fileType}`)) {
      console.error(`Only ${fileType} files are allowed`);
      toast.error(`Only ${fileType} files are allowed`, {});
    } else {
      try {
      const csvString =await  getCSVStringFrom(file);
      console.log(csvString);
      handleInput(csvString)
      } catch (error) {
        console.error(error);
        toast.error(error.message, {});
      }
    }
  };

  return (
    <div className="flex items-center border rounded-lg overflow-hidden mb-5 max-w-[80%]">
      <label
        htmlFor="fileInput"
        className="px-4 py-2 bg-pink-500 text-white cursor-pointer whitespace-nowrap hover:bg-pink-600"
      >
        Choose File
      </label>
      <input
        id="fileInput"
        type="file"
        accept=".csv"
        className="hidden"
        onChange={handleFileChange}
      />
      <a
        href="#"
        onClick={() => {
          const fileInput = document.getElementById("fileInput");
          if (fileInput) {
            fileInput.click();
          }
        }}
        className="px-2 py-2 text-gray-600 text-ellipsis overflow-clip whitespace-nowrap cursor-pointer"
      >
        {selectedFileName || "No file selected"}
      </a>
    </div>
  );
};

export default CustomFileInput;
