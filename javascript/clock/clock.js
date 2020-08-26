//
// This is only a SKELETON file for the 'Clock' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Clock {
  constructor(hours = 0, minutes = 0) {
    if(minutes >= 60) {
      hours += Math.floor(minutes / 60)
      minutes = minutes % 60
    }
    this.minutes = String(minutes).padStart(2, '0')
    if(hours < 0) hours = 24 + hours
    if(hours >= 24) hours = hours % 24
    this.hours = String(hours).padStart(2, '0')
  }

  toString() {
    return `${this.hours}:${this.minutes}`
  }

  plus() {
    throw new Error('Remove this statement and implement this function');
  }

  minus() {
    throw new Error('Remove this statement and implement this function');
  }

  equals() {
    throw new Error('Remove this statement and implement this function');
  }
}
