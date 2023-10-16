"use client"

import Loading from "@/components/Loading";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const CuteTimetablePage = () => {
const [timetableExists, setTimetableExists] = useState(false);
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
