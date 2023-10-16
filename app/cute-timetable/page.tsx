"use client"

import Loading from "@/components/Loading";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CuteTimetablePage = () => {
  const [timetableExists, setTimetableExists] = useState(false);
  const router = useRouter();

  if (!timetableExists) {
    router.push("/cute-timetable/upload");
  } else {
    router.push("/cute-timetable/view");
  }
  return <Loading text="Just a sec..." />;
};

export default CuteTimetablePage;
