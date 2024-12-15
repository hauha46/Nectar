import { CharacterCardType } from "@/types/input";
import Image from "next/image";

const CharacterCard = ({
  img,
  name,
  description,
  isHero = false,
}: CharacterCardType) => {
  return (
    <div
      className={`relative max-w-xs mx-auto bg-gray-800 text-white rounded-lg overflow-hidden ${
        isHero ? "h-80" : "h-96"
      }`}
    >
      <Image
        src={img}
        alt="Thumbnail"
        layout="fill"
        objectFit="cover"
        className="inset-0 w-full h-full object-cover"
      />
      <div className="relative p-4 bg-gray-800 bg-opacity-25 h-full flex flex-col justify-end p-4 text-sm">
        <h2 className="font-bold mb-2">{name}</h2>
        <p className="mb-4 line-clamp-2">{description}</p>
      </div>
    </div>
  );
};

export default CharacterCard;
