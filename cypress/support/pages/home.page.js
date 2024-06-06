class HomePage {
    get searchInput() {
      return cy.get('#search-words');
    }
  
    visit() {
      cy.visit(Cypress.env('baseUrl'));
    }
  }
  
  export default new HomePage();