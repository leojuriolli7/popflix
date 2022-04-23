/// <reference types="cypress" />

import faker from "@faker-js/faker";

const birthday = new Date().toISOString().split("T")[0];

const userData = {
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
};

describe("Testing the Sign Up page inputs", () => {
  it("Navigate to Sign Up page", () => {
    cy.visit("/signup");
  });

  it("Should appear input validations", () => {
    cy.get("[data-cy=signup-button]").click();

    cy.contains("First name is required");
    cy.contains("Last name is required");
    cy.contains("Email is required");
    cy.contains("Password is required");
    cy.contains("Password confirmation is required");
    cy.contains("Birthday is required");
  });

  it("Fill out inputs and sign up", () => {
    cy.intercept("POST", "/users", (req) => {
      delete req.headers["if-none-match"];
    }).as("signupRoute");

    cy.get("[data-cy=firstName-input]")
      .type(userData.firstName)
      .should("have.value", userData.firstName);

    cy.get("[data-cy=lastName-input]")
      .type(userData.lastName)
      .should("have.value", userData.lastName);

    cy.get("[data-cy=email-input]")
      .type(userData.email)
      .should("have.value", userData.email);

    cy.get("[data-cy=password-input]")
      .type(userData.password)
      .should("have.value", userData.password);

    cy.get("[data-cy=passwordConfirm-input]")
      .type(userData.password)
      .should("have.value", userData.password);

    cy.get("[data-cy=birthday-input]")
      .click()
      .type(String(birthday))
      .should("have.value", String(birthday));

    cy.get("[data-cy=signup-button]").click();

    cy.wait("@signupRoute").its("response.statusCode").should("eq", 201);

    cy.url().should("eq", "http://localhost:3000/");

    cy.contains("Current Popular Movies");
  });
});
