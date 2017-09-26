"use strict"
const Cake = require('./cake.js');

class PeanutCake extends Cake {
	constructor(){
		super('Peanut Cake', 30);
	}
}

module.exports = PeanutCake;