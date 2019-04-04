import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageNotGrantedListComponent } from './manage-not-granted-list.component';

describe('ManageNotGrantedListComponent', () => {
  let component: ManageNotGrantedListComponent;
  let fixture: ComponentFixture<ManageNotGrantedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageNotGrantedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageNotGrantedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
