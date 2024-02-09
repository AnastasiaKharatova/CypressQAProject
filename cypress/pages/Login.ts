class Login {
    userName: string = '#userName';
    password: string = '#password';
    loginButton: string = '#login';
    submitButton: string = '#submit';

    submitButtonLogin() {
        cy.get(this.userName).type('test');
        cy.get('#password').type('Test1234*');
        cy.contains('button', 'Login').click();
        //cy.get('#login').click() //the same as contains
    }
}

export const LoginPage = new Login()
//let array = []
//let array = new Array();
//new Array = []
//new Object = {}
LoginPage.submitButtonLogin()