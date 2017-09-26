'use strict'

const Oven = require('./oven.js');

const ChocolateCake = require('./chocolate-cake.js');
const PeanutCake = require('./peanut-cake.js');
const CheeseCake = require('./cheese-cake.js');

class PastryCook {

  constructor (name) {

    this._name        = name;
    this._doneCooking = false;
    this._nowCooking  = {};

  }

  get name () {

    return this._name;

  }

  get doneCooking () {

    return this._doneCooking;

  }

  get nowCooking () {

    return this._nowCooking;

  }

  get cookTime () {

    return this._cookTime;

  }

  set cookTime (value) {

    this._cookTime = value;

  }

  set doneCooking (value) {

    this._doneCooking = value;

  }

  set nowCooking (value) {

    this._nowCooking = value;

  }

  greet () {

    console.log(`Hello, my name is ${this._name}. I'm the Pastry Cook!`);

  }

  cook (cakeName, time) {

    this._doneCooking = false;

    switch (cakeName) {

      case 'coklat':

        this._nowCooking = new Oven(this, new ChocolateCake(cakeName, 'mentah'), time);
        break;

      case 'kacang':

        this._nowCooking = new Oven(this, new PeanutCake(cakeName, 'mentah'), time);
        break;

      case 'keju':

        this._nowCooking = new Oven(this, new CheeseCake(cakeName, 'mentah'), time);
        break;

    }

  }

  alertCakeStatus () {

    console.log(`Kue ${this.nowCooking.cake.name}, menit ke ${this.nowCooking.currentTime} : ${this.nowCooking.cake.status}`);

  }

}

module.exports = PastryCook;
