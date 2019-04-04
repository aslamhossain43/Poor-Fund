import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPurposeComponent } from './main-purpose.component';

describe('MainPurposeComponent', () => {
  let component: MainPurposeComponent;
  let fixture: ComponentFixture<MainPurposeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPurposeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPurposeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
