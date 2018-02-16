import { CookieModule } from 'ngx-cookie';
import { AuthInterceptor } from './auth.interceptor';
import { AuthGuard } from './auth.guard';
import { EnvConfig } from './../env-config/env-config.interface';
import { AuthService } from './auth.service';
import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { EnvConfigService } from '../env-config/env-config.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    CookieModule.forChild(),
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    AuthInterceptor,
    AuthService
  ],
  declarations: [],
  exports: []
})
export class AuthModule {
  static forRoot(envConfig: EnvConfig): ModuleWithProviders {
    return {
      ngModule: AuthModule,
      providers: [
        EnvConfigService, {
          provide: 'envConfig',
          useValue: envConfig
        }]
    };
  }
}
