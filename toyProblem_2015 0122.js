Given an arbitrary input string, return the first non-repeated character in the string. For example:
firstNonRepeatedCharacter('ABA'); // --> 'B'
firstNonRepeatedCharacter('AABCABD'); // --> 'C'

var firstNonRepeatedCharacter = function(string) {
	for(var i = 0; i < string.length; i++) {
		var x = string.charAt(i);
		if(string.indexOf(x) === i && string.indexOf(x, i + 1) === -1) {
			return x;
		};
	};
	return "All letters are repeated";
};

