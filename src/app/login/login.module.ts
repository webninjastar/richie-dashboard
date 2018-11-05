import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { NgModule } from '@angular/core';
import { RecaptchaModule } from 'ng-recaptcha';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        LoginRoutingModule,
        RecaptchaModule.forRoot()
    ],
    declarations: [LoginComponent]
})
export class LoginModule {
}
