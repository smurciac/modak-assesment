import './commands';
import './commands/home.command';
import './commands/product.list.command';
import './commands/product.details.command';

import 'cypress-real-events';
require('@cypress/xpath');

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});