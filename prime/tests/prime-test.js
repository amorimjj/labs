'use strict';

let expect = require('chai').expect;

let given = require('mocha-testdata').given;

let isPrime  = require('./../prime');

describe('Number primer tester', function() {

	describe('For prime set', function() {
		given(
			2, 3, 5, 7, 11, 13, 991
		).it('Should return true', function(number){
			expect(isPrime(number)).to.equal(true);
		});
	});

	describe('For no prime set', function() {
		given(
			4, 6, 9, 10, 12, 14, 990
		).it('Should return true', function(number){
			expect(isPrime(number)).to.equal(false);
		});
	});
});
