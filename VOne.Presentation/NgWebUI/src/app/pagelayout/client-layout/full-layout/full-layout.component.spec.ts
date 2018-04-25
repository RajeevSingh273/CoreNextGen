import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullLayoutClientComponent } from './full-layout.component';

describe('FullLayoutComponent', () => {
  let component: FullLayoutClientComponent;
  let fixture: ComponentFixture<FullLayoutClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullLayoutClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullLayoutClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
