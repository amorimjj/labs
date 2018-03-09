'use strict';

let chai = require('chai');

let expect = chai.expect;

let sorter = require('./../rsort');


describe('Sort tests', function() {

	describe('Descending', function(){
	
		it('Should return [5, 4, 3, 2, 1, 0]', function(){
			expect(sorter([0, 5, 3, 1, 2, 4])).to.deep.equal([5, 4, 3, 2, 1, 0]);
		});
	
		it('Should return [0, -1, -2, -3, -4, -5]', function() {
			expect(sorter([-1, -5, -2, -4, 0, -3])).to.deep.equal([0, -1, -2, -3, -4, -5]);
		});
	
		it('Should return [1001, 1000, 453, 22, 20, 0]', function() {
			expect(sorter([1000, 22, 0, 453, 1001, 20])).to.deep.equal([1001, 1000, 453, 22, 20, 0]);
		});
	});

});

