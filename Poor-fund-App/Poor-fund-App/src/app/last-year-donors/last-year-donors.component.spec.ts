import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastYearDonorsComponent } from './last-year-donors.component';

describe('LastYearDonorsComponent', () => {
  let component: LastYearDonorsComponent;
  let fixture: ComponentFixture<LastYearDonorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastYearDonorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastYearDonorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
