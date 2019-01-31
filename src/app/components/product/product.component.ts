import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../interfaces';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Input() productSize: number;
  @Output() quantityAction: EventEmitter<Product> = new EventEmitter<Product>();
  quantity: number = 0;

  constructor() { }

  ngOnInit() {
  }

  onChangeQuantity($event) {
    const { value } = $event.target;
    this.quantity = value ? parseInt(value, 10) : 0;
    this.sendQuantityAction();
  }

  addQuantity() {
    this.quantity++;
    this.sendQuantityAction();
  }

  removeQuantity() {
    this.quantity = this.quantity - 1 < 0 ? 0 : this.quantity - 1;
    this.sendQuantityAction();
  }

  sendQuantityAction() {
    this.quantityAction.emit({...this.product, quantity: this.quantity});
  }
}
