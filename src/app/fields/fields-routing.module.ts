import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FieldsComponent } from './fields/fields.component';
import { FieldComponent } from './field/field.component';
import { FieldDetailsComponent } from './field-details/field-details.component';
import { FieldHealthComponent } from './field-health/field-health.component';
import { FieldIrrigationComponent } from './field-irrigation/field-irrigation.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: FieldsComponent },
      {
        path: ':ima',
        component: FieldComponent,
        children: [
          { path: '', pathMatch: 'full', redirectTo: 'Details' },
          { path: 'Details', component: FieldDetailsComponent },
          { path: 'Health', component: FieldHealthComponent },
          { path: 'Irrigation', component: FieldIrrigationComponent },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FieldsRoutingModule {}
