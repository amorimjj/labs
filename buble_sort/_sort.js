'use strict';

let swap = function(arr, i, j) {
	arr[i] = arr[i] + arr[j];
	arr[j] = arr[i] - arr[j];
	arr[i] = arr[i] - arr[j];
}


let _order = function(toOrder, i, flagged, compareFunction) {

	let n = i+1, current = toOrder[i], next = toOrder[n];

	if ( compareFunction(current, next) ) {
        swap(toOrder, i, n);
		flagged = true;
	}
	
	if ( i < toOrder.length ) {
		return _order(toOrder, n, flagged, compareFunction);
	}

	if ( flagged ) {
		return _order(toOrder, 0, false, compareFunction);
	}

	return toOrder;

}

let order = function(toOrder, compareFunction) {
	return _order(toOrder, 0, false, compareFunction);
};

module.exports = order;
