class ProductDetailsPage {
    get productQuantityInfo() {
        return cy.get('[class*="quantity--info"]');
      }
  }
  
  export default new ProductDetailsPage();