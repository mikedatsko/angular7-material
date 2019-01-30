import { AfterContentChecked, Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { PaginationPage, Product } from '../../interfaces';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnChanges, AfterContentChecked {
  @Input() productsAll: Product[] = [];
  @Input() search: string = '';
  @Output() selectProductAction: EventEmitter<Product[]> = new EventEmitter<Product[]>();
  @ViewChild('productsRef') productsRef: ElementRef;
  productSize: number = 0;
  productsPerPage: number = 18;
  productsColumns: number = 6;
  productsColumnsPerPage: number = this.productsColumns;
  products: Product[] = [];
  productsFiltered: Product[] = [];
  productsSelected: Product[] = [];
  pages: PaginationPage[] = [];
  page: number = 0;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    if (changes.hasOwnProperty('search')) {
      this.filterProducts();
    }

    if (changes.hasOwnProperty('productsAll')) {
      this.filterProducts();
    }
  }

  ngAfterContentChecked() {
    this.checkProductSize();
  }

  checkProductSize() {
    if (!this.productsRef || !this.productsRef.nativeElement) {
      return;
    }

    const { clientWidth } = this.productsRef.nativeElement;
    this.productSize = clientWidth / this.productsColumns;
  }

  filterProducts() {
    if (!this.productsAll) {
      return;
    }

    if (!this.search) {
      this.productsFiltered = [...this.productsAll];
      this.setProductsPages();
      return;
    }

    this.productsFiltered = this.productsAll.filter(product => product.title.toLowerCase().search(this.search) > -1);
    this.setProductsPages();
  }

  setProductsPages() {
    this.pages = Array.from(
      {length: Math.ceil(this.productsFiltered.length / this.productsPerPage)},
      (x, i) => ({title: (i + 1).toString()})
    );
    this.page = 0;
    this.setProducts();
  }

  setProducts() {
    this.products = this.productsFiltered.slice(
      this.page * this.productsPerPage,
      this.page * this.productsPerPage + this.productsPerPage
    );
    this.productsColumnsPerPage = Math.ceil(this.products.length / 3);
  }

  onChangePage(page) {
    this.page = page;
    this.setProducts();
  }

  toggleProduct(product) {
    if (this.productsSelected.find(product_ => product_.id === product.id)) {
      this.productsSelected = this.productsSelected.filter(product_ => product_.id !== product.id);
      product.isSelected = false;
    } else {
      this.productsSelected.push(product);
      product.isSelected = true;
    }

    this.selectProductAction.emit(this.productsSelected);
  }
}
