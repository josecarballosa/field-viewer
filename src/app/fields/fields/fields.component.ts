import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { FieldService } from '@app/fields/shared/field.service';
import { Field } from '@app/fields/shared/field.model';

@Component({
  selector: 'app-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.scss'],
})
export class FieldsComponent {
  fields$ = this.fieldService.fields$;

  constructor(private router: Router, private fieldService: FieldService) {}

  handleFieldSelected(field: Field) {
    this.router.navigateByUrl(`/fields/${field.ima}`);
  }
}
