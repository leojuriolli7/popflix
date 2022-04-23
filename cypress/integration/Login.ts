/// <reference types="cypress" />

describe("Testing the Login page inputs", () => {
  it("Navigate to Login page", () => {
    cy.visit("/login");
  });

  it("Should appear input validations", () => {
    cy.get("[data-cy=login-button]").click();

    cy.contains("Email is required");

    cy.contains("Password is required");
  });

  it("Fill out inputs and login", () => {
    cy.intercept("POST", "/login", (req) => {
      delete req.headers["if-none-match"];
    }).as("loginRoute");

    cy.get("[data-cy=email-input]")
      .type("testAccount@email.com")
      .should("have.value", "testAccount@email.com");

    cy.get("[data-cy=password-input]")
      .type("12345")
      .should("have.value", "12345");

    cy.get("[data-cy=login-button]").click();

    cy.wait("@loginRoute").its("response.statusCode").should("eq", 200);

    cy.url().should("eq", "http://localhost:3000/");

    cy.contains("Current Popular Movies");
  });
});
