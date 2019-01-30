import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-products',
  templateUrl: './search-products.component.html',
  styleUrls: ['./search-products.component.scss']
})
export class SearchProductsComponent implements OnInit {
  @Input() isShowCart: boolean = false;
  @Input() selectedProductsNum: number = 0;
  @Output() searchAction: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onSearch(event) {
    this.searchAction.emit(event.target.value.toLowerCase());
  }
}
