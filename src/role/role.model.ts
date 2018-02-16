export class RoleModel {
  slug: string;
  roleName: string;
  createdAt: Date;
  updatedAt: Date;
  updatedBy: string;

  constructor(data: any) {
    this.roleName = data.roleName;
    this.slug = data.slug;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
    this.updatedBy = data.updatedBy;
  }
}
