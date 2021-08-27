import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAnomalieComponent } from './add-anomalie.component';

describe('AddAnomalieComponent', () => {
  let component: AddAnomalieComponent;
  let fixture: ComponentFixture<AddAnomalieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAnomalieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAnomalieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
