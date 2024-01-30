class TextBox {
    userName: string = '#userName'
    email: string = '#userEmail'
    currentAddress: string = '#currentAddress'
    permamentAddress: string = '#permanentAddress'
    submitButton: string = '#submit'

    submitButtonTextBox() {
        cy.get('#userName').type('userName')
        cy.get('#userEmail').type('email')
        cy.get('#currentAddress').type('currentAddress')
        cy.get('#permanentAddress').type('permanentAddress')
        cy.contains('button', 'Submit').click()
    }
}


export const TextBoxPage = new TextBox()