import { IFramePage } from "../pages/Iframe"
import { IFrameAppPage } from "../pages/IframeApp"


describe('IFRAME', () => {
    beforeEach(() => {
        IFramePage.visit()
    })

    beforeEach(()=>{
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    })

    it('test iframe', () => {
        IFramePage.getIframe()
    })
})

describe.only('IFRAMEAPP', () => {
    beforeEach(() => {
        IFrameAppPage.visit()
    })
    
    it('test iframe with extention', () => {
        cy.frameLoaded('#mce_0_ifr')
        cy.iframe('#mce_0_ifr').then(iframeApp => {
            cy.wrap(iframeApp).type("{selectAll}{del}Hello World!")  // OR , has two options 
            cy.wrap(iframeApp).clear().type("Hello Cypress!")
        })
    })
})