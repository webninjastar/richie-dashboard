import { Component } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { jqxChartComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxchart';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { AmChartsService, AmChart } from "@amcharts/amcharts3-angular";

@Component({
	templateUrl: './view-goal.component.html',
  	styleUrls: ['./view-goal.component.css']
})

export class ViewGoalComponent {

    private chart: AmChart;
    private sparkchart: AmChart;
    private areachart: AmChart;
    max1 = 100;
    min1 = 0;
    step1 = 10;
    value1 = 90;
    max2 = 50;
    min2 = 1;
    step2 = 1;
    value2 = 20;

	constructor(private AmCharts: AmChartsService) {}

    ngAfterViewInit() {
        this.chart = this.AmCharts.makeChart("donut-chart", {
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
        this.sparkchart = this.AmCharts.makeChart( "spark-chart", {
          "type": "serial",
          "theme": "light",
          "responsive": {
            "enabled": true,
            "rules": [
              {
                "maxWidth": 400,
                "maxHeight": 150,
                "overrides": {
                  "legend": {
                    "enabled": false
                  }
                }
              }
            ]
          },
          "dataProvider": [ {
            "day": 1,
            "value": 120
          }, {
            "day": 2,
            "value": 124
          }, {
            "day": 3,
            "value": 127
          }, {
            "day": 4,
            "value": 122
          }, {
            "day": 5,
            "value": 121
          }, {
            "day": 6,
            "value": 123
          }, {
            "day": 7,
            "value": 118
          }, {
            "day": 8,
            "value": 113
          }, {
            "day": 9,
            "value": 122
          }, {
            "day": 10,
            "value": 125,
            "bullet": "round"
          } ],
          "categoryField": "day",
          "autoMargins": false,
          "marginLeft": 0,
          "marginRight": 5,
          "marginTop": 0,
          "marginBottom": 0,
          "graphs": [ {
            "valueField": "value",
            "bulletField": "bullet",
            "fillAlphas": 0.2,
            "lineThickness": 3,
            "showBalloon": false,
            "lineColor": "#7fde95"
          } ],
          "valueAxes": [ {
            "gridAlpha": 0,
            "axisAlpha": 0
          } ],
          "categoryAxis": {
            "gridAlpha": 0,
            "axisAlpha": 0,
            "startOnAxis": true
          }
        });
        this.areachart = this.AmCharts.makeChart("area-chart", {
          "type": "serial",
          "theme": "light",
          "marginRight":30,
          "legend": {
              "equalWidths": true,
              "position": "bottom",
              "valueAlign": "center",
              "valueWidth": 80
          },
          "dataProvider": [{
              "year": 1994,
              "cars": 1587,
              "motorcycles": 650,
              "bicycles": 121
          }, {
              "year": 1995,
              "cars": 1567,
              "motorcycles": 683,
              "bicycles": 146
          }, {
              "year": 1996,
              "cars": 1617,
              "motorcycles": 691,
              "bicycles": 138
          }, {
              "year": 1997,
              "cars": 1630,
              "motorcycles": 642,
              "bicycles": 127
          }, {
              "year": 1998,
              "cars": 1660,
              "motorcycles": 699,
              "bicycles": 105
          }, {
              "year": 1999,
              "cars": 1683,
              "motorcycles": 721,
              "bicycles": 109
          }, {
              "year": 2000,
              "cars": 1691,
              "motorcycles": 737,
              "bicycles": 112
          }, {
              "year": 2001,
              "cars": 1298,
              "motorcycles": 680,
              "bicycles": 101
          }, {
              "year": 2002,
              "cars": 1275,
              "motorcycles": 664,
              "bicycles": 97
          }, {
              "year": 2003,
              "cars": 1246,
              "motorcycles": 648,
              "bicycles": 93
          }, {
              "year": 2004,
              "cars": 1318,
              "motorcycles": 697,
              "bicycles": 111
          }, {
              "year": 2005,
              "cars": 1213,
              "motorcycles": 633,
              "bicycles": 87
          }, {
              "year": 2006,
              "cars": 1199,
              "motorcycles": 621,
              "bicycles": 79
          }, {
              "year": 2007,
              "cars": 1110,
              "motorcycles": 210,
              "bicycles": 81
          }, {
              "year": 2008,
              "cars": 1165,
              "motorcycles": 232,
              "bicycles": 75
          }, {
              "year": 2009,
              "cars": 1145,
              "motorcycles": 219,
              "bicycles": 88
          }, {
              "year": 2010,
              "cars": 1163,
              "motorcycles": 201,
              "bicycles": 82
          }, {
              "year": 2011,
              "cars": 1180,
              "motorcycles": 285,
              "bicycles": 87
          }, {
              "year": 2012,
              "cars": 1159,
              "motorcycles": 277,
              "bicycles": 71
          }],
          "valueAxes": [{
              "stackType": "regular",
              "gridAlpha": 0.07,
              "position": "right"
          }],
          "graphs": [{
              "balloonText": "<img src='https://www.amcharts.com/lib/3/images/car.png' style='vertical-align:bottom; margin-right: 10px; width:28px; height:21px;'><span style='font-size:14px; color:#000000;'><b>[[value]]</b></span>",
              "fillAlphas": 0.6,
              "lineAlpha": 0.4,
              "title": "Cars",
              "valueField": "cars"
          }, {
              "balloonText": "<img src='https://www.amcharts.com/lib/3/images/motorcycle.png' style='vertical-align:bottom; margin-right: 10px; width:28px; height:21px;'><span style='font-size:14px; color:#000000;'><b>[[value]]</b></span>",
              "fillAlphas": 0.6,
              "lineAlpha": 0.4,
              "title": "Motorcycles",
              "valueField": "motorcycles"
          }, {
              "balloonText": "<img src='https://www.amcharts.com/lib/3/images/bicycle.png' style='vertical-align:bottom; margin-right: 10px; width:28px; height:21px;'><span style='font-size:14px; color:#000000;'><b>[[value]]</b></span>",
              "fillAlphas": 0.6,
              "lineAlpha": 0.4,
              "title": "Bicycles",
              "valueField": "bicycles"
          }],
          "plotAreaBorderAlpha": 0,
          "marginTop": 10,
          "marginLeft": 0,
          "marginBottom": 0,
          "chartCursor": {
              "cursorAlpha": 0
          },
          "categoryField": "year",
          "categoryAxis": {
              "startOnAxis": true,
              "axisColor": "#DADADA",
              "gridAlpha": 0.07,
              "title": "Year"
          }
        });
    }

    ngOnDestroy() {
        if (this.chart) {
          this.AmCharts.destroyChart(this.chart);
        }
        if (this.sparkchart) {
            this.AmCharts.destroyChart(this.sparkchart);
        }
        if (this.areachart) {
          this.AmCharts.destroyChart(this.areachart);
        }
    }
}