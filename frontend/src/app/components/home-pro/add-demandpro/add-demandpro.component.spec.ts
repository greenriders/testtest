import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDemandproComponent } from './add-demandpro.component';

describe('AddDemandproComponent', () => {
  let component: AddDemandproComponent;
  let fixture: ComponentFixture<AddDemandproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDemandproComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDemandproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
