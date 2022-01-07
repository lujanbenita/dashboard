export const currentSeason = () => {
  const currentDate = new Date()

  var seasonArray = [
    {
      name: "Spring",
      date: new Date(currentDate.getFullYear(), 2, currentDate.getFullYear() % 4 === 0 ? 19 : 20).getTime(),
      url: "url(/images/weather-spring.jpg)",
    },
    {
      name: "Summer",
      date: new Date(currentDate.getFullYear(), 5, currentDate.getFullYear() % 4 === 0 ? 20 : 21).getTime(),
      url: "url(/images/weather-summer.jpg)",
    },
    {
      name: "Autumn",
      date: new Date(currentDate.getFullYear(), 8, currentDate.getFullYear() % 4 === 0 ? 22 : 23).getTime(),
      url: "url(/images/weather-fall.jpg)",
    },
    {
      name: "Winter",
      date: new Date(currentDate.getFullYear(), 11, currentDate.getFullYear() % 4 === 0 ? 20 : 21).getTime(),
      url: "url(/images/weather-winter.jpg)",
    },
  ]

  const season = seasonArray.filter(({ date }) => date <= currentDate).slice(-1)[0] || seasonArray[3]

  return season
}
