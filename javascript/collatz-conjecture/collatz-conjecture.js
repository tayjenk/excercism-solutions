//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (n, steps = 0) => {
  console.log({steps})
  if(n === 1) return steps
  if(n % 2 === 0) steps(n / 2, steps + 1)
};
