npm install (install project)
npm install --save-dev typescript
npm install -- save-dev cypress
npx cypress install //
npx cypress open
npm run open
git add .
git status
pwd //for let know in derettoria
ls // for project

:void // in function no return
parseSpecialCharSequences:false // for invisible password to convert in symbols

env /// is enviroment
name.cy.ts
cy (spec)
ts (tipescript)
process.env.stage //metod node

npm run cypress-run //open report card
ls //redirect in diretory
cd name diretory // pass in diretory
open name diretory // open report
                           
                           
{} // object
[] // array
() // function

// function - has this
// ()=>{} - does not have this

//https://stage.pasv.us/user/login === \*/login

"scripts": {
"open": "cypress open"
}, npm run open

let obj = {
"open new page":true,
open_page:false
}

describe('', () => {
it('', () => {

    });

}); //// mocha

before(() => {
cy.log('Test1')
})
after(() => {
cy.log('Test2')
}) //// run on before or after evry test

     .only   /// run only this test
     .skip   /// skip this tests
     cy.get /// take the selector
     .should /// is asorchen
     .type /// dom element mean text
     cy.contains /// first is selector and after contain=text
     .within  /// he take every comand and elemant
     .this ///
