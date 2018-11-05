import * as $ from 'jquery';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { customHttpProvider } from './helpers/index';
import { AlertComponent } from './directives/index';
import { AuthGuard } from './shared/guard/auth.guard';
import { AlertService, UserService, AuthenticationService, GoalsService } from './services/index';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgProgressModule } from 'ngx-progressbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    customHttpProvider,
    AuthGuard,
    AlertService,
    UserService,
    AuthenticationService,
    GoalsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
