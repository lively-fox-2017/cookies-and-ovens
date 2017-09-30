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
  constructor(name, _waktuMatang){
    this._name = name;
    this._waktuMatang = _waktuMatang;
    this._status = ["mentah", "hampir matang", "matang", "hangus"];
  }
}

class KueKacang extends Cookie {
  constructor(){
      super("Kue Kacang", 20);
  }
}

class Coklat extends Cookie {
  constructor(){
      super("Kue Coklat", 30);
  }
}

class KueKeju extends Cookie {
  constructor(){
      super("Kue Keju", 35);
  }
}

class TukangMasak {
  constructor(cookie, waktuPanggang){
    this.cookie = cookie;
    this.waktuPanggang = waktuPanggang;
  }

  panggang(){
    for (let i = 5; i <= this.waktuPanggang; i += 5) {
      if (i < this.cookie._waktuMatang-5) {
        console.log(this.cookie._name+", menit ke "+i+" "+this.cookie._status[0]);
      } else if (i < this.cookie._waktuMatang){
        console.log(this.cookie._name+", menit ke "+i+" "+this.cookie._status[1]);
      } else if (i === this.cookie._waktuMatang) {
        console.log(this.cookie._name+", menit ke "+i+" "+this.cookie._status[2]);
      } else {
        console.log(this.cookie._name+", menit ke "+i+" "+this.cookie._status[3]);
      }
    }

    console.log("-----------------------------------");
  }
}

let tukangMasak = new TukangMasak(new KueKacang(), 30);
tukangMasak.panggang();
cheff = new TukangMasak(new Coklat(), 30);
tukangMasak.panggang();
cheff = new TukangMasak(new KueKeju(), 30);
tukangMasak.panggang();
