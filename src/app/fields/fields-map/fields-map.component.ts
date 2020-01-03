import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';

import * as L from 'leaflet';

import { Field } from '../shared/field.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-fields-map',
  templateUrl: './fields-map.component.html',
  styleUrls: ['./fields-map.component.scss'],
})
export class FieldsMapComponent implements AfterViewInit {
  @Input() fields: Field[];
  @Output() fieldSelected = new EventEmitter<Field>();

  @ViewChild('map', { static: true }) mapDiv: ElementRef;
  private mapKey = environment.mapKey;
  private map: L.Map;

  handleClick(field: Field) {
    this.fieldSelected.emit(field);
  }

  ngAfterViewInit() {
    if (this.fields && this.mapKey) {
      this.createMap(this.fields, this.mapKey);
    }
  }

  createMap(fields: Field[], mapKey: string) {
    if (!this.map) {
      this.map = L.map(this.mapDiv.nativeElement);
    } else {
      this.map.eachLayer(layer => layer.remove());
    }

    const baseLayer = this.createBaseLayer(mapKey);
    this.map.addLayer(baseLayer);

    const overlayLayer = this.createOverlayLayer(fields);
    this.map.addLayer(overlayLayer);

    const bounds = overlayLayer.getBounds();
    this.map.fitBounds(bounds);
  }

  createBaseLayer(mapKey: string) {
    return L.tileLayer(
      `https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=${mapKey}`,
      { id: 'mapbox.satellite' },
    );
  }

  createOverlayLayer(fields: Field[]) {
    const featureCollection = fields.reduce(
      (features, field) => [
        ...features,
        { ...field.geoJSONResponse, properties: { field } },
      ],
      [],
    );

    const style = {
      color: 'white',
      weight: 2, // 2    0
      fillColor: 'gold',
      fillOpacity: 0.5, // 0.5  1
    };

    const onFieldSelected = this.fieldSelected;
    let geojsonLayer: L.Layer;

    function onEachFeature(feature, layer) {
      layer.on({
        mouseover: function highlightFeature(e) {
          const layer = e.target;
          layer.setStyle({ weight: 5, fillOpacity: 0.7 });
          if (!(L.Browser.ie || L.Browser.opera || L.Browser.edge)) {
            layer.bringToFront();
          }
        },
        mouseout: function resetHighlight(e) {
          geojsonLayer.resetStyle(e.target);
        },
        click: function outputSelection(e) {
          onFieldSelected.emit(e.target.feature.properties.field);
        },
      });
    }

    return (geojsonLayer = L.geoJSON(featureCollection, {
      style,
      onEachFeature,
    }));
  }
}
