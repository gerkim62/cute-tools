import Link from "next/link";
import { FaArrowAltCircleRight, FaArrowRight } from "react-icons/fa";

type ToolCardProps = {
  title: string;
  description: string;
  link: string;
};

export default function ToolCard({ title, description, link }: ToolCardProps) {
  return (
    <div className="bg-pink-100 p-6 rounded-lg shadow-lg text-left flex flex-col">
      <h2 className="text-pink-600 text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700">{description}</p>

      <Link
        href={link}
        className="text-pink-600 hover:underline hover:text-pink-700 font-semibold transition duration-300 mt-5"
      >
        Open {title} <FaArrowRight className="inline-block align-middle" />
      </Link>
    </div>
  );
}
