import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonEventsComponent } from './button-events.component';

describe('ButtonEventsComponent', () => {
  let component: ButtonEventsComponent;
  let fixture: ComponentFixture<ButtonEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
