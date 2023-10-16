 // Import the ToolItem component

import ToolCard from "@/components/ToolCard";

export default function Home() {
  // Define an array of tools data
  const toolsData = [
    {
      title: "Cute Timetable",
      description:
        "Easily download and manage your class Timetable using the cute timetable app.",
      link: "/cute-timetable",
    },
    {
      title: "Exam Timetable Extractor",
      description:
        "Effortlessly extract and organize your exam timetable for stress-free preparation.",
      link: "/exam-timetable",
    },
    {
      title: "Courses Selector",
      description:
        "Automatically chooses your courses without having to deal with clashing courses. You can choose which lecturers to avoid as well as which time you prefer.",
      link: "/courses-selector",
    },
    // Add more tools as needed
  ];

  return (
    <main className="text-black flex flex-col justify-center items-center pt-10 mt-8">
      <div className="text-center w-[90%]">
        {/* <h1 className="text-2xl font-semibold mb-4">Welcome...</h1> */}
        <p className="text-lg mb-3">
          Explore a set of Cute Tools made just for You! <br />
          <span className="font-extrabold p-1 pr-0 border-pink-600 rounded-lg text-center overflow-hidden">
            <span className="text-xs text-pink-600">by</span>{" "}
            <span className="font-semibold font-mono mb-2">
              <span className="border-l-2 pl-1 border-pink-200">developer</span>
              .
              <span className="rounded-full border-r-2 pr-2 border-pink-500">
                gerison
              </span>
            </span>
          </span>
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 text-center sm:text-left w-[90%] mb-4">
        {toolsData.map((tool, index) => (
          <ToolCard
            key={index}
            title={tool.title}
            description={tool.description}
            link={tool.link}
          />
        ))}
      </div>
    </main>
  );
}
