import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconeProfilComponent } from './icone-profil.component';

describe('IconeProfilComponent', () => {
  let component: IconeProfilComponent;
  let fixture: ComponentFixture<IconeProfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconeProfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconeProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
