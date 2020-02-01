import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './layouts/public-layouts/login/login.component';
import { RegisterComponent } from './layouts/public-layouts/register/register.component';
import { DashboardComponent } from './layouts/private-layouts/dashboard/dashboard.component';
import { QuestionsOptionsComponent } from './layouts/private-layouts/questions-options/questions-options.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'questions-options', component: QuestionsOptionsComponent },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
