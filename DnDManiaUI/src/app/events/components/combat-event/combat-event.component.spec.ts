import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CombatEventComponent } from './combat-event.component';

describe('CombatEventComponent', () => {
  let component: CombatEventComponent;
  let fixture: ComponentFixture<CombatEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CombatEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombatEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
