import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DotnetcoreComponent } from './dotnetcore.component';

describe('DotnetcoreComponent', () => {
  let component: DotnetcoreComponent;
  let fixture: ComponentFixture<DotnetcoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DotnetcoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DotnetcoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
