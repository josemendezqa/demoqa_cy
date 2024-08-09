const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // Directorio base de las pruebas e2e
    //baseUrl: 'https://your-base-url.com', // Cambia esto si es necesario
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: false,
      json: true,
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}', // Asegúrate de que este patrón coincida con tus archivos de prueba
  },
});
