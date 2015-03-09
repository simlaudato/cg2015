//matrice identità 
for(var i = 1; i <=10; i+=1){
	x = "";
	for(var j=1; j<=10; j+=1){
		x+=((i===j) ? 1+", \t" : 0+", \t");
	}
	console.log(x);
}