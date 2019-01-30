import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppModuleTest } from './mocks/app.module.test';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule(AppModuleTest('AppComponent', AppComponent)).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have as menu', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.menu).toBeTruthy();
  });
});
