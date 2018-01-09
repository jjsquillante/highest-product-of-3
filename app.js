function getMax(array) {
 	// copy array
	var arrayCopy = array.map((item) => { return item; });
	var maxIntArray = [];
	
	for (var i = 0; i < 3; i++) {
		var max = Math.max(...arrayCopy);
		maxIntArray.push(max);
		var index = arrayCopy.indexOf(max);
		arrayCopy.splice(index,1);
	}
		
 	var product = 1;

	for (var j = 0; j < maxIntArray.length; j++) {
		product *= maxIntArray[j];
	}

	return maxIntArray;
}
