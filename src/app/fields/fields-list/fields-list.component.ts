import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Field } from '../shared/field.model';

@Component({
  selector: 'app-fields-list',
  templateUrl: './fields-list.component.html',
  styleUrls: ['./fields-list.component.scss'],
})
export class FieldsListComponent {
  @Input() fields: Field[];
  @Output() fieldSelected = new EventEmitter<Field>();

  handleClick(field: Field) {
    this.fieldSelected.emit(field);
  }
}
