/// <reference types="cypress" />
const perfil = require('../../fixtures/perfil.json')

describe('Funcionalidade: Login', () => {
    
    beforeEach(() => {
        cy.visit('minha-conta')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('felipemgl@teste.com.br')
        cy.get('#password').type('teste@teste')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)')
          .should('contain', 'Olá, Felipe M (não é Felipe M? Sair)')
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

    it('Deve fazer login com sucesso usando massa de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)')
          .should('contain', 'Olá, Felipe M (não é Felipe M? Sair)')
    });

    it('Deve fazer login com sucesso - Usando Fixture', () => {
        cy.fixture('perfil').then((dados) => {
            cy.get('#username').type(dados.usuario,{ log:false})
            cy.get('#password').type(dados.senha,{ log:false})
            cy.get('.woocommerce-form > .button').click()

            cy.get('.woocommerce-MyAccount-content > :nth-child(2)')
              .should('contain', 'Olá, Felipe M (não é Felipe M? Sair)')
        });
    });

    it('Deve fazer login com sucesso - usando comandos customizados', () => {
            cy.login('felipemgl@teste.com.br', 'teste@teste')
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)')
              .should('contain', 'Olá, Felipe M (não é Felipe M? Sair)')
    });
});
