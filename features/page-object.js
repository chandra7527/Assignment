const { setConstructor } = require('cucumber');
const puppeteer = require('puppeteer');
const scope = require('./support/scope');

const pupp = function() {
  scope.driver = puppeteer;
};

setConstructor(pupp);