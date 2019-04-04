import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorsGrantingInformationComponent } from './donors-granting-information.component';

describe('DonorsGrantingInformationComponent', () => {
  let component: DonorsGrantingInformationComponent;
  let fixture: ComponentFixture<DonorsGrantingInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonorsGrantingInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonorsGrantingInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
