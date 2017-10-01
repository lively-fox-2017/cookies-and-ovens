// Answer These Questions:
//
// - What are essential classes? 
// - What attributes will each class have? 
// - What interface will each class provide? 
// - How will the classes interact with each other? 
// - Which classes will inherit from others, if any? 
//
//

"use strict"
class Cookie {
    constructor() {
        this._time = 0;
        this._status = true;
        this._cookedStatus = null;
        this._name = 'Kue cokelat'
    }
    getStatus() {
        if (this._time > 20) {
            this._status = false;
        }
    }

    getCooked() {
        if (this._time < 15) {
            this._cookedStatus = 'mentah'
        } else if (this._time < 20) {
            this._cookedStatus = 'hampir matang'
        } else if (this._time == 20) {
            this._cookedStatus = 'matang'
        } else {
            this._cookedStatus = 'hangus'
        }
    }

    getBake() {
        this._time += 5
    }
}


module.exports = Cookie