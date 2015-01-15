/*write a function named 'replaceOdd' that takes in an array of numbers, and changes all the odd numbers to the letter 'O'

replaceOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
result --> ["O", 2, "O", 4, "O", 6, "O", 8, "O", 10]
*/

var replaceOdd = function (arr) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] % 2 !== 0) {
			arr[i] = "O";

		};
	};
};

replaceOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
