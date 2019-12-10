import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestEventComponent } from './rest-event.component';

describe('RestEventComponent', () => {
  let component: RestEventComponent;
  let fixture: ComponentFixture<RestEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
