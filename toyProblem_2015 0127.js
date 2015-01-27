/*Write a function that generates an array of integers of the Fibonacci sequence, up to i = 100.  The Fibonacci sequence is defined by: Fn = Fn-1 + Fn-2, which means to find Fn you add teh previous two numbers up.  The first two numbers in teh sequence are 0 and 1.  Then write a function to check if a given number is in the Fibonacci sequence, return 'yes' if it is, if not return the string 'no'.*/

var fib = [0, 1];
for (var i = 2; i < 100; i++) {
	fib[i] = fib[i-1] + fib[i-2];
	fib.push(fib[i]);
	console.log(fib);
};

var fibCheck = function(num) {
	if(num === fib[i]) {
		return 'yes'
	}
	return 'no';
};
fibCheck(7);

*******TRAVIS MILLER************

var fibN = function(num) {
	var array = [0, 1];
	var total = 0;
	var i = 2;
	while (total < num) {
		total = array[i - 2] + array[i -1];
		array.push(total);
		i++;
	}
	if(array.indexOf(num) !== -1) {
		return 'yes';
	}
	return 'no';
};
fibN(21);

************JASON TURNER*************
var fib = function(num) {
	var fibnArray = [0, 1];
	for(var i = 0; i < 99; i++) {
		fibnArray.push(fibnArray[fibnArray.length - 1] + fibnArray[fibnArray.length - 2]);
	};
	if(fibnArray.indexOf(num) !== -1) {
		return "yes";
	}
	return "no";
};
fib(21);