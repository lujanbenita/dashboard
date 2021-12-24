/// <reference types="cypress" />

describe("Pomodoro ", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/pomodoro")
  })

  it("init page", () => {
    cy.contains("h2", "POMODORO")

    // options
    cy.get(".pomodoro__options").find("li").should("have.length", 3)
    cy.get(".pomodoro__options").children().should("contain", "Pomodoro").and("contain", "Short Break").and("contain", "Long Break")

    //pomodoro render
    cy.get(".pomodoro__render").should("contain", "00:10")
  })

  it("click Pomodoro", () => {
    cy.get(".pomodoro__options").find("li").first().click()
    cy.get(".layout-dasboard").should("have.class", "pomodoro__pomodoro")

    // options
    cy.get(".pomodoro__options").find("li").first().should("have.class", "pomodoro__active")
    cy.get(".pomodoro__options").find("li").eq(1).should("not.have.class", "pomodoro__active")
    cy.get(".pomodoro__options").find("li").last().should("not.have.class", "pomodoro__active")

    //pomodoro render
    cy.get(".pomodoro__render").should("contain", "25:00")

    //click Start
    cy.get(".pomodoro__start").contains("Start").click()
    cy.wait(1000)
    cy.get(".pomodoro__render").should("contain", "24:59")
    cy.wait(1000)
    cy.get(".pomodoro__start").contains("Pause").click()
    cy.get(".pomodoro__render").should("contain", "24:58")
    cy.get(".pomodoro__start").contains("Start")
  })

  it("click Short Break", () => {
    cy.get(".pomodoro__options").find("li").eq(1).click()
    cy.get(".layout-dasboard").should("have.class", "pomodoro__short")

    // options
    cy.get(".pomodoro__options").find("li").first().should("not.have.class", "pomodoro__active")
    cy.get(".pomodoro__options").find("li").eq(1).should("have.class", "pomodoro__active")
    cy.get(".pomodoro__options").find("li").last().should("not.have.class", "pomodoro__active")

    //pomodoro render
    cy.get(".pomodoro__render").should("contain", "5:00")

    //click Start
    cy.get(".pomodoro__start").contains("Start").click()
    cy.wait(1000)
    cy.get(".pomodoro__render").should("contain", "4:59")
    cy.wait(1000)
    cy.get(".pomodoro__start").contains("Pause").click()
    cy.get(".pomodoro__render").should("contain", "4:58")
    cy.get(".pomodoro__start").contains("Start")
  })

  it("click Long Break", () => {
    cy.get(".pomodoro__options").find("li").last().click()
    cy.get(".layout-dasboard").should("have.class", "pomodoro__long")

    // options
    cy.get(".pomodoro__options").find("li").first().should("not.have.class", "pomodoro__active")
    cy.get(".pomodoro__options").find("li").eq(1).should("not.have.class", "pomodoro__active")
    cy.get(".pomodoro__options").find("li").last().should("have.class", "pomodoro__active")

    //pomodoro render
    cy.get(".pomodoro__render").should("contain", "15:00")

    //click Start
    cy.get(".pomodoro__start").contains("Start").click()
    cy.wait(1000)
    cy.get(".pomodoro__render").should("contain", "14:59")
    cy.wait(1000)
    cy.get(".pomodoro__start").contains("Pause").click()
    cy.get(".pomodoro__render").should("contain", "14:58")
    cy.get(".pomodoro__start").contains("Start")
  })
})
