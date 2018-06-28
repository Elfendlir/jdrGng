import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconePersonnageComponent } from './icone-personnage.component';

describe('IconePersonnageComponent', () => {
  let component: IconePersonnageComponent;
  let fixture: ComponentFixture<IconePersonnageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconePersonnageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconePersonnageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
