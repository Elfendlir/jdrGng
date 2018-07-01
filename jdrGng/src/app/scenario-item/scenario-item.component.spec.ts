import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenarioItemComponent } from './scenario-item.component';

describe('ScenarioItemComponent', () => {
  let component: ScenarioItemComponent;
  let fixture: ComponentFixture<ScenarioItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScenarioItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenarioItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
