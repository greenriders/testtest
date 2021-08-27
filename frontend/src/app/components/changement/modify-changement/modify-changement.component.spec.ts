import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyChangementComponent } from './modify-changement.component';

describe('ModifyChangementComponent', () => {
  let component: ModifyChangementComponent;
  let fixture: ComponentFixture<ModifyChangementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyChangementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyChangementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
