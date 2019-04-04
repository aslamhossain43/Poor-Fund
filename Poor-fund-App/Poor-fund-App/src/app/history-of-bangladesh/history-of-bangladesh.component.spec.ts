import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryOfBangladeshComponent } from './history-of-bangladesh.component';

describe('HistoryOfBangladeshComponent', () => {
  let component: HistoryOfBangladeshComponent;
  let fixture: ComponentFixture<HistoryOfBangladeshComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryOfBangladeshComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryOfBangladeshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
