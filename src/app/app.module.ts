import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

// import ngx-translate and the http loader
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

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
  MatProgressSpinnerModule,
  MatTableModule
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
  FeedbackComponent,
  WhyHiberComponent,
  FooterComponent,
  FormGetStartedComponent,
  HomeComponent,
  NavbarComponent,
  PaginationComponent,
  PreloaderComponent,
  ProductComponent,
  ProductsComponent,
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
    MatTableModule,
    CarouselModule,
    NgScrollbarModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  declarations: [
    AppComponent,

    CarouselComponent,
    CartComponent,
    CategoriesComponent,
    CategoryComponent,
    CheckoutComponent,
    FeedbackComponent,
    WhyHiberComponent,
    FooterComponent,
    FormGetStartedComponent,
    HomeComponent,
    NavbarComponent,
    PaginationComponent,
    PreloaderComponent,
    ProductComponent,
    ProductsComponent,
    SearchProductsComponent
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
