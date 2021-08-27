import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyMarqueComponent } from './modify-marque.component';

describe('ModifyMarqueComponent', () => {
  let component: ModifyMarqueComponent;
  let fixture: ComponentFixture<ModifyMarqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyMarqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyMarqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
