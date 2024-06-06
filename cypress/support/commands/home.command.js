import { HomePage } from '../pages';

Cypress.Commands.add('searchForProduct', (productName) => {
  HomePage.searchInput.type(`${productName}{enter}`);
});