import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AlertService {
  private keepAfterRouteChange = false;

  constructor(private toastr: ToastrService) { }

  success(message: string, options?: any) {
    this.toastr.success(message, undefined, options);
  }

  error(message: string, options?: any) {
    this.toastr.error(message, undefined, options);
  }

  info(message: string, options?: any) {
    this.toastr.info(message, undefined, options);
  }

  warn(message: string, options?: any) {
    this.toastr.warning(message, undefined, options);
  }

  handleError(error: any) {
    if (error.error && error.error.message) {
      this.error(error.error.message);
    } else if (error.message) {
      this.error(error.message);
    } else {
      this.error(error);
    }
  }

  hasErrors(): boolean {
    if (!this.toastr.toasts || !this.toastr.toasts.length) {
      return false;
    }

    const errors = this.toastr.toasts.filter(toast => {
      return toast
        && toast.portal
        && toast.portal.instance
        && toast.portal.instance.toastPackage
        && toast.portal.instance.toastPackage.toastType === 'toast-error';
    });

    return !!errors.length;
  }

  clear() {
    this.toastr.clear();
  }
}
