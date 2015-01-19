/*write a function called 'reverse' that takes in a string 
 & returns the string reversed.  Do NOT use the '.reverse()'
  method on the arrays prototype. */


var reverse = function (string) {
	var stringArr = string.split('');
	var revString = [];
	for (var i = stringArr.length -1; i >= 0; i--) {
		revString.push(stringArr[i]);
	};
	return(revString.join());
};

reverse("i love Ash");