import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyTransporteurComponent } from './modify-transporteur.component';

describe('ModifyTransporteurComponent', () => {
  let component: ModifyTransporteurComponent;
  let fixture: ComponentFixture<ModifyTransporteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyTransporteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyTransporteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
