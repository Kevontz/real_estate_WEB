import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { BuyComponent } from './pages/home/component/users/buy/buy.component';
import { RentComponent } from './pages/home/component/users/rent/rent.component';
import { MainPageComponent } from './pages/home/main-page/main-page.component';
import { FindEstateComponent } from './pages/home/component/users/find-estate/find-estate.component';


const routes: Routes = [
  {path: "", redirectTo: "/login", pathMatch: 'full'},
  {path: "login", component: LoginComponent},
  {path: "signup", component: SignupComponent},
  {
    path: "app", component: HomeComponent,
    children: [
      {path: "main", component: MainPageComponent},
      {path: "buy", component: BuyComponent},
      {path: "rent", component: RentComponent},
      {path: "find", component: FindEstateComponent}
    ]
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
