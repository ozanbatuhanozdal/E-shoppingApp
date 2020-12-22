import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/Homepage/home/home.component';
import { HomeSliderComponent } from './pages/Homepage/home-slider/home-slider.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { TrendProductComponent } from './pages/Homepage/trend-product/trend-product.component';
import { CategoriesComponent } from './pages/Homepage/categories/categories.component';
import { HomeAdvertsComponent } from './pages/Homepage/home-adverts/home-adverts.component';
import { HomeNewslettersComponent } from './pages/Homepage/home-newsletters/home-newsletters.component';
import { CategoriesListComponent } from './pages/Shop/categories-list/categories-list.component';
import { ProductListComponent } from './pages/Shop/product-list/product-list.component';
import { ShopmainComponent } from './pages/Shop/shopmain/shopmain.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { ProductDetailComponent } from './pages/Shop/product-detail/product-detail.component';

import { ProductAdminIndexComponent } from './pages/Admin/product-admin/product-admin-index/product-admin-index.component';
import { ProductAdminCreateComponent } from './pages/Admin/product-admin/product-admin-create/product-admin-create.component';
import { CategoryAdminIndexComponent } from './pages/Admin/category-admin/category-admin-index/category-admin-index.component';
import { CategoryAdminCreateComponent } from './pages/Admin/category-admin/category-admin-create/category-admin-create.component';
import { CategoryAdminEditComponent } from './pages/Admin/category-admin/category-admin-edit/category-admin-edit.component';
import { ProductAdminEditComponent } from './pages/Admin/product-admin/product-admin-edit/product-admin-edit.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { QuantityInputComponent } from './pages/shopping-cart/quantity-input/quantity-input.component';
import { PlaceOrderComponent } from './pages/shopping-cart/place-order/place-order.component';
import { DatePipe } from '@angular/common';
import { UsersAdminComponent } from './pages/Admin/users-admin/users-admin.component';
import { OrderAdminComponent } from './pages/Admin/order-admin/order-admin.component';
import { UserOrderComponent } from './pages/user-order/user-order.component';
import { StrengthPasswordComponent } from './pages/register/strength-password/strength-password.component';
import { WishlistComponent } from './pages/Homepage/wishlist/wishlist.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HomeSliderComponent,
    LoginComponent,
    RegisterComponent,
    TrendProductComponent,
    CategoriesComponent,
    HomeAdvertsComponent,
    HomeNewslettersComponent,
    ShopmainComponent,
    CategoriesListComponent,
    ProductListComponent,
    UserProfileComponent,
    ProductDetailComponent,
    ProductAdminIndexComponent,
    ProductAdminCreateComponent,
    CategoryAdminIndexComponent,
    CategoryAdminCreateComponent,
    CategoryAdminEditComponent,
    ProductAdminEditComponent,
    ShoppingCartComponent,
    QuantityInputComponent,
    PlaceOrderComponent,
    UsersAdminComponent,
    OrderAdminComponent,
    UserOrderComponent,
    StrengthPasswordComponent,
    WishlistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    ToastrModule.forRoot({
      positionClass:'toast-bottom-right'
    })
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
