import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMeAsDonorsComponent } from './add-me-as-donors.component';

describe('AddMeAsDonorsComponent', () => {
  let component: AddMeAsDonorsComponent;
  let fixture: ComponentFixture<AddMeAsDonorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMeAsDonorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMeAsDonorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
