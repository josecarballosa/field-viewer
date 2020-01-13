import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';

import * as L from 'leaflet';
import * as geojson from 'geojson';

import { Field } from '@app/fields/shared/field.model';

@Component({
  selector: 'app-field-thumbnail',
  templateUrl: './field-thumbnail.component.html',
  styleUrls: ['./field-thumbnail.component.scss'],
})
export class FieldThumbnailComponent implements AfterViewInit {
  @Input() field: Field;
  @ViewChild('map', { static: true }) mapDiv: ElementRef;

  private map: L.Map;

  ngAfterViewInit() {
    if (this.field) {
      this.createMap(this.field);
    }
  }

  createMap(field: Field) {
    if (!this.map) {
      this.map = L.map(this.mapDiv.nativeElement, {
        zoomControl: false,
        attributionControl: false,
        scrollWheelZoom: false,
        touchZoom: false,
        boxZoom: false,
        doubleClickZoom: false,
        dragging: false,
        tap: false,
        keyboard: false,
        // keyboardPanDelta: false,
      });
    } else {
      this.map.eachLayer(layer => layer.remove());
    }

    const overlayLayer = this.createOverlayLayer(field);
    this.map.addLayer(overlayLayer);

    const bounds = overlayLayer.getBounds();
    this.map.fitBounds(bounds);
  }

  createOverlayLayer(field: Field) {
    return L.geoJSON(field.geoJSONResponse as geojson.GeoJsonObject, {
      style: {
        color: 'white',
        weight: 0, // 2    0
        fillColor: 'gold',
        fillOpacity: 1, // 0.5  1
      },
    });
  }
}
