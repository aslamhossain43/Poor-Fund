import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantingInformationComponent } from './granting-information.component';

describe('GrantingInformationComponent', () => {
  let component: GrantingInformationComponent;
  let fixture: ComponentFixture<GrantingInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrantingInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrantingInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
