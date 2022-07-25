const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportDir: "cypress/reports",
    reportPageTitle: 'E2ETest',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    debug: false,
    overwrite: false,
    saveJson: true,
  },
  e2e: {
    baseUrl: 'http://localhost:4200',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on)
    },
    env: {
      mpsandURL: "https://aig-pre-sqa-web.sssiotpfs.com/",
      cookiesFilePath: "cypress/support/cookies.json"
    },
  },
  requestTimeout: 100000,
  responseTimeout: 100000,
  defaultCommandTimeout: 100000
});
