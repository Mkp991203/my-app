import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotFoundComponent } from './pagenot-found/pagenot-found.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BmiCalculatorComponent } from './bmi-calculator/bmi-calculator.component';
import { DiceComponent } from './dice/dice.component';
import { DirectivesPipesComponent } from './directives-pipes/directives-pipes.component';
import { EmployeesComponent } from './employees/employees.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import {HttpClientModule} from '@angular/common/http';
import { BankAccountsComponent } from './bank-accounts/bank-accounts.component';
import { FlipkartpageComponent } from './flipkartpage/flipkartpage.component';
import { MailComponent } from './mail/mail.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateBankAccountsComponent } from './create-bank-accounts/create-bank-accounts.component';
import { StudentCardsComponent } from './student-cards/student-cards.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { ViewVehicleComponent } from './view-vehicle/view-vehicle.component';
import { ViewBankaccountComponent } from './view-bankaccount/view-bankaccount.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { RatingComponent } from './rating/rating.component';
import { Calculator2Component } from './calculator2/calculator2.component';
import { OperationsComponent } from './operations/operations.component';
import { TextareaComponent } from './textarea/textarea.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PagenotFoundComponent,
    HomeComponent,
    WelcomeComponent,
    DataBindingComponent,
    CalculatorComponent,
    RectangleComponent,
    CircleComponent,
    BmiCalculatorComponent,
    DiceComponent,
    DirectivesPipesComponent,
    EmployeesComponent,
    FlipkartComponent,
    VehiclesComponent,
    BankAccountsComponent,
    FlipkartpageComponent,
    MailComponent,
    CreateVehicleComponent,
    CreateBankAccountsComponent,
    StudentCardsComponent,
    CreateStudentComponent,
    ViewVehicleComponent,
    ViewBankaccountComponent,
    CreateUserComponent,
    StudentdetailsComponent,
    ParentComponent,
    ChildComponent,
    RatingComponent,
    Calculator2Component,
    OperationsComponent,
    TextareaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
