'use strict';

let chai = require('chai');

let expect = chai.expect;

let checker = require('./../main');


describe('Balanced checker', function() {
  it('checker should return true if balanced "((()))"', function() {
    expect(checker('((()))')).to.equal(true);
  });

  it('checker should return true if balanced "(())"', function() {
    expect(checker('(())')).to.equal(true);
  });

  it('checker should return true if balanced "(()())"', function() {
    expect(checker('(()())')).to.equal(true);
  });

  it('checker should return false if unbalanced "(()"', function() {
	expect(checker('(()')).to.equal(false); 
  });

  it('checker should return false if unbalanced "(()))"', function() {
  	expect(checker('(()))')).to.equal(false);
  });
});
