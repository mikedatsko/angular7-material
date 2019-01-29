import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Input() selectedTiles: any[] = [];
  @Input() isShowCart: boolean = true;
  @Output() closeCartAction: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  getSelectedSum() {
    return this.selectedTiles.reduce((a, b) => a += b.price, 0);
  }

  closeCart() {
    this.closeCartAction.emit(false);
  }
}
