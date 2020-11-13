import { AuthGuard } from './Guards/auth.guard';
import { RegisterComponent } from './pages/register/register.component';
import { NgModule,  } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/Homepage/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ShopmainComponent } from './pages/Shop/shopmain/shopmain.component';
import {UserProfileComponent} from './pages/user-profile/user-profile.component'
import { ProductDetailComponent } from './pages/Shop/product-detail/product-detail.component';
import { PreventUnsavedChangesGuard } from './Guards/prevent-unsaved-changes.guard';
import { ProductAdminCreateComponent } from './pages/Admin/product-admin/product-admin-create/product-admin-create.component';
import { ProductAdminEditComponent } from './pages/Admin/product-admin/product-admin-edit/product-admin-edit.component';
import { ProductAdminIndexComponent } from './pages/Admin/product-admin/product-admin-index/product-admin-index.component';
import { CategoryAdminCreateComponent } from './pages/Admin/category-admin/category-admin-create/category-admin-create.component';
import { CategoryAdminEditComponent } from './pages/Admin/category-admin/category-admin-edit/category-admin-edit.component';
import { CategoryAdminIndexComponent } from './pages/Admin/category-admin/category-admin-index/category-admin-index.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';


const routes: Routes = [
  
  { path:'',component: HomeComponent },
  { path:'UserProfile/:id', component:UserProfileComponent ,canActivate: [AuthGuard], canDeactivate:[PreventUnsavedChangesGuard]},
  { path: 'login', pathMatch: 'full', component: LoginComponent },
  { path: 'register' , component:RegisterComponent},
  { path:'shopping-cart', component:ShoppingCartComponent},
  { path:'shop' , component:ShopmainComponent},
  { path:'shop/:id' , component:ShopmainComponent},
  { path:'product-detail/:id', component:ProductDetailComponent},

  // Admin Product
  { path:'Admin/Product/Create', component:ProductAdminCreateComponent},
  { path:'Admin/Product/Edit/:id', component:ProductAdminEditComponent},
  { path:'Admin/Product', component:ProductAdminIndexComponent},

  // Admin Category
  { path:'Admin/Category', component:CategoryAdminIndexComponent},
  { path:'Admin/Category/Edit/:id', component:CategoryAdminEditComponent},
  { path:'Admin/Category/Create', component:CategoryAdminCreateComponent},
  
  
  { path: '**' , component:HomeComponent, pathMatch: 'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
