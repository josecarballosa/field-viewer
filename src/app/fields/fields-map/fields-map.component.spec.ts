import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldsMapComponent } from './fields-map.component';

describe('FieldsMapComponent', () => {
  let component: FieldsMapComponent;
  let fixture: ComponentFixture<FieldsMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FieldsMapComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldsMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
