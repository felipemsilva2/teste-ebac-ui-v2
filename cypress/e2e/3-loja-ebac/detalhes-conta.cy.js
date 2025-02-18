/// <reference types="cypress"/>

describe('Funcionalidade: Detalhes da conta ', () => {
    beforeEach(() => {
         cy.visit('minha-conta/edit-account/')
         cy.fixture('perfil').then(login => {
            cy.login(login.usuario, login.senha)
         }) 
    });
 
    it('Deve completar detalhes da conta com sucesso', () => {
      cy.get('#account_first_name').clear()
      cy.get('#account_last_name').clear()
      cy.get('#account_display_name').clear()
      
      cy.detalhesConta('Felipe', 'Magalhães', 'Felipe M')
      cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
  });
 });
 