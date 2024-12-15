import { Fantasy } from "@/types/input";
import { Heart, Play } from "iconoir-react";
import Image from "next/image";

const FantasyCard = ({ img, title, description, plays, likes }: Fantasy) => {
  return (
    <div className="relative max-w-sm mx-auto bg-gray-800 text-white rounded-lg overflow-hidden h-64">
      <Image
        src={img}
        alt="Thumbnail"
        layout="fill"
        objectFit="cover"
        className="inset-0 w-full h-full object-cover"
      />
      <div className="relative p-4 bg-gray-800 bg-opacity-25 h-full flex flex-col justify-end p-4 text-sm">
        <h2 className="font-bold mb-2">{title}</h2>
        <p className="mb-4 line-clamp-2">{description}</p>
        <div className="flex items-center text-gray-400 space-x-4">
          <div className="flex items-center bg-gray-700 rounded-full py-1 px-3">
            <Play className="w-5 h-5 mr-1" /> <span>{plays}</span>
          </div>
          <div className="flex items-center bg-gray-700 rounded-full py-1 px-3">
            <Heart className="w-5 h-5 mr-1" /> <span>{likes}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FantasyCard;
