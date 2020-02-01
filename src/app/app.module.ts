import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './layouts/public-layouts/login/login.component';
import { RegisterComponent } from './layouts/public-layouts/register/register.component';
import { DashboardComponent } from './layouts/private-layouts/dashboard/dashboard.component';
import { QuestionsOptionsComponent } from './layouts/private-layouts/questions-options/questions-options.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    QuestionsOptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
