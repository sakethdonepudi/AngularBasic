import { Component, OnInit } from '@angular/core';

type SiteType = 'ZLD' | 'CTOI';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  // Center the map at a default location (India)
  center: google.maps.LatLngLiteral = { lat: 19.7291, lng: 79.0008 };
  zoom = 5;

  // All site markers with types
  markers = [
    { type: 'ZLD', label: 'ZLD Site 1', position: { lat: 19.0760, lng: 72.8777 } },
    { type: 'ZLD', label: 'ZLD Site 2', position: { lat: 28.7041, lng: 77.1025 } },
    { type: 'CTOI', label: 'CTOI Site 1', position: { lat: 13.0827, lng: 80.2707 } },
    { type: 'CTOI', label: 'CTOI Site 2', position: { lat: 22.5726, lng: 88.3639 } },
  ];

  // Filtered markers based on user toggle
  filteredMarkers = [...this.markers];

  // Currently active types
  activeTypes: { [key in SiteType]: boolean } = {
    ZLD: true,
    CTOI: true,
  };

  ngOnInit() {}

  // Toggle visibility of markers by type
  toggleType(type: SiteType) {
    this.activeTypes[type] = !this.activeTypes[type];
    this.filterMarkers();
  }

  // Filter markers based on active types (using type assertion)
  filterMarkers() {
    this.filteredMarkers = this.markers.filter(marker => this.activeTypes[marker.type as SiteType]);
  }
}
