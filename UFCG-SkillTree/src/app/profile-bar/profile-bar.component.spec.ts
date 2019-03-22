import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileBarComponent } from './profile-bar.component';

describe('ProfileBarComponent', () => {
  let component: ProfileBarComponent;
  let fixture: ComponentFixture<ProfileBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
