class TextBox {
  userName: string = "#userName";
  email: string = "#userEmail";
  currentAddress: string = "#currentAddress";
  permanentAddress: string = "#permanentAddress";
  submitButton: string = "#submit";

  // submitButtonTextBox() {
  //     cy.get('#userName').type('userName');
  //     cy.get('#userEmail').type('email');
  //     cy.get('#currentAddress').type('currentAddress');
  //     cy.get('#permanentAddress').type('');
  //     cy.contains('button', 'Submit').click()
  // }

  submitButtonTextBox() {
    cy.get(this.userName).type("userName");
    cy.get(this.email).type("email");
    cy.get(this.currentAddress).type("currentAddress");
    cy.get(this.permanentAddress).type("permanentAddress");
    cy.contains("button", "Submit").click();
  }
}

export const TextBoxPage = new TextBox();
