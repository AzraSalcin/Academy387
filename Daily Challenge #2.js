var cTemp = celsius;
var cToFahr = cTemp * 9 / 5 + 32;
var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
console.log(message);

var fTemp = fahrenheit;
var fToCel = (fTemp - 32) * 5 / 9;
message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
console.log(message);