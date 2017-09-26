'use strict'

const Cake = require('./cake.js');

class PeanutCake extends Cake {

  constructor (name, status) {

    super(name, 30, status);

  }

}

module.exports = PeanutCake;
