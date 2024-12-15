import { Feature, FeatureCollection } from "@/types/input";
import { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";

export default function GenerateSection({ features }: FeatureCollection) {
  const [selectedFeature, setSelectedFeature] = useState<Feature>();

  useEffect(() => {
    if (features) {
      setSelectedFeature(features[1]);
    }
  }, [features]);

  return (
    <section className="p-6">
      <p className="text-l font-bold font-sans mb-4 text-red-500">
        Generate AI Image
      </p>
      <h2 className="text-2xl font-bold font-sans mb-4 text-white">
        Beautiful erotic art in seconds
      </h2>
      <div className="w-full max-w-sm mb-4">
        <p className="text-sm font-bold text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-between p-6 text-white bg-zinc-800 rounded-lg h-96">
        <div className="m-5">
          <div className=" space-y-0">
            {features.map((feature) => (
              <div
                key={feature.id}
                className={`w-full px-4 py-3 rounded-lg cursor-pointer transition-colors duration-300 relative before:content-[""] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-zinc-900${
                  selectedFeature === feature
                    ? "bg-zinc-700 before:bg-red-500"
                    : " hover:bg-zinc-700"
                }`}
                onClick={() => setSelectedFeature(feature)}
              >
                <h3 className="text-lg">{feature.feature}</h3>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
          <button className="mt-8 bg-red-600 text-white py-2 px-4 rounded-full flex items-center font-sans font-semibold">
            Generate Image
          </button>
        </div>

        <div className="flex space-x-4">
          <div className="bg-gray-800 rounded-lg w-44">
            <CharacterCard
              id={selectedFeature?.id ?? 1}
              img={selectedFeature?.img1 ?? ""}
              name=""
              description=""
              isHero={true}
            />
          </div>
          <div className="bg-gray-800 rounded-lg w-44">
            <CharacterCard
              id={selectedFeature?.id ?? 2}
              img={selectedFeature?.img2 ?? ""}
              name=""
              description=""
              isHero={true}
            />
          </div>
          <div className="bg-gray-800 rounded-lg w-44">
            <CharacterCard
              id={selectedFeature?.id ?? 3}
              img={selectedFeature?.img3 ?? ""}
              name=""
              description=""
              isHero={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
