import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { map, tap } from 'rxjs/operators';

import { FieldService } from '../shared/field.service';
import { Field } from '../shared/field.model';

@Component({
  selector: 'app-field-irrigation',
  templateUrl: './field-irrigation.component.html',
  styleUrls: ['./field-irrigation.component.scss'],
})
export class FieldIrrigationComponent implements OnInit {
  ima = this.route.snapshot.parent.params.ima as string;
  field: Field;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fieldService: FieldService,
  ) {}

  ngOnInit() {
    this.fieldService.fields$
      .pipe(
        map(fields => fields.find(field => field.ima === this.ima)),
        tap(field => {
          if (!field) {
            this.router.navigateByUrl(`/`);
          } else {
            this.field = field;
          }
        }),
      )
      .subscribe();
  }
}
