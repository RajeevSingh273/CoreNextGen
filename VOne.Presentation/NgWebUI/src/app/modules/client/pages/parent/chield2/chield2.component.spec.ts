import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chield2Component } from './chield2.component';

describe('Chield2Component', () => {
  let component: Chield2Component;
  let fixture: ComponentFixture<Chield2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chield2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chield2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
