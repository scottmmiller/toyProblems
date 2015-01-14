/*Make the function invocation work

sum([1, 4, 3, 5, 2, 8], function (total){
	console.log('The total sum of the array is ' + total);
});*/

***MY SOLUTION

var sum = function (arr, callback) {
	var total = 0;
	for (var i = 0; i < arr.length; i++) {
		total += arr[i];
	};
	callback(total);
};

sum([1, 4, 3, 5, 2, 8], function (total){
	console.log('The total sum of the array is ' + total);
});

***CLASS SOLUTION



sum([1, 4, 3, 5, 2, 8], function (total){
	console.log('The total sum of the array is ' + total);
});