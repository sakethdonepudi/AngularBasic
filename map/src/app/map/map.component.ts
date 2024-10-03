import { Component } from '@angular/core';

interface Marker {
  type: string;
  label: string;
  position: { lat: number; lng: number };
  icon?: string; 
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  center = { lat: 20.5937, lng: 78.9629 };  // India
  zoom = 5;
  mapOptions = {
    mapTypeId: 'roadmap', 
    disableDefaultUI: true,
    styles: []  
  };

  defaultIcon = 'http://maps.google.com/mapfiles/ms/icons/default-dot.png';

  markers: Marker[] = [
    { type: 'ZLD', label: 'Mumbai', position: { lat: 19.0760, lng: 72.8777 }, icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png' },
    { type: 'ZLD', label: 'New Delhi', position: { lat: 28.7041, lng: 77.1025 }, icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png' },
    { type: 'CTOI', label: 'Chennai', position: { lat: 13.0827, lng: 80.2707 }, icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png' },
    { type: 'CTOI', label: 'Kolkata', position: { lat: 22.5726, lng: 88.3639 }, icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png' },
    { type: 'CTOII', label: 'Hyderabad', position: { lat: 17.4065, lng: 78.4772 }, icon: 'http://maps.google.com/mapfiles/ms/icons/orange-dot.png' },
    { type: 'CTOII', label: 'Bengaluru', position: { lat: 12.9716, lng: 77.5946 }, icon: 'http://maps.google.com/mapfiles/ms/icons/orange-dot.png' }
  ];

  filteredMarkers: Marker[] = [...this.markers];

  activeTypes: { [key: string]: boolean } = {
    ZLD: false,
    CTOI: false,
    CTOII: false
  };

  selectedMarker: Marker | null = null;

  toggleType(type: string) {
    if (this.activeTypes.hasOwnProperty(type)) { 
      this.activeTypes[type] = !this.activeTypes[type];
      this.filteredMarkers = this.markers.filter(marker => this.activeTypes[marker.type]);
    } else {
      console.warn(`Type "${type}" is not defined in activeTypes.`);
    }
  }

  showDetails(marker: Marker) {
    this.selectedMarker = marker; 
  }

  closePopup() {
    this.selectedMarker = null; 
  }
}
