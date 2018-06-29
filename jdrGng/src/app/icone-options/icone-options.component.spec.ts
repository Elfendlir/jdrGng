import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconeOptionsComponent } from './icone-options.component';

describe('IconeOptionsComponent', () => {
  let component: IconeOptionsComponent;
  let fixture: ComponentFixture<IconeOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconeOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconeOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
