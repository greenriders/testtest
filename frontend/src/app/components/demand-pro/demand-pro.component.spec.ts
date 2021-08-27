import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandProComponent } from './demand-pro.component';

describe('DemandProComponent', () => {
  let component: DemandProComponent;
  let fixture: ComponentFixture<DemandProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandProComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
