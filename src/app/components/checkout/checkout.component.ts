import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit, OnDestroy {
  subs: any[] = [];
  textsList: string[] = [
    'Lorem Ipsum',
    'Lorem Ipsum',
    'Lorem Ipsum',
    'Lorem Ipsum',
    'Lorem Ipsum',
    'Lorem Ipsum',
    'Lorem Ipsum',
    'Lorem Ipsum',
    'Lorem Ipsum',
    'Lorem Ipsum',
    'Lorem Ipsum',
    'Lorem Ipsum',
    'Lorem Ipsum',
    'Lorem Ipsum',
    'Lorem Ipsum',
    'Lorem Ipsum',
    'Lorem Ipsum',
    'Lorem Ipsum'
  ];
  tiles: any[] = [
    {id: '01', title: 'One', price: 1, imagePath: 'https://dummyimage.com/170'},
    {id: '02', title: 'Two', price: 2, imagePath: 'https://dummyimage.com/170'},
    {id: '03', title: 'Three', price: 3, imagePath: 'https://dummyimage.com/170'},
    {id: '04', title: 'Four', price: 4, imagePath: 'https://dummyimage.com/170'},
    {id: '05', title: 'One', price: 1, imagePath: 'https://dummyimage.com/170'},
    {id: '06', title: 'Two', price: 2, imagePath: 'https://dummyimage.com/170'},
    {id: '07', title: 'Three', price: 5, imagePath: 'https://dummyimage.com/170'},
    {id: '08', title: 'Four', price: 6, imagePath: 'https://dummyimage.com/170'},
    {id: '09', title: 'One', price: 7, imagePath: 'https://dummyimage.com/170'},
    {id: '10', title: 'Two', price: 8, imagePath: 'https://dummyimage.com/170'},
    {id: '11', title: 'Three', price: 2, imagePath: 'https://dummyimage.com/170'},
  ];
  filteredTiles: any[] = [];
  selectedTiles: any[] = [];
  search: string = '';

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

  getSelectedTiles() {
    return this.tiles.filter(tile => tile.isSelected);
  }

  getSelectedSum() {
    return this.tiles.filter(tile => tile.isSelected).reduce((a, b) => a += b.price, 0);
  }

  onSearch(event) {
    console.log(event.target.value);
    this.search = event.target.value.toLowerCase();
    this.filterTiles();
  }

  filterTiles() {
    if (!this.search) {
      this.filteredTiles = [...this.tiles];
      return;
    }

    this.filteredTiles = this.tiles.filter(tile => tile.title.toLowerCase().search(this.search) > -1);
  }

  toggleTile(tile, isChecked) {
    console.log('toggleTile', tile, isChecked);

    if (this.selectedTiles.find(tile_ => tile_.id === tile.id)) {
      this.selectedTiles = this.selectedTiles.filter(tile_ => tile_.id !== tile.id);
      tile.isSelected = false;
    } else {
      this.selectedTiles.push(tile);
      tile.isSelected = true;
    }
  }
}
