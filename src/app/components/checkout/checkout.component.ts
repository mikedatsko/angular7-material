import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Category, Product } from '../../interfaces';
import { ApiService } from '../../services';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit, OnDestroy {
  subs: any[] = [];
  categories: any[] = [];
  products: any[] = [];
  selectedCategory: Category;
  selectedProducts: Product[] = [];
  searchCategories: string = '';
  searchProducts: string = '';
  isShowCart: boolean = false;
  isLoadingProducts = false;

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.subs.push(this.route
      .paramMap
      .pipe(map(params => params.get('zipcode') || ''))
      .subscribe(zipcode => {
        if (!zipcode) {
          this.router.navigate(['/']);
        }
      }));
  }

  ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe());
  }

  onSearchCategories(search) {
    this.searchCategories = search;
  }

  onSearchProducts(search) {
    this.searchProducts = search;
  }

  onCloseCart(isShowCart) {
    this.isShowCart = isShowCart;
  }

  onGetCategories(categories) {
    this.categories = categories;
  }

  onSelectCategory(category) {
    this.selectedCategory = category;
    this.getProducts();
  }

  onSelectProduct(products) {
    this.selectedProducts = products;
  }

  getProducts() {
    this.isLoadingProducts = true;
    this.subs.push(this.api.get(`category/${this.selectedCategory.id}/products`).subscribe((response: any) => {
      this.products = response.map(product => ({
        ...product,
        categoryName: this.selectedCategory.categoryName,
        price: 1
      }));
      this.isLoadingProducts = false;
    }));
  }
}
