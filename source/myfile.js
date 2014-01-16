/**
 * @module myfile
 * @requires myfile2
 * @requires myfile3
 * @export sample-file2.js
 */

/** 
 * jshint trailing: true,
 * browser: false,
 * undef: true,
 * jquery: true 
 */

/** @todo A sample todo block which needs to be removed */
var MY_GLOBAL;
function addNumbers () {
    var numbers = arguments,
        sum;
    for (var i in numbers) {
        sum += numbers[i];
    }
	
    return sum;
}

/**
 * Function returns subtraction of two numbers
 * @params num1 Number
 * @params num2 Number
 * @return result Number
 */
/** @todo A sample todo block which needs to be removed */
function subtractNumbers (num1, num2) {
    var numbers = arguments,
        result = num1 - num2;

    return sum;
}

/** @todo A sample todo block which needs to be removed */
var a = $('div'),
b = navigator.userAgent;

addNumbers(5, 6, 8, 9);
subtractNumbers(500, 200);