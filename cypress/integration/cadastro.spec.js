/// <reference types="cypress" />

let Chance = require('chance');
let chance = new Chance();

context('Realizar cadastro com sucesso', () => {
  it('Cadastrar um novo usuário', () => {
    cy.visit('index.php');

    cy.get('.login').click();
    cy.get('input#email_create').type(chance.email());
    cy.get('button#SubmitCreate').click();

    cy.get('input#id_gender2').check();
    cy.get('input#customer_firstname').type(chance.first());
    cy.get('input#customer_lastname').type(chance.last());
    cy.get('input#passwd').type('juli1234');
    cy.get('select#days').type('8');
    cy.get('select#months').type('May');
    cy.get('select#months').type('1990');

    cy.get('input#address1').type(chance.address());
    cy.get('input#city').type(chance.city());
    cy.get('select[name=id_state]').select('4');
    cy.get('input#postcode').type(chance.zip());
    cy.get('input#phone').type(chance.phone({ formatted: false }));
    cy.get('button#submitAccount').click();

    cy.get('p[class=info-account]').should(
      'contain.text',
      'Welcome to your account'
    );

    cy.url().should('contain', 'my-account');
  });
});
