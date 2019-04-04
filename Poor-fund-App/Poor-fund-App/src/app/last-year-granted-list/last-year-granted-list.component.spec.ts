import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastYearGrantedListComponent } from './last-year-granted-list.component';

describe('LastYearGrantedListComponent', () => {
  let component: LastYearGrantedListComponent;
  let fixture: ComponentFixture<LastYearGrantedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastYearGrantedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastYearGrantedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
