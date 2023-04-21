import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  LeafletMouseEvent,
  Marker,
  icon,
  latLng,
  marker,
  tileLayer,
} from 'leaflet';
import { coordinatesMap, coordinatesMapWithMessage } from './coordinate';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.layers = this.initialCoordinates.map((value) => {
      const m = marker([value.latitude, value.longitude], {
        icon: this.iconDefault,
      });
      if (value.message) {
        m.bindPopup(value.message, { autoClose: false, autoPan: false });
      }

      return m;
    });
  }

  @Input()
  initialCoordinates: coordinatesMapWithMessage[] = [];

  @Input()
  editMode: boolean = true;

  @Output()
  onSelectedLocation = new EventEmitter<coordinatesMap>();

  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: 'Angular Movies',
      }),
    ],
    zoom: 13,
    center: latLng(18.473564631048617, -69.93999481201173),
    // center: latLng(49.62452516882549, 6.155090332031251), //Kirchberg
  };

  layers: Marker<any>[] = [];

  iconDefault = icon({
    iconSize: [25, 41],
    iconAnchor: [13, 41],
    iconUrl: 'assets/marker-icon.png',
    shadowUrl: 'assets/marker-shadow.png',
  });

  handleMapClick(event: LeafletMouseEvent) {
    if (this.editMode) {
      const latitude = event.latlng.lat;
      const longitude = event.latlng.lng;
      console.log({ latitude, longitude });
      this.layers = []; //NOTE: to keep only the last selection
      this.layers.push(
        marker([latitude, longitude], {
          icon: this.iconDefault,
        })
      );
      this.onSelectedLocation.emit({ latitude, longitude });
    }
  }
}
