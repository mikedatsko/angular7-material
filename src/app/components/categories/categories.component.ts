import { AfterContentChecked, Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { ApiService } from '../../services';
import { mocks } from '../../mocks';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit, OnDestroy, AfterContentChecked {
  @ViewChild('categoriesRef') categoriesRef: ElementRef;
  @Output() getCategoriesAction: EventEmitter<any[]> = new EventEmitter<any[]>();
  @Output() selectCategoryAction: EventEmitter<string> = new EventEmitter<string>();
  subs: any[] = [];
  categoriesAll: any[] = [];
  categories: any[] = [];
  selectedCategory: string = '';
  isLoading: boolean = true;
  categoriesPerPage: number = 6;
  categoriesPages: number[] = [];
  categoriesPage: number = 0;
  categoryWidth: number = 0;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getCategories();
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
        this.categoriesPages = Array.from({length: Math.ceil(this.categoriesAll.length / this.categoriesPerPage)}, (x, i) => i + 1);
        this.categoriesPage = 0;
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
    this.categoryWidth = clientWidth / this.categoriesPerPage;
  }

  selectCategory(categoryId) {
    const category = this.categoriesAll.find(category => category.id === categoryId);

    if (!category) {
      return;
    }

    this.selectedCategory = categoryId;
    this.selectCategoryAction.emit(category);
  }

  onChangePage(page) {
    this.categoriesPage = page;
    this.filterCategories();
  }

  filterCategories() {
    if (!this.categoriesPages.length) {
      return;
    }

    this.categories = this.categoriesAll.slice(
      this.categoriesPage * this.categoriesPerPage,
      this.categoriesPage * this.categoriesPerPage + this.categoriesPerPage
    );

    if (!this.categories.length) {
      return;
    }

    this.getCategoriesAction.emit(this.categories);
  }
}
