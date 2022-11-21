describe('home page ', () => {
    it('You must visit the site ', function () {
        cy.visit('https://calculadora-1d748.web.app/')
    

    })
    it('It should multiply 8 x 2 and the result to be 16', function () {
        cy.visit('https://calculadora-1d748.web.app/')
        cy.get('[id^=tecla8]').click()
        cy.get('[id^=operadorMultiplicar]').click()
        cy.get('[id^=tecla2]').click()
        cy.get('[id^=igual]').click()
        
  })
  it('It should share 4/0 and the result to be null', function () {
    cy.visit('https://calculadora-1d748.web.app/')
    cy.get('[id^=tecla4]').click()
    cy.get('[id^=operadorDividir]').click()
    cy.get('[id^=tecla0]').click()
    cy.get('[id^=igual]').click()

})

})
