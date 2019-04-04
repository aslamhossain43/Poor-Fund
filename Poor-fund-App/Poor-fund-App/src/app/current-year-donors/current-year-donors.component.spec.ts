import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentYearDonorsComponent } from './current-year-donors.component';

describe('CurrentYearDonorsComponent', () => {
  let component: CurrentYearDonorsComponent;
  let fixture: ComponentFixture<CurrentYearDonorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentYearDonorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentYearDonorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
