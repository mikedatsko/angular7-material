import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatMenuModule,
  MatButtonModule,
  MatIconModule,
  MatGridListModule,
  MatToolbarModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  MatCheckboxModule
} from '@angular/material';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgScrollbarModule } from 'ngx-scrollbar';
// import { PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  CarouselComponent,
  CheckoutComponent,
  FooterComponent,
  FormGetStartedComponent,
  HomeComponent,
  NavbarComponent
} from './components';

// const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
//   suppressScrollX: true
// };

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
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
    CarouselModule,
    NgScrollbarModule
  ],
  declarations: [
    AppComponent,
    CarouselComponent,
    CheckoutComponent,
    FooterComponent,
    FormGetStartedComponent,
    HomeComponent,
    NavbarComponent
  ],
  providers: [
    // {
    //   provide: PERFECT_SCROLLBAR_CONFIG,
    //   useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
