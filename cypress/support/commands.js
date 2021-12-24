// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

Cypress.Commands.add("weatherIntercepFetch", () => {
  cy.intercept(
    "GET",
    "https://api.weatherapi.com/v1/forecast.json?key=19cbfb1bd95b42d0823101047210910&q=Valencia&days=3&aqi=no&alerts=no",
    {
      fixture: "weather/getApiWeather.json",
      statusCode: 200,
    }
  ).as("weather")
  cy.intercept("GET", "https://ipinfo.io/?token=b770213b4baeaf", {
    fixture: "weather/getIpInfo.json",
    statusCode: 200,
  }).as("ipInfo")
  cy.wait(["@weather", "@ipInfo"])
})

Cypress.Commands.add("cryptosIntercepFetch", () => {
  cy.intercept(
    "GET",
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&ids=solana%2C%20bitcoin%2Ccardano%2C%20ethereum%2Cpolkadot%2C%20dogecoin%2Cshiba-inu%2Cavalanche-2%2Calgorand%2Cavaterra&order=market_cap_desc&per_page=20&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C48h%2C7d",
    {
      fixture: "cryptos/getMain.json",
      statusCode: 200,
    }
  ).as("cryptos")

  cy.wait("@cryptos")
})
