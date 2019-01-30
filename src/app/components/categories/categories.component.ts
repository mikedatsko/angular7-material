import {
  AfterContentChecked,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { ApiService } from '../../services';
import { mocks } from '../../mocks';
import { PaginationPage, Category } from '../../interfaces';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit, OnChanges, OnDestroy, AfterContentChecked {
  @Input() search: string = '';
  @Output() getCategoriesAction: EventEmitter<any[]> = new EventEmitter<any[]>();
  @Output() selectCategoryAction: EventEmitter<Category> = new EventEmitter<Category>();
  @ViewChild('categoriesRef') categoriesRef: ElementRef;
  subs: any[] = [];
  categories: Category[] = [];
  categoriesAll: Category[] = [];
  categoriesFiltered: Category[] = [];
  selectedCategoryId: string = '';
  isLoading: boolean = true;
  categoriesPerPage: number = 6;
  pages: PaginationPage[] = [];
  page: number = 0;
  categorySize: number = 0;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getCategories();
  }

  ngOnChanges(changes) {
    if (changes.hasOwnProperty('search')) {
      this.filterCategories();
    }
  }

  ngAfterContentChecked() {
    this.getCategoryWidth();
  }

  ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe());
  }

  getCategories() {
    this.subs.push(this.api.get('categories').subscribe(categories => {
      console.log('categories', categories);
    }));

    setTimeout(() => {
      this.categoriesAll = [...mocks.categoriesMock];

      if (this.categoriesAll.length) {
        this.selectCategory(this.categoriesAll[0].id);
        this.filterCategories();
      }

      this.isLoading = false;
    }, 1000);
  }

  getCategoryWidth() {
    if (!this.categoriesRef || !this.categoriesRef.nativeElement) {
      return;
    }

    const { clientWidth } = this.categoriesRef.nativeElement;
    this.categorySize = clientWidth / this.categoriesPerPage;
  }

  selectCategory(categoryId) {
    const category = this.categoriesAll.find(category_ => category_.id === categoryId);

    if (!category) {
      return;
    }

    this.selectedCategoryId = categoryId;
    this.selectCategoryAction.emit(category);
  }

  onChangePage(page) {
    this.page = page;
    this.setCategories();
  }

  filterCategories() {
    if (!this.search) {
      this.categoriesFiltered = [...this.categoriesAll];
      this.setCategoriesPages();
      return;
    }

    this.categoriesFiltered = this.categoriesAll.filter(category => category.title.toLowerCase().search(this.search) > -1);
    this.setCategoriesPages();
  }

  setCategoriesPages() {
    this.pages = Array.from(
      {length: Math.ceil(this.categoriesFiltered.length / this.categoriesPerPage)},
      (x, i) => ({title: (i + 1).toString()})
    );
    this.page = 0;
    this.setCategories();
  }

  setCategories() {
    this.categories = this.categoriesFiltered.slice(
      this.page * this.categoriesPerPage,
      this.page * this.categoriesPerPage + this.categoriesPerPage
    );
    this.getCategoriesAction.emit(this.categories);
  }
}
