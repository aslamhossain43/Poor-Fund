import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentYearNotGrantedListComponent } from './current-year-not-granted-list.component';

describe('CurrentYearNotGrantedListComponent', () => {
  let component: CurrentYearNotGrantedListComponent;
  let fixture: ComponentFixture<CurrentYearNotGrantedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentYearNotGrantedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentYearNotGrantedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
