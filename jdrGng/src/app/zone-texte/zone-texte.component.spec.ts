import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneTexteComponent } from './zone-texte.component';

describe('ZoneTexteComponent', () => {
  let component: ZoneTexteComponent;
  let fixture: ComponentFixture<ZoneTexteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZoneTexteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoneTexteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
