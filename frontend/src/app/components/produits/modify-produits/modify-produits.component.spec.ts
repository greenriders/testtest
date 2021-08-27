import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyProduitsComponent } from './modify-produits.component';

describe('ModifyProduitsComponent', () => {
  let component: ModifyProduitsComponent;
  let fixture: ComponentFixture<ModifyProduitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyProduitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyProduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
