import { ModuleWithProviders } from '@angular/core';
import { LocalStorageConfigInterface } from '../config/config.interface';
export declare class LocalStorageModule {
    static forRoot(config: LocalStorageConfigInterface): ModuleWithProviders;
}
