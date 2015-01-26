/*Write a function called 'ABCheck' that takes a string parameter and returns the string true if the characters a & b are separated by exactly 3 places anywhere in the string at least once. (ie: 'lane borrowed' would result in true because there is exactly three characters between a and b). Otherwise return the string false.*/

var ABCheck = function(string) {
	for (var i = 0; i < string.length; i++) {
		if(string.charAt(i) === 'a' && string.charAt(i+4) === 'b' || string.charAt(i) === 'A' && string.charAt(i+4) === 'B' || string.charAt(i) === 'a' && string.charAt(i+4) === 'B' || string.charAt(i) === 'A' && string.charAt(i+4) === 'b') {
			return true;
		}
	}return false;
};
ABCheck('lane borrowed');

*******Class Solution*********

//Brandon
var abCHeck = function(string) {
	var arr = str.toLowerCase().split('');
	for(var i = 0; i < arr.length; i++) {
		if(arr[i] === 'a' && (arr(i+4) 'b' || arr(i-4) === 'b')){
			return true;
		}
	} return false;
};

