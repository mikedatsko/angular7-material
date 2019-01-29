import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
  MatMenuModule,
  MatButtonModule,
  MatIconModule,
  MatGridListModule,
  MatToolbarModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  MatCheckboxModule,
  MatProgressSpinnerModule
} from '@angular/material';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgScrollbarModule } from 'ngx-scrollbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  CarouselComponent,
  CartComponent,
  CategoriesComponent,
  CategoryComponent,
  CheckoutComponent,
  FooterComponent,
  FormGetStartedComponent,
  HomeComponent,
  NavbarComponent,
  PreloaderComponent,
  ProductComponent,
  ProductsComponent,
  ScrollbarComponent,
  SearchProductsComponent
} from './components';

import { ApiService } from './services';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatGridListModule,
    MatToolbarModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    CarouselModule,
    NgScrollbarModule
  ],
  declarations: [
    AppComponent,

    CarouselComponent,
    CartComponent,
    CategoriesComponent,
    CategoryComponent,
    CheckoutComponent,
    FooterComponent,
    FormGetStartedComponent,
    HomeComponent,
    NavbarComponent,
    PreloaderComponent,
    ProductComponent,
    ProductsComponent,
    ScrollbarComponent,
    SearchProductsComponent
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
