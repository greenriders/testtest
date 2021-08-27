import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraitementReparationComponent } from './traitement-reparation.component';

describe('TraitementReparationComponent', () => {
  let component: TraitementReparationComponent;
  let fixture: ComponentFixture<TraitementReparationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraitementReparationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraitementReparationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
