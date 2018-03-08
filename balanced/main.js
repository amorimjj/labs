'use strict';

require("./extends");

let balancedChecker = function(given) {
	
	let currentChar,
		counts = [], 
		balanced = true, 
		toCheck = given.toArray();

	let isBalanced = function () {
		
		if ( counts.isEmpty ) {
			return false;
		}
		
		counts.pop();
		return true;
	}

    while ( (currentChar = toCheck.shift() ) && balanced ) {
        
		if ( currentChar  == "(" ) {
            counts.push(currentChar);
		} else {
			balanced = isBalanced();
        }
	}

    return ( balanced && counts.isEmpty );
};

module.exports = balancedChecker;
