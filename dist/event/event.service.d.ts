import { HttpClient } from '@angular/common/http';
import { AppConfigInterface } from '../config/config.interface';
export declare class EventService {
    private http;
    private appConfig;
    constructor(http: HttpClient, appConfig: AppConfigInterface);
    createEvent(name: string, eventData?: any): void;
}
