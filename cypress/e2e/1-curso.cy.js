describe('Acessando site do Google', () => {
    beforeEach(() => {
      cy.visit('https://cac-tat.s3.eu-central-1.amazonaws.com/index.html')
    })
  
    it('Realizando busca no Google', () => {
      cy.get('#firstName')
        .click()
        .type('Rafael')
      cy.get('#firstName').should('have.value', 'Rafaell')
      cy.get('#lastName')
        .click()
        .type('Drumond')
      cy.get('#email')
        .click()
        .type('drumond.rafael@hotmail.com')
      cy.get('#phone')
        .click()
        .type('65465465465')
    })
});