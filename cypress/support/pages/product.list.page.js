class ProductListPage {
    navigateToProductPage(pageNumber) {
      cy.get(`.comet-pagination-item-${pageNumber} > a`).click();
    }

    openProductDescriptionPage(productNumber) {
      cy.get('.search-card-item').eq(productNumber-1).invoke('removeAttr', 'target').click();
    }
  }
  
  export default new ProductListPage();