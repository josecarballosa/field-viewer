import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldIrrigationComponent } from './field-irrigation.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';

describe('FieldIrrigationComponent', () => {
  let component: FieldIrrigationComponent;
  let fixture: ComponentFixture<FieldIrrigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [FieldIrrigationComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { parent: { params: { ima: '123' } } } },
        },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldIrrigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
