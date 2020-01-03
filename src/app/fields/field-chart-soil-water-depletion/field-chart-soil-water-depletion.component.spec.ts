import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldChartSoilWaterDepletionComponent } from './field-chart-soil-water-depletion.component';
import { ChartsModule } from 'ng2-charts';

describe('FieldChartSoilWaterDepletionComponent', () => {
  let component: FieldChartSoilWaterDepletionComponent;
  let fixture: ComponentFixture<FieldChartSoilWaterDepletionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ChartsModule],
      declarations: [FieldChartSoilWaterDepletionComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldChartSoilWaterDepletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
