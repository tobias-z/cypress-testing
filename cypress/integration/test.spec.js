/// <reference types="cypress" />

describe("shoudld work", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("works", () => {
    cy.get("h1").should("contain.text", "bob");
  });
});
