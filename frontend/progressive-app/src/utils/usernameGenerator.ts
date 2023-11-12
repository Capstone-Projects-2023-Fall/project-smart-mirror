/**
 * Generates a random username.
 *
 * @returns {string} A randomly generated username.
 */
export default function generateUsername(): string {
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
}
