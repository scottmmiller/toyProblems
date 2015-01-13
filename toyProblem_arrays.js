//Write a function called finder that accepts two arguments.  The first
//is a string, the second is an array.  

var nums = ["hello", "javascript", "awesome"];



var finder = function (str, arr) {
	for (var i = 0; i < arr.length; i++) {
		if (str === arr[i]) {
			return true;
		};
	};
	return false;
};

finder("javascript", nums);
finder("lame", nums);

//WRONG
var nums = ["hello", "javascript", "awesome"];



var finder = function (str) {
	for (var i = 0; i < nums.length; i++) {
		if (str === nums[i]) {
			return true;
		};
	};
	return false;
};