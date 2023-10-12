const fs = require("fs");
const path = require("path");
const chai = require("chai");
const CSSOM = require("cssom");
chai.use(require("chai-dom"));
const { expect } = chai;

// const cssFile = fs.readFileSync(
//   path.resolve(__dirname, "../css/style.css"),
//   "utf-8"
// );

function findRule(rules, cssSelector) {
  return rules.find((r) => r.selectorText === cssSelector);
}

describe('Save the Animals!', function() {
  context('within animal css files', function() {
    it('all animals have been saved', function() {
      // Set this to true once your image looks like the solution displayed in the readme!
      var allAnimalsHaveBeenSaved = true;
      expect(allAnimalsHaveBeenSaved).to.be.true;
    });
  });
});

