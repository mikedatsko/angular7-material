import { Component, OnInit, OnDestroy, AfterContentChecked, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit, OnDestroy, AfterContentChecked {
  @ViewChild('productsRef') productsRef: ElementRef;
  subs: any[] = [];
  filteredTiles: any[] = [];
  filteredTilesAll: any[] = [];
  selectedTiles: any[] = [];
  categories: any[] = [];
  selectedCategory: any;
  search: string = '';
  tileSize: number = 0;
  filteredTilesPage: number = 0;
  filteredTilesPages: number[] = [];
  tilesPerPage: number = 18;
  tileColumns: number = 6;
  isShowCart: boolean = false;
  isShowNavTilesScrollbar: boolean = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.subs.push(this.route
      .paramMap
      .pipe(map(params => params.get('email') || ''))
      .subscribe(email => console.log('email', email)));

    this.filterTiles();
  }

  ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe());
  }

  ngAfterContentChecked() {
    this.checkTileSize();
  }

  checkTileSize() {
    if (!this.productsRef || !this.productsRef.nativeElement) {
      return;
    }

    const { clientWidth } = this.productsRef.nativeElement;
    this.tileSize = (clientWidth - 30) / 6;
  }

  onSearch(search) {
    this.search = search;
    this.filterTiles();
  }

  onCloseCart(isShowCart) {
    this.isShowCart = isShowCart;
  }

  onGetCategories(categories) {
    this.categories = categories;
  }

  onSelectCategory(category) {
    this.selectedCategory = category;
    this.filterTiles();
  }

  filterTiles() {
    console.log('filterTiles', this.selectedCategory);

    if (!this.selectedCategory) {
      return;
    }

    const tiles = this.selectedCategory.products;

    if (!this.search) {
      this.filteredTilesAll = [...tiles];
      this.setFilteredTiles();
      return;
    }

    this.filteredTilesAll = tiles.filter(tile => tile.title.toLowerCase().search(this.search) > -1);
    this.setFilteredTiles();
  }

  setFilteredTiles() {
    this.filteredTilesPages = Array.from({length: Math.ceil(this.filteredTilesAll.length / this.tilesPerPage)}, (x, i) => i + 1);
    this.filteredTilesPage = 0;
    this.isShowNavTilesScrollbar = !!this.filteredTilesPages.length;
    this.setTiles();
  }

  setTiles() {
    this.filteredTiles = this.filteredTilesAll.slice(
      this.filteredTilesPage * this.tilesPerPage,
      this.filteredTilesPage * this.tilesPerPage + this.tilesPerPage
    );
    this.tileColumns = Math.ceil(this.filteredTiles.length / 3);
  }

  setTilesPage(page) {
    this.filteredTilesPage = page;
    this.setTiles();
  }

  toggleTile(tile) {
    if (this.selectedTiles.find(tile_ => tile_.id === tile.id)) {
      this.selectedTiles = this.selectedTiles.filter(tile_ => tile_.id !== tile.id);
      tile.isSelected = false;
    } else {
      this.selectedTiles.push(tile);
      tile.isSelected = true;
    }
  }
}
