import { AlertService } from './alert.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-center',
      timeOut: 0,
      extendedTimeOut: 0,
      closeButton: true
    })
  ],
  providers: [AlertService]
})
export class AlertModule { }
