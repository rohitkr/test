"use strict";
function FusionChartsConstructor(fusionchartsService, chartConfig) {
    var FC = fusionchartsService.getFusionChartsStatic();
    var FusionCharts = FC.default || FC;
    return new FusionCharts(chartConfig);
}
exports.FusionChartsConstructor = FusionChartsConstructor;
//# sourceMappingURL=fusioncharts.constructor.js.map