//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (n, totalSteps = 0) => {
  //console.log({totalSteps})
  if(!n || n < 0) throw new Error("Only positive numbers are allowed")
  if(n === 1) return totalSteps
  if(n % 2 === 0) return steps(n / 2, totalSteps += 1)
  return steps(n * 3 + 1, totalSteps += 1)
};
