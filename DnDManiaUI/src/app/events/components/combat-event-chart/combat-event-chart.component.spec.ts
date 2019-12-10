import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CombatEventChartComponent } from './combat-event-chart.component';

describe('CombatEventChartComponent', () => {
  let component: CombatEventChartComponent;
  let fixture: ComponentFixture<CombatEventChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CombatEventChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombatEventChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
