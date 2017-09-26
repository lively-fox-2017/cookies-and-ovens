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
//
class Kue {
  constructor(namaKue) {
    this.nama = namaKue;
    this.lama = 0;
    this.status = 'mentah';
  }
  masak(menit){
    if(this.lama < menit){
      this.status = 'hangus';
    }
    else if(this.lama === menit){
      this.status = 'matang';
    }
    else if(this.lama - 10 < menit){
      this.status = 'hampir matang';
    }
    else{
      this.status = 'mentah';
    }
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
    if(namaKue.toLowerCase().indexOf('kacang') > - 1){
      var newKue = new KueKacang(namaKue);
      obj = newKue;
    }
    else if(namaKue.indexOf('Coklat') > -1){
      var newKue = new KueCoklat(namaKue);
      obj = newKue;
    }
    else{
      var newKue = new KueKeju(namaKue);
      obj = newKue;
    }
    obj.masak(lamaMasak);
    return obj;
  }
}

var koki = new TukangMasak();
var menit = 0;
while(menit < 30){
  var hasilMasak = koki.masakKue('kue kacang panggang', menit);
  console.log(hasilMasak.nama + ", menit ke " +menit+" : "+hasilMasak.status);
  menit += 5;
}
