import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldWaterDepletionComponent } from './field-water-depletion.component';
import { ChartsModule } from 'ng2-charts';

describe('FieldWaterDepletionComponent', () => {
  let component: FieldWaterDepletionComponent;
  let fixture: ComponentFixture<FieldWaterDepletionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ChartsModule],
      declarations: [FieldWaterDepletionComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldWaterDepletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
