//write a script containing the function identity(n)
//that returns the n rows by n columns identity matrix
function identity(n){
	for (var i = 1; i<=n; i++){
		var row = "";
		for (var j = 1; j<=n; j++){
			row += ((i===j) ? 1+" \t" : 0+" \t");
		}
		console.log(row);
	}
}