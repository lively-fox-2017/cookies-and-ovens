'use strict'

const Cake = require('./cake.js');

class ChocolateCake extends Cake {

  constructor (name, status) {

    super(name, 20, status);

  }

}

module.exports = ChocolateCake;
