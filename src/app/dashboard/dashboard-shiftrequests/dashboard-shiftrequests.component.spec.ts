import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardShiftrequestsComponent } from './dashboard-shiftrequests.component';

describe('DashboardShiftrequestsComponent', () => {
  let component: DashboardShiftrequestsComponent;
  let fixture: ComponentFixture<DashboardShiftrequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardShiftrequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardShiftrequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
