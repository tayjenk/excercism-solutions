//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (sentence) => {
  if (!sentence) return false
  const alpha = new Set()
  for(let letter of sentence.toLowerCase()) {
    if(letter >= 'a' && letter <= 'z') alpha.add(letter)
  }
  return alpha.size === 26
};
