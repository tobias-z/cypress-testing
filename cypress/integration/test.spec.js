/// <reference types="cypress" />

describe("shoudld work", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("something is here", () => {
    cy.get("h1").should("contain.text", "bob");
  });
});
