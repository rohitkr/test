/**
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
		importantStrRegEx = /\\!important$/,
        /** @todo 
         * A sample todo block which needs to be removed
         * A sample todo block which needs to be removed
         * A sample todo block which needs to be removed
		 */

		checkImportance = function (value) {

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
}]);