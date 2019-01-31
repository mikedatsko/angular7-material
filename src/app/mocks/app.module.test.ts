import { BrowserModule } from '@angular/platform-browser';
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient } from '@angular/common/http';
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

import { ApiService } from '../services';
import { Category, PaginationPage, Product } from '../interfaces';

@Component({selector: 'app-root', template: ``}) class AppComponent { }
@Component({selector: 'app-carousel', template: ``}) class CarouselComponent { @Input() options: any; @Input() slides: any[] = []; }
@Component({selector: 'app-cart', template: ``}) class CartComponent { @Input() selectedProducts: any[] = []; @Input() isShow: boolean = true; @Output() closeCartAction: EventEmitter<boolean> = new EventEmitter<boolean>(); }
@Component({selector: 'app-categories', template: ``}) class CategoriesComponent { @Input() search: string = ''; @Output() getCategoriesAction: EventEmitter<any[]> = new EventEmitter<any[]>(); @Output() selectCategoryAction: EventEmitter<Category> = new EventEmitter<Category>(); @ViewChild('categoriesRef') categoriesRef: ElementRef; }
@Component({selector: 'app-category', template: ``}) class CategoryComponent { @Input() category: any; @Input() selectedCategoryId: string = ''; @Input() categorySize: number = 0; }
@Component({selector: 'app-checkout', template: ``}) class CheckoutComponent { }
@Component({selector: 'app-feedback', template: ``}) class FeedbackComponent { }
@Component({selector: 'app-why-hiber', template: ``}) class WhyHiberComponent { }
@Component({selector: 'app-footer', template: ``}) class FooterComponent { }
@Component({selector: 'app-form-get-started', template: ``}) class FormGetStartedComponent { }
@Component({selector: 'app-home', template: ``}) class HomeComponent { }
@Component({selector: 'app-navbar', template: ``}) class NavbarComponent { @Input() menu: any[]; }
@Component({selector: 'app-pagination', template: ``}) class PaginationComponent { @Input() isShow: boolean = true; @Input() pages: PaginationPage[] = []; @Input() selectedPage: number = 0; @Output() changePageAction: EventEmitter<number> = new EventEmitter<number>(); }
@Component({selector: 'app-preloader', template: ``}) class PreloaderComponent { }
@Component({selector: 'app-product', template: ``}) class ProductComponent { @Input() product: Product; @Input() productSize: number; @Output() clickProductAction: EventEmitter<Product> = new EventEmitter<Product>(); }
@Component({selector: 'app-products', template: ``}) class ProductsComponent { @Input() productsAll: Product[] = []; @Input() search: string = ''; @Input() isLoading: boolean = false; @Output() selectProductAction: EventEmitter<Product[]> = new EventEmitter<Product[]>(); @ViewChild('productsRef') productsRef: ElementRef; }
@Component({selector: 'app-search-products', template: ``}) class SearchProductsComponent { @Input() isShowCart: boolean = false; @Input() selectedProductsNum: number = 0; @Output() searchAction: EventEmitter<string> = new EventEmitter<string>(); }

const declarationList = [
  {name: 'AppComponent', instance: AppComponent},
  {name: 'CarouselComponent', instance: CarouselComponent},
  {name: 'CartComponent', instance: CartComponent},
  {name: 'CategoriesComponent', instance: CategoriesComponent},
  {name: 'CategoryComponent', instance: CategoryComponent},
  {name: 'CheckoutComponent', instance: CheckoutComponent},
  {name: 'FeedbackComponent', instance: FeedbackComponent},
  {name: 'WhyHiberComponent', instance: WhyHiberComponent},
  {name: 'FooterComponent', instance: FooterComponent},
  {name: 'FormGetStartedComponent', instance: FormGetStartedComponent},
  {name: 'HomeComponent', instance: HomeComponent},
  {name: 'NavbarComponent', instance: NavbarComponent},
  {name: 'PaginationComponent', instance: PaginationComponent},
  {name: 'PreloaderComponent', instance: PreloaderComponent},
  {name: 'ProductComponent', instance: ProductComponent},
  {name: 'ProductsComponent', instance: ProductsComponent},
  {name: 'SearchProductsComponent', instance: SearchProductsComponent}
];

export const AppModuleTest = (instanceName, instance) => ({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientTestingModule,
    RouterTestingModule,
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
    ...declarationList.filter(declaration => declaration.name !== instanceName).map(declaration => declaration.instance),
    instance
  ],
  providers: [ApiService]
});

// required for AOT compilation
function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
