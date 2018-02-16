import { RoleModel } from '../role/role.model';

export class UserModel {
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

  constructor(data: any) {
    this.uuid = data.uuid;
    this.roles = data.roles;
    this.email = data.email;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.username = data.username;
    this.barcodeLogin = data.barcodeLogin;
    this.password = data.password;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;

  }

  public hasRole(roleSlug: string): boolean {
    let foundRole;
    if (this.roles) {
      foundRole = this.roles.find((role) => {
        return role.slug === roleSlug;
      });
    }
    return !!foundRole;
  }
}
