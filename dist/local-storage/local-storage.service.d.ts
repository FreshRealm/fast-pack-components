import { LocalStorageConfigInterface } from '../config/config.interface';
export declare class LocalStorageService {
    private config;
    private prefix;
    constructor(config: LocalStorageConfigInterface);
    get(key: string, defaultItem?: any): any;
    set(key: string, value: any): void;
    remove(key: string): void;
    clear(): void;
    private getKey(key);
}
