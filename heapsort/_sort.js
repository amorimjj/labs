'use strict';

let swap = function(arr, i, k) {
	arr[i] = arr[i] + arr[k];
	arr[k] = arr[i] - arr[k];
	arr[i] = arr[i] - arr[k];
}


let getParent = function(n) {
	let i = ( n % 2 === 0 ) ? 2 : 1;
	return Math.floor((n - i) / 2);
}

let heap = function(arr, i, n, fw, compare) {
	
	if ( i === 0 || i === n ){
		return;
	}

	let p = getParent(i);
	
	if ( compare(arr[i], arr[p]) ) {
		swap(arr, p, i);
		heap(arr, p, n, false, compare);
	}

	if ( fw === true ) {
		heap(arr, ++i, n, fw, compare);
	}
}

let sort = function(arr, n, compare) {
	
	heap(arr, 1, n--, true, compare);

	if ( n == 0 ) {
		return arr;
	}

	if ( compare(arr[0], arr[n]) ) {
		swap(arr, 0, n);
	}
	
	return sort(arr, n, compare);
}

module.exports = sort;
