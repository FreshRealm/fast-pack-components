var UserModel = /** @class */ (function () {
    function UserModel(data) {
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
    UserModel.prototype.hasRole = function (roleSlug) {
        var foundRole;
        if (this.roles) {
            foundRole = this.roles.find(function (role) {
                return role.slug === roleSlug;
            });
        }
        return !!foundRole;
    };
    return UserModel;
}());
export { UserModel };
//# sourceMappingURL=user.model.js.map