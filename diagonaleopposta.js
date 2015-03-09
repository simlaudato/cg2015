//matrice identità con diagonale opposta
var x;
for(var i = 1; i <=10; i+=1){
	x = "";
	for(var j=1; j<=10; j+=1){
		if(10-j===i-1) x+=1+"\t";
		else x+=0+"\t";
	}
	console.log(x);
}