/*Write a function called 'simpleSymbols' that takes in a string parameter and determines
if it is an acceptable sequence by either returning the string true or false.  The str parameter
will be composed of + and = symbols with several letters between them (ie - ++d+===+c++==a) and
for the string to be true each letter must be surrounded by a + symbol.  So the string to the left
would be false.  The string will not be empty and will have at least one letter.*/

var simpleSymbols = function (str) {
	var string = str.split('+');
		console.log(string);
	for (var i = 0; i < string.length; i++) {
		if (string[i] === "+''+") {
		return true;
		};	
		return false;
	};
};

simpleSymbols('+I+==+L+=====+A+===');


************CLASS SOLUTION*****************

var simpleSymbols1 = function(str) {
	for (var i = 0; i < str.length; i++) {
		if(str.charAt(i) !== '+' && str.charAt(i) !== '=') {
			if(str.charAt(i - 1) !== '+' || str.charAt(i + 1) !== '+') {
				return false;
			};
		};
	};
	return true;
};
simpleSymbols1('+I+==+L+=====+A+===');

********************************
Regular Expressions - MDN

*********************************
Jacob''s Hash

var simpleSymbols1 = function(str) {
	var letter = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	var hash = {};
	for (var i = 0; i < letters.length; i++) {
		hash[letters[i]] = true;
	};
	for (var i = 0; i < letters.length; i++) {
		if(hash[str[i]] && (str[i-1] !== '+' || str[i+1] !== '+')) {
			return false;
		};
	};
	return true;
};