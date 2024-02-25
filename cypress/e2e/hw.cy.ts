describe("EXPECTED CONDITIONS", () => {
  it("Wait for element to be visible", () => {
    cy.visit(Cypress.env("expected_conditions"));
    cy.get('[id="visibility_triagger"]')
      .should("be.visible")
      .and("exist")
      .click();
    cy.get('[id="visibility_target"]').should("be.visible").should("exist");
    cy.contains("button", "Click Me");
    //cy.contains('I just removed my invisibility cloak!')
  });
});
