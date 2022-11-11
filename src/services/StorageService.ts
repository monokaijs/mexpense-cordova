import {NativeStorage} from "@awesome-cordova-plugins/native-storage";

export class StorageService {
  static async getData(key: string, defaultValue: any) {
    try {
      return await NativeStorage.getItem(key);
    } catch (e) {
      return defaultValue;
    }
  }

  static setData(key: string, value: any) {
    return NativeStorage.setItem(key, value);
  }
}
