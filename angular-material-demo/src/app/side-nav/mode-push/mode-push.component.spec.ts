import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModePushComponent } from './mode-push.component';

describe('ModePushComponent', () => {
  let component: ModePushComponent;
  let fixture: ComponentFixture<ModePushComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModePushComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModePushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
