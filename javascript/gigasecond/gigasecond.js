//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// one gigasecond = 10^12 milliseconds
const GIGA_TO_MILLI = Math.pow(10,12)

export const gigasecond = time => {
   //convert input time to milliseconds from January 1, 1970 and add one gigasecond
   return new Date(time.getTime() + GIGA_TO_MILLI)
};
