declare namespace Cypress {
    interface Chainable {
      /**
       * Open Aliexpress Website
       *
       * @see cypress\support\commands.js
       *
       * @example
       * cy.openAliexpressWebsite()
       */
      openAliexpressWebsite();

      /**
       * Open Aliexpress Website
       *
       * @see cypress\support\commands\home.command.js
       *
       * @example
       * cy.searchForProduct("desktop lamp")
       */
      searchForProduct(productName: String);

      /**
       * Navigate to a given product page
       *
       * @see cypress\support\commands\product.list.command.js
       *
       * @example
       * cy.navigateToProductPage(2)
       */
      navigateToProductPage(pageNumber: Number);

      /**
       * Open given product description page
       *
       * @see cypress\support\commands\product.list.command.js
       *
       * @example
       * cy.openProductDescriptionPage(2)
       */
      openProductDescriptionPage(productNumber: Number);

      /**
       * Validate if product has at least one item to be bought
       *
       * @see cypress\support\commands\product.details.command.js
       *
       * @example
       * cy.validateProductHasAtLeastOneItemToBeBought()
       */
      validateProductHasAtLeastOneItemToBeBought();
    }
  }