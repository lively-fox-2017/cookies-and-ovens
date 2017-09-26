// Answer These Questions:
//
// - What are essential classes?
// 		-> Cake
//		-> ChocolateCake
//		-> PeanutCake
//		-> CheeseCake
//		-> Oven
//
// - What attributes will each class have?
//		-> Cake: name, cooking time, cooked for, doneness
//		-> ChocolateCake, PeanutCake, and CheeseCake inherit from Cake
//
// - What interface will each class provide?
// 		-> Cake: get name(), get cookedFor(), get doneness(), cook()
//		-> ChocolateCake, PeanutCake, and CheeseCake inherit from Cake
//		-> Oven: cook()
//
// - How will the classes interact with each other?
//		-> Cake will inherit all it's properties and method to [type]Cake classes
//		-> Oven's start method will trigger the cook method owned by Cake ... 
//		...and all its children. Children instance is passed as an argument to start().
//
// - Which classes will inherit from others, if any?
//		-> ChocolateCake, PeanutCake, and CheeseCake will inherit from Cake


// Your code here

const Oven = require('./oven.js');
const ChocolateCake = require('./chocolateCake.js');
const PeanutCake = require('./peanutCake.js');
const CheeseCake = require('./cheeseCake.js');

Oven.start(new ChocolateCake(), 25);
Oven.start(new PeanutCake(), 25);
Oven.start(new CheeseCake(), 35);


