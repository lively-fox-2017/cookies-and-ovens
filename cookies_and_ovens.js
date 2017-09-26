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
  constructor(name) {
    this.name = name;
    this.cookingTime = 0;
    this.status = null;
  }

  bakedProgress(time) {
    if (time >= 0 && time < this.cookingTime / 2)
      this.status = 'Mentah';
    else if (time >= this.cookingTime / 2 && time < this.cookingTime)
      this.status = 'Hampir Matang';
    else if (time === this.cookingTime)
      this.status = 'Matang';
    else
      this.status = 'Hangus';
    console.log('Kue ' + this.name + ', menit ke ' + time + ' : ' + this.status);
  }
}

class ChocolateCookie extends Cookie {
  constructor(name) {
    super(name);
    this.cookingTime = 20;
  }
}

class PeanutCookie extends Cookie {
  constructor(name) {
    super(name);
    this.cookingTime = 30;
  }
}

class CheeseCookie extends Cookie {
  constructor(name) {
    super(name);
    this.cookingTime = 35;
  }
}

class Chef {
  static bake(options) {
    if (options.hasOwnProperty('name') && options.hasOwnProperty('time')) {
      let cookie = null;
      switch (options['name']) {
        case 'coklat':
          cookie = new ChocolateCookie(options['name']);
          break;
        case 'kacang':
          cookie = new PeanutCookie(options['name']);
          break;
        case 'keju':
          cookie = new CheeseCookie(options['name']);
          break;
        default:
          return -1;
          break;
      }

      for (let i = 0; i <= options['time']; i = i + 5) {
        cookie.bakedProgress(i);
      }
    }
  }
}

Chef.bake({name: 'coklat', time: 30});
