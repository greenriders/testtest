import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtatproduitComponent } from './etatproduit.component';

describe('EtatproduitComponent', () => {
  let component: EtatproduitComponent;
  let fixture: ComponentFixture<EtatproduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtatproduitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtatproduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
