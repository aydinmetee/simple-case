import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BaseComponent } from 'src/app/shared/components/base-component';
import { UtilityService } from 'src/app/shared/services/utility.service';

@Component({
  selector: 'app-hotel-def',
  templateUrl: './hotel-def.component.html',
  styleUrls: ['./hotel-def.component.scss'],
})
export class HotelDefComponent extends BaseComponent implements OnInit {
  form: FormGroup;
  isCreated = false;

  constructor(utilityService: UtilityService) {
    super(utilityService);

    this.form = this.builder.group({
      id: [null],
      name: [null],
      point: 5,
      creDate: [null],
    });
  }

  ngOnInit(): void {}

  createHotel() {
    this.hotelsData = this.getHotelsInfo();
    const modal = Object.assign({}, this.form.value);
    modal.creDate = new Date();
    modal.id = 'TEST-' + Math.floor(Math.random() * 101).toString();
    this.hotelsData.push(modal);
    this.setHotelsInfo();
    this.isCreated = true;
  }
}
