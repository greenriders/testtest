import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuivinavComponent } from './suivinav.component';

describe('SuivinavComponent', () => {
  let component: SuivinavComponent;
  let fixture: ComponentFixture<SuivinavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuivinavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuivinavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
