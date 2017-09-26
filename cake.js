"use strict"

class Cake {
	constructor(name, cookingTime) {
		this._name = name;
		this._cookingTime = cookingTime;
		this._cookedFor = 0;
		this._doneness = 'mentah';
	}

	get name() {
		return this._name;
	}

	get cookedFor() {
		return this._cookedFor;
	}

	get doneness() {
		return this._doneness;
	}

	cook(minute) {
		this._cookedFor += minute;
		if (this._cookedFor >= 0 && 
			this._cookedFor < (this._cookingTime - 5)) {
			this._doneness = 'mentah';
		} else if (this._cookedFor >= (this._cookingTime - 5) &&
					this._cookedFor < this._cookingTime) {
			this._doneness = 'hampir matang';
		} else if (this._cookedFor >= this._cookingTime &&
					this._cookedFor < (this._cookingTime + 5)) {
			this._doneness = 'matang';
		} else {
			this._doneness = 'hangus';
		}
	}
}

module.exports = Cake;