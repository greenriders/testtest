import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyModeleComponent } from './modify-modele.component';

describe('ModifyModeleComponent', () => {
  let component: ModifyModeleComponent;
  let fixture: ComponentFixture<ModifyModeleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyModeleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyModeleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
