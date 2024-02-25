import { LocCodingLogin } from "../pages/localCoding/Login";

describe("LOGIN", () => {
  beforeEach(() => {
    cy.session("myCurrentSession", () => {
      cy.visit(`${Cypress.env("stage")}/user/login`);
      LocCodingLogin.buttonLogin(Cypress.env("email"), Cypress.env("password"));
    });
  });

  it("loginPage", () => {
    cy.visit(`${Cypress.env("stage")}/course`);
    //LocCodingLogin.buttonLogin(Cypress.env('email'),Cypress.env('password'))
  });
});
