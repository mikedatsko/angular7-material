import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModuleTest } from '../../mocks/app.module.test';
import { FeedbackComponent } from './feedback.component';

describe('SearchProductsComponent', () => {
  let component: FeedbackComponent;
  let fixture: ComponentFixture<FeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(AppModuleTest('FeedbackComponent', FeedbackComponent)).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
