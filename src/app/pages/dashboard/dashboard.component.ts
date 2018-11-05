import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { MatTabChangeEvent } from '@angular/material';
import { AmChartsService, AmChart } from "@amcharts/amcharts3-angular";

//import { InputToggleComponent, TotalGoalsComponent, DonutSectionComponent } from '../../components/index';

@Component({
	templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  tabs: any[] = [
    {
      "id": "day",
      "value": "1 DAY"
    },
    {
      "id": "week",
      "value": "1 WEEK"
    },
    {
      "id": "month",
      "value": "1 MONTH"
    },
    {
      "id": "six_months",
      "value": "6 MONTHS"
    },
    {
      "id": "year",
      "value": "1 YEAR"
    },
    {
      "id": "max",
      "value": "ALL"
    },
  ];
  net_worth: any = {};
	spending_data: any = {};
	private netWorthChart: AmChart;
	net_worth_icon: string = "fa-sort-up";
	net_worth_icon_color: string = "text-success";
	spending_icon: string = "fa-sort-down";
	spending_icon_color: string = "text-danger";
  spending_progress_status: string = "bg-danger";
  spending_progress_vaule: number = 30;
  spending_line_value: number = 20;
  spending_today_status: boolean = false;

  openPanel_1:boolean = false;
  openPanel_2:boolean = false;
  openPanel_3:boolean = false;
  openPanel_4:boolean = false;
  openPanel_5:boolean = false;

	constructor(private router: Router, private http: Http, private AmCharts: AmChartsService) { }

	ngOnInit() {
		let user_id = sessionStorage.getItem('user_id');
    this.net_worth = {
     user_id: "cff8768a-2689-4917-84d1-8a3edc053b6f",
     net_worth_id: "Slk22222-22222ws-sss232",
     total: 12229,
     pct: 0.71,
     updatedAt: "",
     span: 'max',
     chart: {
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
     }
   };
   this.netWorthChart = this.AmCharts.makeChart("day", this.net_worth.chart);
    this.spending_data = {
     user_id: "cff8768a-2689-4917-84d1-8a3edc053b6f",
     total_budget: 12229,
     pct: 0.71,
     total_spent:'3,000',
     spending_id: "Slk22222-22222ws-sss232",
     updatedAt: "",
     today_pct: 30,
     chart: {
             "series" : [
               {
                 "name": "Spending-Chart",
                 "type": "pie",
                 "radius": [25,"50%"],
                 "center" : ["60%", "50%"],
                 "data": [
                   {
                     "value":40,
                     "name":"HOME",
                     "itemStyle": {
                         "normal": {
                             "color": "#ffe8a0"
                         }
                     }
                   },
                   {
                     "value":30,
                     "name":"TRAVEL",
                     "itemStyle": {
                         "normal": {
                             "color": "#9d8373"
                         }
                     }
                   },
                   {
                     "value":35,
                     "name":"AUTO & TRANSPORT",
                     "itemStyle": {
                         "normal": {
                             "color": "#7fde95"
                         }
                     }
                   },
                   {
                     "value":20,
                     "name":"FOOD & DINNING",
                     "itemStyle": {
                         "normal": {
                             "color": "#007ee5"
                         }
                     }
                   },
                   {
                     "value":25,
                     "name":"HEALTH & FITNESS",
                     "itemStyle": {
                         "normal": {
                             "color": "#a191ff"
                         }
                     }
                   },
                   {
                     "value":15,
                     "name":"OTHERS",
                     "itemStyle": {
                         "normal": {
                             "color": "#f79c82"
                         }
                     }
                   }
                 ],
                 "label": {
                     "normal": {
                         "textStyle": {
                             "color": "#6b7277"
                         }
                     }
                 },
                 "labelLine": {
                     "normal": {
                         "lineStyle": {
                             "color": "#6b7277"
                         }
                     }
                 }
               }
             ]
         }
       };

    let userId = sessionStorage.getItem('user_id');

     this.http.get('/net-worth/' + user_id + '&span=day')
      .map((res: Response) => res.json())
      .subscribe(data => {
        this.net_worth = data;
        if (data.pct > 0) {
            this.net_worth_icon = "fa-sort-up";
            this.net_worth_icon_color = "text-success";
        } else {
          this.net_worth_icon = "fa-sort-down";
          this.net_worth_icon_color = "text-danger";
        }
        this.netWorthChart = this.AmCharts.makeChart("day", data.chart);
      });
		this.http.get('/spending/' + user_id)
				.map((res: Response) => res.json())
				.subscribe(data => {
					this.spending_data = data;
					if (data.today_pct <= 50) {
				    this.spending_icon = "fa-sort-up";
						this.spending_icon_color = "text-success";
            this.spending_progress_status = "bg-success";
            this.spending_today_status = true;
            this.spending_line_value = 50 - data.today_pct;
					} else {
						this.spending_icon = "fa-sort-down";
						this.spending_icon_color = "text-danger";
            this.spending_progress_status = "bg-danger";
            this.spending_today_status = false;
            this.spending_line_value = data.today_pct - 50;
					}
				});
	}

  changeIcon_1 = function() {
    this.openPanel_1 = this.openPanel_1 == false ? true: false;
  }
  changeIcon_2 = function() {
    this.openPanel_2 = this.openPanel_2 == false ? true: false;
  }
  changeIcon_3 = function() {
    this.openPanel_3 = this.openPanel_3 == false ? true: false;
  }
  changeIcon_4 = function() {
    this.openPanel_4 = this.openPanel_4 == false ? true: false;
  }
  changeIcon_5 = function() {
    this.openPanel_5 = this.openPanel_5 == false ? true: false;
  }
  createGoal = function() {
      this.router.navigate(['/goals/select']);
  }

  getNetWorth(event: MatTabChangeEvent) {
		let span = this.tabs[event.index].id;
		let user_id = sessionStorage.getItem('user_id');
    this.net_worth = {
     user_id: "cff8768a-2689-4917-84d1-8a3edc053b6f",
     net_worth_id: "Slk22222-22222ws-sss232",
     total: 12229,
     pct: 0.71,
     updatedAt: "",
     span: 'max',
     chart: {
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
     }
   };
		this.netWorthChart = this.AmCharts.makeChart(span, this.net_worth.chart)
		this.http.get('/net-worth/' + user_id + '&span=' + span)
				.map((res: Response) => res.json())
				.subscribe(data => {
					this.net_worth = data;
					if (data.pct > 0) {
					    this.net_worth_icon = "fa-sort-up";
							this.net_worth_icon_color = "text-success";
					} else {
						this.net_worth_icon = "fa-sort-down";
						this.net_worth_icon_color = "text-danger";
					}
					this.netWorthChart = this.AmCharts.makeChart(span, data.chart);
				});
  }
}
