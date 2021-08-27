import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyFichereparationComponent } from './modify-fichereparation.component';

describe('ModifyFichereparationComponent', () => {
  let component: ModifyFichereparationComponent;
  let fixture: ComponentFixture<ModifyFichereparationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyFichereparationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyFichereparationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
