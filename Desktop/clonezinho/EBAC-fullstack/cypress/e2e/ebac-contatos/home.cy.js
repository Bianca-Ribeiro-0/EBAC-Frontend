/// <reference types= "cypress" />

describe('testes para uma lista de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve renderizar 3 contatos na lista', ()=> {
        cy.get('.contato').should('have.length', 3)
    })
    it('Deve adicionar um novo contato', () => {
        cy.get('[type="text"]').type('Bia')
        cy.get('[type="email"]').type('bia@testetes.com')
        cy.get('[type="tel"]').type('11943434564{enter}')
        cy.get('.contato').should('have.length', 4)
    })
    it('Deve editar e salvar', () => {
        //:nth-child(2) > .sc-gueYoa > .edit refere-se segundo botao da div .sc-g 
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
        cy.get('[type="text"]').clear().type('Amanda')
        cy.get('[type="email"]').clear().type('Amanda@testetes.com')
        cy.get('[type="tel"]').clear().type('1193456699{enter}')
        cy.get('.alterar').click()

        //Na div teve conter o texto alterado
        cy.get(':nth-child(2) > .sc-dmqHEX > .sc-eDDNvR > :nth-child(1)').should('have.text', 'Amanda')
    })
    it('Deve remover um contato', () => {
        cy.get(':nth-child(4) > .sc-gueYoa > .delete').click()
        //apos a adc de um anteriormente, voltara a ter 3 contatos
        cy.get('.contato').should('have.length', 3)
    })
})