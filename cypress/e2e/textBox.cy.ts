import { TextBoxPage } from "../pages/TextBox";

describe('Text Box', () => {
    beforeEach(() => {
        cy.visit(`https://demoqa.com/text-box`) 
    });
    it('userForm', () => {
       cy.get('#userName').type('anastasia')
       cy.get('#userEmail').type('anastasia@gmail.com')
       cy.get('#currentAddress').type('1234 b street ')
       cy.get('#permanentAddress').type('4321 c street')
       cy.contains('button', 'Submit').click()
    });
     it('textBox with PageObject', () => {
         TextBoxPage.submitButtonTextBox()
         cy.contains('Submit')
    });
});