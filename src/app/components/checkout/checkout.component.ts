import { Component, OnInit, OnDestroy, AfterContentChecked, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit, OnDestroy, AfterContentChecked {
  @ViewChild('categoriesRef') categoriesRef: ElementRef;
  @ViewChild('tilesRef') tilesRef: ElementRef;
  subs: any[] = [];
  categoriesList: any[] = [
    {
      id: '01',
      title: 'Lorem Ipsum 1',
      icon: 'home',
      color: 'blue',
      tiles: [
        {id: '001', title: 'One', price: 1, imagePath: 'https://dummyimage.com/250'},
        {id: '002', title: 'Two', price: 2, imagePath: 'https://dummyimage.com/250'},
        {id: '003', title: 'Three', price: 3, imagePath: 'https://dummyimage.com/250'},
        {id: '004', title: 'Four', price: 4, imagePath: 'https://dummyimage.com/250'},
        {id: '005', title: 'One', price: 1, imagePath: 'https://dummyimage.com/250'},
        {id: '006', title: 'Two', price: 2, imagePath: 'https://dummyimage.com/250'},
        {id: '007', title: 'Three', price: 5, imagePath: 'https://dummyimage.com/250'},
        {id: '008', title: 'Four', price: 6, imagePath: 'https://dummyimage.com/250'},
        {id: '009', title: 'One', price: 7, imagePath: 'https://dummyimage.com/250'},
        {id: '010', title: 'Two', price: 8, imagePath: 'https://dummyimage.com/250'},
        {id: '011', title: 'Three', price: 2, imagePath: 'https://dummyimage.com/250'},
      ]
    },
    {
      id: '02',
      title: 'Lorem Ipsum 2',
      icon: 'search',
      color: 'red',
      tiles: [
        {id: '102', title: 'Two', price: 2, imagePath: 'https://dummyimage.com/250'},
        {id: '103', title: 'Three', price: 3, imagePath: 'https://dummyimage.com/250'},
        {id: '104', title: 'Four', price: 4, imagePath: 'https://dummyimage.com/250'},
        {id: '105', title: 'One', price: 1, imagePath: 'https://dummyimage.com/250'},
      ]
    },
    {
      id: '03',
      title: 'Lorem Ipsum 3',
      icon: 'remove',
      color: 'green',
      tiles: [
        {id: '201', title: 'One', price: 1, imagePath: 'https://dummyimage.com/250'},
        {id: '202', title: 'Two', price: 2, imagePath: 'https://dummyimage.com/250'},
        {id: '203', title: 'Three', price: 3, imagePath: 'https://dummyimage.com/250'},
        {id: '204', title: 'Four', price: 4, imagePath: 'https://dummyimage.com/250'},
        {id: '205', title: 'One', price: 1, imagePath: 'https://dummyimage.com/250'},
        {id: '206', title: 'Two', price: 2, imagePath: 'https://dummyimage.com/250'},
        {id: '207', title: 'Three', price: 5, imagePath: 'https://dummyimage.com/250'},
        {id: '208', title: 'Four', price: 6, imagePath: 'https://dummyimage.com/250'},
      ]
    },
    {
      id: '04',
      title: 'Lorem Ipsum 4',
      icon: 'people',
      color: 'orange',
      tiles: []
    },
    {
      id: '05',
      title: 'Lorem Ipsum 5',
      icon: 'add',
      color: 'blue',
      tiles: []
    },
    {
      id: '06',
      title: 'Lorem Ipsum 6',
      icon: 'home',
      color: 'yellow',
      tiles: []
    },
    {
      id: '07',
      title: 'Lorem Ipsum 7',
      icon: 'home',
      color: 'magenta',
      tiles: []
    },
    {
      id: '08',
      title: 'Lorem Ipsum 8',
      icon: 'home',
      color: 'dodgerblue',
      tiles: []
    },
    {
      id: '09',
      title: 'Lorem Ipsum 9',
      icon: 'home',
      color: 'pink',
      tiles: []
    },
    {
      id: '10',
      title: 'Lorem Ipsum 10',
      icon: 'home',
      color: 'greenyellow',
      tiles: []
    },
    {
      id: '11',
      title: 'Lorem Ipsum 11',
      icon: 'home',
      color: 'crimson',
      tiles: []
    },
    {
      id: '12',
      title: 'Lorem Ipsum 12',
      icon: 'home',
      color: 'grey',
      tiles: []
    }
  ];
  filteredTiles: any[] = [];
  selectedTiles: any[] = [];
  selectedCategory: string = '';
  search: string = '';
  filteredTilesWidth: number = 300;
  isShowCart: boolean = false;
  isShowNavCategoriesScrollbar: boolean = false;
  isShowNavTilesScrollbar: boolean = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.subs.push(this.route
      .paramMap
      .pipe(map(params => params.get('email') || ''))
      .subscribe(email => console.log('email', email)));

    if (!this.categoriesList.length) {
      return;
    }

    this.selectedCategory = this.categoriesList[0].id;
    this.filterTiles();
  }

  ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe());
  }

  ngAfterContentChecked() {
    this.checkNavCategoriesScrollbar();
    this.checkNavTilesScrollbar();
  }

  checkNavCategoriesScrollbar() {
    if (!this.categoriesRef || !this.categoriesRef.nativeElement) {
      return;
    }

    const { clientWidth, scrollWidth } = this.categoriesRef.nativeElement;
    this.isShowNavCategoriesScrollbar = clientWidth < scrollWidth;
  }

  checkNavTilesScrollbar() {
    if (!this.tilesRef || !this.tilesRef.nativeElement) {
      return;
    }

    const { clientWidth } = this.tilesRef.nativeElement;
    this.isShowNavTilesScrollbar = clientWidth < this.filteredTilesWidth;
  }

  getSelectedSum() {
    return this.selectedTiles.reduce((a, b) => a += b.price, 0);
  }

  onSearch(event) {
    this.search = event.target.value.toLowerCase();
    this.filterTiles();
  }

  filterTiles() {
    if (!this.selectedCategory) {
      return;
    }

    const tiles = this.categoriesList.filter(category => category.id === this.selectedCategory)[0].tiles;

    if (!this.search) {
      this.filteredTiles = [...tiles];
      this.setFilteredTilesWidth();
      return;
    }

    this.filteredTiles = tiles.filter(tile => tile.title.toLowerCase().search(this.search) > -1);
    this.setFilteredTilesWidth();
  }

  setFilteredTilesWidth() {
    this.filteredTilesWidth = Math.ceil(this.filteredTiles.length / 2) * 182;
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

  selectCategory(categoryId) {
    const isShouldRefilter = this.selectedCategory !== categoryId;
    this.selectedCategory = categoryId;

    if (isShouldRefilter) {
      this.filterTiles();
    }
  }

  scrollCategories(direction) {
    if (!this.categoriesRef || !this.categoriesRef.nativeElement) {
      return;
    }

    const { scrollLeft, scrollWidth } = this.categoriesRef.nativeElement;

    if (direction === 'left') {
      this.categoriesRef.nativeElement.scrollLeft = scrollLeft - 80 <= 0 ? 0 : scrollLeft - 80;
    }

    if (direction === 'right') {
      this.categoriesRef.nativeElement.scrollLeft = scrollLeft + 80 >= scrollWidth ? scrollLeft : scrollLeft + 80;
    }
  }

  scrollTiles(direction) {
    if (!this.tilesRef || !this.tilesRef.nativeElement) {
      return;
    }

    const { scrollLeft, scrollWidth } = this.tilesRef.nativeElement;

    if (direction === 'left') {
      this.tilesRef.nativeElement.scrollLeft = scrollLeft - 182 <= 0 ? 0 : scrollLeft - 182;
    }

    if (direction === 'right') {
      this.tilesRef.nativeElement.scrollLeft = scrollLeft + 182 >= scrollWidth ? scrollLeft : scrollLeft + 182;
    }
  }
}
