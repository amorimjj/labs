'use strict';


let isPrime = function(number) {

	let is = true, i = 2;

	while ( i < number && is ) {
		is = ! ( number % i === 0 );
		i++;
	}

	return is;
}


module.exports = isPrime;
