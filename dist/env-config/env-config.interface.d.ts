export interface EnvironmentConfigInterface {
    userServiceAPI: string;
    warehouseCode: string;
    eventServiceAPI: string;
    parentURL: string;
    serviceName: string;
}
export interface EnvConfig {
    environmentConfig: EnvironmentConfigInterface;
}
