import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModuleTest } from '../../mocks/app.module.test';
import { WhyHiberComponent } from './why-hiber.component';

describe('SearchProductsComponent', () => {
  let component: WhyHiberComponent;
  let fixture: ComponentFixture<WhyHiberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(AppModuleTest('WhyHiberComponent', WhyHiberComponent)).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyHiberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
