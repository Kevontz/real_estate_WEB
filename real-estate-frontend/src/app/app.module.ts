import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { NavbarComponent } from './pages/home/component/navbar/navbar.component';
import { BuyComponent } from './pages/home/component/users/buy/buy.component';
import { RentComponent } from './pages/home/component/users/rent/rent.component';
import { MainPageComponent } from './pages/home/main-page/main-page.component';
import { FooterComponent } from './pages/home/component/footer/footer.component';
import { FindEstateComponent } from './pages/home/component/users/find-estate/find-estate.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    BuyComponent,
    RentComponent,
    MainPageComponent,
    FooterComponent,
    FindEstateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
