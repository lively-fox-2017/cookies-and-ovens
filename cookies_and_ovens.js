// Answer These Questions:
//
// - What are essential classes?
// - What attributes will each class have?
// - What interface will each class provide?
// - How will the classes interact with each other?
// - Which classes will inherit from others, if any?
//
//
// Your code here
class Cookie {
  constructor() {
    this.status = 'Mentah';
    this.timeStart = 0;
    this.timeCook = 40;
  }
}

class ChocoCookie extends Cookie {
  constructor(status) {
    super(status);
    this.name = 'Kue Coklat';
    this.timeCook = 20;
  }
}

class PeanutCookie extends Cookie {
  constructor(status) {
    super(status);
    this.name = 'Kue Kacang';
    this.timeCook = 30;
  }
}

class CheeseCookie extends Cookie {
  constructor(status) {
    super(status);
    this.name = 'Kue Keju';
    this.timeCook = 35;
  }
}

class Oven {
  constructor(tray) {
    this.tray = tray;
  }

  bake(menit) {
    for (let j = 1; j <= menit; j++) {
      cooking.status();
      for (let i = 0; i < this.tray.length; i++) {
        this.tray[i].timeStart += 5;
        // console.log(this.tray[i].timeStart);
        if (this.tray[i].timeStart > this.tray[i].timeCook)
        this.tray[i].status = 'Gosong';
        else if (this.tray[i].timeStart == this.tray[i].timeCook)
        this.tray[i].status = 'Matang';
        else if (this.tray[i].timeStart > 10)
        this.tray[i].status = 'Hampir Matang';
        else
        this.tray[i].status = 'Mentah';
      }
    }
  }

  status() {
    for (let i = 0; i < this.tray.length; i++) {
      console.log(this.tray[i].name + ', menit ke ' + this.tray[i].timeStart + ', : ' + this.tray[i].status);
    }
  }
}

let tray1 = new ChocoCookie();
let tray2 = new PeanutCookie();
let tray3 = new CheeseCookie();

let cooking = new Oven([tray1, tray2, tray3]);
//dalam menit dikali 5
cooking.bake(6);
cooking.status();
