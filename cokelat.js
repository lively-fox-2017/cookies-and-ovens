const Cookie = require('./cookies_and_ovens');

class Cokelat extends Cookie {

}

let cokelat = new Cokelat();
do {
    cokelat.getBake();
    cokelat.getCooked();
    cokelat.getStatus();
    console.log(`${cokelat._name}, menit ke ${cokelat._time} : ${cokelat._cookedStatus}`)
} while (cokelat._status != false)
