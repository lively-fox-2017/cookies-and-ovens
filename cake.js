'use strict'

class Cake {

  constructor (name, done, status = 'mentah') {

    this._name   = name;
    this._done   = done;
    this._status = status;
    this._max    = done;

  }

  get name () {

    return this._name;

  }

  get done () {

    return this._done;

  }

  get status () {

    return this._status;

  }

  set done (value) {

    this._done = value;

  }

  set status (value) {

    this._status = value;

  }

  updateCakeStatus () {

    if (this._done === 0)

      this._status = 'matang';

    else if (this._done < 0)

      this._status = 'hangus';

    else if (this._done === 5)

      this._status = 'hampir matang';

    else
    
      this._status = 'mentah';

  }

}

module.exports = Cake;
