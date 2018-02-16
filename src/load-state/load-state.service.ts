import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Injectable()
export class LoadStateService {
  public loading: boolean;

  constructor(private router: Router) {
    this.loading = false;

    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.loading = true;
      } else if (event instanceof NavigationEnd) {
        this.loading = false;
      } else if (event instanceof NavigationCancel) {
        this.loading = false;
      } else if (event instanceof NavigationError) {
        this.loading = false;
      }
    });
  }
}
