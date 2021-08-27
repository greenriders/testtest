import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifytraitementComponent } from './modifytraitement.component';

describe('ModifytraitementComponent', () => {
  let component: ModifytraitementComponent;
  let fixture: ComponentFixture<ModifytraitementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifytraitementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifytraitementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
