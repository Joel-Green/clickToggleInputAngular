import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickinputComponent } from './clickinput.component';

describe('ClickinputComponent', () => {
  let component: ClickinputComponent;
  let fixture: ComponentFixture<ClickinputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickinputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
