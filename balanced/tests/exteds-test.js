'use strict';

let chai = require('chai');

let  expect = chai.expect;

require('./../extends');

describe('Extends Functions', function() {
	
	describe('Array tests', function() {
		
		describe('Extends tests isEmpty', function() {
		
			it('Array with elements should return false', function() {
				let x = [];
				x[0] = 1;
		    	expect(x.isEmpty).to.equal(false);
		  	});
		
		  	it('Array with elements should return false', function() {
				expect([1,2].isEmpty).to.equal(false);
		  	});
		
		  	it('Array with elements should return false', function() {
				let x = [];
				x.push(1);
		    	expect(x.isEmpty).to.equal(false);
		  	});
		
		  	it('Array with no elements should return true', function() {
		    	let x = [];
				expect(x.isEmpty).to.equal(true);
		  	});
		
		  	it('Array with no elements should return true', function() {
		    	expect([].isEmpty).to.equal(true);
		  	});
		
		  	it('Array with no elements hould return true', function() {
				let x = [];
				x.push(1);
				x.pop();
				expect(x.isEmpty).to.equal(true);
		  	});
	  	});
	});

	describe('String tests', function() {
		
		describe('String toArray', function(){
			
			it('toArray shoud return expected array', function() {
				let s = 'string';
				expect(s.toArray()).to.deep.equal(['s','t','r','i','n','g']);
			});
		});
	});
});

