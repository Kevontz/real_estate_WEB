// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PropertyListComponent } from './components/property-list/property-list.component';
import { PropertyDetailComponent } from './components/property-detail/property-detail.component';
import { RegisterComponent } from './components/register/register.component';
import { AddPropertyComponent } from './add-property/add-property.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'property-list', component: PropertyListComponent },
  { path: 'property-detail/:id', component: PropertyDetailComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'add-property', component: AddPropertyComponent },
  { path: '', redirectTo: '/property-list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
