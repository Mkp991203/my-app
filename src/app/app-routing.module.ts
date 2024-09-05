import { Component, NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
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
import { CreateUserComponent } from './create-user/create-user.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { ParentComponent } from './parent/parent.component';
import { Calculator2Component } from './calculator2/calculator2.component';
import { SilblingComponent } from './silbling/silbling.component';
import { AmazonComponent } from './amazon/amazon.component';
import { TodoComponent } from './todo/todo.component';
import { AboutCompanyComponent } from './about-us/about-company/about-company.component';

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
    {path:'create-user', component:CreateUserComponent},
    {path:'studentdetails', component:StudentdetailsComponent},
    {path:'parent', component:ParentComponent},
    {path:'calculator2', component:Calculator2Component},
    {path:'silbling', component:SilblingComponent},
    {path:'amazon', component:AmazonComponent},
    {path:'todo', component:TodoComponent},
    {path:'about-company', component:AboutCompanyComponent},
    {
      path: 'payments',
      loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule)
    },
    {path:'', component:WelcomeComponent}

  ]},
  {path:'', component:LoginComponent},
  {path:'**', component:PagenotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
