import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, UserService } from '../services/index';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent {
	model: any = {};

    constructor(
    	private router: Router,
    	private userService: UserService,
    	private alertService: AlertService) { }

    ngAfterViewInit() {
        $(function() {
            $(".preloader").fadeOut();
        });
        $(function() {
            (<any>$('[data-toggle="tooltip"]')).tooltip()
        });
        $('#to-recover').on("click", function() {
            $("#loginform").slideUp();
            $("#recoverform").fadeIn();
        });
    }
    
    signup() {
    	this.userService.create(this.model)
    		.subscribe(
    			data => {
    				this.alertService.success('Registration successful', true);
    				this.router.navigate(['/login']);
    			},
    			error => {
	    			this.alertService.error(error);
	    		});
    }
}
