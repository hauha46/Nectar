import { Character, Fantasy, Feature, Voice } from "@/types/input";

export const getFantasies = (): Promise<Fantasy[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          img: "/serious-anime-boy-with-dark-hair-wearing-glasses-jacket-city_646632-2055.avif",
          title: "The Teacher Pet",
          description:
            "You are a university math professor. One of your students failed her final, and is looking for some extra credit",
          plays: 55000,
          likes: 64,
        },
        {
          id: 2,
          img: "/saitama.png",
          title: "Late Payment",
          description:
            "Jennifer is your landlord, but unfortunately with recent struggles at work. You've been missing your rent payment",
          plays: 55000,
          likes: 64,
        },
        {
          id: 3,
          img: "/choked.webp",
          title: "Jerk Off Instructions",
          description:
            "Your hot roommate catches you trying to please yourself, and she's not happy about it. ",
          plays: 55000,
          likes: 64,
        },
      ]);
    }, 300);
  });
};

export const getCategories = (): Promise<string[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        "Fantasy",
        "Movie & TV",
        "Game & Anime",
        "Parallel World",
        "Modern",
        "RPG",
        "Novel",
        "Celebrities",
        "Vtuber",
        "Philosophy",
        "Region",
        "Politics",
      ]);
    }, 300);
  });
};

export const getBoyfriendRecommended = (): Promise<Character[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          img: "/naruto.jpg",
          name: "Jennifer Robbie",
          description:
            "Jennifer -- get to know me better. This is what I'm up to when my husband's away",
        },
        {
          id: 2,
          img: "/j_cena.webp",
          name: "Eliza Kennedy",
          description:
            "Hi, my name is Elizabeth, but my friends call me Eliza!, My family is super traditional, so can you",
        },
        {
          id: 3,
          img: "/trump.avif",
          name: "Eunji Kim",
          description:
            "Hii you can call me Eunji. 21 years old from Korea! I love taking photos and admire the ",
        },
        {
          id: 4,
          img: "/luigi.jpg",
          name: "Katie Adams",
          description:
            "Hi I'm Katie -- I'm a cheerleader and I'm ready to cheer you up anytime ;)",
        },
      ]);
    }, 300);
  });
};

export const getFeatures = (): Promise<Feature[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          img1: "/doremon1.webp",
          img2: "/doremon2.jpg",
          img3: "/doremon3.webp",
          feature: "seductive posture, medium breasts",
          description: "High Resolution, Portrait, Body stocking, On All Fours",
        },
        {
          id: 2,
          img1: "/kaiba1.png",
          img2: "/kaiba2.webp",
          img3: "/kaiba3.jpg",
          feature: "focus face, smiling, bunny, pink hair",
          description: "Nectar 2.5 Model, Full HD, Portrait, Bunny Costume",
        },
        {
          id: 3,
          img1: "/mori1.jpg",
          img2: "/mori2.webp",
          img3: "/mori3.webp",
          feature: "seductive posture, medium breasts",
          description: "Full HD, Portrait, Body stocking, On All Fours",
        },
      ]);
    }, 300);
  });
};

export const getVoices = (): Promise<Voice[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          avatar: "/naruto.jpg",
          voice: "seductive posture, medium breasts",
        },
        {
          id: 2,
          avatar: "/naruto.jpg",
          voice: "seductive posture, medium breasts",
        },
        {
          id: 3,
          avatar: "/naruto.jpg",
          voice: "seductive posture, medium breasts",
        },
      ]);
    }, 300);
  });
};

export const getHeroes = (): Promise<Character[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          img: "/sakura.jpg",
          name: "Mellow",
          description: "He is your enemy but you guys are in the same friend",
        },
        {
          id: 2,
          img: "/Usopp.webp",
          name: "Jay smith",
          description: "He is your enemy but you guys are in the same friend",
        },
        {
          id: 3,
          img: "/yamcha.webp",
          name: "Eunji Kim",
          description: "He is your enemy but you guys are in the same friend",
        },
      ]);
    }, 300);
  });
};
