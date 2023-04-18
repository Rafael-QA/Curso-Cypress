describe('Logando no RH - Kim', () => {
    beforeEach(() => {
      cy.visit('https://motiva.stage.stationkim.com/login')
    })
  
    it('Realizando login com sucesso', () => {
        cy.get(':nth-child(4) > .MuiInputBase-root')
            .click()
            .type('marzia7625@uorak.com')
        cy.get('.css-1n9ycky > .MuiInputBase-root')
            .click()
            .type('Teste@123456')
        cy.contains('Fazer Login').click()
        cy.contains('Empresa').should('be.visible')
    })

    it('Validando mensagem de erro de login', () => {
        cy.get(':nth-child(4) > .MuiInputBase-root')
            .click()
            .type('marzia7625@uorak.com')
        cy.get('.css-1n9ycky > .MuiInputBase-root')
            .click()
            .type('Teste@14646546')
        cy.contains('Fazer Login').click()
        cy.contains('Usuário ou Senha incorretos').should('be.visible') 
    })

    it.only('Cadastrando um departamento', () => {
        cy.get(':nth-child(4) > .MuiInputBase-root')
            .click()
            .type('marzia7625@uorak.com')
        cy.get('.css-1n9ycky > .MuiInputBase-root')
            .click()
            .type('Teste@123456')
        cy.contains('Fazer Login').click()
        cy.contains('Empresa').should('be.visible')
        cy.contains('Departamentos').click()
        cy.contains('Adicionar Departamento').click()
        cy.get('[name="departmentName"]').click().type('V')
       
    })
});