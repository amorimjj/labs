'use strict';

let _sort = require('./_sort');

let sort = function(toOrder) {

	let compare = function (a, b) {
		return a < b;
	}

	return _sort(toOrder, toOrder.length, compare);
}

module.exports = sort;
