import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanceDesComponent } from './lance-des.component';

describe('LanceDesComponent', () => {
  let component: LanceDesComponent;
  let fixture: ComponentFixture<LanceDesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanceDesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanceDesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
