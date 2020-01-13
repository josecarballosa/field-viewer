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
import * as geojson from 'geojson';

import { Field } from '../shared/field.model';
import { environment } from '@env/environment';

const { mapKey } = environment;

@Component({
  selector: 'app-fields-map',
  templateUrl: './fields-map.component.html',
  styleUrls: ['./fields-map.component.scss'],
})
export class FieldsMapComponent implements AfterViewInit {
  @Input() fields: Field[];
  @Output() fieldSelected = new EventEmitter<Field>();

  @ViewChild('map', { static: true }) mapDiv: ElementRef;
  private map: L.Map;

  handleClick(field: Field) {
    this.fieldSelected.emit(field);
  }

  ngAfterViewInit() {
    if (this.fields && mapKey) {
      this.createMap(this.fields, mapKey);
    }
  }

  // tslint:disable-next-line: no-shadowed-variable
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

  // tslint:disable-next-line: no-shadowed-variable
  createBaseLayer(mapKey: string) {
    return L.tileLayer(
      `https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=${mapKey}`,
      { id: 'mapbox.satellite' },
    );
  }

  createOverlayLayer(fields: Field[]) {
    const features = fields.reduce(
      (list, field) => [
        ...list,
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

    function onEachFeature(feature: geojson.Feature, layer: L.Layer) {
      layer.on({
        mouseover: function highlightFeature(e) {
          const target = e.target;
          target.setStyle({ weight: 5, fillOpacity: 0.7 });
          if (!(L.Browser.ie || L.Browser.opera || L.Browser.edge)) {
            target.bringToFront();
          }
        },
        mouseout: function resetHighlight(e) {
          (geojsonLayer as L.GeoJSON).resetStyle(e.target);
        },
        click: function outputSelection(e) {
          onFieldSelected.emit(e.target.feature.properties.field);
        },
      });
    }

    return (geojsonLayer = L.geoJSON(
      { type: 'FeatureCollection', features } as geojson.FeatureCollection,
      { style, onEachFeature },
    ));
  }
}
