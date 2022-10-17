import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeseetComponent } from './timeseet.component';

describe('TimeseetComponent', () => {
  let component: TimeseetComponent;
  let fixture: ComponentFixture<TimeseetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeseetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeseetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
