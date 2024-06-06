import { ProductDetailsPage } from '../pages';

Cypress.Commands.add('validateProductHasAtLeastOneItemToBeBought', () => {
    ProductDetailsPage.productQuantityInfo.then(($value) => {
        let numberOfItems = $value.text().match(/(\d+)/);
        expect(parseInt(numberOfItems, 10)).to.be.above(0);
    })
});