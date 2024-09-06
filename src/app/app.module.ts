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
import { SilblingComponent } from './silbling/silbling.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';
import { AmazonComponent } from './amazon/amazon.component';
import { Amazon1Component } from './amazon1/amazon1.component';
import { Amazon2Component } from './amazon2/amazon2.component';
import { Amazon3Component } from './amazon3/amazon3.component';
import { Amazon4Component } from './amazon4/amazon4.component';
import { TodoComponent } from './todo/todo.component';
import { TodoformComponent } from './todoform/todoform.component';
import { Todo1Component } from './todo1/todo1.component';
import { Todo2Component } from './todo2/todo2.component';
import { AboutCompanyComponent } from './about-us/about-company/about-company.component';
import { AboutUsModule } from './about-us/about-us.module';
import { CapitalDirective } from './capital.directive';
import { PricePipe } from './price.pipe';

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
    TextareaComponent,
    SilblingComponent,
    Sibling1Component,
    Sibling2Component,
    AmazonComponent,
    Amazon1Component,
    Amazon2Component,
    Amazon3Component,
    Amazon4Component,
    TodoComponent,
    TodoformComponent,
    Todo1Component,
    Todo2Component,
    CapitalDirective,
    PricePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AboutUsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
