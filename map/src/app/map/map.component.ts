import { Component, OnInit } from '@angular/core';
import { MapMarker } from '@angular/google-maps';

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

  // Marker icons for each type
  markerIcons = {
    ZLD: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',  // Green for ZLD
    CTOI: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'   // Blue for CTOI
  };

  // All site markers with types and marker icons
  markers = [
    { type: 'ZLD' as SiteType, label: 'ZLD Site 1', position: { lat: 19.0760, lng: 72.8777 }, icon: this.markerIcons.ZLD },
    { type: 'ZLD' as SiteType, label: 'ZLD Site 2', position: { lat: 28.7041, lng: 77.1025 }, icon: this.markerIcons.ZLD },
    { type: 'CTOI' as SiteType, label: 'CTOI Site 1', position: { lat: 13.0827, lng: 80.2707 }, icon: this.markerIcons.CTOI },
    { type: 'CTOI' as SiteType, label: 'CTOI Site 2', position: { lat: 22.5726, lng: 88.3639 }, icon: this.markerIcons.CTOI },
  ];

  // Filtered markers based on user toggle
  filteredMarkers = [...this.markers];

  // Currently active types
  activeTypes = {
    ZLD: true,
    CTOI: true,
  };

  ngOnInit() {}

  // Toggle visibility of markers by type
  toggleType(type: SiteType) {
    this.activeTypes[type] = !this.activeTypes[type];
    this.filterMarkers();
  }

  // Filter markers based on active types
  filterMarkers() {
    this.filteredMarkers = this.markers.filter(marker => this.activeTypes[marker.type]);
  }
}
