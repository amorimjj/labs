'use strict';

let order = function(toOrder, compareFunction) {

    let i = 0, flagged = true,  current, next;


    while ( flagged ) {

        flagged = false;

        for ( i = 0; i < toOrder.length; i++  ) {
            current = toOrder[i], next = toOrder[i+1];
            if ( compareFunction(current,  next) ) {
                toOrder[i] = next;
                toOrder[i+1] = current;
                flagged = true;
            }
        }
    }

    return toOrder;
};

module.exports = order;
