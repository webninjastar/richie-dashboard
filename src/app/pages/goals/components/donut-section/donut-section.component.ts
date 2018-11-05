import { Component, Input } from '@angular/core';
import { AmChartsService, AmChart } from "@amcharts/amcharts3-angular";

@Component({
  selector: "donut-section",
  templateUrl: './donut-section.component.html',
  styleUrls: ['./donut-section.component.css']
})
export class DonutSectionComponent {
  @Input() sectionTitle:String;

  private chart: AmChart;
  private chart2: AmChart;
  private chart3: AmChart;
  private chart4: AmChart;
  private chart5: AmChart;

  constructor(private AmCharts: AmChartsService) {}

  ngAfterViewInit() {
    this.chart = this.AmCharts.makeChart("chartdiv", {
      "type": "pie",
      "startDuration": 0,
      "theme": "light",
      "addClassNames": true,
      "legend": {
        "position": "absolute",
        "maxColumns": 1,
        "top": 110,
        "align": "center",
        "valueText": ""
      },
      "responsive": {
        "enabled": true,
        "rules": [
          {
            "maxWidth": 400,
            "overrides": {
              "legend": {
                "enabled": false
              }
            }
          }
        ]
      },
      "dataProvider": [ {
        "title": "STOCKS",
        "value": 82004.85,
        "color": "#007ee5"
      }, {
        "title": "BONDS",
        "value": 9113.40,
        "color": "#7fde95"
      } ],
      "titleField": "title",
      "valueField": "value",
      "colorField": "color",
      "labelRadius": 5,
      "radius": "25%",
      "innerRadius": "70%",
      "labelText": "[[]]"
    });
    this.chart2 = this.AmCharts.makeChart("chart2div", {
      "type": "pie",
      "startDuration": 0,
      "theme": "light",
      "addClassNames": true,
      "legend": {
        "position": "absolute",
        "maxColumns": 1,
        "top": 110,
        "align": "center",
        "valueText": ""
      },
      "responsive": {
        "enabled": true,
        "rules": [
          {
            "maxWidth": 400,
            "overrides": {
              "legend": {
                "enabled": false
              }
            }
          }
        ]
      },
      "dataProvider": [ {
        "title": "STOCKS",
        "value": 82004.85,
        "color": "#007ee5"
      }, {
        "title": "BONDS",
        "value": 9113.40,
        "color": "#7fde95"
      } ],
      "titleField": "title",
      "valueField": "value",
      "colorField": "color",
      "labelRadius": 5,
      "radius": "25%",
      "innerRadius": "70%",
      "labelText": "[[]]"
    });
    this.chart3 = this.AmCharts.makeChart("chart3div", {
      "type": "pie",
      "startDuration": 0,
      "theme": "light",
      "addClassNames": true,
      "legend": {
        "position": "absolute",
        "maxColumns": 1,
        "top": 110,
        "align": "center",
        "valueText": ""
      },
      "responsive": {
        "enabled": true,
        "rules": [
          {
            "maxWidth": 400,
            "overrides": {
              "legend": {
                "enabled": false
              }
            }
          }
        ]
      },
      "dataProvider": [ {
        "title": "STOCKS",
        "value": 82004.85,
        "color": "#007ee5"
      }, {
        "title": "BONDS",
        "value": 9113.40,
        "color": "#7fde95"
      } ],
      "titleField": "title",
      "valueField": "value",
      "colorField": "color",
      "labelRadius": 5,
      "radius": "25%",
      "innerRadius": "70%",
      "labelText": "[[]]"
    });
    this.chart4 = this.AmCharts.makeChart("chart4div", {
      "type": "pie",
      "startDuration": 0,
      "theme": "light",
      "addClassNames": true,
      "legend": {
        "position": "absolute",
        "maxColumns": 1,
        "top": 110,
        "align": "center",
        "valueText": ""
      },
      "responsive": {
        "enabled": true,
        "rules": [
          {
            "maxWidth": 400,
            "overrides": {
              "legend": {
                "enabled": false
              }
            }
          }
        ]
      },
      "dataProvider": [ {
        "title": "STOCKS",
        "value": 82004.85,
        "color": "#007ee5"
      }, {
        "title": "BONDS",
        "value": 9113.40,
        "color": "#7fde95"
      } ],
      "titleField": "title",
      "valueField": "value",
      "colorField": "color",
      "labelRadius": 5,
      "radius": "25%",
      "innerRadius": "70%",
      "labelText": "[[]]"
    });
    this.chart5 = this.AmCharts.makeChart("chart5div", {
      "type": "pie",
      "startDuration": 0,
      "theme": "light",
      "addClassNames": true,
      "legend": {
        "position": "absolute",
        "maxColumns": 1,
        "top": 110,
        "align": "center",
        "valueText": ""
      },
      "responsive": {
        "enabled": true,
        "rules": [
          {
            "maxWidth": 400,
            "overrides": {
              "legend": {
                "enabled": false
              }
            }
          }
        ]
      },
      "dataProvider": [ {
        "title": "STOCKS",
        "value": 82004.85,
        "color": "#007ee5"
      }, {
        "title": "BONDS",
        "value": 9113.40,
        "color": "#7fde95"
      } ],
      "titleField": "title",
      "valueField": "value",
      "colorField": "color",
      "labelRadius": 5,
      "radius": "25%",
      "innerRadius": "70%",
      "labelText": "[[]]"
    });
  }

  ngOnDestroy() {
    if (this.chart) {
      this.AmCharts.destroyChart(this.chart);
    }
    if (this.chart2) {
      this.AmCharts.destroyChart(this.chart2);
    }
    if (this.chart3) {
      this.AmCharts.destroyChart(this.chart3);
    }
    if (this.chart4) {
      this.AmCharts.destroyChart(this.chart4);
    }
    if (this.chart5) {
      this.AmCharts.destroyChart(this.chart5);
    }
  }
}