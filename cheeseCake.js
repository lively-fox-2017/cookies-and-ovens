"use strict"
const Cake = require('./cake.js');

class CheeseCake extends Cake {
	constructor() {
		super('Cheese Cake', 35);
	}
}

module.exports = CheeseCake;