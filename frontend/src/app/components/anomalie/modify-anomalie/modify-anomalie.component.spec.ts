import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyAnomalieComponent } from './modify-anomalie.component';

describe('ModifyAnomalieComponent', () => {
  let component: ModifyAnomalieComponent;
  let fixture: ComponentFixture<ModifyAnomalieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyAnomalieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyAnomalieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
