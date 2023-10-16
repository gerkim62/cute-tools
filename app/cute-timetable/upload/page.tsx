import Link from "next/link";

import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import CustomFileInput from "@/components/CustomCsvInput";

const CsvTimetableUploader = () => {
  const onError = (message: string) => toast.error(message, {});
  const onSuccess = (message: string) => toast.success(message, {});

  //   const [selectedFile, setSelectedFile] = useState<File | null>(null);
  //   const [selectedFileName, setSelectedFileName] = useState<string | null>(null);
  //   const [isError, setIsError] = useState(false);
  //   const [errorMessage, setErrorMessage] = useState<string>("");
  //   const [uploading, setUploading] = useState(false);
  //   const [timetableCsv, setTimetableCsv] = useLocalStorage<string | null>(
  //     "timetableCsv",
  //     ""
  //   );
  //   const router = useRouter();

  //   useEffect(() => {
  //     if (isError) {
  //       onError(errorMessage);
  //     }
  //   }, [isError, errorMessage]);

  //   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     const file = event.target.files?.[0];
  //     setSelectedFile(file || null);
  //     setSelectedFileName(file ? file.name : null);
  //   };

  //   const handleUpload = async () => {
  //     if (selectedFile) {
  //       // Check if the selected file is a CSV
  //       if (!selectedFile.name.endsWith(".csv")) {
  //         setIsError(true);
  //         setErrorMessage("Only CSV files are allowed");
  //         return;
  //       }

  //       console.log("Uploading file:", selectedFile);

  //       // Add your file upload logic here
  //       // Replace this with your actual file upload functionality

  //       setIsError(false);
  //       setErrorMessage("");
  //       setUploading(true);

  //       const csvString = await getCSVStringFrom(selectedFile);
  //       console.log(csvString);
  //       setTimetableCsv(csvString);

  //       setUploading(false);
  //       onSuccess("File uploaded successfully");

  //       router.push("/cute-timetable/view");
  //       // window.location.href = "/cute-timetable/view";
  //     } else {
  //       setIsError(true);
  //       setErrorMessage("No file selected");
  //     }
  //   };

  return (
    <div className="flex flex-col items-center justify-center my-10 min-h-[50vh] text-center">
      <h1 className="text-2xl font-semibold mb-4 text-pink-600">
        Upload Your CSV Timetable
      </h1>

      <p className="text-gray-600 mb-4">
        Upload your CSV timetable to generate a cute timetable
      </p>

      <label
        htmlFor="fileInput"
        className="block font-medium mb-2 text-gray-700"
      >
        Upload your CSV file here
      </label>
      <CustomFileInput
        fileType="csv"
        handleInput={async (csv) => {
          "use server";
          console.log(csv);
        }}
      />
      {/* {isError && <p className="text-red-500 text-sm my-2">{errorMessage}</p>} */}
      {/* <button
        className={`py-2 px-4 rounded font-semibold ${
          selectedFile
            ? "bg-pink-600 hover:bg-pink-700 text-white"
            : "bg-gray-300 cursor-not-allowed text-gray-500"
        }`}
        onClick={handleUpload}
        disabled={!selectedFile || uploading} // Disable the button when uploading
      >
        {uploading
          ? "Uploading..."
          : selectedFile
          ? "Upload CSV Now \u2191"
          : "Choose a file to upload"}
      </button> */}
      <p className="text-sm  mt-10">
        Click this link for instructions on how to get your CSV timetable
      </p>
      <Link
        href="/cute-timetable/download"
        className="underline text-pink-600 hover:underline hover:text-pink-700 capitalize font-semibold transition duration-300"
      >
        How to get your CSV timetable?
      </Link>

      {/* {timetableCsv && (
        <div className="mt-6 max-w-[90vw] bg-pink-100 border border-pink-300 rounded p-4">
          <p className="text-sm mb-2 text-pink-600">
            🎀 You already have a cute timetable uploaded. Click the button
            below to view it! 📅
          </p>
          <Link href="/cute-timetable/view">
            <button className="py-2 px-4 rounded font-semibold bg-pink-600 hover:bg-pink-700 text-white">
              View Timetable
            </button>
          </Link>
        </div>
      )} */}
    </div>
  );
};

export default CsvTimetableUploader;
