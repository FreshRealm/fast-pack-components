import { Injectable, Inject } from '@angular/core';
import { LocalStorageConfigInterface } from '../config/config.interface';

@Injectable()
export class LocalStorageService {
  private prefix: string;

  constructor(
    @Inject('localStorageConfig') private config: LocalStorageConfigInterface
  ) {
    this.prefix = config.prefix || '';
  }

  public get(key: string, defaultItem: any = null): any {
    const storedKey = this.getKey(key);
    const storedValue = localStorage.getItem(storedKey);

    if (!storedValue) {
      return defaultItem;
    }

    return JSON.parse(storedValue);
  }

  public set(key: string, value: any) {
    const storedKey = this.getKey(key);
    localStorage.setItem(storedKey, JSON.stringify(value));
  }

  public remove(key: string) {
    const storedKey = this.getKey(key);
    localStorage.removeItem(storedKey);
  }

  public clear() {
    if (!this.prefix) {
      return localStorage.clear();
    }

    const keys: string[] = [];
    for (let index = 0; index < localStorage.length; index++) {
      const key = localStorage.key(index);
      if (key) {
        keys.push(key);
      }
    }

    for (const key of keys) {
      if (key.startsWith(this.prefix + '.')) {
        localStorage.removeItem(key);
      }
    }
  }

  private getKey(key: string) {
    let storedKey = key;
    if (this.prefix) {
      storedKey = this.prefix + '.' + key;
    }
    return storedKey;
  }
}
