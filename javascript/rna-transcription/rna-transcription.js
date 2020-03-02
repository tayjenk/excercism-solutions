//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const COMPLEMENT = {
  G: "C",
  C: "G",
  T: "A",
  A: "U"
}

export const toRna = dna => {
  if (!dna) return ''
  return dna.split('').map(nucleo => nucleo = COMPLEMENT[nucleo]).join('')
}
