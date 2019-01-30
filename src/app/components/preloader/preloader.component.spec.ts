import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModuleTest } from '../../mocks/app.module.test';
import { PreloaderComponent } from './preloader.component';

describe('PreloaderComponent', () => {
  let component: PreloaderComponent;
  let fixture: ComponentFixture<PreloaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(AppModuleTest('PreloaderComponent', PreloaderComponent)).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
