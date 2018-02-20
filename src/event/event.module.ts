import { HttpClientModule } from '@angular/common/http';
import { EventService } from './event.service';
import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { AppConfigInterface } from '../config/config.interface';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [EventService]
})
export class EventModule {
  static forRoot(config: AppConfigInterface): ModuleWithProviders {
    return {
      ngModule: EventModule,
      providers: [
        {
          provide: 'appConfig',
          useValue: config
        }]
    };
  }
}
