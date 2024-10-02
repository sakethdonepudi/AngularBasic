import { Component } from '@angular/core';

interface Site {
  name: string;
  lat: number;
  lng: number;
  type: string;
  iconUrl: string; // URL for the marker icon
  link: string; // Google Maps link for the site
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  zoom = 10;
  center: google.maps.LatLngLiteral = { lat: 37.7749, lng: -122.4194 };

  // Define the sites with their respective types and icons
  sites: Site[] = [
    { name: 'Site A', lat: 37.7749, lng: -122.4194, type: 'ZLD', iconUrl: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png', link: 'https://www.google.com/maps?q=37.7749,-122.4194' },
    { name: 'Site B', lat: 37.8049, lng: -122.4494, type: 'CTDI', iconUrl: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png', link: 'https://www.google.com/maps?q=37.8049,-122.4494' },
  ];

  // Track which types are enabled for toggling
  selectedTypes: string[] = ['ZLD', 'CTDI'];

  // Toggle the visibility of markers by type
  toggleType(type: string) {
    if (this.selectedTypes.includes(type)) {
      this.selectedTypes = this.selectedTypes.filter(t => t !== type);
    } else {
      this.selectedTypes.push(type);
    }
  }

  // Determine whether to display the marker based on the selected type
  showMarker(site: Site): boolean {
    return this.selectedTypes.includes(site.type);
  }

  // Open the location in Google Maps
  openLocation(site: Site) {
    window.open(site.link, '_blank');
  }
}
