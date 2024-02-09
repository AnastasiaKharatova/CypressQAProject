import { AlertPAge } from '../pages/Aleart'

describe('ALERT', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('herokuapp')}/javascript_alerts`)
    })
    it('Click for JS Alert', () => {
        AlertPAge.jsAlert()
    });
})