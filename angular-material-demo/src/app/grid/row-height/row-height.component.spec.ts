import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowHeightComponent } from './row-height.component';

describe('RowHeightComponent', () => {
  let component: RowHeightComponent;
  let fixture: ComponentFixture<RowHeightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RowHeightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RowHeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
