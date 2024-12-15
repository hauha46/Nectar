import { Character } from "@/types/input";
import CharacterCard from "./CharacterCard";

export default function HeroSection({
  characters,
}: {
  characters: Character[];
}) {
  return (
    <section className="p-6">
      <div className="flex flex-col lg:flex-row justify-between p-6 text-white bg-zinc-800 rounded-lg h-96">
        <div className="lg:max-w-xs m-9 lg:mb-0">
          <h2 className="text-xl font-bold mb-4">Are you</h2>
          <h3 className="text-3xl font-bold mb-4">Into a bit danger?</h3>
          <p className="text-sm font-bold mb-8 text-gray-400 line-clamp-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <div className="flex gap-4 mb-4">
            <button
              className="flex items-center bg-gray-700 rounded-full py-2 px-3 text-2xl"
              role="img"
              aria-label="devil"
            >
              😈
            </button>
            <button
              className="flex items-center bg-gray-700 rounded-full py-2 px-3 text-2xl"
              role="img"
              aria-label="devil"
            >
              🔥
            </button>
            <button
              className="flex items-center bg-gray-700 rounded-full py-2 px-3 text-2xl"
              role="img"
              aria-label="devil"
            >
              🤓
            </button>
            <button
              className="flex items-center bg-gray-700 rounded-full py-2 px-3 text-2xl"
              role="img"
              aria-label="devil"
            >
              😎
            </button>
          </div>
        </div>

        <div className="flex space-x-4">
          {characters.map((character: Character) => (
            <div key={character.id} className="bg-gray-800 rounded-lg">
              <CharacterCard
                id={character.id}
                img={character.img}
                name={character.name}
                description={character.description}
                isHero={true}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
