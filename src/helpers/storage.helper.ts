import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Storage: navStorage } = Plugins;

@Injectable({ providedIn: 'root' })
export class Storage {
  constructor() {}

  async getObject<T>(key: string): Promise<T> {
    const ret = await navStorage.get({ key });
    return JSON.parse(ret.value);
  }

  async set(key: string, value: any): Promise<void> {
    await navStorage.set({
      key,
      value,
    });
  }

  async get(key: string): Promise<string> {
    const { value } = await navStorage.get({ key });
    return value;
  }

  async remove(key: string): Promise<void> {
    await navStorage.remove({ key });
  }

  async keys(): Promise<string[]> {
    const { keys } = await navStorage.keys();
    return keys;
  }

  async clear(): Promise<void> {
    await navStorage.clear();
  }
}
