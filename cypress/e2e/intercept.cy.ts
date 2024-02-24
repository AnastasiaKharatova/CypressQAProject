describe('INTERCEPT', () => {
    it('network request spy', function() {
      cy.fixture('progress.json').as('data'); // this.data -global peremennaia
        cy.intercept('POST','*/login').as('login') //const login = cy.intercept('POST','*/login')
        cy.intercept(
          'https://server-stage.pasv.us/course/coursesProgress/65c652afc1ba15b78bac7ce1',
          {fixture:"progress.json"}
        ).as('cours');
        cy.visit(`${Cypress.env('stage')}/user/login`).as('login') //const login = cy.intercept(POST)
        cy.get('#normal_login_email').type(Cypress.env('email'))
        cy.get('#normal_login_password').type(Cypress.env('password'),{
          log:false})
        cy.get('button[type="submit"]').click()
        cy.wait('@login').then(wholeResponse=>{
            console.log(wholeResponse,'res')
            let id = wholeResponse.response.body.payload.user._id
            cy.location().should(loc=>{
                console.log(loc,'loc')
                expect(loc.href).to.eq(`https://stage.pasv.us/profile/${id}`) //`https://stage.pasv.us/profile/${65c652afc1ba15b78bac7ce1}`
                expect(wholeResponse.response.statusCode).to.eq(200)
            })
        })
        cy.visit('https://stage.pasv.us/profile/65c652afc1ba15b78bac7ce1/progress')
        cy.wait('@cours').then(el=>{
          console.log(el, 'response')
          cy.wrap(this.data).should('deep.equeal',el.response.body)
        })
    });
    it('network request spy2', () => {
      console.log(this.data)
    })
});


