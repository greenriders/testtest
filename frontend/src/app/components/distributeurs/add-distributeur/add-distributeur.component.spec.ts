import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDistributeurComponent } from './add-distributeur.component';

describe('AddDistributeurComponent', () => {
  let component: AddDistributeurComponent;
  let fixture: ComponentFixture<AddDistributeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDistributeurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDistributeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
