"use client";

import useLocalStorage from "@/hooks/useLocalStorage";
import React, { useEffect, useState } from "react";
// import { cleanCSVString, getCourses } from "../helpers";
import { useFullscreen } from "@/hooks/useFullscreen";
import Timetable from "@/components/Timetable";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import PropertiesCard from "@/components/PropertiesCard";
import Loading from "@/components/Loading";
import { cleanCSVString, getCourses } from "./helpers";

const CuteTimetablePage = () => {
  const [timetableCsv, setTimetableCsv] = useLocalStorage<string | null>(
    "timetableCsv",
    ""
  );

  const [loading, setLoading] = useState(true);

  const [showingPropertiesFor, setShowingPropertiesFor] = useState<Course>();

  const [courses, setCourses] = useState(null);
  const { ref, toggle, fullscreen } = useFullscreen();
  useEffect(() => {
    if (timetableCsv) {
      const cleanedCsv = cleanCSVString(timetableCsv);
      const courses = getCourses(cleanedCsv);
      console.log(courses);
      setCourses(courses as any);
      // setShowingPropertiesFor(courses[0]);
    }
    setLoading(false);
  }, [timetableCsv]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        {/* <p className="text-xl font-bold">Loading...</p> */}
        <Loading text="Just a sec..." />
      </div>
    );
  }

  return courses ? (
    <div className="mt-[60px] lg:mt-20 mx-auto w-[100vw] lg:w-[80vw]">
      <Timetable
        ref={ref}
        setShowingPropertiesFor={setShowingPropertiesFor}
        showingPropertiesFor={showingPropertiesFor}
        courses={courses}
        updateUrl="/cute-timetable"
        updateUrlLabel="Update Timetable"
      />

      {showingPropertiesFor && (
        <div
          onClick={() => setShowingPropertiesFor(undefined)}
          className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50"
        >
          <PropertiesCard
            setShowingPropertiesFor={setShowingPropertiesFor}
            course={showingPropertiesFor as any}
            // onClose={() => setShowingPropertiesFor(undefined)}
          />
        </div>
      )}
    </div>
  ) : (
    <div className="-mt-10 p-6 rounded-lg text-black text-center flex flex-col  justify-center items-center min-h-full">
      <p className="text-xl font-bold mb-2">
        You haven&#39;t uploaded your timetable yet
      </p>
      <p className="text-lg mb-4 max-w-lg">
        To view your courses timetable, please click the button below and follow
        the simple steps to upload your file. It takes just a second.
      </p>
      <Link
        href="/cute-timetable"
        className="border px-5 p-2 rounded-md bg-pink-500 text-white shadow-sm flex items-center gap-1 justify-center"
      >
        Go to Upload Timetable <FiArrowRight className="ml-2" />
      </Link>
    </div>
  );
};

export default CuteTimetablePage;
