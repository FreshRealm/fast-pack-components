var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Injectable, Inject } from '@angular/core';
var LocalStorageService = /** @class */ (function () {
    function LocalStorageService(config) {
        this.config = config;
        this.prefix = config.prefix || '';
    }
    LocalStorageService.prototype.get = function (key, defaultItem) {
        if (defaultItem === void 0) { defaultItem = null; }
        var storedKey = this.getKey(key);
        var storedValue = localStorage.getItem(storedKey);
        if (!storedValue) {
            return defaultItem;
        }
        return JSON.parse(storedValue);
    };
    LocalStorageService.prototype.set = function (key, value) {
        var storedKey = this.getKey(key);
        localStorage.setItem(storedKey, JSON.stringify(value));
    };
    LocalStorageService.prototype.remove = function (key) {
        var storedKey = this.getKey(key);
        localStorage.removeItem(storedKey);
    };
    LocalStorageService.prototype.clear = function () {
        if (!this.prefix) {
            return localStorage.clear();
        }
        var keys = [];
        for (var index = 0; index < localStorage.length; index++) {
            var key = localStorage.key(index);
            if (key) {
                keys.push(key);
            }
        }
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            if (key.startsWith(this.prefix + '.')) {
                localStorage.removeItem(key);
            }
        }
    };
    LocalStorageService.prototype.getKey = function (key) {
        var storedKey = key;
        if (this.prefix) {
            storedKey = this.prefix + '.' + key;
        }
        return storedKey;
    };
    LocalStorageService = __decorate([
        Injectable(),
        __param(0, Inject('localStorageConfig'))
    ], LocalStorageService);
    return LocalStorageService;
}());
export { LocalStorageService };
//# sourceMappingURL=local-storage.service.js.map