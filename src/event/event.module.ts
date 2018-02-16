import { EnvConfig } from './../env-config/env-config.interface';
import { HttpClientModule } from '@angular/common/http';
import { EventService } from './event.service';
import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { EnvConfigService } from '../env-config/env-config.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [EventService]
})
export class EventModule {
  static forRoot(envConfig: EnvConfig): ModuleWithProviders {
    return {
      ngModule: EventModule,
      providers: [
        EnvConfigService, {
          provide: 'envConfig',
          useValue: envConfig
        }]
    };
  }
}
