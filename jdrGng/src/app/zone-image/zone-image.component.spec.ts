import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneImageComponent } from './zone-image.component';

describe('ZoneImageComponent', () => {
  let component: ZoneImageComponent;
  let fixture: ComponentFixture<ZoneImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZoneImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoneImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
