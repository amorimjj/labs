'use strict';

let order = require('./_sort');

let bubleSort = function(toOrder) {

	let compareFunction = function(current, next) {
		return current < next;
	}

	return order(toOrder, compareFunction);

}

module.exports = bubleSort;
