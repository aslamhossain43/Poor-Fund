import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastYearNotGrantedListComponent } from './last-year-not-granted-list.component';

describe('LastYearNotGrantedListComponent', () => {
  let component: LastYearNotGrantedListComponent;
  let fixture: ComponentFixture<LastYearNotGrantedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastYearNotGrantedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastYearNotGrantedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
