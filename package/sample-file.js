/**
 * @module myfile
 * @_requires myfile2
 * @_requires myfile3
 * @todo
 * @export sample-file.js
 *//* jshint trailing: true, browser: false, undef: true, jquery: true *//** @todo A sample todo block which needs to be removed */var MY_GLOBAL;
function addNumbers () {
    var numbers = arguments,
        sum;
    for (var i in numbers) {
        sum += numbers[i];
    }
	
    return sum;
}/** @todo A sample todo block which needs to be removed */var a = $('div'),
b = navigator.userAgent;

addNumbers(5, 6, 8, 9);