import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantedListComponent } from './granted-list.component';

describe('GrantedListComponent', () => {
  let component: GrantedListComponent;
  let fixture: ComponentFixture<GrantedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrantedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrantedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
