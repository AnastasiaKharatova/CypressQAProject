describe('COOKIES',()=>{
    beforeEach(()=>{
        cy.session('myCurrentSession',()=>{
            cy.visit(`${Cypress.env('demoQA')}/login`)
            cy.get('#userName').type('test');
            cy.get('#password').type('Test1234*');
            cy.contains('button', 'Login').click();
            cy.contains('Log out');
        })
    })
    
    it('create cookies with cy.session',()=>{
        cy.visit(`${Cypress.env('demoQA')}/login`)
        cy.url().then((url) => {
            cy.log(url)
        })
    })
    it('create cookies with cy.session',()=>{
        cy.visit(`${Cypress.env('demoQA')}/login`)
    })
})



// describe('COOKIES', () => {
//     beforeEach(() => {
//         cy.visit(`${Cypress.env('demoQA')}/login`)
//     })
//     it('create cookies', () => {
//         cy.session('myCurrentSession', () => {
//           cy.get('#userName').type('test')
//           cy.get('#password').type('Test1234*')
//           cy.contains('button', 'Login').click()
//           cy.contains('Log out');
//         })
//     })
//     it('create cookies with cy.session', () => {
//         cy.visit(`${Cypress.env('demoQA')}/login`) 
//     })
//     it('create cookies with cy.session', () => {
//         cy.visit(`${Cypress.env('demoQA')}/login`) 
//     })
// })