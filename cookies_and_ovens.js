const PastryCook = require('./pastry-cook.js');

const dimitri = new PastryCook('Dimitri Wahyudiputra');

dimitri.greet();

dimitri.cook('coklat', 25);

while (!dimitri.doneCooking) {

  dimitri.nowCooking.nextFiveMinutes();

  dimitri.alertCakeStatus();

}
