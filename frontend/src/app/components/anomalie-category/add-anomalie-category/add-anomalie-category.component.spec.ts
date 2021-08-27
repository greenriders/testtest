import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAnomalieCategoryComponent } from './add-anomalie-category.component';

describe('AddAnomalieCategoryComponent', () => {
  let component: AddAnomalieCategoryComponent;
  let fixture: ComponentFixture<AddAnomalieCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAnomalieCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAnomalieCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
