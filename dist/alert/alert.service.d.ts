import { ToastrService } from 'ngx-toastr';
export declare class AlertService {
    private toastr;
    private keepAfterRouteChange;
    constructor(toastr: ToastrService);
    success(message: string, options?: any): void;
    error(message: string, options?: any): void;
    info(message: string, options?: any): void;
    warn(message: string, options?: any): void;
    handleError(error: any): void;
    hasErrors(): boolean;
    clear(): void;
}
