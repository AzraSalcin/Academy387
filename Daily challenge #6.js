function arrayDuplicates(arrayF){
 arrayF.sort();
 for (var i=0; i < arrayF.length; i++){
	if(arrayF[i] != arrayF[i+1]){
	delete arrayF[i]}
 	}
 	return arrayF;
 }	
 
 niz = [1,99,1,5,99,32,2,6,32,113,11,5,18];
 console.log(arrayDuplicates(niz));


