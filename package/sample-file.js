/**
 * @module myfile
 * @_requires myfile2
 * @_requires myfile3
 * @todo
 * @export sample-file.js
 */
function addNumbers () {
    var numbers = arguments,
        sum;
    for (var i in numbers) {
        sum += numbers[i];
    }
	
    return sum;
}/** @todo A sample todo block which needs to be removed */
b = navigator.userAgent;

addNumbers(5, 6, 8, 9);