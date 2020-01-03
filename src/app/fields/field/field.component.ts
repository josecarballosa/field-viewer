import { Component } from '@angular/core';
import { map } from 'rxjs/operators';

import { FieldService } from '../shared/field.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss'],
})
export class FieldComponent {
  ima = this.route.snapshot.params['ima'] as string;
  field$ = this.fieldService.fields$.pipe(
    map(fields => fields.find(field => field.ima === this.ima)),
  );

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fieldService: FieldService,
  ) {}

  handleViewSelected(view: string) {
    this.router.navigateByUrl(`/fields/${this.ima}/${view}`);
  }
}
