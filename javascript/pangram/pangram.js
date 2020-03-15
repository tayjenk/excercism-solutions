//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const ENG_ALPHABET_SIZE = 26

const inAlphabet = (char) => char >= 'a' && char <= 'z'

export const isPangram = (sentence) => {
  if (!sentence) return false
  const letters = new Set()
  for(let char of sentence.toLowerCase()) {
    if(inAlphabet(char)) letters.add(char)
  }
  return letters.size === ENG_ALPHABET_SIZE
};
