import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelDefComponent } from './components/hotel-def/hotel-def.component';
import { HotelListComponent } from './components/hotel-list/hotel-list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'hotel-list',
  },
  {
    path: 'hotel-list',
    component: HotelListComponent,
  },
  {
    path: 'hotel-def',
    component: HotelDefComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
