//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

//1 earth year = 31,557,600 earth sec
//(mercury) 0.2408467 earth years = x seconds
// x = 31,557,600 earth sec * 0.2408467 earth years
// yearsOld = ageInSec / planetInSec


const ORIBTAL_PERIOD = {
  'mercury' : 0.2408467,
  'venus' : 0.61519726,
  'earth' : 1,
  'mars' : 1.8808158,
  'jupiter' : 11.862615,
  'saturn' : 29.447498,
  'uranus' : 84.016846,
  'neptune' : 164.79132
}

const planetInSec = planet => {
  return 31557600 * ORIBTAL_PERIOD[planet]
}

export const age = (planet, ageInSec) => {
  if(!ORIBTAL_PERIOD[planet]) return undefined
  return Number((ageInSec / planetInSec(planet)).toFixed(2))
};
