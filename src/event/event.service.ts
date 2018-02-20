import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfigInterface } from '../config/config.interface';

@Injectable()
export class EventService {

  constructor(
    private http: HttpClient,
    @Inject('appConfig') private appConfig: AppConfigInterface
  ) { }

  public createEvent(name: string, eventData?: any) {
    const event = {
      name: name,
      type: 'fast-pack',
      warehouseCode: this.appConfig.warehouseCode,
      data: eventData
    };

    this.http.post(`${this.appConfig.eventServiceAPI}/api/v1/events`, event).toPromise().catch((err) => {
      // do nothing with rejection
    });
  }
}
