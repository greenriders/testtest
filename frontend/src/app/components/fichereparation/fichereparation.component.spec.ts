import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichereparationComponent } from './fichereparation.component';

describe('FichereparationComponent', () => {
  let component: FichereparationComponent;
  let fixture: ComponentFixture<FichereparationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FichereparationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FichereparationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
