import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, AuthenticationService } from '../services/index';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {
    model: any = {};
    returnUrl: string;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) {}

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();
    }

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

    resolved(captchaResponse: string) {
        console.log(`Resolved captcha with response ${captchaResponse}:`);
    }

    login() {
        this.authenticationService.login(this.model.email, this.model.password)
            .subscribe(
                data => {
                    this.router.navigate(['/dashboard']);
                    sessionStorage.setItem('id', data.id);
                },
                error => {
                    this.alertService.error(error);
                })
    }

}
