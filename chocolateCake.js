"use strict"
const Cake = require('./cake');

class ChocolateCake extends Cake {
	constructor() {
		super('Chocolate Cake', 20);
	}
}

module.exports = ChocolateCake;