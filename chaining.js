var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

//Sort the numbers in descending order (10, 9, 8, 7, etc)

var sortedIntegers = integers.sort(
	function(first, second) {
		return first - second;
	}
);
sortedIntegers.reverse();
console.log("Sorted Integers in reverse: " +sortedIntegers);


//Remove any integers greater than 19

function filterIt(myIntegers){
	if (myIntegers < 19) {
		return myIntegers;
	}
}	
var filteredIntegers = integers.filter(filterIt);
console.log("filtered Integers: " + filteredIntegers);


// Multiply each remaining number by 1.5 and then subtract 1.

function outputNewIntegers(filteredIntegers){
	newIntegers = (filteredIntegers * 1.5)-1;
	return newIntegers;
}
var newfiltInt = filteredIntegers.map(outputNewIntegers);
console.log("newfiltInt", newfiltInt);


// Then output (either in the DOM or the console) the sum of all the resulting numbers.

function sumIntegers(preValue, currentValue) {
	return preValue + currentValue;
console.log(newfiltInt);
};

var sumNewIntegers = newfiltInt.reduce(sumIntegers);
console.log("Sum of filtered integers: " + sumNewIntegers);

