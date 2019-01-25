import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGetStartedComponent } from './form-get-started.component';

describe('FormGetStartedComponent', () => {
  let component: FormGetStartedComponent;
  let fixture: ComponentFixture<FormGetStartedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormGetStartedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGetStartedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
