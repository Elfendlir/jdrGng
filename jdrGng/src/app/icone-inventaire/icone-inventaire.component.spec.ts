import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconeInventaireComponent } from './icone-inventaire.component';

describe('IconeInventaireComponent', () => {
  let component: IconeInventaireComponent;
  let fixture: ComponentFixture<IconeInventaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconeInventaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconeInventaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
