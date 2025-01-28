import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboarJobsComponent } from './dashboar-jobs.component';

describe('DashboarJobsComponent', () => {
  let component: DashboarJobsComponent;
  let fixture: ComponentFixture<DashboarJobsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboarJobsComponent]
    });
    fixture = TestBed.createComponent(DashboarJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
