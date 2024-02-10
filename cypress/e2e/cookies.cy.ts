import { resourceUsage } from "process";
import { LoginPage } from "../pages/Login";

describe('COOKIES',()=>{
    beforeEach(()=>{
        cy.session('myCurrentSession',()=>{
            cy.visit(`${Cypress.env('demoQA')}/login`)
            //cy.get('#userName').type('test');
            //cy.get('#password').type('Test1234*');
            //cy.contains('button', 'Login').click();
            //cy.contains('Log out');
            LoginPage.submitButtonLogin();
            cy.wait(2000)
        })
    })
    
    beforeEach(() => {
       // cy.intercept((resourseType: /xhr|fetch), (log: false));
    })
    it('create cookies with cy.session',()=>{
        cy.visit(`${Cypress.env('demoQA')}/login`)
        cy.url().then((url) => {  //work with element correct
            cy.log(url)
        })
    })
    it('create cookies with cy.session',()=>{
        cy.visit(`${Cypress.env('demoQA')}/login`)
        cy.contains('Log out');
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