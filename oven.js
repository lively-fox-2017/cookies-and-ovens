'use strict'

class Oven {

  constructor (cook, cake, time) {

    this._cook        = cook;
    this._cake        = cake;
    this._time        = time;
    this._currentTime = 0;

  }

  get cook () {

    return this._cook;

  }

  get cake () {

    return this._cake;

  }

  get time () {

    return this._time;

  }

  get currentTime () {

    return this._currentTime;

  }

  nextFiveMinutes () {

    this._currentTime += 5;
    this._cake.done -= 5;

    this._cake.updateCakeStatus();

    if (this._currentTime === this._time) {

      this._cook.doneCooking = true;

    }

  }

}

module.exports = Oven;
