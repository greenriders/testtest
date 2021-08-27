import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnomalieCategoryComponent } from './anomalie-category.component';


describe('AnomalieCategoryComponent', () => {
  let component: AnomalieCategoryComponent;
  let fixture: ComponentFixture<AnomalieCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnomalieCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnomalieCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
