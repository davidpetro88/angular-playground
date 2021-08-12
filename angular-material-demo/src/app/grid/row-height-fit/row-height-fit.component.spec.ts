import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowHeightFitComponent } from './row-height-fit.component';

describe('RowHeightFitComponent', () => {
  let component: RowHeightFitComponent;
  let fixture: ComponentFixture<RowHeightFitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RowHeightFitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RowHeightFitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
