import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageGrantedListComponent } from './manage-granted-list.component';

describe('ManageGrantedListComponent', () => {
  let component: ManageGrantedListComponent;
  let fixture: ComponentFixture<ManageGrantedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageGrantedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageGrantedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
