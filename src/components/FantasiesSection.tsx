import { Fantasy, FantasyCollection } from "@/types/input";
import FantasyCard from "./FantasyCard";

export default function FantasiesSection({ fantasies }: FantasyCollection) {
  return (
    <section className="p-6">
      <p className="text-l font-bold font-sans mb-4 text-red-500">
        AI Fantasies
      </p>
      <h2 className="text-2xl font-bold font-sans mb-4 text-white">
        Live your dream experience.
      </h2>
      <div className="w-full max-w-sm mb-4">
        <p className="text-sm font-bold text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
      </div>
      <div className="flex space-x-4">
        {fantasies.map((fantasy: Fantasy) => (
          <div key={fantasy.id} className="bg-gray-800 rounded-lg">
            <FantasyCard
              id={fantasy.id}
              img={fantasy.img}
              title={fantasy.title}
              description={fantasy.description}
              plays={fantasy.plays}
              likes={fantasy.likes}
            />
          </div>
        ))}
      </div>
      <div className="flex space-x-4 mt-4 justify-center">
        <button className="bg-red-600 text-white py-2 px-4 rounded-full flex items-center font-sans font-semibold">
          Create Fantasy
        </button>
        <button className="bg-gray-600 text-white py-2 px-4 rounded-full flex items-center font-sans font-semibold">
          Show More
        </button>
      </div>
    </section>
  );
}
