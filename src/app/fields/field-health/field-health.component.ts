import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { map, tap } from 'rxjs/operators';

import { FieldService } from '../shared/field.service';

@Component({
  selector: 'app-field-health',
  templateUrl: './field-health.component.html',
  styleUrls: ['./field-health.component.scss'],
})
export class FieldHealthComponent {
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
    public fieldService: FieldService,
  ) {}
}
