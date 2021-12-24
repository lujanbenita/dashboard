import { DATA_DAILY_SLEEP_TRACKER } from "../data/dataDailySleepTracker"
import { freeTimeCalculate } from "../utils/freeTimeCalculate"

describe("testing methods ", () => {
  it("freeTime", () => {
    const res = freeTimeCalculate(DATA_DAILY_SLEEP_TRACKER)
    expect(res.name).toBe("Freetime")
    expect(res.data).toEqual([9, 6, 6, 8, 10, 16, 7, 11, 2, 9, 9, 5, 9])
  })
})
