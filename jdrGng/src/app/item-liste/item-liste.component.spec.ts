import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemListeComponent } from './item-liste.component';

describe('ItemListeComponent', () => {
  let component: ItemListeComponent;
  let fixture: ComponentFixture<ItemListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
