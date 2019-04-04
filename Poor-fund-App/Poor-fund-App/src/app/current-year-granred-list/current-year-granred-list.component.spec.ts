import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentYearGranredListComponent } from './current-year-granred-list.component';

describe('CurrentYearGranredListComponent', () => {
  let component: CurrentYearGranredListComponent;
  let fixture: ComponentFixture<CurrentYearGranredListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentYearGranredListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentYearGranredListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
