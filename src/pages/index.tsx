import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const options = [
    { id: 1, label: "♀ Girls", href: "/girls", img: "/girls.jpg" },
    { id: 2, label: "☢︎ Anime", href: "/anime", img: "/anime.jpg" },
    { id: 3, label: "♂ Guys", href: "/guys", img: "/guys.jpg" },
  ];

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-black space-y-6">
      <h1 className="text-white text-xl font-bold">I&apos;m interested in</h1>
      <div className="flex space-x-4">
        {options.map((option) => (
          <Link
            key={option.id}
            href={option.href}
            className="relative block w-48 h-48 rounded-lg overflow-hidden"
          >
            <Image
              src={option.img}
              alt={option.label}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 transform hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex justify-center items-end">
              <span className="text-white text-lg font-bold">
                {option.label}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
