describe(['SEARCH'], 'Search for a product', () => {
  beforeEach(() => {
    cy.openAliexpressWebsite();
  });

  it(['TC-001'], 'Verify if user can navigate to Qubika Website', () => {
    cy.searchForProduct("instax mini");
    cy.navigateToProductPage(2);
    cy.openProductDescriptionPage(2);
    cy.validateProductHasAtLeastOneItemToBeBought();
  });
});