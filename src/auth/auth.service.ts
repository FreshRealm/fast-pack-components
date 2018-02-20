import { UserModel } from '../user/user.model';
import { Injectable, Inject } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { HttpClient } from '@angular/common/http';
import { AppConfigInterface } from '../config/config.interface';


@Injectable()
export class AuthService {
  public user: UserModel;
  public token: string;

  constructor(
    private http: HttpClient,
    @Inject('appConfig') private appConfig: AppConfigInterface,
    private cookieService: CookieService
  ) {
    this.token = this.cookieService.get('fr-jwt');
  }

  isAuthenticated(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.http.get<UserModel>(`${this.appConfig.userServiceAPI}/api/v1/current-user`).subscribe(data => {
        if (!data || !data.roles) {
          resolve(false);
        }

        this.user = new UserModel(data);
        resolve(true);
      }, err => {
        console.log(err);

        resolve(false);
      });
    });

  }

  hasRequiredRole(roles: string | string[]): boolean {
    if (typeof roles === 'string') {
      roles = [roles];
    }
    if (!roles.length) {
      return true;
    }

    for (const roleSlug of roles) {
      if (this.user) {
        return !!(this.user.roles.find((role: any) => {
          return role.slug === roleSlug;
        }));
      }
      return false;
    }
    return true;
  }

  hasAllRoles(roles: string[]): boolean {
    if (this.user) {
      let fail = false;
      for (const roleSlug of roles) {
        fail = !this.hasRequiredRole(roleSlug);
        if (fail) {
          console.error('User did not have role: ' + roleSlug);
          console.error('User: ', this.user);
          return false;
        }
      }
    }
    return true;
  }
}
