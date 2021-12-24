export const freeTimeCalculate = series => {
  const lengthData = series[0].data.length
  const dataOne = series[0].data
  const dataTwo = series[1].data
  let freeTimeData = []

  for (let index = 0; index < lengthData; index++) {
    const timeData = 24 - dataOne[index] - dataTwo[index]
    freeTimeData.push(timeData)
  }

  return {
    name: "Freetime",
    data: freeTimeData,
  }
}
