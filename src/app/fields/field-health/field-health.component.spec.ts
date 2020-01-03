import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldHealthComponent } from './field-health.component';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('FieldHealthComponent', () => {
  let component: FieldHealthComponent;
  let fixture: ComponentFixture<FieldHealthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, RouterTestingModule],
      declarations: [FieldHealthComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { parent: { params: { ima: '123' } } } },
        },
        // TODO: mock router service (why the test is not failing without it?)
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
