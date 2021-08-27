import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyInterventionComponent } from './modify-intervention.component';

describe('ModifyInterventionComponent', () => {
  let component: ModifyInterventionComponent;
  let fixture: ComponentFixture<ModifyInterventionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyInterventionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyInterventionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
