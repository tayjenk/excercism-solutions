//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const ENGLISH_ALPHABET_SIZE = 26

const inAlphabet = (char) => char >= 'a' && char <= 'z'

export const isPangram = (sentence) => {
  if (!sentence) return false
  const letters = new Set(sentence.toLowerCase())
  letters.forEach(char => {
    if(!inAlphabet(char)) letters.delete(char)
  })

  // const filteredSentence = sentence.toLowerCase().split('').filter(char => inAlphabet(char))
  // const letters = new Set(filteredSentence)

  return letters.size === ENGLISH_ALPHABET_SIZE
};
