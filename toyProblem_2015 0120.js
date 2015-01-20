/*write a function that returns the factorial of a number
the number 5 will return 5 * 4 * 3 * 2 * 1 --> 120
*/

var factorial = function (num) {
	num = num * 4 * 3 * 2 * 1;
	return num;
};
factorial(5);


var factorial3 = function (num) {
	for (var i = num - 1; i > 0; i--) {
		num *= i;
	}
	return num;
};
factorial3(6);