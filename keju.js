const Cookie = require('./cookies_and_ovens');

class Keju extends Cookie {
    constructor() {
        super()
        this._name = 'Kue keju'
    }

    getStatus() {
        if (this._time > 35) {
            this._status = false;
        }
    }

    getCooked() {
        if (this._time < 30) {
            this._cookedStatus = 'mentah'
        } else if (this._time < 35) {
            this._cookedStatus = 'hampir matang'
        } else if (this._time == 35) {
            this._cookedStatus = 'matang'
        } else {
            this._cookedStatus = 'hangus'
        }
    }


}

let keju = new Keju();
do {
    keju.getBake();
    keju.getCooked();
    keju.getStatus();
    console.log(`${keju._name}, menit ke ${keju._time} : ${keju._cookedStatus}`)
} while (keju._status != false)
