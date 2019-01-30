import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../interfaces';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Input() productSize: number;
  @Output() clickProductAction: EventEmitter<Product> = new EventEmitter<Product>();

  constructor() { }

  ngOnInit() {
  }

  clickProduct(product) {
    this.clickProductAction.emit(product);
  }
}
