import { Injectable } from '@angular/core';

import { of } from 'rxjs';

import { FIELDS } from './field.data';

@Injectable({
  providedIn: 'root',
})
export class FieldService {
  fields$ = of(FIELDS);
  test = 'hi';
}
