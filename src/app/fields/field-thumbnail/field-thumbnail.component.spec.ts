import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldThumbnailComponent } from './field-thumbnail.component';

describe('FieldThumbnailComponent', () => {
  let component: FieldThumbnailComponent;
  let fixture: ComponentFixture<FieldThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FieldThumbnailComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
