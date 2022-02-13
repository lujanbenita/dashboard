/// <reference types="cypress" />

describe("Notes ", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3010/notes")
  })

  it("init page", () => {
    cy.get(".layout-dasboard")
      .should("contain", "NOTES")
      .and("contain", "Simple notes")
      .and("contain", "New Note")
      .and("contain", "Please select a Note or New Note.")

    cy.get(".notes__list").children().should("exist", "text")
    cy.get(".notes__item-title").should("have.class", "green")
    cy.get(".notes__item-date").should("have.class", "blue")
    cy.get(".notes__item").should("have.css", "border-left")
  })

  it("existent and edit", () => {
    cy.contains("This is my first note").click()
    cy.get(".notes__edition").as("editZone")
    cy.get("@editZone").children().should("contain", "Change Note Color").and("contain", "Edit Note")
    cy.get(".notes__edition select").should("have.class", "green").and("contain", "Success")
    cy.get("textarea").clear()
    cy.get("textarea").type("Hi test!!!!")
    cy.get("select").select("Info")
    cy.get(".notes__item-title").contains("Hi test!!!!")
    cy.get(".notes__item").should("have.css", "border-left-color", "rgb(109, 87, 186)")
  })

  it("Create", () => {
    cy.get(".notes__list").children().should("have.length", 1)
    cy.get(".notes__new-note").contains("New Note").click()
    cy.get(".notes__list").children().should("have.length", 2)
    cy.get(".notes__item").last().should("contain", "New note")
    cy.get(".notes__item-date").last().should("have.length", 1)
    cy.get(".notes__item-title").last().click()
    cy.get("textarea").should("contain", "New note")
  })

  it("Delete", () => {
    cy.get(".notes__list").children().should("have.length", 1)
    cy.get(".notes__item-remove").click()
    cy.get(".notes__list").children().should("have.length", 0)
  })
})
