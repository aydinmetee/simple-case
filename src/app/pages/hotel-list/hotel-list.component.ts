import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss'],
})
export class HotelListComponent implements OnInit {
  sortList: any[] = [];
  sortDef = '';
  constructor() {
    this.sortList = [
      { label: 'Puan (Artan)', value: 'point,DESC' },
      { label: 'Puan (Azalan)', value: 'point,ASC' },
    ];
  }

  ngOnInit(): void {}
}
