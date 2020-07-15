const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const dom = (new JSDOM('<!doctype html><html><body><article><section id="header"><header><h1>Augmented.js Next Presentation - Mocha Tests</h1><h2 id="augmented" data-testView="version"></h2></header></section><section id="sandbox"></section></article></body></html>')).window;

global.document = dom.document;
global.window = dom.window;
global.navigator = {
  userAgent: 'node.js'
};

global.VirtualDOM = require("../src/index.js");

const chai = require("chai");
global.chai = chai;
global.expect = chai.expect;
