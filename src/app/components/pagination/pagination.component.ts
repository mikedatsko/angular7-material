import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() isShow: boolean = true;
  @Input() pages: number[] = [];
  @Input() selectedPage: number = 0;
  @Output() changePageAction: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  scroll(direction) {
    let page = 0;

    if (direction === 'left') {
      const selectedPage = this.pages[this.selectedPage - 1]
        ? this.selectedPage - 1
        : this.selectedPage;

      if (selectedPage === this.selectedPage) {
        return;
      }

      page = selectedPage;
    }

    if (direction === 'right') {
      const selectedPage = this.pages[this.selectedPage + 1]
        ? this.selectedPage + 1
        : this.selectedPage;

      if (selectedPage === this.selectedPage) {
        return;
      }

      page = selectedPage;
    }

    this.changePageAction.emit(page);
  }

  selectPage(page) {
    this.changePageAction.emit(page);
  }
}
