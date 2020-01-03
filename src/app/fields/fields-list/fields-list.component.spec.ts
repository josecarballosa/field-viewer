import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldsListComponent } from './fields-list.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('FieldsListComponent', () => {
  let component: FieldsListComponent;
  let fixture: ComponentFixture<FieldsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FieldsListComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
