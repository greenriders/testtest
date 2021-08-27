import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyEtatproduitComponent } from './modify-etatproduit.component';

describe('ModifyEtatproduitComponent', () => {
  let component: ModifyEtatproduitComponent;
  let fixture: ComponentFixture<ModifyEtatproduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyEtatproduitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyEtatproduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
