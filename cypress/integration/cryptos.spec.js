/// <reference types="cypress" />

describe("Cryptos ", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3010/cryptos")
  })

  it("init page", () => {
    cy.cryptosIntercepFetch()

    cy.wait(1000)
    cy.get(".layout-dasboard").contains("h2", "CRYPTOS")
    cy.get(".layout-dasboard")
      .should("contain", "rank")
      .and("contain", "coin")
      .and("contain", "last 24h")
      .and("contain", "price")
      .and("contain", "Bitcoin")

    cy.get(".crypto-main__card").should("have.length", "10")
    cy.get(".crypto-main__card").first().find(".crypto-main__card-current").children().should("have.class", "red")
    cy.get(".crypto-main__card").eq(3).find(".crypto-main__card-current").children().should("have.class", "green")
  })

  it("selected crypto and return", () => {
    cy.viewport(1520, 720)
    cy.cryptosIntercepFetch()
    cy.wait(1000)

    cy.intercept("GET", "https://api.coingecko.com/api/v3/coins/bitcoin", {
      fixture: "cryptos/getBitcoin.json",
    }).as("bitcoin")
    cy.intercept("GET", "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=eur&from=1628345411&to=1636301452", {
      fixture: "cryptos/getBitcoin2.json",
    }).as("bitcoin2")

    cy.get(".crypto-main__card").first().click()
    cy.wait(["@bitcoin", "@bitcoin2"])

    cy.get(".crypto__breadcrumb").contains("Bitcoin")
    cy.get(".crypto__head").contains("btc")
    cy.get(".crypto__head").contains("Rank: 2")
    cy.get(".crypto__head").contains("42,646 €")

    cy.get(".crypto__breadcrumb-base").click()
    cy.get(".crypto-main__card").should("have.length", "10")
  })
})
