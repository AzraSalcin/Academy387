var bl = require("bl");
var http = require("http");

http.get(process.argv[2], (res) => {
		res.pipe(bl(function(err, data){
		console.log(data.toString());
		//console.log("Prvi");
	}))
	res.on("end", (err, data) => {
		http.get(process.argv[3], (res) => {
		res.pipe(bl(function(err, data){
		console.log(data.toString());
		//console.log("Drugi");
		}))
		res.on("end", (err, data) => {
			http.get(process.argv[4], (res) => {
			res.pipe(bl(function(err, data) {
			console.log(data.toString());
			//console.log("Treci");	
			}))
			})
		})
	})
})