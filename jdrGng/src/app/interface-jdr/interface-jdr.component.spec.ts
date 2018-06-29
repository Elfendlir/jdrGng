import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceJdrComponent } from './interface-jdr.component';

describe('InterfaceJdrComponent', () => {
  let component: InterfaceJdrComponent;
  let fixture: ComponentFixture<InterfaceJdrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterfaceJdrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfaceJdrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
