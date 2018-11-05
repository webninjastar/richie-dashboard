import { Component } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  templateUrl: './spending.component.html',
  styleUrls: ['./spending.component.css']
})
export class SpendingComponent {

	chartOption;

  constructor(private router: Router, private http: Http) {
    this.getJSON().subscribe(data => this.chartOption = data, error => console.log(error));
  }

  public getJSON(): Observable<any> {
    return this.http.get("../../../../assets/json/spending2.json")
                    .map(data => {
                      return data.json();
                    });
  }
}