import { ProductNumberPipe } from './product-number.pipe';
import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [],
  declarations: [ProductNumberPipe],
  exports: [ProductNumberPipe]
})
export class ProductNumberModule { }
