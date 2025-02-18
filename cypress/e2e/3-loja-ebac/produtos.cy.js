/// <reference types="cypress" />
import produtosPage from "../../support/page-objects/produtos.page";

describe('Funcionalidade: Produtos', () => {
    
    beforeEach(() => {
        produtosPage.visitarUrl();
    });

    it('Deve selecionar um produto da lista', () => {
        produtosPage.buscarProdutosLista('Aether Gym Pant');
        cy.get('#tab-title-description > a').should('contain', 'Descrição');
    });

    it('Deve buscar um produto com sucesso', () => {
        produtosPage.buscarProdutos('Abominable Hoodie');
        cy.get('.product_title').should('contain', 'Abominable Hoodie');
    });

    it('Deve visitar a página do produto', () => {
        produtosPage.visitarProduto('Abominable-Hoodie');
        cy.get('.product_title').should('contain', 'Abominable Hoodie');
    });

    it('Deve adicionar produto ao carrinho', () => {
        let qtd = 7;
        produtosPage.buscarProdutos('Abominable Hoodie');
        produtosPage.addProdutoCarrinho('M', 'Green', qtd);
        cy.get('.woocommerce-message').should(
            'contain',
            qtd + ' × “Abominable Hoodie” foram adicionados no seu carrinho.'
        );
    });

    it('Deve adicionar produto ao carrinho buscando da massa de dados', () => {
        cy.fixture('produtos').then(dados => {
            produtosPage.buscarProdutos(dados[0].nomeProduto);
            produtosPage.addProdutoCarrinho(
                dados[0].tamanho,
                dados[0].cor,
                dados[0].quantidade 
            );
            cy.get('.woocommerce-message').should('contain', dados[0].nomeProduto);

        
            
        });
    });
});
