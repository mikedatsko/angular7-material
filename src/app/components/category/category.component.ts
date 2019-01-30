import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  @Input() category: any;
  @Input() selectedCategoryId: string = '';
  @Input() categorySize: number = 0;

  constructor() { }

  ngOnInit() {
  }
}
