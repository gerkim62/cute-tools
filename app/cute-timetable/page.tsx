"use client"

import Loading from "@/components/Loading";
import useLocalStorage from "@/hooks/useLocalStorage";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const CuteTimetablePage = () => {
  const [timetableCsv, setTimetableCsv] = useLocalStorage<string | null>(
    "timetableCsv",
    ""
  );
const [timetableExists, setTimetableExists] = useState(()=>!!timetableCsv);
const router = useRouter();

useEffect(() => {
    if (!timetableExists) {
            router.push("/cute-timetable/upload");
        } else {
            router.push("/cute-timetable/view");
        }
}); // added missing comma here

 
  return <Loading text="Just a sec..." />;
};

export default CuteTimetablePage;
