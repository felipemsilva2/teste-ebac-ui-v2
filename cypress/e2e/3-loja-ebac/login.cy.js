/// <reference types="cypress" />

describe('Funcionalidade: Login', () => {
    
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
    })

    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('felipemgl@teste.com.br')
        cy.get('#password').type('teste@teste')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)')
          .should('contain', 'Olá, felipemgl (não é felipemgl? Sair)')
    });

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type('feliipemgl@teste.com.br')
        cy.get('#password').type('teste@teste')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido')
        cy.get('.woocommerce-error').should('exist')
    });

    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
        cy.get('#username').type('felipemgl@teste.com.br')
        cy.get('#password').type('teeste@teste')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error')
          .should('contain', 'Erro: A senha fornecida para o e-mail felipemgl@teste.com.br está incorreta.')
    });

});
