import { AutoFocusDirective } from './autofocus.directive';
import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [],
  declarations: [AutoFocusDirective],
  exports: [AutoFocusDirective]
})
export class AutoFocusModule { }
