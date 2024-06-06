import { ProductListPage } from '../pages';

Cypress.Commands.add('navigateToProductPage', (pageNumber) => {
  ProductListPage.navigateToProductPage(pageNumber);
});

Cypress.Commands.add('openProductDescriptionPage', (productNumber) => {
  ProductListPage.openProductDescriptionPage(productNumber);
});