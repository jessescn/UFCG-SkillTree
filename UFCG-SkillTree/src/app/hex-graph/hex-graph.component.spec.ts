import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HexGraphComponent } from './hex-graph.component';

describe('HexGraphComponent', () => {
  let component: HexGraphComponent;
  let fixture: ComponentFixture<HexGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HexGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HexGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
