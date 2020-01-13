import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsModule } from 'ng2-charts';

import { FieldWaterUseComponent } from './field-water-use.component';

describe('FieldWaterUseComponent', () => {
  let component: FieldWaterUseComponent;
  let fixture: ComponentFixture<FieldWaterUseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ChartsModule],
      declarations: [FieldWaterUseComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldWaterUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
