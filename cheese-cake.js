'use strict'

const Cake = require('./cake.js');

class CheeseCake extends Cake {

  constructor (name, status) {

    super(name, 35, status);

  }

}

module.exports = CheeseCake;
