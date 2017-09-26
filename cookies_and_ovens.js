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

class Kue {
  constructor(namaKue) {
    this.nama = namaKue;
  }
}

class KueKacang extends Kue{
  constructor(namaKue) {
    super(namaKue)
    this.lama = 20;
  }
}

class KueCoklat extends Kue{
  constructor(namaKue) {
    super(namaKue)
    this.lama = 30;
  }
}

class KueKeju extends Kue{
  constructor(namaKue) {
    super(namaKue);
    this.lama = 35;
  }
}

class TukangMasak {
  masakKue(namaKue, lamaMasak) {
    var obj = null;
    if(namaKue.indexOf('Kacang') > - 1){
      var newKue = KueKacang(namaKue);
      obj = newKue;
    }
    else if(namaKue.indexOf('Coklat') > -1){
      var newKue = KueCoklat(namaKue);
      obj = newKue;
    }
    else{
      var newKue = KueKeju(namaKue);
      obj = newKue;
    }
  }
}
