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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
