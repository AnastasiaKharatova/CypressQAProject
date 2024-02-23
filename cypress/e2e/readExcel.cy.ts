describe('EXCEL', () => {
    it('', () => {
        cy.readingXlsx('cypress/fixtures/excelData.clsx').then(data => {
            cy.log(data)
            cy.log(data[0])
            cy.log(data[0].data)
            cy.log(data[0].data[0])
            cy.log(data[0].data[1])
            cy.log(data[0].data[2])
        })
    });
});