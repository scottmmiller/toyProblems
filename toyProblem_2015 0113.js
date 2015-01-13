/*Write a function called 'combinator' that is given two arrays as arguments.
	The first array is an array of first names, and the second array is an array
	of last names.  Have the function return a new array combining the first names
	and the last names.

	combinator(['Tyler', 'Ean', 'Cahlan'], ['McGinnis', 'Platter', 'Sharp']);

	['Tyler McGinnis', 'Ean Platter', 'Cahlan Sharp'];*/
	
var firstName = ['Tyler', 'Ean', 'Cahlan'];
var lastName = ['McGinnis', 'Platter', 'Sharp'];
var fullName = [];

var combinator = function () {
	for (var i = 0; i < firstName.length; i++) {
		for (var j = 0; i < lastName.length; i++) {  //No need for 2nd loop as firstName is same length as lastName
			fullName.push(firstName[i] + ' ' + lastName[i]);
		};
	};
};
combinator();
fullName