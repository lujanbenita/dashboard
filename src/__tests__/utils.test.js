import { currentSeason } from "../utils/currentSeason"
import { formatNumberThousands, kFormatter } from "../utils/formatNumbers"

describe("testing utils", () => {
  test("currentSeason", () => {
    const res = currentSeason()
    expect(res.name).toBe("Autumn") // Winter, Summer, Autumn, Spring
  })

  test("formatNumberThousands", () => {
    expect(formatNumberThousands(123)).toBe("123")
    expect(formatNumberThousands(1234)).toBe("1.234")
    expect(formatNumberThousands(12345)).toBe("12.345")
    expect(formatNumberThousands(123456)).toBe("123.456")
    expect(formatNumberThousands(1234567)).toBe("1.234.567")
  })

  test("kFormatter", () => {
    expect(kFormatter(123)).toBe("123")
    expect(kFormatter(1234)).toBe("1.2k")
    expect(kFormatter(12345)).toBe("12.3k")
    expect(kFormatter(123456)).toBe("123.5K")
    expect(kFormatter(1234567)).toBe("1.2M")
    expect(kFormatter(1234568)).toBe("12.3M")
    expect(kFormatter(12345689)).toBe("1.2G")
  })
})
