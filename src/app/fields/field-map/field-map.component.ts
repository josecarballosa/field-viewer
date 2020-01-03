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

import { Field, HBImaImage } from '../shared/field.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-field-map',
  templateUrl: './field-map.component.html',
  styleUrls: ['./field-map.component.scss'],
})
export class FieldMapComponent implements AfterViewInit {
  @Input() field: Field;
  @Output() viewSelected = new EventEmitter<string>();

  @ViewChild('map', { static: true }) mapDiv: ElementRef;
  private mapKey = environment.mapKey;
  private map: L.Map;
  private control: L.Control.Layers;
  private selectedLayer = 'Details';

  ngAfterViewInit() {
    if (this.field && this.mapKey) {
      this.createMap(this.field, this.mapKey);
    }
  }

  createMap(field: Field, mapKey: string) {
    if (!this.map) {
      this.map = L.map(this.mapDiv.nativeElement);
    } else {
      this.control.remove();
      this.map.eachLayer(layer => {
        layer.remove();
      });
    }

    const baseLayer = this.createBaseLayer(mapKey);
    this.map.addLayer(baseLayer);

    const detailsLayer = this.createDetailsLayer(field);
    const healthLayer = this.createHealthLayer(field);
    const irrigationLayer = this.createIrrigationLayer(field);

    const overlayLayers = {
      Details: detailsLayer,
      Health: healthLayer,
      Irrigation: irrigationLayer,
    };
    this.map.addLayer(overlayLayers[this.selectedLayer]);

    /**
     * This control switches exclusively among the overlay layers  (i.e. as radio buttons).
     * It has no inclusive layers to switch (i.e. as check boxes)
     */
    this.control = L.control
      .layers(overlayLayers, {}, { collapsed: false })
      .addTo(this.map);

    this.map.on('baselayerchange', (event: L.LayersControlEvent) => {
      this.selectedLayer = event.name;
      this.viewSelected.emit(event.name);
    });

    const bounds = detailsLayer.getBounds();
    this.map.fitBounds(bounds);
  }

  createBaseLayer(mapKey: string) {
    return L.tileLayer(
      `https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=${mapKey}`,
      { id: 'mapbox.satellite' },
    );
  }

  createDetailsLayer(field: Field) {
    return L.geoJSON(field.geoJSONResponse, {
      style: {
        color: 'white',
        weight: 2, // 2    0
        fillColor: 'gold',
        fillOpacity: 0.5, // 0.5  1
      },
    });
  }

  createHealthLayer(field: Field) {
    return this.createImageLayer(field.HB_ImaImageTypeCPI[0]);
  }

  createIrrigationLayer(field: Field) {
    return this.createImageLayer(field.HB_ImaImageTypeETA[0]);
  }

  createImageLayer(fieldImage: HBImaImage) {
    const { latne, lngne, latsw, lngsw, b64img } = fieldImage;
    const imageBounds = [
      [latne, lngne],
      [latsw, lngsw],
    ];
    return L.imageOverlay(`data:image/png;base64,${b64img}`, imageBounds);
  }
}
