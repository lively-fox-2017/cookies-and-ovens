"use strict"

class Oven {
	static start(food, time) {
		if (time % 5 !== 0) return console.log('Waktu harus kelipatan 5!');
		while (time > 0) {
			food.cook(5);
			console.log(food.name, 'menit ke', food.cookedFor, ':', food.doneness);
			time -= 5;
		}
		console.log('Cooking Done!');
	}
}

module.exports = Oven;