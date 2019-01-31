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
  @Input() isLoading: boolean = false;
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
    this.productsColumns = clientWidth < 480
      ? 3
      : clientWidth < 600
        ? 4
        : 6;
    this.productsPerPage = this.productsColumns * 3;
    this.productSize = Math.floor(clientWidth / this.productsColumns);
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

    this.productsFiltered = this.productsAll.filter(product => product.productName.toLowerCase().search(this.search) > -1);
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

  onWindowResize() {
    this.checkProductSize();
    this.filterProducts();
  }

  toggleProduct(product) {
    if (product.quantity) {
      const productInSelected = this.productsSelected.find(product_ => product_.id === product.id);
      product.isSelected = true;

      if (!productInSelected) {
        this.productsSelected.push(product);
      }

      this.productsSelected = this.productsSelected.map(product_ => {
        if (product_.id === product.id) {
          product_.quantity = product.quantity;
        }

        return product_;
      });

      product.isSelected = true;
    } else {
      this.productsSelected = this.productsSelected.filter(product_ => product_.id !== product.id);
      product.isSelected = false;
    }

    this.selectProductAction.emit(this.productsSelected);
  }
}
