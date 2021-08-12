import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeOverComponent } from './mode-over.component';

describe('ModeOverComponent', () => {
  let component: ModeOverComponent;
  let fixture: ComponentFixture<ModeOverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeOverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeOverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
