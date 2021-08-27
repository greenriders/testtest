import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEtatproduitComponent } from './add-etatproduit.component';

describe('AddEtatproduitComponent', () => {
  let component: AddEtatproduitComponent;
  let fixture: ComponentFixture<AddEtatproduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEtatproduitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEtatproduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
