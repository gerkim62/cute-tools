"use client";

import Link from "next/link";

import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import CustomFileInput from "@/components/CustomCsvInput";
import useLocalStorage from "@/hooks/useLocalStorage";
import { useEffect, useState } from "react";

const CsvTimetableUploader = () => {
  const onError = (message: string) => toast.error(message, {});

  const [selectedCsvString, setSelectedCsvString] = useState<string | null>(
    null
  );
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [uploading, setUploading] = useState(false);
  const [submittedCsv, setSubmittedCsv] = useLocalStorage<string | null>(
    "timetableCsv",
    ""
  );
  const router = useRouter();

  useEffect(() => {
    if (errorMessage) {
      onError(errorMessage);
      setSelectedCsvString(null);
    }
  }, [errorMessage]);

  const handleUpload = async () => {
    setErrorMessage("");

    setSubmittedCsv(selectedCsvString);

    router.push("/cute-timetable/view");
    setUploading(false);
  };

  console.log(errorMessage);

  return (
    <div className="flex flex-col items-center justify-center my-10 min-h-[50vh] text-center mt-20">
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
        expectedHeader={`"Start","End","Mo","Tu","We","Th","Fr","Su","Lab","Lab","Course Code","Course Title","Instructor","Option","Venue","Location","Building"`}
        setErrorMessage={setErrorMessage}
        fileType="csv"
        handleInput={async (csv) => {
          setSelectedCsvString(csv);
          console.log(csv);
        }}
      />
      {errorMessage && (
        <p className="text-red-500 text-sm my-2">{errorMessage}</p>
      )}
      <button
        className={`py-2 px-4 rounded font-semibold ${
          selectedCsvString
            ? "bg-pink-600 hover:bg-pink-700 text-white"
            : "bg-gray-300 cursor-not-allowed text-gray-500"
        }`}
        onClick={handleUpload}
        disabled={!selectedCsvString || uploading} // Disable the button when uploading
      >
        {uploading
          ? "Uploading..."
          : selectedCsvString
          ? "Upload CSV Now \u2191"
          : "Choose a file to upload"}
      </button>
      <p className="text-sm  mt-10">
        Click this link for instructions on how to get your CSV timetable
      </p>
      <Link
        href="/cute-timetable/download"
        className="underline text-pink-600 hover:underline hover:text-pink-700 capitalize font-semibold transition duration-300"
      >
        How to get your CSV timetable?
      </Link>

      {submittedCsv && (
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
      )}
    </div>
  );
};

export default CsvTimetableUploader;
