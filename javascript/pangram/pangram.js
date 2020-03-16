//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const ENGLISH_ALPHABET_SIZE = 26

const IN_ALPHABET = /[a-z]/g

export const isPangram = (sentence) => {
  if (!sentence) return false
  const letters = new Set(sentence.toLowerCase().match(IN_ALPHABET))
  return letters.size === ENGLISH_ALPHABET_SIZE
};
