import { Component, OnInit } from '@angular/core';
import { LeafletMouseEvent, Marker, latLng, marker, tileLayer } from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // this.layers = this.initialCoordinates.map((value) =>
    //   marker([value.latitude, value.longitude])
    // );
  }

  // @Input()
  // initialCoordinates: coordinatesMap[] = [];

  // @Output()
  // onSelectedLocation = new EventEmitter<coordinatesMap>();

  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: 'Angular Movies',
      }),
    ],
    zoom: 13,
    center: latLng(18.473564631048617, -69.93999481201173),
  };

  layers: Marker<any>[] = [];

  handleMapClick(event: LeafletMouseEvent) {
    const latitude = event.latlng.lat;
    const longitude = event.latlng.lng;
    console.log({ latitude, longitude });
    this.layers = []; //NOTE: to keep only the last selection
    this.layers.push(marker([latitude, longitude]));
    // this.onSelectedLocation.emit({ latitude, longitude });
  }
}
