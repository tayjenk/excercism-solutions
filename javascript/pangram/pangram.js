//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (sent) => {
  if (!sent) return false
  const alpha = new Set()
  for(let letter of sent.toLowerCase()) {
    if(letter.charCodeAt() >= 97 && letter.charCodeAt() <= 122)  alpha.add(letter)
  }
  return alpha.size >= 26
};
