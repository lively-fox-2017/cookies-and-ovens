'use strict'
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
class Kue{
  constructor(option) {
    this.nama = option.nama||'';
    this.waktuMatang = option.waktuMatang;
    this.status = option.status||'mentah';
    this.waktuDiOven = option.waktuDiOven || 0;
  }

  bake(){
    this.waktuDiOven+=5;
    if(this.waktuDiOven>this.waktuMatang+10){
      this.status='gosong';
    }else if(this.waktuDiOven>this.waktuMatang && this.waktuDiOven<this.waktuMatang+10){
      this.status='matang';
    }
  }

}

class KueCoklat extends Kue{
  constructor(options) {
    let option = options || {};
    option.nama = 'kue coklat';
    option.waktuMatang = 15;
    super(option);
    this.jumlahCoklat = option.jumlahCoklat;
  }
}

class KueKacang extends Kue{
  constructor(options) {
    let option = options || {};
    option.nama = 'kue kacang';
    option.waktuMatang = 24;
    super(option);
    this.jumlahKacang = option.jumlahKacang || 'sedang';
  }
}

class KueKeju extends Kue{
  constructor(options){
    let option = options||{};
    option.nama = 'kue keju';
    option.waktuMatang = 20;
    super(option);
    this.jenisKeju = option.jenisKeju || 'Cheddar';
  }
}

class KueFactory{
  static createKue(name){
    switch (name) {
      case 'kueKeju':
        return new KueKeju();
        break;
      case 'kueCoklat':
        return new KueCoklat();
        break;
      case 'kueKacang':
        return new KueKacang();
        break;
      default:

    }
  }

}

class bakingSimulator{
  constructor(){
    this.kuekue = [];
  }

  addKue(kue){
    this.kuekue.push(kue);
  }

  bakeForFiveMin(){
    for(let i in this.kuekue){
      this.kuekue[i].bake();
    }
  }

  showStatusKue() {
    let res = ''
    for(let i in this.kuekue){
      res+=this.kuekue[i].nama;
      res+=` ${this.kuekue[i].waktuDiOven} menit, status ${this.kuekue[i].status}\n`;
    }
    return res;
  }
}

let baking = new bakingSimulator();
baking.addKue(KueFactory.createKue('kueKeju'));
baking.bakeForFiveMin();
baking.addKue(KueFactory.createKue('kueCoklat'));
console.log(baking.showStatusKue());
baking.bakeForFiveMin();
baking.bakeForFiveMin();
console.log(baking.showStatusKue());
baking.bakeForFiveMin();
baking.bakeForFiveMin();
baking.bakeForFiveMin();
baking.bakeForFiveMin();
console.log(baking.showStatusKue());
