import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Input() selectedProducts: any[] = [];
  @Input() isShow: boolean = true;
  @Output() closeCartAction: EventEmitter<boolean> = new EventEmitter<boolean>();
  cartColumns: string[] = ['image', 'title', 'quantity', 'x', 'price', 'summary'];
  search: string = '';

  constructor() { }

  ngOnInit() {
  }

  getSelectedSum() {
    return this.selectedProducts.reduce((a, b) => a += b.price * b.quantity, 0);
  }

  closeCart() {
    this.closeCartAction.emit(false);
  }

  onSearchProducts(search) {
    this.search = search;
  }
}
