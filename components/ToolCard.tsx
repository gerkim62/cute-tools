import Link from "next/link";

type ToolCardProps = {
  title: string;
  description: string;
  link: string;
};

export default function ToolCard({ title, description, link }:ToolCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg text-left">
      <h2 className="text-pink-500 text-xl font-semibold mb-4">{title}</h2>
      <p className="text-gray-700">{description}</p>
      <Link
        className="text-pink-600 hover:underline hover:text-pink-700 font-semibold transition duration-300 underline"
        href={link}
      >
        Launch {title}
      </Link>
    </div>
  );
}
