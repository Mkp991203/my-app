import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotFoundComponent } from './pagenot-found/pagenot-found.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BmiCalculatorComponent } from './bmi-calculator/bmi-calculator.component';
import { DiceComponent } from './dice/dice.component';
import { DirectivesPipesComponent } from './directives-pipes/directives-pipes.component';
import { EmployeesComponent } from './employees/employees.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { BankAccountsComponent } from './bank-accounts/bank-accounts.component';
import { FlipkartpageComponent } from './flipkartpage/flipkartpage.component';
import { MailComponent } from './mail/mail.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateBankAccountsComponent } from './create-bank-accounts/create-bank-accounts.component';
import { StudentCardsComponent } from './student-cards/student-cards.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { AuthenticationGuard } from './authentication.guard';
import { ViewVehicleService } from './view-vehicle.service';
import { ViewVehicleComponent } from './view-vehicle/view-vehicle.component';
import { ViewBankaccountComponent } from './view-bankaccount/view-bankaccount.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'dashboard', canActivate:[AuthenticationGuard], component:DashboardComponent , children:[
    {path:'home', component:HomeComponent},
    {path:'welcome', component:WelcomeComponent},
    {path:'data-binding', component:DataBindingComponent},
    {path: 'calculator', component:CalculatorComponent},
    {path:'rectangle', component:RectangleComponent},
    {path:'circle', component:CircleComponent},
    {path: 'bmi-calculator', component:BmiCalculatorComponent},
    {path:'dice', component:DiceComponent}, 
    {path:'directives-pipes', component:DirectivesPipesComponent},
    {path:'employee', component:EmployeesComponent},
    {path:'flipkart', component:FlipkartComponent},
    {path:'vehicles', component:VehiclesComponent},
    {path:'bank-accounts', component:BankAccountsComponent},
    {path:'flipkartpage', component:FlipkartpageComponent},
    {path:'mail', component:MailComponent},
    {path:'create-vehicle', component:CreateVehicleComponent},
    {path:'create-bank-accounts', component:CreateBankAccountsComponent},
    {path:'view-bankaccount/:id', component:ViewBankaccountComponent},
    {path:'edit-bankaccount/:id', component:CreateBankAccountsComponent},
    {path:'student-cards', component:StudentCardsComponent},
    {path:'create-student', component:CreateStudentComponent},
    {path:'view-vehicle/:id', component:ViewVehicleComponent},
    {path:'edit-vehicle/:id', component:CreateVehicleComponent},
    {path:'', component:WelcomeComponent}

  ]},
  {path:'', component:LoginComponent},
  {path:'**', component:PagenotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
