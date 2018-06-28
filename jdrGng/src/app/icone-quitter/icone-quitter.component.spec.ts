import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconeQuitterComponent } from './icone-quitter.component';

describe('IconeQuitterComponent', () => {
  let component: IconeQuitterComponent;
  let fixture: ComponentFixture<IconeQuitterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconeQuitterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconeQuitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
