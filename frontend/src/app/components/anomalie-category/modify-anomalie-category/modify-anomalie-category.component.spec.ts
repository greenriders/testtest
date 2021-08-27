import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyAnomalieCategoryComponent } from './modify-anomalie-category.component';

describe('ModifyAnomalieCategoryComponent', () => {
  let component: ModifyAnomalieCategoryComponent;
  let fixture: ComponentFixture<ModifyAnomalieCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyAnomalieCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyAnomalieCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
