import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuivireparationComponent } from './suivireparation.component';

describe('SuivireparationComponent', () => {
  let component: SuivireparationComponent;
  let fixture: ComponentFixture<SuivireparationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuivireparationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuivireparationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
