import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalDonorsComponent } from './total-donors.component';

describe('TotalDonorsComponent', () => {
  let component: TotalDonorsComponent;
  let fixture: ComponentFixture<TotalDonorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalDonorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalDonorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
