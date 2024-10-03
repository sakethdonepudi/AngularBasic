import { Component, OnInit } from '@angular/core';

interface Marker {
  type: string;
  label: string;
  position: { lat: number; lng: number };
  icon?: string;
  siteScore?: number;  
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  center = { lat: 20.5937, lng: 78.9629 }; // Centered over India
  zoom = 5;
  defaultIcon = 'http://maps.google.com/mapfiles/ms/icons/black-dot.png';

  markers: Marker[] = [
    { type: 'ZLD', label: 'Mumbai', position: { lat: 19.0760, lng: 72.8777 }, icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png', siteScore: 75 },
    { type: 'ZLD', label: 'New Delhi', position: { lat: 28.7041, lng: 77.1025 }, icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png', siteScore: 82 },
    { type: 'ZLD', label: 'Ahmedabad', position: { lat: 23.0225, lng: 72.5714 }, icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png', siteScore: 66 },
    { type: 'CTO1', label: 'Chennai', position: { lat: 13.0827, lng: 80.2707 }, icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png', siteScore: 90 },
    { type: 'CTO1', label: 'Kolkata', position: { lat: 22.5726, lng: 88.3639 }, icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png', siteScore: 60 },
    { type: 'CTO1', label: 'Pune', position: { lat: 18.5204, lng: 73.8567 }, icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png', siteScore: 85 },
    { type: 'CTO2', label: 'Hyderabad', position: { lat: 17.4065, lng: 78.4772 }, icon: 'http://maps.google.com/mapfiles/ms/icons/orange-dot.png', siteScore: 73 },
    { type: 'CTO2', label: 'Bengaluru', position: { lat: 12.9716, lng: 77.5946 }, icon: 'http://maps.google.com/mapfiles/ms/icons/orange-dot.png', siteScore: 88 },
    { type: 'CTO2', label: 'Nagpur', position: { lat: 21.1458, lng: 79.0882 }, icon: 'http://maps.google.com/mapfiles/ms/icons/orange-dot.png', siteScore: 50 },
    { type: 'CTO3', label: 'Lucknow', position: { lat: 26.8467, lng: 80.9462 }, icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png', siteScore: 92 },
    { type: 'CTO3', label: 'Kanpur', position: { lat: 26.4499, lng: 80.3319 }, icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png', siteScore: 55 },
    { type: 'CTO3', label: 'Jaipur', position: { lat: 26.9124, lng: 75.7873 }, icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png', siteScore: 70 }
  ];

  filteredMarkers: Marker[] = [...this.markers];
  activeTypes: { [key: string]: boolean } = {
    ZLD: true,
    CTO1: true,
    CTO2: true,
    CTO3: true
  };

  selectedMarker: Marker | null = null;
  popupPosition: { top: number; left: number } = { top: 0, left: 0 };

  
  predefinedStatistics = 'Get more on statistics page of the site';

  ngOnInit() {
    this.filteredMarkers = [...this.markers];
  }

  toggleType(type: string) {
    this.activeTypes[type] = !this.activeTypes[type];
    this.filteredMarkers = this.markers.filter(marker => this.activeTypes[marker.type]);
  }

  showDetails(marker: Marker) {
    this.selectedMarker = marker;
    this.popupPosition = { top: 100, left: 100 };
  }

  // Close the popup
  closePopup() {
    this.selectedMarker = null;
  }
}
