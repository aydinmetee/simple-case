import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HotelListComponent } from './components/hotel-list/hotel-list.component';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { PaginatorModule } from 'primeng/paginator';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { HotelDefComponent } from './components/hotel-def/hotel-def.component';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [HotelListComponent, HotelDefComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ButtonModule,
    DropdownModule,
    ReactiveFormsModule,
    FormsModule,
    CardModule,
    PaginatorModule,
    ConfirmDialogModule,
    ToastModule,
    DialogModule,
    InputTextModule,
  ],
  providers: [MessageService, ConfirmationService],
})
export class PagesModule {}
