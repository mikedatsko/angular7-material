import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModuleTest } from '../../mocks/app.module.test';
import { SearchProductsComponent } from './search-products.component';

describe('SearchProductsComponent', () => {
  let component: SearchProductsComponent;
  let fixture: ComponentFixture<SearchProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(AppModuleTest('SearchProductsComponent', SearchProductsComponent)).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
