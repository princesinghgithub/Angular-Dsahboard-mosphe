import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetOneComponent } from './timesheet-one.component';

describe('TimesheetOneComponent', () => {
  let component: TimesheetOneComponent;
  let fixture: ComponentFixture<TimesheetOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimesheetOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimesheetOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
