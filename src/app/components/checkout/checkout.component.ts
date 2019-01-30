import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Category, Product } from '../../interfaces';

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
  search: string = '';
  isShowCart: boolean = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.subs.push(this.route
      .paramMap
      .pipe(map(params => params.get('email') || ''))
      .subscribe(email => console.log('email', email)));
  }

  ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe());
  }

  onSearch(search) {
    this.search = search;
  }

  onCloseCart(isShowCart) {
    this.isShowCart = isShowCart;
  }

  onGetCategories(categories) {
    this.categories = categories;
  }

  onSelectCategory(category) {
    this.selectedCategory = category;
    this.products = category.products;
  }

  onSelectProduct(products) {
    this.selectedProducts = products;
  }
}
