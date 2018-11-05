import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

declare var jquery:any;
declare var $ :any;

@Component({
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {	
	budgetData: any = {};
  	balances: any = {};
  	budgets: any = {};
  	monthArray: any[] = [
        { id: 1, val: 'Jan',  name: 'January' },
        { id: 2, val: 'Feb',  name: 'February' },
        { id: 3, val: 'Mar',  name: 'March' },
        { id: 4, val: 'Apr',  name: 'April' },
        { id: 5, val: 'May',  name: 'May' },
        { id: 6, val: 'Jun',  name: 'June' },
        { id: 7, val: 'Jul',  name: 'July' },
        { id: 8, val: 'Aug',  name: 'August' },
        { id: 9, val: 'Sep',  name: 'September' },
        { id: 10, val: 'Oct',  name: 'October' },
        { id: 11, val: 'Nov',  name: 'November' },
        { id: 12, val: 'Dec',  name: 'December' }
    ];
    selectedMonth: string = "";
    selectedYear: number;
	totalLeft: number;

  	constructor(
  		private router: Router,
  		private http: Http
  	) { }

  	ngOnInit() {
  		let today = new Date();
  		let currentMonth = today.getMonth() + 1;
  		this.monthArray.forEach(obj => {  			
  			if(obj.id == currentMonth ) {
  				this.selectedMonth = obj.name;
  				this.selectedYear = today.getFullYear();
  			}
  		});
  		let userId = sessionStorage.getItem('user_id');
  		this.budgetData = {
		    user_id: "cff8768a-2689-4917-84d1-8a3edc053b6f",
		    budget_id: "rpRADxJPZ7t8eqZKR7GyfXQX1ErAQXfyjdyLD",
		    month: 8,
		    year: 2017,
		    balances: {
		        "budget": 1000,
		        "current_spending": 200,
		        "pct_spending": 20,
		        "left": 800,
		        "today_pct": 50
		    },
		    budgets: [
		    	{
		    		"id": "gas_fuel",
		    		"type": "Gas & Fuel",
	                "today_pct": 50,
	                "budget": 3690,
	                "budget_spending": 1200,
	                "left": 2490,
	                "budget_spending_pct": 67,
	                "budget_spending_left_pct": 23,
	                "active_monitor": true
	            }, 
	            {
	            	"id": "education",
	            	"type": "Education",
	                "today_pct": 50,
	                "budget": 3690,
	                "budget_spending": 1200,
	                "left": 2490,
	                "budget_spending_pct": 67,
	                "budget_spending_left_pct": 23,
	                "active_monitor": false
	            }
	        ]
		};

		this.balances = this.budgetData.balances;
		this.budgets = this.budgetData.budgets;
		this.totalLeft = this.budgetData.balances.left;

		this.http.get('/budget/' + userId + '&year=' + this.selectedYear + '&month=' + this.selectedMonth)
				 .map((res: Response) => res.json())
				 .subscribe(data => {
				 	this.budgetData = data;
				 	this.balances = data.balances;
				 	this.budgets = data.budgets;
				 	this.totalLeft = data.balances.left;
				 });
  	}

  	onMonthChange(month) {
  		this.monthArray.forEach(obj => {
  			if(obj.id == month )
  				this.selectedMonth = obj.name;
  		});

  		let userId = sessionStorage.getItem('user_id');

  		this.http.get('/budget/' + userId + '&year=' + this.selectedYear + '&month=' + this.selectedMonth)
				 .map((res: Response) => res.json())
				 .subscribe(data => {
				 	this.budgetData = data;
				 	this.balances = data.balances;
				 	this.budgets = data.budgets;
				 	this.totalLeft = data.balances.left;
				 });
  	}

  	onNextYear() {
  		this.selectedYear = this.selectedYear + 1;
  		
  		let userId = sessionStorage.getItem('user_id');

  		this.http.get('/budget/' + userId + '&year=' + this.selectedYear + '&month=' + this.selectedMonth)
				 .map((res: Response) => res.json())
				 .subscribe(data => {
				 	this.budgetData = data;
				 	this.balances = data.balances;
				 	this.budgets = data.budgets;
				 	this.totalLeft = data.balances.left;
				 });
  	}

  	onLastYear() {
  		this.selectedYear = this.selectedYear - 1;
  		
  		let userId = sessionStorage.getItem('user_id');

  		this.http.get('/budget/' + userId + '&year=' + this.selectedYear + '&month=' + this.selectedMonth)
				 .map((res: Response) => res.json())
				 .subscribe(data => {
				 	this.budgetData = data;
				 	this.balances = data.balances;
				 	this.budgets = data.budgets;
				 	this.totalLeft = data.balances.left;
				 });
  	}

  	updateLeftVaule(budgetLeft, budgetId, budgetType) {
  		let headers = new Headers({ 'Content-Type': 'application/json' });
	    let options = new RequestOptions({ headers: headers });
	    
	    let userId = sessionStorage.getItem('user_id');

	    let body = {
	    	"budget_id": budgetId,
	    	"type": budgetType, 
	    	"left": budgetLeft
	    }

  		this.http.put('/budget/' + userId, body, options)
				 .map((res: Response) => res.json())
				 .subscribe(
				 	data => {
				 		this.budgetData = data;
					 	this.balances = data.balances;
					 	this.budgets = data.budgets;
					 	this.totalLeft = data.balances.left;
				 	},
				 	error => {
				 		console.error("Error updating data!");
				 	}
				 );
  	}
}