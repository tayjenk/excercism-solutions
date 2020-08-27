export class ResistorColor {
  private colors: string[]
  private COLOR_VALUES = [
    "black",
    "brown",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "violet",
    "grey",
    "white",
  ]

  constructor(colors: string[]) {
    if (colors.length < 2) throw Error("At least two colors need to be present")
    this.colors = colors
  }
  value = (): number => {
    const [colorA, colorB] = this.colors
    const resistorValue: string =
      String(this.COLOR_VALUES.indexOf(colorA)) +
      String(this.COLOR_VALUES.indexOf(colorB))
    return parseInt(resistorValue)
  }
}
