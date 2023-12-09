export const getRandomUsername = () => {
  const adjectives = [
    "happy",
    "silly",
    "clever",
    "brave",
    "funny",
    "kind",
    "smart",
    "gentle",
    "creative",
    "honest",
    "scared",
    "witty",
    "lovely",
    "shy",
    "timid",
  ];
  const nouns = [
    "cat",
    "dog",
    "bird",
    "lion",
    "tiger",
    "elephant",
    "monkey",
    "panda",
    "dolphin",
    "butterfly",
    "mammoth",
    "axelotl",
    "parrot",
    "donkey",
    "robin",
    "lemur",
    "cheetah",
    "shiba",
    "tanuki",
  ];

  const randomAdjective =
    adjectives[Math.floor(Math.random() * adjectives.length)]!;
  const randomNoun = nouns[Math.floor(Math.random() * nouns.length)]!;

  // capitalize the first character of each word
  const usernameArr = [
    randomAdjective.at(0)?.toUpperCase() + randomAdjective.slice(1),
    randomNoun.at(0)?.toUpperCase() + randomNoun.slice(1),
  ];

  return `${usernameArr.join(" ")}`;
};
