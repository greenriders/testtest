import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyLivraisonComponent } from './modify-livraison.component';

describe('ModifyLivraisonComponent', () => {
  let component: ModifyLivraisonComponent;
  let fixture: ComponentFixture<ModifyLivraisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyLivraisonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyLivraisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
