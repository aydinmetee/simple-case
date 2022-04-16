import { Component } from '@angular/core';
import { LocalStorageService } from './shared/services/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private localStorageService: LocalStorageService) {
    if (!this.localStorageService.getItem('hotels')) {
      const hotelData = [
        {
          id: 'TEST-001',
          name: 'Voyage Hotel',
          point: 9.7,
          creDate: new Date(),
        },
        {
          id: 'TEST-002',
          name: 'Maxx Royal Hotel',
          point: 8.7,
          creDate: new Date(),
        },
        {
          id: 'TEST-003',
          name: 'Vogue Hotel',
          point: 9.2,
          creDate: new Date(),
        },
        {
          id: 'TEST-004',
          name: 'Vogue Belek Hotel',
          point: 9.0,
          creDate: new Date(),
        },
        {
          id: 'TEST-005',
          name: 'Voyage Alanya Hotel',
          point: 7.5,
          creDate: new Date(),
        },
      ];
      this.localStorageService.setItem('hotels', JSON.stringify(hotelData));
    }
  }
}
