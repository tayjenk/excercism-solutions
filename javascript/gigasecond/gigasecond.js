//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = time => {
   //convert input time to milliseconds from January 1, 1970
   const milliseconds = time.getTime()
   //add one gigasecond to the current milliseconds
   // one gigasecond = 10^12 milliseconds
   const plusGigaSec = milliseconds + Math.pow(10, 12)
   console.log(time)
   return new Date(plusGigaSec)
};
