import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';

import { SharedModule } from '@shared/shared.module';
import { FieldsRoutingModule } from './fields-routing.module';
import { FieldsComponent } from './fields/fields.component';
import { FieldsListComponent } from './fields-list/fields-list.component';
import { FieldsMapComponent } from './fields-map/fields-map.component';
import { FieldComponent } from './field/field.component';
import { FieldMapComponent } from './field-map/field-map.component';
import { FieldDetailsComponent } from './field-details/field-details.component';
import { FieldHealthComponent } from './field-health/field-health.component';
import { FieldIrrigationComponent } from './field-irrigation/field-irrigation.component';
import { FieldChartSoilWaterDepletionComponent } from './field-chart-soil-water-depletion/field-chart-soil-water-depletion.component';
import { FieldChartCumulativeWaterUseComponent } from './field-chart-cumulative-water-use/field-chart-cumulative-water-use.component';
import { FieldThumbnailComponent } from './field-thumbnail/field-thumbnail.component';

@NgModule({
  declarations: [
    FieldsComponent,
    FieldsListComponent,
    FieldsMapComponent,
    FieldComponent,
    FieldMapComponent,
    FieldDetailsComponent,
    FieldHealthComponent,
    FieldIrrigationComponent,
    FieldChartSoilWaterDepletionComponent,
    FieldChartCumulativeWaterUseComponent,
    FieldThumbnailComponent,
  ],
  imports: [
    CommonModule,
    NgbTabsetModule,
    ChartsModule,
    FieldsRoutingModule,
    SharedModule,
  ],
})
export class FieldsModule {}
