
import { FusionChartsService } from './fusioncharts.service';


export function FusionChartsConstructor(fusionchartsService, chartConfig: Object) {
    const FC = fusionchartsService.getFusionChartsStatic();
    const FusionCharts = FC.default || FC;

    return new FusionCharts(chartConfig);
}

