/// <reference types="cypress" />

describe("Weather ", () => {
  beforeEach(() => {
    cy.viewport(1520, 720)
    cy.visit("http://localhost:3000/weather")
  })

  it("init page", () => {
    cy.weatherIntercepFetch()

    cy.contains("h2", "WEATHER")
    cy.get(".layout-dasboard")
      .should("contain", "Temp Next days")
      .and("contain", "Moon")
      .and("contain", "General weather info next days")
      .and("contain", "General weather next days")
      .and("contain", "Current 24h")
  })

  it("Card Weather ", () => {
    cy.get(".card-weather__top").children().should("exist", "text")
    cy.get(".card-weather__temp").children().should("exist", "text")
    cy.get(".card-weather__location").contains("Valencia ")
    cy.get(".card-weather__duration-day").children().should("exist", "text")
  })
})
