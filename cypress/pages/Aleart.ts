class Alert {
  private alertTextButton: string = "Click for JS Alert"
  private buttonSelector: string = 'button'
  //private buttonPromptText: string = 'Click on JS Prompt'
  //popWindowText
  private jsAlertText: string = 'I am a JS Alert' 
  private jsConfirmWindowText: string = 'I am a JS Confirm'

  private resultSelector: string = '#result'
  private resultTextJSAlert: string = 'You successfully click an alert'
  private resultJsConfirmText: string = 'You clicked: Ok'
  private jsConfirmText: string = 'Click fo Js Confirm'
  private jsPromptText: string = 'Click fo JS Prompt'


  jsAlert(){
    cy.contains(this.buttonSelector, this.alertTextButton).click()
    cy.on("window: alert", (textAlert) => {
        expect(textAlert).to.equal(this.jsAlertText)
    })
    cy.on('window:confirm', () => true )
    cy.get(this.resultSelector).should('have.text', this.resultTextJSAlert)
  }

  jsConfirm(){
    cy.contains(this.buttonSelector, this.jsConfirmText).click()
    cy.on('window:alert', (textAlert) => {
      expect(textAlert).to.equal(this.jsConfirmWindowText)
    })
    cy.on('window:confirm', () => true)
    cy.get(this.resultSelector).should('have.text', this.resultJsConfirmText)
  }

  jsPrompt(){
    const text: 'Hello Hello' = 'Hello Hello'
    cy.window().then($win => {
      cy.stub($win, 'prompt').returns(text)
      cy.contains(this.buttonSelector, this.jsPromptText).click()
    });
    cy.get(this.resultSelector).should('include.text', text)
  }
}

export const AlertPage = new Alert();