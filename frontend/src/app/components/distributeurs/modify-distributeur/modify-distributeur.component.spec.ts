import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyDistributeurComponent } from './modify-distributeur.component';

describe('ModifyDistributeurComponent', () => {
  let component: ModifyDistributeurComponent;
  let fixture: ComponentFixture<ModifyDistributeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyDistributeurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyDistributeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
