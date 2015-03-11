function select(data, key, values){
	var array = [];
	for(var i = 0; i<data.length; i++){
		for(var j = 0; j<values.length; j++){
			if(data[i].name === values[j]){
				array.push(data[i]);	
            }		
        }
	}
	return array.;
}