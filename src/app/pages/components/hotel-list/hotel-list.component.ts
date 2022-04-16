import { Component, OnInit } from '@angular/core';
import { HotelInfo } from '../../models/hotel-info';
import { UtilityService } from 'src/app/shared/services/utility.service';
import { BaseComponent } from 'src/app/shared/components/base-component';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss'],
})
export class HotelListComponent extends BaseComponent implements OnInit {
  sortList: any[] = [];
  sortDef = null;
  hotelList: HotelInfo[] = [];
  pageNum = 0;
  pageSize = 5;
  display: boolean = false;

  constructor(utilServ: UtilityService) {
    super(utilServ);
    this.sortList = [
      { label: 'Sıralama', value: null },
      { label: 'Puan (Artan)', value: 'DESC' },
      { label: 'Puan (Azalan)', value: 'ASC' },
    ];
  }

  ngOnInit(): void {
    this.hotelsData = this.getHotelsInfo();
    this.sortHotels();
  }

  getPageData(event: any) {
    this.hotelsData = this.getHotelsInfo();
    if (this.hotelsData.length <= 0) {
      return;
    }
    if (event) {
      this.pageNum = event.page;
    }
    const firstIndex = this.pageNum * this.pageSize;
    const lastIndex = this.pageSize * (this.pageNum + 1);
    this.hotelList = this.hotelsData.slice(firstIndex, lastIndex);
  }

  sortHotels() {
    if (!this.sortDef) {
      this.hotelsData = this.sortObjectArrayByDate(this.hotelsData, 'creDate');
    } else {
      this.hotelsData = this.sortObjectArrayBySelectedProperty(
        this.hotelsData,
        'point',
        this.sortDef
      );
    }

    this.setHotelsInfo();
    this.getPageData(null);
  }

  increasePoint(id: string) {
    const index = this.hotelsData.findIndex((x) => x.id == id);
    this.hotelsData[index].point += 1;
    if (this.hotelsData[index].point >= 10) {
      this.hotelsData[index].point = 10;
    }
    this.sortHotels();
  }

  decreasePoint(id: string) {
    const index = this.hotelsData.findIndex((x) => x.id == id);
    this.hotelsData[index].point -= 1;
    if (this.hotelsData[index].point < 0) {
      this.hotelsData[index].point = 0;
    }
    this.sortHotels();
  }

  deleteHotel(hotel: HotelInfo) {
    this.utilityService.confirmationService.confirm({
      message: hotel.name + "'i silmek istediğinizden emin misiniz?",
      header: 'Oteli Sil',
      accept: () => {
        this.deleteEvent(hotel);
        this.utilityService.messageService.add({
          severity: 'info',
          summary: 'Confirmed',
          detail: 'You have accepted',
        });
      },
      acceptLabel: 'Oteli Sil',
      reject: () => {},
      rejectLabel: 'Vazgeç',
    });
  }

  deleteEvent(hotel: HotelInfo) {
    if (this.hotelsData.length == 1) {
      this.hotelsData = [];
    } else {
      const index = this.hotelsData.indexOf(hotel);
      this.hotelsData.splice(index, 1);
    }
    this.setHotelsInfo();
    this.getPageData(null);
  }
}
