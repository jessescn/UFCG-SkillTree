import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { beeHiveGraphComponent } from './beehive-graph.component';

describe('HexGraphComponent', () => {
  let component: beeHiveGraphComponent;
  let fixture: ComponentFixture<beeHiveGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ beeHiveGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(beeHiveGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
