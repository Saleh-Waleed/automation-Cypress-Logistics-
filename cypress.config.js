
const { defineConfig } = require("cypress");

chromeWebSecurity: false
      
module.exports = defineConfig({
  env:
{
  url: "http://3.216.228.177/login",
},
// reporter: 'cypress-mochawesome-reporter',
  
           
  e2e: {            
    setupNodeEvents(on, config) {
      //require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
  },
});
