import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookingsPage } from './bookings.page';
import { Routes, RouterModule } from '@angular/router';
import { CreateBookingComponent } from './create-booking/create-booking.component';

const routes: Routes = [
  {
    path: '',
    component: BookingsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BookingsPage]
})
export class BookingsPageModule {}
