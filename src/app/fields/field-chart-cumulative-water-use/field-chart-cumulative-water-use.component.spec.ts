import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldChartCumulativeWaterUseComponent } from './field-chart-cumulative-water-use.component';
import { ChartsModule } from 'ng2-charts';

describe('FieldChartCumulativeWaterUseComponent', () => {
  let component: FieldChartCumulativeWaterUseComponent;
  let fixture: ComponentFixture<FieldChartCumulativeWaterUseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ChartsModule],
      declarations: [FieldChartCumulativeWaterUseComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldChartCumulativeWaterUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
