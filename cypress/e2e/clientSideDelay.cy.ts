describe('CLIENT SIDE DELAY', () => {
    it('test', () => {
        cy.visit('/clientdelay');
        cy.get('#ajaxButton').should('be.visible').and('exist').clock();
       // cy.get('#sprinner').should('be.visible').should('exist');
        cy.get('.bg-success').should('have.text','Data calculated on the client side.')
    });
});



// visit url
//find button
//assert button
//click button
//find spinner element (selector)
//verify spinner logo (assert)
//assert appeared text