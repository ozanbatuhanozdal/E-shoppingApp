import { AuthGuard } from './Guards/auth.guard';
import { RegisterComponent } from './pages/register/register.component';
import { NgModule,  } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/Homepage/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ShopmainComponent } from './pages/Shop/shopmain/shopmain.component';
import {UserProfileComponent} from './pages/user-profile/user-profile.component'

const routes: Routes = [
  
  { path:'',component: HomeComponent },
  { path:'UserProfile/:id', component:UserProfileComponent ,canActivate: [AuthGuard]},
  { path: 'login', pathMatch: 'full', component: LoginComponent },
  { path: 'register' , component:RegisterComponent},
  { path:'shop' , component:ShopmainComponent},
  { path: '**' , component:HomeComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
