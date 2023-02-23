import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AddDependentComponent } from './add-dependent/add-dependent.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'customer', component:CustomersComponent},
  {path:'registration', component:RegistrationComponent},
  {path:'add-dependent', component:AddDependentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
