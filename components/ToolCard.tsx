import Link from "next/link";

type ToolCardProps = {
  title: string;
  description: string;
  link: string;
};

export default function ToolCard({ title, description, link }: ToolCardProps) {
  return (
    <div className="bg-pink-100 p-6 rounded-lg shadow-lg text-left">
      <h2 className="text-pink-600 text-2xl font-semibold mb-4">{title}</h2>
      <p className="text-gray-700">{description}</p>

      <Link
        href={link}
        className="text-pink-600 hover:underline hover:text-pink-700 font-semibold transition duration-300"
      >
        Launch {title}
      </Link>
    </div>
  );
}
