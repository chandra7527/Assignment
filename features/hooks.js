const { After, Before, AfterAll } = require('cucumber');
const scope = require('./support/scope');

Before(async () => {
  // You can clean up database models here
});

After(async () => {
  // Here we check if a scenario has instantiated a browser and a current page
  if (scope.browser && scope.context.currentPage) {
    
  }
});

AfterAll(async () => {
  // If there is a browser window open, then close it
  if (scope.browser) await scope.browser.close();
});