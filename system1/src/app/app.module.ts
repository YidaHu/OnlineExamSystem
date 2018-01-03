import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {LoginServeService} from "./serve/login-serve.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { MainComponent } from './components/main/main.component';
import { MainsComponent } from './components/mains/mains.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorPageComponent,
    MainComponent,
    MainsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule.forRoot()
  ],
  providers: [
    LoginServeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
