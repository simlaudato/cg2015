function random(n){
	var array = [];
	for(var i = 0; i < n; i++){
		array.push(parseInt(Math.random()*100));
	}
	return array;
}

function filterEvenNumbers(array){
	var a = array.filter(function(item){
		return item % 2 !== 0;
	});
	return a;
}

function sort(array){
	var x = function (value1, value2) {
 		return value1 - value2;
	};
	return array.sort(x);
}