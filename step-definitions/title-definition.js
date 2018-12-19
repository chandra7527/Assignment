const { Given, When, Then ,setDefaultTimeout} = require('cucumber') 	;

const assert = require('assert');
const helper = require('selenium-cucumber-js');


setDefaultTimeout(60 * 1000);
         Given('I go to the website {string}', function (url) {
           // Write code here that turns the phrase above into concrete actionhtml 
		  console.log(url);
           return  	helpers.loadPage(url);
         });

  
  

         Then('I expect the title of the page {string}', function (title) {
           // Write code here that turns the phrase above into concrete action
		   console.log("Write loggggggggggg");
		   console.log(driver.getTitle())
		   console.log("Write done");
           return driver.findElement( by.name( 'title'  )).getText() ;
;
         });

  
  

         When('I fill {string} field with {string}', function (string, string2)
{
           // Write code here that turns the phrase above into concrete action
           return 'pending';
         });

  

         When('I click on the button {string}', function (string) {
           // Write code here that turns the phrase above into concrete action
           return 'pending';
         });

 

         Then('I should get error message', function () {
           // Write code here that turns the phrase above into concrete action
           return 'pending';
         });

  
         Then('close the browser', function () {
           // Write code here that turns the phrase above into concrete action
           return 'pending';
         });


