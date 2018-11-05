import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { User } from '../models/index';

@Injectable()
export class UserService {
    constructor(private http: Http) { }

    getAll() {
        return this.http.get('/users').map((response: Response) => response.json());
    }

    getById(id: string) {
    	return this.http.get('/users/' + id).map((response: Response) => response.json());
    }

    create(user: User) {
        return this.http.post('/users/', user).map((response: Response) => response.json());
    }

    update(user: User) {
    	return this.http.put('/users/' + user.id, user).map((response: Response) => response.json());
    }

    delete(id: string) {
    	return this.http.delete('/users/' + id).map((response: Response) => response.json());
    }
}