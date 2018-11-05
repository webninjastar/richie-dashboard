import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Goals } from '../models/index';

@Injectable()
export class GoalsService {
	constructor(private http: Http) {}

	save(goals: Goals) {
		return this.http.post('/goals', goals).map((response: Response) => response.json());
	}
}