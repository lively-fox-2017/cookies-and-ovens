const Cookie = require('./cookies_and_ovens');

class Kacang extends Cookie {
    constructor() {
        super()
        this._name = 'Kue kacang'
    }

    getStatus() {
        if (this._time > 30) {
            this._status = false;
        }
    }

    getCooked() {
        if (this._time < 25) {
            this._cookedStatus = 'mentah'
        } else if (this._time < 30) {
            this._cookedStatus = 'hampir matang'
        } else if (this._time == 30) {
            this._cookedStatus = 'matang'
        } else {
            this._cookedStatus = 'hangus'
        }
    }


}

let kacang = new Kacang();
do {
    kacang.getBake();
    kacang.getCooked();
    kacang.getStatus();
    console.log(`${kacang._name}, menit ke ${kacang._time} : ${kacang._cookedStatus}`)
} while (kacang._status != false)
