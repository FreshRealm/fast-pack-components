import { LocalStorageService } from './local-storage.service';
import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { LocalStorageConfigInterface } from '../config/config.interface';

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    LocalStorageService
  ],
  declarations: [],
  exports: []
})
export class LocalStorageModule {
  static forRoot(config: LocalStorageConfigInterface): ModuleWithProviders {
    return {
      ngModule: LocalStorageModule,
      providers: [{
        provide: 'localStorageConfig',
        useValue: config
      }]
    };
  }
}
