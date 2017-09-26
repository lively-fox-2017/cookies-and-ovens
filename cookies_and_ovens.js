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
class CocholateCake{
  constructor(cookingTime,status) {
    this.cookingTime=cookingTime,
    this.status=this.cook(this.cookingTime);
  }
  cook(time){
    if (time<=10) {
      return 'mentah'
    }
    if (time>10 && time<=15) {
      return 'hampir matang'
    }
    if (time>15 && time<=20) {
      return 'matang'
    }
    if (time>20) {
      return 'hangus'
    }
  }
}

class PeanutCake {
  constructor(cookingTime,status) {
    this.cookingTime=cookingTime,
    this.status=this.cook(this.cookingTime);
  }
  cook(time){
    if (time<=15) {
      return 'mentah'
    }
    if (time>15 && time<=25) {
      return 'hampir matang'
    }
    if (time>25 && time<=30) {
      return 'matang'
    }
    if (time>30) {
      return 'hangus'
    }
  }
}
class CheeseCake {
  constructor(cookingTime,status) {
    this.cookingTime=cookingTime,
    this.status=this.cook(this.cookingTime);
  }
  cook(time){
    if (time<=20) {
      return 'mentah'
    }
    if (time>20 && time<=30) {
      return 'hampir matang'
    }
    if (time>30 && time<=35) {
      return 'matang'
    }
    if (time>35) {
      return 'hangus'
    }
  }
}

class Ovens {
  static cook(name,time){
    if (name=='Cocholate Cake') {
      let cook=new CocholateCake(time)
      return `${name}, menit ke ${time} : ${cook.status}`
    } else
    if (name=='Peanut Cake') {
      let cook=new PeanutCake(time)
      return `${name}, menit ke ${time} : ${cook.status}`
    } else
    if (name=='Cheese Cake') {
      let cook=new CheeseCake(time)
      return `${name}, menit ke ${time} : ${cook.status}`
    } else {
      return `jenis kue yang dimasak tidak terdaftar`
    }
  }
}
console.log('--cooking Cocholate Cake--');
console.log(Ovens.cook('Cocholate Cake',5));
console.log(Ovens.cook('Cocholate Cake',10));
console.log(Ovens.cook('Cocholate Cake',15));
console.log(Ovens.cook('Cocholate Cake',20));
console.log(Ovens.cook('Cocholate Cake',25));
console.log('--cooking Peanut Cake--');
console.log(Ovens.cook('Peanut Cake',10));
console.log(Ovens.cook('Peanut Cake',15));
console.log(Ovens.cook('Peanut Cake',20));
console.log(Ovens.cook('Peanut Cake',25));
console.log(Ovens.cook('Peanut Cake',30));
console.log('--cooking Cheese Cake--');
console.log(Ovens.cook('Cheese Cake',15));
console.log(Ovens.cook('Cheese Cake',20));
console.log(Ovens.cook('Cheese Cake',30));
console.log(Ovens.cook('Cheese Cake',35));
console.log(Ovens.cook('Cheese Cake',40));
