describe('INTERCEPT', () => {
    it('network request spr', () => {
        cy.intercept('POST','*/login')
        cy.visit(`${Cypress.env('stage')}/user/login`).as('login') //const login = cy.intercept(POST)
        cy.get('#normal_login_email').type(Cypress.env('email'))
        cy.get('#normal_login_password').type(Cypress.env('password'),{log:false})
        cy.get('button[type="submit"]').click()
        cy.wait('@login').then(res=>{
            console.log(res,'res')
            let id = res.response.body.payload.user._id
            cy.location().should(loc=>{
                console.log(loc,'loc')
                expect(loc.href).to.eq(`https://stage.pasv.us/profile/${id}`)
                //`https://stage.pasv.us/profile/${65c652afc1ba15b78bac7ce1}`

            })
        })
    });
});