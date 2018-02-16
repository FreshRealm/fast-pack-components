import { LoadStateService } from './load-state.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [LoadStateService],
  declarations: [],
  exports: []
})
export class LoadStateModule { }
