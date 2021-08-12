import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeSideComponent } from './mode-side.component';

describe('ModeSideComponent', () => {
  let component: ModeSideComponent;
  let fixture: ComponentFixture<ModeSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeSideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
