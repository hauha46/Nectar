import { VoiceCollection } from "@/types/input";
import { SoundHigh, SoundOff } from "iconoir-react";
import { useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function VoiceSection({ voices }: VoiceCollection) {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <section className="p-6">
      <p className="text-l font-bold font-sans mb-4 text-red-500">
        AI Voice - Coming Soon
      </p>
      <h2 className="text-2xl font-bold font-sans mb-4 text-white">
        Hear your Companions!
      </h2>
      <div className="w-full max-w-sm mb-4 space-between">
        <p className="text-sm font-bold text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
        <div>
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="flex items-center rounded-full py-1 px-3"
          >
            {isMuted ? <SoundHigh /> : <SoundOff />}
          </button>
        </div>
      </div>
      <div className="flex justify-center bg-zinc-800 rounded-lg h-96"></div>
    </section>
  );
}
