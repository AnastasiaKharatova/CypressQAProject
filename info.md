npm install (install project)
npm install --save-dev typescript
npm install -- save-dev cypress 
npx cypress open
npm run open

env /// is enviroment
name.cy.ts
cy (spec)
ts  (tipescript)
process.env.stage //metod node


"scripts": {
    "open": "cypress open"
  },   npm run open

  let obj = {
    "open new page":true,
    open_page:false
  }


describe('', () => {
    it('', () => {
        
    });
});   //// mocha


before(() => {
        cy.log('Test1')
     })
     after(() => {
        cy.log('Test2')
     })    //// run on before or after evry test 


     .only   /// run only this test
     .skip   /// skip this tests
     cy.get /// take the selector
     .should /// is asorchen 
     .type /// dom element mean text
     cy.contains /// first is selector and after contain=text 
     .within  /// he take every comand and elemant
