import { HttpClient } from '@angular/common/http';
import { EnvConfigService } from '../env-config/env-config.service';
export declare class EventService {
    private http;
    private envConfigService;
    constructor(http: HttpClient, envConfigService: EnvConfigService);
    createEvent(name: string, eventData?: any): void;
}
