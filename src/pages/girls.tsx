import HeroSection from "@/components/HeroSection";
import Layout from "../components/Layout";
import FantasiesSection from "@/components/FantasiesSection";
import RolePlaySection from "@/components/RolePlaySection";
import VoiceSection from "@/components/VoiceSection";
import GenerateSection from "@/components/GenerateSection";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  getBoyfriendRecommended,
  getCategories,
  getFantasies,
  getFeatures,
  getHeroes,
  getVoices,
} from "@/services/girls";
import { Character, Fantasy, Feature, Voice } from "@/types/input";

export default function Girls() {
  const router = useRouter();
  const [data, setData] = useState({
    heroes: [] as Character[],
    fantasies: [] as Fantasy[],
    categories: [] as string[],
    recommendedBoyfriend: [] as Character[],
    features: [] as Feature[],
    voices: [] as Voice[],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          heroes,
          fantasies,
          categories,
          recommendedBoyfriend,
          features,
          voices,
        ] = await Promise.all([
          getHeroes(),
          getFantasies(),
          getCategories(),
          getBoyfriendRecommended(),
          getFeatures(),
          getVoices(),
        ]);
        setData({
          heroes,
          fantasies,
          categories,
          recommendedBoyfriend,
          features,
          voices,
        });
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  return (
    <Layout>
      <nav className="flex space-x-8 mx-8">
        {[
          { href: "/girls", label: "Girls" },
          { href: "/anime", label: "Anime" },
          { href: "/boys", label: "Boys" },
        ].map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`font-semibold text-lg ${
              router.pathname === href
                ? "text-red-500"
                : "text-white hover:text-red-500"
            }`}
          >
            {label}
          </Link>
        ))}
      </nav>
      <HeroSection characters={data.heroes} />
      <FantasiesSection fantasies={data.fantasies} />
      <RolePlaySection
        categories={data.categories}
        characters={data.recommendedBoyfriend}
      />
      <VoiceSection voices={data.voices} />
      <GenerateSection features={data.features} />
    </Layout>
  );
}
