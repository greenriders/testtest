import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyDemandeReparationComponent } from './modify-demande-reparation.component';

describe('ModifyDemandeReparationComponent', () => {
  let component: ModifyDemandeReparationComponent;
  let fixture: ComponentFixture<ModifyDemandeReparationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyDemandeReparationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyDemandeReparationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
