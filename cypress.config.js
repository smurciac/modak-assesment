const { defineConfig } = require('cypress');
const { cloudPlugin } = require('cypress-cloud/plugin');
const { tagify } = require('cypress-tags');

module.exports = defineConfig({
  video: true,
  experimentalWebKitSupport: true,
  e2e: {
    defaultCommandTimeout: 20000,
    viewportWidth: 1200,
    viewportHeight: 800,
    chromeWebSecurity: false,
    experimentalStudio: true,
    experimentalRunAllSpecs: true,
    setupNodeEvents(on, config) {
      on('file:preprocessor', tagify(config));

      return cloudPlugin(on, config);
    },
  },
});