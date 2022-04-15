import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelCreateComponent } from './hotel-create/hotel-create.component';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HotelListComponent, HotelCreateComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ButtonModule,
    DropdownModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class PagesModule {}
