/// <reference types= "cypress" />

describe('testes para a pag de candidatura', () => {
    beforeEach(() => {
        cy.visit('https://ebac-jobs-e2e.vercel.app/')
    })

    it('Deve renderizar levar o ux ate o form', () => {
        cy.get('.Vaga_vagaLink__DeFkk').first().click()   
        cy.get('input').should('have.length', 7)
        cy.screenshot('tela-inscricao')
    })

    it('deve preencher form', () =>{
        cy.get('input[name="nome-completo"]').type('bia ribeiro')
        cy.get('input[name="email"]').type('bia@teste.com')
        cy.get('input[name="telefone"]').type('11943459059')
        cy.get('input[name="endereco"]').type('rua teste, bairo cypress, sao paulo - sp')
        cy.get('#linux').check()
        cy.get('select[name="escolaridade"').select('outros')
        cy.get('.Aplicacao_button__tw2AE').click()
        
        cy.on('window:alert', (conteudo) =>{
            expect(conteudo).contain('Obrigado pela candidatura!')
        })
    })
    cy.screenshot('tela-inscricao-preenchido')
})
