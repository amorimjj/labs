Object.defineProperty(Array.prototype, "isEmpty", {
    get: function () {
        return this.length == 0;
    }
});

String.prototype.toArray = function () {
	return this.split('');
};
