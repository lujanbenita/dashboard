/* eslint-disable */
/// <reference types="cypress" />

describe("wizard", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("host")}/`);
  });

  it("should open", () => {
    cy.get("button.btn").should("contain", "Crear contraseña").click();
  });

  it("First step", () => {
    cy.get("button.btn").should("contain", "Crear contraseña").click();
    cy.wait(1000);
    cy.get("h2").should("contain", "Crea tu Password Manager");

    // Steps
    cy.get(".wizard__step").eq(0).should("have.class", "active");
    cy.get(".wizard__step").eq(1).should("not.have.class", "active");
    cy.get(".wizard__step").eq(2).should("not.have.class", "active");

    // Next Buttons
    cy.get(".wizard__next-buttons button")
      .last()
      .should("contain", "Siguiente >")
      .and("have.class", "disabled");

    // active input
    cy.get("label").click();
    cy.get(".wizard__next-buttons button")
      .last()
      .should("contain", "Siguiente >")
      .and("not.have.class", "disabled");
  });

  it("Second step", () => {
    cy.get("button.btn").click();
    cy.wait(1000);

    // active input
    cy.get("label").click();
    cy.get(".wizard__next-buttons button").last().click();

    cy.get("h2").should("contain", "Crea tu Password Manager");
    cy.contains("Password");
    cy.contains("Confirm Password");

    // Steps
    cy.get(".wizard__step").eq(0).should("have.class", "passed");
    cy.get(".wizard__step").eq(1).should("have.class", "active");
    cy.get(".wizard__step").eq(2).should("not.have.class", "active");

    // Next Buttons
    cy.get(".wizard__next-buttons button")
      .last()
      .should("contain", "Siguiente >")
      .and("have.class", "disabled");

    // passwords incorrect
    cy.get('input[name="password"]').type("martinez");
    cy.get('input[name="repeatPassword"]').type("martinez");

    // disabled next button
    cy.get(".wizard__next-buttons button")
      .last()
      .should("contain", "Siguiente >")
      .and("have.class", "disabled");

    // passwords incorrect
    cy.get('input[name="password"]').clear().type("Martinez");
    cy.get('input[name="repeatPassword"]').clear().type("Martinez");

    // disabled next button
    cy.get(".wizard__next-buttons button")
      .last()
      .should("contain", "Siguiente >")
      .and("have.class", "disabled");

    // passwords correct
    cy.get('input[name="password"]').clear().type("Martinez8");
    cy.get('input[name="repeatPassword"]').clear().type("Martinez8");

    // enable next button
    cy.get(".wizard__next-buttons button")
      .last()
      .should("contain", "Siguiente >")
      .and("not.have.class", "disabled");
  });

  it("Third step all ok", () => {
    cy.get("button.btn").click();
    cy.wait(1000);

    // active input
    cy.get("label").click();
    cy.get(".wizard__next-buttons button").last().click();

    // passwords correct
    cy.get('input[name="password"]').clear().type("Martinez8");
    cy.get('input[name="repeatPassword"]').clear().type("Martinez8");

    // enable next button
    cy.get(".wizard__next-buttons button").last().click();

    // Steps
    cy.get(".wizard__step").eq(0).should("have.class", "passed");
    cy.get(".wizard__step").eq(1).should("have.class", "passed");
    cy.get(".wizard__step").eq(2).should("have.class", "active");

    cy.wait(3000);
    cy.contains("¡Tu Password Manager ya está creada!");
  });

  it("Third step KO and start", () => {
    cy.get("button.btn").click();
    cy.wait(1000);

    // active input
    cy.get("label").click();
    cy.get(".wizard__next-buttons button").last().click();

    // passwords correct
    cy.get('input[name="password"]').clear().type("pruebaKO123");
    cy.get('input[name="repeatPassword"]').clear().type("pruebaKO123");

    // enable next button
    cy.get(".wizard__next-buttons button").last().click();

    // Steps
    cy.get(".wizard__step").eq(0).should("have.class", "passed");
    cy.get(".wizard__step").eq(1).should("have.class", "passed");
    cy.get(".wizard__step").eq(2).should("have.class", "active");

    cy.wait(3000);
    cy.contains("Ha habido un error");
    cy.contains("Volver a Password Manager >").click();
    cy.wait(500);
    cy.contains("Crea tu Password Manager");
  });
});
