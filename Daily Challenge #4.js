// sa for loop

/*var board = " ";
for(var i = 0; i < 8; i++){
 for(var a = 0; a < 20; a++){
  board += (a % 2) == (i % 2) ? " " : "#";
 }
 board += "\n";
}*/


//sa while loop dodat cemo i lovca


function pomjeriLovca(pocetna, krajnja){
var razlika_x = pocetna[0] - krajnja[0];
if(razlika_x < 0) {
	razlika_x *= -1;
	}
	
var razlika_y = pocetna[1] - krajnja[1];	
if(razlika_y < 0) {
	razlika_y *= -1;
}

if(razlika_x!=razlika_y) {
	return "Lovac ne moze da ide na tu poziciju sa trenutne";
}
else {
	return "Lovac moze da ide na tu poziciju";
}
}

function pomjeriTop (pocetna, krajnja) {
	if (pocetna[0]==krajnja[0] || pocetna[1]==krajnja[1]) {
		return "Top moze da ide na tu poziciju";
	}
	else {
		return "Top ne moze da ide na tu poziciju";
	}
	
}

var pocetna = [4,4];
var krajnja = [5,3];
console.log(pomjeriLovca(pocetna, krajnja));
console.log(pomjeriTop(pocetna, krajnja));








