import { colorCode, COLORS } from './resistor-color'

describe('ResistorColor', () => {
  describe('Color codes', () => {
    test('Black', () => {
      expect(colorCode("black")).toEqual(0)
    })

    test('White', () => {
      expect(colorCode("white")).toEqual(9)
    })

    test('Orange', () => {
      expect(colorCode("orange")).toEqual(3)
    })
  })

  test('Colors', () => {
    expect(COLORS).toEqual(["black","brown","red","orange","yellow","green","blue","violet","grey","white"])
  })

  test('invalid color input', () => {
    expect(colorCode("magenta")).toEqual(-1)
  })

  test('uppercase color input', () => {
    expect(colorCode("BLACK")).toEqual(0)
  })
})
