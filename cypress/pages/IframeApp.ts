class IFrameApp {
    getIframe(){
        // cy.frameLoaded('#mce_0_ifr')
        // cy.iframe('#mce_0_ifr').then(iframeApp => {
        //     cy.wrap(iframeApp).type("{selectAll}{del}Hello World!")  //has two options 
        //     cy.wrap(iframeApp).clear().type("Hello Cypress!")
        // })    // homework rewrith
    }
    
    visit(){
        cy.visit(`${Cypress.env("herokuapp")}/iframe`);
    }
}

export const IFrameAppPage = new IFrameApp()
