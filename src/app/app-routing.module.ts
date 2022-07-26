import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './auth/login.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './member/login/login.component';
import { RegisterComponent } from './member/register/register.component';
import { SpecialsComponent } from './member/specials/specials.component';
import { SupportComponent } from './member/support/support.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'member/register', component:RegisterComponent},
  {path:'member/login', component:LoginComponent},
  {path:'member/specials', component:SpecialsComponent, canActivate:[LoginGuard]},
  {path:'member/support', component:SupportComponent, canActivate:[LoginGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
