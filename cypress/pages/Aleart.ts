class Alert {
  private alertTextButton: string = "Click for JS Alert"
  private buttonSelector: string = 'button'
  private jsAlertText: string = 'I am a JS Alert' 
  private resultSelector: string = '#result'
  private resultTextJSAlert: string = 'You successfully click an alert'
  jsAlert(){
    cy.contains(this.buttonSelector, this.alertTextButton).click()
    cy.on("window: alert", (textAlert) => {
        expect(textAlert).to.equal('I am a JS Alert')
    })
    cy.on('window:confirm', () => true )
    cy.get('#result').should('have.text', 'You successfully click an alert')
  }
}

export const AlertPAge = new Alert();