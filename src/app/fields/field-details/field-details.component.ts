import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { map, tap } from 'rxjs/operators';

import { FieldService } from '@app/fields/shared/field.service';

@Component({
  selector: 'app-field-details, [app-field-details]',
  templateUrl: './field-details.component.html',
  styleUrls: ['./field-details.component.scss'],
})
export class FieldDetailsComponent {
  ima = this.route.snapshot.parent.params.ima as string;
  field$ = this.fieldService.fields$.pipe(
    map(fields => fields.find(field => field.ima === this.ima)),
    tap(field => {
      if (!field) {
        this.router.navigateByUrl(`/`);
      }
    }),
  );

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fieldService: FieldService,
  ) {}
}
