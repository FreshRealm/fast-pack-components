import { EnvConfig } from './env-config.interface';
import { Inject, Injectable } from '@angular/core';

@Injectable()
export class EnvConfigService {
  constructor(@Inject('envConfig') public config: EnvConfig) {
  }
}
