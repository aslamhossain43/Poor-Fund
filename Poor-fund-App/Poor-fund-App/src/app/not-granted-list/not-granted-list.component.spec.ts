import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotGrantedListComponent } from './not-granted-list.component';

describe('NotGrantedListComponent', () => {
  let component: NotGrantedListComponent;
  let fixture: ComponentFixture<NotGrantedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotGrantedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotGrantedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
