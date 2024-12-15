import { Character, RolePlaySectionType } from "@/types/input";
import CharacterCard from "./CharacterCard";

export default function RolePlaySection({
  characters,
  categories,
}: RolePlaySectionType) {
  return (
    <section className="p-6">
      <p className="text-l font-bold font-sans mb-4 text-red-500">
        AI Roleplay
      </p>
      <h2 className="text-2xl font-bold font-sans mb-4 text-white">
        Recommended For You.
      </h2>
      <div className="mb-4">
        <div className="flex overflow-x-auto p-4 space-x-4 hide-scrollbar">
          {categories.map((category) => (
            <button
              key={category}
              className="bg-gray-700 font-sans text-white py-2 px-4 rounded-full whitespace-nowrap"
            >
              {category}
            </button>
          ))}
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
              isHero={false}
            />
          </div>
        ))}
      </div>
      <div className="flex space-x-4 mt-4 justify-center">
        <button className="bg-red-600 text-white py-2 px-4 rounded-full flex items-center font-sans font-semibold">
          Create AI Boyfriend
        </button>
        <button className="bg-gray-600 text-white py-2 px-4 rounded-full flex items-center font-sans font-semibold">
          Show More
        </button>
      </div>
    </section>
  );
}
