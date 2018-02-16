import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnvConfigService } from '../env-config/env-config.service';

@Injectable()
export class EventService {

  constructor(
    private http: HttpClient,
    private envConfigService: EnvConfigService
  ) { }

  public createEvent(name: string, eventData?: any) {
    const event = {
      name: name,
      type: 'fast-pack',
      warehouseCode: this.envConfigService.config.environmentConfig.warehouseCode,
      data: eventData
    };

    this.http.post(`${this.envConfigService.config.environmentConfig.eventServiceAPI}/api/v1/events`, event).toPromise().catch((err) => {
      // do nothing with rejection
    });
  }
}
