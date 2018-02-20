import { CookieModule } from 'ngx-cookie';
import { AuthInterceptor } from './auth.interceptor';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppConfigInterface } from '../config/config.interface';

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
  static forRoot(config: AppConfigInterface): ModuleWithProviders {
    return {
      ngModule: AuthModule,
      providers: [
        {
          provide: 'appConfig',
          useValue: config
        }]
    };
  }
}
