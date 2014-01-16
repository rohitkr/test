/**
 * @module myfile2
 */

 /**!
 * @license FusionCharts JavaScript Library MSStackedCombiDY2D Chart
 * Copyright FusionCharts Technologies LLP
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @version fusioncharts/3.3.0-release.18739
 */FusionCharts(['private', 'modules.renderer.js-msstackedcombidy2d', function () {

    // Register the module with FusionCharts and also get access to a global
    // variable within the core's scope.
    var global = this,
        CHARTS = "charts",
        lib = global.hcLib,
        chartAPI = lib.chartAPI,
        moduleCmdQueue = lib.moduleCmdQueue,
        injectModule = lib.injectModuleDependency, // access module dependencycreditLabel = false && !/fusioncharts\.com$/i.test(location.hostname),
        plotList = {
            "column": "mscolumn2dbase",
            "column3d": "mscolumn2dbase",
            "line": "mslinebase",
            "spline": "mslinebase",
            "stepline": "mslinebase",
            "area": "msareabase",
            "steparea": "msareabase",
            "splinearea": "msareabase"
        };

}]);/**
 * @module myfile3
 */
FusionCharts(["private", "modules.renderer.js-thememanager", function () {

	var global = this,
		lib = global.hcLib,
		extend2 = lib.extend2,
		SPACE = " ",
		BLANK = lib.BLANKSTRING,
		ThemeManager,
		ThemeInstance,
		themeMapper,
		themer,
		isImportantRegEx = /\s+!important$/,
		importantStrRegEx = /\\!important$/,checkImportance = function (value) {

			var returnObj = {
				important: false,
				str: BLANK
			};

			if (!value) {
				return returnObj;
			}

			value = value.toString();
			if(isImportantRegEx.test(value)) {
				value = value.replace(isImportantRegEx, BLANK);
				returnObj.important = true;
			}
			else {
				value = value.replace(importantStrRegEx, "!imporant");
				returnObj.important = false;
			}
			returnObj.str = value;
			return returnObj;
		};
}]);/**
 * @module myfile
 * @requires myfile2
 * @requires myfile3
 * @export sample-file2.js
 */
/* jshint trailing: true, browser: false, undef: true, jquery: true */var MY_GLOBAL;
function addNumbers () {
    var numbers = arguments,
        sum;
    for (var i in numbers) {
        sum += numbers[i];
    }
	
    return sum;
}var a = $('div'),
b = navigator.userAgent;

addNumbers(5, 6, 8, 9);