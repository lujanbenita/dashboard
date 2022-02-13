/// <reference types="cypress" />

describe("themes ", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3010/")
  })

  it("init page", () => {
    cy.get(".custom").should("exist")
    cy.get(".custom").find("button").should("have.length", 4)
    cy.get(".custom button").first().should("have.class", "Mui-selected")
    cy.get("main").should("have.class", "theme__blue")
  })

  it("change", () => {
    cy.get(".custom button").eq(1).should("contain", "Red").click()
    cy.get("main").should("have.class", "theme__red")

    cy.get(".custom button").eq(2).should("contain", "Dark").click()
    cy.get("main").should("have.class", "theme__dark")

    cy.get(".custom button").last().should("contain", "Green").click()
    cy.get("main").should("have.class", "theme__green")
  })
})
