function filtra(array){
	var arr = array.filter(function(item){
	return (item % 2 == 0);		
	});
	return arr;
}