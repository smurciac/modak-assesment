import '@testing-library/cypress/add-commands';

import { HomePage } from '../support/pages/index';

Cypress.Commands.add('openAliexpressWebsite', () => {
  HomePage.visit();
});