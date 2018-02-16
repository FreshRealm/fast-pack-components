import { RoleModel } from '../role/role.model';
export declare class UserModel {
    uuid: string;
    roles: RoleModel[];
    email: string;
    firstName: string;
    lastName: string;
    username: string;
    barcodeLogin: boolean;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    constructor(data: any);
    hasRole(roleSlug: string): boolean;
}
